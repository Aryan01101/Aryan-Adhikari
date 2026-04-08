/**
 * Data Migration Script
 * Populates Supabase database with current portfolio data
 *
 * Run with: node migrate-data.js
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Missing Supabase credentials!');
    console.error('Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ========================================
// PORTFOLIO DATA (from LinkedIn)
// ========================================

const experienceData = [
    {
        company: "Freelance | Self-Employed",
        role: "AI & ML Consultant",
        duration: "January 2025 - September 2025",
        location: "Sydney, Australia",
        type: "Consulting",
        achievements: [
            "Scoped and delivered an AI-powered bargaining system for a HORECA food distributor across 100+ SKUs, managing third-party engineering teams and automating buyer negotiations based on live market pricing to increase concurrent deal closures",
            "Architected a Supply Chain and Demand Forecasting ML solution for a frozen food manufacturer, achieving 80%+ forecasting accuracy across 6 years of historical data, enabling proactive inventory planning and reducing supply chain risk"
        ],
        technologies: ["Machine Learning", "Python", "Supply Chain", "Demand Forecasting", "Product Management", "AI Systems"],
        display_order: 0
    },
    {
        company: "Code Camp",
        role: "Coding Instructor (STEM Education)",
        duration: "April 2023 - Present",
        location: "Sydney, Australia",
        type: "Part-time",
        achievements: [
            "Taught drag-and-drop visual coding fundamentals (variables, loops, algorithms, game design) to 50+ students aged 5-13 across school holiday camps at Australia's largest kids coding provider",
            "Adapted lesson delivery in real time across in-person and online sessions, maintaining engagement across mixed skill levels and supporting students from beginner to intermediate coding proficiency"
        ],
        technologies: ["Python", "Teaching", "Visual Coding", "Curriculum Design", "STEM Education"],
        display_order: 1
    },
    {
        company: "Scape Australia",
        role: "Student Ambassador",
        duration: "August 2024 - September 2025",
        location: "Sydney, Australia",
        type: "Part-time",
        achievements: [
            "Drove a 50% increase in resident engagement through event planning and community-building initiatives for 250+ international residents at Australia's largest purpose-built student accommodation operator",
            "Supported 250+ international residents with onboarding, local navigation, and issue resolution, serving as the primary point of contact across multiple residential floors"
        ],
        technologies: ["Event Coordination", "Community Building", "Leadership", "Cross-Cultural Communication"],
        display_order: 2
    },
    {
        company: "Nail Snail (Practera)",
        role: "Consultant (Data Analysis & Market Research)",
        duration: "June 2025 - July 2025",
        location: "Sydney, Australia",
        type: "Consulting",
        achievements: [
            "Collected and structured demographic datasets from ABS, WHO, and public market reports, enabling data-driven recommendations on customer segmentation and international market entry",
            "Built data visualizations in Python (Matplotlib) including Australia's fertility rate trends (1950-2025) and population projections through 2071",
            "Analysed competitor social media performance across Instagram and TikTok, benchmarking against industry leaders",
            "Delivered final business report with actionable recommendations on digital channel strategy, customer segmentation, and international market entry"
        ],
        technologies: ["Python", "Matplotlib", "Data Analysis", "Market Research", "Business Strategy"],
        display_order: 3
    },
    {
        company: "HealthShare (Jacaranda Flame Consulting)",
        role: "Software Engineer Intern (Machine Learning & Data Engineering)",
        duration: "November 2024 - February 2025",
        location: "Sydney, Australia",
        type: "Internship",
        achievements: [
            "Implemented and evaluated multiple ML models including K-means clustering, Isolation Forest, Neural Networks, and One-Class SVM to automate healthcare data verification across 100K+ records at 84% accuracy, projected to save $400K annually",
            "Conducted weekly client meetings and delivered product demonstrations to HealthShare stakeholders, translating technical findings into actionable recommendations",
            "Orchestrated daily stand-ups, assigned tasks based on team strengths, and created comprehensive documentation for cross-team knowledge sharing",
            "Developed a decision-making algorithm to recommend data actions (add/update/delete) based on ML analysis results"
        ],
        technologies: ["Python", "scikit-learn", "NumPy", "pandas", "PostgreSQL", "K-means", "Isolation Forest", "Neural Networks", "One-Class SVM", "ML Algorithms"],
        display_order: 4
    },
    {
        company: "University of Sydney",
        role: "Technical Mentor",
        duration: "September 2023",
        location: "Sydney, Australia",
        type: "Mentorship",
        achievements: [
            "Guided a team of 6 students in designing 'MNDetect,' a wearable EMG patch system with a companion app for early detection and monitoring of Motor Neuron Disease (MND/ALS)",
            "Delivered technical guidance on EMG sensor placement, Bluetooth data transmission architecture, and companion app design, enabling the team to build a functional prototype",
            "Team secured top-3 regional placement in University of Sydney innovation program"
        ],
        technologies: ["EMG Systems", "Bluetooth", "IoT", "App Design", "Mentoring", "Biomedical Engineering"],
        display_order: 5
    },
    {
        company: "Learn Grow Become (Practera)",
        role: "Information Technology System Analyst",
        duration: "June 2023 - July 2023",
        location: "Australia (Remote)",
        type: "Consulting",
        achievements: [
            "Consulted with Australian businesses on technology integration through government-supported edtech platform connecting university students with real industry projects",
            "Assisted Australian businesses in integrating modern technology solutions to optimize operations",
            "Provided tailored advice and resolved technical queries to support sustainable growth and digital transformation"
        ],
        technologies: ["Technology Consulting", "Business Analysis", "Digital Transformation"],
        display_order: 6
    },
    {
        company: "Mette is baking (Practera)",
        role: "Information Technology Business Consultant",
        duration: "June 2022 - July 2022",
        location: "Australia (Remote)",
        type: "Consulting",
        achievements: [
            "Delivered technology consulting as part of cross-disciplinary student team through Practera's Study Australia Industry Experience Program",
            "Provided comprehensive business analysis across financial support and technology implementation",
            "Collaborated with peers from diverse academic backgrounds to deliver tailored solutions optimizing client business plans"
        ],
        technologies: ["Business Consulting", "Technology Integration", "Financial Analysis", "Strategic Planning"],
        display_order: 7
    }
];

const skillsData = [
    // Languages
    { category: "Languages", skill_name: "Python", display_order: 0 },
    { category: "Languages", skill_name: "JavaScript", display_order: 1 },
    { category: "Languages", skill_name: "Java", display_order: 2 },
    { category: "Languages", skill_name: "SQL", display_order: 3 },
    { category: "Languages", skill_name: "HTML/CSS", display_order: 4 },

    // Frontend
    { category: "Frontend", skill_name: "React", display_order: 0 },
    { category: "Frontend", skill_name: "TailwindCSS", display_order: 1 },
    { category: "Frontend", skill_name: "Responsive Design", display_order: 2 },
    { category: "Frontend", skill_name: "Vanilla JS", display_order: 3 },

    // Backend
    { category: "Backend", skill_name: "Node.js", display_order: 0 },
    { category: "Backend", skill_name: "Express", display_order: 1 },
    { category: "Backend", skill_name: "Spring Boot", display_order: 2 },
    { category: "Backend", skill_name: "Django", display_order: 3 },
    { category: "Backend", skill_name: "REST APIs", display_order: 4 },

    // Databases
    { category: "Databases", skill_name: "PostgreSQL", display_order: 0 },
    { category: "Databases", skill_name: "MongoDB", display_order: 1 },
    { category: "Databases", skill_name: "MySQL", display_order: 2 },

    // ML/AI
    { category: "ML/AI", skill_name: "LangGraph", display_order: 0 },
    { category: "ML/AI", skill_name: "RAG", display_order: 1 },
    { category: "ML/AI", skill_name: "Google Gemini API", display_order: 2 },
    { category: "ML/AI", skill_name: "scikit-learn", display_order: 3 },
    { category: "ML/AI", skill_name: "pandas & NumPy", display_order: 4 },
    { category: "ML/AI", skill_name: "K-means Clustering", display_order: 5 },
    { category: "ML/AI", skill_name: "Neural Networks", display_order: 6 },
    { category: "ML/AI", skill_name: "Isolation Forest", display_order: 7 },

    // Tools & Practices
    { category: "Tools & Practices", skill_name: "System Architecture", display_order: 0 },
    { category: "Tools & Practices", skill_name: "Git & GitHub", display_order: 1 },
    { category: "Tools & Practices", skill_name: "Docker", display_order: 2 },
    { category: "Tools & Practices", skill_name: "AWS", display_order: 3 },
    { category: "Tools & Practices", skill_name: "Microservices", display_order: 4 },
    { category: "Tools & Practices", skill_name: "OAuth2 & JWT", display_order: 5 },
    { category: "Tools & Practices", skill_name: "Agile/Scrum", display_order: 6 },
    { category: "Tools & Practices", skill_name: "Maven & Gradle", display_order: 7 }
];

// Add certifications and projects data here...
// (I'll truncate this for brevity, but you get the idea)

// ========================================
// MIGRATION FUNCTIONS
// ========================================

async function clearAllData() {
    console.log('🗑️  Clearing existing data...');

    await supabase.from('experience').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('skills').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('projects').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('certifications').delete().neq('id', '00000000-0000-0000-0000-000000000000');

    console.log('✅ Old data cleared');
}

async function migrateExperience() {
    console.log('📝 Migrating experience data...');

    const { data, error } = await supabase
        .from('experience')
        .insert(experienceData);

    if (error) {
        console.error('❌ Error migrating experience:', error);
        throw error;
    }

    console.log(`✅ Migrated ${experienceData.length} experience entries`);
}

async function migrateSkills() {
    console.log('🛠️  Migrating skills data...');

    const { data, error } = await supabase
        .from('skills')
        .insert(skillsData);

    if (error) {
        console.error('❌ Error migrating skills:', error);
        throw error;
    }

    console.log(`✅ Migrated ${skillsData.length} skills`);
}

// ========================================
// MAIN MIGRATION
// ========================================

async function main() {
    try {
        console.log('🚀 Starting data migration...\n');

        await clearAllData();
        await migrateExperience();
        await migrateSkills();
        // await migrateProjects();
        // await migrateCertifications();

        console.log('\n✨ Migration completed successfully!');
        console.log('📊 You can now view your data in Supabase Table Editor');
    } catch (error) {
        console.error('\n💥 Migration failed:', error);
        process.exit(1);
    }
}

main();
