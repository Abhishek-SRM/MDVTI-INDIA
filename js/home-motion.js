/* Yogkulam homepage motion and page chrome.
   Loaded deferred, after js/home-variants.js, so the story section and the
   final section order exist before ScrollTrigger measures anything. */
(function () {
    'use strict';

    var doc = document;
    var root = doc.documentElement;
    var reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    /* ---------- Page chrome (never hidden behind JS) ---------------------- */

    var header = doc.getElementById('ykHeader');
    var progress = doc.getElementById('readingProgress');
    var maxScroll = 0;
    var frame = 0;

    function measureScroll() {
        maxScroll = Math.max(0, root.scrollHeight - window.innerHeight);
    }

    function paintScroll() {
        frame = 0;
        if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);
        if (progress) {
            var amount = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
            progress.style.transform = 'scaleX(' + amount + ')';
        }
    }

    function queueScrollPaint() {
        if (frame) return;
        frame = window.requestAnimationFrame(paintScroll);
    }

    window.addEventListener('scroll', queueScrollPaint, { passive: true });
    window.addEventListener('resize', function () {
        measureScroll();
        queueScrollPaint();
    }, { passive: true });
    window.addEventListener('load', function () {
        measureScroll();
        queueScrollPaint();
    });
    measureScroll();
    paintScroll();

    var year = doc.querySelector('[data-yk-year]');
    if (year) year.textContent = String(new Date().getFullYear());

    var helpDialog = doc.getElementById('helpDialog');
    if (helpDialog) {
        var closeHelp = function () {
            if (helpDialog.open) helpDialog.close();
        };
        var closeHelpButton = doc.getElementById('closeHelpDialog');
        var programmesLink = doc.getElementById('dialogProgrammes');
        if (closeHelpButton) closeHelpButton.addEventListener('click', closeHelp);
        if (programmesLink) programmesLink.addEventListener('click', closeHelp);
        helpDialog.addEventListener('click', function (event) {
            if (event.target === helpDialog) closeHelp();
        });
        /* Exit intent, desktop only, once per session, and never while a key
           interaction is in progress. */
        doc.addEventListener('pointerout', function (event) {
            if (event.clientY > 0 || !event.relatedTarget) return;
            if (window.innerWidth < 768 || window.scrollY < 500) return;
            if (helpDialog.open) return;
            try {
                if (window.sessionStorage.getItem('yogkulam-help-seen')) return;
                window.sessionStorage.setItem('yogkulam-help-seen', '1');
            } catch (error) {
                return;
            }
            helpDialog.showModal();
        });
    }

    /* ---------- Mobile quick actions -------------------------------------- */

    var actionBar = doc.querySelector('[data-actionbar]');
    if (actionBar) {
        var heroBlock = doc.querySelector('.hero-section');
        var footerBlock = doc.querySelector('.yk-footer');
        var heroPassed = false;
        var footerVisible = false;

        var syncActionBar = function () {
            var visible = heroPassed && !footerVisible;
            actionBar.classList.toggle('is-visible', visible);
            doc.body.classList.toggle('has-actionbar', visible);
        };

        if ('IntersectionObserver' in window) {
            if (heroBlock) {
                new IntersectionObserver(function (entries) {
                    heroPassed = !entries[0].isIntersecting;
                    syncActionBar();
                }, { rootMargin: '-15% 0px 0px 0px' }).observe(heroBlock);
            }
            if (footerBlock) {
                new IntersectionObserver(function (entries) {
                    footerVisible = entries[0].isIntersecting;
                    syncActionBar();
                }, { rootMargin: '0px 0px -30% 0px' }).observe(footerBlock);
            }
        }
    }

    /* ---------- Motion ----------------------------------------------------- */

    var gsap = window.gsap;
    var ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger || reduceQuery.matches) return;

    gsap.registerPlugin(ScrollTrigger);
    /* Mobile browsers resize the viewport when the address bar shows and
       hides; refreshing scroll positions for that is wasted work. */
    ScrollTrigger.config({ ignoreMobileResize: true });

    ScrollTrigger.addEventListener('refresh', measureScroll);

    var compact = window.matchMedia('(max-width: 767.98px)').matches;
    var speed = compact ? 0.78 : 1;
    var motion = null;
    var mm = null;

    function heroIntro() {
        var timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
        timeline
            .fromTo('.hero-copy .eyebrow', { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55 * speed })
            .fromTo('.hero-copy h1', { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 * speed }, '-=.28')
            .fromTo('.hero-lede', { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6 * speed }, '-=.34')
            .fromTo('.hero-actions > *', { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.48 * speed, stagger: 0.08 }, '-=.28')
            .fromTo('.hero-note', { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 * speed }, '-=.2')
            .fromTo('.hero-photo img', { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.9 * speed, ease: 'power3.inOut' }, '-=1.05')
            .fromTo('.hero-visual', { x: compact ? 16 : 28, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.9 * speed }, '-=1.05')
            .fromTo('.hero-bottom > *', { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.06 }, '-=.38');

        /* The little second frame is a printed photo: it lands with a small
           settle, then floats. The float starts only once the entrance has
           finished so both tweens never fight over `y`. */
        var canvaCard = doc.querySelector('.hero-canva-card');
        if (canvaCard) {
            var tilt = Number(gsap.getProperty(canvaCard, 'rotation')) || 0;
            timeline.fromTo(canvaCard,
                { y: 22, rotation: tilt + 4, autoAlpha: 0 },
                { y: 0, rotation: tilt, autoAlpha: 1, duration: 0.8, ease: 'back.out(1.35)' },
                0.55);
            timeline.eventCallback('onComplete', function () {
                gsap.to(canvaCard, { y: -6, duration: 2.8, ease: 'sine.inOut', repeat: -1, yoyo: true });
            });
        }

        var cue = doc.querySelector('.hero-bottom > a i');
        if (cue) gsap.to(cue, { y: 3, duration: 1.1, ease: 'sine.inOut', repeat: -1, yoyo: true });
        return timeline;
    }

    function scrollReveals() {
        var items = gsap.utils.toArray('[data-aos="fade-up"]');
        if (!items.length) return;
        gsap.set(items, { y: 16, autoAlpha: 0 });
        ScrollTrigger.batch(items, {
            start: 'top 88%',
            once: true,
            /* Group elements that arrive together, but do not make a single
               element wait the default 100ms before it reveals. */
            interval: 0.06,
            batchMax: 6,
            onEnter: function (batch) {
                gsap.to(batch, {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.68 * speed,
                    ease: 'power2.out',
                    stagger: 0.07,
                    overwrite: 'auto'
                });
            }
        });
    }

    function storyMotion() {
        var story = doc.body.getAttribute('data-home-story');
        if (!story) return;

        mm.add('(min-width: 768px)', function () {
            if (story === 'pathway-atlas') {
                var atlas = doc.querySelector('[data-story-atlas]');
                var route = atlas && atlas.querySelector('.atlas-route');
                if (route) {
                    gsap.fromTo(route, { scaleX: 0 }, {
                        scaleX: 1,
                        transformOrigin: 'left center',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: atlas.querySelector('.atlas-map'),
                            start: 'top 82%',
                            end: 'top 46%',
                            scrub: 0.6,
                            invalidateOnRefresh: true
                        }
                    });
                }
            }
            if (story === 'first-year-chronicle') {
                gsap.utils.toArray('.chronicle-entry').forEach(function (entry, index) {
                    gsap.fromTo(entry,
                        { x: index % 2 ? 26 : -26, autoAlpha: 0 },
                        {
                            x: 0,
                            autoAlpha: 1,
                            duration: 0.7,
                            ease: 'power3.out',
                            scrollTrigger: { trigger: entry, start: 'top 86%', once: true }
                        });
                });
            }
            if (story === 'open-syllabus') {
                gsap.utils.toArray('.syllabus-row').forEach(function (row, index) {
                    gsap.fromTo(row,
                        { x: index % 2 ? 22 : -22, autoAlpha: 0 },
                        {
                            x: 0,
                            autoAlpha: 1,
                            duration: 0.55,
                            ease: 'power3.out',
                            delay: index * 0.05,
                            scrollTrigger: { trigger: '.syllabus-sheet', start: 'top 86%', once: true }
                        });
                });
            }
        });

        mm.add('(max-width: 767.98px)', function () {
            if (story === 'pathway-atlas') {
                var atlas = doc.querySelector('[data-story-atlas]');
                var route = atlas && atlas.querySelector('.atlas-route');
                if (route) {
                    gsap.fromTo(route, { scaleY: 0 }, {
                        scaleY: 1,
                        transformOrigin: 'top center',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: atlas.querySelector('.atlas-map'),
                            start: 'top 84%',
                            end: 'bottom 70%',
                            scrub: 0.5,
                            invalidateOnRefresh: true
                        }
                    });
                }
            }
            if (story === 'first-year-chronicle') {
                gsap.utils.toArray('.chronicle-entry').forEach(function (entry) {
                    gsap.fromTo(entry,
                        { y: 18, autoAlpha: 0 },
                        {
                            y: 0,
                            autoAlpha: 1,
                            duration: 0.55,
                            ease: 'power2.out',
                            scrollTrigger: { trigger: entry, start: 'top 88%', once: true }
                        });
                });
            }
            if (story === 'open-syllabus') {
                gsap.utils.toArray('.syllabus-row').forEach(function (row, index) {
                    gsap.fromTo(row,
                        { y: 14, autoAlpha: 0 },
                        {
                            y: 0,
                            autoAlpha: 1,
                            duration: 0.45,
                            ease: 'power2.out',
                            delay: Math.min(index, 4) * 0.04,
                            scrollTrigger: { trigger: '.syllabus-sheet', start: 'top 88%', once: true }
                        });
                });
            }
        });

        if (story === 'pathway-atlas') {
            var stops = gsap.utils.toArray('.atlas-stop');
            if (stops.length) {
                gsap.fromTo(stops,
                    { y: 24, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.7,
                        stagger: 0.12,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: '.atlas-map', start: 'top 82%', once: true }
                    });
            }
        }

        if (story === 'open-syllabus') {
            var intro = doc.querySelector('.syllabus-intro');
            if (intro) {
                gsap.fromTo(intro,
                    { y: 20, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.7,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: intro, start: 'top 84%', once: true }
                    });
            }
        }
    }

    var cleanup = [];

    function pointerDetails() {
        mm.add('(hover: hover) and (pointer: fine)', function () {
            var heroVisual = doc.querySelector('.hero-visual');
            var heroImage = doc.querySelector('.hero-photo img');

            if (heroVisual && heroImage) {
                var bounds = null;
                var moveX = gsap.quickTo(heroImage, 'x', { duration: 0.45, ease: 'power3.out' });
                var moveY = gsap.quickTo(heroImage, 'y', { duration: 0.45, ease: 'power3.out' });
                var zoom = gsap.quickTo(heroImage, 'scale', { duration: 0.55, ease: 'power3.out' });

                /* Measure once per visit instead of on every pointer frame. */
                var measure = function () { bounds = heroVisual.getBoundingClientRect(); };
                var enter = function () { measure(); zoom(1.035); };
                var move = function (event) {
                    if (!bounds) measure();
                    if (!bounds.width || !bounds.height) return;
                    moveX(((event.clientX - bounds.left) / bounds.width - 0.5) * 8);
                    moveY(((event.clientY - bounds.top) / bounds.height - 0.5) * 6);
                };
                var leave = function () {
                    bounds = null;
                    moveX(0);
                    moveY(0);
                    zoom(1);
                };

                heroVisual.addEventListener('pointerenter', enter);
                heroVisual.addEventListener('pointermove', move);
                heroVisual.addEventListener('pointerleave', leave);
                cleanup.push(function () {
                    heroVisual.removeEventListener('pointerenter', enter);
                    heroVisual.removeEventListener('pointermove', move);
                    heroVisual.removeEventListener('pointerleave', leave);
                });
            }

            /* Arrows advance a step on hover; the label never moves, so the
               button itself stays a stable target. */
            gsap.utils.toArray('.button, .text-link, .pathway-card > a').forEach(function (control) {
                var arrow = control.querySelector('.bi-arrow-right, .bi-arrow-up-right');
                if (!arrow) return;
                var nudge = gsap.quickTo(arrow, 'x', { duration: 0.2, ease: 'power2.out' });
                var enter = function () { nudge(3); };
                var leave = function () { nudge(0); };
                control.addEventListener('pointerenter', enter);
                control.addEventListener('pointerleave', leave);
                cleanup.push(function () {
                    control.removeEventListener('pointerenter', enter);
                    control.removeEventListener('pointerleave', leave);
                });
            });

            /* A button lifts slightly under the cursor and settles when
               pressed. Both use transforms only, so they never trigger
               layout. */
            gsap.utils.toArray('.button').forEach(function (button) {
                var lift = gsap.quickTo(button, 'y', { duration: 0.22, ease: 'power2.out' });
                var enter = function () { lift(-2); };
                var press = function () {
                    lift(0);
                    gsap.to(button, { scale: 0.975, duration: 0.12, overwrite: 'auto' });
                };
                var release = function () {
                    gsap.to(button, { scale: 1, duration: 0.2, overwrite: 'auto' });
                };
                var leave = function () { lift(0); release(); };
                button.addEventListener('pointerenter', enter);
                button.addEventListener('pointerdown', press);
                button.addEventListener('pointerup', release);
                button.addEventListener('pointercancel', leave);
                button.addEventListener('pointerleave', leave);
                cleanup.push(function () {
                    button.removeEventListener('pointerenter', enter);
                    button.removeEventListener('pointerdown', press);
                    button.removeEventListener('pointerup', release);
                    button.removeEventListener('pointercancel', leave);
                    button.removeEventListener('pointerleave', leave);
                });
            });
        });
    }

    function build() {
        mm = gsap.matchMedia();
        motion = gsap.context(function () {
            heroIntro();
            scrollReveals();
            storyMotion();
            pointerDetails();

            mm.add('(min-width: 768px)', function () {
                var heroImage = doc.querySelector('.hero-photo img');
                if (heroImage) {
                    gsap.to(heroImage, {
                        yPercent: 2.5,
                        ease: 'none',
                        scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 0.65 }
                    });
                }
                var stamp = doc.querySelector('.hero-stamp');
                if (stamp) {
                    gsap.to(stamp, {
                        y: -12,
                        rotation: -7,
                        ease: 'none',
                        scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 0.8 }
                    });
                }
            });
        });

        /* Fonts and lazy images change page height; re-measure once they land
           instead of leaving triggers pointing at old positions. */
        if (doc.fonts && doc.fonts.ready) {
            doc.fonts.ready.then(function () { ScrollTrigger.refresh(); }).catch(function () {});
        }
        window.addEventListener('load', function () { ScrollTrigger.refresh(); }, { once: true });
    }

    try {
        build();
    } catch (error) {
        /* Never leave content hidden because motion failed to set up. */
        if (motion) motion.revert();
        gsap.set('[data-aos="fade-up"]', { clearProps: 'opacity,visibility,transform' });
        gsap.set('.hero-copy, .hero-visual, .hero-bottom', { clearProps: 'opacity,visibility,transform' });
    }

    function stopMotion() {
        cleanup.forEach(function (fn) { fn(); });
        cleanup.length = 0;
        if (mm) { mm.revert(); mm = null; }
        if (motion) { motion.revert(); motion = null; }
        /* The idle float and the scroll cue are long-running tweens created
           outside the hero timeline, so stop them explicitly. */
        gsap.killTweensOf(doc.querySelectorAll('.hero-canva-card, .hero-bottom > a i, .hero-photo img'));
        gsap.set('[data-aos="fade-up"], .hero-copy, .hero-visual, .hero-bottom, .hero-photo img, .hero-canva-card', {
            clearProps: 'opacity,visibility,transform,clipPath'
        });
    }

    if (reduceQuery.addEventListener) {
        reduceQuery.addEventListener('change', function (event) {
            if (event.matches) stopMotion();
        });
    }

    /* Release triggers and tweens when the page is really gone, but keep
       everything intact when it is restored from the back/forward cache. */
    window.addEventListener('pagehide', function (event) {
        if (event.persisted || !motion) return;
        stopMotion();
        ScrollTrigger.getAll().forEach(function (trigger) { trigger.kill(); });
    });
})();
