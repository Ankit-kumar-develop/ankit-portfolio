// script.js
document.addEventListener('DOMContentLoaded', ()=> {
  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // theme toggle with localStorage persistence
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && prefersDark)) document.body.classList.add('dark');

  themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });

  // contact form: simulate send (replace with real endpoint if you have one)
  const form = document.getElementById('contactForm');
  const sending = document.getElementById('sending');
  const success = document.getElementById('success');
  const sendBtn = document.getElementById('sendBtn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    success.classList.add('hidden');
    // simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      alert('Please fill all fields.');
      return;
    }

    sendBtn.disabled = true;
    sending.classList.remove('hidden');

    // Simulate sending: replace this with fetch to your API or email service
    await new Promise(res => setTimeout(res, 900)); // simulate network delay

    sending.classList.add('hidden');
    success.classList.remove('hidden');
    form.reset();
    sendBtn.disabled = false;
  });
});
