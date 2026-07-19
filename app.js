
const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav'),header=document.querySelector('.site-header');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');document.body.classList.toggle('menu-open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');document.body.classList.remove('menu-open')}));
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const text=['Hola MJM Systems, quisiera conversar sobre un proyecto.','',`Nombre: ${name.value.trim()}`,`Empresa o proyecto: ${company.value.trim()||'No indicado'}`,`Tipo de solución: ${service.value}`,`Descripción: ${message.value.trim()}`].join('\n');open(`https://wa.me/51992898514?text=${encodeURIComponent(text)}`,'_blank','noopener')});
