# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: prospective yoga students in India deciding whether and where to train — beginners, working professionals, homemakers, healers and therapists, fitness enthusiasts, and seekers at every age. They arrive with a goal (learn, teach, practise therapy, change career) and need to judge fit, time commitment and recognition before they will call.

Secondary: people opening a local MDVTI/Yogkulam centre (franchise enquiry, registration, login) and enrolled students (registration, login, course materials).

## Product Purpose

MDVTI India — known publicly as Yogkulam — is a yoga teacher training institute founded in 2012 in Lucknow, with local centres across India. The website exists to turn a prospective learner's interest into a conversation with admissions, and secondarily to recruit franchise partners and serve enrolled students.

## Positioning

Yogkulam trains yoga professionals rather than running yoga classes: one structured path from personal practice, through therapeutic understanding, to responsible teaching — delivered in Hindi with English notes, supported for YCB exams, and anchored in a stated ethic of service. It has done this at scale since 2012, which a new studio-branded course cannot truthfully claim.

## Operating Context

- Enquiries arrive by phone (1800-891-9232), email (info@mdvtiindia.org), and in person at 4/769 Vikas Nagar, Lucknow, Uttar Pradesh 226022.
- Admissions staff answer eligibility, format and certification questions; the marketing pages deliberately defer programme-specific detail to that conversation.
- Programmes run online and in person. Classes are in Hindi; notes are in English.
- The decision is high-commitment and multi-month, so learners compare institutes before calling; pages must hold up on a phone as well as a desktop.

## Capabilities and Constraints

- Programmes presented: PGDYT (Post Graduate Diploma in Yoga Therapy; 1 year, 500 hours, online/hybrid), a Yoga Teacher Training diploma, and specialist modules (face yoga, prenatal yoga, therapy modules). Foundation and certificate courses appear in older navigation.
- One combined programme page: `course-desc.html` presents PGDYT and teacher training together, with a "Choose Your Learning Path" section. The separate copy page (`course-desc-copy.html`) is retired; there is no standalone teacher-training page.
- Surfaces: homepage; the combined programme page; about (`about-mdvti.html`); teaching team and individual teacher profiles; blog index and article pages; franchise pages (`franchise.html`, `franchise-new.html`, `franchise_reg.html`, `registerfranchise.html`, `franchise_login.html`); student registration and login (`student-reg.html`, `studentlogin.html`) plus the live admissions form (`student_reg.html`). `bcp-hero.html` is an unreferenced hero fragment, not a page.
- Static multi-page HTML/CSS/JS with no build step and no server code in the repository. Bootstrap-based legacy pages, Tailwind CDN on the programme page, and a separate hand-built theme (`css/home-theme.css` with GSAP and AOS) on the redesigned homepage.
- Forms: only `student_reg.html` posts to a live endpoint (`https://mdvtiindia.org/addonlineadmission`); every other registration and login form has an empty action. The redesigned homepage's "Create an account" and "Student login" links point at the legacy unwired pages rather than `student_reg.html`. Whether the forms should be wired is undecided.
- Programme page displays fee figures inside a countdown offer: PGDYT Online at ₹25,000, stated to rise to ₹35,000 when the timer ends, plus a bonus bundle valued at ₹58,000, a 7-day money-back guarantee and "only 24 seats remain this batch" scarcity copy. Whether these figures and tactics are current or approved is undecided.
- Recognition is programme-dependent; the site must say so and must not imply every programme carries every recognition.
- Undecided: current pricing, batch dates, exact certification per programme, and whether the older franchise/login pages will be redesigned.

## Brand Commitments

- The institute was founded as MDVTI India — Maharishi Dayananad Vocational Training Institute India, as spelled on the current about page — and is now known as Yogkulam. **MDVTI is Yogkulam now**: Yogkulam is the public name, MDVTI India the formal institute name where registration or legal identity matters.
- Founder-led: Maneesh Pratap Singh, with R. P. Singh. Vision: "To train world-class yoga teachers that are global in their reach of ideals and universal in their service." Mission: स्वच्छ भारत, समृद्ध भारत, वैदिक भारत (clean, prosperous, Vedic India).
- Tone: plain, honest, service-oriented. Explicitly avoids quick-certificate claims and guaranteed income or placement.
- Tension to resolve: the programme page's countdown timer, bonus-stack valuation, seat-scarcity lines and money-back badge pull against that plain tone. Whether they are accepted sales mechanics or should be removed is undecided.
- Existing assets: Yogkulam lotus mark and name lock-up, founder portrait, campus and gallery photography, hand-drawn yoga icon set.

## Evidence on Hand

- Claims confirmed for repeated use: 40,000+ learners trained since 2012; 400+ PGDYT students and a 4.9 rating; recognition references to YCB, IYA, Yoga Alliance USA and ISO 9001:2015; 20% of annual income to seva initiatives with 1,500+ people trained free.
- Earning outcomes are approved as potential, not promised: ₹50,000–₹1 lakh per month is presented as the career range the programme prepares learners for, and a "Verified" student testimonial on the programme page cites ₹80,000/month. Both must stay framed as outcomes that depend on effort, experience and local opportunity.
- Institutional facts: inaugurated 27 September 2012; headquarters in Lucknow; local centres across India.
- Video and written testimonials exist on the homepage and programme page.
- Absences future work must not fabricate: no named corporate partners, no placement statistics, no evidence that the earning range is typical or guaranteed, no independent audit of the 4.9 rating, no current batch calendar, no confirmed current fee schedule.

## Product Principles

1. Fit before persuasion: help a learner judge whether this path suits their life, then invite a conversation.
2. Depth over shortcuts: never promise quick certification or guaranteed placement. Earning figures appear only as potential outcomes, stated with the caveat that they depend on effort and opportunity.
3. Recognition stated precisely: name the body and the programme it applies to; never imply blanket accreditation.
4. Practice in service: seva is part of the offer, not a marketing badge.
5. One institution, two names: Yogkulam in public, MDVTI India where formal identity is required.

## Accessibility & Inclusion

No formal standard has been agreed. Current work assumes Indian mobile-first usage, readable Hindi/English typography, keyboard-operable navigation, and respect for reduced-motion preferences.
