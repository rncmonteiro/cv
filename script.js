const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#site-nav');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));

// Keep the contents menu in view and indicate the currently read section.
const sideLinks=[...document.querySelectorAll('.sidebar a[href^="#"]')];
const sections=[...document.querySelectorAll('.cv-section[id]')];
const topButton=document.querySelector('.back-to-top');
const jump=document.querySelector('#section-jump');
let currentSection='';
function updateReadingPosition(){
  topButton?.classList.toggle('visible',window.scrollY>450);
  let current='';
  for(const section of sections){
    if(section.getBoundingClientRect().top<=160)current=section.id;
    else break;
  }
  if(!current&&sections.length&&sections[0].getBoundingClientRect().top<window.innerHeight*.6)current=sections[0].id;
  if(current===currentSection)return;
  currentSection=current;
  for(const a of sideLinks){
    const active=a.getAttribute('href')==='#'+current;
    a.classList.toggle('active',active);
    if(active){a.setAttribute('aria-current','location');a.scrollIntoView({block:'nearest',behavior:'instant'});}
    else a.removeAttribute('aria-current');
  }
  if(jump&&current)jump.value=current;
}
window.addEventListener('scroll',updateReadingPosition,{passive:true});
window.addEventListener('resize',updateReadingPosition,{passive:true});
window.addEventListener('load',updateReadingPosition);
jump?.addEventListener('change',()=>{if(!jump.value)return;document.getElementById(jump.value)?.scrollIntoView({behavior:'smooth',block:'start'});});
