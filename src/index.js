import './styles/main.scss';

// The only client-side JS: wire up the optional "Print / Save as PDF" button.
// Hidden in print output via CSS.
const printButton = document.querySelector('[data-print]');
if (printButton) {
  printButton.addEventListener('click', () => window.print());
}
