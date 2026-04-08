-- Temporary: Allow inserts for initial data migration
-- Run this in Supabase SQL Editor, then run the migration

-- Drop restrictive policies temporarily
DROP POLICY IF EXISTS "Allow all operations for authenticated users on experience" ON experience;
DROP POLICY IF EXISTS "Allow all operations for authenticated users on projects" ON projects;
DROP POLICY IF EXISTS "Allow all operations for authenticated users on skills" ON skills;
DROP POLICY IF EXISTS "Allow all operations for authenticated users on certifications" ON certifications;

-- Allow public inserts temporarily (for migration only)
CREATE POLICY "Temp allow all on experience" ON experience FOR ALL USING (true);
CREATE POLICY "Temp allow all on projects" ON projects FOR ALL USING (true);
CREATE POLICY "Temp allow all on skills" ON skills FOR ALL USING (true);
CREATE POLICY "Temp allow all on certifications" ON certifications FOR ALL USING (true);
