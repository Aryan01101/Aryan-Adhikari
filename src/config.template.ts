// Template configuration file
// Copy this to config.ts and add your API key
// Or use environment variables for production deployment

export const API_CONFIG = {
    GEMINI_API_KEY: process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || 'YOUR_API_KEY_HERE'
};
