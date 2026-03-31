// Generate config.ts from environment variables
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'src', 'config.ts');
const apiKey = process.env.GEMINI_API_KEY || '';

if (!apiKey) {
    console.warn('⚠️  Warning: GEMINI_API_KEY environment variable not set!');
}

const configContent = `export const API_CONFIG = {
    GEMINI_API_KEY: '${apiKey}'
};
`;

fs.writeFileSync(configPath, configContent);
console.log('✓ Generated src/config.ts from environment variables');
