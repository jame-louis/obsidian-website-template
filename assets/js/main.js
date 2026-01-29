// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });
        
        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('open');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('open');
            }
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add active class to current navigation item
function setActiveNav() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentLocation || currentLocation.startsWith(href + '/')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('load', setActiveNav);

// Table of Contents Generator
function generateTableOfContents() {
    const content = document.querySelector('.page-body, .lecture-content, .assignment-content');
    if (!content) return;
    
    const headings = content.querySelectorAll('h2, h3');
    if (headings.length === 0) return;
    
    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h3>Contents</h3><ul>';
    
    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }
        
        const level = heading.tagName === 'H2' ? 0 : 1;
        const li = document.createElement('li');
        li.style.marginLeft = (level * 0.75) + 'rem';
        
        const a = document.createElement('a');
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;
        
        li.appendChild(a);
        toc.querySelector('ul').appendChild(li);
    });
    
    toc.innerHTML += '</ul>';
    document.body.insertBefore(toc, document.body.firstChild);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    generateTableOfContents();
});

// IntersectionObserver: reveal on scroll
function setupRevealOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', function() {
    setupRevealOnScroll();
    // small hover motion for primary buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mouseenter', () => btn.animate([{ transform: 'translateY(-2px)' }, { transform: 'translateY(0)' }], { duration: 220, easing: 'cubic-bezier(.2,.9,.2,1)' }));
    });
});
