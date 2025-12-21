document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(Draggable);

    const slides = document.querySelectorAll('.teacher-slide');
    const track = document.querySelector('.teacher-slider-track');
    const nextBtn = document.getElementById('nextTeacher');
    const prevBtn = document.getElementById('prevTeacher');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Initial setup
    function updateSlides() {
        slides.forEach((slide, index) => {
            const distance = index - currentIndex;
            const absDistance = Math.abs(distance);

            // Calculate properties based on distance from center
            let xPos = distance * 300; // Base spacing
            let scale = 1;
            let zIndex = 10 - absDistance;
            let rotateY = 0;
            let brightness = 1;

            if (distance === 0) {
                // Center slide
                scale = 1.1;
                xPos = 0;
                brightness = 1;
            } else if (distance > 0) {
                // Right slides
                scale = 0.85;
                xPos = 220 + (distance - 1) * 100; // Overlap effect
                rotateY = -15;
                brightness = 0.5;
            } else {
                // Left slides
                scale = 0.85;
                xPos = -220 + (distance + 1) * 100; // Overlap effect
                rotateY = 15;
                brightness = 0.5;
            }

            // Animate using GSAP
            gsap.to(slide, {
                duration: 0.6,
                x: xPos,
                scale: scale,
                opacity: 1, // Keep fully opaque to prevent see-through
                zIndex: zIndex,
                rotateY: rotateY,
                ease: "power2.out",
                boxShadow: distance === 0 ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" : "0 10px 15px -3px rgba(0, 0, 0, 0.3)"
            });

            // Handle dimmer overlay
            const dimmer = slide.querySelector('.dimmer-overlay');
            if (dimmer) {
                gsap.to(dimmer, {
                    opacity: distance === 0 ? 0 : 0.6,
                    duration: 0.6
                });
            }

            // Handle content visibility
            const content = slide.querySelector('.slide-content');
            if (distance === 0) {
                gsap.to(content, {
                    maxHeight: 200,
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.2
                });
            } else {
                gsap.to(content, {
                    maxHeight: 0,
                    opacity: 0,
                    duration: 0.3
                });
            }
        });
    }

    // Initialize
    updateSlides();

    // Event Listeners
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSlides();
        } else {
            // Loop back to start
            currentIndex = 0;
            updateSlides();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlides();
        } else {
            // Loop to end
            currentIndex = totalSlides - 1;
            updateSlides();
        }
    });

    // Click on slide to navigate
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            if (currentIndex !== index) {
                currentIndex = index;
                updateSlides();
            }
        });
    });

    // Auto play
    let autoPlayInterval = setInterval(() => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlides();
    }, 5000);

    // Pause on hover
    const container = document.getElementById('teacherSliderContainer');
    container.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    container.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(() => {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlides();
        }, 5000);
    });
});

// ====================================
// DATA & CONTENT
// ====================================
const pageData = {
    marqueeItems: [
        "Admissions Open 2025", "ISO 9001:2015 Certified", "Govt. Registered",
        "100% Placement Assistance", "Yoga Alliance Certified", "World Class Faculty"
    ],
    curriculumCards: [
        {
            type: 'large', colSpan: 'md:col-span-2', bgClass: 'bg-orange-50',
            borderClass: 'border border-orange-100', textColor: 'text-gray-900',
            iconSrc: 'img/assets/icons/chakra_4841474.svg',
            badge: 'Module 1', badgeClass: 'text-[#8b2025] bg-[#edcf9c]',
            title: 'Yoga Philosophy & Basics of Naturopathy',
            description: '',
            items: [
                'Explore core yoga philosophy for inner peace and self-awareness',
                'Study classic texts like Yoga Sutras and key yogic philosophies',
                'Apply ancient yogic views to modern wellness and daily life',
                'Discover naturopathy\'s natural healing foundations for vitality',
                'Learn therapies like hydrotherapy, nutrition, and herbal remedies',
                'Integrate yoga and naturopathy for preventive health and balance'
            ]
        },
        {
            type: 'standard', bgClass: 'bg-blue-50', borderClass: 'border border-blue-100',
            textColor: 'text-gray-900', iconSrc: 'img/assets/icons/peace-mind_4841491.svg',
            badge: 'Module 2', badgeClass: 'text-blue-800 bg-blue-200',
            title: 'Anatomy & Physiology for Yogic Practices',
            items: [
                'Understand yogic anatomy, including chakras and energy channels',
                'See how yoga impacts body systems like muscles, breath, and nerves',
                'Apply physiology to prevent injuries and boost yoga\'s benefits'
            ]
        },
        {
            type: 'tall', rowSpan: 'md:row-span-2', bgClass: 'bg-blue-50',
            textColor: 'text-white', iconSrc: 'img/assets/icons/lotus_4841215.svg',
            title: 'Traditional Yoga & Yogic Kriyas',
            items: [
                'Master 100+ classic yogasanas for strength, flexibility, and clarity',
                'Grasp pranayama basics as breath for energy and calm',
                'Practice 12+ pranayama techniques like Ujjayi and Nadi Shodhana',
                'Use pranayama for therapy and deeper spiritual practice',
                'Harness mudras as gestures for energy flow and balance',
                'Activate bandhas as locks for core power and awakening',
                'Purify with shatkriyas like Neti and Kapalabhati for detox'
            ],
            badge: 'Module 3', badgeClass: 'text-[#8b2025] bg-[#edcf9c]'
        },
        {
            type: 'standard', bgClass: 'bg-green-50', borderClass: 'border border-green-100',
            textColor: 'text-gray-900', iconSrc: 'img/assets/icons/surya_4841505.svg',
            badge: 'Module 4', badgeClass: 'text-green-800 bg-green-200',
            title: 'Yoga and Mental Health',
            items: [
                'Learn yoga\'s role in tackling stress, anxiety, and depression',
                'Use meditation techniques for focus, empathy, and harmony'
            ]
        },
        {
            type: 'standard', bgClass: 'bg-gradient-to-br from-blue-50 to-indigo-50',
            borderClass: 'border-2 border-dashed border-blue-200',
            textColor: 'text-gray-900', iconSrc: 'img/assets/icons/chakra_4841119.svg',
            title: 'Mindful Practice',
            descriptionClass: 'text-gray-600',
            lottieUrl: 'https://lottie.host/7dff6c34-56c8-40c7-88d0-7e3d1ad4bdb5/dEuKVCNkaY.lottie'
        },
        {
            type: 'large', colSpan: 'md:col-span-2', bgClass: 'bg-purple-50',
            borderClass: 'border border-purple-100', textColor: 'text-gray-900',
            iconSrc: 'img/assets/icons/yoga-mat_4841371.svg',
            badge: 'Module 5', badgeClass: 'text-purple-800 bg-purple-200',
            title: 'Teaching Methodology for Yogis',
            items: [
                'Build teaching foundations with voice, presence, and connection',
                'Design yoga sessions with sequencing and adaptations for all',
                'Embrace ethics, reflection, and a holistic yogic way of life'
            ]
        }
    ],

    testimonial: {
        video: { embedUrl: 'https://www.youtube.com/embed/snPBv1-igjM', title: 'Student Testimonial' },
        reviewLinks: [
            { platform: 'Facebook', icon: 'bi-facebook', iconColor: '#1877F2', url: 'https://www.facebook.com/mdvtiindia/reviews/' },
            { platform: 'Google', icon: 'bi-search', iconColor: '#EA4335', url: 'https://g.page/r/CZ7oR0BAPqQeEA0/review' }
        ]
    },
    faqs: [
        { q: "Is this course valid for government jobs?", a: "YES. MDVTI is a government-registered institute and our ISO-certified diploma is valid for jobs in schools, hospitals, and wellness centers across India." },
        { q: "Can I open my own yoga center after this?", a: "Absolutely. You will be a Certified Yoga Teacher & Therapist. We also include a bonus module on 'How to Setup Your Studio'." },
        { q: "I am a beginner. Can I join?", a: "Yes. The course starts from Zero (Basics) and goes to Advanced levels. No prior yoga experience is needed." },
        { q: "What if I miss a live class?", a: "Don’t worry. All live sessions are recorded and uploaded to your student portal. You can watch them anytime, for life." },
        { q: "Is the fee refundable?", a: "We offer a 7-day money-back guarantee if you are not satisfied with the initial training sessions." },
        { q: "Will I get practical training?", a: "Yes. 70% of the course is practical. You will learn adjustments, props usage, and teaching techniques via live video classes." },
        { q: "Do you provide job placement?", a: "We provide 100% placement assistance. We connect you with gyms, schools, and corporate clients, and guide you to find online students." },
        { q: "Can I pay in installments?", a: "Yes, we have an EMI option available. You can reserve your seat with just ₹5,000 today." }
    ]
};

// ====================================
// RENDER LOGIC
// ====================================
function renderAll() {
    renderCurriculumCards();
    renderTestimonial();
    renderFAQs();
}

function renderCurriculumCards() {
    const list = document.getElementById('curriculumList');
    const detail = document.getElementById('curriculumDetail');
    const btnWrapper = document.getElementById('syllabusBtnWrapper');
    if (!list || !detail) return;

    const cards = Array.isArray(pageData.curriculumCards)
        ? pageData.curriculumCards.filter(c => c && c.title)
        : [];
    if (!cards.length) return;

    list.innerHTML = '';
    detail.innerHTML = '';

    let activeIndex = 0;
    let mobileOpenIndex = null; // Track which tab is open on mobile
    const tabs = [];

    const escapeHtml = (str) => String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');

    const buildItemsListHtml = (c) => {
        const items = Array.isArray(c.items) ? c.items : [];
        if (!items.length) return '';

        return `
            <ul class="space-y-3 mt-5">
                ${items.map((item, idx) => `
                    <li class="flex items-start gap-3 text-sm text-gray-800 opacity-0 translate-y-2 detail-item-anim" style="animation-delay: ${idx * 50}ms">
                       
                           <img src="img/assets/check.png" alt="Duration Icon"
                                                        class="w-12 h-12">
                        <span class="leading-relaxed">${escapeHtml(item)}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    };

    const buildLottieHtml = (c) => {
        if (!c.lottieUrl) return '';
        return `
            <div class="mt-6 flex justify-center items-center bg-white/70 backdrop-blur rounded-2xl p-4 border border-white/70 ring-1 ring-black/5">
                <dotlottie-player 
                    src="${c.lottieUrl}"
                    background="transparent"
                    speed="1"
                    style="width: 100%; max-width: 280px; height: 160px;"
                    loop
                    autoplay>
                </dotlottie-player>
            </div>
        `;
    };

    const renderDetail = (index) => {
        activeIndex = Math.max(0, Math.min(cards.length - 1, index));
        const c = cards[activeIndex];

        // Update active state for all tabs
        tabs.forEach((t, i) => {
            const isActive = i === activeIndex;
            t.setAttribute('aria-selected', isActive ? 'true' : 'false');

            const indicator = t.querySelector('.active-indicator');
            const chevron = t.querySelector('.bi-chevron-right');
            const icon = t.querySelector('.bi-book, .bi-dumbbell, .bi-heart, .bi-briefcase, .bi-person, .bi-home');
            const iconContainer = t.querySelector('[class*="rounded-lg"]');

            t.className = 'curriculum-tab group w-full text-left p-4 rounded-2xl border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b2025]/30 relative overflow-hidden bg-white/60 backdrop-blur ring-1 ring-black/5 shadow-sm hover:shadow-md ';

            if (isActive) {
                t.classList.add('bg-[#8b2025]', 'border-[#8b2025]', 'shadow-lg', 'shadow-[#8b2025]/20', 'scale-[1.02]', 'z-10', 'text-white');

                if (chevron) chevron.classList.add('text-[#edcf9c]', 'translate-x-2', 'font-bold');
                if (iconContainer) {
                    iconContainer.classList.add('ring-2', 'ring-white/30', 'scale-110', 'bg-white/10');
                }
                // Highlight the title text
                const titleEl = t.querySelector('.text-base.font-semibold');
                if (titleEl) titleEl.classList.add('text-white', 'font-bold');
                // Highlight badge
                const badgeEl = t.querySelector('.text-xs.font-bold.text-gray-400');
                if (badgeEl) badgeEl.classList.remove('text-gray-400');
                if (badgeEl) badgeEl.classList.add('text-[#edcf9c]');
            } else {
                t.classList.remove('bg-[#8b2025]', 'border-[#8b2025]', 'shadow-lg', 'shadow-[#8b2025]/20', 'scale-[1.02]', 'z-10', 'text-white');
                t.classList.add('border-white/70');
                if (indicator) indicator.classList.add('opacity-0');
                if (chevron) {
                    chevron.classList.remove('text-[#edcf9c]', 'text-[#8b2025]', 'translate-x-1', 'translate-x-2', 'font-bold');
                }
                if (iconContainer) {
                    iconContainer.classList.remove('ring-2', 'ring-white/30', 'ring-[#8b2025]/25', 'scale-110', 'bg-white/10');
                }
                // Reset title text
                const titleEl = t.querySelector('.text-base.font-semibold');
                if (titleEl) {
                    titleEl.classList.remove('text-[#8b2025]', 'font-bold', 'text-white');
                    titleEl.classList.add('text-gray-900');
                }
                // Reset badge
                const badgeEl = t.querySelector('.text-xs.font-bold');
                if (badgeEl) {
                    badgeEl.classList.remove('text-[#8b2025]', 'text-[#edcf9c]');
                    badgeEl.classList.add('text-gray-400');
                }
            }
        });

        const itemsHtml = buildItemsListHtml(c);
        const lottieHtml = buildLottieHtml(c);

        // Animate out old content if needed, but for simplicity we just replace and animate in
        const detailContent = `
            <div class="detail-content opacity-0">
                <div class="flex items-start gap-4 mb-6">
                    <div class="w-14 h-14 rounded-2xl ${c.bgClass || 'bg-blue-100'} flex items-center justify-center flex-shrink-0 shadow-sm ring-1 ring-black/5 p-2">
                        <img src="${c.iconSrc}" alt="${escapeHtml(c.title)}" class="w-full h-full object-contain" />
                    </div>
                    <div class="flex-1 pt-1">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="px-2.5 py-1 rounded-full bg-[#edcf9c]/35 text-[10px] font-bold uppercase tracking-wider text-[#8b2025] border border-[#d4b886]/60">${escapeHtml(c.badge || 'Module')}</span>
                        </div>
                        <h3 class="text-2xl lg:text-3xl font-serif font-bold text-gray-900 leading-tight">${escapeHtml(c.title)}</h3>
                    </div>
                </div>

                <div class="prose prose-sm max-w-none">
                    ${c.description ? `<p class="text-base text-gray-600 leading-relaxed mb-6">${escapeHtml(c.description)}</p>` : ''}
                </div>
                
                ${lottieHtml}
                ${itemsHtml ? `<div class="mt-2">${itemsHtml}</div>` : ''}
            </div>
        `;

        detail.innerHTML = detailContent;

        // Handle mobile toggle behavior (like FAQ accordion)
        const detailMobile = document.getElementById('curriculumDetailMobile');
        const isMobile = window.innerWidth < 1024;

        if (detailMobile && isMobile) {
            // Check if clicking the same tab again - toggle close
            if (mobileOpenIndex === activeIndex) {
                // Close it with animation
                const gridWrapper = detailMobile.querySelector('.grid');
                if (gridWrapper) {
                    gridWrapper.style.gridTemplateRows = '0fr';
                    gridWrapper.style.opacity = '0';
                }

                // Update chevron back to right
                const activeTab = tabs[activeIndex];
                const chevron = activeTab?.querySelector('.bi-chevron-right, .bi-chevron-down');
                if (chevron) {
                    chevron.classList.remove('bi-chevron-down', 'rotate-180');
                    chevron.classList.add('bi-chevron-right');
                }

                // Clear mobile open index after animation
                setTimeout(() => {
                    mobileOpenIndex = null;
                    detailMobile.innerHTML = '';
                }, 300);

                return;
            }

            // Update mobile open index
            mobileOpenIndex = activeIndex;

            // Create detail content wrapper with grid for smooth animation
            detailMobile.innerHTML = `
                <div class="grid transition-all duration-300 ease-out" style="grid-template-rows: 0fr; opacity: 0;">
                    <div class="overflow-hidden">
                        <div class="bg-white/80 backdrop-blur-md rounded-2xl border border-white/70 ring-1 ring-black/5 shadow-xl shadow-black/5 p-6 mt-3">
                            ${detailContent}
                        </div>
                    </div>
                </div>
            `;

            // Move mobile detail below the active tab
            const activeTab = tabs[activeIndex];
            if (activeTab && activeTab.parentNode) {
                detailMobile.remove();
                activeTab.insertAdjacentElement('afterend', detailMobile);
            }

            // Update all chevrons
            tabs.forEach((tab, idx) => {
                const chevron = tab.querySelector('.bi-chevron-right, .bi-chevron-down');
                if (chevron) {
                    if (idx === activeIndex) {
                        chevron.classList.remove('bi-chevron-right');
                        chevron.classList.add('bi-chevron-down', 'rotate-180');
                    } else {
                        chevron.classList.remove('bi-chevron-down', 'rotate-180');
                        chevron.classList.add('bi-chevron-right');
                    }
                }
            });

            // Trigger animation after DOM update
            setTimeout(() => {
                const gridWrapper = detailMobile.querySelector('.grid');
                if (gridWrapper) {
                    gridWrapper.style.gridTemplateRows = '1fr';
                    gridWrapper.style.opacity = '1';
                }
            }, 10);

            // GSAP animation for content inside
            setTimeout(() => {
                const mobileContent = detailMobile.querySelector('.detail-content');
                if (mobileContent) {
                    gsap.fromTo(mobileContent,
                        { opacity: 0, y: 10 },
                        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
                    );

                    gsap.to(detailMobile.querySelectorAll('.detail-item-anim'), {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        stagger: 0.05,
                        ease: "back.out(1.7)",
                        delay: 0.1
                    });
                }
            }, 150);
        }

        // GSAP Animation for Detail Content (desktop)
        gsap.fromTo(detail.querySelector('.detail-content'),
            { opacity: 0, y: 20, filter: 'blur(10px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, ease: "power2.out" }
        );

        // Stagger list items in detail view (desktop)
        gsap.to(detail.querySelectorAll('.detail-item-anim'), {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "back.out(1.7)",
            delay: 0.1
        });
    };

    // Create list items
    cards.forEach((c, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'curriculum-tab group w-full text-left p-4 rounded-2xl border border-white/70 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b2025]/30 relative overflow-hidden bg-white/60 backdrop-blur ring-1 ring-black/5 shadow-sm hover:shadow-md';
        btn.setAttribute('role', 'tab');
        btn.id = `curriculumTab-${i}`;
        btn.setAttribute('aria-controls', 'curriculumDetail');

        btn.innerHTML = `
            <div class="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-gradient-to-b from-[#edcf9c] to-white opacity-0 transition-opacity duration-300 active-indicator"></div>
            <div class="flex items-center gap-4 relative z-10">
                <div class="w-11 h-11 rounded-xl ${c.bgClass || 'bg-blue-100'} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ring-1 ring-black/5 p-2">
                    <img src="${c.iconSrc || 'img/icons/default.png'}" alt="${escapeHtml(c.title)}" class="w-full h-full object-contain" />
                </div>
                <div class="min-w-0 flex-1 text-left">
                    <div class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">${escapeHtml(c.badge || '')}</div>
                    <div class="text-base font-semibold text-gray-900 truncate  transition-colors">${escapeHtml(c.title)}</div>
                </div>
                <i class="bi bi-chevron-right text-gray-300 group-hover:translate-x-1 transition-all duration-300"></i>
            </div>
        `;

        btn.addEventListener('click', () => {
            renderDetail(i);
        });

        btn.addEventListener('keydown', (e) => {
            const key = e.key;
            if (key !== 'ArrowUp' && key !== 'ArrowDown' && key !== 'Home' && key !== 'End') return;
            e.preventDefault();

            if (key === 'Home') {
                tabs[0]?.focus();
                renderDetail(0);
                return;
            }
            if (key === 'End') {
                tabs[tabs.length - 1]?.focus();
                renderDetail(tabs.length - 1);
                return;
            }

            const dir = key === 'ArrowDown' ? 1 : -1;
            const next = (i + dir + tabs.length) % tabs.length;
            tabs[next]?.focus();
            renderDetail(next);
        });

        tabs.push(btn);
        list.appendChild(btn);
    });

    // Initial Render
    renderDetail(0);

    // GSAP Animation for List Items Entrance
    // We use a small timeout to ensure the DOM is fully painted and calculated
    setTimeout(() => {
        ScrollTrigger.batch(tabs, {
            onEnter: batch => gsap.fromTo(batch,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out", overwrite: true }
            ),
            start: "top 90%",
            once: true // Only animate once to avoid issues
        });
    }, 100);

    // Animate Detail Card Entrance
    gsap.fromTo(detail,
        { opacity: 0, x: 20 },
        {
            scrollTrigger: {
                trigger: detail,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.2
        }
    );
    renderDetail(0);

    if (btnWrapper && btnWrapper.innerHTML.trim() === '') {
        btnWrapper.innerHTML = `
            <a href="#" class="inline-flex items-center gap-3 px-8 py-3 bg-[#8b2025] text-white rounded-xl font-bold hover:bg-[#5a0300] transition-colors shadow-lg">
                <i class="bi bi-file-earmark-pdf-fill"></i>
                <span>Download Full Syllabus PDF</span>
            </a>
            <div class="mt-4 text-sm text-gray-500">
                OR <a href="#" class="text-[#8b2025] font-semibold hover:underline">Watch Detailed Syllabus Video</a>
            </div>
        `;
    }
}

function renderFAQs() {
    const container = document.getElementById('faqContainer');
    if (!container) return;

    // Split FAQs into two columns
    const mid = Math.ceil(pageData.faqs.length / 2);
    const leftFAQs = pageData.faqs.slice(0, mid);
    const rightFAQs = pageData.faqs.slice(mid);

    const escapeHtml = (str) => String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');

    const buildFAQHtml = (faqs) => {
        return faqs.map((faq, index) => `
            <div class="faq-item bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <button type="button" class="faq-toggle w-full text-left flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#8b2025]/30 rounded-lg p-2 -m-2" aria-expanded="false" aria-controls="faq-answer-${index}">
                    <h3 class="font-bold text-gray-900 text-lg leading-tight pr-4 group-hover:text-[#8b2025] transition-colors">${escapeHtml(faq.q)}</h3>
                    <i class="bi bi-chevron-down text-gray-400 group-hover:text-[#8b2025] transition-all duration-300 flex-shrink-0 mt-1" style="font-size: 1.25rem;"></i>
                </button>
                <div id="faq-answer-${index}" class="faq-content overflow-hidden transition-all duration-300 ease-out max-h-0 opacity-0 mt-4">
                    <p class="text-gray-600 leading-relaxed">${escapeHtml(faq.a)}</p>
                </div>
            </div>
        `).join('');
    };

    container.innerHTML = `
        <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
                ${buildFAQHtml(leftFAQs)}
            </div>
            <div class="space-y-4">
                ${buildFAQHtml(rightFAQs)}
            </div>
        </div>
    `;

    // Add toggle functionality
    container.querySelectorAll('.faq-toggle').forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            const content = toggle.parentElement.querySelector('.faq-content');
            const icon = toggle.querySelector('i');
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                // Close
                content.style.maxHeight = '0px';
                content.style.opacity = '0';
                icon.style.transform = 'rotate(0deg)';
                toggle.setAttribute('aria-expanded', 'false');
            } else {
                // Open
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                icon.style.transform = 'rotate(180deg)';
                toggle.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // GSAP Animation for FAQ Items
    setTimeout(() => {
        ScrollTrigger.batch(container.querySelectorAll('.faq-item'), {
            onEnter: batch => gsap.fromTo(batch,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", overwrite: true }
            ),
            start: "top 90%",
            once: true
        });
    }, 100);
}

function renderTestimonial() {
    // Placeholder for testimonial rendering if needed
}

// Hero Video Modal
(() => {
    const initHeroVideoModal = () => {
        const openBtn = document.getElementById('heroVideoOpen');
        const modal = document.getElementById('heroVideoModal');
        const closeBtn = document.getElementById('heroVideoClose');
        const frame = document.getElementById('heroVideoFrame');
        const title = document.getElementById('heroVideoTitle');

        if (!openBtn || !modal || !closeBtn || !frame || !title) return;

        const open = () => {
            const src = openBtn.getAttribute('data-video-src') || '';
            const videoTitle = openBtn.getAttribute('data-video-title') || 'Video';

            title.textContent = videoTitle;
            frame.setAttribute('title', videoTitle);
            frame.setAttribute('src', withAutoplay(src));

            modal.classList.remove('hidden');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('overflow-hidden');
            closeBtn.focus();
        };

        const close = () => {
            modal.classList.add('hidden');
            modal.setAttribute('aria-hidden', 'true');
            frame.setAttribute('src', '');
            document.body.classList.remove('overflow-hidden');
            openBtn.focus();
        };

        openBtn.addEventListener('click', open);
        closeBtn.addEventListener('click', close);

        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal || (e.target instanceof HTMLElement && e.target.classList.contains('bg-black/70'))) {
                close();
            }
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) close();
        });
    };

    document.addEventListener('DOMContentLoaded', initHeroVideoModal);
})();

// Exit Intent Modal
document.addEventListener('DOMContentLoaded', () => {
    // Basic Exit Intent Implementation
    const modal = document.getElementById('exitIntentModal');
    const content = document.getElementById('exitModalContent');
    const closeBtn = document.getElementById('closeExitModal');
    const backdrop = document.getElementById('exitModalBackdrop');

    if (!modal || !content) return;

    // Optional: Check local storage to ensure we don't annoy the user
    // We'll leave it commented out for testing purposes so you can see it work
    // if (localStorage.getItem('mdvti_exit_popup_shown')) return;

    let hasShown = false;

    const showModal = () => {
        if (hasShown) return;
        hasShown = true;
        // localStorage.setItem('mdvti_exit_popup_shown', 'true');

        modal.classList.remove('hidden');
        // Small delay to allow display:block to apply before transition
        setTimeout(() => {
            content.classList.remove('scale-95', 'opacity-0');
            content.classList.add('scale-100', 'opacity-100');
        }, 10);
    };

    const closeModal = () => {
        content.classList.remove('scale-100', 'opacity-100');
        content.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300); // Match transition duration
    };

    // Trigger on mouse leave to top (Desktop)
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 10) {
            showModal();
        }
    });

    // Mobile trigger: Show modal after user scrolls to 40% of page or after 45 seconds
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
        let scrollTriggered = false;

        const handleScroll = () => {
            if (scrollTriggered) return;
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercentage > 40) {
                scrollTriggered = true;
                showModal();
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Fallback: Show modal after 45 seconds on mobile if user hasn't scrolled enough
        setTimeout(() => {
            if (!scrollTriggered && !hasShown) {
                scrollTriggered = true;
                showModal();
                window.removeEventListener('scroll', handleScroll);
            }
        }, 45000);
    }

    // Close events
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    // Focus trap for exit modal (accessibility)
    const focusableElements = modal.querySelectorAll('button, a, input, [tabindex]:not([tabindex="-1"])');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
        if (e.key === 'Escape') closeModal();
    });
});

// UX Enhancement Scripts
// ====================================
// SCROLL PROGRESS INDICATOR
// ====================================
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = Math.min(progress, 100) + '%';
    }, { passive: true });
}

// ====================================
// BACK TO TOP BUTTON
// ====================================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, { passive: true });
}

// ====================================
// MOBILE NAV TOGGLE WITH ARIA
// ====================================
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!navToggle || !mobileMenu) return;

    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');

        // Change icon
        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.className = isExpanded ? 'bi bi-list' : 'bi bi-x-lg';
        }
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.querySelector('i').className = 'bi bi-list';
        });
    });
}

// ====================================
// COPY TO CLIPBOARD FUNCTION
// ====================================
function copyToClipboard(text, buttonEl) {
    navigator.clipboard.writeText(text).then(() => {
        const feedback = buttonEl.querySelector('.copy-feedback');
        if (feedback) {
            feedback.classList.add('show');
            setTimeout(() => feedback.classList.remove('show'), 2000);
        }

        // Update button text temporarily
        const codeSpan = buttonEl.querySelector('#couponCode');
        if (codeSpan) {
            const original = codeSpan.textContent;
            codeSpan.textContent = 'Copied!';
            setTimeout(() => codeSpan.textContent = original, 1500);
        }
    }).catch(err => {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    });
}

// ====================================
// PREFERS REDUCED MOTION CHECK
// ====================================
function checkReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        // Disable GSAP animations
        if (typeof gsap !== 'undefined') {
            gsap.globalTimeline.pause();
        }
        // Disable WOW.js
        document.querySelectorAll('.wow').forEach(el => {
            el.classList.remove('wow');
            el.style.visibility = 'visible';
            el.style.opacity = '1';
        });
    }
    return prefersReducedMotion;
}

// ====================================
// LAZY LOAD IMAGES
// ====================================
function initLazyLoading() {
    // Add loading="lazy" to images below the fold
    const images = document.querySelectorAll('img:not([loading])');
    const heroSection = document.querySelector('.hero-section');
    const heroBottom = heroSection ? heroSection.getBoundingClientRect().bottom : 600;

    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top > heroBottom) {
            img.setAttribute('loading', 'lazy');
        }
    });
}

// ====================================
// KEYBOARD NAVIGATION IMPROVEMENTS
// ====================================
function initKeyboardNav() {
    // Add keyboard support to curriculum tabs
    const curriculumTabs = document.querySelectorAll('.curriculum-tab');
    curriculumTabs.forEach((tab, index) => {
        tab.setAttribute('tabindex', '0');
        tab.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                tab.click();
            }
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                const next = curriculumTabs[index + 1] || curriculumTabs[0];
                next.focus();
            }
            if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const prev = curriculumTabs[index - 1] || curriculumTabs[curriculumTabs.length - 1];
                prev.focus();
            }
        });
    });
}

// ====================================
// INIT ALL UX ENHANCEMENTS
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    const reducedMotion = checkReducedMotion();

    initScrollProgress();
    initBackToTop();
    initMobileNav();
    initLazyLoading();
    initKeyboardNav();

    // Only show social proof if user hasn't opted for reduced motion
    if (!reducedMotion) {
        initSocialProofToast();
    }

    // Render dynamic content
    renderAll();
});

// Missing function
function initSocialProofToast() {
    // Placeholder for social proof toast
}