# CV — data-driven static site

A static CV generated at build time from a single JSON file. No React, no
runtime framework, no client-side data fetching. One source produces two
artifacts:

- **`dist/index.html`** — the website (two-column on screen, single-column
  ATS-safe layout when printed).
- **`dist/cv.pdf`** — an A4 PDF rendered from the same HTML with print styles.

## Edit the CV

**You only ever edit [`content/cv.json`](content/cv.json).** Never touch the
HTML. The JSON drives every section:

| Section      | JSON key      | Shape |
|--------------|---------------|-------|
| Header       | `basics`      | `{ name, title, location, openToRemote, photo, contacts: { telegram, github, email } }` |
| Summary      | `summary`     | string |
| Core Skills  | `skills`      | `[{ group, items: [] }]` |
| Projects     | `projects`    | `[{ name, description }]` (one line each, no links — NDA) |
| Experience   | `experience`  | `[{ company, role, period, bullets: [] }]` (reverse chronological) |
| Languages    | `languages`   | `[{ name, level }]` |

Items marked `TODO:` are placeholders — fill or remove them. The photo lives at
`src/assets/photo.jpeg`; replace the file (keep the name) or update
`basics.photo`.

## Commands

```bash
npm install      # install dependencies (downloads Chromium for the PDF step)
npm run dev      # live preview at http://localhost:8080
npm run build    # build dist/index.html + dist/cv.pdf
```

Other scripts: `npm run build:html` (HTML only), `npm run build:pdf` (PDF only,
expects the HTML to already exist).

### Previewing the print / ATS layout

In the dev server, open print preview (Cmd/Ctrl+P) or click **Save as PDF**.
The print stylesheet collapses to a single column, hides the photo, and orders
sections as Header → Summary → Skills → Projects → Experience → Languages.

## Structure

```
content/cv.json          all CV content (the only file you edit)
src/
  index.hbs              page shell, includes section partials
  partials/*.hbs         one Handlebars partial per section
  styles/main.scss       screen + @media print styles
  index.js               imports styles + wires the print button
  assets/                photo, favicon
scripts/build-pdf.js     Puppeteer: dist/index.html -> dist/cv.pdf
webpack.config.js        Handlebars + SCSS + HtmlWebpackPlugin
```

## Deployment

`main` holds **source only**. On every push to `main`, GitHub Actions
(`.github/workflows/deploy.yml`) runs `npm ci`, `npm run build` (HTML + PDF),
and deploys `dist/` to GitHub Pages via the official Pages actions.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub
Actions**.

Asset paths use a relative `./` publicPath, so the site works under the project
subpath `https://quadrads.github.io/cv/`. The PDF is published at
`https://quadrads.github.io/cv/cv.pdf`.
