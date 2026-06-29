document.getElementById('year').textContent = new Date().getFullYear();
const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
btn?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }); }, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
