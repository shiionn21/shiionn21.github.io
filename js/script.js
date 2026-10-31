// Menu mobile
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Se a foto não carregar, mostra as iniciais
const photo = document.getElementById('photo');
const fallback = document.getElementById('photoFallback');
function showFallback() {
  photo.style.display = 'none';
  fallback.style.display = 'flex';
}
photo.addEventListener('error', showFallback);
// Se a foto já falhou antes do script carregar, o evento 'error' não dispara mais
if (photo.complete && photo.naturalWidth === 0) showFallback();

// Efeito de digitação
const roles = [
  'Desenvolvedor Full Stack Júnior',
  'Python · Java · JavaScript',
  'APIs, bancos de dados e interfaces',
  'Estudante de ADS'
];
const typed = document.getElementById('typed');
let roleIdx = 0, charIdx = 0, deleting = false;
function type() {
  const current = roles[roleIdx];
  typed.textContent = current.slice(0, charIdx);
  if (!deleting && charIdx < current.length) { charIdx++; setTimeout(type, 80); }
  else if (!deleting) { deleting = true; setTimeout(type, 1600); }
  else if (charIdx > 0) { charIdx--; setTimeout(type, 40); }
  else { deleting = false; roleIdx = (roleIdx + 1) % roles.length; setTimeout(type, 300); }
}
type();

// Animação ao rolar a página
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();
