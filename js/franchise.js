/* Franchise page: one entrance, one scroll reveal, and the pins that point at
   the same three rooms as the index. Everything degrades to a static page. */
(function () {
    'use strict';

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var hero = document.querySelector('.fr-hero');
    var pins = Array.prototype.slice.call(document.querySelectorAll('.fr-pin'));
    var rows = Array.prototype.slice.call(document.querySelectorAll('.fr-room-row'));

    /* ---------- hero entrance ---------- */

    function lightHero() {
        if (hero) hero.classList.add('is-lit');
    }
    if (!reduceMotion) {
        requestAnimationFrame(function () {
            requestAnimationFrame(lightHero);
        });
    } else {
        lightHero();
    }

    /* ---------- pins <-> room rows ---------- */

    function linkedRow(room) {
        return rows.filter(function (row) {
            return row.getAttribute('data-room') === room;
        })[0] || null;
    }

    function markRoom(room, on) {
        var row = linkedRow(room);
        if (row) row.classList.toggle('is-linked', on);
        pins.forEach(function (pin) {
            if (pin.getAttribute('data-room') === room) pin.classList.toggle('is-active', on);
        });
    }

    pins.concat(rows).forEach(function (el) {
        var room = el.getAttribute('data-room');
        if (!room) return;
        el.addEventListener('mouseenter', function () { markRoom(room, true); });
        el.addEventListener('mouseleave', function () { markRoom(room, false); });
        el.addEventListener('focus', function () { markRoom(room, true); });
        el.addEventListener('blur', function () { markRoom(room, false); });
    });

    pins.forEach(function (pin) {
        pin.addEventListener('click', function () {
            var target = document.getElementById('room-' + pin.getAttribute('data-room'));
            if (!target) return;
            target.scrollIntoView({
                behavior: reduceMotion ? 'auto' : 'smooth',
                block: 'start'
            });
        });
    });

    /* ---------- the system ledger, revealed once ---------- */

    var groups = Array.prototype.slice.call(document.querySelectorAll('.fr-ledger-group'));
    if (groups.length) {
        if (reduceMotion || !('IntersectionObserver' in window)) {
            groups.forEach(function (group) { group.classList.add('is-in'); });
        } else {
            document.documentElement.classList.add('fr-motion');
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });
            groups.forEach(function (group) { observer.observe(group); });
        }
    }
})();
