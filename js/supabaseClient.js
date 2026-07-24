import { API_CONFIG } from './config.js';
const supabaseUrl = API_CONFIG.SUPABASE_URL || '';
const supabaseAnonKey = API_CONFIG.SUPABASE_ANON_KEY || '';
export const supabase = (!supabaseUrl || !supabaseAnonKey)
    ? null
    : window.supabase.createClient(supabaseUrl, supabaseAnonKey);
if (!supabase) {
    console.warn('⚠️ Supabase credentials not found. Using fallback mode.');
    console.warn('To enable database features, add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local');
}
export async function getExperience() {
    if (!supabase)
        return [];
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
export async function getProjects(featuredOnly = false) {
    if (!supabase)
        return [];
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
export async function getSkills() {
    if (!supabase)
        return {};
    const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('category', { ascending: true })
        .order('display_order', { ascending: true });
    if (error) {
        console.error('Error fetching skills:', error);
        return {};
    }
    const grouped = {};
    data?.forEach((skill) => {
        if (!grouped[skill.category]) {
            grouped[skill.category] = [];
        }
        grouped[skill.category].push(skill);
    });
    return grouped;
}
export async function getCertifications() {
    if (!supabase)
        return [];
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
export async function createExperience(experience) {
    const { data, error } = await supabase
        .from('experience')
        .insert([experience])
        .select();
    if (error)
        throw error;
    return data[0];
}
export async function updateExperience(id, updates) {
    const { data, error } = await supabase
        .from('experience')
        .update(updates)
        .eq('id', id)
        .select();
    if (error)
        throw error;
    return data[0];
}
export async function deleteExperience(id) {
    const { error } = await supabase
        .from('experience')
        .delete()
        .eq('id', id);
    if (error)
        throw error;
}
export async function createProject(project) {
    const { data, error } = await supabase
        .from('projects')
        .insert([project])
        .select();
    if (error)
        throw error;
    return data[0];
}
export async function updateProject(id, updates) {
    const { data, error } = await supabase
        .from('projects')
        .update(updates)
        .eq('id', id)
        .select();
    if (error)
        throw error;
    return data[0];
}
export async function deleteProject(id) {
    const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);
    if (error)
        throw error;
}
//# sourceMappingURL=supabaseClient.js.map