// Renders each built HTML page with print media and saves an A4 PDF.
// Run after `webpack build` (see `npm run build`).
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');

const dist = path.resolve(__dirname, '..', 'dist');

// One PDF per language.
const pages = [
  { html: 'index.html', pdf: 'cv-en.pdf' },
  { html: 'ru.html', pdf: 'cv-ru.pdf' },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const { html, pdf } of pages) {
      const htmlPath = path.join(dist, html);
      if (!fs.existsSync(htmlPath)) {
        console.error(`dist/${html} not found run the HTML build first.`);
        process.exit(1);
      }
      const page = await browser.newPage();
      await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });
      await page.evaluate(() => document.fonts.ready);
      await page.emulateMediaType('print');
      await page.pdf({
        path: path.join(dist, pdf),
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        margin: { top: '14mm', right: '16mm', bottom: '14mm', left: '16mm' },
      });
      await page.close();
      console.log('PDF written to', path.join(dist, pdf));
    }
    // Keep cv.pdf as the English default so the canonical /cv/cv.pdf link works.
    fs.copyFileSync(path.join(dist, 'cv-en.pdf'), path.join(dist, 'cv.pdf'));
    console.log('PDF written to', path.join(dist, 'cv.pdf'), '(alias of cv-en.pdf)');
  } finally {
    await browser.close();
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
