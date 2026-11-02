# Node.js / TypeScript CV

A static backend developer CV in English and Russian. Content is stored in JSON,
rendered using Handlebars and Webpack, with print styles and PDF export.
Rust and Solana experience is included as an additional specialisation.

## Content

- `content/cv.json`: English CV → `index.html`
- `content/cv.ru.json`: Russian CV → `ru.html`

Edit the content files to update the header, summary, skills, experience and
languages. Each experience entry has a prose `description` and a `stack` array
rendered as technology badges below it. Section templates are in `src/partials/`; screen and print styles
are in `src/styles/main.scss`.

## Development

```sh
npm install
npm run dev
npm run build:html
npm run build:pdf
npm run build
```

The development server opens the English CV on port 8080. The language switch
opens the other language. PDF generation requires the HTML build first and
uses Puppeteer's Chromium. `npm run build` generates both HTML pages and PDFs.

## Output

- `dist/index.html`: English
- `dist/ru.html`: Russian
- `dist/cv-en.pdf`: English PDF
- `dist/cv-ru.pdf`: Russian PDF
- `dist/cv.pdf`: alias of the English PDF

The Save as PDF button opens the browser print dialog. Print styles use a
single column and order sections as Header → Summary → Skills → Experience →
Languages. Photos and screen controls are hidden when printing.

## Deployment

GitHub Actions builds and deploys `dist/` to GitHub Pages on pushes to `main`.
The canonical CV is at https://quadrads.github.io/cv/ and the Russian version
at https://quadrads.github.io/cv/ru.html. Asset paths are relative to support
GitHub Pages project subpaths. The separate Solana and full-stack variants
have been replaced by this single Node.js CV.
