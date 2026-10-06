# SME Consult — Website

Marketing website for **SME Consult (Safe Mine Entry & Exit)**, Tarkwa, Ghana.
Built with [Vite](https://vite.dev) + React.

## Run it

You need [Node.js](https://nodejs.org) 20.19+ or 22.12+.

```bash
npm install        # first time only
npm run dev        # local site at http://localhost:5173 (opens your browser)
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with instant reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build at http://localhost:4173 |
| `npm run add-photo -- <file> <key> "<alt text>"` | Add or replace a photo (see below) |

## Where things live

```
src/
  data/
    site.js        ← phone, email, address, hours, social links, menu
    content.js     ← services, FAQs, team, values, clients, testimonials, stats
    gallery.js     ← gallery photos, captions and categories
    photos.json    ← every photo's alt text, sizes and credit (managed by add-photo)
  pages/           ← one file per page (Home, About, Services, Clients, Gallery, Contact…)
  components/      ← shared pieces: header, footer, photo, lightbox, contact form…
  styles/          ← global.css (colours, buttons, cards) and sections.css (page sections)
  assets/photos/   ← optimised WebP photos (800px and 1600px versions)
public/            ← favicon, social-share image, hosting redirects
_legacy/           ← the previous static HTML site, kept for reference — safe to delete
```

**Most edits only touch `src/data/`.** For example, to change the phone number everywhere, edit `phone`
and `phoneDisplay` in `src/data/site.js`. To show social icons in the footer, paste your profile URLs
into `socials` in the same file.

## Brand

- **Colours:** navy `#01203F` and yellow `#FFD302`, taken from the SME Consult logo. They're defined once, at the
  top of `src/styles/global.css` (`--navy`, `--yellow`). The design is light-first: white and light-grey pages,
  with navy for the top bar, stats, call-to-action panels and footer.
- **Typography:** navy headings with muted blue (`#285B83`) emphasis, soft blue badges and pale blue
  (`#A9CEE8`) text accents on navy. Shared `--accent-*` tokens keep this consistent across pages.
  Yellow is reserved for brand details, buttons and icons.
- **Logo:** `src/assets/brand/logo-mark.png` (the shield, transparent background) is used in the header.
  `logo-mark-outline.png` (white edge, so the navy shield shows on navy) is used in the footer.
  `public/logo.png` is the full logo with the wordmark. The favicon, app icon and social-share image
  (`public/og-image.jpg`) are all made from it.
- **Fonts:** Montserrat for headings (matching the logo's wordmark) and Inter for body text.

## Photos

The site uses licensed stock photography from [Pexels](https://www.pexels.com/license/) (free for
commercial use; photographers are credited at `/credits`). These stand in for your own photos — real
pictures of your team, gates and client sites will always communicate better.

To swap one in, pick the key of the photo you want to replace (they're listed in
`src/data/photos.json`, e.g. `control-room`, `crew-lineup`, `mine-portal`) and run:

```bash
npm run add-photo -- "C:\path\to\your-photo.jpg" control-room "Our Tarkwa control room at night"
```

That resizes and compresses the photo, and it immediately replaces the old one everywhere it's used.
Use a new key to add an extra photo, then reference it from `src/data/gallery.js` (or any page).
The alt text is read aloud by screen readers — describe what's in the picture.

Team members and testimonials use initials avatars. Please only add headshots of the real people named.

## Contact form

By default, **Send Message** opens the visitor's email app with their message pre-filled to
`smeconsultgh@gmail.com`, and **Send via WhatsApp** opens a WhatsApp chat with the same text.

To receive messages directly instead (works even when visitors have no email app set up), create a free
form endpoint — e.g. at [Formspree](https://formspree.io) — then copy `.env.example` to `.env` and set:

```
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
```

Rebuild after changing it.

## Deploying

Run `npm run build` and upload the `dist/` folder to any static host.

The site uses clean URLs (`/about`, `/services`…), so the host must send unknown paths to `index.html`.
This is already configured for **Netlify** and **Cloudflare Pages** (`public/_redirects`) and **Vercel**
(`vercel.json`). Old links such as `about.html` redirect to the new pages automatically.
