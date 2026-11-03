document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('figure-dialog');
  const enlarged = document.getElementById('figure-dialog-image');
  const caption = document.getElementById('figure-dialog-caption');
  const full = document.getElementById('figure-dialog-open');
  const closer = document.getElementById('figure-dialog-close');
  document.querySelectorAll('.figure-button').forEach((button) => {
    button.addEventListener('click', () => {
      const source = button.dataset.full;
      if (!source) return;
      enlarged.src = source;
      enlarged.alt = button.dataset.alt || 'Publication figure';
      caption.textContent = button.dataset.caption || 'Publication figure';
      full.href = source;
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else window.open(source, '_blank', 'noopener,noreferrer');
    });
  });
  closer.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { enlarged.removeAttribute('src'); });
});
