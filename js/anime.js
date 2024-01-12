// gsap.from('.bg-gradient-yk', { opacity: 0, duration: 1, y: -50, ease: 'power4.out' });
// gsap.from('.font-weight-bold', { opacity: 0, duration: 1, y: 50, ease: 'power4.out', delay: 0.3 });

// // Animating the program offers using stagger
// gsap.from('.program-list li', { opacity: 0, duration: 1, y: 30, ease: 'power2.out', stagger: 0.2, delay: 0.5 });
// gsap.registerPlugin(ScrollTrigger);

// // Animating elements when scrolled
// gsap.utils.toArray('.container').forEach((container) => {
//   gsap.from(container, {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     scrollTrigger: {
//       trigger: container,
//       start: 'top 80%', // Start the animation when the top of the element is 80% in view
//       end: 'bottom 40%', // End the animation when the bottom of the element is 40% in view
//       toggleActions: 'play none none reverse',
//       // You can adjust toggleActions as needed for your animation behavior
//     },
//   });
// });

// // Additional animations for specific elements triggered by scroll
// gsap.utils.toArray('.card').forEach((card) => {
//   gsap.from(card, {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     scrollTrigger: {
//       trigger: card,
//       start: 'top 80%', // Adjust the start and end values as needed
//       end: 'bottom 40%',
//       toggleActions: 'play none none reverse',
//     },
//   });
// });

// // Animating the image in the second column
// gsap.from('#movingImage', { opacity: 0, duration: 1, x: -50, ease: 'power4.out', delay: 0.3 });

// // Animating the about section
// gsap.from('.abt-ygklm h1', { opacity: 0, duration: 1, y: -50, ease: 'power4.out', delay: 0.3 });
// gsap.from('.section-line', { scaleX: 0, duration: 1, ease: 'power2.out', delay: 0.5 });
// gsap.from('.my-3', { opacity: 0, duration: 1, y: 30, ease: 'power2.out', delay: 0.7 });

// // Animating the cards in the YTT section
// gsap.from('.card', { opacity: 0, duration: 1, y: 50, ease: 'power2.out', stagger: 0.2, delay: 0.5 });
