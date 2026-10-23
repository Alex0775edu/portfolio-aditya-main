// Mobile alert top of script.js
if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    let alertBox = document.createElement("div");
    alertBox.innerText = "For the best experience, please view this website on a desktop mode.";

    alertBox.style.position = "fixed";
    alertBox.style.top = "20px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.backgroundColor = "#ffdd57";
    alertBox.style.color = "#000";
    alertBox.style.padding = "15px 25px";
    alertBox.style.borderRadius = "8px";
    alertBox.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    alertBox.style.zIndex = "9999";
    alertBox.style.fontFamily = "Arial, sans-serif";
    alertBox.style.fontSize = "16px";

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}

// DOM Elements
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const preloader = document.querySelector('.preloader');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const submitBtn = document.getElementById('submitBtn');
const newsletterForm = document.getElementById('newsletterForm');

// Data Arrays
const skills = [
    { 
        name: "HTML5", 
        level: 95, 
        icon: "fab fa-html5", 
        description: "Semantic markup, accessibility, modern HTML5 APIs" 
    },
    { 
        name: "CSS3", 
        level: 90, 
        icon: "fab fa-css3-alt", 
        description: "Advanced animations, Flexbox, Grid, responsive design" 
    },
    { 
        name: "JavaScript", 
        level: 85, 
        icon: "fab fa-js", 
        description: "ES6+, DOM manipulation, async programming, APIs" 
    },
    { 
        name: "Canva", 
        level: 80, 
        icon: "fab fa-canva", 
        description: "Poster,Banner,Logo,Thumblin,etc" 
    },
    { 
        name: "Ms-Office", 
        level: 95, 
        icon: "fas fa-microsoft", 
        description: "Ms-Word,Ms-excel,Ms-powerpoint,etc" 
    },
    { 
        name: "Firebase", 
        level: 75, 
        icon: "fas fa-fire", 
        description: "Authentication, Firestore, Cloud Functions, hosting" 
    },
    { 
        name: "Django", 
        level: 70, 
        icon: "fab fa-python", 
        description: "Python web framework, REST APIs, authentication" 
    },
    { 
        name: "Git & GitHub", 
        level: 90, 
        icon: "fab fa-github", 
        description: "Version control, collaboration, CI/CD workflows" 
    },
    { 
        name: "UI/UX Design", 
        level: 75, 
        icon: "fas fa-palette", 
        description: "Figma, Adobe XD, user research, prototyping" 
    }
];

const projects = [
    {
        title: "Attendance Management System",
        description: "A comprehensive system for tracking and managing student attendance with real-time analytics, reporting, and automated notifications.",
        tags: ["HTML","CSS","JavaScript", "FireBase", "Bootstrap"],
        category: "web",
        liveLink: "https://attendance-system-five-fawn.vercel.app/",
        
        icon: "fas fa-clipboard-check"
    },
    {
        title: "School Website",
        description: "Modern responsive website for educational institutions with admin dashboard, event management, and student portal.",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "web",
        liveLink: "#",
        
        icon: "fas fa-school"
    },
    {
        title: "Internship System",
        description: "Platform connecting students with internship opportunities featuring application tracking and mentor matching.",
        tags: ["React", "Firebase", "Tailwind"],
        category: "web",
        liveLink: "https://aaditech.pythonanywhere.com/",
       
        icon: "fas fa-briefcase"
    },
];

const education = [
    {
        date: "2024 - Present",
        title: "Diploma in Computer Science & Engineering",
        institution: "MMPIT ,Dhanapur,Chandauli,(U.P.)",
        description: "Specializing in Web Technologies and Human-Computer Interaction.  Relevant coursework: Data Structures, Algorithms, Web Development, Database Management."
    },
    
    {
        date: "2023 - 2024",
        title: "Higher Secondary Education (12th Grade)",
        institution: "Baba Gorakh Nath IC, Bhimpura No-1 , Ballia (U.P.)",
        description: "Science Stream with Math. Scored 72.4% in final examinations."
    },
    {
        date: "2020 - 2022",
        title: "Secondary Education (10th Grade)",
        institution: "Baba Gorakh Nath IC, Bhimpura No-1 , Ballia (U.P.)",
        description: "Scored 79.3% in final examinations."
    }
];

const testimonials = [
    {
       name: "Dr. Sharma",
       role: "Project Guide",
     content: "Aditya's attention to detail and problem-solving skills are exceptional. He delivered our web project ahead of schedule with excellent quality.",
        initials: "DS"
    },
];

// Initialize Portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Hide preloader after page loads
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    }, 1500);
    
    // Initialize components
    initThemeToggle();
    initMobileMenu();
    initNavScroll();
    populateSkills();
    populateProjects();
    populateTimeline();
    initTestimonialsSlider();
    initScrollAnimations();
    initFormValidation();
    initNewsletter();
    initFilterButtons();
    initCounterAnimation();
    
    // Add scroll event listener for navbar
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set navbar state
    handleScroll();
});

// Theme Toggle Functionality
function initThemeToggle() {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        
        if (body.classList.contains('light-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Navbar Scroll Effect
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
}

// Update Active Nav Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Initialize Nav Link Click Events
function initNavScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Populate Skills Section
function populateSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    skillsContainer.innerHTML = '';
    
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <div class="skill-header">
                <div class="skill-icon">
                    <i class="${skill.icon}"></i>
                </div>
                <div class="skill-info">
                    <h3>${skill.name}</h3>
                    <div class="skill-level">${skill.description}</div>
                </div>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-width="${skill.level}%"></div>
            </div>
        `;
        skillsContainer.appendChild(skillCard);
    });
}

// Populate Projects Section
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card ${project.category}`;
        projectCard.innerHTML = `
            <div class="project-image">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-content">
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.liveLink}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    ${project.githubLink ? `<a href="${project.githubLink}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> GitHub
                    </a>` : ''}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Populate Timeline
function populateTimeline() {
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = '';
    
    education.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <div class="timeline-institution">${item.institution}</div>
                <p>${item.description}</p>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Initialize Testimonials Slider
function initTestimonialsSlider() {
    const testimonialsSlider = document.querySelector('#testimonials-slider .splide__list');
    testimonialsSlider.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const testimonialSlide = document.createElement('li');
        testimonialSlide.className = 'splide__slide';
        testimonialSlide.innerHTML = `
            <div class="testimonial-card">
                <div class="testimonial-quote">"</div>
                <div class="testimonial-content">${testimonial.content}</div>
                <div class="testimonial-author">
                    <div class="author-avatar">${testimonial.initials}</div>
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `;
        testimonialsSlider.appendChild(testimonialSlide);
    });
    
    // Initialize Splide slider
    new Splide('#testimonials-slider', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '30px',
        pagination: true,
        arrows: true,
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        breakpoints: {
            768: {
                perPage: 1,
            }
        }
    }).mount();
}

// Initialize Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars
                if (entry.target.classList.contains('skill-card')) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    const width = progressBar.getAttribute('data-width');
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 300);
                }
                
                // Animate counter numbers
                if (entry.target.classList.contains('stat-item')) {
                    animateCounter(entry.target.querySelector('.stat-number'));
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.skill-card, .project-card, .achievement-card, .timeline-item, .stat-item').forEach(el => {
        observer.observe(el);
    });
}

// Animate Counter Numbers
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        // Set initial value
        counter.textContent = '0';
    });
}

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-count'));
    const increment = target / 50;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current > target) {
            counter.textContent = target + '+';
            clearInterval(timer);
        } else {
            counter.textContent = Math.floor(current) + '+';
        }
    }, 30);
}

// Initialize Filter Buttons for Projects
function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            const projectCards = document.querySelectorAll('.project-card');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Initialize Form Validation and Submission
function initFormValidation() {
    if (!contactForm) return;
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };
        
        try {
            // Send email using EmailJS
            await sendEmail(formData);
            
            // Show success message
            showFormMessage('success', 'Thank you! Your message has been sent successfully. I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // Trigger confetti effect
            triggerConfetti();
            
        } catch (error) {
            console.error('Error sending email:', error);
            showFormMessage('error', 'Oops! Something went wrong. Please try again or email me directly at aaditya0775@gmail.com');
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
    
    // Real-time validation
    ['name', 'email', 'subject', 'message'].forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const errorElement = document.getElementById(`${fieldId}Error`);
        
        field.addEventListener('input', () => {
            validateField(field, errorElement);
        });
        
        field.addEventListener('blur', () => {
            validateField(field, errorElement);
        });
    });
}

// Validate Individual Field
function validateField(field, errorElement) {
    const value = field.value.trim();
    let error = '';
    
    switch (field.id) {
        case 'name':
            if (!value) {
                error = 'Name is required';
            } else if (value.length < 2) {
                error = 'Name must be at least 2 characters';
            }
            break;
            
        case 'email':
            if (!value) {
                error = 'Email is required';
            } else if (!isValidEmail(value)) {
                error = 'Please enter a valid email address';
            }
            break;
            
        case 'subject':
            if (!value) {
                error = 'Subject is required';
            } else if (value.length < 5) {
                error = 'Subject must be at least 5 characters';
            }
            break;
            
        case 'message':
            if (!value) {
                error = 'Message is required';
            } else if (value.length < 10) {
                error = 'Message must be at least 10 characters';
            }
            break;
    }
    
    errorElement.textContent = error;
    field.style.borderColor = error ? 'var(--error)' : 'transparent';
    
    return !error;
}

// Validate Entire Form
function validateForm() {
    let isValid = true;
    
    ['name', 'email', 'subject', 'message'].forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const errorElement = document.getElementById(`${fieldId}Error`);
        
        if (!validateField(field, errorElement)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Email Validation Regex
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Send Email using EmailJS
async function sendEmail(formData) {
    const templateParams = {
        to_name: 'Aditya Kumar',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
    };
    
    return emailjs.send(
        'service_smn00le',  
        'template_4xjvh18',    
        templateParams,
        'JufNnUp-r3zhFtwod'       
    );
}

// Show Form Message
function showFormMessage(type, message) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = '';
        formMessage.classList.add(type === 'success' ? 'success-message' : 'error-message');
    }
}

// Initialize Newsletter Form
function initNewsletter() {
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (isValidEmail(email)) {
            // In a real application, you would send this to your backend
            console.log('Newsletter subscription:', email);
            alert('Thank you for subscribing to my newsletter!');
            this.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Trigger Confetti Effect
function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#6C63FF', '#FF6584', '#36D1DC', '#ffffff']
        });
    }
}

// Parallax Effect on Scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax for hero section
    const heroVideo = document.querySelector('.hero-video-container');
    if (heroVideo) {
        heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    // Parallax for shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = scrolled * speed;
        shape.style.transform = `translateY(${yPos}px) rotate(${yPos * 0.1}deg)`;
    });
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
    
    // Toggle theme with Ctrl+T
    if (e.ctrlKey && e.key === 't') {
        e.preventDefault();
        themeToggle.click();
    }
});

// Initialize tooltips for social icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        const platform = this.querySelector('i').className.split('fa-')[1].split(' ')[0];
        this.setAttribute('title', platform.charAt(0).toUpperCase() + platform.slice(1));
    });
});

// Add copy email functionality
document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
    emailLink.addEventListener('click', function(e) {
        const email = this.getAttribute('href').replace('mailto:', '');
        navigator.clipboard.writeText(email).then(() => {
            const originalText = this.textContent;
            this.textContent = 'Email copied!';
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        });
    });
});

// Initialize smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.getAttribute('href') !== '#') {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Add hover effect to project cards
document.addEventListener('mouseover', function(e) {
    const projectCard = e.target.closest('.project-card');
    if (projectCard) {
        projectCard.style.zIndex = '10';
    }
});

document.addEventListener('mouseout', function(e) {
    const projectCard = e.target.closest('.project-card');
    if (projectCard) {
        projectCard.style.zIndex = '';
    }
});

// Initialize intersection observer for all animated elements
const animatedElements = document.querySelectorAll('.skill-card, .project-card, .achievement-card, .timeline-item');
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

animatedElements.forEach(el => animationObserver.observe(el));

// Add current year to footer
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(el => {
    el.textContent = currentYear;
});

// Add page load animation
window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
});

// Export resume functionality
document.querySelector('.download-btn')?.addEventListener('click', function(e) {
    // In a real application, this would trigger the actual download
    console.log('Downloading resume...');
    // You would typically have a PDF file in your assets folder
});

// Initialize particle effect on hero section (optional)
function initParticles() {
    // This is a placeholder for a particle effect library
    // You could use particles.js or similar for enhanced visual effects
    console.log('Particles initialized');
}

// Call initialization functions
initParticles();


// ========== WhatsApp Button Analytics ==========
const whatsappButton = document.querySelector('.whatsapp-float');
if (whatsappButton) {
    whatsappButton.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_click', {
                'event_category': 'contact',
                'event_label': 'whatsapp_chat'
            });
        }
    });
}
