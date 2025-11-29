        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const navLinks = document.getElementById('nav-links');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetSelector = this.getAttribute('href');
                if (targetSelector) {
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

        // Generate particles (fewer on mobile for performance)
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

        // Contact form handling
        const contactForm = document.querySelector('.contact-form');
        const formStatus = document.getElementById('form-status');

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const button = contactForm.querySelector('button[type="submit"]');
            const originalText = button.textContent;

            // Disable button and show loading state
            button.textContent = 'Sending...';
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
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Oops! Something went wrong. Please try again or email me directly.';
            } finally {
                button.textContent = originalText;
                button.disabled = false;
            }
        });

        // AI Assistant Chatbot
        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.getElementById('send-btn');
        const chatMessages = document.getElementById('chat-messages');

        // Knowledge base about Aryan
        const knowledge = {
            name: "Aryan Adhikari",
            role: "Software Engineer",
            experience: "2+ years",
            skills: {
                programming: ["Python", "JavaScript", "Java", "HTML", "CSS", "React", "Node.js"],
                ml: ["K-means", "Neural Networks", "Isolation Forest", "scikit-learn", "ML Pipelines"],
                tools: ["MongoDB", "Express", "N8N Automation", "Google Sheets API"],
                domains: ["Machine Learning", "Full-Stack Development", "Data Validation", "Automation", "System Integration"]
            },
            projects: [
                {
                    name: "Data Validation System with ML",
                    description: "ML pipeline with 97% accuracy, reduced manual work by 60%, $200K annual savings",
                    tech: ["Python", "K-means", "Neural Networks", "Isolation Forest"]
                },
                {
                    name: "BookHub - Review Platform",
                    description: "Supports 1000+ concurrent users, sub-second response times, 99.9% uptime",
                    tech: ["React", "Node.js", "MongoDB", "Express"]
                },
                {
                    name: "LinkedLeads Automation",
                    description: "90% reduction in lead generation time, processes 500+ postings daily",
                    tech: ["N8N", "Python", "Google Sheets API"]
                }
            ],
            experience_details: [
                "Team Lead & Consultant at Jacaranda Flame Consulting (Nov 2024 - Feb 2025)",
                "Led team of 5 for ML-based data validation system with 97% accuracy",
                "Student Ambassador at Scape (Aug 2024 - Present), 400% increase in event attendance",
                "IT System Analyst at LearnGrowBecome (Jun 2023 - Jul 2023), 30% efficiency improvement"
            ],
            tech_roles: ["software engineer", "full stack", "backend", "frontend", "ml engineer", "ai engineer", "data engineer", "python developer", "web developer", "automation engineer", "software developer"],
            non_tech_roles: ["accountant", "ca", "chartered accountant", "finance", "hr", "marketing", "sales", "manager", "consultant"]
        };

        // Response templates
        const responses = {
            greeting: [
                "Hi! I can help you understand how Aryan's experience fits your role. What would you like to know?",
                "Hello! Ask me about Aryan's skills, projects, or suitability for specific roles."
            ],
            default: "I can tell you about Aryan's experience, skills, projects, or assess his fit for tech roles. What would you like to know?",
            non_tech_role: "Aryan's background is specifically in technology - software engineering, ML/AI, and full-stack development. He wouldn't be a good fit for non-technical roles like accounting, finance, or HR. His expertise is in building software solutions and ML systems.",
            no_match: "I'm not sure I understand. You can ask about his skills, projects, experience, or whether he'd be suitable for specific tech roles."
        };

        // Pattern matching and response generation
        function generateResponse(userMessage) {
            const msg = userMessage.toLowerCase().trim();

            // Check for greetings
            if (/^(hi|hello|hey|greetings)/.test(msg)) {
                return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
            }

            // Check for non-tech roles
            const nonTechKeywords = knowledge.non_tech_roles;
            if (nonTechKeywords.some(role => msg.includes(role))) {
                return responses.non_tech_role;
            }

            // Check for job suitability questions
            if (/(suitable|fit|good|qualified|right).*(for|as)/.test(msg) || /is (he|aryan)/.test(msg)) {
                // Extract potential role
                const techRoles = knowledge.tech_roles;
                const matchedRole = techRoles.find(role => msg.includes(role));

                if (matchedRole) {
                    return assessJobFit(matchedRole);
                } else if (/(software|developer|engineer|tech)/.test(msg)) {
                    return "Yes, Aryan is well-suited for software engineering roles. He has 2+ years of experience building ML-powered solutions and full-stack applications, with proven success leading teams and delivering measurable business impact.";
                } else {
                    return "Could you specify which role you're asking about? Aryan specializes in software engineering, ML/AI, full-stack development, and automation.";
                }
            }

            // Skills questions
            if (/(skill|technology|tech stack|know|language|framework)/.test(msg)) {
                if (/(ml|machine learning|ai)/.test(msg)) {
                    return `Aryan has strong ML/AI capabilities including: ${knowledge.skills.ml.join(", ")}. He's architected ML pipelines processing 100K+ records with 97% accuracy and has experience with data validation systems.`;
                } else if (/(full.?stack|frontend|backend|web)/.test(msg)) {
                    return `Aryan is proficient in full-stack development with ${knowledge.skills.programming.join(", ")}. He's built scalable platforms like BookHub supporting 1000+ concurrent users with 99.9% uptime.`;
                } else {
                    return `Aryan's technical skills include: Programming (${knowledge.skills.programming.join(", ")}), ML/AI (${knowledge.skills.ml.slice(0, 3).join(", ")}), and tools like MongoDB, Express, and automation frameworks.`;
                }
            }

            // Projects questions
            if (/(project|built|created|developed|work)/.test(msg)) {
                const projectList = knowledge.projects.map(p => `• ${p.name}: ${p.description}`).join('\n');
                return `Aryan has worked on several impactful projects:\n\n${projectList}`;
            }

            // Experience questions
            if (/(experience|background|worked|job|role)/.test(msg)) {
                return `Aryan has 2+ years of experience including:\n• Team Lead at Jacaranda Flame Consulting (ML data validation)\n• Student Ambassador at Scape (400% event attendance increase)\n• IT System Analyst at LearnGrowBecome (30% efficiency improvement)\n\nHe specializes in ML-powered solutions and full-stack development.`;
            }

            // Leadership questions
            if (/(lead|team|management|manage)/.test(msg)) {
                return "Yes, Aryan has leadership experience. He led a team of 5 developers at Jacaranda Flame Consulting, delivering an ML-based data validation system with 97% accuracy that saved $200K annually.";
            }

            // Default response
            return responses.default;
        }

        // Assess job fit for specific roles
        function assessJobFit(role) {
            const fitResponses = {
                "software engineer": "Strong fit. Aryan has 2+ years of software engineering experience with proven success in ML systems and full-stack applications. His work includes leading teams, architecting scalable solutions, and delivering measurable business impact.",
                "full stack": "Excellent fit. Aryan has hands-on experience with React, Node.js, MongoDB, and Express. He built BookHub, a platform handling 1000+ concurrent users with sub-second response times and 99.9% uptime.",
                "ml engineer": "Great fit. Aryan has architected ML pipelines processing 100K+ records with 97% accuracy. He's experienced with K-means, neural networks, and isolation forests, reducing manual workload by 60%.",
                "ai engineer": "Good fit. Aryan has practical AI/ML experience including data validation systems, automation, and researching fairness in AI algorithms. He's worked with neural networks and ML pipelines at scale.",
                "python developer": "Strong fit. Python is one of Aryan's core languages. He's used it extensively for ML systems, automation, and data processing projects.",
                "backend": "Good fit. Aryan has backend development experience with Node.js, Express, MongoDB, and API integration. He's built systems supporting 1000+ concurrent users.",
                "frontend": "Moderate fit. While Aryan has frontend experience with React and JavaScript, his primary strength is in full-stack and backend development with ML capabilities.",
                "data engineer": "Moderate fit. Aryan has experience processing large datasets (100K+ records) and building ML pipelines, though his focus is more on software engineering with ML integration.",
                "automation engineer": "Good fit. Aryan developed LinkedLeads automation that reduced lead generation time by 90%, processing 500+ postings daily using N8N and Python."
            };

            return fitResponses[role] || `Aryan could be a fit for ${role} roles given his 2+ years in software engineering and ML. His core strengths are in building ML-powered solutions and full-stack applications.`;
        }

        // Send message function
        function sendMessage() {
            const message = chatInput.value.trim();
            if (!message) return;

            // Add user message
            const userMsg = document.createElement('div');
            userMsg.className = 'message user';
            userMsg.innerHTML = `<p>${message}</p>`;
            chatMessages.appendChild(userMsg);

            // Clear input
            chatInput.value = '';

            // Generate and add AI response
            setTimeout(() => {
                const response = generateResponse(message);
                const aiMsg = document.createElement('div');
                aiMsg.className = 'message assistant';

                // Convert newlines to HTML for formatted responses
                const formattedResponse = response.replace(/\n/g, '<br>');
                aiMsg.innerHTML = `<p>${formattedResponse}</p>`;

                chatMessages.appendChild(aiMsg);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 800);

            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Event listeners for chat
        sendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
