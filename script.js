document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     Internationalization (i18n) — PT-BR <-> EN
     ========================================================================== */
  const translations = {
    pt: {
      'meta.title': 'Emanuel Henry | Software Engineer & Full-Stack Developer',

      'nav.stack': 'Stack',
      'nav.projects': 'Projetos',
      'nav.experience': 'Experiência',
      'nav.education': 'Formação',
      'nav.contact': 'Contato',

      'hero.badge': 'Disponível para novas oportunidades',
      'hero.role': 'Software Engineer',
      'hero.desc': 'Engenheiro de software full-stack construindo aplicações web e mobile de alto desempenho com o ecossistema <strong>TypeScript</strong> — React, Next.js, Node.js e React Native.',
      'hero.btnContact': 'Entrar em Contato',
      'hero.btnCV': 'Baixar Currículo',

      'current.label': 'Atuação atual',
      'current.role': 'Software Engineer',
      'current.at': 'na',
      'current.desc': 'Construindo portais analíticos de alta performance e APIs escaláveis de ponta a ponta, com foco em arquitetura limpa e modelagem de dados complexos.',

      'stack.tag': 'Habilidades',
      'stack.title': 'Tech Stack',
      'stack.subtitle': 'Ferramentas e tecnologias que aplico diariamente em engenharia de software.',
      'stack.frontend': 'Frontend',
      'stack.backend': 'Backend',
      'stack.mobile': 'Mobile',
      'stack.databases': 'Databases',
      'stack.devops': 'DevOps & Tools',

      'projects.tag': 'Projetos',
      'projects.title': 'Projetos em Destaque',
      'projects.subtitle': 'Aplicações práticas que validam competências técnicas em problemas reais.',
      'projects.highlights': 'Destaques Técnicos',
      'projects.more': 'Ver detalhes',
      'projects.close': 'Fechar',
      'projects.p1.badge': 'Projeto Integrador',
      'projects.p1.title': 'Licitações Públicas para MEIs',
      'projects.p1.desc': 'Plataforma full-stack mobile-first que ajuda Microempreendedores Individuais a competir em compras públicas (Lei 14.133/2021): centraliza editais do PNCP, traduz o "juridiquês" e organiza prazos. Desenvolvi o app (React Native) e a API (Express).',
      'projects.p1.h1': 'App mobile-first (React Native + Expo) com busca e filtros avançados e atualização em tempo real de novas licitações via WebSocket.',
      'projects.p1.h2': 'Score de compatibilidade por CNAE + tradução do edital em resumo, requisitos e documentos, com checklist de habilitação e alertas de prazo.',
      'projects.p1.h3': 'API REST em Express + MongoDB com arquitetura em camadas (routes/controllers/services/repositories) e validação Zod estrita.',
      'projects.p1.h4': 'Segurança e conformidade LGPD: JWT, bcrypt, rate limiting, sanitização anti-NoSQL e exportação/exclusão de dados em cascata.',
      'projects.p2.title': 'I.D.E.I.A — Tendências de Notícias',
      'projects.p2.desc': 'Plataforma integrada a modelos generativos para redações jornalísticas, simplificando a identificação de pautas em alta e estruturando rascunhos de notícias.',
      'projects.p2.h1': 'Integração com a Google Trends API para captar temas em ascensão em tempo real.',
      'projects.p2.h2': 'Interface do jornalista em React com visualizações intuitivas de dados.',
      'projects.p2.h3': 'Foco em performance, reduzindo o tempo entre identificação do tema e rascunho.',
      'projects.p3.badge': 'Full-Stack',
      'projects.p3.title': 'FIT.AI — Treino com Consistência',
      'projects.p3.desc': 'Aplicação full-stack mobile-first para treinar com consistência: treino do dia, acompanhamento visual de progresso (heatmap/streak) e um coach com IA. Desenvolvi o front (Next.js) e a API (Fastify) de ponta a ponta.',
      'projects.p3.h1': 'Front em Next.js (App Router) com Server Components validando sessão no servidor e fluxo de onboarding/plano ativo.',
      'projects.p3.h2': 'API REST em Fastify + TypeScript com arquitetura em camadas (routes/usecases/schemas), Prisma e PostgreSQL.',
      'projects.p3.h3': 'Coach virtual na rota <code>/ai</code> com AI SDK + Google Gemini, capaz de montar planos de treino via tools.',
      'projects.p3.h4': 'Login Google com Better Auth e sessão por cookie compartilhada entre front e API; schemas validados com Zod.',

      'exp.tag': 'Jornada',
      'exp.title': 'Experiência Profissional',
      'exp.subtitle': 'Contribuições no mercado e consolidação de conhecimentos técnicos e metodologias ágeis.',
      'exp.e1.role': 'Software Engineer',
      'exp.e1.date': 'Março 2025 – Presente',
      'exp.e1.desc': 'Startup líder em tecnologia de monitoramento inteligente e soluções de mobilidade veicular.',
      'exp.e1.b1': 'Desenvolvimento de portais analíticos e dashboards administrativos com Next.js, React e TypeScript.',
      'exp.e1.b2': 'Construção de rotas, middlewares e endpoints de API robustos com Node.js.',
      'exp.e1.b3': 'Modelagem em PostgreSQL, MongoDB e SQL Server, otimizando consultas de relatórios de tráfego pesado.',
      'exp.e1.b4': 'Colaboração ativa em rituais ágeis (Scrum/Kanban) e nas definições de arquitetura e produto.',
      'exp.e2.role': 'Residente Tecnológico',
      'exp.e2.date': 'Agosto 2024 – Fevereiro 2025',
      'exp.e2.desc': 'Um dos maiores parques tecnológicos e ambientes de inovação aberta do Brasil.',
      'exp.e2.b1': 'Desenvolvimento ágil de MVPs focados nas necessidades de empresas do ecossistema pernambucano.',
      'exp.e2.b2': 'Apoio no desenvolvimento de uma ferramenta de curadoria inteligente de conteúdos com IA.',
      'exp.e2.b3': 'Criação de integrações conectando ferramentas no-code/low-code a APIs REST personalizadas.',
      'exp.e2.b4': 'Demonstrações de progresso e demos funcionais periódicas para clientes de mercado.',

      'edu.tag': 'Formação',
      'edu.title': 'Educação & Certificações',
      'edu.subtitle': 'Base acadêmica sólida e aprendizado contínuo em tecnologias de ponta.',
      'edu.degree.title': 'Análise e Desenvolvimento de Sistemas',
      'edu.degree.date': 'Conclusão: 1º semestre de 2026',
      'edu.degree.desc': 'Foco em Engenharia de Software, Algoritmos, Arquitetura e Testes, com projetos integradores entregues a empresas reais parceiras do polo.',
      'edu.certsTitle': 'Certificações',
      'edu.c1.date': 'Jun 2026',
      'edu.c2.date': 'Jun 2026',
      'edu.c2.skills': 'Carreira em tecnologia',
      'edu.c3.date': 'Jan 2026',
      'edu.c3.skills': 'Computação em nuvem · AWS',
      'edu.c4.date': 'Set 2025',
      'edu.c5.date': 'Mai 2025',
      'edu.c6.date': 'Jul 2024',

      'contact.tag': 'Contato',
      'contact.title': 'Vamos construir algo juntos.',
      'contact.subtitle': 'Estou aberto a oportunidades, parcerias de projeto ou apenas para trocar ideias.',
      'contact.email': 'E-mail',
      'contact.copy': 'Copiar E-mail',
      'contact.copied': 'Copiado!',
      'contact.linkedinSub': 'Conecte-se profissionalmente',
      'contact.linkedinBtn': 'Acessar Perfil',
      'contact.githubSub': 'Explore meus repositórios',
      'contact.githubBtn': 'Ver Repositórios',

      'footer.text': '&copy; 2026 Emanuel Henry. Desenvolvido com HTML, CSS e Vanilla JS.',

      'level.advanced': 'Avançado',
      'level.proficient': 'Proficiente',
      'level.intermediate': 'Intermediário',
      'level.familiar': 'Conhecimento'
    },

    en: {
      'meta.title': 'Emanuel Henry | Software Engineer & Full-Stack Developer',

      'nav.stack': 'Stack',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.contact': 'Contact',

      'hero.badge': 'Available for new opportunities',
      'hero.role': 'Software Engineer',
      'hero.desc': 'Full-stack software engineer building high-performance web and mobile apps with the <strong>TypeScript</strong> ecosystem — React, Next.js, Node.js and React Native.',
      'hero.btnContact': 'Get in Touch',
      'hero.btnCV': 'Download Resume',

      'current.label': 'Currently',
      'current.role': 'Software Engineer',
      'current.at': 'at',
      'current.desc': 'Building high-performance analytics portals and scalable end-to-end APIs, with a focus on clean architecture and complex data modeling.',

      'stack.tag': 'Skills',
      'stack.title': 'Tech Stack',
      'stack.subtitle': 'Tools and technologies I apply daily in software engineering.',
      'stack.frontend': 'Frontend',
      'stack.backend': 'Backend',
      'stack.mobile': 'Mobile',
      'stack.databases': 'Databases',
      'stack.devops': 'DevOps & Tools',

      'projects.tag': 'Projects',
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'Real-world applications that validate technical skills on complex problems.',
      'projects.highlights': 'Technical Highlights',
      'projects.more': 'View details',
      'projects.close': 'Close',
      'projects.p1.badge': 'Capstone Project',
      'projects.p1.title': 'Public Tenders for Micro-Businesses',
      'projects.p1.desc': 'A full-stack, mobile-first platform that helps micro-entrepreneurs (MEIs) compete in public procurement (Brazil\'s Law 14.133/2021): it centralizes PNCP tenders, translates legal jargon, and manages deadlines. I built both the app (React Native) and the API (Express).',
      'projects.p1.h1': 'Mobile-first app (React Native + Expo) with advanced search/filters and real-time updates of new tenders over WebSocket.',
      'projects.p1.h2': 'CNAE-based compatibility score + edital translation into summary, requirements and documents, with an eligibility checklist and deadline alerts.',
      'projects.p1.h3': 'Express + MongoDB REST API with a layered architecture (routes/controllers/services/repositories) and strict Zod validation.',
      'projects.p1.h4': 'Security and LGPD compliance: JWT, bcrypt, rate limiting, anti-NoSQL sanitization, and cascading data export/deletion.',
      'projects.p2.title': 'I.D.E.I.A — News Trends',
      'projects.p2.desc': 'A platform integrated with generative models for newsrooms, simplifying the discovery of trending topics and structuring news drafts.',
      'projects.p2.h1': 'Google Trends API integration to capture rising topics in real time.',
      'projects.p2.h2': 'Journalist interface in React with intuitive data visualizations.',
      'projects.p2.h3': 'Performance-focused, cutting the time between topic discovery and first draft.',
      'projects.p3.badge': 'Full-Stack',
      'projects.p3.title': 'FIT.AI — Train with Consistency',
      'projects.p3.desc': 'A full-stack, mobile-first app to train consistently: today\'s workout, visual progress tracking (heatmap/streak), and an AI coach. I built both the front-end (Next.js) and the API (Fastify) end to end.',
      'projects.p3.h1': 'Next.js front-end (App Router) with Server Components validating the session server-side and an onboarding/active-plan flow.',
      'projects.p3.h2': 'Fastify + TypeScript REST API with a layered architecture (routes/usecases/schemas), Prisma and PostgreSQL.',
      'projects.p3.h3': 'Virtual coach on the <code>/ai</code> route with the AI SDK + Google Gemini, able to build workout plans via tools.',
      'projects.p3.h4': 'Google login with Better Auth and a cookie session shared between front and API; schemas validated with Zod.',

      'exp.tag': 'Journey',
      'exp.title': 'Professional Experience',
      'exp.subtitle': 'Contributions in the market and the consolidation of technical knowledge and agile methodologies.',
      'exp.e1.role': 'Software Engineer',
      'exp.e1.date': 'March 2025 – Present',
      'exp.e1.desc': 'A leading startup in smart monitoring technology and vehicle mobility solutions.',
      'exp.e1.b1': 'Built analytics portals and admin dashboards with Next.js, React and TypeScript.',
      'exp.e1.b2': 'Built robust API routes, middlewares and endpoints with Node.js.',
      'exp.e1.b3': 'Modeled data in PostgreSQL, MongoDB and SQL Server, optimizing heavy-traffic report queries.',
      'exp.e1.b4': 'Active collaboration in agile rituals (Scrum/Kanban) and in architecture and product decisions.',
      'exp.e2.role': 'Technology Resident',
      'exp.e2.date': 'August 2024 – February 2025',
      'exp.e2.desc': 'One of the largest technology parks and open-innovation hubs in Brazil.',
      'exp.e2.b1': 'Agile development of MVPs focused on the needs of companies in the Pernambuco ecosystem.',
      'exp.e2.b2': 'Helped build an AI-powered smart content curation tool.',
      'exp.e2.b3': 'Built integrations connecting no-code/low-code tools to custom REST APIs.',
      'exp.e2.b4': 'Delivered periodic progress demos and working prototypes to market clients.',

      'edu.tag': 'Education',
      'edu.title': 'Education & Certifications',
      'edu.subtitle': 'A solid academic foundation and continuous learning in cutting-edge technologies.',
      'edu.degree.title': 'Systems Analysis & Development',
      'edu.degree.date': 'Graduating: first half of 2026',
      'edu.degree.desc': 'Focused on Software Engineering, Algorithms, Architecture and Testing, with capstone projects delivered to real partner companies.',
      'edu.certsTitle': 'Certifications',
      'edu.c1.date': 'Jun 2026',
      'edu.c2.date': 'Jun 2026',
      'edu.c2.skills': 'Tech career track',
      'edu.c3.date': 'Jan 2026',
      'edu.c3.skills': 'Cloud Computing · AWS',
      'edu.c4.date': 'Sep 2025',
      'edu.c5.date': 'May 2025',
      'edu.c6.date': 'Jul 2024',

      'contact.tag': 'Contact',
      'contact.title': "Let's build something together.",
      'contact.subtitle': "I'm open to opportunities, project partnerships, or just to exchange ideas.",
      'contact.email': 'Email',
      'contact.copy': 'Copy Email',
      'contact.copied': 'Copied!',
      'contact.linkedinSub': 'Connect professionally',
      'contact.linkedinBtn': 'View Profile',
      'contact.githubSub': 'Explore my repositories',
      'contact.githubBtn': 'View Repositories',

      'footer.text': '&copy; 2026 Emanuel Henry. Built with HTML, CSS and Vanilla JS.',

      'level.advanced': 'Advanced',
      'level.proficient': 'Proficient',
      'level.intermediate': 'Intermediate',
      'level.familiar': 'Familiar'
    }
  };

  const SUPPORTED_LANGS = ['pt', 'en'];
  let currentLang = 'pt';

  const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;
  const levelLabel = (levelKey) => t(`level.${levelKey}`);

  function applyTranslations(lang) {
    currentLang = SUPPORTED_LANGS.includes(lang) ? lang : 'pt';
    const dict = translations[currentLang];

    // Plain text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = dict[el.getAttribute('data-i18n')];
      if (value !== undefined) el.textContent = value;
    });

    // Rich HTML nodes
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const value = dict[el.getAttribute('data-i18n-html')];
      if (value !== undefined) el.innerHTML = value;
    });

    // Tech skill level labels (respect whether the count-up already ran)
    document.querySelectorAll('.tech-item-desc[data-level]').forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const label = levelLabel(counter.getAttribute('data-level'));
      const shown = counter.dataset.animated === 'true' ? target : 0;
      counter.textContent = `${label} (${shown}%)`;
    });

    // Document-level updates
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
    document.title = dict['meta.title'];

    // Sync every language switch instance
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === currentLang));
    });

    try { localStorage.setItem('preferred-lang', currentLang); } catch (e) { /* storage blocked */ }

    // Let other modules (e.g. the open project modal) re-sync to the new language.
    if (typeof window.__afterLang === 'function') window.__afterLang();
  }

  function detectInitialLang() {
    let stored = null;
    try { stored = localStorage.getItem('preferred-lang'); } catch (e) { /* ignore */ }
    if (SUPPORTED_LANGS.includes(stored)) return stored;
    const nav = (navigator.language || 'pt').toLowerCase();
    return nav.startsWith('en') ? 'en' : 'pt';
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTranslations(btn.getAttribute('data-lang')));
  });

  applyTranslations(detectInitialLang());

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

                  // Label is resolved live so a mid-animation language switch stays correct
                  counter.textContent = `${levelLabel(counter.getAttribute('data-level'))} (${currentCount}%)`;

                  if (relativeProgress < 1) {
                    requestAnimationFrame(animateCount);
                  } else {
                    counter.dataset.animated = 'true';
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
     Project Cards → Detail Modal
     ========================================================================== */
  const projectCards = document.querySelectorAll('.project-card');

  if (projectCards.length) {
    // Build the modal shell once and reuse it for every project.
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'project-modal';
    overlay.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button class="modal-close" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="modal-tags"></div>
        <h3 class="modal-title" id="modal-title"></h3>
        <p class="modal-desc"></p>
        <div class="modal-body"></div>
        <div class="modal-actions"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    const modalEl = overlay.querySelector('.modal');
    const closeBtn = overlay.querySelector('.modal-close');
    const mTags = overlay.querySelector('.modal-tags');
    const mTitle = overlay.querySelector('.modal-title');
    const mDesc = overlay.querySelector('.modal-desc');
    const mBody = overlay.querySelector('.modal-body');
    const mActions = overlay.querySelector('.modal-actions');

    let activeCard = null;
    let lastFocused = null;

    function fillModal(card) {
      mTags.innerHTML = card.querySelector('.project-tags').innerHTML;
      mTitle.textContent = card.querySelector('.project-title').textContent.trim();
      mDesc.textContent = card.querySelector('.project-description').textContent.trim();
      mBody.innerHTML = card.querySelector('.project-highlights').outerHTML;
      mActions.innerHTML = card.querySelector('.project-actions').innerHTML;
      closeBtn.setAttribute('aria-label', t('projects.close'));
    }

    function openModal(card) {
      activeCard = card;
      lastFocused = document.activeElement;
      fillModal(card);
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function closeModal() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      activeCard = null;
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    }

    // Keep the modal text in sync when the language is switched while open.
    window.__afterLang = () => {
      if (activeCard && overlay.classList.contains('open')) fillModal(activeCard);
    };

    projectCards.forEach(card => {
      // Clean "view details" affordance, with i18n on the label.
      const more = document.createElement('span');
      more.className = 'project-more';
      more.innerHTML = `<span data-i18n="projects.more">${t('projects.more')}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
      card.querySelector('.project-content').appendChild(more);

      // Make the whole card behave like a button.
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-haspopup', 'dialog');

      card.addEventListener('click', () => openModal(card));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(card);
        }
      });
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });
    // Links inside the modal (GitHub) should not bubble to the overlay close.
    modalEl.addEventListener('click', (e) => e.stopPropagation());
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
        <span>${t('contact.copied')}</span>
      `;

      setTimeout(() => {
        copyBtn.classList.remove('copy-success');
        copyBtn.innerHTML = originalHTML;
      }, 2000);
    }
  }
});
