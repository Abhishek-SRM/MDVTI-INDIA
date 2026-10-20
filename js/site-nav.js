/* Shared navigation behaviour: mega menus, mobile drawer, active page. */
(function () {
    'use strict';

    var header = document.getElementById('ykHeader');
    if (!header) return;

    var drawer = document.getElementById('ykDrawer');
    var burger = header.querySelector('.yk-burger');
    var desktopQuery = window.matchMedia('(min-width: 992px)');
    var megas = Array.prototype.slice.call(header.querySelectorAll('.yk-item--mega'));
    var hoverTimer = null;
    var lastFocused = null;

    /* Publish the header height so anything sticky below it (page sub-bars,
       the journal rail) can sit under the bar instead of beneath it. */
    function measureHeader() {
        document.documentElement.style.setProperty('--yk-header-h', header.offsetHeight + 'px');
    }

    measureHeader();
    window.addEventListener('load', measureHeader);
    window.addEventListener('resize', measureHeader, { passive: true });

    /* ---------- active page ---------- */

    var current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

    function markLinks(links) {
        Array.prototype.forEach.call(links, function (link) {
            var raw = link.getAttribute('href') || '';
            if (raw.indexOf('#') > -1) return;
            var href = raw.split('?')[0].toLowerCase();
            if (!href || href === 'index.html' || href.indexOf(':') > -1) return;
            if (href === current) {
                link.classList.add('is-current');
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    markLinks(header.querySelectorAll('.yk-menu > li > a.yk-link'));
    if (drawer) markLinks(drawer.querySelectorAll('.yk-drawer-link'));

    /* Mega triggers advertise the section they own, so a cross-link inside the
       panel never marks the parent menu item. */
    megas.forEach(function (item) {
        var button = item.querySelector('.yk-trigger');
        if (!button) return;
        var owns = (button.getAttribute('data-current') || '').split(',').map(function (value) {
            return value.trim().toLowerCase();
        });
        if (owns.indexOf(current) > -1) button.classList.add('is-current');
    });

    /* ---------- mega menus ---------- */

    function closeMegas(except) {
        megas.forEach(function (item) {
            if (item === except) return;
            var button = item.querySelector('.yk-trigger');
            item.classList.remove('is-open');
            if (button) button.setAttribute('aria-expanded', 'false');
        });
    }

    function openMega(item) {
        closeMegas(item);
        var button = item.querySelector('.yk-trigger');
        item.classList.add('is-open');
        if (button) button.setAttribute('aria-expanded', 'true');
    }

    megas.forEach(function (item) {
        var button = item.querySelector('.yk-trigger');
        if (!button) return;

        button.addEventListener('click', function () {
            if (!desktopQuery.matches) return;
            if (item.classList.contains('is-open')) {
                closeMegas();
            } else {
                openMega(item);
            }
        });

        item.addEventListener('mouseenter', function () {
            if (!desktopQuery.matches) return;
            window.clearTimeout(hoverTimer);
            hoverTimer = window.setTimeout(function () { openMega(item); }, 90);
        });

        item.addEventListener('mouseleave', function () {
            if (!desktopQuery.matches) return;
            window.clearTimeout(hoverTimer);
            hoverTimer = window.setTimeout(function () { closeMegas(); }, 140);
        });

        item.addEventListener('focusin', function () {
            if (!desktopQuery.matches) return;
            openMega(item);
        });
    });

    document.addEventListener('click', function (event) {
        if (!header.contains(event.target)) closeMegas();
    });

    /* ---------- mobile drawer ---------- */

    function openDrawer() {
        if (!drawer) return;
        lastFocused = document.activeElement;
        drawer.hidden = false;
        document.body.classList.add('yk-nav-open');
        if (burger) burger.setAttribute('aria-expanded', 'true');
        var close = drawer.querySelector('.yk-drawer-close');
        if (close) close.focus();
    }

    function closeDrawer(restoreFocus) {
        if (!drawer || drawer.hidden) return;
        drawer.hidden = true;
        document.body.classList.remove('yk-nav-open');
        if (burger) burger.setAttribute('aria-expanded', 'false');
        if (restoreFocus) {
            var target = (lastFocused && lastFocused !== document.body) ? lastFocused : burger;
            if (target && typeof target.focus === 'function') target.focus();
        }
    }

    if (burger) {
        burger.addEventListener('click', function () {
            if (drawer && drawer.hidden) {
                openDrawer();
            } else {
                closeDrawer(true);
            }
        });
    }

    if (drawer) {
        var closeBtn = drawer.querySelector('.yk-drawer-close');
        if (closeBtn) closeBtn.addEventListener('click', function () { closeDrawer(true); });

        Array.prototype.forEach.call(drawer.querySelectorAll('.yk-acc-btn'), function (button) {
            button.addEventListener('click', function () {
                var panel = document.getElementById(button.getAttribute('aria-controls'));
                var open = button.getAttribute('aria-expanded') === 'true';
                button.setAttribute('aria-expanded', open ? 'false' : 'true');
                if (panel) panel.hidden = open;
            });
        });

        drawer.addEventListener('click', function (event) {
            var link = event.target.closest('a[href]');
            if (link) closeDrawer(false);
        });
    }

    /* ---------- keyboard ---------- */

    document.addEventListener('keydown', function (event) {
        if (event.key !== 'Escape') return;

        if (drawer && !drawer.hidden) {
            closeDrawer(true);
            return;
        }

        var open = header.querySelector('.yk-item--mega.is-open');
        if (open) {
            var button = open.querySelector('.yk-trigger');
            closeMegas();
            if (button) button.focus();
        }
    });

    /* ---------- keep state sane across breakpoints ---------- */

    function handleBreakpoint() {
        if (desktopQuery.matches) {
            closeDrawer(false);
            document.body.classList.remove('yk-nav-open');
        } else {
            closeMegas();
        }
    }

    if (desktopQuery.addEventListener) {
        desktopQuery.addEventListener('change', handleBreakpoint);
    } else if (desktopQuery.addListener) {
        desktopQuery.addListener(handleBreakpoint);
    }

    /* ---------- scroll shadow ---------- */

    var ticking = false;
    function onScroll() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function () {
            header.classList.toggle('is-stuck', window.scrollY > 8);
            ticking = false;
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();

/* Shared footer: copyright year, active links, back-to-top visibility. */
(function () {
    'use strict';

    var footer = document.querySelector('.yk-footer');
    if (!footer) return;

    var year = footer.querySelector('[data-yk-year]');
    if (year) year.textContent = String(new Date().getFullYear());

    var current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    Array.prototype.forEach.call(footer.querySelectorAll('a[href]'), function (link) {
        var raw = link.getAttribute('href') || '';
        if (raw.indexOf('#') > -1 || raw.indexOf(':') > -1) return;
        if (raw.split('?')[0].toLowerCase() === current) {
            link.setAttribute('aria-current', 'page');
        }
    });

    var toTop = document.querySelector('.yk-to-top');
    if (!toTop) return;

    var base = footer.querySelector('.yk-footer-base');
    var footerInView = false;

    /* The footer carries its own "back to top" link, so the floating button
       steps aside once the end of the page is on screen. */
    if (base && 'IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
            footerInView = entries[0].isIntersecting;
            update();
        }, { rootMargin: '0px 0px -40px 0px' }).observe(base);
    }

    var ticking = false;
    function update() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function () {
            toTop.classList.toggle('is-visible', window.scrollY > 500 && !footerInView);
            ticking = false;
        });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
})();
