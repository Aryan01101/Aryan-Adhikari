import { GoogleGenerativeAI } from "@google/generative-ai";

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10; // 10 requests per minute per IP

function getRateLimitKey(request: Request): string {
  // Try to get real IP from headers (behind proxies/CDN)
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwarded?.split(",")[0] || realIp || "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // Reset or create new record
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }

  record.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    // Rate limiting check
    const ip = getRateLimitKey(request);
    if (!checkRateLimit(ip)) {
      return Response.json(
        { error: "Rate limit exceeded. Please try again later." },
        { status: 429 }
      );
    }

    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json({ error: "Missing message" }, { status: 400 });
    }

    // Additional validation: limit message length
    if (message.length > 5000) {
      return Response.json({ error: "Message too long (max 5000 characters)" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "GEMINI_API_KEY not set on server" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      generationConfig: {
        maxOutputTokens: 1000, // Limit response length to control costs
        temperature: 0.7,
      }
    });

    const result = await model.generateContent(message);
    const text = result.response.text();

    return Response.json({ text }, { status: 200 });
  } catch (err: any) {
    // Log error but don't expose internal details
    console.error("Gemini API error:", err);
    return Response.json({ error: "Failed to generate response" }, { status: 500 });
  }
}
