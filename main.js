/**
 * YA&MOYKOZYR — Общий JS
 */

// ── Тема: применяем ДО рендера чтобы не мигало ──
(function() {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {

  // ── Переключение темы ───────────────────────
  const themeToggle = document.getElementById('theme-toggle');

  themeToggle?.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  // ── Мобильное меню ─────────────────────────
  const burgerBtn   = document.getElementById('burger-btn');
  const mobileNav   = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobile-nav-close');

  burgerBtn?.addEventListener('click', () => mobileNav.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileNav.classList.remove('open'));

  // ── Поиск ──────────────────────────────────
  const searchBtn     = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose   = document.getElementById('search-close');

  searchBtn?.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    searchOverlay.querySelector('input')?.focus();
  });
  searchClose?.addEventListener('click', () => searchOverlay.classList.remove('open'));

  // Закрытие по Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      searchOverlay?.classList.remove('open');
      mobileNav?.classList.remove('open');
    }
  });

  // ── Активная ссылка в nav ──────────────────
  // На каталоге активным табом управляет catalog.html — не трогаем
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  // На главной и других страницах — не подсвечиваем табы каталога
  // (они подсвечиваются только внутри catalog.html)
  if (currentPage !== 'catalog.html' && currentPage !== 'index.html' && currentPage !== '') {
    document.querySelectorAll('.nav-list a').forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href.split('?')[0] === currentPage) {
        link.classList.add('active');
      }
    });
  }

});
