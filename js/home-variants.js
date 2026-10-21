/* Yogkulam homepage variants: chooser behaviour, story layer, scroll motion. */
(function () {
    'use strict';

    var STORIES = {
        'pathway-atlas': {
            name: 'A map of learning paths',
            target: '#pathways',
            html: [
                '<section class="story story-atlas" id="storyPath" data-story-atlas aria-labelledby="storyAtlasTitle">',
                '  <div class="story-shell">',
                '    <div class="atlas-head">',
                '      <div><h2 id="storyAtlasTitle">Where would you like<br><em>yoga to take you?</em></h2></div>',
                '      <p class="story-lede">Three routes, one institute. Start where you are. Each stop below names what the path is for, what it covers and where the programme detail lives.</p>',
                '    </div>',
                '    <div class="atlas-map">',
                '      <div class="atlas-route" aria-hidden="true"></div>',
                '      <ol class="atlas-stops">',
                '        <li class="atlas-stop" data-stop="1">',
                '          <h3>Build your practice</h3>',
                '          <p>Begin with the foundations, then take a focused module when you want to go deeper into one area of practice.</p>',
                '          <div class="atlas-meta"><span>Foundation course</span><span>Specialist modules</span></div>',
                '          <a class="story-link" href="course-desc.html">See the programme options <i class="bi bi-arrow-right" aria-hidden="true"></i></a>',
                '        </li>',
                '        <li class="atlas-stop" data-stop="2">',
                '          <h3>Teach with confidence</h3>',
                '          <p>Study practice, pranayama and the teaching skills that let you hold a class responsibly.</p>',
                '          <div class="atlas-meta"><span>Teacher training</span><span>Practice &amp; methodology</span></div>',
                '          <a class="story-link" href="course-desc.html">Read the diploma outline <i class="bi bi-arrow-right" aria-hidden="true"></i></a>',
                '        </li>',
                '        <li class="atlas-stop" data-stop="3">',
                '          <h3>Study yoga therapy</h3>',
                '          <p>Connect practice, therapeutic understanding and the ethics of working with people.</p>',
                '          <div class="atlas-meta"><span>PGDYT</span><span>1 year</span><span>500 hours</span></div>',
                '          <a class="story-link" href="course-desc.html">Explore the PGDYT <i class="bi bi-arrow-right" aria-hidden="true"></i></a>',
                '        </li>',
                '      </ol>',
                '    </div>',
                '    <p class="story-foot">The 1-year, 500-hour duration shown is for the PGDYT. Contact admissions for current availability, eligibility and details of other programmes.</p>',
                '  </div>',
                '</section>'
            ].join('')
        },

        'first-year-chronicle': {
            name: 'A year in the making',
            target: null,
            html: [
                '<section class="story story-chronicle" data-story-timeline aria-labelledby="storyChronicleTitle">',
                '  <div class="story-shell">',
                '    <div class="chronicle-head">',
                '      <div><h2 id="storyChronicleTitle">What a training year<br><em>actually holds.</em></h2></div>',
                '      <p class="story-lede">The PGDYT runs for one year and 500 hours; shorter programmes follow their own structure. This is the shape of the learning, not a promise of a fixed calendar.</p>',
                '      <div class="chronicle-facts">',
                '        <span><b>PGDYT</b>1 year · 500 hours</span>',
                '        <span><b>Languages</b>Hindi classes · English notes</span>',
                '        <span><b>Support</b>YCB exam guidance</span>',
                '      </div>',
                '    </div>',
                '    <ol class="chronicle-track">',
                '      <div class="chronicle-thread" aria-hidden="true"></div>',
                '      <li class="chronicle-entry">',
                '        <div><span class="chronicle-when">First</span><h3>Begin with practice</h3><p>Guided sessions and a personal routine come before anything else. You do not need prior teaching experience to start.</p></div>',
                '        <p class="chronicle-note">Classes are in Hindi with notes in English. Confirm the language options for your chosen programme.</p>',
                '      </li>',
                '      <li class="chronicle-entry">',
                '        <div><span class="chronicle-when">Then</span><h3>Study the tradition</h3><p>Philosophy and yogic lifestyle, anatomy and physiology, asana, pranayama, kriya, meditation and mental wellbeing.</p></div>',
                '        <p class="chronicle-note">Yoga therapy and naturopathy sit alongside teaching methodology in the PGDYT syllabus.</p>',
                '      </li>',
                '      <li class="chronicle-entry">',
                '        <div><span class="chronicle-when">Alongside</span><h3>Practise teaching</h3><p>Sequencing, communication and professional ethics are treated as skills to rehearse, not facts to memorise.</p></div>',
                '        <p class="chronicle-note">Doubt-clearing, academic support and continued learner community support are part of the learning support described by Yogkulam.</p>',
                '      </li>',
                '      <li class="chronicle-entry">',
                '        <div><span class="chronicle-when">Near the end</span><h3>Understand the certification route</h3><p>Assessment and certification depend on the programme. Yogkulam provides Yoga Certification Board exam support.</p></div>',
                '        <p class="chronicle-note">Recognition and eligibility differ by programme. Ask admissions which route applies to your course.</p>',
                '      </li>',
                '      <li class="chronicle-entry">',
                '        <div><span class="chronicle-when">Afterwards</span><h3>Choose your next step</h3><p>Teaching, therapeutic practice, further study or service in your community.</p></div>',
                '        <p class="chronicle-note">Career and income outcomes depend on effort, experience, consistency and local opportunity. No particular placement or income is guaranteed.</p>',
                '      </li>',
                '    </ol>',
                '  </div>',
                '</section>'
            ].join('')
        },

        'open-syllabus': {
            name: 'The syllabus, opened up',
            target: '#curriculum',
            html: [
                '<section class="story story-syllabus" data-story-syllabus aria-labelledby="storySyllabusTitle">',
                '  <div class="story-shell syllabus-grid">',
                '    <div class="syllabus-intro">',
                '      <h2 id="storySyllabusTitle">The syllabus,<br><em>opened up.</em></h2>',
                '      <p class="story-lede">Yoga education here connects practice, the body, the mind and the responsibility of teaching. These are the subjects the PGDYT syllabus is built from.</p>',
                '      <a class="story-link" href="course-desc.html">Read the PGDYT syllabus <i class="bi bi-arrow-right" aria-hidden="true"></i></a>',
                '      <p class="story-foot">This outline belongs to the PGDYT. Other programmes follow their own syllabus, hours and certification route.</p>',
                '    </div>',
                '    <div class="syllabus-sheet">',
                '      <div class="syllabus-sheet-head"><b>PGDYT · 500 hours</b><span>Subject outline</span></div>',
                '      <a class="syllabus-row" href="course-desc.html">',
                '        <span class="syllabus-no">01</span>',
                '        <span class="syllabus-label"><b>Philosophy &amp; yogic lifestyle</b><small>Classical texts, ethics and daily practice</small></span>',
                '        <i class="bi bi-arrow-right" aria-hidden="true"></i>',
                '      </a>',
                '      <a class="syllabus-row" href="course-desc.html">',
                '        <span class="syllabus-no">02</span>',
                '        <span class="syllabus-label"><b>Anatomy &amp; physiology</b><small>Body systems, alignment and injury prevention</small></span>',
                '        <i class="bi bi-arrow-right" aria-hidden="true"></i>',
                '      </a>',
                '      <a class="syllabus-row" href="course-desc.html">',
                '        <span class="syllabus-no">03</span>',
                '        <span class="syllabus-label"><b>Asana, pranayama &amp; kriya</b><small>Postures, breath, mudra, bandha and shatkarma</small></span>',
                '        <i class="bi bi-arrow-right" aria-hidden="true"></i>',
                '      </a>',
                '      <a class="syllabus-row" href="course-desc.html">',
                '        <span class="syllabus-no">04</span>',
                '        <span class="syllabus-label"><b>Meditation &amp; mental wellbeing</b><small>Focus, stress management and mind-body awareness</small></span>',
                '        <i class="bi bi-arrow-right" aria-hidden="true"></i>',
                '      </a>',
                '      <a class="syllabus-row" href="course-desc.html">',
                '        <span class="syllabus-no">05</span>',
                '        <span class="syllabus-label"><b>Yoga therapy &amp; naturopathy</b><small>Therapeutic foundations and holistic perspectives</small></span>',
                '        <i class="bi bi-arrow-right" aria-hidden="true"></i>',
                '      </a>',
                '      <a class="syllabus-row" href="course-desc.html">',
                '        <span class="syllabus-no">06</span>',
                '        <span class="syllabus-label"><b>Teaching methodology</b><small>Sequencing, communication and professional ethics</small></span>',
                '        <i class="bi bi-arrow-right" aria-hidden="true"></i>',
                '      </a>',
                '    </div>',
                '  </div>',
                '</section>'
            ].join('')
        }
    };

    var HERO_COPY = {
        'pathway-atlas': {
            heading: 'Become a yoga teacher<br>and <em>therapist.</em>',
            lede: 'Most institutes teach yoga. Yogkulam builds yoga professionals with purpose—with a structured path from personal practice to teaching, therapy and service.'
        },
        'first-year-chronicle': {
            heading: 'Make space for<br><em>a new practice.</em>',
            lede: 'One structured year of practice, philosophy and teaching method — taught in Hindi with English notes, with YCB exam support along the way.'
        },
        'open-syllabus': {
            heading: 'Study the whole<br><em>tradition.</em>',
            lede: 'The PGDYT runs 500 hours across one year. These are the subjects it is built from, in the order the syllabus sets them out.'
        }
    };

    var VARIANTS = [
        { id: 'pathway-atlas', short: 'A · Route map', file: 'index.html' },
        { id: 'first-year-chronicle', short: 'B · Training year', file: 'index-first-year-chronicle.html' },
        { id: 'open-syllabus', short: 'C · Syllabus first', file: 'index-open-syllabus.html' }
    ];

    var story = document.body.getAttribute('data-home-story');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Chooser page ------------------------------------------------ */

    if (!story) {
        var cards = Array.prototype.slice.call(document.querySelectorAll('[data-variant-card]'));

        cards.forEach(function (card) {
            card.addEventListener('click', function (event) {
                if (event.target.closest('a')) return;
                cards.forEach(function (item) { item.classList.toggle('is-selected', item === card); });
            });
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-pressed', card.classList.contains('is-selected') ? 'true' : 'false');
            card.addEventListener('keydown', function (event) {
                if (event.key !== 'Enter' && event.key !== ' ') return;
                if (event.target.closest('a')) return;
                event.preventDefault();
                card.click();
            });
        });

        cards.forEach(function (card) {
            new MutationObserver(function () {
                card.setAttribute('aria-pressed', card.classList.contains('is-selected') ? 'true' : 'false');
            }).observe(card, { attributes: true, attributeFilter: ['class'] });
        });

        return;
    }

    /* ---------- Story pages ------------------------------------------------- */

    var main = document.getElementById('main');
    var hero = document.querySelector('.hero-section');
    var currentFile = window.location.pathname.split('/').pop() || 'index.html';
    var isHomepage = currentFile === 'index.html';
    var config = STORIES[story] || STORIES['pathway-atlas'];

    if (main) {
        main.setAttribute('data-story-main', story);
    }

    /* The story replaces the section it rewrites, so the page keeps one voice
       instead of two sections saying the same thing. Sections without a
       counterpart (the training year) open directly under the hero. */
    if (main && !document.querySelector('.story')) {
        var mount = document.createElement('div');
        mount.innerHTML = config.html.trim();
        var node = mount.firstElementChild;
        var target = config.target ? document.querySelector(config.target) : null;

        if (node && target) {
            node.id = target.id;
            target.replaceWith(node);
        } else if (node && hero) {
            hero.insertAdjacentElement('afterend', node);
        }
    }

    var copy = HERO_COPY[story];
    if (copy) {
        var heading = document.querySelector('.hero-copy h1');
        var lede = document.querySelector('.hero-lede');
        if (heading) heading.innerHTML = copy.heading;
        if (lede) lede.textContent = copy.lede;
    }

    /* Each direction opens in a different order. The DOM is reordered rather
       than re-sorted with CSS so focus and reading order stay honest. */
    var SECTION_ORDER = {
        'pathway-atlas': [
            '.hero-section', '.story', '.recognition-section', '.audience-section',
            '.difference-section', '.included-section', '.curriculum-section',
            '.career-section', '.community-section', '.learning-section',
            '.founder-section', '.ethics-section', '.faq-section', '.final-cta'
        ],
        'first-year-chronicle': [
            '.hero-section', '.story', '.curriculum-section', '.included-section',
            '.pathways-section', '.recognition-section', '.audience-section',
            '.difference-section', '.career-section', '.community-section',
            '.founder-section', '.ethics-section', '.faq-section', '.final-cta'
        ],
        'open-syllabus': [
            '.hero-section', '.story', '.pathways-section', '.included-section',
            '.recognition-section', '.audience-section', '.difference-section',
            '.career-section', '.community-section', '.learning-section',
            '.founder-section', '.ethics-section', '.faq-section', '.final-cta'
        ]
    };

    if (main && SECTION_ORDER[story]) {
        SECTION_ORDER[story].forEach(function (selector) {
            var section = main.querySelector(':scope > ' + selector);
            if (section) main.appendChild(section);
        });
    }

    if (story === 'open-syllabus') {
        var visual = document.querySelector('.hero-visual');
        if (visual && !visual.querySelector('.hero-syllabus-mini')) {
            var mini = document.createElement('div');
            mini.className = 'hero-syllabus-mini';
            mini.innerHTML = '<span>PGDYT · first subjects</span><ul>' +
                '<li><b>01</b> Philosophy &amp; yogic lifestyle</li>' +
                '<li><b>02</b> Anatomy &amp; physiology</li>' +
                '<li><b>03</b> Asana, pranayama &amp; kriya</li>' +
                '<li><b>04</b> Meditation &amp; wellbeing</li>' +
                '</ul>';
            visual.appendChild(mini);
        }
    }

    /* A small preview ribbon on the alternate pages, never on the live homepage. */
    if (!isHomepage && !document.querySelector('.variant-ribbon')) {
        var ribbon = document.createElement('div');
        ribbon.className = 'variant-ribbon';
        ribbon.setAttribute('role', 'region');
        ribbon.setAttribute('aria-label', 'Homepage variant preview');
        var links = VARIANTS.map(function (variant) {
            var current = variant.id === story;
            return '<a href="' + variant.file + '"' + (current ? ' class="is-current" aria-current="page"' : '') + '>' + variant.short + '</a>';
        });
        ribbon.innerHTML =
            '<div class="variant-ribbon-label"><span class="variant-ribbon-dot" aria-hidden="true"></span>' +
            '<span><strong>Preview · ' + config.name + '</strong> — one of three homepage directions</span></div>' +
            '<nav aria-label="Switch homepage direction">' + links.join('') +
            '<a href="homepage-variants.html">Compare all</a></nav>';
        var skip = document.querySelector('.skip-link');
        if (skip && skip.parentNode === document.body) {
            skip.insertAdjacentElement('afterend', ribbon);
        } else {
            document.body.insertBefore(ribbon, document.body.firstChild);
        }
    }

    /* ---------- Motion ------------------------------------------------------ */

    if (reduceMotion || !window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    if (story === 'pathway-atlas') {
        var atlas = document.querySelector('[data-story-atlas]');
        if (!atlas) return;
        var route = atlas.querySelector('.atlas-route');
        if (route) {
            var horizontal = window.matchMedia('(min-width: 768px)').matches;
            gsap.fromTo(route, horizontal ? { scaleX: 0 } : { scaleY: 0 }, {
                scaleX: 1,
                scaleY: 1,
                transformOrigin: horizontal ? 'left center' : 'top center',
                ease: 'none',
                scrollTrigger: { trigger: atlas.querySelector('.atlas-map'), start: 'top 82%', end: 'top 46%', scrub: .6 }
            });
        }
        gsap.from(atlas.querySelectorAll('.atlas-stop'), {
            y: 26,
            autoAlpha: 0,
            duration: .7,
            stagger: .14,
            ease: 'power3.out',
            scrollTrigger: { trigger: atlas.querySelector('.atlas-map'), start: 'top 80%', once: true }
        });
    }

    if (story === 'first-year-chronicle') {
        var chronicle = document.querySelector('[data-story-timeline]');
        if (!chronicle) return;
        var thread = chronicle.querySelector('.chronicle-thread');
        if (thread) {
            gsap.fromTo(thread, { scaleY: 0 }, {
                scaleY: 1,
                transformOrigin: 'top center',
                ease: 'none',
                scrollTrigger: { trigger: chronicle.querySelector('.chronicle-track'), start: 'top 78%', end: 'bottom 58%', scrub: .55 }
            });
        }
        gsap.utils.toArray(chronicle.querySelectorAll('.chronicle-entry')).forEach(function (entry, index) {
            gsap.from(entry, {
                x: index % 2 ? 30 : -30,
                autoAlpha: 0,
                duration: .7,
                ease: 'power3.out',
                scrollTrigger: { trigger: entry, start: 'top 84%', once: true }
            });
        });
    }

    if (story === 'open-syllabus') {
        var syllabus = document.querySelector('[data-story-syllabus]');
        if (!syllabus) return;
        gsap.from(syllabus.querySelectorAll('.syllabus-row'), {
            x: function (index) { return index % 2 ? 26 : -26; },
            autoAlpha: 0,
            duration: .55,
            stagger: .07,
            ease: 'power3.out',
            scrollTrigger: { trigger: syllabus.querySelector('.syllabus-sheet'), start: 'top 84%', once: true }
        });
        gsap.from(syllabus.querySelector('.syllabus-intro'), {
            y: 22,
            autoAlpha: 0,
            duration: .7,
            ease: 'power3.out',
            scrollTrigger: { trigger: syllabus, start: 'top 78%', once: true }
        });
    }
})();
