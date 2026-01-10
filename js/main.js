// ========================================
// PROJECTS DATA STRUCTURE
// ========================================

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

// ========================================
// COMPREHENSIVE AI KNOWLEDGE BASE
// ========================================

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
            location: "Sydney, Australia",
            type: "Internship",
            achievements: [
                "Led cross-functional team of 5 developing ML-based data validation system",
                "Achieved 84% accuracy processing 100K+ healthcare records",
                "Reduced manual validation workload by 65%",
                "Conducted daily stand-ups and weekly client meetings",
                "Implemented K-means, Isolation Forest, Neural Networks, and One-Class SVM"
            ],
            technologies: ["Python", "scikit-learn", "PostgreSQL", "Git", "Agile/Scrum"]
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
                "Built strong community connections among international students"
            ],
            technologies: ["Event Coordination", "Community Building", "Leadership"]
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
                "Made programming accessible and fun for young learners"
            ],
            technologies: ["Python", "Teaching", "Curriculum Design"]
        },
        {
            company: "Practera (Learn Grow Become)",
            role: "IT System Analyst",
            duration: "June 2023 - July 2023",
            location: "Australia (Remote)",
            type: "Internship",
            achievements: [
                "Assisted 10+ Australian SMBs in technology integration",
                "Improved operational efficiency by 30%",
                "Developed automation solutions with Python, JavaScript, SQL"
            ],
            technologies: ["Python", "JavaScript", "SQL", "Automation", "Business Analytics"]
        },
        {
            company: "Practera (Mette Is Baking)",
            role: "IT Business Consultant",
            duration: "April 2023",
            location: "Australia (Remote)",
            type: "Internship",
            achievements: [
                "Provided business assistance across operational fields",
                "Delivered technology solutions for business optimization",
                "Collaborated in interdisciplinary team"
            ],
            technologies: ["Business Consulting", "Technology Integration", "Gantt Project Management"]
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
        "Java (Basic) - HackerRank (2025)",
        "Problem Solving (Basic) - HackerRank (2023)",
        "Python (Basic) - HackerRank (2022)",
        "Python Data Structures - University of Michigan/Coursera (2022)",
        "Introduction to Git and GitHub - Google (2023)",
        "Data Visualisation - Tata Consultancy Services (2023)",
        "AWS Cloud Practitioner - In Progress (2026)"
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

// ========================================
// DOM CONTENT LOADED
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // NAVBAR FUNCTIONALITY
    // ========================================

    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
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

    // ========================================
    // SMOOTH SCROLLING
    // ========================================

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

    // ========================================
    // ANIMATED PARTICLES
    // ========================================

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

    // ========================================
    // RENDER PROJECTS DYNAMICALLY
    // ========================================

    function renderProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;

        // Clear existing projects
        projectsGrid.innerHTML = '';

        // Render all projects
        projectsData.forEach((project, index) => {
            const projectCard = createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });
    }

    function createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-project-id', project.id);

        // Status badge if in development
        const statusBadge = project.status === 'in-development'
            ? '<span class="status-badge">In Development</span>'
            : '';

        card.innerHTML = `
            ${statusBadge}
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.shortDescription}</p>
            <div class="tech-stack">
                ${project.tech.slice(0, 4).map(tech =>
                    `<span class="tech-tag">${tech}</span>`
                ).join('')}
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

    // ========================================
    // EXPANDABLE PROJECT CARDS
    // ========================================

    function setupProjectExpansion() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn-expand')) {
                const button = e.target.closest('.btn-expand');
                const index = button.getAttribute('data-index');
                const detailsDiv = document.getElementById(`project-details-${index}`);
                const card = button.closest('.project-card');

                if (detailsDiv.style.display === 'none') {
                    // Expand
                    detailsDiv.style.display = 'block';
                    button.innerHTML = `
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 9l5 5H7z"/>
                        </svg>
                        Hide Details
                    `;
                    card.classList.add('expanded');
                } else {
                    // Collapse
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

    // Initialize projects
    renderProjects();
    setupProjectExpansion();

    // ========================================
    // CONTACT FORM HANDLING
    // ========================================

    const contactForm = document.querySelector('.contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const button = contactForm.querySelector('button[type="submit"]');
            const originalText = button.textContent;

            // Show loading state
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
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Oops! Something went wrong. Please try again or email me directly.';
                formStatus.style.display = 'block';
            } finally {
                button.textContent = originalText;
                button.disabled = false;
            }
        });
    }

    // ========================================
    // AI ASSISTANT CHATBOT
    // ========================================

    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');

    // AI Configuration (for future API integration)
    const AI_CONFIG = {
        useAPI: false, // Set to true when API key is configured
        apiEndpoint: '/api/chat', // Your backend endpoint for AI
        apiKey: null, // Set this to your OpenAI/Claude API key
        model: 'gpt-4' // or 'claude-3-opus-20240229'
    };

    // Response templates
    const responses = {
        greeting: [
            "Hi! I can help you understand how Aryan's experience fits your role. What would you like to know?",
            "Hello! Ask me about Aryan's skills, projects, or suitability for specific roles.",
            "Hey there! I'm here to answer questions about Aryan's qualifications and experience."
        ],
        default: "I can tell you about Aryan's experience, skills, projects, certifications, or assess his fit for tech roles. What would you like to know?",
        non_tech_role: "Aryan's background is specifically in technology - software engineering, ML/AI, and full-stack development. He wouldn't be a good fit for non-technical roles like accounting, finance, or HR. His expertise is in building software solutions, ML systems, and leading technical teams.",
        no_match: "I'm not sure I understand. You can ask about his skills, projects, experience, education, certifications, or whether he'd be suitable for specific tech roles."
    };

    // Enhanced pattern matching and response generation
    function generateResponse(userMessage) {
        const msg = userMessage.toLowerCase().trim();

        // Greetings
        if (/^(hi|hello|hey|greetings|good morning|good afternoon)/.test(msg)) {
            return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
        }

        // Non-tech roles
        if (comprehensiveKnowledge.non_tech_roles.some(role => msg.includes(role))) {
            return responses.non_tech_role;
        }

        // Education questions
        if (/(education|degree|university|study|studied|graduate|graduation)/.test(msg)) {
            return `Aryan holds a ${comprehensiveKnowledge.personal.education} with an EIHWAM (Engineering Honours Weighted Average Mark) of ${comprehensiveKnowledge.personal.eihwam}. He graduated in ${comprehensiveKnowledge.personal.graduation}. His research included:\n\n• ${comprehensiveKnowledge.research[0]}\n• ${comprehensiveKnowledge.research[1]}`;
        }

        // Certification questions
        if (/(certification|certificate|certified|credential)/.test(msg)) {
            const certList = comprehensiveKnowledge.certifications.slice(0, 5).join('\n• ');
            return `Aryan has multiple professional certifications including:\n\n• ${certList}\n\n...and more. He's also currently working towards AWS Cloud Practitioner certification.`;
        }

        // Job suitability questions
        if (/(suitable|fit|good|qualified|right|match).*(for|as|role|position)/.test(msg) || /is (he|aryan)/.test(msg)) {
            const matchedRole = comprehensiveKnowledge.tech_roles.find(role => msg.includes(role));

            if (matchedRole) {
                return assessJobFit(matchedRole);
            } else if (/(software|developer|engineer|tech|programming)/.test(msg)) {
                return `Yes, Aryan is an excellent fit for software engineering roles. He has ${comprehensiveKnowledge.personal.experience_years} years of experience with:\n\n• Leading teams (managed team of 5 at Jacaranda Flame)\n• Building ML-powered solutions (84% accuracy, 100K+ records)\n• Full-stack development (React, Node.js, Spring Boot)\n• Microservices architecture\n• Enterprise-scale applications\n\nHe's delivered measurable business impact including 65% reduction in manual work and significant cost savings.`;
            }
        }

        // Skills questions
        if (/(skill|technology|tech stack|know|language|framework|tool)/.test(msg)) {
            if (/(ml|machine learning|ai|artificial intelligence)/.test(msg)) {
                const mlSkills = comprehensiveKnowledge.skills.specializations[0];
                return `Aryan has strong ML/AI capabilities:\n\n${mlSkills}\n\nHe's applied these in production at Jacaranda Flame Consulting, achieving 84% accuracy on 100K+ healthcare records. His thesis research focused on K-means optimization (23% faster convergence) and fairness-aware ML methods.`;
            } else if (/(full.?stack|frontend|backend|web)/.test(msg)) {
                const frontendSkills = comprehensiveKnowledge.skills.frameworks.frontend.join(', ');
                const backendSkills = comprehensiveKnowledge.skills.frameworks.backend.join(', ');
                return `Aryan is proficient in full-stack development:\n\n**Frontend:** ${frontendSkills}\n**Backend:** ${backendSkills}\n**Databases:** ${comprehensiveKnowledge.skills.databases.join(', ')}\n\nHe's built enterprise applications like YAAKE (AI recruitment platform) and microservices e-commerce systems.`;
            } else if (/(java|spring)/.test(msg)) {
                return `Aryan is proficient in Java and Spring Boot. He's built multiple production applications including:\n\n• Over-save: Budget tracking app with Spring Boot, PostgreSQL, OAuth2 (16 REST endpoints)\n• Microservices E-Commerce: 4-service architecture with Spring Security, JWT\n\nHe's also HackerRank Java (Basic) certified.`;
            } else if (/(python)/.test(msg)) {
                return `Python is one of Aryan's core strengths. He's used it extensively for:\n\n• ML systems (scikit-learn, pandas, NumPy)\n• Data validation (100K+ records processing)\n• Automation (N8N pipelines, web scraping)\n• Teaching (CodeCamp instructor for 50+ students)\n\nHe's HackerRank Python certified and completed University of Michigan's Python courses.`;
            } else {
                const proficientLangs = comprehensiveKnowledge.skills.programming.proficient.join(', ');
                return `Aryan's technical skills include:\n\n**Languages:** ${proficientLangs}\n**Specializations:** Microservices, ML/AI, RESTful APIs, OAuth2/JWT, Event-Driven Architecture\n**Tools:** Git, Docker, Maven, Gradle, N8N, Power BI\n\nHe's worked with ${comprehensiveKnowledge.skills.databases.join(', ')} databases and multiple frameworks across frontend and backend.`;
            }
        }

        // Projects questions
        if (/(project|built|created|developed|portfolio|work on)/.test(msg)) {
            if (/(ai|ml|machine learning|artificial intelligence)/.test(msg)) {
                return `Aryan has built several AI/ML projects:\n\n• **YAAKE**: AI-powered recruitment platform with Google Gemini AI for resume parsing, ATS scoring, mock interviews (82 clones in 14 days)\n• **ML Data Validation**: Healthcare system with 84% accuracy, K-means, Neural Networks, Isolation Forest (100K+ records)\n• **Crypto Price Prediction**: Time series ML model (in development)\n\nThese demonstrate practical AI application in production environments.`;
            } else {
                const featuredProjects = comprehensiveKnowledge.projects.slice(0, 3);
                const projectList = featuredProjects.map(p =>
                    `• **${p.name}**: ${p.description}`
                ).join('\n\n');
                return `Aryan has built ${projectsData.length} major projects including:\n\n${projectList}\n\nEach project demonstrates full-stack capabilities, from frontend to backend to deployment.`;
            }
        }

        // Experience questions
        if (/(experience|background|worked|job|employment|work history)/.test(msg)) {
            if (/(lead|leadership|team|manage|management)/.test(msg)) {
                const leadership = comprehensiveKnowledge.experience[0];
                return `Aryan has significant leadership experience:\n\n**${leadership.role} at ${leadership.company}**\n• Led cross-functional team of 5 members\n• Conducted daily stand-ups using Agile/Scrum\n• Managed weekly client meetings and product demos\n• Achieved 84% ML accuracy on 100K+ records\n• Reduced manual workload by 65%\n\nHe's also mentored 50+ students as a CodeCamp instructor and coordinated events for 250+ residents as Scape Ambassador (200% engagement increase).`;
            } else {
                const exp = comprehensiveKnowledge.experience.slice(0, 3);
                const expList = exp.map(e =>
                    `• **${e.role}** at ${e.company} (${e.duration})\n  ${e.achievements[0]}`
                ).join('\n\n');
                return `Aryan has ${comprehensiveKnowledge.personal.experience_years} years of professional experience:\n\n${expList}\n\nHe specializes in ML-powered solutions, full-stack development, and team leadership.`;
            }
        }

        // Leadership questions
        if (/(lead|team|management|manage|mentor|teaching)/.test(msg)) {
            return `Yes, Aryan has extensive leadership experience:\n\n• **Team Lead** at Jacaranda Flame: Managed 5 developers, delivered ML system with 84% accuracy\n• **Coding Instructor** at CodeCamp: Taught 50+ students Python programming\n• **Student Ambassador** at Scape: Coordinated events for 250+ residents (200% engagement increase)\n• **Technical Mentor**: Guided 6 high school students to top-3 competition placement\n\nHe's comfortable with Agile/Scrum, client communication, and stakeholder management.`;
        }

        // Availability/location questions
        if (/(available|availability|location|where|based|relocate)/.test(msg)) {
            return `Aryan is based in ${comprehensiveKnowledge.personal.location} and graduated in ${comprehensiveKnowledge.personal.graduation}. He's open to discussing opportunities - feel free to reach out via the contact form below!`;
        }

        // Default response
        return responses.default;
    }

    // Assess job fit for specific roles
    function assessJobFit(role) {
        const fitResponses = {
            "software engineer": `**Excellent fit.** Aryan has ${comprehensiveKnowledge.personal.experience_years} years of software engineering experience with proven success:\n\n• Led team of 5 at Jacaranda Flame Consulting\n• Built 9+ production applications (YAAKE, Over-save, Microservices platform)\n• Achieved 84% ML accuracy on 100K+ healthcare records\n• 65% reduction in manual workload\n• Experience with React, Node.js, Spring Boot, Python\n• Strong in Agile/Scrum, client communication, and technical leadership`,

            "full stack": `**Excellent fit.** Aryan has extensive full-stack experience:\n\n**Frontend:** React.js, HTML/CSS, JavaScript\n**Backend:** Node.js, Express, Spring Boot, Django\n**Databases:** PostgreSQL, MongoDB, MySQL\n\n**Projects:** YAAKE (React/Node/MongoDB), BookHub (React/Node/Django), Over-save (Spring Boot/PostgreSQL)\n\nHe's built systems handling 1000+ concurrent users with OAuth2, JWT, and microservices architecture.`,

            "ml engineer": `**Strong fit.** Aryan has production ML experience:\n\n• Architected ML pipeline processing 100K+ healthcare records (84% accuracy)\n• Implemented K-means, Neural Networks, Isolation Forest, One-Class SVM\n• Research: K-means optimization (23% faster), fairness-aware ML\n• Built YAAKE with Google Gemini AI integration\n• Proficient in scikit-learn, pandas, NumPy\n• Led ML team at Jacaranda Flame Consulting`,

            "ai engineer": `**Strong fit.** Aryan has practical AI experience:\n\n• YAAKE: AI-powered recruitment platform (resume parsing, ATS scoring, mock interviews)\n• ML Data Validation: 84% accuracy with multiple algorithms\n• Research in fairness-aware ML methods\n• Google Gemini AI integration\n• Experience with neural networks, clustering, anomaly detection`,

            "python developer": `**Excellent fit.** Python is Aryan's core strength:\n\n• ML systems (scikit-learn, pandas, NumPy)\n• Data processing (100K+ records)\n• Automation (N8N, web scraping)\n• Teaching experience (CodeCamp instructor)\n• HackerRank Python certified\n• University of Michigan Python coursework`,

            "java developer": `**Strong fit.** Aryan is proficient in Java:\n\n• Over-save: Spring Boot application (16 REST endpoints, OAuth2, PostgreSQL)\n• Microservices E-Commerce: 4-service architecture (Spring Boot, Spring Security, JWT)\n• HackerRank Java certified\n• Maven and Gradle build automation\n• Enterprise-scale application development`,

            "backend": `**Strong fit.** Aryan has solid backend experience:\n\n• Node.js/Express: YAAKE, BookHub\n• Spring Boot: Over-save, Microservices platform\n• Databases: PostgreSQL, MongoDB, MySQL\n• RESTful API design (16+ endpoints)\n• OAuth2, JWT, Spring Security\n• Microservices and event-driven architecture`,

            "frontend": `**Moderate fit.** Aryan has frontend experience but excels more in full-stack/backend:\n\n• React.js projects (YAAKE, BookHub)\n• HTML/CSS, JavaScript, TailwindCSS\n• Responsive design\n• API integration\n\nHis primary strengths are in backend development and ML integration, but he's capable of frontend work.`,

            "data engineer": `**Moderate fit.** Aryan has relevant experience:\n\n• Data pipeline for 100K+ healthcare records\n• ETL processes and data transformation\n• PostgreSQL, MongoDB database work\n• Python data processing (pandas, NumPy)\n• Automation pipelines (N8N)\n\nHis focus is more software engineering with ML, but he has strong data processing capabilities.`,

            "devops": `**Moderate fit.** Aryan has some DevOps experience:\n\n• Docker containerization\n• Microservices deployment\n• Git/GitHub workflows\n• Gradle/Maven build automation\n• AWS Cloud Practitioner (in progress)\n\nHis primary strength is software development, but he understands DevOps practices.`,

            "automation engineer": `**Strong fit.** Aryan has automation expertise:\n\n• LinkedLeads: 95% time reduction, 500+ postings/day\n• N8N workflow automation\n• Python scripting and web scraping\n• Data transformation pipelines\n• API integration and automation\n• Improved efficiency by 30% at Practera`
        };

        return fitResponses[role] || `Aryan could be a fit for ${role} roles given his ${comprehensiveKnowledge.personal.experience_years} years in software engineering and ML. His core strengths are in building ML-powered solutions, full-stack applications, and leading technical teams.`;
    }

    // Send message function (rule-based for now, AI API integration ready)
    async function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'message user';
        userMsg.innerHTML = `<p>${escapeHtml(message)}</p>`;
        chatMessages.appendChild(userMsg);

        // Clear input
        chatInput.value = '';

        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message assistant typing-indicator';
        typingIndicator.innerHTML = '<p><span class="dot"></span><span class="dot"></span><span class="dot"></span></p>';
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Generate response (AI or rule-based)
        let response;

        if (AI_CONFIG.useAPI && AI_CONFIG.apiKey) {
            try {
                response = await getAIResponse(message);
            } catch (error) {
                console.error('AI API error:', error);
                response = generateResponse(message); // Fallback to rule-based
            }
        } else {
            // Use rule-based system
            await new Promise(resolve => setTimeout(resolve, 800));
            response = generateResponse(message);
        }

        // Remove typing indicator
        typingIndicator.remove();

        // Add AI response
        const aiMsg = document.createElement('div');
        aiMsg.className = 'message assistant';
        const formattedResponse = response.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        aiMsg.innerHTML = `<p>${formattedResponse}</p>`;
        chatMessages.appendChild(aiMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // AI API integration (ready for when you add API key)
    async function getAIResponse(userMessage) {
        const response = await fetch(AI_CONFIG.apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${AI_CONFIG.apiKey}`
            },
            body: JSON.stringify({
                model: AI_CONFIG.model,
                messages: [
                    {
                        role: 'system',
                        content: `You are a career assistant helping recruiters understand Aryan Adhikari's qualifications. Here is comprehensive information about him: ${JSON.stringify(comprehensiveKnowledge)}. Provide helpful, accurate, and professional responses about his skills, experience, and fit for roles.`
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
                ]
            })
        });

        const data = await response.json();
        return data.choices[0].message.content;
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Event listeners for chat
    if (sendBtn && chatInput) {
        sendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});
