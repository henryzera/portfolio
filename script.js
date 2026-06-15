document.addEventListener('DOMContentLoaded', () => {
  
  /* ==========================================================================
     Page Load Sequential Reveal (Hero & Header)
     ========================================================================== */
  // Tiny delay to ensure browser rendering engine registers initial opacity states
  setTimeout(() => {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
  }, 50);

  /* ==========================================================================
     Scroll Progress Indicator
     ========================================================================== */
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = window.scrollY / totalScroll;
        // High performance scaleX modification
        scrollProgress.style.transform = `scaleX(${progress})`;
      }
    }, { passive: true });
  }

  /* ==========================================================================
     Smart Header (Shrink & Backdrop blur activation on Scroll)
     ========================================================================== */
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }, { passive: true });
  }

  /* ==========================================================================
     Mobile Navigation Menu
     ========================================================================== */
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('primary-navigation');
  const navLinks = document.querySelectorAll('.nav-link, .btn-nav');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.setAttribute('data-visible', !isExpanded);
      
      // Prevent body scrolling when mobile menu is active
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });
    
    // Close menu when clicking navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('data-visible', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ==========================================================================
     Intersection Observer (Scroll Reveal & Stagger Animation Engine)
     ========================================================================== */
  const revealObserverOptions = {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };
  
  // Normal individual scroll reveal observer
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, revealObserverOptions);
  
  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach(element => {
    // Staggered elements are activated by their container, so we bypass individual observers
    if (!element.closest('.stagger-grid')) {
      revealObserver.observe(element);
    }
  });

  // Stagger reveal observer (staggers child components sequentially)
  const staggerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const children = container.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
        
        children.forEach((child, index) => {
          // Dynamic calculation of transition delays based on child index
          child.style.transitionDelay = `${index * 100}ms`;
          child.classList.add('active');
          
          // Animate tech progress bars & numeric counter if present
          const progressBars = child.querySelectorAll('.tech-progress');
          if (progressBars.length > 0) {
            progressBars.forEach(bar => {
              const barDelay = (index * 100) + 400; // Trigger growth after card reveal is done
              setTimeout(() => {
                const width = bar.getAttribute('data-width');
                bar.style.transform = 'scaleX(1)';
                bar.style.width = width;
              }, barDelay);
            });
            
            // Numeric counter percentage animation
            const counters = child.querySelectorAll('.tech-item-desc[data-target]');
            counters.forEach(counter => {
              const target = parseInt(counter.getAttribute('data-target'), 10);
              const label = counter.getAttribute('data-label');
              const duration = 1200; // Total count duration in ms
              const startTime = performance.now();
              const counterDelay = (index * 100) + 300;
              
              setTimeout(() => {
                requestAnimationFrame(function animateCount(timestamp) {
                  const runtime = timestamp - startTime;
                  const relativeProgress = Math.min(runtime / duration, 1);
                  
                  // Ease-out quadratic function curve
                  const easedProgress = relativeProgress * (2 - relativeProgress);
                  const currentCount = Math.floor(easedProgress * target);
                  
                  counter.textContent = `${label} (${currentCount}%)`;
                  
                  if (relativeProgress < 1) {
                    requestAnimationFrame(animateCount);
                  }
                });
              }, counterDelay);
            });
          }
        });
        
        observer.unobserve(container);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.stagger-grid').forEach(grid => {
    staggerObserver.observe(grid);
  });

  /* ==========================================================================
     Timeline Scroll-Linked Fill Line
     ========================================================================== */
  const timeline = document.querySelector('.timeline');
  let isTimelineVisible = false;
  
  if (timeline) {
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isTimelineVisible = entry.isIntersecting;
      });
    }, { threshold: 0 });
    timelineObserver.observe(timeline);
    
    window.addEventListener('scroll', () => {
      if (!isTimelineVisible) return;
      
      const rect = timeline.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Starts pre-filling when the timeline is 70% from the top of the screen
      const fillStart = rect.top - viewHeight * 0.7;
      const totalTimelineHeight = rect.height;
      
      // Calculate scroll progress through timeline
      let progress = -fillStart / (totalTimelineHeight - 120);
      progress = Math.max(0, Math.min(1, progress));
      
      timeline.style.setProperty('--timeline-progress', progress);
    }, { passive: true });
  }

  /* ==========================================================================
     Copy Email to Clipboard
     ========================================================================== */
  const copyBtn = document.getElementById('copy-email-btn');
  const emailText = 'emanuelhenrysc@gmail.com';
  
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(emailText)
          .then(() => showSuccessState())
          .catch(() => fallbackCopyTextHelper());
      } else {
        fallbackCopyTextHelper();
      }
    });
    
    function fallbackCopyTextHelper() {
      const textArea = document.createElement('textarea');
      textArea.value = emailText;
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.position = 'fixed';
      
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          showSuccessState();
        }
      } catch (err) {
        console.error('Falha ao copiar e-mail', err);
      }
      
      document.body.removeChild(textArea);
    }
    
    function showSuccessState() {
      const originalHTML = copyBtn.innerHTML;
      
      copyBtn.classList.add('copy-success');
      copyBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Copiado!</span>
      `;
      
      setTimeout(() => {
        copyBtn.classList.remove('copy-success');
        copyBtn.innerHTML = originalHTML;
      }, 2000);
    }
  }
});
