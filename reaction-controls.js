// Reaction metadata belongs to each character; the shared player only changes
// transient classes. Child paint and saved drawing records are never modified.
export function reactionDescriptors(model) {
 const seen=new Set();
 return (Array.isArray(model?.reactions)?model.reactions:[]).filter(r=>{
  if(!r||typeof r.id!=='string'||!/^[a-z][a-z0-9_-]*$/.test(r.id)||seen.has(r.id)||typeof r.label!=='string'||!r.label.trim()||typeof r.icon!=='string'||!/^\s*<svg[\s>]/i.test(r.icon)||!/<\/svg>\s*$/i.test(r.icon)||typeof r.loop!=='boolean'||(!r.loop&&(!Number.isFinite(r.durationMs)||r.durationMs<=0)))return false;
  seen.add(r.id);return true;
 });
}
const escapeAttribute=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
// Original expressive faces follow the reference menu's smile/laugh/surprise
// visual vocabulary. The action ID and its accessible name still come from
// each model; the transient player never touches the child's painted SVG.
function reactionFace(index) {
 const faces=[
  '<ellipse cx="29" cy="31" rx="4.5" ry="6.5"/><ellipse cx="51" cy="31" rx="4.5" ry="6.5"/><path d="M25 46 Q40 65 55 46" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>',
  '<path d="M22 32 Q29 21 36 32 M44 32 Q51 21 58 32" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="M22 43 Q40 49 58 43 C55 65 25 65 22 43Z"/>',
  '<ellipse cx="29" cy="30" rx="4.5" ry="6.5"/><ellipse cx="51" cy="30" rx="4.5" ry="6.5"/><ellipse cx="40" cy="51" rx="8" ry="10"/>'
 ];
 return `<svg class="reaction-face" viewBox="0 0 80 80" aria-hidden="true" focusable="false"><circle cx="40" cy="40" r="30" fill="white"/><g fill="currentColor">${faces[index%faces.length]}</g></svg>`;
}
export function reactionButtons(model) {
 return reactionDescriptors(model).map((r,index)=>`<button type="button" data-reaction="${r.id}" aria-label="${escapeAttribute(r.label)}" aria-pressed="false">${reactionFace(index)}</button>`).join('');
}
export function createReactionPlayer() {
 let running=null,timer=null;
 function stop(){
  clearTimeout(timer);timer=null;
  if(running){running.element.classList.remove(running.className);running=null;}
  document.querySelectorAll('[data-reaction][aria-pressed="true"]').forEach(b=>b.setAttribute('aria-pressed','false'));
 }
 return {
  stop,
  isActive:element=>running?.element===element,
  play(element,reaction){
   stop();element.classList.remove('hop','dance');
   const className='reaction-'+reaction.id;
   element.classList.remove(className);void element.offsetWidth;
   element.classList.add(className);running={element,className};
   document.querySelectorAll('[data-reaction]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.reaction===reaction.id)));
   if(!reaction.loop)timer=setTimeout(stop,reaction.durationMs);
  }
 };
}
