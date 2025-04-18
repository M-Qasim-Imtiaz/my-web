// main.js - Enhanced functionality for Anti-Terrorism Agency website
document.addEventListener('DOMContentLoaded', function() {
    // ===== 1. Mobile Menu Toggle =====
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    // ===== 2. Close Mobile Menu on Link Click =====
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // ===== 3. Report Form Submission =====
    const reportForm = document.getElementById('reportForm');
    if (reportForm) {
        reportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showSuccessModal('Report Submitted Successfully', 'Thank you for your report. Our team will review it immediately.');
            this.reset();
        });
    }

    // ===== 4. Contact Form Submission =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateEmail(this.querySelector('input[type="email"]').value)) {
                showSuccessModal('Message Sent Successfully', 'Thank you for your message. We will respond as soon as possible.');
                this.reset();
            } else {
                alert('Please enter a valid email address');
            }
        });
    }

    // ===== 5. Scroll Animations =====
    const services = document.querySelectorAll('.service-card, .achievement-card, .leadership-card, .emergency-card, .office-card');
    services.forEach((service, index) => {
        service.style.opacity = '0';
        service.style.transform = 'translateY(20px)';
        service.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });

    window.addEventListener('scroll', animateElements);
    animateElements();

    // ===== 6. Security Features =====
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('Right-click is disabled for security reasons.');
    });

    // ===== 7. Dark Mode Toggle =====
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '🌓';
    darkModeToggle.addEventListener('click', toggleDarkMode);
    document.body.appendChild(darkModeToggle);

    // Initialize dark mode from localStorage
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    // ===== 8. Back-to-Top Button =====
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(backToTopBtn);

    // Show/hide based on scroll
    window.addEventListener('scroll', () => {
        backToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });

    // ===== 9. Emergency Hotline =====
    const emergencyBtn = document.createElement('button');
    emergencyBtn.className = 'emergency-btn';
    emergencyBtn.innerHTML = '🚨 Emergency';
    emergencyBtn.addEventListener('click', () => {
        if (confirm('Call emergency hotline 0800-111-11?')) {
            window.location.href = 'tel:080011111';
        }
    });
    document.body.appendChild(emergencyBtn);

    // ===== 10. Active Navigation Highlight =====
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });

    // ===== Helper Functions =====
    function animateElements() {
        services.forEach(service => {
            const servicePosition = service.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            if (servicePosition < screenPosition) {
                service.style.opacity = '1';
                service.style.transform = 'translateY(0)';
            }
        });
    }

    function showSuccessModal(title, message) {
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.innerHTML = `
            <div class="success-content">
                <h3>${title}</h3>
                <p>${message}</p>
                <button onclick="this.parentElement.parentElement.remove()">OK</button>
            </div>
        `;
        document.body.appendChild(successMsg);
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Responsive adjustments
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});