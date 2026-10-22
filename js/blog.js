/* Journal reading chrome: the gold progress hairline that rides under the
   shared header while an essay is being read. No content is hidden behind it. */
(function () {
    'use strict';

    var root = document.documentElement;
    var progress = document.getElementById('readingProgress');
    if (!progress) return;

    var maxScroll = 0;
    var frame = 0;

    function measureScroll() {
        maxScroll = Math.max(0, root.scrollHeight - window.innerHeight);
    }

    function paint() {
        frame = 0;
        var amount = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
        progress.style.transform = 'scaleX(' + amount + ')';
    }

    function requestPaint() {
        if (!frame) frame = window.requestAnimationFrame(paint);
    }

    measureScroll();
    paint();

    window.addEventListener('load', function () {
        measureScroll();
        requestPaint();
    });
    window.addEventListener('resize', function () {
        measureScroll();
        requestPaint();
    }, { passive: true });
    window.addEventListener('scroll', requestPaint, { passive: true });
})();
