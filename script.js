// script.js - interactions for portfolio_v2
(function(){
  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme') || 'dark';
  if(saved === 'light') root.setAttribute('data-theme','light'); else root.removeAttribute('data-theme');
  themeBtn.textContent = saved === 'light' ? '🌙' : '☀️';

  themeBtn.addEventListener('click', ()=>{
    const now = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if(now === 'light') root.setAttribute('data-theme','light'); else root.removeAttribute('data-theme');
    localStorage.setItem('theme', now);
    themeBtn.textContent = now === 'light' ? '🌙' : '☀️';
  });

  // Typing effect (initial, then static)
  const typingEl = document.getElementById('typing');
  const phrases = ["Android Developer • Java • Full‑Stack learner", "Android • Firebase • Spring (learning)"];
  let pIndex = 0, ch = 0;
  function typeOnce(){
    const cur = phrases[pIndex];
    if(ch <= cur.length){
      typingEl.textContent = cur.slice(0,ch);
      ch++;
      setTimeout(typeOnce,80);
    } else {
      // leave static after typing
      setTimeout(()=>{},1200);
    }
  }
  typeOnce();

  // Simple scroll reveal using IntersectionObserver
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('reveal'); }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.section, .card, .project-card, .cert-card, .edu-item, .about-grid > div').forEach(el=>{
    obs.observe(el);
  });

  // send mail helper
  window.sendMail = function(){
    alert('This will open your email client to send an email to vishwakarmagaurav013@gmail.com');
    return true;
  }
  document.getElementById('copy-email').addEventListener('click', ()=>{
    navigator.clipboard.writeText('vishwakarmagaurav013@gmail.com').then(()=>{
      alert('Email copied to clipboard');
    }).catch(()=> alert('Copy failed'));
  });

  // Horizontal scroll keyboard helpers (left/right)
  function bindHorizontalScroll(id){
    const el = document.getElementById(id);
    el.addEventListener('keydown', (e)=>{
      if(e.key === 'ArrowRight'){ el.scrollBy({left: 320, behavior:'smooth'}) }
      if(e.key === 'ArrowLeft'){ el.scrollBy({left: -320, behavior:'smooth'}) }
    });
  }
  bindHorizontalScroll('projects-scroll');
  bindHorizontalScroll('certs-scroll');

})();