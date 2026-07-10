// Wait for DOM to load completely
document.addEventListener("DOMContentLoaded", () => {
    
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    /* ==========================================================================
       MOBILE NAVIGATION OVERLAY
       ========================================================================== */
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenuClose = document.getElementById("mobile-menu-close");
    const mobileNavMenu = document.getElementById("mobile-nav-menu");
    const mobNavItems = document.querySelectorAll(".mob-nav-item");

    function openMobileMenu() {
        mobileNavMenu.classList.add("open");
        document.body.style.overflow = "hidden"; // Prevent body scrolling
        // GSAP animate links inside menu
        gsap.fromTo(".mob-nav-item", 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, delay: 0.2 }
        );
    }

    function closeMobileMenu() {
        mobileNavMenu.classList.remove("open");
        document.body.style.overflow = "auto";
    }

    mobileMenuBtn.addEventListener("click", openMobileMenu);
    mobileMenuClose.addEventListener("click", closeMobileMenu);
    
    // Close menu when clicking navigation items
    mobNavItems.forEach(item => {
        item.addEventListener("click", closeMobileMenu);
    });


    /* ==========================================================================
       HERO TYPEWRITER LOOP
       ========================================================================== */
    const typingTextElement = document.querySelector(".typing-text");
    const words = [
        "Multi-Cloud Infrastructure Engineer",
        "Web & Software Developer",
        "Systems Automation Engineer",
        "Virtualization Engineer"
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typewriterDelay = 120;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typewriterDelay = 60; // Faster deletion
        } else {
            typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typewriterDelay = 120; // Normal typing speed
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typewriterDelay = 2000; // Pause at full word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typewriterDelay = 400; // Pause before typing next word
        }

        setTimeout(type, typewriterDelay);
    }

    // Initialize typing loop
    if (typingTextElement) {
        setTimeout(type, 1000);
    }


    /* ==========================================================================
       PROJECT FILTERS (GSAP SCALE TRANSITIONS)
       ========================================================================== */
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class from buttons and set it on clicked one
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            // Animate card filter transitions using GSAP scale & opacity
            projectCards.forEach(card => {
                const categories = card.getAttribute("data-category").split(" ");
                
                if (filterValue === "all" || categories.includes(filterValue)) {
                    // Show item
                    gsap.to(card, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.35,
                        ease: "power2.out",
                        onStart: () => {
                            card.style.display = "flex";
                        }
                    });
                } else {
                    // Hide item
                    gsap.to(card, {
                        scale: 0.8,
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.in",
                        onComplete: () => {
                            card.style.display = "none";
                        }
                    });
                }
            });
        });
    });


    /* ==========================================================================
       ACTIVE HEADER NAV HIGHLIGHT (INTERSECTION OBSERVER)
       ========================================================================== */
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-item");

    const observerOptions = {
        root: null,
        rootMargin: "-25% 0px -55% 0px", // Trigger when section occupies center part of screen
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute("id");
                
                navItems.forEach(item => {
                    item.classList.remove("active");
                    if (item.getAttribute("href") === `#${activeId}`) {
                        item.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));


    /* ==========================================================================
       GSAP SCROLLTRIGGER ENTRANCE ANIMATIONS
       ========================================================================== */
    
    // 1. Initial Page/Hero Load
    const tlHero = gsap.timeline();
    tlHero.from(".logo", { y: -20, opacity: 0, duration: 0.6, ease: "power2.out" })
          .from(".nav-links li", { y: -20, opacity: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" }, "-=0.3")
          .from(".hero-tagline", { x: -30, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
          .from(".hero-title", { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
          .from(".typing-container", { opacity: 0, duration: 0.4 }, "-=0.3")
          .from(".hero-desc", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.2")
          .from(".hero-actions", { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
          .from(".hero-content .social-links a", { y: 15, opacity: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" }, "-=0.2")
          .from(".avatar-wrapper", { scale: 0.9, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.8")
          .from(".scroll-indicator", { y: 10, opacity: 0, repeat: -1, yoyo: true, duration: 1.2 }, "-=0.2");

    // 2. Timeline Section Animations
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach(item => {
        const direction = item.classList.contains("reveal-left") ? -80 : 80;
        
        gsap.from(item.querySelector(".timeline-content"), {
            x: direction,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
        
        gsap.from(item.querySelector(".timeline-dot"), {
            scale: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: item,
                start: "top 80%"
            }
        });
    });

    // 3. Project Cards Animations (Staggered Stretches)
    gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%"
        }
    });

    // 4. Skills Section Animating Tags
    gsap.from(".skills-column", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".skills-wrapper",
            start: "top 80%"
        }
    });

    // 5. Education Card Slide-ins
    gsap.from(".edu-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".edu-grid",
            start: "top 85%"
        }
    });

    // 6. Contact Panel Reveals
    gsap.from(".contact-info-panel", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".contact-wrapper",
            start: "top 80%"
        }
    });

    gsap.from(".contact-form-panel", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".contact-wrapper",
            start: "top 80%"
        }
    });


    /* ==========================================================================
       CONTACT FORM HANLDER
       ========================================================================== */
    const contactForm = document.getElementById("contact-form");
    const submitBtn = contactForm.querySelector(".btn-submit");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const originalBtnText = submitBtn.innerHTML;
        
        // Show sending status
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Sending... <i class="fa-solid fa-circle-notch fa-spin send-icon"></i>`;
        
        // Simulate email send process
        setTimeout(() => {
            submitBtn.innerHTML = `Sent Successfully! <i class="fa-solid fa-check send-icon"></i>`;
            submitBtn.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)"; // Emerald green
            submitBtn.style.color = "#ffffff";
            
            // Clear inputs
            contactForm.reset();
            
            // Revert back to standard button state after 3.5s
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                submitBtn.style.background = ""; // Reset inline color styles
                submitBtn.style.color = "";
            }, 3500);
            
        }, 1500);
    });

});