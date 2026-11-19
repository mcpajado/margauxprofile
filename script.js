const projects = [
  {image:'graphic-01.jpg',category:'Graphic design',title:'Neuromarketing seminar',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-02.jpg',category:'Graphic design',title:'Neuromarketing registration',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-03.jpg',category:'Graphic design',title:'Labyrinth — HUMSS seminar',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-04.jpg',category:'Graphic design',title:'Muling Pagsipsat sa mga Bagong Posibilidad',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-05.jpg',category:'Graphic design',title:'Jack of All Trades',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-06.jpg',category:'Graphic design',title:'The Fashion Industry Exposed',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-07.jpg',category:'Graphic design',title:'Chocolates for a Cause',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-08.jpg',category:'Graphic design',title:'Impromptu Radio Spiel Contest',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-09.jpg',category:'Graphic design',title:'All Saints’ Day publication material',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-10.jpg',category:'Graphic design',title:'All Souls’ Day publication material',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-11.jpg',category:'Graphic design',title:'Araw ng mga Bayani',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-12.jpg',category:'Graphic design',title:'National Women’s Day',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-13.jpg',category:'Graphic design',title:'International Day of Education',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-14.jpg',category:'Graphic design',title:'Section profile',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-15.jpg',category:'Graphic design',title:'HUMSS quarterly examination',tools:'Adobe Photoshop · Canva'},
  {image:'graphic-16.jpg',category:'Graphic design',title:'Special exam announcement',tools:'Adobe Photoshop · Canva'},
  {image:'illustration-01.jpg',category:'Digital illustration',title:'Portrait illustration',tools:'Procreate · 2025'},
  {image:'illustration-02.jpg',category:'Digital illustration',title:'Storybook-inspired scene',tools:'Procreate · 2025'},
  {image:'illustration-03.jpg',category:'Digital illustration',title:'Character study',tools:'Procreate · 2024'},
  {image:'illustration-04.jpg',category:'Digital illustration',title:'Character study',tools:'Procreate · 2024'},
  {image:'illustration-05.jpg',category:'Digital illustration',title:'A quiet moment',tools:'Procreate · 2025'},
  {image:'illustration-06.jpg',category:'Digital illustration',title:'An intimate scene',tools:'Procreate · 2025'},
  {image:'painting-01.jpg',category:'Canvas painting',title:'Ulan',tools:'Oil on canvas · 15 × 24 · 2021'},
  {image:'painting-02.jpg',category:'Canvas painting',title:'Boo!',tools:'Oil on canvas · 15 × 19 · 2025'},
  {image:'painting-03.jpg',category:'Canvas painting',title:'Harte',tools:'Oil on canvas · 16 × 20 · 2021'},
  {image:'painting-04.jpg',category:'Canvas painting',title:'Blossom',tools:'Oil on canvas · 16 × 20 · 2021'},
  {image:'book-cover-01.jpg',category:'Book cover',title:'When Women Take the Floor',tools:'Adobe Photoshop · Canva'},
  {image:'book-cover-02.jpg',category:'Book cover',title:'Women in Session — cover concept',tools:'Adobe Photoshop · Canva'},
  {image:'book-cover-03.jpg',category:'Book cover',title:'Women in Session — alternate cover',tools:'Adobe Photoshop · Canva'},
  {image:'book-cover-04.jpg',category:'Book cover',title:'Women in Session — cover concept',tools:'Adobe Photoshop · Canva'}
];
const grid=document.querySelector('#project-grid');
const filters=document.querySelectorAll('.filter-btn');
const dialog=document.querySelector('#lightbox');
const escapeHTML=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(filter='all'){
  const shown=projects.filter(p=>filter==='all'||p.category===filter);
  grid.innerHTML=shown.map(p=>`<article class="project-card" tabindex="0" role="button" aria-label="Preview ${escapeHTML(p.title)}"><div class="project-image"><img loading="lazy" src="assets/${p.image}" alt="${escapeHTML(p.title)}"></div><div class="project-meta"><span>${escapeHTML(p.category)}</span><span>↗</span></div><h3 class="project-title">${escapeHTML(p.title)}</h3><p class="project-tools">${escapeHTML(p.tools)}</p></article>`).join('');
  grid.querySelectorAll('.project-card').forEach((card,i)=>{
    const open=()=>{const p=shown[i];dialog.querySelector('img').src='assets/'+p.image;dialog.querySelector('img').alt=p.title;dialog.querySelector('.lightbox-caption').textContent=p.title+' — '+p.tools;dialog.showModal()};
    card.addEventListener('click',open);card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
  });
}
filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});btn.classList.add('active');btn.setAttribute('aria-pressed','true');render(btn.dataset.filter)}));
dialog.querySelector('.lightbox-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));
document.querySelector('#year').textContent=new Date().getFullYear();
render();
