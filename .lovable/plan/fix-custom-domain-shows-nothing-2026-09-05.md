# Fix: Custom domain shows nothing

## Diagnosis
- `www.polisharchitect.co.uk` and `polisharchitect.co.uk` are both **connected and active** — DNS is correct.
- The project is **not published**, so the connected domains serve no content. This is the entire cause of the blank site.

## Plan
1. Publish the project — this deploys the current site so both domains start serving it.
2. After publishing, confirm the site loads at https://www.polisharchitect.co.uk (deployment usually takes about a minute).

No code changes are needed.
