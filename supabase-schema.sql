-- ========================================
-- PORTFOLIO DATABASE SCHEMA
-- ========================================
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ========================================
-- EXPERIENCE TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS experience (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company TEXT NOT NULL,
    role TEXT NOT NULL,
    duration TEXT NOT NULL,
    location TEXT NOT NULL,
    type TEXT NOT NULL, -- 'Consulting', 'Internship', 'Part-time', 'Mentorship'
    achievements JSONB NOT NULL DEFAULT '[]'::jsonb,
    technologies JSONB NOT NULL DEFAULT '[]'::jsonb,
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- PROJECTS TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    tech JSONB NOT NULL DEFAULT '[]'::jsonb,
    timeline TEXT NOT NULL,
    impact JSONB NOT NULL DEFAULT '[]'::jsonb,
    github_link TEXT,
    demo_link TEXT,
    status TEXT NOT NULL DEFAULT 'completed', -- 'completed', 'in-development'
    featured BOOLEAN DEFAULT false,
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- SKILLS TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category TEXT NOT NULL, -- 'Languages', 'Frontend', 'Backend', 'Databases', 'ML/AI', 'Tools & Practices'
    skill_name TEXT NOT NULL,
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- CERTIFICATIONS TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS certifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    issuer TEXT NOT NULL,
    date_completed TEXT NOT NULL,
    credential_id TEXT,
    skills JSONB NOT NULL DEFAULT '[]'::jsonb,
    in_progress BOOLEAN DEFAULT false,
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- INDEXES FOR PERFORMANCE
-- ========================================
CREATE INDEX IF NOT EXISTS idx_experience_order ON experience(display_order);
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects(display_order);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category);
CREATE INDEX IF NOT EXISTS idx_certs_order ON certifications(display_order);

-- ========================================
-- ROW LEVEL SECURITY (RLS)
-- ========================================
-- Enable RLS on all tables
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access on experience"
    ON experience FOR SELECT
    USING (true);

CREATE POLICY "Allow public read access on projects"
    ON projects FOR SELECT
    USING (true);

CREATE POLICY "Allow public read access on skills"
    ON skills FOR SELECT
    USING (true);

CREATE POLICY "Allow public read access on certifications"
    ON certifications FOR SELECT
    USING (true);

-- Admin write access (you'll set this up with Supabase auth)
-- For now, disable RLS for development (you can enable it later with proper auth)
CREATE POLICY "Allow all operations for authenticated users on experience"
    ON experience FOR ALL
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow all operations for authenticated users on projects"
    ON projects FOR ALL
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow all operations for authenticated users on skills"
    ON skills FOR ALL
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow all operations for authenticated users on certifications"
    ON certifications FOR ALL
    USING (auth.role() = 'authenticated');

-- ========================================
-- UPDATED_AT TRIGGER FUNCTION
-- ========================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to all tables
CREATE TRIGGER update_experience_updated_at BEFORE UPDATE ON experience
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_skills_updated_at BEFORE UPDATE ON skills
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_certifications_updated_at BEFORE UPDATE ON certifications
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
