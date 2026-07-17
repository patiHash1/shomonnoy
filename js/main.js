/* =========================================================
   I18N APPLICATION
   All copy lives in window.I18N (see l10n/en.js). This block
   resolves dot-path keys (e.g. "hero.lead") against it and
   writes the result into any element carrying a matching
   data-i18n* attribute.
   ========================================================= */
function t(path){
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, window.I18N);
}

function applyI18n(){
  if (!window.I18N) return;

  if (I18N.meta){
    document.title = I18N.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', I18N.meta.description);
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t(el.getAttribute('data-i18n-html'));
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t(el.getAttribute('data-i18n-placeholder'));
    if (val !== undefined) el.setAttribute('placeholder', val);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const val = t(el.getAttribute('data-i18n-aria-label'));
    if (val !== undefined) el.setAttribute('aria-label', val);
  });
}
applyI18n();

/* =========================================================
   RENDER FUNCTIONS
   Content feeds (updates, gallery, resources, messages) and
   the stats strip / role dropdown are rendered from I18N
   rather than hard-coded in the HTML.
   ========================================================= */
function renderStats(list){
  const grid = document.getElementById('statsGrid');
  if (!grid || !list) return;
  grid.innerHTML = list.map(s => `
    <div class="stat"><b>${s.value}</b><span>${s.label}</span></div>`).join('');
}

function renderUpdates(list, append=false){
  const feed = document.getElementById('updatesFeed');
  const html = list.map(u => `
    <article class="update-card">
      <div class="update-date">${u.date}</div>
      <div>
        <span class="update-tag tag-${u.tag}">${u.tagLabel}</span>
        <h4>${u.title}</h4>
        <p>${u.desc}</p>
      </div>
      <i data-lucide="arrow-right" class="update-arrow"></i>
    </article>`).join('');
  feed.insertAdjacentHTML(append ? 'beforeend' : 'afterbegin', html);
}

function renderGallery(list){
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = list.map(g => `
    <div class="gallery-card">
      <div class="gallery-media" style="background:${g.grad}">
        <div class="gallery-anim">
          <span class="gallery-anim-ring"></span>
          <i data-lucide="${g.icon}" class="gallery-anim-icon"></i>
          <span class="gallery-anim-dot gallery-anim-dot-a"></span>
          <span class="gallery-anim-dot gallery-anim-dot-b"></span>
        </div>
      </div>
      <div class="gallery-body">
        <span class="gallery-cat">${g.cat}</span>
        <h4>${g.title}</h4>
      </div>
    </div>`).join('');
}

function renderResources(list, downloadLabel){
  const grid = document.getElementById('resourceGrid');
  grid.innerHTML = list.map(r => `
    <div class="resource-card">
      <div class="resource-thumb" style="background:${r.grad}">
        <div class="resource-anim">
          <svg class="resource-anim-book" viewBox="0 0 100 130" fill="none" aria-hidden="true">
            <rect x="14" y="10" width="66" height="94" rx="6" fill="rgba(255,255,255,0.4)" transform="rotate(-6 47 57)"/>
            <rect x="18" y="8" width="66" height="94" rx="6" fill="rgba(255,255,255,0.75)" transform="rotate(3 51 55)"/>
            <rect x="16" y="12" width="68" height="96" rx="7" fill="#FFFFFF"/>
            <path d="M84 92 L84 108 L68 108 Z" fill="rgba(20,35,56,0.09)"/>
            <rect x="28" y="34" width="44" height="5" rx="2.5" fill="rgba(20,35,56,0.09)"/>
            <rect x="28" y="46" width="34" height="5" rx="2.5" fill="rgba(20,35,56,0.09)"/>
            <rect x="28" y="58" width="38" height="5" rx="2.5" fill="rgba(20,35,56,0.09)"/>
            <path class="resource-anim-ribbon" d="M58 12 L72 12 L72 34 L65 27 L58 34 Z" fill="#142338"/>
          </svg>
          <div class="resource-anim-badge"><i data-lucide="${r.icon}"></i></div>
          <i data-lucide="sparkle" class="resource-anim-sparkle resource-anim-sparkle-a"></i>
          <i data-lucide="sparkle" class="resource-anim-sparkle resource-anim-sparkle-b"></i>
        </div>
      </div>
      <h4>${r.title}</h4>
      <p>${r.desc}</p>
      <div class="resource-meta"><span>${r.size}</span></div>
      <a href="#" class="resource-download" download><i data-lucide="download"></i> ${downloadLabel}</a>
    </div>`).join('');
}

function renderMessages(list){
  const grid = document.getElementById('messagesGrid');
  if (!grid || !list) return;
  grid.innerHTML = list.map(m => `
    <div class="message-card reveal">
      <i class="quote-mark" data-lucide="quote"></i>
      <p class="quote${m.lang === 'bn' ? ' lang-bn' : ''}">"${m.quote}"</p>
      ${m.translation ? `<p class="quote-translation">${m.translation}</p>` : ''}
      <div class="message-person">
        <div class="avatar" style="background:${m.avatarColor}">${m.initials}</div>
        <div>
          <b>${m.name}</b>
          <span>${m.role}</span>
        </div>
      </div>
    </div>`).join('');
}

function renderRoleOptions(select, optionsObj, selectedKey){
  if (!select || !optionsObj) return;
  select.innerHTML = Object.keys(optionsObj).map(key =>
    `<option value="${key}"${key === selectedKey ? ' selected' : ''}>${optionsObj[key]}</option>`).join('');
}

const I18N_UPDATES = (window.I18N && I18N.updates && I18N.updates.items) || [];
const I18N_GALLERY = (window.I18N && I18N.network && I18N.network.items) || [];
const I18N_RESOURCES = (window.I18N && I18N.ebooks && I18N.ebooks.items) || [];

if (window.I18N && I18N.stats){
  renderStats(Object.values(I18N.stats));
}
renderMessages(window.I18N && I18N.messages && I18N.messages.quotes);
renderRoleOptions(document.getElementById('role'), window.I18N && I18N.contact && I18N.contact.form.role.options, 'parent');

/* Initial render: show first 3 updates, load rest on demand */
const INITIAL_COUNT = 3;
renderUpdates(I18N_UPDATES.slice(0, INITIAL_COUNT));
renderGallery(I18N_GALLERY);
renderResources(I18N_RESOURCES, (window.I18N && I18N.ebooks && I18N.ebooks.downloadLabel) || 'Download');

const loadMoreBtn = document.getElementById('loadMoreBtn');
let shown = INITIAL_COUNT;
loadMoreBtn.addEventListener('click', () => {
  const next = I18N_UPDATES.slice(shown, shown + 3);
  renderUpdates(next, true);
  shown += next.length;
  if (shown >= I18N_UPDATES.length) loadMoreBtn.style.display = 'none';
  if (window.lucide) lucide.createIcons();
});
if (I18N_UPDATES.length <= INITIAL_COUNT) loadMoreBtn.style.display = 'none';

/* =========================================================
   NAV: scroll shadow + mobile menu
   ========================================================= */
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', window.scrollY > 30);
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.nav-link-item, .nav-cta').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

/* =========================================================
   Interactive balance-scale beam tilt
   ========================================================= */
const stage = document.getElementById('balanceStage');
const beam = document.getElementById('beam');
if (stage && beam){
  stage.addEventListener('pointermove', (e) => {
    const rect = stage.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width; // 0 - 1
    const tilt = (relX - 0.5) * 14; // clamp-ish range
    beam.style.transform = `rotate(${tilt}deg)`;
  });
  stage.addEventListener('pointerleave', () => {
    beam.style.transform = 'rotate(0deg)';
  });
}

/* =========================================================
   Reveal-on-scroll
   ========================================================= */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

/* =========================================================
   Contact form (front-end placeholder)
   ========================================================= */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formSuccess.classList.add('show');
  contactForm.reset();
  setTimeout(() => formSuccess.classList.remove('show'), 5000);
});

/* Init icons */
document.addEventListener('DOMContentLoaded', () => { if (window.lucide) lucide.createIcons(); });
window.addEventListener('load', () => { if (window.lucide) lucide.createIcons(); });
