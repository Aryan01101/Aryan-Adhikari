import { createClient } from '@supabase/supabase-js';

// Environment variables (set these in .env.local)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('⚠️ Supabase credentials not found. Using fallback mode.');
    console.warn('To enable database features, add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ========================================
// DATABASE QUERY FUNCTIONS
// ========================================

export interface Experience {
    id: string;
    company: string;
    role: string;
    duration: string;
    location: string;
    type: string;
    achievements: string[];
    technologies: string[];
    display_order: number;
}

export interface Project {
    id: string;
    project_id: string;
    title: string;
    short_description: string;
    full_description: string;
    tech: string[];
    timeline: string;
    impact: string[];
    github_link: string | null;
    demo_link: string | null;
    status: string;
    featured: boolean;
    display_order: number;
}

export interface Skill {
    id: string;
    category: string;
    skill_name: string;
    display_order: number;
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date_completed: string;
    credential_id: string | null;
    skills: string[];
    in_progress: boolean;
    display_order: number;
}

/**
 * Fetch all experience entries, ordered by display_order
 */
export async function getExperience(): Promise<Experience[]> {
    const { data, error } = await supabase
        .from('experience')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error('Error fetching experience:', error);
        return [];
    }

    return data || [];
}

/**
 * Fetch all projects, ordered by display_order
 */
export async function getProjects(featuredOnly = false): Promise<Project[]> {
    let query = supabase
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true });

    if (featuredOnly) {
        query = query.eq('featured', true);
    }

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching projects:', error);
        return [];
    }

    return data || [];
}

/**
 * Fetch all skills, grouped by category
 */
export async function getSkills(): Promise<Record<string, Skill[]>> {
    const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('category', { ascending: true })
        .order('display_order', { ascending: true });

    if (error) {
        console.error('Error fetching skills:', error);
        return {};
    }

    // Group by category
    const grouped: Record<string, Skill[]> = {};
    data?.forEach((skill) => {
        if (!grouped[skill.category]) {
            grouped[skill.category] = [];
        }
        grouped[skill.category].push(skill);
    });

    return grouped;
}

/**
 * Fetch all certifications, ordered by display_order
 */
export async function getCertifications(): Promise<Certification[]> {
    const { data, error } = await supabase
        .from('certifications')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error('Error fetching certifications:', error);
        return [];
    }

    return data || [];
}

// ========================================
// ADMIN CRUD OPERATIONS
// ========================================

/**
 * Create new experience entry
 */
export async function createExperience(experience: Omit<Experience, 'id'>) {
    const { data, error } = await supabase
        .from('experience')
        .insert([experience])
        .select();

    if (error) throw error;
    return data[0];
}

/**
 * Update existing experience entry
 */
export async function updateExperience(id: string, updates: Partial<Experience>) {
    const { data, error } = await supabase
        .from('experience')
        .update(updates)
        .eq('id', id)
        .select();

    if (error) throw error;
    return data[0];
}

/**
 * Delete experience entry
 */
export async function deleteExperience(id: string) {
    const { error } = await supabase
        .from('experience')
        .delete()
        .eq('id', id);

    if (error) throw error;
}

// Similar CRUD functions for projects, skills, and certifications...

/**
 * Create new project
 */
export async function createProject(project: Omit<Project, 'id'>) {
    const { data, error } = await supabase
        .from('projects')
        .insert([project])
        .select();

    if (error) throw error;
    return data[0];
}

/**
 * Update existing project
 */
export async function updateProject(id: string, updates: Partial<Project>) {
    const { data, error } = await supabase
        .from('projects')
        .update(updates)
        .eq('id', id)
        .select();

    if (error) throw error;
    return data[0];
}

/**
 * Delete project
 */
export async function deleteProject(id: string) {
    const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

    if (error) throw error;
}
