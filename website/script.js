// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations (staggered)
    const revealTargets = document.querySelectorAll(
        '.section-header, .how-card, .tech-category, .flip-card, .additional-service-card, .quick-win-card, .risk-item, .contact-content'
    );

    revealTargets.forEach((el, idx) => {
        el.classList.add('reveal');
        el.style.setProperty('--reveal-delay', `${Math.min(idx * 35, 240)}ms`);
        observer.observe(el);
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
    
    // Show success message (you can replace this with actual form handling)
    alert('Thank you for your message! We\'ll get back to you soon.');
    contactForm.reset();
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    }
});

// (Removed) legacy .service-card hover effects — we now use flip-cards.

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
};

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber) {
                const text = statNumber.textContent;
                const number = parseInt(text);
                if (!isNaN(number)) {
                    statNumber.textContent = '0+';
                    animateCounter(statNumber, number);
                }
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Golden Circle progress (Why/How/What) synced to scroll
const gc = document.getElementById('gcProgress');
const gcLine = gc ? gc.querySelector('.gc-line') : null;
const gcSteps = gc ? Array.from(gc.querySelectorAll('.gc-step')) : [];

const setGCActive = (key) => {
    if (!gc) return;
    gcSteps.forEach((btn) => {
        const k = btn.getAttribute('data-gc');
        btn.classList.toggle('active', k === key);
        // mark previous steps as done
        const order = ['why', 'how', 'what'];
        btn.classList.toggle('done', order.indexOf(k) < order.indexOf(key));
    });
    if (gcLine) {
        gcLine.classList.remove('why', 'how', 'what');
        gcLine.classList.add(key);
    }
};

if (gc) {
    const showOnScroll = () => {
        if (window.scrollY > 120) gc.classList.add('is-visible');
        else gc.classList.remove('is-visible');
    };
    const targets = [
        { key: 'why', el: document.querySelector('#why') },
        { key: 'how', el: document.querySelector('#how') },
        { key: 'what', el: document.querySelector('#services') }
    ].filter(t => t.el);

    let rafId = null;

    const update = () => {
        rafId = null;
        showOnScroll();

        if (!targets.length) return;
        const focusY = (window.innerHeight || 1) * 0.45;
        let best = targets[0];
        let bestDist = Number.POSITIVE_INFINITY;

        targets.forEach((t) => {
            const r = t.el.getBoundingClientRect();
            const center = r.top + r.height / 2;
            const dist = Math.abs(center - focusY);
            if (dist < bestDist) {
                bestDist = dist;
                best = t;
            }
        });

        if (best) setGCActive(best.key);
    };

    const requestUpdate = () => {
        if (rafId != null) return;
        rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    update();

    // Click-to-scroll
    gcSteps.forEach((btn) => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-gc');
            const map = { why: '#why', how: '#how', what: '#services' };
            const target = document.querySelector(map[key]);
            if (!target) return;
            const y = target.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    });
}

// Add typing effect to hero title (optional enhancement)
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Horizontal scroll on vertical scroll for Additional Capabilities
const additionalServicesSection = document.querySelector('.detailed-services');
const additionalServicesScroll = document.getElementById('additionalServicesScroll');

if (additionalServicesSection && additionalServicesScroll) {
    let rafId = null;
    let isScrolling = false;

    const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const handleHorizontalScroll = () => {
        if (isScrolling) return;

        isScrolling = true;

        if (rafId) {
            cancelAnimationFrame(rafId);
        }

        rafId = requestAnimationFrame(() => {
            const rect = additionalServicesSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionHeight = rect.height;

            // Only scroll when section is in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                // Calculate when scroll should start (when section enters viewport)
                const scrollStart = windowHeight - sectionHeight * 0.3; // Start when 30% of section is visible
                const scrollEnd = windowHeight + sectionHeight * 0.7; // End when 70% has passed
                
                // Calculate progress based on section position
                const scrollPosition = windowHeight - rect.top;
                const scrollRange = scrollEnd - scrollStart;
                
                // Normalize progress (0 to 1)
                let progress = (scrollPosition - scrollStart) / scrollRange;
                progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1
                
                // Apply easing for smoother motion
                const easedProgress = easeInOutCubic(progress);
                
                // Calculate max scroll distance
                const maxScroll = additionalServicesScroll.scrollWidth - additionalServicesScroll.clientWidth;
                
                // Apply horizontal scroll
                if (maxScroll > 0) {
                    additionalServicesScroll.scrollLeft = easedProgress * maxScroll;
                }
            }
            
            isScrolling = false;
        });
    };
    
    window.addEventListener('scroll', handleHorizontalScroll, { passive: true });
    window.addEventListener('resize', handleHorizontalScroll, { passive: true });
    handleHorizontalScroll(); // Initial call
}

// Initialize on page load
window.addEventListener('load', () => {
    // Add loaded class to body for any CSS transitions
    document.body.classList.add('loaded');
    
    // Optional: Add any initialization code here
});

