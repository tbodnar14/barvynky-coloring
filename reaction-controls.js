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
export function reactionButtons(model) {
 return reactionDescriptors(model).map(r=>`<button type="button" data-reaction="${r.id}" aria-label="${escapeAttribute(r.label)}" aria-pressed="false">${r.icon}</button>`).join('');
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
