// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// Contact form — client-side feedback only
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome  = this.querySelector('#nome').value.trim();
  const email = this.querySelector('#email').value.trim();

  if (!nome || !email) {
    if (!nome)  this.querySelector('#nome').classList.add('border-red-500');
    if (!email) this.querySelector('#email').classList.add('border-red-500');
    return;
  }

  const btn = document.getElementById('submit-btn');
  btn.innerHTML = '<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Invio in corso...';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Richiesta Inviata!';
    btn.classList.remove('bg-indigo-600', 'hover:bg-indigo-500');
    btn.classList.add('bg-emerald-600', 'cursor-default');
  }, 1000);
});
