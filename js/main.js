function $(q){return document.querySelector(q)}
function $all(q){return [...document.querySelectorAll(q)]}
function getParam(name){return new URLSearchParams(location.search).get(name)}
function icon(name){
  const icons={
    ig:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17" cy="7" r=".7" fill="currentColor"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>',
    yt:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><rect x="3" y="6" width="18" height="12" rx="3"/><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/></svg>'
  }; return icons[name]||'';
}
function layout(active=''){
  document.body.classList.remove('home-page','projects-page','team-page','showreel-page','contact-page');
  document.body.classList.add((active||'site')+'-page');document.body.insertAdjacentHTML('afterbegin',`
<header class="header">
<a class="brand" href="index.html">
  <span class="brand-zh">非常口</span>
  <span class="brand-en"><span>E</span><span>X</span><span>E</span><span>E</span><span>T</span></span>
</a>

  <button class="menu-toggle">☰</button>

  <nav class="nav">
    <a href="projects.html">Projects</a>
    <a href="team.html">Team</a>
    <a href="showreel.html">Showreel</a>
    <a href="contact.html">Contact</a>
  </nav>

</header>
`);
  document.body.insertAdjacentHTML('beforeend',`<div class="socials"><a href="${SITE.instagram}" target="_blank" aria-label="Instagram">${icon('ig')}</a><a href="mailto:${SITE.email}" aria-label="Email">${icon('mail')}</a><a href="${SITE.youtube}" target="_blank" aria-label="YouTube">${icon('yt')}</a></div>`);
  $('.menu-toggle')?.addEventListener('click',()=>$('.nav').classList.toggle('open'));
}
function fallbackImage(img){ img.onerror=()=>{img.replaceWith(Object.assign(document.createElement('div'),{className:'thumb',textContent:'IMAGE'}));}; }
function renderProjects(container, list){
  container.innerHTML=list.map(p=>`<a class="card" href="project.html?slug=${p.slug}"><div class="thumb"><img src="${p.cover}" alt="${p.title}"></div><div class="card-info"><h3>${p.title}</h3><div class="meta">${CATEGORIES.find(c=>c.id===p.category)?.label||p.category} / ${p.year}</div></div></a>`).join('');
  $all('.thumb img').forEach(fallbackImage);
}
function initHome(){layout('home')}
function initProjects(){
  layout('projects');
  const cat=getParam('category')||'all';
  const filters=$('.filter');
  filters.innerHTML=`<a class="${cat==='all'?'active':''}" href="projects.html">All</a>`+CATEGORIES.map(c=>`<a class="${cat===c.id?'active':''}" href="projects.html?category=${c.id}">${c.label}</a>`).join('');
  renderProjects($('#projectsGrid'), cat==='all'?PROJECTS:PROJECTS.filter(p=>p.category===cat));
}
function initCategories(){
  layout('projects');
  $('#categoryGrid').innerHTML=CATEGORIES.map((c,i)=>`<a class="category-card" href="projects.html?category=${c.id}"><div class="num">${String(i+1).padStart(2,'0')}</div><div><h2>${c.label}</h2><p class="muted">${c.zh}</p></div><div class="meta">View Projects →</div></a>`).join('');
}
function initProjectDetail(){
  layout('projects');
  const p=PROJECTS.find(x=>x.slug===getParam('slug'))||PROJECTS[0];
  $('#projectTitle').textContent=p.title;
  $('#projectMeta').textContent=`${CATEGORIES.find(c=>c.id===p.category)?.label||p.category} / ${p.year}`;
  $('#projectVideo').src=p.video;
  $('#projectDesc').textContent=p.description;
  $('#projectInfo').innerHTML=`<p><span class="meta">Client</span><br>${p.client}</p><p><span class="meta">Year</span><br>${p.year}</p><p><span class="meta">Category</span><br>${CATEGORIES.find(c=>c.id===p.category)?.label||p.category}</p>`;
  $('#credits').innerHTML=p.credits.map(c=>`<li>${c}</li>`).join('');
}
function initTeam(){
  layout('team');
  $('#teamGrid').innerHTML=TEAM.map(m=>`<a class="card" href="member.html?slug=${m.slug}"><div class="thumb"><img src="${m.image}" alt="${m.name}"></div><div class="card-info"><h3>${m.name}</h3><div class="meta">${m.role}</div></div></a>`).join('');
  $all('.thumb img').forEach(fallbackImage);
}
function initMember(){
  layout('team');
  const m=TEAM.find(x=>x.slug===getParam('slug'))||TEAM[0];
  $('#memberName').textContent=m.name; $('#memberRole').textContent=m.role; $('#memberDesc').textContent=m.description;
  $('#memberImage').src=m.image; fallbackImage($('#memberImage'));
}
function initShowreel(){ layout('showreel'); $('#showreelFrame').src=SITE.showreelUrl; $('#showreelTitle').textContent=SITE.showreelTitle; $('#showreelDesc').textContent=SITE.showreelDescription; }
function initContact(){ layout('contact'); $('#contactList').innerHTML=`<a class="contact-item" href="mailto:${SITE.email}"><span>Email</span><span>${SITE.email}</span></a><a class="contact-item" href="${SITE.instagram}" target="_blank"><span>Instagram</span><span>Open →</span></a><a class="contact-item" href="${SITE.youtube}" target="_blank"><span>YouTube</span><span>Open →</span></a><div class="contact-item"><span>Line ID</span><span>${SITE.lineId}</span></div>`; }
