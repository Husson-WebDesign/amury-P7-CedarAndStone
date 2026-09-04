# Project Phase 1 — CSS Styling and Page Layout

## Your Role

You are continuing your work as the web developer assigned to your client.

During **Phase 0**, you created the website content and semantic HTML structure based on the client's requirements. Your client has now approved the initial structure of the website.

You are now moving into **Phase 1: CSS Styling and Page Layout**.

In this phase, you will transform your unstyled HTML pages into the first visually designed version of the client's website.

Your goal is to establish the website's visual identity through color, typography, spacing, layout, navigation, reusable components, and consistent page styling.

You are not building the final version of the website yet. Additional responsive design, interaction, and JavaScript functionality will be introduced in later phases.

---

# Phase 1 Objective

By the end of this phase, your website should no longer look like a collection of plain HTML pages.

Your client should be able to view the website and recognize a clear and consistent visual design that represents the business.

Your completed Phase 1 website should demonstrate:

* a professional visual identity
* appropriate colors
* consistent typography
* clear page layouts
* styled navigation
* a visually identifiable homepage hero section
* reusable CSS components
* appropriate use of Flexbox
* appropriate use of CSS Grid
* consistent headers and footers
* styled content on every required page

---

# Required Technologies

For this phase, you will use:

```text
HTML5
CSS3
Visual Studio Code
Git
GitHub
GitHub Desktop
GitHub Pages
```

Do not use the following unless your instructor specifically authorizes them:

```text
Bootstrap
Tailwind CSS
React
Vue
Angular
WordPress
Wix
Squarespace
Website templates
CSS frameworks
JavaScript frameworks
Prebuilt website themes
```

You are expected to create the visual design of your website using your own HTML and CSS.

---

# 1. Continue Using Your Phase 0 Website

Do not create a new website or repository for Phase 1.

Continue working with the same files and GitHub repository you created during Phase 0.

Keep the semantic HTML structure you previously developed.

Your pages should continue using appropriate HTML5 elements such as:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Use CSS to control how these elements appear on the page.

Do not use HTML elements purely to create visual formatting.

For example, avoid using:

```html
<center>
```

or multiple:

```html
<br>
```

elements simply to create spacing.

Use CSS properties such as `margin`, `padding`, `display`, and `gap` instead.

---

# 2. Create an External Stylesheet

Create a folder named:

```text
css
```

Inside that folder, create:

```text
style.css
```

Your project structure should resemble the following:

```text
your-project/
│
├── index.html
├── about.html
├── services.html
├── contact.html
│
├── css/
│   └── style.css
│
├── images/
│
└── README.md
```

Your exact HTML filenames will depend on the pages required by your client.

Connect each HTML page to your stylesheet.

Example:

```html
<link rel="stylesheet" href="css/style.css">
```

Use your external stylesheet for the main visual design of the website.

Do not place all of your CSS directly inside individual HTML pages.

---

# 3. Establish Your Client's Color Palette

Choose a professional color palette that reflects your assigned client's business, audience, and personality.

Your website should include approximately:

* one primary color
* one secondary color
* one accent color
* one or more background colors
* readable text colors

You may define your colors using CSS custom properties.

Example:

```css
:root {
    --primary-color: #234e52;
    --secondary-color: #84a98c;
    --accent-color: #f4a261;
    --background-color: #ffffff;
    --text-color: #222222;
}
```

Choose your colors intentionally.

Your website's colors should make sense for your assigned client.

For example, a floral studio may require a different visual style from a construction company, restaurant, technology service, or professional office.

Do not simply choose colors because they are your personal favorites.

Design for your client and the client's audience.

---

# 4. Create a Typography System

Create a consistent typography system throughout your website.

At minimum, style:

```text
Body text
H1 headings
H2 headings
H3 headings
Navigation links
Buttons
Footer text
```

Your headings and body text should have a clear visual hierarchy.

Example:

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
}

h1 {
    font-size: 2.5rem;
}

h2 {
    font-size: 2rem;
}
```

Keep your typography consistent across all pages.

Avoid using too many different fonts.

As a general rule, limit your website to approximately two or three font families.

---

# 5. Apply Global Styles

Create consistent global styles for your website.

At minimum, apply CSS styling to:

```text
body
headings
paragraphs
links
images
lists
buttons
forms
```

Demonstrate your understanding of CSS properties such as:

```css
color
background-color
font-family
font-size
font-weight
line-height
margin
padding
border
border-radius
width
max-width
```

Your website should maintain consistent spacing and styling from page to page.

---

# 6. Create a Content Container

Do not allow your content to stretch unnecessarily across the entire width of a large monitor.

Create a reusable container class that controls the width and alignment of your page content.

Example:

```css
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}
```

Use your container consistently where appropriate.

---

# 7. Design the Website Header

Create a professional header for your client's website.

Your header should include the elements appropriate for your project, such as:

```text
Business name
Logo or temporary text-based logo
Navigation
Contact information
Call-to-action button
```

Keep the header design consistent on every page.

Your client should be able to move between pages without seeing a completely different header design.

---

# 8. Style the Navigation

Style the navigation you created during Phase 0.

Your navigation should be easy to locate and easy to use.

Create styles for at least:

```text
Normal link state
Hover state
```

Example:

```css
nav a {
    text-decoration: none;
}

nav a:hover {
    text-decoration: underline;
}
```

You are encouraged to create a more polished navigation design appropriate for your client.

Your navigation links must continue to work correctly.

---

# 9. Create a Homepage Hero Section

Your homepage must contain a clearly identifiable **hero section**.

The hero section is the prominent area near the top of the homepage that introduces the business.

Include content appropriate for your client, such as:

```text
Primary heading
Short introductory statement
Call-to-action
Image or visual area
```

Example HTML:

```html
<section class="hero">
    <div class="container">
        <h1>Your Client's Main Message</h1>
        <p>A short description of the business.</p>
        <a href="contact.html" class="button">Contact Us</a>
    </div>
</section>
```

Your hero section should immediately help visitors understand what the business does.

---

# 10. Design Your Content Sections

Style the content sections you created during Phase 0.

Do not place all of your page content into one visually continuous block.

Create clear separation between sections using appropriate combinations of:

```text
Spacing
Background colors
Borders
Headings
Images
Columns
Cards
Layout
```

Your visitors should be able to scan each page and easily identify different types of information.

---

# 11. Use CSS Flexbox

Use **CSS Flexbox** somewhere in your website where it is appropriate.

Possible uses include:

```text
Navigation
Service cards
Contact information
Footer columns
Employee profiles
Image-and-text sections
Business information
```

Example:

```css
.services {
    display: flex;
    gap: 2rem;
}
```

Do not add Flexbox simply to satisfy the requirement.

Use it to solve an actual layout problem in your website.

---

# 12. Use CSS Grid

Use **CSS Grid** at least once in your website.

Choose an area where a grid-based layout makes sense.

Possible examples include:

```text
Services
Products
Portfolio items
Photo galleries
Packages
Team members
Project listings
Business features
```

Example:

```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}
```

Your Grid layout should improve the organization and readability of the content.

---

# 13. Create Reusable CSS Components

Create reusable CSS classes instead of writing completely different styles for every similar element.

Possible reusable components include:

```text
.button
.card
.container
.section-title
.feature
.service-card
.contact-card
```

Example:

```css
.card {
    padding: 1.5rem;
    border-radius: 8px;
}
```

Reuse these classes throughout your website when appropriate.

Your goal is to create CSS that is organized, efficient, and easy to maintain.

---

# 14. Style Buttons and Calls-to-Action

Important actions on your website should be easy for visitors to identify.

Depending on your assigned business, your calls-to-action may include:

```text
Request a Quote
Schedule an Appointment
Contact Us
View Services
Book an Event
Order Now
Learn More
Get Started
```

Style these actions as buttons when appropriate.

Your buttons must include at least:

```text
Default state
Hover state
```

Make sure the text clearly tells visitors what will happen when they select the button.

---

# 15. Style and Manage Images

Use the images approved for your client project.

Make sure your images:

* relate to the business
* display correctly
* maintain their proper proportions
* include appropriate `alt` attributes
* do not distort the page
* fit within the surrounding layout

Use CSS such as:

```css
img {
    max-width: 100%;
    height: auto;
}
```

Do not stretch images in ways that make them appear distorted.

---

# 16. Style Every Required Page

Do not style only your homepage.

Apply your visual design to **every page required by your client**.

Depending on your assigned project, these may include pages such as:

```text
Home
About
Services
Products
Packages
Projects
Service Area
Contact
Request a Quote
```

Your exact pages will depend on your client brief.

Maintain the same visual identity across the entire website.

---

# 17. Style the Contact Page and Form

Style the contact information and contact form you created during Phase 0.

At minimum, style elements such as:

```text
Labels
Text inputs
Email inputs
Telephone inputs
Textareas
Submit buttons
Contact information
```

Example:

```css
input,
textarea {
    width: 100%;
    padding: 0.75rem;
}
```

Your form does not need to send information to a server during this phase.

Form processing and backend functionality are not required yet.

---

# 18. Create a Consistent Footer

Create a professional footer and use it consistently throughout the website.

Include information appropriate for your assigned business, such as:

```text
Business name
Contact information
Business hours
Navigation links
Service area
Copyright information
Social media placeholders
```

Visually separate the footer from the main page content.

---

# 19. Prepare Your Layout for Future Responsive Design

Full responsive design will be addressed in a later phase.

However, avoid creating layouts that intentionally break when the browser window becomes smaller.

Use flexible sizing where appropriate.

At minimum, include image handling such as:

```css
img {
    max-width: 100%;
    height: auto;
}
```

A reusable content container is also recommended:

```css
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}
```

Do not focus on advanced media queries yet unless instructed.

---

# 20. Organize Your CSS

Your stylesheet should be easy to read and maintain.

Organize your CSS into logical sections.

Example:

```css
/* =========================
   Global Styles
========================= */


/* =========================
   Typography
========================= */


/* =========================
   Header
========================= */


/* =========================
   Navigation
========================= */


/* =========================
   Hero
========================= */


/* =========================
   Main Content
========================= */


/* =========================
   Components
========================= */


/* =========================
   Forms
========================= */


/* =========================
   Footer
========================= */
```

Use meaningful CSS class names.

Good examples:

```css
.service-card
.hero-content
.contact-info
.section-title
```

Avoid unclear names such as:

```css
.box1
.thing
.test
.div2
```

Your class names should help another developer understand what each style is intended to control.

---

# 21. Continue Using Git Throughout Development

Do not wait until Phase 1 is completely finished before saving everything to GitHub.

Commit your work throughout the development process.

Make several meaningful commits that describe what you changed.

Examples:

```text
Add global typography and color styles

Style header and navigation

Create homepage hero layout

Add service card grid

Style contact page

Complete footer design

Finish Phase 1 CSS styling
```

Avoid vague commit messages such as:

```text
update

changes

stuff

final
```

Your Git history should show the progression of your work.

---

# 22. Publish Your Updated Website Using GitHub Pages

Continue using GitHub Pages to publish your website.

Before submitting Phase 1, open your live website and verify that:

* every page opens
* your navigation works
* your CSS loads correctly
* your images display correctly
* your file paths work
* your filenames are correct
* there are no broken internal links
* your live website matches the latest version in your repository

Do not assume that your website works simply because it works inside Visual Studio Code.

Test the actual GitHub Pages version.

---

# Phase 1 Deliverables

Submit the following for Phase 1:

1. Your **GitHub repository URL**
2. Your **GitHub Pages live website URL**
3. Your completed HTML pages from Phase 0
4. Your external `style.css` file
5. Your styled navigation
6. Your homepage hero section
7. At least one appropriate Flexbox layout
8. At least one appropriate CSS Grid layout
9. Reusable CSS components
10. Styled contact page and form
11. Consistent header and footer
12. A client-appropriate color palette
13. A consistent typography system
14. Multiple meaningful Git commits

---

# Phase 1 Completion Checklist

Before submitting, confirm that you can answer **Yes** to each of the following:

* [ ] I continued working in my existing project repository.
* [ ] I kept the semantic HTML structure created during Phase 0.
* [ ] I created an external CSS stylesheet.
* [ ] I connected my stylesheet to all required pages.
* [ ] I established a color palette appropriate for my client.
* [ ] I created a consistent typography system.
* [ ] I styled my website header.
* [ ] I styled my navigation.
* [ ] I created a visually identifiable homepage hero section.
* [ ] I used CSS Flexbox appropriately.
* [ ] I used CSS Grid appropriately.
* [ ] I created reusable CSS classes.
* [ ] I styled important calls-to-action.
* [ ] I styled every required client page.
* [ ] I styled my contact page and form.
* [ ] I created a consistent footer.
* [ ] My images display correctly and include appropriate `alt` text.
* [ ] My CSS is organized and readable.
* [ ] I made multiple meaningful Git commits.
* [ ] My latest website version is published through GitHub Pages.
* [ ] I tested the live GitHub Pages website before submitting.

---

# Not Required During Phase 1

Do not focus on the following features yet unless your instructor specifically requests them:

```text
Advanced responsive design
Mobile navigation menus
JavaScript interactions
Form processing
Animations
Carousels
API integration
Database connectivity
Advanced SEO
Advanced accessibility testing
```

These areas will be developed during later project phases.

---

# Client-Specific Requirements

In addition to the common Phase 1 requirements above, follow the **Client-Specific Design Requirements** provided for your assigned business.

Your client-specific requirements may define:

* preferred visual style
* colors or mood
* homepage priorities
* important services
* specific calls-to-action
* image emphasis
* layout preferences
* information that should receive visual priority

Treat these requirements as instructions from your client.

Your website should satisfy both the **common Phase 1 technical requirements** and the **specific needs of your assigned client**.
