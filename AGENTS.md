# Repository Guidelines

## Project Structure & Development

This repository contains Carlos Campos's public, single-page professional portfolio. `index.html` owns content and semantic structure, `styles.css` owns presentation and responsive behavior, `script.js` owns progressive interactions, and `assets/img/` contains images. `README.md` is the project overview. There is currently no backend, build step, package manager, automated test suite, or generated-output directory.

Run the site locally over HTTP:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. Do not install dependencies unless a task explicitly authorizes it. Keep assets under `assets/`, use descriptive kebab-case names, and do not add heavy or unreferenced files.

## Professional Positioning & Editorial Rules

Present Carlos primarily as an **Analista Programador ERP and enterprise systems developer**. Confirmed public facts are:

- More than 10 years of general experience across technology, systems, development, and digital design. Never attribute all those years specifically to ERP.
- Professional technical degree in Computación e Informática from Cibertec.
- Approximately 10 years of complementary graphic-design experience; design is not the main positioning.
- Enterprise experience: requirements analysis, business rules, customers, orders, quotations, invoicing, SUNAT-related processes, ERP maintenance, incident resolution, operational support, SQL-query improvement, and improvement deployment.

Communicate technical experience, functional analysis, business processes, databases, infrastructure, automation, and maintenance of operational systems. The portfolio's primary objective is to gain clients; job opportunities are secondary. Use concrete services and commercial calls to action while retaining enough technical evidence for recruiters. Do not make the site read like a résumé only, a fictitious agency, or a company with an unverified team.

Avoid unsupported claims and empty phrases such as “soluciones innovadoras,” “código que inspira,” or “llevo tus ideas al siguiente nivel.” Never invent employers, dates, metrics, certifications, clients, testimonials, projects, economic results, years per technology, or proficiency levels. Do not use the word “experto” without explicit authorization.

Use professional Peruvian Spanish for public copy, with correct spelling and accents.

## Technology Stack Presentation

Present technologies by category and work context, never as percentages, stars, progress bars, or numeric levels. “Dominio” means solid professional ability; “Manejo” means practical, functional use without claiming a main specialization; “Conocimiento” means familiarity or limited experience. Do not give every technology equal visual weight: lead with ERP and dominio technologies.

- **Dominio:** PHP, Java, C#, JavaScript, HTML5, MySQL, SQL Server, CodeIgniter, Bootstrap, jQuery, APIs REST, and n8n.
- **Manejo profesional:** CSS3, Laravel, Spring, Git y GitHub, OpenAI Codex, Power BI, cPanel, WHM, Dokploy, VPS administration, Google Analytics, Google Ads, Google Workspace, DNS, domain management, and SSL certificates.
- **Conocimiento:** Linux.
- **Manejo operativo:** Docker.

Use grouped labels such as Desarrollo e integraciones, Datos y ERP, Automatización, Infraestructura, Analítica, and Presencia digital. Accompany categories with confirmed use cases where available; do not invent years of use.

## Target Content Architecture

Organize the page around these blocks:

1. Inicio.
2. Perfil y trayectoria.
3. Especialización ERP.
4. Competencias.
5. Proyectos y casos de estudio.
6. Servicios.
7. Formación y confianza.
8. Contacto.

Keep the visible primary navigation to at most six links: Perfil, ERP, Competencias, Proyectos, Servicios, and Contacto. Each section must have a distinct purpose, concise copy, and a functional call to action.

## Project Presentation & Confidentiality

- **Starwalker.store:** public, active featured case study at `https://starwalker.store/`. Carlos was responsible for the design, development, responsive adaptation, WhatsApp integration, domain configuration, publication, hosting, and maintenance. Describe this as work performed from client-provided information, requirements, and corporate colors; do not imply the client had no role in decisions or claim unverified business results.
- **Private enterprise ERP:** use the public title “ERP empresarial privado — procesos comerciales y facturación.” Never expose real-system screenshots, proprietary code, internal names, schemas, tables, credentials, customer data, or private rules. Explain it through anonymized responsibilities and generic processes, for example `Clientes → Cotización → Pedido → Facturación → SUNAT`.
- **SUNAT API:** label it as historical or “en restauración.” Do not present it as an active service until availability is verified.

## Public Contact Rules

Publish only expressly authorized contact details, company names, screenshots, metrics, and links. Use WhatsApp as the primary commercial contact: visible text `+51 960 311 422` and URL `https://wa.me/51960311422`. The `wa.me` URL must not contain spaces, `+`, or hyphens. Use `mailto:crce.aizu@gmail.com` as the alternate email channel and `https://github.com/lordniz` as the technical profile. “Lima, Perú” may appear as a general location only, never as an exact address.

Do not show LinkedIn until an approved URL exists; do not add LinkedIn icons, disabled controls, placeholder links, or `href="#"` substitutes. Do not invent other contact details or publish private data beyond the authorized values above. Do not create a contact form until its delivery mechanism and privacy handling are defined. External links using `target="_blank"` must include `rel="noopener noreferrer"`.

## Service Priorities

Order public services by commercial importance:

1. ERP systems and enterprise solutions.
2. Development and integrations.
3. Automation and infrastructure.
4. Business web development and digital presence.

Within those groups, communicate confirmed services: ERP evolution, enterprise-application maintenance, business-rule analysis and implementation, business web development, APIs and integrations, n8n automation, VPS infrastructure, domains, DNS, SSL, Power BI, Google Analytics, and technological support. Do not present all services as equivalent or claim services outside the confirmed scope.

## Visual Direction

Use a sober, modern, senior-oriented “premium corporate technology” style—not gamer, childish, excessively futuristic, or generic-template driven. Prioritize light surfaces with strategic dark sections.

Light palette: `#F7F9FC` background, `#FFFFFF` surface, `#123B4A` petroleum blue, `#18242B` graphite, `#52636D` secondary text, `#0B8FA8` cyan accent, `#2563EB` blue accent, and `#DCE5EA` borders.

Dark palette: `#0B141A` background, `#111E25` surface, `#172831` elevated surface, `#EDF5F7` text, `#A8BAC3` secondary text, `#32B6CB` accent, and `#29404A` borders.

Design mobile-first with an 8 px spacing scale, a single coherent icon family, visible focus, and touch targets of at least 44 px. Keep animations subtle (150–300 ms), avoid permanent motion, and honor `prefers-reduced-motion`. Essential content must remain available without hover and on touch devices. Avoid decorative excess and rigid layouts compensated with `position: fixed` or excessive absolute positioning.

The current photograph may remain during the first implementation, but it will later be replaced with a professional portrait intended to project confidence and professionalism, with formal attire. Do not generate or replace the image without a specific request. Keep the hero responsive and independent of the current image dimensions so that a future replacement does not require a layout rebuild.

## HTML, CSS & JavaScript Conventions

Use four-space indentation. HTML must be semantic, include `<main>` and a skip link, contain one `<h1>`, and preserve logical `h1`/`h2`/`h3` order. Use `<button>` for actions and `<a>` for navigation. Provide meaningful alternative text and appropriate `aria-label`, `aria-expanded`, and related attributes. Never use a `<div>` as an interactive control. Every CTA needs a functional destination or an explicit disabled state.

Use kebab-case for CSS classes and component-scoped selectors. Group rules by component; retain variables for color, typography, and spacing; keep breakpoints coherent and mobile-first. Do not use inline styles, duplicate rules, vague global selectors, or a global `outline: none`.

Use camelCase in JavaScript. Check optional elements before binding events. Prefer scoped event listeners over assigning `window.onclick` or `window.onscroll`. Mobile navigation must manage focus, `aria-expanded`, and Escape. Persist the color theme if it remains. Respect reduced-motion preferences, degrade safely when external scripts fail, and keep primary content accessible without JavaScript.

## Performance & Dependencies

Minimize third-party code. Remove duplicate or unused dependencies; do not load Swiper without a corresponding section or full Bootstrap for one avoidable interaction. Compress and resize images, prefer WebP or AVIF where appropriate, declare `width` and `height`, and lazy-load images outside the first viewport. Avoid blocking fonts and unreferenced heavy assets. Any new dependency requires a documented reason and validation that native HTML, CSS, or JavaScript cannot meet the need simply.

## Accessibility & SEO

Keyboard operation, visible focus, touch access, semantic landmarks, useful labels, sufficient contrast, and reduced motion are required. Hover may enhance but never gate information.

When SEO is implemented, provide a descriptive title, meta description, canonical URL, favicon, Open Graph, Twitter Cards, and suitable `Person`, `WebSite`, and `ProfilePage` structured data. Add `robots.txt` and `sitemap.xml` when deployment details are confirmed. Write naturally in Peruvian Spanish; do not keyword-stuff or add unverified structured-data claims.

## Validation Checklist

There is no automated framework or coverage target. Before closing any application change:

1. Run `git diff --check` and `git status --short`.
2. Confirm there are no unjustified `href="#"` values or broken local `src` paths.
3. Review the browser console and all external links.
4. Test keyboard navigation and close the mobile menu with Escape.
5. Test mobile, tablet, and desktop layouts.
6. Verify light/dark modes, when present, and `prefers-reduced-motion`.
7. Check focus visibility, touch targets, alternative text, and CTA behavior.
8. Confirm no private information is exposed and no unnecessary dependency was introduced.

Never report a check as passed unless it was actually run. If browser or device testing is unavailable, state that explicitly.

## Git, Commits & Pull Requests

Do not commit or push unless explicitly requested. Do not delete files without a justified, authorized reason, and do not combine multiple implementation phases without authorization. Keep changes small, reviewable, and reversible. Always report modified files and validations performed.

History uses short but inconsistent messages. When authorized, prefer imperative, scoped commits such as `fix: repair portfolio links` or `feat: add anonymized ERP case study`. Pull requests should explain user-visible effects, link relevant issues, list manual checks, identify new dependencies or public information, and include before/after screenshots for visual changes.
