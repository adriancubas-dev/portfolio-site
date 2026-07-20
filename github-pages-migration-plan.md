# Plan: Rebuild adriancubas.com on GitHub Pages

## Architecture

**Plain HTML/CSS/JS** — no build step, no dependencies. One repo, deploy via GitHub Pages.

```
adriancubas.github.io/
├── index.html              (homepage)
├── work/
│   ├── index.html          (all work listing)
│   ├── mercari-comments.html
│   ├── mercari-offers.html
│   ├── tiktok-contentdesign.html
│   ├── quadency-onboarding.html
│   ├── covicare-appdesign.html
│   └── dfg-contentdesign.html
├── css/
│   ├── reset.css           (normalize)
│   ├── style.css           (global styles + variables)
│   └── case-study.css      (case study page layout)
├── js/
│   └── main.js             (smooth scroll, nav toggle, animations)
├── assets/
│   ├── images/             (project mockups, headshot, hero bubbles)
│   ├── icons/              (LinkedIn, email SVGs)
│   └── resume.pdf
├── CNAME                   (custom domain: adriancubas.com)
└── README.md
```

## Phase 1: Setup & Foundation

1. Create GitHub repo (`adriancubas.github.io` or any name with Pages enabled)
2. Set up CSS custom properties for design tokens (dark navy background, accent colors, typography scale)
3. Build the shared layout: nav bar, footer, responsive container grid
4. Configure custom domain (`adriancubas.com`) via CNAME + DNS update at registrar

## Phase 2: Homepage

1. **Hero section** — headline, subheadline, CTA button, decorative bubble/dot PNGs positioned with CSS (absolute/relative)
2. **Recent Work grid** — CSS Grid, 2-3 columns responsive, project cards with thumbnail, title, category tag, hover effect (scale + shadow transition)
3. **About section** — two-column layout (text + photo), stacks on mobile
4. **Footer** — name + icon links (LinkedIn, email)

## Phase 3: Case Study Pages

1. Build a reusable case-study template (consistent section rhythm: label → heading → body → image)
2. Migrate each of the 6 projects — content, mockup images, flow diagrams
3. Handle embedded prototypes (iframe or video embeds)
4. Responsive image sizing with `max-width: 100%` and optional lightbox

### Case Study Template Structure

Each case study follows this pattern:

- Project header (label, title, category tag, hero image)
- Overview / Background (role, skills, timeline)
- Problem statement
- Research section (user insights, pain points)
- Design process (strategy, taxonomy, iterations)
- Final designs (mockups grouped by feature)
- Interactive prototype (embedded video/iframe)
- Conclusion (impact metrics, takeaways)

### Projects to Migrate

| Project | Slug |
|---------|------|
| Mercari: Integrating social and community features | `mercari-comments` |
| Mercari: Improving adoption and completion of offers | `mercari-offers` |
| TikTok: UX content design for mobile ad landing pages | `tiktok-contentdesign` |
| Quadency: Developing the onboarding experience | `quadency-onboarding` |
| CoviCare: Designing an app for healthcare workers | `covicare-appdesign` |
| Develop for Good: Building a content design system | `dfg-contentdesign` |

## Phase 4: Assets & Polish

1. Export all images from Webflow (download from `cdn.prod.website-files.com` URLs or Webflow's asset manager)
2. Optimize images (WebP with fallback, lazy loading via `loading="lazy"`)
3. Add subtle CSS animations (fade-in on scroll via IntersectionObserver, hover transitions on cards)
4. Mobile responsiveness — hamburger nav, stacked grids, adjusted typography

## Phase 5: Deploy & Domain

1. Push to GitHub, enable Pages (main branch / root)
2. Add `CNAME` file with `adriancubas.com`
3. Update DNS at registrar: A records → GitHub Pages IPs, CNAME `www` → `<username>.github.io`
4. Enable HTTPS in repo settings (GitHub provisions a cert automatically)

### GitHub Pages DNS Records

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  <username>.github.io
```

## Key Decisions

| Decision | Recommendation |
|----------|---------------|
| URL structure | Keep `/work/project-slug` paths (use folders with `index.html` for clean URLs) |
| Animations | CSS transitions + one small JS file with IntersectionObserver — no libraries |
| Fonts | Self-host or use Google Fonts (check what Webflow is serving) |
| Contact form | LinkedIn CTA + mailto keeps it simple and free |

## Timeline Estimate

| Phase | Effort |
|-------|--------|
| Phase 1–2: Structure + homepage | ~1 day |
| Phase 3: 6 case studies with content migration | ~1–2 days |
| Phase 4–5: Optimization + deploy | ~half day |
| **Total** | **~2.5–3.5 days** |
