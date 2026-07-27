let projectsData = [
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
            github: 'https://github.com/Aryan01101/YAAKE',
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
            github: 'https://github.com/Aryan01101/OVER-SAVE',
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
            github: 'https://github.com/Aryan01101/SEA',
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
        impact: ['100K+ records processed', '84% accuracy achieved', '65% reduction in manual work', 'Projected $400K annual savings'],
        links: {
            github: '#',
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
            github: '#',
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
            github: '#',
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
            github: 'https://github.com/Aryan01101/Journal-Management-System',
            demo: null
        },
        status: 'completed',
        featured: false
    },
    {
        id: 'lumina',
        title: 'Lumina - Privacy-First AI Desktop Companion',
        shortDescription: 'Local-first AI companion with RAG memory, interruption intelligence, and 100% privacy. No cloud, one SQLite file.',
        fullDescription: `Privacy-first AI desktop companion that learns from your work patterns, remembers conversations, and asks the right question at the right moment—without sending data to the cloud.

**Core Features:**
• Memory That Persists - RAG pipeline with sqlite-vec vector embeddings and cross-encoder reranking
• Interruption Intelligence - 5-gate system respects deep work, gaming, and video calls
• Privacy-First Architecture - 100% local, no cloud, one SQLite file
• Context-Aware Chat - Every response grounded in your history with NLI-based groundedness scores
• Activity Monitoring - 8 activity states (DEEP_WORK, BROWSING, STUDY, GAMING, etc.)
• Journal & Mood Tracking - Quick capture with character prompts, emoji-based mood check-ins
• Agent System - LangGraph-powered decision making with gate-based reasoning

**Technical Highlights:**
• Electron desktop app with React + TypeScript
• Local LLM via Ollama (llama3.1:8b)
• sqlite-vec for semantic memory search
• Cross-encoder reranking for 85%+ precision
• <250ms p50 retrieval latency
• Comprehensive IPC security validation
• Langfuse distributed tracing integration`,
        tech: ['Electron', 'React', 'TypeScript', 'Ollama', 'LangGraph', 'sqlite-vec', 'SQLite', 'Tailwind CSS', 'RAG', 'Vector Embeddings', 'NLI'],
        timeline: 'November 2025 - January 2026',
        impact: ['100% local AI processing', '5-gate interruption system', 'RAG with reranking', 'Production-grade Electron security'],
        links: {
            github: 'https://github.com/Aryan01101/Lumina',
            demo: null
        },
        status: 'completed',
        featured: true
    },
    {
        id: 'screenbridge',
        title: 'ScreenBridge - Privacy-First Desktop Automation SDK',
        shortDescription: 'Open-source SDK enabling LLMs to see and control desktop apps while keeping screenshots local. Privacy buffer + SentinelLayer protection.',
        fullDescription: `Privacy-first middleware that gives any LLM eyes and hands on your desktop. Open-source SDK that enables Large Language Models to see and interact with desktop applications while keeping raw screenshots entirely local.

**Core Features:**
• Privacy Buffer - Raw screenshots never leave your machine, only structured JSON summaries
• SentinelLayer - Automatic detection of sensitive contexts (financial, healthcare, auth screens)
• LLM-Agnostic - Works with Claude, GPT-4, Gemini, and local models (Ollama)
• Element-Based Actions - Robust, resolution-independent desktop control
• Agentic Loop - Multi-step autonomous task execution with built-in safety guardrails

**Architecture (6 Core Modules):**
1. ScreenReader - Screenshot capture and local storage
2. SentinelLayer - Privacy and safety guardian
3. LLMBridge - LLM communication and agentic loop
4. ActionExecutor - Desktop action execution
5. ElementTreeBuilder - UI element hierarchy construction
6. StorageManager - Disk space and retention management

**Privacy & Security:**
• Only structured JSON sent to LLMs, never raw screenshots
• Automatic halting on sensitive screens (banking, auth, healthcare, etc.)
• Local screenshot storage with configurable retention
• Full audit logs for debugging`,
        tech: ['Python', 'Ollama', 'Anthropic Claude API', 'OpenAI API', 'mss', 'atomacos', 'Agentic AI', 'Desktop Automation', 'Privacy Engineering'],
        timeline: 'December 2025 - January 2026',
        impact: ['Privacy-first desktop automation', 'LLM-agnostic architecture', 'SentinelLayer protection', 'Open-source SDK'],
        links: {
            github: 'https://github.com/Aryan01101/ScreenBridge',
            demo: null
        },
        status: 'completed',
        featured: true
    },
    {
        id: 'lens',
        title: 'Lens - Prescription Refill Approval System',
        shortDescription: 'Real-time prescription refill approval queue with TypeScript backend and PostgreSQL database.',
        fullDescription: `Real-time prescription refill approval queue system for healthcare providers.

**Features:**
• Real-time queue management for prescription refill requests
• TypeScript backend with PostgreSQL database
• Efficient approval workflow for healthcare providers
• Database procedures for complex operations`,
        tech: ['TypeScript', 'PostgreSQL', 'PLpgSQL', 'Real-time Systems'],
        timeline: '2025',
        impact: ['Real-time queue processing', 'Healthcare workflow automation'],
        links: {
            github: 'https://github.com/Aryan01101/Lens',
            demo: null
        },
        status: 'completed',
        featured: false
    },
    {
        id: 'nudge',
        title: 'Nudge',
        shortDescription: 'TypeScript-based application with modern web technologies.',
        fullDescription: `TypeScript application built with modern web development practices.

**Technical Stack:**
• TypeScript for type-safe development
• Modern web technologies and best practices`,
        tech: ['TypeScript', 'JavaScript', 'CSS'],
        timeline: '2025',
        impact: ['Type-safe development', 'Modern web architecture'],
        links: {
            github: 'https://github.com/Aryan01101/Nudge',
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
const fallbackSkills = {
    "AI/ML": [
        "LangGraph", "Ollama", "Google Gemini API", "Anthropic Claude API",
        "scikit-learn", "KMeans Clustering", "Isolation Forest", "Neural Networks",
        "ETL pipelines", "pandas", "NumPy"
    ],
    "Languages": [
        "Python", "JavaScript", "TypeScript", "Java", "SQL", "C", "HTML/CSS"
    ],
    "Frontend": [
        "React", "TailwindCSS", "Figma", "UI/UX Design"
    ],
    "Backend": [
        "Node.js", "Express", "FastAPI", "Spring Boot", "REST APIs",
        "PostgreSQL", "MongoDB", "sqlite-vec"
    ],
    "Platforms/Infrastructure": [
        "Git/GitHub", "Docker", "AWS (EC2, S3, Lambda, RDS)", "GCP Cloud Run",
        "Vercel", "Electron", "N8N", "Twilio",
        "Microsoft 365 / Power Automate / SharePoint", "Agile/Scrum"
    ]
};
const fallbackCertifications = [
    {
        name: "Java (Basic)",
        issuer: "HackerRank",
        icon: "☕",
        color: "#00EA64",
        date: null,
        credentialId: null
    },
    {
        name: "Problem Solving (Basic)",
        issuer: "HackerRank",
        icon: "🧩",
        color: "#00EA64",
        date: null,
        credentialId: null
    },
    {
        name: "Python (Basic)",
        issuer: "HackerRank",
        icon: "🐍",
        color: "#00EA64",
        date: null,
        credentialId: null
    },
    {
        name: "Intro to Git and GitHub",
        issuer: "Google",
        icon: "🔧",
        color: "#4285F4",
        date: null,
        credentialId: null
    },
    {
        name: "PTE Academic",
        issuer: "Pearson",
        icon: "🎓",
        color: "#FF6B00",
        score: "Overall 90",
        details: "Listening 90, Reading 76, Speaking 90, Writing 87",
        validity: "Valid to Jan 2028",
        date: null,
        credentialId: null
    }
];
const comprehensiveKnowledge = {
    personal: {
        name: "Aryan Adhikari",
        role: "Software Engineer",
        education: "Bachelor of Engineering Honours (Software) - University of Sydney",
        graduation: "November 2025",
        eihwam: "68.88",
        location: "Sydney, Australia"
    },
    hobbies: {
        gaming: {
            games: ["Valorant"],
            description: "Enjoys competitive gaming in free time, helps with problem-solving and strategic thinking"
        },
        fitness: {
            activities: ["Bouldering", "Basketball", "Gym workouts"],
            description: "Active lifestyle with rock climbing, basketball, and regular gym sessions. Believes physical fitness improves mental clarity and coding productivity."
        },
        interests: ["Technology trends", "AI developments", "Building side projects", "Learning new programming languages"]
    },
    personality: {
        traits: ["Problem solver", "Team player", "Continuous learner", "Honest and realistic about capabilities"],
        work_style: "Collaborative, enjoys leading teams but also working independently. Prefers hands-on technical work while managing projects.",
        fun_fact: "Balances intense coding sessions with bouldering challenges - both require problem-solving, just different kinds!"
    },
    skills: {
        programming: {
            proficient: ["Python", "JavaScript", "Java", "HTML", "CSS", "SQL"],
            intermediate: ["React", "Node.js", "Express", "Spring Boot"],
            beginner: ["C", "R"]
        },
        frameworks: {
            frontend: ["React.js", "TailwindCSS", "Vanilla JavaScript"],
            backend: ["Node.js", "Express", "Spring Boot", "Django"],
            ml: ["scikit-learn", "pandas", "NumPy", "matplotlib", "seaborn"],
            ai: ["LangGraph", "Google Gemini API", "RAG (Retrieval-Augmented Generation)"]
        },
        databases: ["PostgreSQL", "MongoDB", "MySQL"],
        tools: ["Git", "GitHub", "Maven", "Gradle", "Docker", "N8N", "Power BI", "AWS (EC2, S3, Lambda)"],
        specializations: [
            "System Architecture & Design",
            "Retrieval-Augmented Generation (RAG)",
            "LLM Integration & Orchestration (LangGraph)",
            "Machine Learning (K-means, Neural Networks, Isolation Forest, One-Class SVM)",
            "Microservices Architecture",
            "RESTful API Design",
            "OAuth2 & JWT Authentication",
            "Event-Driven Architecture",
            "Agile/Scrum Methodologies"
        ]
    },
    experience: [
        {
            company: "Freelance / Independent Contractor",
            role: "Software Engineer (Contract)",
            duration: "July 2026 - Present",
            location: "Sydney, Australia",
            type: "Contract",
            achievements: [
                "Authored a product requirements document with defined success criteria for an early-stage venture, providing direct architecture and product decision support to the founder during the scoping phase"
            ],
            technologies: ["Product Requirements", "Technical Advisory", "Architecture Design"]
        },
        {
            company: "Webvine",
            role: "Web Engineer Intern",
            duration: "June 2026 - Present",
            location: "Sydney, Australia",
            type: "Internship",
            achievements: [
                "Microsoft 365 and SharePoint consultancy delivering workflow automation for enterprise clients",
                "Completed scoped tickets end to end and wrote and ran User Acceptance Testing for a pilot agentic email triage system built on Microsoft 365 Copilot Workflows and Power Automate, feeding results back into workflow and prompt refinements",
                "Built Teams-based Adaptive Card approval flows for human-in-the-loop review, with SharePoint policy grounding and full audit logging"
            ],
            technologies: ["Microsoft 365", "Power Automate", "SharePoint", "Copilot Workflows", "Adaptive Cards", "User Acceptance Testing"]
        },
        {
            company: "STRIVE",
            role: "Software Engineer (Part-Time)",
            duration: "April 2026 - Present",
            location: "Sydney, Australia",
            type: "Part-time",
            achievements: [
                "Primary developer and architecture decision-maker on a two-person engineering team, building an all-in-one student portal spanning residency, visa, housing, and campus events, end to end on Next.js, TypeScript, and Supabase, deployed live on Vercel",
                "Built visa state-nomination and skill-based queue logic, an interactive pathway-mapping and score-optimiser feature using React Flow, and a queue intelligence dashboard for application tracking"
            ],
            technologies: ["Next.js", "TypeScript", "Supabase", "React Flow", "Vercel", "Full-Stack Development"]
        },
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
            technologies: ["Machine Learning", "Python", "Supply Chain", "Demand Forecasting", "Product Management", "AI Systems"]
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
            technologies: ["Python", "Teaching", "Visual Coding", "Curriculum Design", "STEM Education"]
        },
        {
            company: "Scape Australia",
            role: "Student Ambassador",
            duration: "August 2024 - September 2025",
            location: "Sydney, Australia",
            type: "Part-time",
            achievements: [
                "Drove a 60% increase in resident engagement through event planning and community-building initiatives for 250+ international residents at Australia's largest purpose-built student accommodation operator",
                "Supported 250+ international residents with onboarding, local navigation, and issue resolution, serving as the primary point of contact across multiple residential floors"
            ],
            technologies: ["Event Coordination", "Community Building", "Leadership", "Cross-Cultural Communication"]
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
            technologies: ["Python", "Matplotlib", "Data Analysis", "Market Research", "Business Strategy"]
        },
        {
            company: "HealthShare (Jacaranda Flame Consulting)",
            role: "Software Engineer Intern (Machine Learning & Data Engineering)",
            duration: "November 2024 - February 2025",
            location: "Sydney, Australia",
            type: "Internship",
            achievements: [
                "Built an ML validation system for 100,000+ healthcare records using KMeans Clustering, Isolation Forest, and Neural Networks, achieving 84% accuracy and cutting manual validation workload by ~65%. Projected ~$400K in annual labour savings if productionised",
                "Presented findings directly to the CEO, CTO, and senior leadership team, translating technical results into actionable business recommendations",
                "Conducted weekly stakeholder meetings and delivered product demonstrations to HealthShare leadership",
                "Developed a decision-making algorithm to recommend data actions (add/update/delete) based on ML analysis results"
            ],
            technologies: ["Python", "scikit-learn", "NumPy", "pandas", "PostgreSQL", "K-means", "Isolation Forest", "Neural Networks", "One-Class SVM", "ML Algorithms"]
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
            technologies: ["EMG Systems", "Bluetooth", "IoT", "App Design", "Mentoring", "Biomedical Engineering"]
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
            technologies: ["Technology Consulting", "Business Analysis", "Digital Transformation"]
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
            technologies: ["Business Consulting", "Technology Integration", "Financial Analysis", "Strategic Planning"]
        }
    ],
    projects: projectsData.filter(p => p.featured).map(p => ({
        name: p.title,
        description: p.shortDescription,
        tech: p.tech,
        impact: p.impact,
        timeline: p.timeline
    })),
    certifications: [
        {
            name: "Java (Basic)",
            issuer: "HackerRank",
            date: "December 2025",
            credentialId: "5A81C82ECD28",
            skills: ["Java fundamentals", "Object-oriented programming", "Java data structures", "Problem-solving"]
        },
        {
            name: "Problem Solving (Basic)",
            issuer: "HackerRank",
            date: "January 2023",
            credentialId: "720A2EE01064",
            skills: ["Algorithmic problem-solving", "Data structures", "Algorithm complexity", "Logical thinking"]
        },
        {
            name: "Python (Basic)",
            issuer: "HackerRank",
            date: "July 2022",
            credentialId: "775757B1ED27",
            skills: ["Python fundamentals", "Python data structures", "Basic algorithms"]
        },
        {
            name: "Python Data Structures",
            issuer: "University of Michigan (Coursera)",
            date: "August 2022",
            credentialId: "VSHWGLAM4J4P",
            skills: ["Python lists, dictionaries, tuples", "Data structure manipulation", "File handling"]
        },
        {
            name: "Programming for Everybody (Getting Started with Python)",
            issuer: "University of Michigan (Coursera)",
            date: "August 2022",
            credentialId: null,
            skills: ["Python programming fundamentals", "Python syntax", "Basic programming concepts"]
        },
        {
            name: "Learn to Program: The Fundamentals",
            issuer: "University of Toronto",
            date: "January 2022",
            credentialId: null,
            skills: ["Programming fundamentals", "Computational thinking", "Problem-solving"]
        },
        {
            name: "Introduction to Git and GitHub",
            issuer: "Google",
            date: "August 2023",
            credentialId: "PW7EP5EYSZ9D",
            skills: ["Git version control", "GitHub", "Collaborative development", "Version control workflows"]
        },
        {
            name: "Data Visualisation: Empowering Business with Effective Insights",
            issuer: "Tata Consultancy Services",
            date: "July 2023",
            credentialId: "jePS7E3H7bszZdQuq",
            skills: ["Microsoft Power BI", "Data visualization", "Business intelligence", "Data storytelling"]
        },
        {
            name: "Cultural Competence & Inclusion",
            issuer: null,
            date: "Completed",
            credentialId: null,
            skills: ["Cross-cultural communication", "Inclusive practices"]
        },
        {
            name: "Teamwork Foundations",
            issuer: null,
            date: "Completed",
            credentialId: null,
            skills: ["Collaborative work", "Team dynamics"]
        },
        {
            name: "Getting Started with Cloud Acquisition",
            issuer: "Cloud Credibility",
            date: "Completed",
            credentialId: null,
            skills: ["Cloud adoption strategies", "Cloud procurement", "Cloud acquisition best practices"]
        },
        {
            name: "AWS Billing and Cost Management",
            issuer: "Amazon Web Services",
            date: "Completed",
            credentialId: null,
            skills: ["AWS cost optimization", "Cloud billing", "Cost management", "AWS pricing"]
        },
        {
            name: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "In Progress - Expected January 2026",
            credentialId: null,
            skills: ["AWS Cloud fundamentals", "Cloud computing", "AWS services", "Cloud architecture"]
        }
    ],
    research: [
        "Comparative Performance Analysis of K-means Clustering Variants (23% faster convergence)",
        "Fairness-Aware Machine Learning Methods (bias mitigation)"
    ],
    tech_roles: [
        "software engineer", "software developer", "full stack", "backend", "frontend",
        "ml engineer", "ai engineer", "machine learning engineer", "data engineer",
        "python developer", "java developer", "web developer", "automation engineer",
        "devops", "cloud engineer", "api developer", "microservices developer"
    ],
    non_tech_roles: [
        "accountant", "ca", "chartered accountant", "finance", "hr", "human resources",
        "marketing", "sales", "business analyst", "project manager", "consultant"
    ]
};
class BambooAnimationController {
    constructor() {
        this.characterElement = document.getElementById('bamboo-character');
        this.animationWrapper = document.getElementById('bamboo-animation-wrapper');
        this.statusElement = document.getElementById('bamboo-status');
        this.statusText = this.statusElement?.querySelector('.status-text');
        this.currentState = 'idle';
        this.lottieAnimation = null;
        this.animationMode = 'css';
        this.animations = {
            idle: 'img/bamboo/bamboo-idle.json',
            thinking: 'img/bamboo/bamboo-thinking.json',
            happy: 'img/bamboo/bamboo-happy.json',
            professional: 'img/bamboo/bamboo-professional.json',
            waving: 'img/bamboo/bamboo-waving.json',
            typing: 'img/bamboo/bamboo-typing.json'
        };
        this.staticImages = {
            idle: 'img/bamboo/bamboo-idle.png',
            thinking: 'img/bamboo/bamboo-thinking.png',
            happy: 'img/bamboo/bamboo-happy.png',
            professional: 'img/bamboo/bamboo-professional.png',
            waving: 'img/bamboo/bamboo-waving.png',
            typing: 'img/bamboo/bamboo-typing.png'
        };
        this.init();
    }
    init() {
        this.detectAvailableAnimations();
        this.setState('idle');
    }
    async detectAvailableAnimations() {
        if (typeof lottie !== 'undefined') {
            const lottieExists = await this.checkFileExists(this.animations.idle);
            if (lottieExists) {
                this.animationMode = 'lottie';
                console.log('🐼 Bamboo: Using Lottie animations');
                return;
            }
        }
        const imageExists = await this.checkFileExists(this.staticImages.idle);
        if (imageExists) {
            this.animationMode = 'static';
            console.log('🐼 Bamboo: Using static images');
            return;
        }
        this.animationMode = 'css';
        console.log('🐼 Bamboo: Using CSS animations (emoji fallback)');
    }
    async checkFileExists(url) {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            return response.ok;
        }
        catch {
            return false;
        }
    }
    setState(newState, statusMessage = null) {
        if (!this.characterElement)
            return;
        this.characterElement.classList.remove('idle', 'thinking', 'happy', 'professional', 'waving', 'typing', 'pulse', 'sparkle');
        this.characterElement.classList.add(newState);
        this.currentState = newState;
        if (statusMessage && this.statusText) {
            this.updateStatus(statusMessage);
        }
        switch (this.animationMode) {
            case 'lottie':
                this.loadLottieAnimation(newState);
                break;
            case 'static':
                this.loadStaticImage(newState);
                break;
            case 'css':
                break;
        }
    }
    loadLottieAnimation(state) {
        if (!this.animations[state] || typeof lottie === 'undefined')
            return;
        if (this.lottieAnimation) {
            this.lottieAnimation.destroy();
        }
        this.animationWrapper.innerHTML = '';
        this.lottieAnimation = lottie.loadAnimation({
            container: this.animationWrapper,
            renderer: 'svg',
            loop: state !== 'waving' && state !== 'happy',
            autoplay: true,
            path: this.animations[state]
        });
    }
    loadStaticImage(state) {
        if (!this.staticImages[state])
            return;
        const fallback = this.animationWrapper.querySelector('.bamboo-fallback');
        this.animationWrapper.innerHTML = '';
        const img = document.createElement('img');
        img.src = this.staticImages[state];
        img.alt = `Bamboo ${state}`;
        img.className = 'bamboo-static-image';
        img.onerror = () => {
            if (fallback) {
                this.animationWrapper.appendChild(fallback);
            }
        };
        this.animationWrapper.appendChild(img);
    }
    updateStatus(message, temporary = false) {
        if (!this.statusText)
            return;
        this.statusText.textContent = message;
        this.statusText.classList.add('updating');
        setTimeout(() => {
            this.statusText.classList.remove('updating');
        }, 800);
        if (temporary) {
            setTimeout(() => {
                this.statusText.textContent = 'Bamboo is ready to chat!';
            }, 3000);
        }
    }
    showThinking() {
        this.setState('thinking', 'Bamboo is thinking...');
    }
    showHappy() {
        this.setState('happy', 'Bamboo is excited!');
        this.characterElement.classList.add('sparkle');
        setTimeout(() => {
            this.characterElement.classList.remove('sparkle');
            this.setState('idle', 'Bamboo is ready to chat!');
        }, 1500);
    }
    showWaving() {
        this.setState('waving', 'Bamboo says hello!');
        setTimeout(() => {
            this.setState('idle', 'Bamboo is ready to chat!');
        }, 1000);
    }
    showProfessional() {
        this.setState('professional', 'Bamboo is being professional');
    }
    showTyping() {
        this.setState('typing', 'Bamboo is typing...');
    }
    showIdle() {
        this.setState('idle', 'Bamboo is ready to chat!');
    }
    pulse() {
        this.characterElement.classList.add('pulse');
        setTimeout(() => {
            this.characterElement.classList.remove('pulse');
        }, 500);
    }
}
let bambooController = null;
document.addEventListener('DOMContentLoaded', async () => {
    console.log('✅ Using hardcoded data');
    renderSkills(fallbackSkills);
    renderProjects();
    renderCertifications(fallbackCertifications);
    renderTimeline();
    function renderSkills(skillsData) {
        const container = document.getElementById('skills-container');
        if (!container)
            return;
        container.innerHTML = '';
        const categoryMeta = {
            'AI/ML': { icon: '🤖', size: 'large' },
            'Languages': { icon: '💻', size: 'large' },
            'Frontend': { icon: '🎨', size: 'medium' },
            'Backend': { icon: '⚙️', size: 'medium' },
            'Platforms/Infrastructure': { icon: '☁️', size: 'medium' }
        };
        Object.entries(skillsData).forEach(([category, skills]) => {
            const categoryDiv = document.createElement('div');
            const meta = categoryMeta[category] || { icon: '📦', size: 'medium' };
            categoryDiv.className = `skill-category-card skill-category-${meta.size}`;
            const skillNames = Array.isArray(skills) ? skills : [];
            categoryDiv.innerHTML = `
                <div class="skill-card-header">
                    <span class="skill-category-icon">${meta.icon}</span>
                    <h4 class="skill-category-name">${category}</h4>
                </div>
                <div class="skill-tags">
                    ${skillNames.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            `;
            container.appendChild(categoryDiv);
        });
    }
    function renderCertifications(certsData) {
        const list = document.getElementById('certifications-list');
        if (!list)
            return;
        list.innerHTML = '';
        certsData.forEach((cert) => {
            const badge = document.createElement('div');
            badge.className = 'certification-badge';
            const tooltipContent = [];
            if (cert.score)
                tooltipContent.push(cert.score);
            if (cert.details)
                tooltipContent.push(cert.details);
            if (cert.validity)
                tooltipContent.push(cert.validity);
            const tooltip = tooltipContent.length > 0
                ? `<div class="cert-tooltip">${tooltipContent.join(' • ')}</div>`
                : '';
            badge.innerHTML = `
                <span class="cert-badge-icon">${cert.icon || '🏆'}</span>
                <div class="cert-badge-content">
                    <span class="cert-badge-name">${cert.name}</span>
                    <span class="cert-badge-issuer">${cert.issuer}</span>
                </div>
                ${tooltip}
            `;
            list.appendChild(badge);
        });
    }
    async function fetchGitHubCommits() {
        try {
            const username = 'Aryan01101';
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                console.warn('GitHub API rate limit or error, using fallback');
                return 500;
            }
            const data = await response.json();
            const estimatedCommits = data.public_repos * 50;
            return estimatedCommits;
        }
        catch (error) {
            console.error('Error fetching GitHub data:', error);
            return 500;
        }
    }
    function initVisitorCount() {
        const visitorElement = document.getElementById('visitor-count');
        if (!visitorElement)
            return;
        let totalVisitors = parseInt(localStorage.getItem('portfolio-visitor-count') || '1000');
        const lastVisit = sessionStorage.getItem('portfolio-last-visit');
        if (!lastVisit) {
            totalVisitors += 1;
            localStorage.setItem('portfolio-visitor-count', totalVisitors.toString());
            sessionStorage.setItem('portfolio-last-visit', new Date().toISOString());
        }
        visitorElement.textContent = totalVisitors + '+';
        visitorElement.setAttribute('data-target', totalVisitors.toString());
    }
    async function initDynamicStats() {
        const projectsCountElement = document.getElementById('projects-count');
        if (projectsCountElement) {
            const projectCount = projectsData.length;
            projectsCountElement.textContent = projectCount.toString();
            projectsCountElement.setAttribute('data-target', projectCount.toString());
        }
        const githubCommitsElement = document.getElementById('github-commits');
        if (githubCommitsElement) {
            const commits = await fetchGitHubCommits();
            githubCommitsElement.textContent = commits + '+';
            githubCommitsElement.setAttribute('data-target', commits.toString());
        }
        initVisitorCount();
        animateCounters();
    }
    function animateCounters() {
        const counters = document.querySelectorAll('.animate-counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target') || '0');
            const prefix = counter.getAttribute('data-prefix') || '';
            const suffix = counter.getAttribute('data-suffix') || '';
            const decimals = parseInt(counter.getAttribute('data-decimals') || '0');
            let current = 0;
            const increment = target / 50;
            const duration = 2000;
            const stepTime = duration / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                const displayValue = decimals > 0
                    ? current.toFixed(decimals)
                    : Math.floor(current);
                counter.textContent = prefix + displayValue + suffix;
            }, stepTime);
        });
    }
    initDynamicStats();
    bambooController = new BambooAnimationController();
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        }
        else {
            navbar.classList.remove('scrolled');
        }
    });
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');
    mobileMenuToggle.addEventListener('click', () => {
        const isActive = mobileMenuToggle.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
        mobileMenuToggle.setAttribute('aria-expanded', isActive.toString());
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navLinksContainer.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        });
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSelector = this.getAttribute('href');
            if (targetSelector && targetSelector !== '#') {
                const target = document.querySelector(targetSelector);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    const sections = document.querySelectorAll('section[id]');
    const navLinkElements = document.querySelectorAll('.nav-links a');
    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        navLinkElements.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        const isMobile = window.innerWidth <= 768;
        const particleCount = isMobile ? 20 : 50;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }
    function renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) {
            const booksRow = document.getElementById('books-row');
            if (booksRow) {
                renderBookshelf(booksRow);
            }
            return;
        }
        projectsGrid.innerHTML = '';
        projectsData.forEach((project, index) => {
            const projectCard = createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });
    }
    function renderBookshelf(booksRow) {
        const bookends = booksRow.querySelectorAll('.bookend');
        const firstBookend = bookends[0];
        const existingBooks = booksRow.querySelectorAll('.book-spine');
        existingBooks.forEach(book => book.remove());
        projectsData.forEach((project, index) => {
            const bookSpine = document.createElement('div');
            bookSpine.className = 'book-spine';
            bookSpine.setAttribute('data-project-id', project.id);
            bookSpine.setAttribute('data-index', index.toString());
            bookSpine.style.setProperty('--book-color', getBookColor(index));
            bookSpine.innerHTML = `<span class="book-title-spine">${project.title}</span>`;
            bookSpine.addEventListener('click', () => {
                openProjectModal(index);
            });
            if (firstBookend && firstBookend.nextSibling) {
                booksRow.insertBefore(bookSpine, firstBookend.nextSibling);
            }
        });
    }
    function getBookColor(index) {
        const colors = ['#6b7fb5', '#5da87e', '#c7956d', '#9b84b8', '#c97070', '#7ca8b5', '#8b7fb8', '#b87d9b'];
        return colors[index % colors.length];
    }
    function openProjectModal(index) {
        const project = projectsData[index];
        if (!project)
            return;
        const modalOverlay = document.getElementById('project-modal-overlay');
        const pageLeft = document.getElementById('page-left');
        const pageRight = document.getElementById('page-right');
        if (!modalOverlay || !pageLeft || !pageRight)
            return;
        const leftCat = document.getElementById('left-cat');
        const leftName = document.getElementById('left-name');
        const leftSub = document.getElementById('left-sub');
        const statusPill = document.getElementById('status-pill');
        const statusText = document.getElementById('status-text');
        const projLinks = document.getElementById('proj-links');
        if (leftCat)
            leftCat.textContent = 'PROJECT';
        if (leftName)
            leftName.textContent = project.title;
        if (leftSub)
            leftSub.textContent = project.timeline || '';
        if (statusPill && statusText) {
            statusText.textContent = project.status === 'completed' ? 'Completed' : 'In Development';
            statusPill.style.display = 'flex';
        }
        if (projLinks) {
            projLinks.innerHTML = '';
            if (project.links.github && project.links.github !== '#') {
                const githubLink = document.createElement('a');
                githubLink.href = project.links.github;
                githubLink.className = 'proj-link';
                githubLink.target = '_blank';
                githubLink.rel = 'noopener noreferrer';
                githubLink.innerHTML = `
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                `;
                projLinks.appendChild(githubLink);
            }
            if (project.links.demo) {
                const demoLink = document.createElement('a');
                demoLink.href = project.links.demo;
                demoLink.className = 'proj-link';
                demoLink.target = '_blank';
                demoLink.rel = 'noopener noreferrer';
                demoLink.innerHTML = `
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16l-6-6 6-6v12zm8 0l-6-6 6-6v12z"/>
                    </svg>
                    Live Demo
                `;
                projLinks.appendChild(demoLink);
            }
        }
        if (pageRight) {
            let techHTML = '';
            if (project.tech && project.tech.length > 0) {
                techHTML = `
                    <div class="details-section">
                        <div class="details-label">Tech Stack</div>
                        <div class="details-tags">
                            ${project.tech.map(tech => `<span class="details-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                `;
            }
            let impactHTML = '';
            if (project.impact && project.impact.length > 0) {
                impactHTML = `
                    <div class="details-section">
                        <div class="details-label">Impact & Achievements</div>
                        <ul class="details-list">
                            ${project.impact.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            pageRight.innerHTML = `
                <div class="page-right-content">
                    <div class="details-section">
                        <div class="details-label">Overview</div>
                        <div class="details-text">${project.shortDescription}</div>
                    </div>

                    <div class="details-section">
                        <div class="details-label">Description</div>
                        <div class="details-text">${project.fullDescription.replace(/\n/g, '<br><br>')}</div>
                    </div>

                    ${techHTML}
                    ${impactHTML}
                </div>
            `;
        }
        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeProjectModal() {
        const modalOverlay = document.getElementById('project-modal-overlay');
        if (modalOverlay) {
            modalOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    }
    const closeButton = document.getElementById('btn-close-project');
    if (closeButton) {
        closeButton.addEventListener('click', closeProjectModal);
    }
    const modalOverlay = document.getElementById('project-modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeProjectModal();
            }
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
    function getProjectIcon(tech) {
        const techLower = tech.map(t => t.toLowerCase()).join(' ');
        if (techLower.includes('scikit') || techLower.includes('neural') ||
            techLower.includes('machine learning') || techLower.includes('k-means') ||
            techLower.includes('isolation forest') || techLower.includes('gemini')) {
            return `<svg class="project-icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                <circle cx="6" cy="6" r="1.5" fill="currentColor"/>
                <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
                <circle cx="6" cy="18" r="1.5" fill="currentColor"/>
                <circle cx="18" cy="18" r="1.5" fill="currentColor"/>
                <line x1="12" y1="12" x2="6" y2="6"/>
                <line x1="12" y1="12" x2="18" y2="6"/>
                <line x1="12" y1="12" x2="6" y2="18"/>
                <line x1="12" y1="12" x2="18" y2="18"/>
            </svg>`;
        }
        if (techLower.includes('pandas') || techLower.includes('matplotlib') ||
            techLower.includes('data visualization') || techLower.includes('seaborn')) {
            return `<svg class="project-icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="4" y1="20" x2="4" y2="10"/>
                <line x1="9" y1="20" x2="9" y2="4"/>
                <line x1="14" y1="20" x2="14" y2="12"/>
                <line x1="19" y1="20" x2="19" y2="7"/>
                <circle cx="4" cy="10" r="1.5" fill="currentColor"/>
                <circle cx="9" cy="4" r="1.5" fill="currentColor"/>
                <circle cx="14" cy="12" r="1.5" fill="currentColor"/>
                <circle cx="19" cy="7" r="1.5" fill="currentColor"/>
            </svg>`;
        }
        if (techLower.includes('spring boot') || techLower.includes('microservices') ||
            techLower.includes('postgresql') || (techLower.includes('java') && techLower.includes('rest'))) {
            return `<svg class="project-icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2"/>
                <rect x="2" y="14" width="20" height="8" rx="2"/>
                <line x1="6" y1="6" x2="6.01" y2="6"/>
                <line x1="6" y1="18" x2="6.01" y2="18"/>
            </svg>`;
        }
        if (techLower.includes('n8n') || techLower.includes('automation') ||
            techLower.includes('scraping')) {
            return `<svg class="project-icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6m10.66-10.66l-4.24 4.24m-8.48 0L1.34 3.34M23 12h-6M7 12H1m18.66 10.66l-4.24-4.24m-8.48 0L1.34 20.66"/>
            </svg>`;
        }
        if (techLower.includes('react') || techLower.includes('node') ||
            techLower.includes('django') || techLower.includes('express')) {
            return `<svg class="project-icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <line x1="2" y1="7" x2="22" y2="7"/>
                <circle cx="6" cy="5" r="0.5" fill="currentColor"/>
                <circle cx="8" cy="5" r="0.5" fill="currentColor"/>
                <circle cx="10" cy="5" r="0.5" fill="currentColor"/>
                <path d="M8 11 L 10 13 L 14 9" stroke-width="2"/>
                <line x1="2" y1="21" x2="22" y2="21"/>
            </svg>`;
        }
        return `<svg class="project-icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
        </svg>`;
    }
    function createProjectCard(project, index) {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.setAttribute('data-project-id', project.id);
        card.setAttribute('aria-labelledby', `project-name-${index}`);
        const projectLink = project.links?.demo || project.links?.github || '#';
        const projectIcon = getProjectIcon(project.tech);
        card.innerHTML = `
            <div class="project-card-header">
                <div class="project-icon" role="img" aria-label="Project icon">${projectIcon}</div>
                <a href="${projectLink}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.title} project in new tab">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
            <h3 id="project-name-${index}" class="project-name">${project.title}</h3>
            <p class="project-subtitle">${project.subtitle || project.category || ''}</p>
            <p class="project-description">${project.shortDescription}</p>
            <div class="project-tags" role="list" aria-label="Technologies used">
                ${project.tech.slice(0, 4).map(tech => `<span class="project-tag" role="listitem">${tech}</span>`).join('')}
            </div>
        `;
        return card;
    }
    function createProjectCardOld(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-project-id', project.id);
        const statusBadge = project.status === 'in-development'
            ? '<span class="status-badge">In Development</span>'
            : '';
        card.innerHTML = `
            ${statusBadge}
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.shortDescription}</p>
            <div class="tech-stack">
                ${project.tech.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                ${project.tech.length > 4 ? `<span class="tech-tag">+${project.tech.length - 4} more</span>` : ''}
            </div>
            <div class="project-expandable" id="project-details-${index}" style="display: none;">
                <div class="project-full-description">
                    ${project.fullDescription.split('\n').map(line => `<p>${line.trim()}</p>`).join('')}
                </div>
                ${project.impact && project.impact.length > 0 ? `
                    <div class="project-impact">
                        <h4>Impact & Achievements:</h4>
                        <ul>
                            ${project.impact.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                <div class="project-timeline">
                    <strong>Timeline:</strong> ${project.timeline}
                </div>
                <div class="project-screenshots-placeholder">
                    <p class="screenshot-note">📸 Screenshots coming soon</p>
                </div>
            </div>
            <div class="project-actions">
                <button class="btn-expand" data-index="${index}">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 15l-5-5h10z"/>
                    </svg>
                    View Details
                </button>
                <div class="project-links">
                    ${project.links.github ? `
                        <a href="${project.links.github}" class="project-btn" target="_blank" rel="noopener noreferrer">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code
                        </a>
                    ` : ''}
                    ${project.links.demo ? `
                        <a href="${project.links.demo}" class="project-btn project-btn-secondary" target="_blank" rel="noopener noreferrer">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.947v1.053c0 .276-.224.5-.5.5h-1c-.276 0-.5-.224-.5-.5v-1.053c-1.647-.432-3-1.584-3-3.447 0-.276.224-.5.5-.5h1c.276 0 .5.224.5.5 0 1.104.896 2 2 2s2-.896 2-2c0-1.104-.896-2-2-2-2.209 0-4-1.791-4-4s1.791-4 4-4v-1.053c0-.276.224-.5.5-.5h1c.276 0 .5.224.5.5v1.053c1.647.432 3 1.584 3 3.447 0 .276-.224.5-.5.5h-1c-.276 0-.5-.224-.5-.5 0-1.104-.896-2-2-2s-2 .896-2 2c0 1.104.896 2 2 2 2.209 0 4 1.791 4 4s-1.791 4-4 4z"/>
                            </svg>
                            Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        return card;
    }
    function setupProjectExpansion() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn-expand')) {
                const button = e.target.closest('.btn-expand');
                const index = button.getAttribute('data-index');
                const detailsDiv = document.getElementById(`project-details-${index}`);
                const card = button.closest('.project-card');
                if (detailsDiv.style.display === 'none') {
                    detailsDiv.style.display = 'block';
                    button.innerHTML = `
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 9l5 5H7z"/>
                        </svg>
                        Hide Details
                    `;
                    card.classList.add('expanded');
                }
                else {
                    detailsDiv.style.display = 'none';
                    button.innerHTML = `
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 15l-5-5h10z"/>
                        </svg>
                        View Details
                    `;
                    card.classList.remove('expanded');
                }
            }
        });
    }
    function renderTimeline() {
        const timelineSvg = document.getElementById('timeline-svg');
        const timelineDetails = document.querySelector('.timeline-details');
        if (!timelineSvg)
            return;
        timelineSvg.innerHTML = '';
        const svgNS = 'http://www.w3.org/2000/svg';
        const experience = comprehensiveKnowledge.experience;
        const isMobile = window.innerWidth < 768;
        const width = timelineSvg.clientWidth || Math.min(1000, window.innerWidth - 32);
        const height = isMobile ? 400 : 300;
        const margin = isMobile
            ? { top: 20, right: 20, bottom: 30, left: 20 }
            : { top: 40, right: 60, bottom: 40, left: 60 };
        const plotWidth = width - margin.left - margin.right;
        const plotHeight = height - margin.top - margin.bottom;
        timelineSvg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        const parseDate = (dateStr) => {
            if (dateStr.includes('Present')) {
                return new Date();
            }
            const parts = dateStr.split(' - ');
            const endDate = parts[parts.length - 1].trim();
            const monthYear = endDate.split(' ');
            const months = {
                'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
                'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
            };
            const month = months[monthYear[0]] || 0;
            const year = parseInt(monthYear[1]);
            return new Date(year, month);
        };
        const experienceDates = experience.map((exp, idx) => ({
            ...exp,
            date: parseDate(exp.duration),
            index: idx
        })).sort((a, b) => a.date.getTime() - b.date.getTime());
        const minDate = new Date(2022, 0);
        const maxDate = new Date();
        const timeSpan = maxDate.getTime() - minDate.getTime();
        const xScale = (date) => {
            return margin.left + (date.getTime() - minDate.getTime()) / timeSpan * plotWidth;
        };
        const colorMap = {
            'Consulting': '#6b7fb5',
            'Internship': '#7ca8b5',
            'Part-time': '#9b84b8',
            'Mentorship': '#c7956d'
        };
        const axisY = height / 2;
        const axis = document.createElementNS(svgNS, 'line');
        axis.setAttribute('x1', margin.left.toString());
        axis.setAttribute('y1', axisY.toString());
        axis.setAttribute('x2', (width - margin.right).toString());
        axis.setAttribute('y2', axisY.toString());
        axis.setAttribute('class', 'timeline-axis');
        timelineSvg.appendChild(axis);
        for (let year = 2022; year <= 2025; year++) {
            const x = xScale(new Date(year, 0));
            const tick = document.createElementNS(svgNS, 'line');
            tick.setAttribute('x1', x.toString());
            tick.setAttribute('y1', (axisY - 5).toString());
            tick.setAttribute('x2', x.toString());
            tick.setAttribute('y2', (axisY + 5).toString());
            tick.setAttribute('class', 'timeline-tick');
            timelineSvg.appendChild(tick);
            const label = document.createElementNS(svgNS, 'text');
            label.setAttribute('x', x.toString());
            label.setAttribute('y', (axisY + 25).toString());
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('class', 'timeline-label');
            label.textContent = year.toString();
            timelineSvg.appendChild(label);
        }
        experienceDates.forEach((exp, idx) => {
            const x = xScale(exp.date);
            const y = axisY - (idx % 2 === 0 ? 40 : -40);
            const color = colorMap[exp.type] || '#6b7fb5';
            const branchGroup = document.createElementNS(svgNS, 'g');
            branchGroup.setAttribute('class', 'git-branch-group');
            branchGroup.setAttribute('data-exp-index', exp.index.toString());
            branchGroup.style.cursor = 'pointer';
            const branch = document.createElementNS(svgNS, 'line');
            branch.setAttribute('x1', x.toString());
            branch.setAttribute('y1', axisY.toString());
            branch.setAttribute('x2', x.toString());
            branch.setAttribute('y2', y.toString());
            branch.setAttribute('stroke', color);
            branch.setAttribute('stroke-width', '2');
            branch.setAttribute('class', 'git-branch');
            branchGroup.appendChild(branch);
            const commit = document.createElementNS(svgNS, 'circle');
            commit.setAttribute('cx', x.toString());
            commit.setAttribute('cy', y.toString());
            commit.setAttribute('r', '5');
            commit.setAttribute('fill', color);
            commit.setAttribute('class', 'git-commit');
            branchGroup.appendChild(commit);
            branchGroup.addEventListener('mouseenter', () => {
                showExperienceDetails(exp, timelineDetails);
            });
            timelineSvg.appendChild(branchGroup);
        });
    }
    function showExperienceDetails(exp, detailsEl) {
        const placeholder = detailsEl.querySelector('.timeline-details-placeholder');
        if (placeholder)
            placeholder.style.display = 'none';
        let contentDiv = detailsEl.querySelector('.timeline-details-content');
        if (!contentDiv) {
            contentDiv = document.createElement('div');
            contentDiv.className = 'timeline-details-content';
            detailsEl.appendChild(contentDiv);
        }
        contentDiv.innerHTML = `
            <h3 class="details-title">${exp.role}</h3>
            <p class="details-company">${exp.company}</p>
            <p class="details-meta">${exp.duration} • ${exp.location}</p>
            <ul class="details-achievements">
                ${exp.achievements.slice(0, 3).map((achievement) => `<li>${achievement}</li>`).join('')}
            </ul>
            <div class="details-tech">
                ${exp.technologies.slice(0, 5).map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        `;
        contentDiv.style.display = 'block';
    }
    function hideExperienceDetails(detailsEl) {
        const contentDiv = detailsEl.querySelector('.timeline-details-content');
        if (contentDiv)
            contentDiv.style.display = 'none';
        const placeholder = detailsEl.querySelector('.timeline-details-placeholder');
        if (placeholder)
            placeholder.style.display = 'block';
    }
    renderProjects();
    setupProjectExpansion();
    renderTimeline();
    document.addEventListener('click', (e) => {
        const target = e.target;
        const detailsContainer = document.querySelector('.timeline-details');
        if (detailsContainer && !target.closest('.git-branch-group') && !target.closest('.timeline-details')) {
            hideExperienceDetails(detailsContainer);
        }
    });
    const contactForm = document.querySelector('.contact-form');
    const formStatus = document.getElementById('form-status');
    if (contactForm && formStatus) {
        contactForm.querySelectorAll('input[required], textarea[required]').forEach(field => {
            field.addEventListener('blur', () => {
                const errorEl = document.getElementById(`${field.id.replace('contact-', '')}-error`);
                if (!field.validity.valid) {
                    errorEl.textContent = field.validationMessage;
                    field.setAttribute('aria-invalid', 'true');
                }
                else {
                    errorEl.textContent = '';
                    field.removeAttribute('aria-invalid');
                }
            });
            field.addEventListener('input', () => {
                if (field.validity.valid) {
                    const errorEl = document.getElementById(`${field.id.replace('contact-', '')}-error`);
                    errorEl.textContent = '';
                    field.removeAttribute('aria-invalid');
                }
            });
        });
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const button = contactForm.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.innerHTML = `
                <span class="loading-spinner"></span>
                Sending...
            `;
            button.disabled = true;
            formStatus.className = 'form-status';
            formStatus.style.display = 'none';
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                if (response.ok) {
                    formStatus.className = 'form-status success';
                    formStatus.textContent = 'Thank you for your message! I\'ll get back to you soon.';
                    formStatus.style.display = 'block';
                    contactForm.reset();
                }
                else {
                    throw new Error('Form submission failed');
                }
            }
            catch (error) {
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Oops! Something went wrong. Please try again or email me directly.';
                formStatus.style.display = 'block';
            }
            finally {
                button.textContent = originalText;
                button.disabled = false;
            }
        });
    }
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');
    const AI_CONFIG = {
        useAPI: true,
        model: 'gemini-pro'
    };
    const responses = {
        greeting: [
            "🐼 Hey there! I'm Bamboo, and I help people get to know my human Aryan. Want to know about his tech skills, or maybe what he does when he's not coding?",
            "🐼 Hi! Bamboo here! I can tell you all about Aryan - his projects, his love for bouldering, or whether he'd be great for your team. What are you curious about?",
            "🐼 Hello! I'm Bamboo, Aryan's panda assistant. I'm here to share what makes him awesome - both as an engineer and as a person. Fire away with your questions!"
        ],
        default: "🐼 I can tell you about my human's work experience, technical skills, fun hobbies (he's into Valorant and bouldering!), or honestly assess if he'd be a good fit for your role. What would you like to know?",
        non_tech_role: "🐼 Ah, I need to be honest here - my human's expertise is all in tech stuff: software engineering, ML/AI, and building cool applications. Roles like accounting, finance, or HR wouldn't be a good match for him. He's happiest when he's solving technical problems and writing code!",
        no_match: "🐼 Hmm, I'm not quite sure what you're asking! You can ask me about Aryan's skills, projects, hobbies, education, or if he'd be a good fit for tech roles. Try asking something specific!"
    };
    function generateResponse(userMessage) {
        const msg = userMessage.toLowerCase().trim();
        if (/^(hi|hello|hey|greetings|good morning|good afternoon)/.test(msg)) {
            return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
        }
        if (/(hobby|hobbies|fun|free time|outside|personal|interests?|life|enjoy|passion)/.test(msg)) {
            if (/(game|gaming|play|valorant)/.test(msg)) {
                return `🐼 Oh, my human loves gaming! He plays ${comprehensiveKnowledge.hobbies.gaming.games.join(', ')} when he's not coding. ${comprehensiveKnowledge.hobbies.gaming.description}. It's actually pretty cool how the strategic thinking from gaming helps with his software engineering work!`;
            }
            else if (/(fitness|sport|gym|boulder|bouldering|basketball|active|exercise|workout)/.test(msg)) {
                const activities = comprehensiveKnowledge.hobbies.fitness.activities.join(', ');
                return `🐼 Aryan is super active! He's into ${activities}. ${comprehensiveKnowledge.hobbies.fitness.description} Fun fact: ${comprehensiveKnowledge.personality.fun_fact}`;
            }
            else {
                const gaming = comprehensiveKnowledge.hobbies.gaming.games.join(', ');
                const fitness = comprehensiveKnowledge.hobbies.fitness.activities.join(', ');
                return `🐼 When he's not coding, my human loves staying active and having fun!\n\n**Gaming:** ${gaming} - competitive gaming keeps his mind sharp\n**Fitness:** ${fitness} - he believes staying active helps with coding productivity\n**Other interests:** ${comprehensiveKnowledge.hobbies.interests.join(', ')}\n\n${comprehensiveKnowledge.personality.fun_fact}`;
            }
        }
        if (/(personality|person|kind of person|work style|what.*like|who is|tell me about aryan)/.test(msg) && !/(skill|tech|project)/.test(msg)) {
            const traits = comprehensiveKnowledge.personality.traits.join(', ');
            return `🐼 My human is a ${traits}. ${comprehensiveKnowledge.personality.work_style}\n\nHe's the kind of person who'll honestly tell you if something isn't his forte - no overselling here! He loves building things, solving problems, and working with great teams. And when he's not in front of a screen, you'll probably find him at a climbing wall or on a basketball court! 🏀`;
        }
        if (comprehensiveKnowledge.non_tech_roles.some(role => msg.includes(role))) {
            return responses.non_tech_role;
        }
        if (/(education|degree|university|study|studied|graduate|graduation)/.test(msg)) {
            return `🐼 My human studied hard! He holds a ${comprehensiveKnowledge.personal.education} with an EIHWAM (Engineering Honours Weighted Average Mark) of ${comprehensiveKnowledge.personal.eihwam}. Graduated in ${comprehensiveKnowledge.personal.graduation}.\n\nHis thesis research was pretty cool:\n• ${comprehensiveKnowledge.research[0]}\n• ${comprehensiveKnowledge.research[1]}`;
        }
        if (/(certification|certificate|certified|credential)/.test(msg)) {
            const certList = comprehensiveKnowledge.certifications.slice(0, 6).map(c => `${c.name} - ${c.issuer || 'Completed'}${c.date ? ` (${c.date})` : ''}`).join('\n• ');
            return `🐼 Aryan's got ${comprehensiveKnowledge.certifications.length} professional certifications! Here are some:\n\n• ${certList}\n\n...and more! He's currently working towards AWS Cloud Practitioner (Expected January 2026). Always learning new things!`;
        }
        if (/(suitable|fit|good|qualified|right|match).*(for|as|role|position)/.test(msg) || /is (he|aryan)/.test(msg)) {
            const matchedRole = comprehensiveKnowledge.tech_roles.find(role => msg.includes(role));
            if (matchedRole) {
                return assessJobFit(matchedRole);
            }
            else if (/(software|developer|engineer|tech|programming)/.test(msg)) {
                return `🐼 Absolutely! My human would be an excellent fit for software engineering roles. He's got real hands-on experience:\n\n• Building ML-powered solutions (84% accuracy, 100K+ records)\n• Full-stack development (React, Node.js, Spring Boot, Next.js, TypeScript)\n• Microservices architecture\n• Enterprise-scale applications\n• Currently working at STRIVE and Webvine\n\nHe's delivered real impact - like 65% reduction in manual work and ~$400K in projected annual savings. Great at hands-on technical work and stakeholder communication!`;
            }
        }
        if (/(skill|technology|tech stack|know|language|framework|tool)/.test(msg)) {
            if (/(ml|machine learning|ai|artificial intelligence)/.test(msg)) {
                const mlSkills = comprehensiveKnowledge.skills.specializations[0];
                return `🐼 Oh, my human's ML/AI skills are solid! He knows:\n\n${mlSkills}\n\nHe's used these in real production at Jacaranda Flame - 84% accuracy on 100K+ healthcare records! His thesis was on K-means optimization (23% faster!) and fairness in ML. Pretty cool stuff!`;
            }
            else if (/(full.?stack|frontend|backend|web)/.test(msg)) {
                const frontendSkills = comprehensiveKnowledge.skills.frameworks.frontend.join(', ');
                const backendSkills = comprehensiveKnowledge.skills.frameworks.backend.join(', ');
                return `🐼 My human can handle both frontend and backend!\n\n**Frontend:** ${frontendSkills}\n**Backend:** ${backendSkills}\n**Databases:** ${comprehensiveKnowledge.skills.databases.join(', ')}\n\nHe's built full apps like YAAKE (AI recruitment platform) and microservices e-commerce systems. The whole stack!`;
            }
            else if (/(java|spring)/.test(msg)) {
                return `🐼 Yep, Aryan knows Java and Spring Boot well! He's built:\n\n• Over-save: Budget tracking with Spring Boot, PostgreSQL, OAuth2 (16 REST endpoints)\n• Microservices E-Commerce: 4-service architecture with Spring Security, JWT\n\nHe's also HackerRank Java certified!`;
            }
            else if (/(python)/.test(msg)) {
                return `🐼 Python is one of my human's superpowers! He uses it for:\n\n• ML systems (scikit-learn, pandas, NumPy)\n• Data validation (100K+ records)\n• Automation (N8N pipelines, web scraping)\n• Teaching (taught 50+ kids at CodeCamp!)\n\nHe's got HackerRank Python certification and University of Michigan Python courses under his belt.`;
            }
            else {
                const proficientLangs = comprehensiveKnowledge.skills.programming.proficient.join(', ');
                return `🐼 Here's what's in my human's tech toolbox:\n\n**Languages:** ${proficientLangs}\n**Specializations:** Microservices, ML/AI, RESTful APIs, OAuth2/JWT, Event-Driven Architecture\n**Tools:** Git, Docker, Maven, Gradle, N8N, Power BI\n**Databases:** ${comprehensiveKnowledge.skills.databases.join(', ')}\n\nHe's pretty versatile!`;
            }
        }
        if (/(project|built|created|developed|portfolio|work on)/.test(msg)) {
            if (/(ai|ml|machine learning|artificial intelligence)/.test(msg)) {
                return `🐼 My human's built some really cool AI/ML projects:\n\n• **YAAKE**: AI recruitment platform with Google Gemini - does resume parsing, ATS scoring, mock interviews (got 82 clones in just 14 days!)\n• **ML Data Validation**: Healthcare system hitting 84% accuracy using K-means, Neural Networks, Isolation Forest on 100K+ records\n• **Crypto Price Prediction**: Time series ML model (still working on this one)\n\nReal production stuff, not just toy projects!`;
            }
            else {
                const featuredProjects = comprehensiveKnowledge.projects.slice(0, 3);
                const projectList = featuredProjects.map(p => `• **${p.name}**: ${p.description}`).join('\n\n');
                return `🐼 Aryan's built ${projectsData.length} major projects! Here are the highlights:\n\n${projectList}\n\nEach one shows his full-stack chops - frontend, backend, databases, the works!`;
            }
        }
        if (/(experience|background|worked|job|employment|work history)/.test(msg)) {
            if (/(lead|leadership|team|manage|management)/.test(msg)) {
                return `🐼 My human's got solid leadership and collaboration experience!\n\n**Current roles:**\n• **STRIVE**: Primary developer and architecture decision-maker on two-person engineering team\n• **Webvine**: Built enterprise workflow automation systems\n• **HealthShare**: Presented findings directly to CEO, CTO, and senior leadership\n\nPlus he taught 50+ kids Python at CodeCamp and ran events for 250+ students as Scape Ambassador (60% engagement increase!). He's great at stakeholder communication, mentoring, and collaborative development.`;
            }
            else {
                const exp = comprehensiveKnowledge.experience.slice(0, 3);
                const expList = exp.map(e => `• **${e.role}** at ${e.company} (${e.duration})\n  ${e.achievements[0]}`).join('\n\n');
                return `🐼 My human's got diverse hands-on experience:\n\n${expList}\n\nHe loves building ML solutions, full-stack apps, and solving real-world problems!`;
            }
        }
        if (/(lead|team|management|manage|mentor|teaching)/.test(msg)) {
            return `🐼 Oh yes! Aryan's got solid leadership and mentorship experience:\n\n• **STRIVE**: Primary developer & architecture decision-maker on two-person engineering team\n• **HealthShare**: Presented findings to CEO, CTO, and senior leadership; conducted weekly stakeholder meetings\n• **Coding Instructor** at CodeCamp: Taught 50+ kids Python\n• **Student Ambassador** at Scape: Organized events for 250+ students (60% engagement increase!)\n• **Technical Mentor**: Helped 6 students get top-3 in a competition\n\nHe's great with stakeholder communication, Agile workflows, mentoring, and collaborative development.`;
        }
        if (/(available|availability|location|where|based|relocate)/.test(msg)) {
            return `🐼 My human's based in ${comprehensiveKnowledge.personal.location} and just graduated in ${comprehensiveKnowledge.personal.graduation}. He's definitely open to opportunities! Hit him up using the contact form below and let's chat!`;
        }
        return responses.default;
    }
    function assessJobFit(role) {
        const fitResponses = {
            "software engineer": `🐼 **Excellent fit!** My human has solid software engineering experience:\n\n• Currently working at STRIVE (Next.js, TypeScript, Supabase) and Webvine (Microsoft 365, Power Automate)\n• Achieved 84% ML accuracy on 100K+ healthcare records\n• Reduced manual workload by 65%, projected ~$400K annual savings\n• Strong with React, Node.js, Spring Boot, Python, Next.js, TypeScript\n• Experienced in Agile workflows, stakeholder communication, architecture decisions\n\nHe'd be a great fit for software engineering roles!`,
            "full stack": `🐼 **Excellent fit!** Aryan's got the full-stack experience:\n\n**Frontend:** React.js, Next.js, TypeScript, HTML/CSS, JavaScript\n**Backend:** Node.js, Express, Spring Boot, Django, Supabase\n**Databases:** PostgreSQL, MongoDB, MySQL, Supabase\n\n**Real projects:** STRIVE (Next.js/TypeScript/Supabase), YAAKE (React/Node/MongoDB), BookHub (React/Node/Django), Over-save (Spring Boot/PostgreSQL)\n\nHe's built systems for 1000+ users with OAuth2, JWT, and microservices. The whole package!`,
            "ml engineer": `🐼 **Strong fit!** My human has real production ML experience:\n\n• Built ML pipeline processing 100K+ healthcare records (84% accuracy)\n• Implemented K-means, Neural Networks, Isolation Forest, One-Class SVM\n• Research: K-means optimization (23% faster!), fairness-aware ML\n• Created YAAKE with Google Gemini AI\n• Expert in scikit-learn, pandas, NumPy\n• Presented ML findings to CEO, CTO, and senior leadership at HealthShare\n\nHe'd do great in ML engineering roles!`,
            "ai engineer": `🐼 **Strong fit!** Aryan's got practical AI chops:\n\n• YAAKE: AI recruitment platform (resume parsing, ATS scoring, mock interviews)\n• ML Data Validation: 84% accuracy with multiple algorithms\n• Research in fairness-aware ML\n• Google Gemini AI integration\n• Experience with neural networks, clustering, anomaly detection\n\nPerfect for AI engineering positions!`,
            "python developer": `🐼 **Excellent fit!** Python is my human's superpower:\n\n• ML systems (scikit-learn, pandas, NumPy)\n• Processing 100K+ records\n• Automation (N8N, web scraping)\n• Teaching (CodeCamp instructor for 50+ kids)\n• HackerRank Python certified\n• University of Michigan Python courses\n\nHe'd excel as a Python developer!`,
            "java developer": `🐼 **Strong fit!** Aryan knows Java well:\n\n• Over-save: Spring Boot app (16 REST endpoints, OAuth2, PostgreSQL)\n• Microservices E-Commerce: 4-service architecture (Spring Boot, Spring Security, JWT)\n• HackerRank Java certified\n• Maven and Gradle experience\n• Enterprise-scale development\n\nGood match for Java developer roles!`,
            "backend": `🐼 **Strong fit!** Backend is one of my human's strengths:\n\n• Node.js/Express: YAAKE, BookHub\n• Spring Boot: Over-save, Microservices\n• Databases: PostgreSQL, MongoDB, MySQL\n• RESTful APIs (16+ endpoints)\n• OAuth2, JWT, Spring Security\n• Microservices & event-driven architecture\n\nHe'd be great in backend roles!`,
            "frontend": `🐼 **Moderate fit.** Honest assessment: Aryan can do frontend, but it's not his main strength:\n\n• React.js projects (YAAKE, BookHub)\n• HTML/CSS, JavaScript, TailwindCSS\n• Responsive design\n• API integration\n\nHe's better at backend and ML work, but can handle frontend when needed. If you need a frontend specialist, there might be better fits!`,
            "data engineer": `🐼 **Moderate fit.** My human has relevant skills:\n\n• Data pipeline for 100K+ healthcare records\n• ETL processes and data transformation\n• PostgreSQL, MongoDB\n• Python data processing (pandas, NumPy)\n• Automation pipelines (N8N)\n\nHis focus is more on software engineering with ML, but he's got solid data processing capabilities!`,
            "devops": `🐼 **Moderate fit.** Being honest here - DevOps isn't Aryan's main specialty:\n\n• Docker containerization\n• Microservices deployment\n• Git/GitHub workflows\n• Gradle/Maven build tools\n• AWS Cloud Practitioner (in progress)\n\nHe understands DevOps and can work with it, but his strength is in software development. For a dedicated DevOps role, you might want someone more specialized!`,
            "automation engineer": `🐼 **Strong fit!** My human's great at automation:\n\n• LinkedLeads: 95% time saved, 500+ postings/day automated\n• N8N workflow automation\n• Python scripting and web scraping\n• Data transformation pipelines\n• API integration\n• 30% efficiency boost at Practera\n\nHe'd be excellent for automation engineering!`
        };
        return fitResponses[role] || `🐼 My human could potentially fit ${role} roles - he's got solid experience in software engineering and ML. His main strengths are building ML solutions, full-stack apps, and technical architecture. Want me to be more specific about how his skills match this role?`;
    }
    async function sendMessage() {
        const message = chatInput.value.trim();
        if (!message)
            return;
        if (bambooController) {
            bambooController.pulse();
        }
        const userMsg = document.createElement('div');
        userMsg.className = 'message user';
        userMsg.innerHTML = `<p>${escapeHtml(message)}</p>`;
        chatMessages.appendChild(userMsg);
        chatInput.value = '';
        if (bambooController) {
            bambooController.showTyping();
        }
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message assistant typing-indicator';
        typingIndicator.innerHTML = '<p><span class="dot"></span><span class="dot"></span><span class="dot"></span></p>';
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        let response;
        const msg = message.toLowerCase();
        if (AI_CONFIG.useAPI) {
            try {
                response = await getGeminiResponse(message);
            }
            catch (error) {
                console.error('Gemini API error:', error);
                response = generateResponse(message);
            }
        }
        else {
            await new Promise(resolve => setTimeout(resolve, 800));
            response = generateResponse(message);
        }
        typingIndicator.remove();
        if (bambooController) {
            if (/^(hi|hello|hey)/.test(msg)) {
                bambooController.showWaving();
            }
            else if (/(hobby|fun|game|sport|personal)/.test(msg)) {
                bambooController.showHappy();
            }
            else if (/(suitable|fit|qualified|role|position|job)/.test(msg)) {
                bambooController.showProfessional();
                setTimeout(() => bambooController.showIdle(), 3000);
            }
            else {
                bambooController.showIdle();
            }
        }
        const aiMsg = document.createElement('div');
        aiMsg.className = 'message assistant';
        const formattedResponse = response.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        aiMsg.innerHTML = `<p>${formattedResponse}</p>`;
        chatMessages.appendChild(aiMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    function buildSystemPrompt() {
        const experienceList = comprehensiveKnowledge.experience.map((exp, idx) => `${idx + 1}. **${exp.role}** at ${exp.company} (${exp.duration})
   ${exp.achievements.map(a => `   - ${a}`).join('\n')}
   Technologies: ${exp.technologies.join(', ')}`).join('\n\n');
        return `You are Bamboo, a friendly panda AI assistant representing Aryan Adhikari, a software engineer.

CRITICAL INSTRUCTIONS:
- ONLY reference information explicitly provided in the context below
- DO NOT invent statistics, round up numbers, or fill gaps with plausible claims
- When answering role-fit questions, match specific requirements in the question to specific, relevant experience entries
- Reference actual work and real achievements, not generic summaries
- If asked about something not in the context, say you don't have that information

PERSONALITY:
- Friendly, helpful, and honest
- Use 🐼 emoji occasionally
- Be conversational but professional
- If Aryan isn't a good fit for something, say so honestly

ARYAN'S PROFILE:
Name: ${comprehensiveKnowledge.personal.name}
Role: ${comprehensiveKnowledge.personal.role}
Education: ${comprehensiveKnowledge.personal.education} (${comprehensiveKnowledge.personal.graduation})
Location: ${comprehensiveKnowledge.personal.location}

EXPERIENCE (complete timeline, most recent first):
${experienceList}

SKILLS:
${JSON.stringify(comprehensiveKnowledge.skills, null, 2)}

HOBBIES & INTERESTS:
${JSON.stringify(comprehensiveKnowledge.hobbies, null, 2)}

When answering role-fit questions:
1. Identify specific requirements mentioned in the question (e.g., "closing tickets", "testing", "UAT")
2. Search the experience list for directly relevant work
3. Reference those specific experiences by company name and describe the relevant work
4. Be honest about fit - don't oversell or claim unverified experience

Example: For "associate SE role requiring ticket completion and testing" → Highlight Webvine experience specifically (completed scoped tickets end to end, wrote and ran UAT)`;
    }
    async function getGeminiResponse(userMessage) {
        const systemPrompt = buildSystemPrompt();
        const fullPrompt = `${systemPrompt}\n\n---\n\nUser Question: ${userMessage}\n\nBamboo's Response:`;
        const res = await fetch("/api/gemini", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: fullPrompt })
        });
        const data = await res.json();
        if (!res.ok)
            throw new Error(data?.error || "Gemini request failed");
        return data.text;
    }
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    if (sendBtn && chatInput) {
        console.log('🐼 Chat elements found, attaching event listeners');
        sendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                chatInput.value = '';
                chatInput.blur();
            }
        });
        console.log('🐼 Chat is ready!');
    }
    else {
        console.error('🐼 Chat elements not found:', { sendBtn, chatInput, chatMessages });
    }
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, observerOptions);
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
    const heroSection = document.querySelector('#home');
    if (heroSection) {
        heroSection.classList.add('section-visible');
    }
    initStickyCardStacks();
});
function initStickyCardStacks() {
    const stickySections = Array.from(document.querySelectorAll('.sticky-section'));
    if (stickySections.length === 0) {
        console.log('⚠️ No sticky sections found');
        return;
    }
    console.log(`✅ Sticky stack initialized for ${stickySections.length} sections (hardcover push effect)`);
}
export {};
//# sourceMappingURL=main.js.map