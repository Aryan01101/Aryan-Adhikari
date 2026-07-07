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


async function migrateProjects() {
    console.log('🚀 Migrating projects data...');
    // Transform projects to match DB schema
    const mappedProjects = projectsData.map((p, i) => ({
        project_id: p.id,
        title: p.title,
        short_description: p.shortDescription,
        full_description: p.fullDescription,
        tech: p.tech,
        timeline: p.timeline,
        impact: p.impact,
        github_link: p.links.github,
        demo_link: p.links.demo,
        status: p.status,
        featured: p.featured,
        display_order: i
    }));

    const { data, error } = await supabase.from('projects').insert(mappedProjects);
    if (error) {
        console.error('❌ Error migrating projects:', error);
        throw error;
    }
    console.log(`✅ Migrated ${mappedProjects.length} projects`);
}

async function migrateCertifications() {
    console.log('📜 Migrating certifications data...');
    const mappedCerts = certificationsData.map((c, i) => ({
        name: c.name,
        issuer: c.issuer || 'Unknown',
        date_completed: c.date,
        credential_id: c.credentialId,
        skills: c.skills,
        in_progress: c.name.includes('In Progress') || c.date.includes('Expected'),
        display_order: i
    }));

    const { data, error } = await supabase.from('certifications').insert(mappedCerts);
    if (error) {
        console.error('❌ Error migrating certifications:', error);
        throw error;
    }
    console.log(`✅ Migrated ${mappedCerts.length} certifications`);
}

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

const projectsData = [
    {
        id: 'yaake',
        title: 'YAAKE - AI-Powered Career Platform',
        shortDescription: 'Gemini-powered recruitment platform shipped from Figma to production in 8 weeks. 384 views in 14 days.',
        fullDescription: `Comprehensive recruitment platform integrating Google Gemini AI for job seekers and recruiters. Shipped from Figma to production in 8 weeks. Features include:

• AI-powered resume parsing and analysis
• Automated ATS (Applicant Tracking System) scoring
• Mock interview simulation with AI feedback
• AI-generated cover letter creation
• Role-based access control for users and recruiters
• RESTful API with 10+ feature modules
• JWT authentication and rate limiting

The platform received significant developer interest with 82 repository clones and 384 views within 14 days of launch.`,
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Gemini AI', 'JWT', 'RBAC', 'RESTful APIs'],
        timeline: 'August - October 2025 (8 weeks)',
        impact: ['Figma to production in 8 weeks', '82 repository clones in 14 days', '384 repository views', 'Real-world AI in recruitment'],
        links: {
            github: '#', // Add actual GitHub URL when ready
            demo: null
        },
        status: 'completed',
        featured: true
    },
    {
        id: 'oversave',
        title: 'Over-save - Budget Tracking App',
        shortDescription: 'Financial management platform with expense tracking, savings goals, gamification, and OAuth2 security.',
        fullDescription: `Comprehensive financial management application with Spring Boot backend and PostgreSQL database. Features include:

• Expense tracking and categorization
• Savings goals with progress monitoring
• Gamification system encouraging financial responsibility
• Email notifications for financial events
• 16 REST API endpoints for complete CRUD operations
• OAuth2 implementation for secure authentication
• Spring Security integration
• Financial analytics and reporting dashboards
• Complex database schema with 15+ interconnected tables`,
        tech: ['Java', 'Spring Boot', 'PostgreSQL', 'OAuth2', 'Spring Security', 'Email Notifications', 'REST APIs'],
        timeline: 'September - November 2025',
        impact: ['Comprehensive financial tracking', 'Secure authentication', 'Gamification for savings'],
        links: {
            github: '#', // Add actual GitHub URL when ready
            demo: null
        },
        status: 'completed',
        featured: true
    },
    {
        id: 'microservices-ecommerce',
        title: 'Microservices E-Commerce Platform',
        shortDescription: 'Enterprise-scale online store with 4 independent microservices, event-driven architecture, and complete order-to-delivery pipeline.',
        fullDescription: `Fully-functional online store implementing microservices architecture for university course COMP5348 (Enterprise Scale Software Architecture). Features:

**Architecture:**
• 4 independent microservices (Store, Bank, Delivery, Email)
• Database per service pattern (PostgreSQL)
• Event-driven architecture with webhooks
• Message queue-based processing
• JWT authentication with Spring Security
• Health check endpoints for monitoring

**Services:**
1. Store App (Port 8081): Order/inventory management, user authentication
2. Bank Service (Port 8082): Payment processing, transaction handling
3. Delivery Service (Port 8083): Shipment tracking, status simulation
4. Email Service (Port 8084): Notification system

**Features:**
• Multi-item order placement with smart warehouse allocation
• Real-time delivery tracking (5-stage progression)
• Transaction fees and automatic refunds
• Configurable delivery simulation and failure rates`,
        tech: ['Java 17', 'Spring Boot', 'Gradle', 'PostgreSQL', 'Hibernate/JPA', 'Spring Security', 'JWT', 'Microservices', 'REST APIs', 'Event-Driven Architecture', 'Message Queues', 'Docker'],
        timeline: 'University Project - 2025',
        impact: ['4 independent microservices', 'Complete order-to-delivery pipeline', 'Enterprise architecture patterns'],
        links: {
            github: '#', // Add actual GitHub URL when ready
            demo: null
        },
        status: 'completed',
        featured: true
    },
    {
        id: 'data-validation-ml',
        title: 'Data Validation System with ML',
        shortDescription: 'ML pipeline processing 100,000+ healthcare records with 84% accuracy. Reduced manual verification by 65% for HealthShare database.',
        fullDescription: `Architected and led development of ML-based data validation system for HealthShare's Practitioner Database at Jacaranda Flame Consulting.

**Leadership:**
• Led cross-functional team of 5 members
• Conducted daily stand-ups using Agile/Scrum
• Managed weekly client meetings and demos
• Delivered comprehensive technical documentation

**Technical Implementation:**
• Implemented multiple ML models: K-means clustering, Isolation Forest, Neural Networks, One-Class SVM
• Achieved 84% accuracy in automated healthcare data verification
• Processed 100,000+ healthcare records
• Built RESTful APIs for system integration
• Created automated data pipeline with testing framework
• Reduced manual validation workload by 65%

**Technologies:**
• Python with scikit-learn, NumPy, pandas
• PostgreSQL database
• Git version control
• Test-driven development approach`,
        tech: ['Python', 'scikit-learn', 'NumPy', 'pandas', 'PostgreSQL', 'K-means', 'Isolation Forest', 'Neural Networks', 'One-Class SVM', 'RESTful APIs'],
        timeline: 'November 2024 - February 2025',
        impact: ['100K+ records processed', '84% accuracy achieved', '65% reduction in manual work', 'Led team of 5'],
        links: {
            github: '#', // Add actual GitHub URL when ready
            demo: null
        },
        status: 'completed',
        featured: true
    },
    {
        id: 'bookhub',
        title: 'BookHub - Book Review Platform',
        shortDescription: 'Full-stack book review platform with Google Books API integration, real-time chat, and Google authentication.',
        fullDescription: `Comprehensive book review platform integrating multiple external APIs. Features include:

**API Integrations:**
• Google Books API for search and book details
• Google Login API for secure authentication
• Daphne API for real-time chat functionality

**Features:**
• Book search with real-time suggestions
• Comprehensive book information display
• User rating system with dynamic updates
• Review submission and viewing
• Real-time chat for book discussions
• OAuth integration for Google credentials
• Community engagement features

**Tech Stack:**
• Frontend: React.js with responsive design
• Backend: Node.js with Express + Django for chat
• Database: MongoDB for NoSQL storage
• External API integration for enhanced functionality`,
        tech: ['React', 'Node.js', 'Express', 'Django', 'MongoDB', 'Google Books API', 'Google Login API', 'Daphne API', 'OAuth'],
        timeline: 'University Project - 2024',
        impact: ['Real-time chat', 'Google API integration', 'OAuth authentication'],
        links: {
            github: '#', // Add actual GitHub URL when ready
            demo: null
        },
        status: 'completed',
        featured: false
    },
    {
        id: 'linkedleads',
        title: 'LinkedLeads Automation',
        shortDescription: 'Automated lead generation system processing 500+ daily job postings, reducing manual work by 95%.',
        fullDescription: `Automated lead generation system for processing job postings from LinkedIn and other sources.

**Automation Pipeline:**
• Web scraping for data collection from multiple sources
• Processing 500+ daily job postings automatically
• Data transformation and standardization
• Automated lead qualification and categorization
• Integration with Google Sheets for data management

**Impact:**
• 95% reduction in manual processing time
• Automated data collection and transformation
• Scalable architecture for increased data volume
• Identifies 50+ qualified IT opportunities weekly`,
        tech: ['N8N', 'Python', 'Google Sheets API', 'Web Scraping', 'Automation'],
        timeline: 'June - July 2024',
        impact: ['500+ postings/day processed', '95% time reduction', '50+ opportunities/week identified'],
        links: {
            github: '#', // Add actual GitHub URL when ready
            demo: null
        },
        status: 'completed',
        featured: false
    },
    {
        id: 'journal-system',
        title: 'Journal Management System',
        shortDescription: 'Privacy-focused desktop journal application with modular architecture and local data storage.',
        fullDescription: `Desktop journal management system with emphasis on privacy and modularity.

**Features:**
• Secure journal entry creation and management
• Privacy-focused design with local data storage
• User-friendly interface for daily journaling
• Modular architecture separating UI from backend

**Development:**
• Git version control with GitHub collaboration
• Maven and Gradle for build automation
• Clean code principles for maintainability
• Designed for future feature integration`,
        tech: ['Java', 'Maven', 'Gradle', 'Git', 'Modular Architecture'],
        timeline: '2024',
        impact: ['Privacy-first design', 'Modular architecture', 'Local data storage'],
        links: {
            github: '#', // Add actual GitHub URL when ready
            demo: null
        },
        status: 'completed',
        featured: false
    },
    {
        id: 'housing-prices',
        title: 'Housing Prices Visualization',
        shortDescription: 'Data visualization project analyzing housing price trends with interactive dashboards.',
        fullDescription: `Data visualization and analysis project for housing market trends.

**Features:**
• Statistical analysis of housing market data
• Visual representation of price trends
• Interactive dashboards for data exploration
• Python-based data processing and visualization`,
        tech: ['Python', 'pandas', 'matplotlib', 'seaborn', 'Data Visualization'],
        timeline: 'In Development',
        impact: ['Market trend analysis', 'Interactive visualizations'],
        links: {
            github: '#',
            demo: null
        },
        status: 'in-development',
        featured: false
    },
    {
        id: 'crypto-prediction',
        title: 'Crypto Price Prediction',
        shortDescription: 'Machine learning model for cryptocurrency price prediction using time series analysis.',
        fullDescription: `Machine learning project for cryptocurrency price prediction.

**Technical Focus:**
• Time series analysis for price prediction
• Feature engineering from historical data
• Model evaluation and optimization
• Python-based ML development`,
        tech: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'Time Series Analysis'],
        timeline: 'In Development',
        impact: ['Price prediction model', 'Time series analysis'],
        links: {
            github: '#',
            demo: null
        },
        status: 'in-development',
        featured: false
    }
];

const certificationsData = [ ];

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
        await migrateProjects();
        await migrateCertifications();

        console.log('\n✨ Migration completed successfully!');
        console.log('📊 You can now view your data in Supabase Table Editor');
    } catch (error) {
        console.error('\n💥 Migration failed:', error);
        process.exit(1);
    }
}

main();
