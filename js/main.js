/* =========================================================
   I18N APPLICATION
   All copy lives in window.I18N_EN (en.js) and window.I18N_BN (bn.js).
   This block initializes the correct bundle and resolves dot-path keys.
   ========================================================= */

// Initialize active language bundle
const savedLang = localStorage.getItem('shomonnoy_lang') || 'en';
document.documentElement.setAttribute('lang', savedLang);
window.I18N = (savedLang === 'bn' && window.I18N_BN) ? window.I18N_BN : window.I18N_EN;

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

// Global Switch Language Action
window.switchLanguage = function(lang) {
  localStorage.setItem('shomonnoy_lang', lang);
  document.documentElement.setAttribute('lang', lang);
  window.I18N = (lang === 'bn') ? window.I18N_BN : window.I18N_EN;

  // Toggle active class on navigation toggle indicators
  const btnEN = document.getElementById('langEN');
  const btnBN = document.getElementById('langBN');
  if (btnEN && btnBN) {
    if (lang === 'bn') {
      btnEN.classList.remove('active');
      btnBN.classList.add('active');
    } else {
      btnEN.classList.add('active');
      btnBN.classList.remove('active');
    }
  }

  // Re-translate all elements
  applyI18n();

  // Re-render components
  const statsList = window.I18N.stats ? Object.values(window.I18N.stats) : [];
  renderStats(statsList);
  renderMessages(window.I18N.messages && window.I18N.messages.quotes);
  
  // Re-render updates feed
  shown = INITIAL_COUNT;
  const updatesFeed = document.getElementById('updatesFeed');
  if (updatesFeed) updatesFeed.innerHTML = '';
  const updatesList = (window.I18N.updates && window.I18N.updates.items) || [];
  renderUpdates(updatesList.slice(0, INITIAL_COUNT));
  
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    if (updatesList.length <= INITIAL_COUNT) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'inline-flex';
    }
  }

  // Re-render network gallery
  const galleryList = (window.I18N.network && window.I18N.network.items) || [];
  renderGallery(galleryList);

  // Re-render ebooks resources
  const resourcesList = (window.I18N.ebooks && window.I18N.ebooks.items) || [];
  renderResources(resourcesList, (window.I18N.ebooks && window.I18N.ebooks.downloadLabel) || 'Download');

  // Re-render role options dropdown
  const roleSelect = document.getElementById('role');
  if (roleSelect && window.I18N.contact && window.I18N.contact.form.role.options) {
    const currentVal = roleSelect.value;
    renderRoleOptions(roleSelect, window.I18N.contact.form.role.options, currentVal);
  }

  // Initialize icons
  if (window.lucide) lucide.createIcons();
};

/* =========================================================
   RENDER FUNCTIONS
   ========================================================= */
function renderStats(list){
  const grid = document.getElementById('statsGrid');
  if (!grid || !list) return;
  grid.innerHTML = list.map(s => `
    <div class="stat"><b>${s.value}</b><span>${s.label}</span></div>`).join('');
}

function renderUpdates(list, append=false){
  const feed = document.getElementById('updatesFeed');
  if (!feed) return;
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
  if (!grid || !list) return;
  
  grid.innerHTML = list.map((g, idx) => {
    let svgContent = '';
    if (idx === 0) {
      // Digital Wellbeing 101 session: presentation laptop scale
      svgContent = `
        <svg class="gallery-svg-laptop" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 86 L100 86 L106 94 L14 94 Z" fill="#142338" stroke="#142338" stroke-width="2" stroke-linejoin="round" />
          <rect x="28" y="26" width="64" height="48" rx="4" fill="#E7F1FA" stroke="#142338" stroke-width="3" />
          <line x1="28" y1="68" x2="92" y2="68" stroke="#142338" stroke-width="1.5" />
          <g class="svg-laptop-beam">
            <line x1="42" y1="44" x2="78" y2="44" stroke="#F4A340" stroke-width="2" stroke-linecap="round" />
            <circle cx="60" cy="44" r="3" fill="#142338" />
            <line x1="46" y1="44" x2="46" y2="54" stroke="#223349" stroke-width="1" />
            <path d="M40 54 L52 54" stroke="#223349" stroke-width="2" stroke-linecap="round" />
            <rect x="42" y="47" width="8" height="7" rx="1.5" fill="#3B82C4" />
            <line x1="74" y1="44" x2="74" y2="54" stroke="#223349" stroke-width="1" />
            <path d="M68 54 L80 54" stroke="#223349" stroke-width="2" stroke-linecap="round" />
            <circle cx="74" cy="50" r="4.5" fill="#45B996" />
          </g>
          <rect x="56" y="74" width="8" height="12" fill="#142338" />
        </svg>
      `;
    } else if (idx === 1) {
      // Screen-Free Saturday photo wall: camera flash
      svgContent = `
        <svg class="gallery-svg-camera" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="22" y="38" width="76" height="52" rx="8" fill="#45B996" stroke="#1F7A5C" stroke-width="3" />
          <rect x="74" y="26" width="16" height="12" rx="3" fill="#1F7A5C" />
          <circle cx="60" cy="64" r="22" fill="#E1F5EE" stroke="#1F7A5C" stroke-width="3" />
          <circle class="svg-camera-lens" cx="60" cy="64" r="14" fill="#142338" />
          <circle cx="56" cy="60" r="4" fill="#FFFFFF" opacity="0.8" />
          <circle class="svg-camera-flash" cx="82" cy="18" r="14" fill="#F4A340" opacity="0.7" />
          <rect x="36" y="90" width="48" height="6" rx="1" fill="#FFFFFF" stroke="#1F7A5C" stroke-width="1.5" />
        </svg>
      `;
    } else if (idx === 2) {
      // MoU signing: contract scroll
      svgContent = `
        <svg class="gallery-svg-contract" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 18 L86 18 C90 18 94 22 94 26 L94 92 C94 96 90 100 86 100 L26 100 C22 100 18 96 18 92 L18 26 C18 22 22 18 26 18 Z" fill="#FBFCFE" stroke="#C97A1E" stroke-width="3" />
          <line x1="32" y1="36" x2="82" y2="36" stroke="#FDEEDA" stroke-width="4" stroke-linecap="round" />
          <line x1="32" y1="48" x2="82" y2="48" stroke="#FDEEDA" stroke-width="4" stroke-linecap="round" />
          <line x1="32" y1="60" x2="68" y2="60" stroke="#FDEEDA" stroke-width="4" stroke-linecap="round" />
          <line x1="32" y1="72" x2="52" y2="72" stroke="#FDEEDA" stroke-width="4" stroke-linecap="round" />
          <circle cx="56" cy="84" r="10" fill="#F4A340" />
          <polygon points="56,76 60,82 66,82 61,86 63,92 56,88 49,92 51,86 46,82 52,82" fill="#FFFFFF" />
          <g class="svg-contract-pen">
            <path d="M84 48 Q94 24 102 12 Q90 18 80 34 Z" fill="#3B82C4" stroke="#245A85" stroke-width="1.5" />
            <line x1="80" y1="34" x2="74" y2="44" stroke="#245A85" stroke-width="3.5" stroke-linecap="round" />
          </g>
        </svg>
      `;
    } else if (idx === 3) {
      // Hobby swap-meet: painter's palette
      svgContent = `
        <svg class="gallery-svg-palette" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 25 C60 10, 100 20, 100 50 C100 80, 85 96, 65 96 C50 96, 46 84, 34 84 C22 84, 14 90, 14 74 C14 55, 10 35, 30 25 Z" fill="#FBFCFE" stroke="#45B996" stroke-width="3.5" stroke-linejoin="round" />
          <circle cx="28" cy="70" r="7" fill="#E1F5EE" stroke="#45B996" stroke-width="2" />
          <circle cx="42" cy="38" r="9" fill="#3B82C4" />
          <circle cx="68" cy="32" r="9" fill="#F4A340" />
          <circle cx="86" cy="48" r="9" fill="#45B996" />
          <circle cx="82" cy="74" r="9" fill="#E7F1FA" />
          <g class="svg-palette-brush">
            <line x1="88" y1="28" x2="36" y2="88" stroke="#C97A1E" stroke-width="3.5" stroke-linecap="round" />
            <line x1="88" y1="28" x2="92" y2="24" stroke="#B9C6D6" stroke-width="4.5" />
            <path d="M92 24 L98 16 L94 14 L88 22 Z" fill="#F4A340" />
          </g>
        </svg>
      `;
    } else if (idx === 4) {
      // Balance Pledge wall: smiling heart with stars
      svgContent = `
        <svg class="gallery-svg-pledge" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="48" fill="#E1F5EE" stroke="#45B996" stroke-dasharray="6,4" stroke-width="2" />
          <path class="svg-pledge-heart" d="M60 84 C56 80 28 62 28 44 C28 32 38 22 50 22 C56 22 60 26 60 26 C60 26 64 22 70 22 C82 22 92 32 92 44 C92 62 64 80 60 84 Z" fill="#45B996" stroke="#1F7A5C" stroke-width="3" />
          <circle cx="48" cy="42" r="2.5" fill="#FFFFFF" />
          <circle cx="72" cy="42" r="2.5" fill="#FFFFFF" />
          <path d="M52 54 Q60 60 68 54" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
          <path class="svg-pledge-star1" d="M22 28 L24 33 L29 34 L25 38 L26 43 L22 40 L18 43 L19 38 L15 34 L20 33 Z" fill="#F4A340" />
          <path class="svg-pledge-star2" d="M96 82 L98 87 L103 88 L99 92 L100 97 L96 94 L92 97 L93 92 L89 88 L94 87 Z" fill="#F4A340" />
        </svg>
      `;
    } else {
      // Storytelling: open book with campfire
      svgContent = `
        <svg class="gallery-svg-story" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 84 Q60 92 60 92 Q60 92 106 84" stroke="#C97A1E" stroke-width="3" fill="none" />
          <path d="M14 84 L14 50 Q60 60 60 60 Q60 60 106 50 L106 84 Q60 92 60 92 Q60 92 14 84 Z" fill="#FBFCFE" stroke="#C97A1E" stroke-width="2" />
          <line x1="42" y1="78" x2="78" y2="70" stroke="#9A5B0E" stroke-width="4.5" stroke-linecap="round" />
          <line x1="44" y1="68" x2="76" y2="78" stroke="#9A5B0E" stroke-width="4.5" stroke-linecap="round" />
          <path class="svg-story-flame1" d="M46 68 Q54 44 54 44 Q56 56 62 56 Q62 56 68 46 Q64 68 46 68 Z" fill="#F4A340" />
          <path class="svg-story-flame2" d="M52 68 Q58 36 58 36 Q64 48 68 48 Q72 58 72 58 Q66 68 52 68 Z" fill="#F4A340" opacity="0.3" />
          <path class="svg-story-flame3" d="M52 68 Q58 50 58 50 Q60 56 64 56 Q62 68 52 68 Z" fill="#FFFFFF" opacity="0.85" />
          <circle class="svg-story-spark svg-story-spark1" cx="38" cy="40" r="2.5" fill="#F4A340" />
          <circle class="svg-story-spark svg-story-spark2" cx="72" cy="30" r="2" fill="#F4A340" />
        </svg>
      `;
    }
    return `
      <div class="gallery-card">
        <div class="gallery-media" style="background:${g.grad}">
          ${svgContent}
        </div>
        <div class="gallery-body">
          <span class="gallery-cat">${g.cat}</span>
          <h4>${g.title}</h4>
        </div>
      </div>`;
  }).join('');
}

function renderResources(list, downloadLabel){
  const grid = document.getElementById('resourceGrid');
  if (!grid || !list) return;

  grid.innerHTML = list.map((r, index) => {
    let svgContent = '';
    if (index === 0) {
      // Guidebook: openable book with sparkles
      svgContent = `
        <svg class="resource-svg-guide" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="22" width="68" height="84" rx="6" fill="#D2E2F0" transform="rotate(-3 59 64)" />
          <rect x="23" y="20" width="70" height="86" rx="6" fill="#EBF3FA" transform="rotate(2 58 63)" />
          <rect x="20" y="16" width="72" height="88" rx="6" fill="#FFFFFF" stroke="#245A85" stroke-width="2.5" />
          <line x1="28" y1="32" x2="84" y2="32" stroke="#B2CEE6" stroke-width="3" stroke-linecap="round" />
          <line x1="28" y1="44" x2="74" y2="44" stroke="#B2CEE6" stroke-width="3" stroke-linecap="round" />
          <line x1="28" y1="56" x2="80" y2="56" stroke="#B2CEE6" stroke-width="3" stroke-linecap="round" />
          <line x1="28" y1="68" x2="68" y2="68" stroke="#B2CEE6" stroke-width="3" stroke-linecap="round" />
          <g class="svg-guide-cover">
            <rect x="16" y="14" width="74" height="92" rx="7" fill="#3B82C4" stroke="#245A85" stroke-width="2.5" />
            <rect x="24" y="24" width="58" height="72" rx="4" fill="#245A85" />
            <path d="M42 50 L53 61 L74 40" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="20" y1="20" x2="20" y2="100" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
          </g>
          <path d="M72 14 L82 14 L82 38 L77 33 L72 38 Z" fill="#F4A340" />
          <g class="svg-guide-sparkle">
            <path d="M102 24 L105 27 L102 30 L99 27 Z" fill="#F4A340" />
            <path d="M88 12 L90 14 L88 16 L86 14 Z" fill="#45B996" />
          </g>
        </svg>
      `;
    } else if (index === 1) {
      // Parent Quick Reference: Clock & conversation bubbles
      svgContent = `
        <svg class="resource-svg-parent" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="68" r="32" fill="#E1F5EE" stroke="#1F7A5C" stroke-width="3" />
          <line x1="60" y1="40" x2="60" y2="44" stroke="#1F7A5C" stroke-width="2.5" stroke-linecap="round" />
          <line x1="60" y1="92" x2="60" y2="96" stroke="#1F7A5C" stroke-width="2.5" stroke-linecap="round" />
          <line x1="32" y1="68" x2="36" y2="68" stroke="#1F7A5C" stroke-width="2.5" stroke-linecap="round" />
          <line x1="84" y1="68" x2="88" y2="68" stroke="#1F7A5C" stroke-width="2.5" stroke-linecap="round" />
          <g class="svg-parent-hand">
            <line x1="60" y1="68" x2="60" y2="48" stroke="#142338" stroke-width="3" stroke-linecap="round" />
            <line x1="60" y1="68" x2="74" y2="68" stroke="#142338" stroke-width="3" stroke-linecap="round" />
            <circle cx="60" cy="68" r="4" fill="#142338" />
          </g>
          <g class="svg-parent-bubble1">
            <rect x="18" y="16" width="34" height="22" rx="6" fill="#FDEEDA" stroke="#F4A340" stroke-width="2" />
            <path d="M26 38 L30 43 L32 38 Z" fill="#FDEEDA" stroke="#F4A340" stroke-width="2" />
            <path d="M27 37 L30 41 L32 37 Z" fill="#FDEEDA" />
            <line x1="24" y1="23" x2="46" y2="23" stroke="#9A5B0E" stroke-width="2" stroke-linecap="round" />
            <line x1="24" y1="29" x2="38" y2="29" stroke="#9A5B0E" stroke-width="2" stroke-linecap="round" />
          </g>
          <g class="svg-parent-bubble2">
            <rect x="68" y="12" width="34" height="22" rx="6" fill="#E7F1FA" stroke="#3B82C4" stroke-width="2" />
            <path d="M94 34 L90 39 L88 34 Z" fill="#E7F1FA" stroke="#3B82C4" stroke-width="2" />
            <path d="M93 33 L90 37 L88 33 Z" fill="#E7F1FA" />
            <line x1="74" y1="19" x2="96" y2="19" stroke="#245A85" stroke-width="2" stroke-linecap="round" />
            <line x1="74" y1="25" x2="88" y2="25" stroke="#245A85" stroke-width="2" stroke-linecap="round" />
          </g>
          <path d="M60 74 C58 72 55 70 55 67 C55 65.5 56.5 64 58.5 64 C59.7 64 60.5 65 60 66 C59.5 65 60.3 64 61.5 64 C63.5 64 65 65.5 65 67 C65 70 62 72 60 74 Z" fill="#45B996" />
        </svg>
      `;
    } else {
      // Activity Pack: clipboard with sliding shapes and checklist
      svgContent = `
        <svg class="resource-svg-activity" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="22" y="18" width="76" height="92" rx="8" fill="#FDEEDA" stroke="#F4A340" stroke-width="3" />
          <rect x="30" y="28" width="60" height="74" rx="4" fill="#FFFFFF" stroke="#B9C6D6" stroke-width="1.5" />
          <rect x="46" y="10" width="28" height="12" rx="3" fill="#B9C6D6" stroke="#223349" stroke-width="2" />
          <circle cx="60" cy="16" r="3" fill="#223349" />
          <circle cx="42" cy="46" r="6" fill="#E1F5EE" stroke="#45B996" stroke-width="1.5" />
          <path class="svg-activity-check1" d="M39 46 L41 48 L46 43" stroke="#1F7A5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <line x1="54" y1="46" x2="82" y2="46" stroke="#223349" stroke-width="2" stroke-linecap="round" />
          <circle cx="42" cy="62" r="6" fill="#E1F5EE" stroke="#45B996" stroke-width="1.5" />
          <path class="svg-activity-check2" d="M39 62 L41 64 L46 59" stroke="#1F7A5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <line x1="54" y1="62" x2="82" y2="62" stroke="#223349" stroke-width="2" stroke-linecap="round" />
          <g class="svg-activity-piece1">
            <rect x="32" y="80" width="16" height="16" rx="3" fill="#3B82C4" />
            <circle cx="40" cy="80" r="3" fill="#3B82C4" />
          </g>
          <g class="svg-activity-piece2">
            <rect x="68" y="78" width="16" height="16" rx="3" fill="#45B996" />
            <circle cx="68" cy="86" r="3" fill="#45B996" />
          </g>
          <path d="M 96 36 L 98 42 L 104 43 L 99 47 L 101 53 L 96 50 L 91 53 L 93 47 L 88 43 L 94 42 Z" fill="#F4A340" />
        </svg>
      `;
    }
    return `
      <div class="resource-card">
        <div class="resource-thumb" style="background:${r.grad}">
          <div class="resource-anim">
            ${svgContent}
            <div class="resource-anim-badge"><i data-lucide="${r.icon}"></i></div>
          </div>
        </div>
        <h4>${r.title}</h4>
        <p>${r.desc}</p>
        <div class="resource-meta"><span>${r.size}</span></div>
        <a href="#" class="resource-download" download><i data-lucide="download"></i> ${downloadLabel}</a>
      </div>`;
  }).join('');
}

function renderMessages(list){
  const grid = document.getElementById('messagesGrid');
  if (!grid || !list) return;
  grid.innerHTML = list.map(m => `
    <div class="message-card">
      <i class="quote-mark" data-lucide="quote"></i>
      <p class="quote${m.lang === 'bn' ? ' lang-bn' : ''}">${m.quote}</p>
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

/* =========================================================
   INITIAL DATA RENDER
   ========================================================= */
const INITIAL_COUNT = 3;
let shown = INITIAL_COUNT;

// Initial render calls
applyI18n();

if (window.I18N && window.I18N.stats){
  renderStats(Object.values(window.I18N.stats));
}
renderMessages(window.I18N && window.I18N.messages && window.I18N.messages.quotes);
renderRoleOptions(document.getElementById('role'), window.I18N && window.I18N.contact && window.I18N.contact.form.role.options, 'parent');

const activeUpdates = (window.I18N && window.I18N.updates && window.I18N.updates.items) || [];
renderUpdates(activeUpdates.slice(0, INITIAL_COUNT));

const activeGallery = (window.I18N && window.I18N.network && window.I18N.network.items) || [];
renderGallery(activeGallery);

const activeResources = (window.I18N && window.I18N.ebooks && window.I18N.ebooks.items) || [];
renderResources(activeResources, (window.I18N && window.I18N.ebooks && window.I18N.ebooks.downloadLabel) || 'Download');

// Load More handler
const loadMoreBtn = document.getElementById('loadMoreBtn');
loadMoreBtn.addEventListener('click', () => {
  const currentUpdates = (window.I18N && window.I18N.updates && window.I18N.updates.items) || [];
  const next = currentUpdates.slice(shown, shown + 3);
  renderUpdates(next, true);
  shown += next.length;
  if (shown >= currentUpdates.length) loadMoreBtn.style.display = 'none';
  if (window.lucide) lucide.createIcons();
});

if (activeUpdates.length <= INITIAL_COUNT) loadMoreBtn.style.display = 'none';

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
   Interactive balance-scale beam tilt (Hero section)
   ========================================================= */
const stage = document.getElementById('balanceStage');
const beam = document.getElementById('beam');
if (stage && beam){
  stage.addEventListener('pointermove', (e) => {
    const rect = stage.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width; // 0 - 1
    const tilt = (relX - 0.5) * 14;
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
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  
  // Set default language state in toggle buttons on load
  const currentLang = localStorage.getItem('shomonnoy_lang') || 'en';
  const btnEN = document.getElementById('langEN');
  const btnBN = document.getElementById('langBN');
  if (btnEN && btnBN) {
    if (currentLang === 'bn') {
      btnEN.classList.remove('active');
      btnBN.classList.add('active');
    } else {
      btnEN.classList.add('active');
      btnBN.classList.remove('active');
    }
  }
});
window.addEventListener('load', () => { if (window.lucide) lucide.createIcons(); });
