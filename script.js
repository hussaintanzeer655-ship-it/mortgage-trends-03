(function(){
  const items=document.querySelectorAll('.faq-item');
  items.forEach(it=>{
    it.addEventListener('click', ()=> toggle(it));
    it.addEventListener('keypress', (e)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle(it);}});
  });
  function toggle(el){ const is=el.getAttribute('aria-expanded')==='true';
    el.setAttribute('aria-expanded', String(!is));
  }
})();