        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
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

        // Generate particles
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
            particlesContainer.appendChild(particle);
        }

        // Basic chat functionality (placeholder)
        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.getElementById('send-btn');
        const chatMessages = document.getElementById('chat-messages');

        function sendMessage() {
            const message = chatInput.value.trim();
            if (!message) return;

            // Add user message
            const userMsg = document.createElement('div');
            userMsg.className = 'message user';
            userMsg.textContent = message;
            chatMessages.appendChild(userMsg);

            // Clear input
            chatInput.value = '';

            // Simulate AI response (replace with actual API call)
            setTimeout(() => {
                const aiMsg = document.createElement('div');
                aiMsg.className = 'message assistant';
                aiMsg.textContent = 'This is where the AI response will appear. Connect this to your Claude API proxy to enable real conversations about your qualifications.';
                chatMessages.appendChild(aiMsg);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);

            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        sendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        // Form submission (placeholder)
        document.querySelector('.contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submission functionality to be implemented');
        });
