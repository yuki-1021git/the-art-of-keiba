// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const spNav = document.getElementById('spNav');

if (hamburger && spNav) {
  hamburger.addEventListener('click', () => {
    spNav.classList.toggle('open');
  });
  document.querySelectorAll('.sp-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      spNav.classList.remove('open');
    });
  });
}

// スクロールアニメーション
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// フォーム送信（デモ用）
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('お問い合わせを受け付けました。\nご連絡いただきありがとうございます。');
    form.reset();
  });
}
