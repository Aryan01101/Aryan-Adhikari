# 🚀 Getting Started with Dynamic Portfolio (Supabase)

Your portfolio is now ready to use **Supabase** as a dynamic database! This means:
- ✅ No more hardcoded data in your code
- ✅ Update your experience/projects from anywhere
- ✅ Data stays up-to-date automatically
- ✅ Optional admin panel to manage everything

---

## 📋 What You Need To Do (Step-by-Step)

### Step 1: Create Your Supabase Account (5 minutes)

1. Go to **https://supabase.com**
2. Click "Start your project" (Sign up with GitHub is easiest)
3. Once logged in, click **"New Project"**
4. Fill in the project details:
   ```
   Organization: (create new or use existing)
   Name: portfolio-db
   Database Password: [CREATE A STRONG PASSWORD & SAVE IT!]
   Region: ap-southeast-1 (Sydney/Singapore - closest to you)
   ```
5. Click **"Create new project"**
6. ⏳ Wait ~2 minutes for the project to be created

---

### Step 2: Get Your API Credentials (2 minutes)

1. In your Supabase project, click the **⚙️ Settings** icon (bottom left)
2. Click **"API"** in the Settings menu
3. You'll see two important values:

   📝 **Copy these somewhere safe:**
   ```
   Project URL: https://xxxxxxxxxxxxx.supabase.co
   anon public key: eyJhbGc............ (very long string)
   ```

---

### Step 3: Set Up Database Tables (3 minutes)

1. In Supabase, click **"SQL Editor"** (on the left sidebar)
2. Click **"New query"** button
3. Open the file `supabase-schema.sql` in your project folder
4. **Copy the ENTIRE contents** of that file
5. **Paste** it into the Supabase SQL Editor
6. Click **"Run"** (or press Cmd+Enter / Ctrl+Enter)
7. You should see: ✅ **"Success. No rows returned"**

---

### Step 4: Configure Your Portfolio (2 minutes)

1. In your project folder, create a file named `.env.local`
2. Copy this template and **replace with YOUR values**:

   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-from-step-2
   VITE_ADMIN_PASSWORD=change-this-password
   ```

3. Save the file

---

### Step 5: Migrate Your Data (1 minute)

Run this command in your terminal:

```bash
npm run migrate-data
```

You should see:
```
🚀 Starting data migration...
🗑️  Clearing existing data...
✅ Old data cleared
📝 Migrating experience data...
✅ Migrated 8 experience entries
🛠️  Migrating skills data...
✅ Migrated 32 skills
✨ Migration completed successfully!
```

---

### Step 6: Verify Everything Works (2 minutes)

1. Go to your Supabase project
2. Click **"Table Editor"** (left sidebar)
3. You should see these tables with data:
   - `experience` (8 rows)
   - `skills` (32 rows)
   - `projects` (will add in future)
   - `certifications` (will add in future)

4. Click on each table to see your data! 🎉

---

### Step 7: Test Locally (1 minute)

```bash
npm run dev
```

Open your portfolio in the browser - it should now be loading data from Supabase!

---

## 🎨 Next Steps: Admin Panel (Coming Soon)

I'm building an admin panel where you can:
- ✏️ Edit your experience without touching code
- ➕ Add new projects instantly
- 🗑️ Delete old items
- 📊 Reorder everything with drag-and-drop

**Location:** `yourportfolio.com/admin`

---

## 🔧 Troubleshooting

### "Failed to fetch" error
**Problem:** Wrong credentials
**Solution:**
- Double-check your `.env.local` file
- Make sure you copied the **anon public** key (not service_role!)
- Restart your dev server after changing .env.local

### "No data showing on website"
**Problem:** Migration didn't run or failed
**Solution:**
- Run `npm run migrate-data` again
- Check Supabase Table Editor to see if data exists
- Check browser console for errors (F12)

### "Migration script error"
**Problem:** Environment variables not loaded
**Solution:**
- Make sure `.env.local` exists in the project root
- Check that variable names match exactly (VITE_SUPABASE_URL, etc.)
- Try running: `node migrate-data.js` directly

---

## 📱 Deploying to Vercel

1. Go to your Vercel project dashboard
2. Settings → **Environment Variables**
3. Add these variables:
   ```
   VITE_SUPABASE_URL = your-url-here
   VITE_SUPABASE_ANON_KEY = your-key-here
   ```
4. Click "Save"
5. Redeploy your project

---

## 🔐 Security Notes

✅ **SAFE to commit:**
- `.env.local.example`
- All `.ts` and `.js` files
- `supabase-schema.sql`

❌ **NEVER commit:**
- `.env.local` (has your real credentials)
- Make sure `.env.local` is in `.gitignore`

✅ **Safe to expose:**
- `VITE_SUPABASE_URL` (public)
- `VITE_SUPABASE_ANON_KEY` (public, has limited permissions)

❌ **NEVER expose:**
- Your database password
- `service_role` key (if you have one)

---

## 🎯 What's Different Now?

### Before (Hardcoded):
- Experience data in `src/main.ts`
- Had to edit code to update portfolio
- Had to commit & push every change
- Had to wait for Vercel deployment

### After (Dynamic):
- Experience data in Supabase database
- Update from database directly
- Changes appear instantly
- No code changes needed

---

## 💡 Future Enhancements

Once this is working, we can add:
- 🎨 Admin dashboard at `/admin`
- 📊 Analytics (view counts, popular projects)
- 🔄 Auto-sync with LinkedIn (optional)
- 📧 Contact form submissions to database
- 🖼️ Image uploads for projects

---

## ❓ Need Help?

If you run into issues:
1. Check the Troubleshooting section above
2. Look at browser console (F12 → Console tab)
3. Check Supabase logs (Logs section in Supabase)
4. Make sure all steps were followed exactly

---

Ready to get started? **Follow Step 1!** ☝️
