const toggle = document.getElementById('theme-toggle');
const root = document.body;

if (toggle) {
  toggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    toggle.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
  });
}
