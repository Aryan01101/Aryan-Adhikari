# Vercel Deployment Guide

This guide explains how to deploy your portfolio to Vercel.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com)
2. Your GitHub repository connected to Vercel
3. A Google Gemini API key

## Setup Instructions

### 1. Environment Variables

In your Vercel project dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following variable:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Your Google Gemini API key (e.g., `AIzaSy...`)
   - **Environment**: Select all (Production, Preview, Development)

### 2. Build Settings

Vercel should automatically detect your build settings from `vercel.json`, but verify:

- **Build Command**: `npm run build`
- **Output Directory**: `public`
- **Install Command**: `npm install`

### 3. Deploy

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Configure Vercel deployment"
   git push
   ```

2. Vercel will automatically deploy your site

3. Check the deployment logs if there are any errors

## Build Process

The build process works as follows:

1. `generate-config`: Creates `src/config.ts` from the `GEMINI_API_KEY` environment variable
2. `clean`: Removes old `public/` directory
3. `tsc`: Compiles TypeScript from `src/` to `js/`
4. `copy-assets`: Copies all static files and compiled JS to `public/`

## Local Development

For local development, keep your `src/config.ts` file with your API key:

```bash
npm run dev      # Compile TypeScript once
npm run watch    # Watch mode for development
npm run serve    # Start local server
```

## Troubleshooting

### Build fails on Vercel

- Check the build logs in Vercel dashboard
- Verify the `GEMINI_API_KEY` environment variable is set
- Ensure all dependencies are listed in `package.json`

### Bamboo AI doesn't work

- Verify the API key is valid
- Check browser console for errors
- Ensure the Gemini AI SDK is loading from the CDN

### 404 errors

- Verify `outputDirectory` is set to `public` in `vercel.json`
- Check that the build completed successfully
- Ensure all files are in the `public/` directory after build

## Security Notes

- **Never commit `src/config.ts`** to Git (it's gitignored)
- Always use environment variables for API keys in production
- The API key is exposed in the browser, so:
  - Set up API key restrictions in Google Cloud Console
  - Restrict to your domain only
  - Monitor usage regularly
