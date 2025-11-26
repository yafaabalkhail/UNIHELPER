// ===== عناصر
const programSelect = document.getElementById('programSelect');
const levelFilter   = document.getElementById('levelFilter');
const warnOnly      = document.getElementById('warnOnly');
const grid          = document.getElementById('planGrid');
const pickedList    = document.getElementById('picked');
const conflictsBox  = document.getElementById('conflicts');
const prereqBox     = document.getElementById('prereqBox');
const dlg           = document.getElementById('sectionDialog');
const form          = document.getElementById('sectionForm');
const courseTitle   = document.getElementById('courseTitle');
const coursePrereq  = document.getElementById('coursePrereq');
const sectionsList  = document.getElementById('sectionsList');
const chooseBtn     = document.getElementById('chooseBtn');
const cancelBtn     = document.getElementById('canceBtn');
cancelBtn?.addEventListener('click', ()=>{ dlg.close('cancel'); });
// ===== حالة
let programKey = programSelect.value;          // SE | CE | CS
let selected = new Map(); // courseId -> {course, section}
let pendingPick = null;   // {course, chosenIndex}

// مفتاح التخزين لكل خطة
function getStorageKey(){
  return `selectedSections_${programKey}`;
}

// حفظ اختيارات الشُعب في localStorage
function saveSelection(){
  const obj = {};
  for (const [cid, item] of selected.entries()){
    obj[cid] = item.section.sec; // نخزن اسم الشعبة لكل مادة
  }
  localStorage.setItem(getStorageKey(), JSON.stringify(obj));
}

// تحميل الاختيارات من localStorage للخطة الحالية
function loadSelection(){
  const saved = localStorage.getItem(getStorageKey());
  if(!saved) return;

  let obj;
  try{
    obj = JSON.parse(saved);
  }catch{
    return;
  }

  const plan = getPlan();
  for(const course of plan.courses){
    const secCode = obj[course.id];
    if(!secCode) continue;

    const sec = course.sections.find(s => s.sec === secCode);
    if(sec){
      selected.set(course.id, { course, section: sec });
    }
  }
}


const timeToMin = t => { const [h,m] = t.split(':').map(Number); return h*60+m; };
const slotOverlap = (s1, s2) =>
  s1.day === s2.day &&
  timeToMin(s1.start) < timeToMin(s2.end) &&
  timeToMin(s2.start) < timeToMin(s1.end);

const sectionConflict = (secA, secB) =>
  secA.slots.some(a => secB.slots.some(b => slotOverlap(a,b)));

function getPlan(){ return window.PLANS[programKey]; }

function drawHeaders(){
  grid.innerHTML = '';
  for(let i=1;i<=10;i++){
    const h = document.createElement('div');
    h.className = 'colHeader';
    h.textContent = (getPlan().levels[i-1] || `L${i}`);
    grid.appendChild(h);
  }
}

function drawCourses(){
  // وزّع حسب المستوى مع فلتر المستوى
  const cols = Array.from({length:10}, ()=>[]);
  getPlan().courses.forEach(c=>{
    const ok = levelFilter.value==='all' || String(c.level)===levelFilter.value;
    if(ok) cols[c.level-1].push(c);
  });

  const maxRows = Math.max(0, ...cols.map(a=>a.length));
  for(let r=0; r<maxRows; r++){
    for(let lv=1; lv<=10; lv++){
      const col = cols[lv-1], c = col[r];
      if(!c){ grid.appendChild(document.createElement('div')); continue; }

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <span class="code">${c.id}</span>
        <div class="name">${c.name}</div>
        <div class="tags">${
          c.prereq?.length ? `<span class="badge">⚠ متطلب: ${c.prereq.join(' , ')}</span>` : ''
        }</div>
        <div class="selectedMark" data-selected="${c.id}" style="display:none;"></div>
      `;
      card.addEventListener('click', ()=> openSectionDialog(c));
      grid.appendChild(card);
    }
  }
  refreshSelectedMarks();
}

function refreshSelectedMarks(){
  document.querySelectorAll('[data-selected]').forEach(el=>{
    const id = el.getAttribute('data-selected');
    const s = selected.get(id);
    if(s){
      const slotsTxt = s.section.slots.map(t=>`${t.day} ${t.start}–${t.end}`).join('، ');
      el.textContent = `✅ الشعبة ${s.section.sec} — ${slotsTxt}`;
      el.style.display = 'block';
    }else{
      el.style.display = 'none';
      el.textContent = '';
    }
  });
}

function openSectionDialog(course){
  pendingPick = { course, chosenIndex: null };

  courseTitle.textContent = `${course.id} — ${course.name}`;
  coursePrereq.textContent = course.prereq?.length
    ? `تنبيه: لهذه المادة متطلبات سابقة: ${course.prereq.join(' , ')}`
    : 'لا توجد متطلبات سابقة للمادة.';

  sectionsList.innerHTML = '';
  course.sections.forEach((sec, idx)=>{
    const slots = sec.slots.map(s=>`${s.day} ${s.start}–${s.end}`).join('، ');
    const row = document.createElement('label');
    row.className = 'row';
    row.innerHTML = `
      <input type="radio" name="sec" value="${idx}" ${idx===0?'checked':''}>
      <strong>الشعبة ${sec.sec}</strong> — ${sec.instructor || '—'}<br>
      <small>${slots}</small>
    `;
    sectionsList.appendChild(row);
  });

  dlg.showModal();
}

form.addEventListener('submit', (e)=>{
  if(!pendingPick) return;
  const course = pendingPick.course;
  const idx = pendingPick.chosenIndex ?? 0;
  const sec = course.sections[idx];

  let hasConflict = false;
  const conflicts = [];
  for(const [cid, item] of selected.entries()){
    if(cid === course.id) continue;
    if(sectionConflict(sec, item.section)){
      hasConflict = true;
      conflicts.push(`${course.id}×${item.course.id} (${sec.sec}×${item.section.sec})`);
    }
  }

   if(hasConflict && !warnOnly.checked){
    e.preventDefault();
    conflictsBox.className = 'box warning';
    conflictsBox.textContent = `تعارض وقتي: ${conflicts.join(' ، ')} — لا يمكن إضافة هذه الشعبة.`;

    dlg.close('conflict');   // ⬅️ قفل الدايالوج لو فيه تعارض
    pendingPick = null;      // ⬅️ ننسى الاختيار المؤقت

    return;
  }


  selected.set(course.id, { course, section: sec });
  saveSelection();            // 🆕 نحفظ الاختيارات
  dlg.close('ok');

  renderPicked();
  refreshSelectedMarks();
  recomputeConflicts();
  renderPrereqs();
});


  

  renderPicked();
  refreshSelectedMarks();
  recomputeConflicts();
  renderPrereqs();


// إغلاق بالحروف ESC/زر إلغاء resets
dlg.addEventListener('close', ()=>{ pendingPick = null; });

function renderPicked(){
  pickedList.innerHTML = '';
  for(const [cid, item] of selected.entries()){
    const sec = item.section;
    const slots = sec.slots.map(s=>`${s.day} ${s.start}–${s.end}`).join('، ');
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>${cid}</strong> — الشعبة ${sec.sec} • ${slots}</span>
      <button aria-label="إزالة ${cid}">إزالة</button>
    `;
    li.querySelector('button').onclick = ()=>{
      selected.delete(cid);
      saveSelection
      renderPicked();
      refreshSelectedMarks();
      recomputeConflicts();
      renderPrereqs();
    };
    pickedList.appendChild(li);
  }
}

function recomputeConflicts(){
  const arr = Array.from(selected.values());
  const conflicts = [];
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      const A = arr[i], B = arr[j];
      if(sectionConflict(A.section, B.section)){
        conflicts.push(`${A.course.id}×${B.course.id} (${A.section.sec}×${B.section.sec})`);
      }
    }
  }
  if(conflicts.length){
    conflictsBox.className = 'box warning';
    conflictsBox.textContent = 'تعارض وقتي: ' + conflicts.join(' ، ');
  }else{
    conflictsBox.className = 'box ok';
    conflictsBox.textContent = 'لا توجد تعارضات زمنية ✅';
  }
}

function renderPrereqs(){
  // مجرد عرض معلومات: المواد المختارة التي لها متطلبات
  const withPrereq = [];
  for(const {course} of selected.values()){
    if(course.prereq?.length){
      withPrereq.push(`${course.id}: ${course.prereq.join(' , ')}`);
    }
  }
  if(withPrereq.length){
    prereqBox.className = 'box warning';
    prereqBox.textContent = 'تنبيه متطلبات: ' + withPrereq.join(' ؛ ');
  }else{
    prereqBox.className = 'box';
    prereqBox.textContent = 'لا توجد متطلبات ضمن اختياراتك الحالية.';
  }
}

// تغييرات الواجهة
programSelect.onchange = ()=>{
  programKey = programSelect.value;
  selected.clear();          // نفرّغ الاختيار المؤقت
  levelFilter.value = 'all';

  drawHeaders();
  drawCourses();

  loadSelection();           // 🆕 نحمل اختيارات هذه الخطة من التخزين
  renderPicked();
  refreshSelectedMarks();
  recomputeConflicts();
  renderPrereqs();
};

levelFilter.onchange = ()=>{ drawHeaders(); drawCourses(); };
warnOnly.onchange   = ()=>{ /* لا شيء — مجرد تبديل وضع التحذير/المنع */ };


// بدء التشغيل
drawHeaders();
drawCourses();
loadSelection();        
renderPicked();
refreshSelectedMarks();
recomputeConflicts();
renderPrereqs();
