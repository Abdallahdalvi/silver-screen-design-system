<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Ubiqedge redesign — technical rules

- Single content source: `src/content/site.ts` holds all site copy, metrics, contacts, nav, blog links — sourced verbatim from ubiqedge.com. Never invent stats, customers, or testimonials.
- Real imagery: brand/product images are lovable-assets pointers under `src/assets/*.asset.json`; import and use `.url`. Generated cinematic scenes live as project files under `src/assets/` (hero-generated.png, solution-*.png, samasth-dashboard.png) and are illustrative only — never presented as real Ubiqedge product photography.
- Blog/article and KLEON device detail links point to the existing live ubiqedge.com URLs until those pages are rebuilt in-app.
- Fonts load via `<link>` in `src/routes/__root.tsx` (Space Grotesk + DM Sans), never via @import in styles.css.
- Design tokens live in `src/styles.css` (`--ink`, `--electric`, `--brand`, `--violet`, `--purple`, `--light` etc.); components never hardcode colors.
- Animations use the `motion` package (Framer Motion) plus CSS/SVG; respect reduced motion, lazy-load offscreen media.
