import { API_CONFIG } from './config.js';
const projectsData = [
    {
        id: 'yaake',
        title: 'YAAKE - AI-Powered Career Platform',
        shortDescription: 'Comprehensive recruitment platform with AI-powered resume parsing, ATS scoring, mock interviews, and cover letter generation.',
        fullDescription: `Comprehensive recruitment platform integrating Google Gemini AI for job seekers and recruiters. Features include:

• AI-powered resume parsing and analysis
• Automated ATS (Applicant Tracking System) scoring
• Mock interview simulation with AI feedback
• AI-generated cover letter creation
• Role-based access control for users and recruiters
• RESTful API with 10+ feature modules
• JWT authentication and rate limiting

The platform received significant developer interest with 82 repository clones and 384 views within 14 days of launch.`,
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Gemini AI', 'JWT', 'RBAC', 'RESTful APIs'],
        timeline: 'August - October 2025',
        impact: ['82 repository clones in 14 days', '384 repository views', 'Real-world AI in recruitment'],
        links: {
            github: '#',
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
            github: '#',
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
            github: '#',
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
            github: '#',
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
const comprehensiveKnowledge = {
    personal: {
        name: "Aryan Adhikari",
        role: "Software Engineer",
        education: "Bachelor of Engineering Honours (Software) - University of Sydney",
        graduation: "November 2025",
        experience_years: "2+",
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
            ml: ["scikit-learn", "pandas", "NumPy", "matplotlib", "seaborn"]
        },
        databases: ["PostgreSQL", "MongoDB", "MySQL"],
        tools: ["Git", "GitHub", "Maven", "Gradle", "Docker", "N8N", "Power BI"],
        specializations: [
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
            company: "Jacaranda Flame Consulting",
            role: "Software Engineer Intern (Team Lead)",
            duration: "November 2024 - February 2025",
            location: "Sydney, Australia (Hybrid)",
            type: "Internship",
            achievements: [
                "Led cross-functional team of 5 developing ML-based data validation system for HealthShare's Practitioner Database",
                "Achieved 84% accuracy processing 100K+ healthcare records",
                "Reduced manual validation workload by 65%",
                "Orchestrated daily stand-ups using Agile/Scrum methodologies",
                "Conducted weekly client meetings with HealthShare stakeholders",
                "Implemented K-means, Isolation Forest, Neural Networks, and One-Class SVM",
                "Built RESTful APIs for system integration and data access",
                "Created automated data pipeline with comprehensive testing framework"
            ],
            technologies: ["Python", "scikit-learn", "NumPy", "pandas", "PostgreSQL", "Git", "Agile/Scrum", "RESTful APIs", "ML Algorithms"]
        },
        {
            company: "Scape",
            role: "Student Ambassador",
            duration: "August 2024 - September 2025",
            location: "Sydney, Australia",
            type: "Part-time",
            achievements: [
                "Coordinated events for 250+ international student residents",
                "Achieved 200% increase in event engagement",
                "Created inclusive community atmosphere for diverse student population",
                "Built strong community connections among international students"
            ],
            technologies: ["Event Coordination", "Community Building", "Leadership", "Cross-Cultural Communication"]
        },
        {
            company: "CodeCamp Australia",
            role: "Coding Instructor",
            duration: "April 2023 - April 2024",
            location: "Sydney, Australia",
            type: "Part-time",
            achievements: [
                "Taught programming fundamentals to 50+ students aged 7-13",
                "Designed hands-on, project-based learning activities",
                "Developed age-appropriate curriculum materials",
                "Made programming accessible and fun for young learners",
                "Fostered computational thinking skills in children"
            ],
            technologies: ["Python", "Teaching", "Curriculum Design", "Pedagogy", "Educational Technology"]
        },
        {
            company: "Practera (Learn Grow Become)",
            role: "IT System Analyst",
            duration: "June 2023 - July 2023",
            location: "Australia (Remote)",
            type: "Internship",
            achievements: [
                "Assisted 10+ Australian SMBs in integrating modern technology solutions",
                "Improved operational efficiency by 30% across client portfolio",
                "Developed custom automation solutions using Python, JavaScript, and SQL",
                "Built inventory management systems for multiple clients",
                "Created analytics dashboards for business intelligence"
            ],
            technologies: ["Python", "JavaScript", "SQL", "Automation Solutions", "Business Analytics", "Inventory Systems"]
        },
        {
            company: "Practera (Mette Is Baking)",
            role: "IT Business Consultant",
            duration: "April 2023",
            location: "Australia (Remote)",
            type: "Internship",
            achievements: [
                "Provided comprehensive business assistance across operational fields",
                "Delivered financial support analysis and recommendations",
                "Implemented technology solutions to optimize business plans",
                "Worked in diverse team with interdisciplinary collaboration",
                "Delivered measurable improvements in business efficiency"
            ],
            technologies: ["Business Consulting", "Technology Integration", "Gantt Project Management", "Financial Analysis", "Strategic Planning"]
        },
        {
            company: "Biotech Mentorship Program",
            role: "Technical Mentor",
            duration: "September 2023",
            location: "Sydney, Australia",
            type: "Mentorship",
            achievements: [
                "Mentored team of 6 high school students in computational biology research project",
                "Guided project timeline and milestones",
                "Provided technical expertise in programming and data analysis",
                "Students secured top-3 placement in regional competition"
            ],
            technologies: ["Computational Biology", "Mentoring", "Python", "Data Analysis", "Research Methodology"]
        },
        {
            company: "Tata Consultancy Services",
            role: "Data Visualisation Job Simulation",
            duration: "June 2023 - July 2023",
            location: "Virtual (Forage)",
            type: "Virtual Experience",
            achievements: [
                "Created visual representations and dashboards using Microsoft Power BI",
                "Selected appropriate visualization types based on data characteristics",
                "Communicated insights and analysis findings through visual storytelling",
                "Translated complex data patterns into understandable business narratives"
            ],
            technologies: ["Microsoft Power BI", "Data Visualization", "Business Intelligence", "Data Storytelling"]
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
document.addEventListener('DOMContentLoaded', () => {
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
    const navLinks = document.getElementById('nav-links');
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
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
    const particlesContainer = document.getElementById('particles');
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
    function renderProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid)
            return;
        projectsGrid.innerHTML = '';
        projectsData.forEach((project, index) => {
            const projectCard = createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });
    }
    function createProjectCard(project, index) {
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
    renderProjects();
    setupProjectExpansion();
    const contactForm = document.querySelector('.contact-form');
    const formStatus = document.getElementById('form-status');
    if (contactForm && formStatus) {
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
    let genAI;
    let model;
    try {
        genAI = new GoogleGenerativeAI(API_CONFIG.GEMINI_API_KEY);
        model = genAI.getGenerativeModel({ model: AI_CONFIG.model });
    }
    catch (error) {
        console.error('Failed to initialize Gemini AI:', error);
        AI_CONFIG.useAPI = false;
    }
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
                return `🐼 Absolutely! My human would be an excellent fit for software engineering roles. He's got ${comprehensiveKnowledge.personal.experience_years} years of real experience:\n\n• Leading teams (managed 5 developers at Jacaranda Flame)\n• Building ML-powered solutions (84% accuracy, 100K+ records)\n• Full-stack development (React, Node.js, Spring Boot)\n• Microservices architecture\n• Enterprise-scale applications\n\nHe's delivered real impact - like 65% reduction in manual work and big cost savings. But I'll be honest: he's best at hands-on technical work and team leadership, not executive/CEO stuff!`;
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
                const leadership = comprehensiveKnowledge.experience[0];
                return `🐼 My human's got real leadership chops!\n\n**${leadership.role} at ${leadership.company}**\n• Led a team of 5 developers\n• Ran daily stand-ups (Agile/Scrum)\n• Handled weekly client meetings\n• Hit 84% ML accuracy on 100K+ records\n• Cut manual work by 65%\n\nPlus he taught 50+ kids Python at CodeCamp and ran events for 250+ students as Scape Ambassador (200% more engagement!). He knows how to lead AND mentor.`;
            }
            else {
                const exp = comprehensiveKnowledge.experience.slice(0, 3);
                const expList = exp.map(e => `• **${e.role}** at ${e.company} (${e.duration})\n  ${e.achievements[0]}`).join('\n\n');
                return `🐼 My human's got ${comprehensiveKnowledge.personal.experience_years} years of solid experience:\n\n${expList}\n\nHe loves building ML solutions, full-stack apps, and leading technical teams!`;
            }
        }
        if (/(lead|team|management|manage|mentor|teaching)/.test(msg)) {
            return `🐼 Oh yes! Aryan's led teams and mentored tons of people:\n\n• **Team Lead** at Jacaranda Flame: Managed 5 devs, built ML system with 84% accuracy\n• **Coding Instructor** at CodeCamp: Taught 50+ kids Python\n• **Student Ambassador** at Scape: Organized events for 250+ students (doubled engagement!)\n• **Technical Mentor**: Helped 6 high schoolers get top-3 in a competition\n\nHe's great with Agile/Scrum, talking to clients, and keeping everyone on track.`;
        }
        if (/(available|availability|location|where|based|relocate)/.test(msg)) {
            return `🐼 My human's based in ${comprehensiveKnowledge.personal.location} and just graduated in ${comprehensiveKnowledge.personal.graduation}. He's definitely open to opportunities! Hit him up using the contact form below and let's chat!`;
        }
        return responses.default;
    }
    function assessJobFit(role) {
        const fitResponses = {
            "software engineer": `🐼 **Excellent fit!** My human has ${comprehensiveKnowledge.personal.experience_years} years of solid software engineering experience:\n\n• Led a team of 5 at Jacaranda Flame Consulting\n• Built 9+ production apps (YAAKE, Over-save, Microservices platform)\n• Achieved 84% ML accuracy on 100K+ healthcare records\n• Reduced manual workload by 65%\n• Strong with React, Node.js, Spring Boot, Python\n• Experienced in Agile/Scrum, client communication, technical leadership\n\nHe'd be a great fit for software engineering roles!`,
            "full stack": `🐼 **Excellent fit!** Aryan's got the full-stack experience:\n\n**Frontend:** React.js, HTML/CSS, JavaScript\n**Backend:** Node.js, Express, Spring Boot, Django\n**Databases:** PostgreSQL, MongoDB, MySQL\n\n**Real projects:** YAAKE (React/Node/MongoDB), BookHub (React/Node/Django), Over-save (Spring Boot/PostgreSQL)\n\nHe's built systems for 1000+ users with OAuth2, JWT, and microservices. The whole package!`,
            "ml engineer": `🐼 **Strong fit!** My human has real production ML experience:\n\n• Built ML pipeline processing 100K+ healthcare records (84% accuracy)\n• Implemented K-means, Neural Networks, Isolation Forest, One-Class SVM\n• Research: K-means optimization (23% faster!), fairness-aware ML\n• Created YAAKE with Google Gemini AI\n• Expert in scikit-learn, pandas, NumPy\n• Led ML team at Jacaranda Flame\n\nHe'd do great in ML engineering roles!`,
            "ai engineer": `🐼 **Strong fit!** Aryan's got practical AI chops:\n\n• YAAKE: AI recruitment platform (resume parsing, ATS scoring, mock interviews)\n• ML Data Validation: 84% accuracy with multiple algorithms\n• Research in fairness-aware ML\n• Google Gemini AI integration\n• Experience with neural networks, clustering, anomaly detection\n\nPerfect for AI engineering positions!`,
            "python developer": `🐼 **Excellent fit!** Python is my human's superpower:\n\n• ML systems (scikit-learn, pandas, NumPy)\n• Processing 100K+ records\n• Automation (N8N, web scraping)\n• Teaching (CodeCamp instructor for 50+ kids)\n• HackerRank Python certified\n• University of Michigan Python courses\n\nHe'd excel as a Python developer!`,
            "java developer": `🐼 **Strong fit!** Aryan knows Java well:\n\n• Over-save: Spring Boot app (16 REST endpoints, OAuth2, PostgreSQL)\n• Microservices E-Commerce: 4-service architecture (Spring Boot, Spring Security, JWT)\n• HackerRank Java certified\n• Maven and Gradle experience\n• Enterprise-scale development\n\nGood match for Java developer roles!`,
            "backend": `🐼 **Strong fit!** Backend is one of my human's strengths:\n\n• Node.js/Express: YAAKE, BookHub\n• Spring Boot: Over-save, Microservices\n• Databases: PostgreSQL, MongoDB, MySQL\n• RESTful APIs (16+ endpoints)\n• OAuth2, JWT, Spring Security\n• Microservices & event-driven architecture\n\nHe'd be great in backend roles!`,
            "frontend": `🐼 **Moderate fit.** Honest assessment: Aryan can do frontend, but it's not his main strength:\n\n• React.js projects (YAAKE, BookHub)\n• HTML/CSS, JavaScript, TailwindCSS\n• Responsive design\n• API integration\n\nHe's better at backend and ML work, but can handle frontend when needed. If you need a frontend specialist, there might be better fits!`,
            "data engineer": `🐼 **Moderate fit.** My human has relevant skills:\n\n• Data pipeline for 100K+ healthcare records\n• ETL processes and data transformation\n• PostgreSQL, MongoDB\n• Python data processing (pandas, NumPy)\n• Automation pipelines (N8N)\n\nHis focus is more on software engineering with ML, but he's got solid data processing capabilities!`,
            "devops": `🐼 **Moderate fit.** Being honest here - DevOps isn't Aryan's main specialty:\n\n• Docker containerization\n• Microservices deployment\n• Git/GitHub workflows\n• Gradle/Maven build tools\n• AWS Cloud Practitioner (in progress)\n\nHe understands DevOps and can work with it, but his strength is in software development. For a dedicated DevOps role, you might want someone more specialized!`,
            "automation engineer": `🐼 **Strong fit!** My human's great at automation:\n\n• LinkedLeads: 95% time saved, 500+ postings/day automated\n• N8N workflow automation\n• Python scripting and web scraping\n• Data transformation pipelines\n• API integration\n• 30% efficiency boost at Practera\n\nHe'd be excellent for automation engineering!`
        };
        return fitResponses[role] || `🐼 My human could potentially fit ${role} roles - he's got ${comprehensiveKnowledge.personal.experience_years} years in software engineering and ML. His main strengths are building ML solutions, full-stack apps, and leading technical teams. Want me to be more specific about how his skills match this role?`;
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
        if (AI_CONFIG.useAPI && model) {
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
    async function getGeminiResponse(userMessage) {
        const systemPrompt = `You are Bamboo 🐼, a friendly panda AI assistant helping people get to know Aryan Adhikari - both as an engineer and as a person. Here is comprehensive information about your human:

${JSON.stringify(comprehensiveKnowledge, null, 2)}

PERSONALITY GUIDELINES:
- You're Bamboo, Aryan's helpful panda assistant
- Use first-person references: "my human" when talking about Aryan
- Add 🐼 emoji occasionally for personality (not every message)
- Balance your tone: playful for casual/personal questions, professional for job fit assessments
- Be HONEST about qualifications - don't oversell. If something isn't Aryan's strength, say so!
- Highlight hobbies and personal interests to help people connect with him as a person
- Keep responses concise (2-4 paragraphs max)
- Use bullet points for lists

WHAT TO EMPHASIZE:
- His real production experience and measurable impact
- Hobbies: Gaming (Valorant), Bouldering, Basketball, Gym
- Honest strengths: Software engineering, ML/AI, full-stack development, team leadership
- Being realistic: He's great at technical work, not executive/CEO roles
- His personality: problem solver, team player, honest about capabilities`;
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: systemPrompt }],
                },
                {
                    role: "model",
                    parts: [{ text: "🐼 Got it! I'm Bamboo, and I'll help people get to know my human Aryan - his tech skills, his hobbies, and honestly assess if he'd be a good fit for their roles. I'll be friendly for personal questions and professional for job assessments, and I'll always be honest about his strengths and limitations!" }],
                },
            ],
        });
        const result = await chat.sendMessage(userMessage);
        const response = await result.response;
        return response.text();
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
        console.log('🐼 Chat is ready!');
    }
    else {
        console.error('🐼 Chat elements not found:', { sendBtn, chatInput, chatMessages });
    }
});
//# sourceMappingURL=main.js.map