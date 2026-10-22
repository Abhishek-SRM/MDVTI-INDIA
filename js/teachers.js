/* Faculty register: data, discipline filtering, name search and the one
   reveal grammar the page uses. Plain DOM, no libraries. */
(function () {
    'use strict';

    var roster = document.getElementById('teacherRoster');
    if (!roster) return;

    var faculty = [
        {
            name: 'Dr. Ankit Sharma',
            img: 'img/mentor/mentor1.png',
            role: 'Hatha Yoga Expert',
            discipline: 'asana',
            years: 22,
            students: '5,000',
            city: 'Lucknow',
            languages: ['English', 'Hindi'],
            tagline: 'Empowering holistic wellness through yoga and Ayurveda.',
            formats: ['online', 'home', 'centre', 'corporate']
        },
        {
            name: 'Dr. Priya Verma',
            img: 'img/mentor/Amrita-Gupta.jpg',
            role: 'Meditation Teacher',
            discipline: 'meditation',
            years: 15,
            students: '2,000',
            city: 'Delhi',
            languages: ['English', 'Hindi', 'Sanskrit'],
            tagline: 'Guiding minds to peace through meditation and breathwork.',
            formats: ['online', 'centre', 'corporate']
        },
        {
            name: 'Rajesh Kumar',
            img: 'img/mentor/mentor2.png',
            role: 'Asana Specialist',
            discipline: 'asana',
            years: 10,
            students: '1,200',
            city: 'Rishikesh',
            languages: ['English', 'Hindi'],
            tagline: 'Precision and progress in every asana.',
            formats: ['online', 'centre']
        },
        {
            name: 'Dr. Sanjay Gupta',
            img: 'img/mentor/IMG_8083g.png',
            role: 'Yoga Philosophy Professor',
            discipline: 'philosophy',
            years: 18,
            students: '3,000',
            city: 'Online only',
            languages: ['English', 'Hindi', 'Sanskrit'],
            tagline: 'Making ancient wisdom accessible for modern yogis.',
            formats: ['corporate']
        },
        {
            name: 'Meera Patel',
            img: 'img/mentor/mentor4.png',
            role: 'Yoga Therapist',
            discipline: 'therapy',
            years: 12,
            students: '900',
            city: 'Bangalore',
            languages: ['English', 'Hindi'],
            tagline: 'Healing bodies and minds through therapeutic yoga.',
            formats: ['online', 'home']
        },
        {
            name: 'Aditya Singh',
            img: 'img/mentor/mentor3.png',
            role: 'Advanced Asana Instructor',
            discipline: 'asana',
            years: 8,
            students: '700',
            city: 'Mumbai',
            languages: ['English', 'Hindi'],
            tagline: 'Dynamic flows and strength for every level.',
            formats: ['online', 'home', 'centre']
        }
    ];

    var formatLabels = {
        online: 'Online',
        home: 'Home visits',
        centre: 'At the centre',
        corporate: 'Corporate sessions'
    };

    var disciplines = {
        asana: 'Asana',
        therapy: 'Yoga therapy',
        meditation: 'Meditation',
        philosophy: 'Philosophy'
    };

    var state = { discipline: 'all', query: '' };

    var countEl = document.getElementById('teacherCount');
    var chips = Array.prototype.slice.call(document.querySelectorAll('[data-discipline]'));
    var searchEl = document.getElementById('teacherSearch');
    var emptyEl = document.getElementById('teacherEmpty');
    var resetEl = document.getElementById('teacherReset');

    function matches(person) {
        if (state.discipline !== 'all' && person.discipline !== state.discipline) return false;
        if (!state.query) return true;

        var haystack = [
            person.name,
            person.role,
            person.city,
            disciplines[person.discipline],
            person.languages.join(' '),
            person.tagline
        ].join(' ').toLowerCase();

        return haystack.indexOf(state.query) > -1;
    }

    function template(person, position) {
        return '' +
            '<article class="tch-row" data-kind="' + person.discipline + '" style="--i:' + position + '">' +
                '<figure class="tch-plate">' +
                    '<img src="' + person.img + '" alt="' + person.name + '" loading="lazy" decoding="async" width="900" height="1125">' +
                '</figure>' +
                '<div class="tch-body">' +
                    '<h2 class="tch-name">' + person.name + '</h2>' +
                    '<p class="tch-role">' + person.role + '</p>' +
                    '<p class="tch-tagline">' + person.tagline + '</p>' +
                    '<p class="tch-meta">' +
                        '<span>' + [
                            person.city,
                            person.years + ' years teaching',
                            person.students + '+ students trained'
                        ].join('\u00a0· ') + '</span>' +
                        '<span>' + [
                            person.languages.join(', '),
                            person.formats.map(function (key) {
                                return formatLabels[key];
                            }).join(', ')
                        ].join('\u00a0· ') + '</span>' +
                    '</p>' +
                '</div>' +
            '</article>';
    }

    function paint() {
        var shown = faculty.filter(matches);

        roster.innerHTML = shown.map(template).join('');
        roster.hidden = shown.length === 0;
        emptyEl.hidden = shown.length !== 0;

        if (countEl) {
            countEl.textContent = shown.length === faculty.length
                ? 'Showing all ' + faculty.length + ' teachers'
                : 'Showing ' + shown.length + ' of ' + faculty.length + ' teachers';
        }

        chips.forEach(function (chip) {
            var on = chip.getAttribute('data-discipline') === state.discipline;
            chip.setAttribute('aria-pressed', on ? 'true' : 'false');
        });

        observeRows();
    }

    function observeRows() {
        var rows = Array.prototype.slice.call(roster.querySelectorAll('.tch-row'));
        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduce || !('IntersectionObserver' in window)) {
            rows.forEach(function (row) { row.classList.add('is-in'); });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-in');
                observer.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

        rows.forEach(function (row) { observer.observe(row); });
    }

    chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
            state.discipline = chip.getAttribute('data-discipline');
            paint();
        });
    });

    if (searchEl) {
        searchEl.addEventListener('input', function () {
            state.query = searchEl.value.trim().toLowerCase();
            paint();
        });
    }

    if (resetEl) {
        resetEl.addEventListener('click', function () {
            state.discipline = 'all';
            state.query = '';
            if (searchEl) searchEl.value = '';
            paint();
            if (searchEl) searchEl.focus();
        });
    }

    paint();
}());
