const BUSINESS_EMAIL = 'lavelahvesselee1998@gmail.com';

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const topic = String(data.get('topic') || 'General inquiry');
  const message = String(data.get('message') || '').trim();
  const status = document.querySelector('#form-status');
  const subject = encodeURIComponent(`FutureTech Liberia inquiry: ${topic}`);
  const body = encodeURIComponent(`Name: ${name}\nReply email: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`);
  status.textContent = 'Opening your email app…';
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
