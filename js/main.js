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
