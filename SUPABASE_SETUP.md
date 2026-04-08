# Supabase Setup Instructions

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up / Log in
3. Click "New Project"
4. Fill in:
   - **Name**: `portfolio-db` (or your choice)
   - **Database Password**: Create a strong password and SAVE IT
   - **Region**: Choose closest to you (e.g., `ap-southeast-1` for Sydney)
5. Click "Create new project" (takes ~2 minutes)

## Step 2: Get Your Credentials

1. Once project is created, go to **Settings** (gear icon on left sidebar)
2. Click **API** in the settings menu
3. Copy these values:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **anon public** key (the long string under "Project API keys")

## Step 3: Create Database Tables

1. In your Supabase project, click **SQL Editor** (on left sidebar)
2. Click "New query"
3. Copy the ENTIRE contents of `supabase-schema.sql` file
4. Paste into the query editor
5. Click "Run" or press Cmd/Ctrl + Enter
6. You should see "Success. No rows returned" ✅

## Step 4: Configure Your Portfolio

1. Create a file named `.env.local` in your project root
2. Add these lines (replace with YOUR values):

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

3. Make sure `.env.local` is in your `.gitignore` (for security)

## Step 5: Add to Vercel (for deployment)

1. Go to your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add the same two variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Click "Save"

## Step 6: Populate Database

Run the migration script to populate your database with current LinkedIn data:

```bash
npm run migrate-data
```

This will:
- Read your current LinkedIn data
- Insert all experience, projects, skills, and certifications into Supabase
- Set proper display orders

## Step 7: Test

1. Open your portfolio locally: `npm run dev`
2. Data should now be loading from Supabase
3. Go to `http://localhost:5173/admin` to test the admin panel
4. Login with password: `admin123` (you can change this later)

## Troubleshooting

### "Failed to fetch"
- Check if SUPABASE_URL and SUPABASE_ANON_KEY are correct
- Make sure you're using the **anon public** key, not the service_role key

### "No data showing"
- Run the migration script: `npm run migrate-data`
- Check Supabase Table Editor to see if data was inserted

### "RLS policy error"
- In Supabase, go to **Authentication** → **Policies**
- Make sure "Enable RLS" is checked
- Policies should allow public SELECT and authenticated INSERT/UPDATE/DELETE

## Security Notes

1. ✅ The **anon key** is safe to expose publicly (it's used in frontend)
2. ❌ NEVER expose your **service_role** key (it has full admin access)
3. ✅ Row Level Security (RLS) is enabled to protect your data
4. ✅ Admin panel requires password authentication
5. 🔒 For production, consider adding Supabase Auth for admin panel
