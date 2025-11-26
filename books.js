// مصفوفة الإعلانات (تنعرض + تنخزن محلياً)
let ads = [];

// عناصر من الـ DOM
const form          = document.getElementById('bookForm');
const titleInput    = document.getElementById('title');
const courseInput   = document.getElementById('course');
const typeSelect    = document.getElementById('type');
const condSelect    = document.getElementById('condition');
const statusSelect  = document.getElementById('status');
const priceInput    = document.getElementById('price');
const contactInput  = document.getElementById('contact');
const notesInput    = document.getElementById('notes');

const searchInput   = document.getElementById('search');
const filterType    = document.getElementById('filterType');
const filterCond    = document.getElementById('filterCondition');
const adsList       = document.getElementById('adsList');

// تحميل من localStorage (إن وجد)
function loadAds() {
  const saved = localStorage.getItem('unihelper_books');
  if (saved) {
    try {
      ads = JSON.parse(saved);
    } catch {
      ads = [];
    }
  }
  renderAds();
}

function saveAds() {
  localStorage.setItem('unihelper_books', JSON.stringify(ads));
}

// إنشاء عنصر إعلان من النموذج
function createAdFromForm() {
  const title   = titleInput.value.trim();
  const course  = courseInput.value.trim();
  const type    = typeSelect.value;
  const cond    = condSelect.value;
  const status  = statusSelect.value;
  const price   = priceInput.value.trim();
  const contact = contactInput.value.trim();
  const notes   = notesInput.value.trim();

  // تحقق بسيط
  if (!title || !type || !cond || !status || !contact) {
    alert('عبّي الحقول الأساسية (الاسم، النوع، الحالة، الغرض، التواصل)');
    return null;
  }

  return {
    id: Date.now(),
    title,
    course,
    type,
    condition: cond,
    status,
    price: price ? Number(price) : null,
    contact,
    notes
  };
}

// عرض الإعلانات
function renderAds() {
  const q      = searchInput.value.trim().toLowerCase();
  const fType  = filterType.value;
  const fCond  = filterCond.value;

  const filtered = ads.filter(ad => {
    const matchesSearch =
      !q ||
      ad.title.toLowerCase().includes(q) ||
      (ad.course && ad.course.toLowerCase().includes(q));

    const matchesType = !fType || ad.type === fType;
    const matchesCond = !fCond || ad.condition === fCond;

    return matchesSearch && matchesType && matchesCond;
  });

  adsList.innerHTML = '';

  if (filtered.length === 0) {
    adsList.innerHTML = '<p style="color:#777;font-size:.9rem;">لا توجد إعلانات مطابقة حاليًا.</p>';
    return;
  }

  filtered.forEach(ad => {
    const card = document.createElement('div');
    card.className = 'ad-card';
    card.dataset.id = ad.id;

    card.innerHTML = `
      <div class="ad-header">
        <div>
          <h3 class="ad-title">${ad.title}</h3>
          <div class="ad-course">${ad.course || ''}</div>
        </div>
      </div>

      <div class="tags">
        <span class="tag">${ad.type}</span>
        <span class="tag">${ad.condition}</span>
        <span class="tag status-${ad.status}">${ad.status}</span>
        ${ad.price !== null ? `<span class="tag">${ad.price} ريال</span>` : ''}
      </div>

      ${ad.notes ? `<div class="ad-notes">${ad.notes}</div>` : ''}

      <div class="ad-footer">
        <span class="ad-contact">تواصل: ${ad.contact}</span>
        <button class="btn btn-danger" data-action="delete">حذف</button>
      </div>
    `;

    adsList.appendChild(card);
  });
}

// حدث إرسال النموذج
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const ad = createAdFromForm();
  if (!ad) return;

  ads.unshift(ad);         // نضيفه في البداية
  saveAds();
  renderAds();
  form.reset();
});

// فلترة حيّة
searchInput.addEventListener('input', renderAds);
filterType.addEventListener('change', renderAds);
filterCond.addEventListener('change', renderAds);

// حذف إعلان (باستخدام تفويض الحدث)
adsList.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action="delete"]');
  if (!btn) return;

  const card = btn.closest('.ad-card');
  const id   = Number(card.dataset.id);

  ads = ads.filter(ad => ad.id !== id);
  saveAds();
  renderAds();
});

// بداية التشغيل
loadAds();
