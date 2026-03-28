function showTab(tab) {
  // Hide all content divs in the content area
  const contentArea = document.querySelector('.content');
  if (contentArea) {
    const allDivs = contentArea.querySelectorAll('div[id]');
    allDivs.forEach(div => {
      div.style.display = 'none';
    });
  }
  
  // Show the selected tab
  const targetTab = document.getElementById(tab);
  if (targetTab) {
    targetTab.style.display = 'block';
  }
}

function toggleSubmenu(btn) {
  const parent = btn.closest('.more-wrapper');
  if (!parent) return;

  const willOpen = !parent.classList.contains('is-expanded');

  document.querySelectorAll('.more-wrapper.is-expanded').forEach((wrap) => {
    if (wrap !== parent) {
      wrap.classList.remove('is-expanded');
    }
  });

  parent.classList.toggle('is-expanded', willOpen);
}

function initWorkDetailModal() {
  const root = document.getElementById('work-detail');
  if (!root) return;

  const mediaHost = root.querySelector('.work-detail__media');
  const titleEl = root.querySelector('.work-detail__title');
  const descEl = root.querySelector('.work-detail__desc');
  let lastActive = null;

  function closeWorkDetail() {
    root.classList.remove('is-open');
    root.setAttribute('aria-hidden', 'true');
    mediaHost.innerHTML = '';
    if (lastActive && typeof lastActive.focus === 'function') {
      lastActive.focus();
      lastActive = null;
    }
  }

  function openWorkDetail(btn) {
    const img = btn.querySelector('img');
    const vid = btn.querySelector('video');
    mediaHost.innerHTML = '';
    lastActive = document.activeElement;

    if (img) {
      const next = img.cloneNode(true);
      next.removeAttribute('style');
      mediaHost.appendChild(next);
    } else if (vid) {
      const next = vid.cloneNode(true);
      next.removeAttribute('style');
      next.removeAttribute('muted');
      next.removeAttribute('playsinline');
      next.setAttribute('controls', '');
      mediaHost.appendChild(next);
      next.load();
    }

    const title = btn.getAttribute('data-title') || (img && img.alt) || 'Work';
    const desc = btn.getAttribute('data-desc') || '';
    titleEl.textContent = title;
    descEl.textContent = desc;

    btn.classList.add('work-thumb--pop');
    window.setTimeout(() => btn.classList.remove('work-thumb--pop'), 400);

    root.classList.add('is-open');
    root.setAttribute('aria-hidden', 'false');
    root.querySelector('.work-detail__close').focus();
  }

  document.querySelectorAll('.work-thumb').forEach((btn) => {
    btn.addEventListener('click', () => openWorkDetail(btn));
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openWorkDetail(btn);
      }
    });
  });

  root.querySelectorAll('[data-work-detail-close]').forEach((el) => {
    el.addEventListener('click', closeWorkDetail);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.classList.contains('is-open')) {
      closeWorkDetail();
    }
  });
}

document.addEventListener('DOMContentLoaded', initWorkDetailModal);