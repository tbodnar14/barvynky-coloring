// Original food illustrations and a shared, non-destructive play interaction.
const foods={rabbit:'carrot',sheep:'leaf',cat:'fish',fish:'flakes',turtle:'leaf',bronto:'leaf',stego:'leaf',triceratops:'leaf'};
const art={
 carrot:'<path d="M45 31Q65 25 77 43L31 86Q20 94 25 78Z" fill="#ff981b" stroke="#dc6416" stroke-width="3"/><path d="M58 33Q51 9 62 10Q69 11 66 30Q81 8 88 17Q94 25 72 38" fill="#69c53c" stroke="#349c33" stroke-width="3"/><path d="M42 48l11 7M35 65l9 5" stroke="#e66f19" stroke-width="4" stroke-linecap="round"/>',
 leaf:'<path d="M22 76Q5 30 79 14Q91 73 27 82Z" fill="#7bd244" stroke="#329744" stroke-width="3"/><path d="M18 88L69 30M33 68l-5-18M47 53l19 3M58 40l-2-14" fill="none" stroke="#e7ffa5" stroke-width="4" stroke-linecap="round"/>',
 fish:'<path d="M28 50L12 31V69Z" fill="#ffbf32" stroke="#db8a1b" stroke-width="3"/><path d="M25 50Q54 15 86 50Q54 85 25 50Z" fill="#ffd75b" stroke="#db8a1b" stroke-width="3"/><circle cx="68" cy="46" r="4" fill="#8c6224"/><path d="M52 39Q43 51 52 62" fill="none" stroke="#efa82b" stroke-width="4"/>',
 flakes:'<path d="M24 25L43 20L49 34L31 42Z" fill="#ffa942"/><path d="M55 39L76 31L84 49L65 57Z" fill="#ffcc65"/><path d="M28 64L47 53L58 72L38 82Z" fill="#f38b32"/><path d="M65 70l17-6 7 14-17 5Z" fill="#eac54b"/>'
};
const svg=kind=>`<svg viewBox="0 0 100 100" aria-hidden="true">${art[kind]}</svg>`;
export function foodControl(animal){const kind=foods[animal];return kind?`<button class="feed-button" data-food="${kind}" aria-label="Нагодувати — натисни або перетягни корм до ротика" title="Нагодувати">${svg(kind)}<span>Нагодувати</span></button>`:'';}
export function bindFood(announce,facePart='head'){
 const button=document.querySelector('[data-food]'),target=document.querySelector('.living-target');
 if(!button||!target)return()=>{};
 let drag=null,ghost=null,cue=null,heart=null,busy=false,suppressUntil=0,disposed=false;const timers=new Set();
 const later=(fn,ms)=>{const t=setTimeout(()=>{timers.delete(t);if(!disposed)fn();},ms);timers.add(t);};
 const face=target.querySelector(`[data-part="${facePart}"] .face-details`)||target.querySelector(`[data-part="${facePart}"]`);face?.setAttribute('data-feed-face','');
 const mouth=()=>{const expression=face?.querySelector('.expression-mouth');const b=(expression||face||target).getBoundingClientRect(),f=(face||target).getBoundingClientRect();return{x:b.x+b.width*.5,y:b.y+b.height*(expression?.5:.74),r:Math.max(42,Math.min(72,f.width*.5))};};
 const makeFood=(x,y)=>{const el=document.createElement('div');el.className='flying-food';el.innerHTML=svg(button.dataset.food);el.setAttribute('aria-hidden','true');el.style.left=x+'px';el.style.top=y+'px';document.body.append(el);return el;};
 const clearDrag=()=>{ghost?.remove();ghost=null;cue?.remove();cue=null;drag=null;};
 function feed(start){
  if(busy||disposed)return;busy=true;target.classList.remove('hop','dance');
  const b=button.getBoundingClientRect(),from=start||{x:b.x+b.width/2,y:b.y+b.height/2},to=mouth();
  const piece=makeFood(from.x,from.y);button.classList.add('feeding-now');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  piece.animate([{transform:'translate(-50%,-50%) scale(1)',opacity:1},{transform:`translate(calc(-50% + ${to.x-from.x}px),calc(-50% + ${to.y-from.y}px)) scale(.35)`,opacity:0}],{duration:reduced?1:600,easing:'ease-in',fill:'forwards'});
  later(()=>{piece.remove();target.classList.add('feeding');heart=document.createElement('span');heart.className='feed-heart';heart.setAttribute('aria-hidden','true');heart.innerHTML='<svg viewBox="0 0 60 60"><path d="M30 51L8 29C-5 12 16-3 30 13C44-3 65 12 52 29Z" fill="#f55a87" stroke="#fff" stroke-width="3"/></svg>';target.append(heart);announce('Смачно!');},reduced?1:600);
  later(()=>{target.classList.remove('feeding');heart?.remove();heart=null;button.classList.remove('feeding-now');busy=false;},reduced?900:1800);
 }
 button.addEventListener('pointerdown',e=>{if(busy||!e.isPrimary||e.button>0)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,moved:false};button.setPointerCapture(e.pointerId);});
 button.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;if(!drag.moved&&Math.hypot(e.clientX-drag.x,e.clientY-drag.y)<8)return;drag.moved=true;e.preventDefault();if(!ghost){ghost=makeFood(e.clientX,e.clientY);const m=mouth();cue=document.createElement('div');cue.className='food-drop-zone';cue.setAttribute('aria-hidden','true');Object.assign(cue.style,{left:m.x+'px',top:m.y+'px',width:m.r*2+'px',height:m.r*2+'px'});document.body.append(cue);}ghost.style.left=e.clientX+'px';ghost.style.top=e.clientY+'px';});
 button.addEventListener('pointerup',e=>{if(!drag||drag.id!==e.pointerId)return;const moved=drag.moved,m=mouth();clearDrag();if(moved){e.preventDefault();suppressUntil=performance.now()+400;if(Math.hypot(e.clientX-m.x,e.clientY-m.y)<=m.r)feed({x:e.clientX,y:e.clientY});}});
 button.addEventListener('pointercancel',()=>{clearDrag();suppressUntil=performance.now()+400;});
 button.addEventListener('lostpointercapture',clearDrag);
 button.addEventListener('click',e=>{e.stopPropagation();if(performance.now()<suppressUntil)return;feed();});
 return()=>{disposed=true;for(const t of timers)clearTimeout(t);clearDrag();heart?.remove();face?.removeAttribute('data-feed-face');document.querySelectorAll('.flying-food').forEach(e=>e.remove());target.classList.remove('feeding');};
}
