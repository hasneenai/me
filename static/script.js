document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');

    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            initAll();
        }, 500);
    }, 1500);
});

const initAll = () => {
    initTheme();
    initScroll();
    loadData();
    initForm();
    initCustomCursor();
    initScrollProgress();
    initParticles();
    initMobileMenu();
};

const initTheme = () => {
    const themeSwitch = document.getElementById('themeSwitch');
    const overlay = document.querySelector('.theme-transition-overlay');
    const savedTheme = localStorage.getItem('theme') || 'light';

    setTheme(savedTheme);

    themeSwitch.addEventListener('click', () => {
        overlay.classList.add('active');

        setTimeout(() => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);

            setTimeout(() => {
                overlay.classList.remove('active');
            }, 500);
        }, 200);
    });
};

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#0f172a' : '#ffffff');
    }

    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        favicon.href = theme === 'dark' ?
            '/assets/images/brand/favicon-dark.ico' :
            '/assets/images/brand/favicon.ico';
    }
};

const loadData = () => {
    loadPersonal();
    loadSkills();
    loadProjects();
    loadContact();
};

const initForm = () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    showSuccess();
    resetForm(e.target);
};

function updateIcon(isDark) {
    const icon = document.querySelector('.theme-switch i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function initScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function initScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    document.querySelectorAll('.skill-card, .project-card').forEach((el) => observer.observe(el));
}

function loadPersonal() {
    document.querySelector('.hero-title').textContent = websiteData.personal.name;
    document.querySelector('.hero-subtitle').textContent = websiteData.personal.title;
    document.querySelector('.profile-img').src = websiteData.personal.image;
    document.querySelector('.logo img').src = websiteData.personal.logo;
}

function loadSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = websiteData.skills.map(skill => `
        <div class="skill-card">
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <div class="skill-level">${skill.level}</div>
        </div>
    `).join('');
}

function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = websiteData.projects.map(project => `
        <article class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link">View Project</a>
            </div>
        </article>
    `).join('');
}

function loadContact() {
    const socialLinks = document.querySelector('.social-links');
    socialLinks.innerHTML = `
        <a href="${websiteData.contact.telegram.personal}" target="_blank"><i class="fab fa-telegram"></i></a>
        <a href="${websiteData.contact.social.github}" target="_blank"><i class="fab fa-github"></i></a>
    `;
}

function showSuccess() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Message sent successfully!';
    document.getElementById('contactForm').appendChild(successMessage);

    setTimeout(() => {
        document.getElementById('contactForm').reset();
        successMessage.remove();
    }, 3000);
}

function resetForm(form) {
    form.reset();
}

const initCustomCursor = () => {
    const cursor = document.querySelector('.custom-cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
};

const initScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = window.scrollY / windowHeight;
        progressBar.style.transform = `scaleX(${progress})`;
    });
};

const initParticles = () => {
    const canvas = document.createElement('canvas');
    canvas.className = 'particles';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    
    const createParticle = () => {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1
        };
    };
    
    const initParticles = () => {
        for (let i = 0; i < 50; i++) {
            particles.push(createParticle());
        }
    };
    
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(96, 165, 250, 0.2)';
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    };
    
    resize();
    initParticles();
    animate();
    window.addEventListener('resize', resize);
};

const initMobileMenu = () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            menuBtn?.classList.remove('active');
            navLinks?.classList.remove('active');
        }
    });
};
