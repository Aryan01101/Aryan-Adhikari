-- ========================================
-- INSERT NEW EXPERIENCE AND PROJECTS DATA
-- ========================================
-- Run this in Supabase SQL Editor after running supabase-schema.sql

-- ========================================
-- EXPERIENCE DATA
-- ========================================

INSERT INTO experience (company, role, duration, location, type, technologies, achievements, display_order) VALUES
(
    'Webvine',
    'Web Engineer Intern',
    'Jun 2026 – Present',
    'Redfern, Sydney NSW',
    'Internship',
    '["Microsoft 365", "Power Automate", "Copilot Workflows", "SharePoint", "Microsoft Teams", "Adaptive Cards", "TypeScript", "Python"]'::jsonb,
    '[
        "Built a pilot agentic email triage system within an enterprise client''s M365 tenant: Power Automate triggers on inbound HR emails, Copilot Workflows ground AI-drafted replies against SharePoint policy documents, and Adaptive Card approval flows post to Teams for human sign-off before sending.",
        "Implemented status logging back to a SharePoint list for a full compliance audit trail with no infrastructure required outside the client''s existing M365 environment.",
        "Owned the full delivery lifecycle end to end, from scoping client requirements through to a working production solution."
    ]'::jsonb,
    0
),
(
    'HealthShare via Jacaranda Flame Consulting',
    'Software Engineer Intern',
    'Nov 2024 – Feb 2025',
    'Sydney, NSW',
    'Internship',
    '["Python", "scikit-learn", "PostgreSQL", "pandas", "NumPy", "KMeans Clustering", "Isolation Forest", "Neural Networks"]'::jsonb,
    '[
        "Built an ML validation pipeline across 100,000+ healthcare practitioner records using KMeans Clustering, Isolation Forest, and Neural Networks in Python, scikit-learn, and PostgreSQL, reaching 84% accuracy on a proof of concept.",
        "Designed the system end to end: scoped the problem, selected and compared three model approaches, built the ETL pipeline, and iterated on thresholds to balance precision and recall given the sensitivity of healthcare data.",
        "Estimated 65% reduction in manual verification workload across 10–20 staff, representing approximately $400,000 in projected annual labour savings if taken to production.",
        "Presented findings and a recommended automation pathway directly to the CEO, CTO, and senior leadership team."
    ]'::jsonb,
    1
),
(
    'Code Camp',
    'Coding Instructor',
    'Apr 2023 – Present',
    'Sydney, NSW',
    'Contract',
    '["Scratch", "Python", "JavaScript", "Visual Programming"]'::jsonb,
    '[
        "Taught programming concepts to 50+ students aged 5–13 at Australia''s largest children''s coding provider, across 350+ schools and 250,000+ students nationally.",
        "Adapted explanations in real time for mixed technical levels across in-person and online sessions during school holiday camps."
    ]'::jsonb,
    2
);

-- ========================================
-- PROJECTS DATA
-- ========================================

INSERT INTO projects (project_id, title, short_description, full_description, tech, timeline, impact, github_link, demo_link, status, featured, display_order) VALUES
(
    'hermes',
    'Hermes – AI Communications Manager',
    'Deployed agentic communications platform orchestrating multi-channel messaging via LangGraph and the Claude API.',
    'Hermes is a production agentic communications platform deployed on GCP Cloud Run. LangGraph orchestrates multi-step tool-calling loops across Twilio, Supabase, and the Anthropic Claude API to autonomously draft, route, and send contextual messages. The agent runtime handles state persistence, interruption, and conditional branching across conversation threads without requiring human input at each step.',
    '["LangGraph", "FastAPI", "Python", "Anthropic Claude API", "Twilio", "Supabase", "GCP Cloud Run", "Docker"]'::jsonb,
    '2025',
    '[
        "Deployed to production on GCP Cloud Run with full state persistence and conditional branching",
        "Demonstrates true agentic behaviour with multi-step tool-calling loops and human-in-the-loop patterns"
    ]'::jsonb,
    NULL,
    NULL,
    'deployed',
    true,
    0
),
(
    'lumina',
    'Lumina – Local-First AI Desktop Companion',
    'Privacy-preserving on-device AI companion with a LangGraph StateGraph and hybrid RAG memory pipeline.',
    'Lumina is a fully local AI desktop companion built in TypeScript and Electron with no cloud dependencies. A 6-node LangGraph StateGraph evaluates 5 behavioural gates before deciding to engage the user. Memory is powered by a hybrid RAG pipeline combining BM25 full-text search, vector KNN via sqlite-vec, and cross-encoder reranking, achieving sub-250ms retrieval latency. A real-time activity classifier tracks 8 cognitive states using SHA-256 hashed window titles for privacy by design.',
    '["TypeScript", "Electron", "LangGraph", "Ollama", "sqlite-vec", "Python", "BM25", "Cross-encoder reranking"]'::jsonb,
    'Mar 2026',
    '[
        "Sub-250ms hybrid RAG retrieval with no cloud dependency",
        "6-node LangGraph StateGraph with 5-gate interruption intelligence",
        "8-state cognitive activity classifier with SHA-256 privacy hashing"
    ]'::jsonb,
    NULL,
    NULL,
    'active',
    true,
    1
),
(
    'screenbridge',
    'ScreenBridge – Privacy-First Desktop Control SDK',
    'Open-source MCP middleware enabling LLM agents to control desktop environments with in-flight PII redaction.',
    'ScreenBridge is an open-source Model Context Protocol middleware layer that enables LLM agents to control desktop environments. A 3-layer hybrid vision architecture combines Accessibility API, Vision Detector, and DOM extraction to give agents reliable cross-application control. All data passing through the pipeline is scanned and redacted in-flight by Microsoft Presidio before reaching the model, ensuring no PII is exposed.',
    '["Python", "FastAPI", "Microsoft Presidio", "MCP", "Accessibility API", "Computer Vision"]'::jsonb,
    '2025',
    '[
        "3-layer hybrid vision architecture for reliable cross-application desktop control",
        "In-flight PII redaction via Microsoft Presidio before data reaches the model",
        "Open-source and publicly available"
    ]'::jsonb,
    NULL,
    NULL,
    'active',
    true,
    2
),
(
    'yaake',
    'YAAKE – AI Recruitment Platform',
    'AI-powered recruitment platform with Gemini-powered resume matching and ATS scoring, built by a 5-person team.',
    'YAAKE is an AI recruitment platform built by a 5-person team in 8 weeks. The platform integrates the Google Gemini API for automated resume-to-job matching, AI resume parsing, and ATS compatibility scoring across 3 user types with JWT auth and 10+ feature modules. Designed in Figma and deployed on Vercel.',
    '["React", "Node.js", "TypeScript", "Google Gemini API", "MongoDB", "JWT", "TailwindCSS", "Figma", "Vercel"]'::jsonb,
    'Aug – Oct 2024',
    '[
        "384 GitHub views and 82 clones within 14 days of launch",
        "MVP shipped in 8 weeks across a 5-person team",
        "3 user types with role-based access control and 10+ feature modules"
    ]'::jsonb,
    NULL,
    NULL,
    'shipped',
    false,
    3
);
