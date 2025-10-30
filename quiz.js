/* quiz.js - personality-based "Find Your Ideal Indian Destination" quiz
  - Pure JS, Bootstrap 5
  - Creates 5 questions, computes majority-based result
  - Share via navigator.share() or clipboard fallback
  - Restart resets the quiz state
  NOTE: wrapped in an IIFE to avoid colliding with site-wide globals (e.g. QUIZ_QUESTIONS in data.js)
*/

(function(){

// Scoped quiz data to avoid global collisions
const QUIZ_QUESTIONS = [
  {
    id: 1,
    q: 'What type of weather do you prefer?',
    options: [
      { id: 'mountain', text: 'Cool mountains and crisp air' },
      { id: 'beach', text: 'Warm sunny beaches' },
      { id: 'forest', text: 'Misty forests and backwaters' },
      { id: 'desert', text: 'Dry desert heat and wide skies' }
    ]
  },
  {
    id: 2,
    q: 'How long is your ideal trip?',
    options: [
      { id: 'weekend', text: 'Quick weekend getaway' },
      { id: 'oneweek', text: '1 week' },
      { id: 'twoweeks', text: '2+ weeks' },
      { id: 'leisure', text: 'As long as it takes to relax' }
    ]
  },
  {
    id: 3,
    q: 'What vibe are you after?',
    options: [
      { id: 'adventure', text: 'Adventure & outdoor activities' },
      { id: 'relax', text: 'Relaxation & slow pace' },
      { id: 'spiritual', text: 'Spiritual / wellness' },
      { id: 'heritage', text: 'Heritage & architecture' }
    ]
  },
  {
    id: 4,
    q: 'What’s your “wow” factor?',
    options: [
      { id: 'nature', text: 'Breathtaking nature' },
      { id: 'food', text: 'Incredible food & cuisine' },
      { id: 'culture', text: 'Vibrant culture & festivals' },
      { id: 'nightlife', text: 'Lively nightlife' }
    ]
  },
  {
    id: 5,
    q: 'Who do you love traveling with?',
    options: [
      { id: 'solo', text: 'Solo — freedom to roam' },
      { id: 'friends', text: 'Friends — group fun' },
      { id: 'family', text: 'Family — kid-friendly' },
      { id: 'partner', text: 'Partner — romantic escape' }
    ]
  }
];

// Map combinations / keys to destinations
const RESULTS_MAP = {
  mountain: {
    title: 'Adventure Seeker',
    destination: 'Ladakh',
    description: 'You love high passes, dramatic landscapes and adventure. Ladakh is calling — for epic treks, clear skies and unforgettable horizons.',
    image: 'https://images.unsplash.com/photo-1561484936-5d8d8d5f9b32?auto=format&fit=crop&w=1300&q=60'
  },
  beach: {
    title: 'Beach Lover',
    destination: 'Goa',
    description: 'Sun, sand and good vibes. Goa suits your style — relaxed beaches, lively shacks and sunsets that linger.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1300&q=60'
  },
  forest: {
    title: 'Nature & Calm',
    destination: 'Kerala',
    description: 'You appreciate slow rhythms and lush green vistas. Kerala’s backwaters, tea gardens and tranquil stays match your pace.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1300&q=60'
  },
  desert: {
    title: 'Heritage Explorer',
    destination: 'Jaipur & Rajasthan',
    description: 'Historic forts, desert skies and royal tales — Rajasthan offers a dramatic cultural experience and vibrant colors.',
    image: 'https://images.unsplash.com/photo-1541260898079-0bc5c3b2c0aa?auto=format&fit=crop&w=1300&q=60'
  },
  nightlife: {
    title: 'City Vibes',
    destination: 'Mumbai / Delhi',
    description: 'You thrive on energy and late nights. Experience buzzing streets, world-class food and vibrant city life.',
    image: 'https://images.unsplash.com/photo-1505765059605-3a8b3a6f3453?auto=format&fit=crop&w=1300&q=60'
  },
  default: {
    title: 'Explorer',
    destination: 'India',
    description: 'You love a mix of things — culture, nature and food. India has a destination for every mood.',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764b1f?auto=format&fit=crop&w=1300&q=60'
  }
};

let answers = [];
let current = 0;
const total = QUIZ_QUESTIONS.length;

// Cached DOM
const quizContent = document.getElementById('quiz-content');
const progressBar = document.getElementById('quiz-progress-bar');
const progressTextCur = document.getElementById('current-q');
const progressTextTot = document.getElementById('total-q');
const resultNode = document.getElementById('result');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');

function initQuiz(){
  // Cache DOM inside init in case script runs before DOM is fully parsed in some setups
  if(!quizContent) return;
  answers = [];
  current = 0;
  progressTextTot.textContent = total;
  restartBtn.classList.add('d-none');
  shareBtn.classList.add('d-none');
  renderQuestion(current);
}

function renderQuestion(index){
  const q = QUIZ_QUESTIONS[index];
  if(!q) return;
  progressTextCur.textContent = index + 1;
  const pct = Math.round(((index)/total) * 100);
  progressBar.style.width = pct + '%';
  progressBar.setAttribute('aria-valuenow', pct);

  // Build markup
  const wrapper = document.createElement('div');
  wrapper.className = 'question-card fade-in';
  wrapper.innerHTML = `
    <h3 class="mb-3">${escapeHtml(q.q)}</h3>
    <div class="mb-2 text-muted small">Choose the option that fits you best</div>
    <div class="mt-3" role="list">
      ${q.options.map(opt => `
        <button type="button" class="option-btn" data-key="${opt.id}" role="listitem" tabindex="0">
          <span class="option-icon me-2">${getOptionEmoji(opt.id)}</span>
          ${escapeHtml(opt.text)}
        </button>
      `).join('')}
    </div>
  `;

  // clear and insert with animation
  quizContent.innerHTML = '';
  quizContent.appendChild(wrapper);

  // add event listeners to option buttons
  const btns = wrapper.querySelectorAll('.option-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', onSelectOption);
    btn.addEventListener('keydown', (ev) => {
      if(ev.key === 'Enter' || ev.key === ' '){ ev.preventDefault(); btn.click(); }
    });
  });
}

// Small emoji mapping to make options more engaging
function getOptionEmoji(id){
  const map = {
    mountain: '🏔️', beach: '🏖️', forest: '🌿', desert: '🏜️',
    weekend: '⏱️', oneweek: '📅', twoweeks: '🧳', leisure: '🛋️',
    adventure: '🧗', relax: '🧘', spiritual: '🛕', heritage: '🏛️',
    nature: '🌲', food: '🍲', culture: '🎨', nightlife: '🌃',
    solo: '🧑', friends: '👯', family: '👪', partner: '💑'
  };
  return map[id] || '✨';
}

function onSelectOption(e){
  const key = e.currentTarget.getAttribute('data-key');
  if(!key) return;
  // visually mark
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(b => b.classList.remove('selected'));
  e.currentTarget.classList.add('selected');

  // record answer (store key)
  answers.push(key);

  // transition to next question
  const card = e.currentTarget.closest('.question-card');
  if(card){
    card.classList.add('slide-out');
    setTimeout(() => {
      current++;
      if(current >= total){
        showResult();
      } else {
        renderQuestion(current);
      }
    }, 260);
  }
}

function computeResult(){
  // Count occurrences of high-level categories mapped from option ids
  const counts = {};
  answers.forEach(a => {
    // map several option ids into broader categories
    const cat = mapToCategory(a);
    counts[cat] = (counts[cat] || 0) + 1;
  });
  // choose max
  let best = 'default';
  let bestCount = -1;
  Object.keys(counts).forEach(k => {
    if(counts[k] > bestCount){ bestCount = counts[k]; best = k; }
  });
  return best || 'default';
}

function mapToCategory(optId){
  // Map option ids to our results keys
  const mountainKeys = ['mountain','adventure','twoweeks','solo'];
  const beachKeys = ['beach','weekend','friends','nightlife'];
  const forestKeys = ['forest','leisure','relax','family'];
  const desertKeys = ['desert','heritage','oneweek','partner'];
  const nightlifeKeys = ['nightlife','food','culture'];

  if(mountainKeys.includes(optId)) return 'mountain';
  if(beachKeys.includes(optId)) return 'beach';
  if(forestKeys.includes(optId)) return 'forest';
  if(desertKeys.includes(optId)) return 'desert';
  if(nightlifeKeys.includes(optId)) return 'nightlife';
  return 'default';
}

// Try to find a matching image from the site's destination data to show a real image
function findDestinationImage(destName){
  try{
    if (typeof INDIA_DESTINATIONS === 'undefined' || !Array.isArray(INDIA_DESTINATIONS)) return null;
    const name = String(destName || '').toLowerCase();
    // split tokens by common separators to match multi-place names like "Mumbai / Delhi"
    const tokens = name.split(/[\/,&]+|\s+/).map(t => t.trim()).filter(Boolean);

    // Exact or contains match on name or state
    for(const d of INDIA_DESTINATIONS){
      const dn = String(d.name || '').toLowerCase();
      const st = String(d.state || '').toLowerCase();
      if (dn.includes(name) || st.includes(name)) return d.image;
    }

    // Token-based matching (e.g., 'Jaipur & Rajasthan' should match 'Jaipur' or 'Rajasthan')
    for(const token of tokens){
      for(const d of INDIA_DESTINATIONS){
        const dn = String(d.name || '').toLowerCase();
        const st = String(d.state || '').toLowerCase();
        if (dn.includes(token) || st.includes(token)) return d.image;
      }
    }

    return null;
  } catch (err){
    return null;
  }
}

function showResult(){
  const pct = Math.round(((total)/total) * 100);
  progressBar.style.width = pct + '%';
  progressBar.setAttribute('aria-valuenow', pct);
  progressTextCur.textContent = total;

  const key = computeResult();
  const result = RESULTS_MAP[key] || RESULTS_MAP.default;
  // Prefer site-hosted destination images when available
  const resolvedImage = findDestinationImage(result.destination) || result.image || 'assets/placeholder.svg';
  // Build a compact result card and inject it into the quiz content area (replaces questions)
  const resultHtml = `
    <div class="card result-card shadow-sm">
      <img class="result-img" src="${resolvedImage}" alt="${escapeHtml(result.destination)}">
      <div class="result-content">
        <h5 class="result-title fw-bold">You're a ${escapeHtml(result.title)}!</h5>
        <h6 class="fw-semibold mb-2 text-secondary">${escapeHtml(result.destination)}</h6>
        <p class="text-muted small mb-3">${escapeHtml(result.description)}</p>
        <div class="d-flex flex-wrap gap-2">
          <a class="btn btn-sm btn-primary" href="destination.html#${slugify(result.destination)}">Explore ${escapeHtml(result.destination)}</a>
          <button id="result-restart" class="btn btn-sm btn-outline-secondary">Retake Quiz</button>
        </div>
      </div>
    </div>
  `;

  // Replace the question area with the result card so the result appears within the quiz card
  if (quizContent) {
    quizContent.innerHTML = resultHtml;
  }

  // Show action buttons (restart/share)
  restartBtn.classList.remove('d-none');
  shareBtn.classList.remove('d-none');

  // attach restart handler to the new button inside quizContent
  const innerRestart = document.getElementById('result-restart');
  if (innerRestart) innerRestart.addEventListener('click', () => {
    // sync with outer restart button behavior
    restartQuiz();
  });
  
  // Animate result card and set image fallback
  const resultCard = quizContent.querySelector('.result-card');
  if (resultCard) resultCard.classList.add('result-appear');
  const img = quizContent.querySelector('.result-img');
  if (img) {
    img.onerror = function(){
      this.onerror = null;
      this.src = 'assets/placeholder.svg';
      this.classList.add('img-fallback');
    };
    // If browser blocked external images, fallback immediately
    if (!img.complete || img.naturalWidth === 0) {
      // allow onerror to run or set placeholder
      setTimeout(() => {
        if (img.naturalWidth === 0) {
          img.src = 'assets/placeholder.svg';
          img.classList.add('img-fallback');
        }
      }, 250);
    }
  }
}

function restartQuiz(){
  answers = [];
  current = 0;
  resultNode.classList.add('d-none');
  restartBtn.classList.add('d-none');
  shareBtn.classList.add('d-none');
  renderQuestion(0);
}

async function shareResult(){
  const key = computeResult();
  const res = RESULTS_MAP[key] || RESULTS_MAP.default;
  const shareText = `I got \"${res.title}\" — ${res.destination}! Try the "Find Your Ideal Indian Destination" quiz on Incredible India.`;
  const shareUrl = window.location.href;
  const toCopy = `${shareText} \n${shareUrl}`;

  // Keep original button content to restore later
  const originalHtml = shareBtn ? shareBtn.innerHTML : 'Share Result';

  // 1) Try native share (mobile/secure contexts)
  if (navigator.share) {
    try {
      await navigator.share({ title: `I got ${res.destination}!`, text: shareText, url: shareUrl });
      if (shareBtn) {
        shareBtn.innerHTML = '<i class="bi bi-check-lg me-2"></i>Shared!';
        setTimeout(() => { if (shareBtn) shareBtn.innerHTML = originalHtml; }, 1600);
      }
      return;
    } catch (err) {
      // user dismissed or an error occurred — fall through to clipboard fallback
      console.warn('navigator.share failed or was cancelled:', err);
    }
  }

  // 2) Try Clipboard API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(toCopy);
      if (shareBtn) {
        shareBtn.innerHTML = '<i class="bi bi-clipboard-check-fill me-2"></i>Copied!';
        setTimeout(() => { if (shareBtn) shareBtn.innerHTML = originalHtml; }, 1600);
      } else {
        alert('Result copied to clipboard');
      }
      return;
    } catch (err) {
      console.warn('Clipboard.writeText failed:', err);
      // fall through to execCommand fallback
    }
  }

  // 3) execCommand fallback (older browsers / insecure contexts)
  try {
    const textarea = document.createElement('textarea');
    textarea.value = toCopy;
    // Prevent scrolling to bottom
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    if (ok) {
      if (shareBtn) {
        shareBtn.innerHTML = '<i class="bi bi-clipboard-check-fill me-2"></i>Copied!';
        setTimeout(() => { if (shareBtn) shareBtn.innerHTML = originalHtml; }, 1600);
      } else {
        alert('Result copied to clipboard');
      }
      return;
    }
  } catch (err) {
    console.warn('execCommand copy failed:', err);
  }
  // 4) Try opening WhatsApp Web / App as a convenience for users
  try {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent || '');
    const waBase = isMobile ? 'https://wa.me/?text=' : 'https://web.whatsapp.com/send?text=';
    const waUrl = waBase + encodeURIComponent(toCopy);
    const win = window.open(waUrl, '_blank');
    if (win) {
      // Some browsers open a new tab/window for WhatsApp web
      if (shareBtn) {
        shareBtn.innerHTML = '<i class="bi bi-whatsapp me-2"></i>Opening WhatsApp';
        setTimeout(() => { if (shareBtn) shareBtn.innerHTML = originalHtml; }, 1800);
      }
      return;
    }
  } catch (err) {
    console.warn('WhatsApp open failed:', err);
  }

  // 5) Last resort: show the text in a prompt so user can manually copy
  try {
    // Some browsers block alerts/prompts in certain contexts — still best-effort
    window.prompt('Copy your quiz result (Ctrl/Cmd+C + Enter):', toCopy);
  } catch (err) {
    alert('Unable to copy/share automatically. Here is your result:\n' + toCopy);
  }
}

// Utility helpers
function escapeHtml(str){
  if(!str) return '';
  return String(str).replace(/[&<>"']/g, function (s) {
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[s];
  });
}

function slugify(s){
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
}

// Wire up buttons
restartBtn?.addEventListener('click', restartQuiz);
shareBtn?.addEventListener('click', shareResult);

// Init when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initQuiz();
});

})(); // end IIFE
