---
name: Yogkulam (MDVTI India)
description: Wine, gold and paper — an institute's editorial register for yoga training, therapy and its franchise network.
colors:
  wine: "#8b2025"
  wine-deep: "#5c171b"
  wine-ink: "#3f0f12"
  gold: "#edcf9c"
  gold-deep: "#b8863b"
  gold-text: "#5c3a18"
  paper: "#fffaf2"
  cream: "#f5eee3"
  cream-soft: "#fdf6ea"
  ink: "#28262a"
  muted: "#5f5a57"
  line: "#eadfd0"
  line-strong: "#dcc9ad"
typography:
  display:
    fontFamily: "El Messiri, Georgia, serif"
    fontSize: "clamp(2.4rem, 4.8vw, 4rem)"
    fontWeight: 500
    lineHeight: 0.99
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "El Messiri, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.4vw, 2.875rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "El Messiri, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Poppins, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  sm: "10px"
  md: "16px"
  lg: "24px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    typography: "{typography.label}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.wine}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.wine}"
    rounded: "0"
    padding: "4px 0"
  nav-cta:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.paper}"
    rounded: "0"
    padding: "11px 16px"
  field:
    backgroundColor: "#fffdf9"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
---

# Design System: Yogkulam (MDVTI India)

## Overview

**Creative North Star: "The Institute's Paper Register"**

The site reads like the printed record of a real institution: warm paper, wine ink, a gold rule under the heading, a photograph of the people rather than a stock studio. It is an editorial register, not a wellness app — closer to a prospectus and a convocation programme than to a spa brand.

The system pairs a single high-contrast display face with a quiet sans, and lets hairlines, small caps and one saturated field do the structural work. Depth comes from paper and ink, from fields of wine behind white type, and from photographs carrying annotation. Decorative chrome is refused: there are no icon tiles, no gradients-as-texture, no glass.

**Key Characteristics:**

- Wine, gold and paper as the whole palette; cream for the quieter sections.
- El Messiri display with Poppins text; hierarchy by scale and weight, not by colour noise.
- Hairline rules (1px) as the main divider and as list rhythm.
- Full-bleed wine fields for the sections that carry the institution's machine.
- Real photographs, often cropped with the site's eight-corner cut, captioned for what they are.

## Colors

A three-family palette — oxblood wine, wheat gold, warm paper — with no second accent.

### Primary

- **Oxblood Wine** (#8b2025): the institution's ink. Primary buttons, display emphasis, links, section fields, and the franchise page's closing invitation. Its darker step **Cellar Wine** (#5c171b) carries the top bar and the system section; **Wine Ink** (#3f0f12) is used only for deep photo overlays.
- **Wheat Gold** (#edcf9c): rules, pin dots, small emphasis inside wine fields, and the underline of text links. **Deep Gold** (#b8863b) is the decorative step for hairlines and arrows; text using gold on paper must take **Gold Ink** (#5c3a18) or the darker `#8a5a18` to stay legible.

### Neutral

- **Warm Paper** (#fffaf2): the default page ground.
- **Cream** (#f5eee3): alternate section ground, forms, quieter bands.
- **Soft Cream** (#fdf6ea): inset panels and alerts.
- **Graphite Ink** (#28262a): headings and body on paper.
- **Muted Slate** (#5f5a57): secondary copy; never a grey — it is tinted toward the paper.
- **Hairline** (#eadfd0) and **Strong Hairline** (#dcc9ad): the two 1px rule weights.

**The One Accent Rule.** Wine is the only saturated colour. Gold never fills a large field; it rules, underlines and marks. If a surface needs a second "brand colour", the answer is another step of wine or a photograph.

## Typography

**Display Font:** El Messiri (with Georgia, serif)
**Body Font:** Poppins (with Arial, sans-serif)

**Character:** A humanist Arabic-Latin serif with slightly calligraphic terminals against a geometric sans. The pairing carries the yoga register without falling into decorative Devanagari pastiche or a fashion-serif look.

### Hierarchy

- **Display** (500, `clamp(2.4rem, 4.8vw, 4rem)`, 0.99, −0.04em): page and hero headlines; two lines where possible, never more than three.
- **Headline** (500, `clamp(1.9rem, 3.4vw, 2.875rem)`, 1.04, −0.03em): section headings.
- **Title** (500, ~1.375rem, 1.25): room names, step names, FAQ questions, ledger group headings.
- **Body** (400, 0.9375rem, 1.75): running copy, capped near 60ch; notes step down to 0.75rem but never below 12px for anything a reader must act on.
- **Label** (600, 0.6875rem, 0.14em, uppercase): supply list headers, plate labels, footer column headings.

**The No Eyebrow Rule.** Headings carry their own weight: no small tracked kicker sitting above a heading. Section labels exist only inside components (plate labels, list headers), never as a decorative line above an h2.

## Layout

- **Shell:** `min(1200px, 100% - 56px)`, centred; 40px gutters under 820px, 32px under 520px.
- **Grid:** content is arranged in two-column heads (heading left, lead right) and in ruled single-column ledgers; the franchise page's hero is a 1.03 / 0.97 split that stacks under 1080px.
- **Rhythm:** sections run 76–84px vertical padding on desktop, 56–64px on mobile. Headings sit closer to their own copy than to the section above.
- **Hairline rhythm:** lists and ledgers are separated by 1px rules rather than card gaps; the rule is the container.
- **Breakpoints:** 1080px (three-column rows collapse), 820px (single column, sticky columns release), 620px (photo annotation hides), 520px (tight gutters).

## Elevation & Depth

Flat by default. Depth is tonal and photographic, not shadowed: wine fields behind paper, a photograph over its hairline frame, a paper plate over a photo. The only shadows are lifted states and paper-on-paper insets — the primary button's soft wine shadow and the pinned inset photograph. Cards are not used as a container idiom; borders are.

### Shadow Vocabulary

- **Button lift** (`0 10px 24px rgba(101, 26, 31, .22)`): primary CTA at rest, deepening to `0 14px 30px` on hover.
- **Paper inset** (`0 16px 28px -18px rgba(60, 40, 25, .55)`): the small overlapping photograph.
- **Header lift** (`0 8px 28px rgba(49, 35, 24, .08)`): the shared navigation once scrolled.

**The Border-Or-Shadow Rule.** Declare elevation once. A hairline border and a wide soft shadow on the same element is the ghost card and never appears here.

## Shapes

- **Corners:** buttons and chips are full pills (999px); form fields and generic panels take 10–16px; sections are square.
- **The eight-corner cut:** photographs use `polygon(0 0, 89% 0, 100% 12%, 100% 88%, 90% 100%, 12% 100%, 0 89%, 0 12%)` — the site's signature silhouette, used once per surface at most.
- **Rules:** 1px, gold or hairline; a 2px wine rule marks the active state of a list row.
- **Annotation pins:** paper chips with a wine dot, a hairline border and a soft shadow, laid over a photograph as a legend.

## Components

### Buttons

- **Shape:** pill (999px), minimum height 48px.
- **Primary:** wine field, paper text, 13px/600, padding 12px 24px, soft wine shadow.
- **Hover / Focus:** wine deepens, lifts 2px, shadow grows; focus ring is `2px solid gold-deep` with 3px offset.
- **Light:** paper field, wine text, used on wine sections; hover lifts to white.

### Text links

Wine ink with a 1px gold underline sitting slightly proud of the baseline; hover moves the rule to wine. Inline arrows are drawn as 1.4px hairline SVGs, never unicode glyphs.

### Ledgers and ruled lists

The primary content container: a top hairline, rows of `strong` plus a muted note, a bottom hairline. On wine, hairlines become `rgba(237,207,156,.18)` and notes lift to 74% white. Never converted into cards.

### Inputs / Fields

Paper-white field on cream, 1px hairline, 10px radius, 12px 16px padding; focus shifts the border to wine with a soft wine ring.

### Navigation

Shared `yk` header: dark wine top bar (11px links), paper bar below with the lotus lockup, El Messiri wordmark, and 12px Poppins links. Mega menus are paper panels with hairline rules and a wine feature column. Mobile is a full-height drawer with accordion sections and a wine CTA.

### Photograph with annotation (signature)

A photograph inside the eight-corner cut and a gold hairline frame, with a stacked legend of paper pin chips at its top-left and a wine plate at its bottom-right. Pins link to the same three items as the ruled index beside it; hovering either highlights both.

## Do's and Don'ts

### Do:

- **Do** build structure from 1px hairlines and generous space; the rule is the container.
- **Do** use full wine fields for the section that carries the institution's systems, and paper/cream for teaching content.
- **Do** caption photographs for what they actually show, and keep claims to verified institute facts.
- **Do** keep small type at 12px or above for anything a reader must act on; 11px only for pure labels.
- **Do** honour `prefers-reduced-motion`: photography and pins appear without the entrance, content is never hidden.

### Don't:

- **Don't** add a second accent colour or gradient text; emphasis comes from weight and scale.
- **Don't** turn the ledger into a grid of equal cards, or nest cards inside cards.
- **Don't** set gold (#edcf9c / #b8863b) as text on cream or paper — use Wine or Gold Ink (#5c3a18 / #8a5a18).
- **Don't** put a tracked uppercase kicker above a heading.
- **Don't** combine a border and a wide shadow on one element.
- **Don't** imply blanket accreditation: name the body and the programme it applies to.
