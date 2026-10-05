# Add a dropdown section-menu button to the header

## Goal
A simple button in the top bar that opens a dropdown listing every website section (Home, About, Services, Process, FAQ, Contact) and jumps to it on click. This also gives phone and tablet users navigation, since the inline desktop links are hidden below large screens.

## What to build
- In the header (`src/routes/index.tsx`), add a "Menu" button (with a small chevron/menu icon) next to the EN | PL language toggle, inside the same glass card.
  - Shown on screens where the inline nav links are hidden (below `lg`). On large screens the existing inline links remain, so nothing moves there.
- Clicking it opens a dropdown panel with one link per section:
  - Home (`#top`), About, Services, Process, FAQ, Contact — labels come from the existing EN/PL content, so the dropdown switches language with the site. Add a "Home"/"Strona główna" label to `src/content/site-content.ts`.
- Choosing a section smooth-scrolls to it and closes the dropdown. Also closes on outside click, Escape key, and when switching language.
- Style: same design language as the site — glass card panel, red/white accent on the button, muted text for links, hover highlight. Use the existing shadcn `dropdown-menu` component, restyled with the site's tokens.
- Accessibility: proper button label ("Open menu" / "Otwórz menu"), keyboard navigable, `aria-expanded` on the trigger.

## Files touched
- `src/routes/index.tsx` — header dropdown button and panel.
- `src/content/site-content.ts` — add "Home" label (EN + PL).

## Out of scope
- No changes to section layout, spacing, or existing desktop links.
