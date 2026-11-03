document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('figure-dialog');
  const image = document.getElementById('figure-dialog-image');
  const title = document.getElementById('figure-dialog-caption');
  const original = document.getElementById('figure-dialog-open');
  const close = document.getElementById('figure-dialog-close');
  for (const button of document.querySelectorAll('.figure-button')) {
    button.addEventListener('click', () => {
      image.src = button.dataset.full;
      image.alt = button.dataset.alt || 'Research figure';
      title.textContent = button.dataset.caption || 'Research figure';
      original.href = button.dataset.full;
      if (dialog.showModal) dialog.showModal(); else window.open(button.dataset.full, '_blank', 'noopener');
    });
  }
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { image.removeAttribute('src'); });
});
