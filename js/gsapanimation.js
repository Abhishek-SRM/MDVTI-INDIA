// $(window).on('DOMContentLoaded', function () {

//     gsap.from(".decorative-heading", {
//         opacity: 0,
//         y: 40,
//         duration: 1,
//         ease: "power2.out",
//     });



//     // GSAP animation for the form
//     gsap.from(".right-form", {
//         opacity: 0,
//         x: 40,
//         duration: 1,
//         ease: "power2.out",
//     });


//     // GSAP animation for the Avahan section
//     gsap.from(".Avanahan .image-container", {
//         scrollTrigger: {
//             trigger: ".Avanahan .image-container",
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1,
//         },
//         duration: 2.5,
//         ease: "power1.out",
//         stagger: 0.2,
//     });



//     // Example: Animate the "Explore More" button
//     gsap.from(".btn-primary", {
//         scrollTrigger: {
//             trigger: ".btn-primary",
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1,
//         },
//         opacity: 0,
//         x: -20,
//         ease: "power2.out",
//     });

//     // Example: Animate the "Franchise Join Step" section

//     gsap.from(".single-timeline-content", {
//         scrollTrigger: {
//             trigger: ".card-columns",
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1,
//         },
//         opacity: 0,
//         y: 50,
//         stagger: 1,
//     });

//     // Example: Animate the "Learnings from Yogkulam" section
//     gsap.from(".twohrslearning .list-group-item", {
//         scrollTrigger: {
//             trigger: ".twohrslearning .list-group-item",
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1,
//         },
//         opacity: 0,
//         x: -20,
//         stagger: 0.2,
//     });

//     gsap.from(".single-timeline-area .timeline-date", {
//         scrollTrigger: {
//             trigger: ".single-timeline-area",
//             start: "top 80%",
//         },
//         opacity: 0,
//         y: 20,
//         duration: 1,
//     });

//     gsap.from('.single-timeline-area:nth-child(odd)', {
//         scrollTrigger: {

//             toggleActions: 'play none none none',
//         },
//         opacity: 0,
//         x: -50,
//         duration: 1,
//     });


// });

// Create a GSAP timeline
// Select all the elements to animate
let title = document.querySelector(".section-title");
let tag = document.querySelector(".tag");
let list = document.querySelector("ol");
let items = document.querySelectorAll(".list-group-item");
let cards = document.querySelectorAll(".card");

// Create a timeline
const tl = gsap.timeline();

// Define the animation to fade in elements
tl.from(title, {
    opacity: 0,
    y: 50,
    duration: 0.71,
});
tl.from(tag, {
    opacity: 0,
    y: 50,
    duration: 0.71,
});
tl.from(list, {
    opacity: 0,
    y: 50,
    duration: 0.71,
});
tl.from(items, {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.71,
});
tl.from(cards, {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.71,
});

// Create a ScrollMagic controller
const controller = new ScrollMagic.Controller();

// Create a scene to trigger the animation
new ScrollMagic.Scene({
    triggerElement: ".twohrslearning",
    reverse: false, // Keep animation active as you scroll down
})
.setTween(tl) // Attach the timeline to the scene
.addTo(controller); // Add the scene to the controller




