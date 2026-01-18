// Type definitions for the portfolio website

export interface ProjectLink {
    github?: string;
    demo?: string | null;
}

export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    tech: string[];
    timeline: string;
    impact: string[];
    links: ProjectLink;
    status: 'completed' | 'in-development';
    featured: boolean;
}

export interface Experience {
    company: string;
    role: string;
    duration: string;
    location: string;
    type: string;
    achievements: string[];
    technologies: string[];
}

export interface Certification {
    name: string;
    issuer: string | null;
    date: string;
    credentialId: string | null;
    skills: string[];
}

export interface PersonalInfo {
    name: string;
    role: string;
    education: string;
    graduation: string;
    experience_years: string;
    eihwam: string;
    location: string;
}

export interface HobbyCategory {
    games?: string[];
    activities?: string[];
    description: string;
}

export interface Hobbies {
    gaming: HobbyCategory;
    fitness: HobbyCategory;
    interests: string[];
}

export interface Personality {
    traits: string[];
    work_style: string;
    fun_fact: string;
}

export interface Skills {
    programming: {
        proficient: string[];
        intermediate: string[];
        beginner: string[];
    };
    frameworks: {
        frontend: string[];
        backend: string[];
        ml: string[];
    };
    databases: string[];
    tools: string[];
    specializations: string[];
}

export interface KnowledgeBase {
    personal: PersonalInfo;
    hobbies: Hobbies;
    personality: Personality;
    skills: Skills;
    experience: Experience[];
    projects: Array<{
        name: string;
        description: string;
        tech: string[];
        impact: string[];
        timeline: string;
    }>;
    certifications: Certification[];
    research: string[];
    tech_roles: string[];
    non_tech_roles: string[];
}

export interface AIConfig {
    useAPI: boolean;
    model: string;
}

export interface ResponseTemplates {
    greeting: string[];
    default: string;
    non_tech_role: string;
    no_match: string;
}

// Gemini AI types
export interface GenerativeModel {
    generateContent: (prompt: string) => Promise<GenerateContentResult>;
    startChat: (config: ChatConfig) => Chat;
}

export interface Chat {
    sendMessage: (message: string) => Promise<GenerateContentResult>;
}

export interface ChatConfig {
    history: Array<{
        role: 'user' | 'model';
        parts: Array<{ text: string }>;
    }>;
}

export interface GenerateContentResult {
    response: {
        text: () => string;
    };
}

export interface GoogleGenerativeAI {
    getGenerativeModel: (config: { model: string }) => GenerativeModel;
}

// Animation types
export type AnimationState = 'idle' | 'thinking' | 'happy' | 'professional' | 'waving' | 'typing';
export type AnimationMode = 'css' | 'lottie' | 'static';

export interface AnimationPaths {
    [key: string]: string;
}

// Lottie Animation (global)
declare global {
    interface Lottie {
        loadAnimation: (config: {
            container: HTMLElement;
            renderer: string;
            loop: boolean;
            autoplay: boolean;
            path: string;
        }) => LottieAnimation;
    }

    interface LottieAnimation {
        destroy: () => void;
    }

    var lottie: Lottie | undefined;
}
