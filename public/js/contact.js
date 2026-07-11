/**
 * RACLAB – Contact Page JS
 * Particle animation + form submit toast
 */

(function () {
  'use strict';

  /* ── Floating particles in hero ────────────────────────── */
  const hero = document.getElementById('contactHero');
  if (hero) {
    const PARTICLE_COUNT = 22;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement('span');
      p.className = 'c-particle';
      const size = Math.random() * 4 + 2;
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        bottom: ${Math.random() * 30}%;
        --dur: ${6 + Math.random() * 10}s;
        --delay: ${Math.random() * 8}s;
        opacity: 0;
      `;
      hero.appendChild(p);
    }
  }

  /* ── Team selector buttons ─────────────────────────────── */
  const cfAccessKey = document.getElementById('cf-access-key');
  const teamBtns  = document.querySelectorAll('.cf-team-btn');

  teamBtns.forEach(function(btn) {
    btn.addEventListener('click', function () {
      // Remove active from all, set on clicked
      teamBtns.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');

      // Update hidden `access_key` field → directs Web3Forms recipient
      if (cfAccessKey) cfAccessKey.value = this.dataset.key || '';
    });
  });

  /* ── Form submit → show toast ──────────────────────────── */
  const form   = document.getElementById('contactForm');
  const toast  = document.getElementById('cToast');
  const btn    = document.getElementById('submitBtn');

  if (form && toast) {
    form.addEventListener('submit', function (e) {
      // Intercept and send via AJAX to Web3Forms
      e.preventDefault();
      
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      // Disable button while sending
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>Sending…</span>';
      btn.disabled = true;

      fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: json
      })
      .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
              showToast('Mesajınız başarıyla gönderildi! / Message sent successfully!', true);
              form.reset();
          } else {
              console.log(response);
              showToast(json.message || 'Bir hata oluştu. / An error occurred.', false);
          }
      })
      .catch(error => {
          console.log(error);
          showToast('Bir hata oluştu. / An error occurred.', false);
      })
      .finally(() => {
          // Restore button
          btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i><span data-i18n="contact_btn_send">Send Message</span>';
          btn.disabled = false;
      });
    });
  }

  function showToast(msg, success) {
    const icon = toast.querySelector('i');
    const text = toast.querySelector('span');
    if (icon) icon.className = success
      ? 'fa-solid fa-circle-check'
      : 'fa-solid fa-circle-xmark';
    if (text) text.textContent = msg;

    if (success) {
      toast.style.borderColor = '#4cff69';
      toast.style.color       = '#4cff69';
    } else {
      toast.style.borderColor = '#ff4d4d';
      toast.style.color       = '#ff4d4d';
    }

    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }

  /* ── Input float-label glow ───────────────────────────── */
  document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => {
    el.addEventListener('focus', () => {
      el.closest('.form-group')?.querySelector('label')?.style
        && (el.closest('.form-group').querySelector('label').style.textShadow =
          '0 0 8px rgba(255,77,77,0.7)');
    });
    el.addEventListener('blur', () => {
      el.closest('.form-group')?.querySelector('label')?.style
        && (el.closest('.form-group').querySelector('label').style.textShadow = '');
    });
  });

})();
