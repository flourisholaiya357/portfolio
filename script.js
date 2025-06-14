const btn = document.getElementById('theme-toggle');
const body = document.body;

btn.onclick = () => {
  body.classList.toggle('dark');
  btn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
};
