# Rel Web

This project is done with Next.js

## User journey, design choices, trade-offs and assumptions

### User journey

- Visitor lands on the marketing `Home` page and immediately sees the hero with a clear CTA to `Courses`.
- From `Courses` they can browse a course grid, open course details in a modal, and follow through to enroll or view the full course page.
- The flow is intentionally shallow: marketing → course discovery → course details → enroll/learn.

### Design goals and choices

- Single codebase using the Next.js App Router for pages and server rendering where appropriate.
- Keep the marketing/home page mostly static and CSS-driven for fast first paint; hero image and CTA are prominent.
- Reuse global styles in `src/app/globals.css` so layout and components share the same design tokens.
- Use `next/link` for navigation to preserve client-side transitions and accessibility semantics.

### Trade-offs

- global CSS: `src/app/globals.css` has styles for maintainability and caching; this means the global stylesheet may grow large but the page component is cleaner.
- CSS granularity: I preserved authoring with plain CSS rather than introducing a CSS-in-JS solution or Tailwind. That keeps the styling simple and framework-agnostic but may require class-naming discipline as the project grows.

### Assumptions

- The project is small to medium-sized and prefers straightforward, readable CSS and components over heavy abstraction.
- Accessibility is important: links and CTAs use semantic elements (`<a>`, `Link`) and focus styles are retained in CSS.
- Routing: marketing pages are under `src/app` App Router.

### Next recommended steps

- Consider splitting global CSS into component-scoped modules once the codebase scales.
