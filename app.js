const header=document.querySelector('header'),menu=document.getElementById('menu'),links=document.getElementById('links');menu.onclick=()=>links.classList.toggle('open');links.querySelectorAll('a').forEach(a=>a.onclick=()=>links.classList.remove('open'));addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30));const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ob.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>ob.observe(e));const cases={inventory:['Inventario y almacén','Control centralizado de productos y movimientos.','Productos y ubicaciones','Entradas, salidas y conteos','Alertas y diferencias','Reportes y trazabilidad'],sales:['Ventas y clientes','Seguimiento comercial desde el contacto hasta el cierre.','Clientes y oportunidades','Cotizaciones y propuestas','Seguimiento comercial','Indicadores de ventas'],ops:['Operaciones','Procesos visibles, responsables y estados claros.','Flujo del proceso','Responsables y estados','Alertas y aprobaciones','Panel de operación'],clients:['Atención y reservas','Una experiencia organizada para clientes y equipo.','Registro de solicitudes','Agenda o reservas','Notificaciones','Historial del cliente'],reports:['Datos y reportes','Información centralizada para tomar decisiones.','Fuentes de datos','Indicadores clave','Reportes automáticos','Exportación y alertas']};function render(k){const c=cases[k];caseContent.innerHTML=`<div><span class="eyebrow">${c[0]}</span><h3>${c[1]}</h3><p>Diseñamos una solución adaptada al proceso, usuarios y nivel de operación.</p><div class="caseSteps">${c.slice(2).map((x,i)=>`<div><span>${i+1}</span><b>${x}</b></div>`).join('')}</div></div><div class="preview"><i></i><div><b></b><b></b><b></b><b></b></div></div>`}render('inventory');caseBtns.querySelectorAll('button').forEach(b=>b.onclick=()=>{caseBtns.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.key)});year.textContent=new Date().getFullYear();const contactForm=document.getElementById('form');
if(contactForm){
  contactForm.addEventListener('submit',(event)=>{
    event.preventDefault();

    const nameInput=document.getElementById('name');
    const companyInput=document.getElementById('company');
    const serviceInput=document.getElementById('service');
    const messageInput=document.getElementById('message');

    const contactName=nameInput ? nameInput.value.trim() : '';
    const companyName=companyInput ? companyInput.value.trim() : '';
    const serviceName=serviceInput ? serviceInput.value.trim() : '';
    const description=messageInput ? messageInput.value.trim() : '';

    if(!contactName){
      if(nameInput) nameInput.focus();
      return;
    }

    if(!description){
      if(messageInput) messageInput.focus();
      return;
    }

    const whatsappMessage=[
      'Hola MJM Systems, quisiera conversar sobre un proyecto.',
      '',
      `Nombre: ${contactName}`,
      `Empresa: ${companyName || 'No indicada'}`,
      `Tipo: ${serviceName || 'No indicado'}`,
      `Descripción: ${description}`
    ].join('\n');

    window.location.href=`https://wa.me/51936702029?text=${encodeURIComponent(whatsappMessage)}`;
  });
}

// MJM Systems v4.0.0 — microinteractions for product demos.
(() => {
  const formatNumber = (value) =>
    new Intl.NumberFormat('es-PE', { maximumFractionDigits: 0 }).format(value);

  const animateCounter = (el) => {
    if (el.dataset.animated === 'true') return;
    el.dataset.animated = 'true';

    const target = Number(el.dataset.value || 0);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1100;
    const start = performance.now();

    const frame = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = `${prefix}${formatNumber(current)}${suffix}`;
      if (progress < 1) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  };

  const typeText = (el) => {
    if (el.dataset.typed === 'true') return;
    el.dataset.typed = 'true';
    const text = el.dataset.text || '';
    let index = 0;

    const tick = () => {
      el.textContent = text.slice(0, index);
      index += 1;
      if (index <= text.length) {
        window.setTimeout(tick, 24);
      }
    };

    tick();
  };

  const demoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.querySelectorAll('.counter').forEach(animateCounter);
      entry.target.querySelectorAll('.typing-text').forEach(typeText);
      demoObserver.unobserve(entry.target);
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.demo-card').forEach((card) => demoObserver.observe(card));
})();
