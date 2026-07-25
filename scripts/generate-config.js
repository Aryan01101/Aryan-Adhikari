// Generate config.ts from environment variables
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

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
