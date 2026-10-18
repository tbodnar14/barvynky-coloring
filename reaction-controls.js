import {ANIMALS} from './reference-art.js';
import {PEOPLE} from './people.js';
import {CATEGORY_MODELS} from './category-registry.js';

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
export const REACTION_ICON_MAP=Object.freeze({
 sheep:{"hop":"jump","dance":"dance","tail-wag":"tail"},
 cat:{"hop":"jump","dance":"dance","stretch":"stretch"},
 fish:{"hop":"splash","dance":"swim","turn":"turn"},
 rabbit:{"hop":"jump","dance":"dance","listen":"listen"},
 turtle:{"hop":"greet","dance":"walk","hide":"hide"},
 puppy:{"hop":"jump","dance":"dance","tail-wag":"tail"},
 bronto:{"walk":"walk","greet":"greet","rest":"rest"},
 stego:{"walk":"walk","greet":"greet","rest":"rest"},
 triceratops:{"walk":"walk","greet":"greet","rest":"rest"},
 ankylosaur:{"walk":"walk","greet":"greet","rest":"rest"},
 friendly_trex:{"walk":"walk","greet":"greet","rest":"rest"},
 pterosaur:{"fly":"fly","greet":"greet","rest":"rest"},
 kid_baby:{"kid_baby_wave":"wave","kid_baby_dance":"dance","kid_baby_jump":"jump"},
 kid_bows:{"kid_bows_wave":"wave","kid_bows_dance":"dance","kid_bows_jump":"jump"},
 kid_curls:{"kid_curls_wave":"wave","kid_curls_dance":"dance","kid_curls_jump":"jump"},
 kid_rain:{"kid_rain_wave":"wave","kid_rain_dance":"dance","kid_rain_jump":"jump"},
 kid_sleepy:{"kid_sleepy_wave":"wave","kid_sleepy_dance":"dance","kid_sleepy_jump":"jump"},
 kid_chef:{"kid_chef_wave":"wave","kid_chef_dance":"dance","kid_chef_jump":"jump"},
 car_compact:{"drive":"drive","bounce":"jump","headlight":"headlight"},
 car_bus:{"drive":"drive","windows":"windows","bounce":"jump"},
 car_fire:{"drive":"drive","beacon":"beacon","shutter":"shutter"},
 car_tractor:{"drive":"drive","scoop":"scoop","hill":"hill"},
 car_dumptruck:{"drive":"drive","tip":"tip","cab_bounce":"cab-jump"},
 car_ambulance:{"drive":"drive","beacon":"beacon","door":"door"},
 fruit_apple:{"dance":"dance","leaf-wave":"leaf","hop":"jump"},
 fruit_pear:{"dance":"dance","bow":"bow","tiptoe":"tiptoe"},
 fruit_strawberry:{"dance":"dance","crown-wave":"crown","spin":"turn"},
 fruit_banana:{"rock":"rock","march":"walk","bow":"bow"},
 fruit_cherries:{"swing":"rock","bump":"cherry-greet","leaf-wave":"leaf"},
 fruit_pineapple:{"dance":"dance","crown-wave":"crown","hop":"jump"},
 space_planet:{"hop":"jump","dance":"dance","moon-visit":"moon"},
 space_ringed_planet:{"hop":"jump","dance":"dance","ring-wave":"ring"},
 space_rocket:{"hop":"launch","dance":"dance","turn":"turn"},
 space_moon:{"hop":"jump","dance":"dance","turn":"turn"},
 space_sun:{"hop":"jump","dance":"dance","rays-open":"rays"},
 space_satellite:{"hop":"jump","dance":"panels","scan":"signal"},
 winter_snowman:{"winter_greet":"wave","winter_bow":"bow","winter_jump":"jump"},
 winter_tree:{"winter_wind":"wind","winter_star":"star","winter_baubles":"baubles"},
 winter_mittens:{"winter_clap":"clap","winter_wave":"wave","winter_hops":"jump"},
 winter_penguin:{"winter_flap":"flap","winter_waddle":"walk","winter_slide":"slide"},
 winter_sled:{"winter_ride":"drive","winter_rock":"rock","winter_bump":"hill"},
 winter_snowglobe:{"winter_snowfall":"snow","winter_shake":"shake","winter_cottage":"cottage"},
 halloween_pumpkin:{"sway":"rock","bounce":"jump","wink":"wink"},
 halloween_ghost:{"float":"float","wave":"wave","dance":"dance"},
 halloween_bat:{"fly":"fly","listen":"listen","cuddle":"cuddle"},
 halloween_spider:{"walk":"walk","wave":"wave","curl":"curl"},
 halloween_hat:{"bow":"bow","magic":"magic","bounce":"jump"},
 halloween_cauldron:{"bubble":"bubble","rock":"rock","wave":"handles"},
 butterfly_round:{"flight":"fly","greet":"greet","rest":"rest"},
 butterfly_swallowtail:{"flight":"fly","greet":"greet","rest":"rest"},
 butterfly_moth:{"flight":"fly","greet":"greet","rest":"rest"},
 butterfly_leaf:{"flight":"fly","greet":"greet","rest":"rest"},
 butterfly_longwing:{"flight":"fly","greet":"greet","rest":"rest"},
 butterfly_fan:{"flight":"fly","greet":"greet","rest":"rest"},
});
// Explicit model + reaction IDs, never menu position or translated labels.
// These are separate, static menu illustrations. They never read saved marks,
// mutate a model, or render #living/data-part nodes used by the animation engine.
const modelIds=new WeakMap(Object.entries({...ANIMALS,...PEOPLE,...CATEGORY_MODELS}).map(([id,m])=>[m,id]));
const ink='#24485b',blue='#248bd2',gold='#ffd35a',green='#6ebc7c';
const path=(d,fill='none',stroke=ink,width=3)=>`<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
const ellipse=(x,y,rx,ry,fill,stroke='none')=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${stroke}" stroke-width="3"/>`;
const arrow=d=>path(d,'none',blue,3.5);
const ground=()=>ellipse(40,70,21,3,'#c7dce2');
const music=()=>path('M63 27V12L73 9V24','none',blue,3)+ellipse(59,28,4,3,blue)+ellipse(69,25,4,3,blue);
const star=(x=40,y=35,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})">${path('M0-17 5-6 17-5 8 3 11 16 0 10-11 16-8 3-17-5-5-6Z',gold)}</g>`;
const ripple=()=>path('M8 65Q16 57 24 65T40 65T56 65T72 65','none',blue);
const turnArrow=()=>arrow('M11 32C5 53 20 70 40 70 56 70 69 61 70 48M62 53 70 46 75 55');
const spark=()=>path('M11 26 7 20M40 12V5M68 26 73 20','none',gold,4);
const leaf=()=>path('M23 58C7 27 38 13 65 18 66 44 49 66 23 58Z',green)+path('M18 65 53 29M33 50 33 34M43 40 55 41');

function partColor(p,id,focus){
 if(focus.test(p.id))return gold;
 if(/eye|hoove|wheel|hair|trunk/i.test(p.id))return '#42576b';
 if(/window|dome|snow|wing|panel|shell|globe|ring/i.test(p.id))return '#8bd9ed';
 if(/head|arm|leg|paw|ear|muzzle/i.test(p.id)&&id.startsWith('kid_'))return '#ffd4ac';
 if(/belly|chest|bib|soft|inner|patch|spot/i.test(p.id))return '#fff1cd';
 if(/leaf|crown|stem|lower|middle|top|ray/i.test(p.id))return green;
 if(id.startsWith('fruit_')||id==='halloween_pumpkin')return '#ffa66c';
 if(id.startsWith('car_'))return '#72c8cf';
 if(id.startsWith('winter_')||id==='sheep'||id==='halloween_ghost')return '#f9fcff';
 return '#b2c8f2';
}
// Pose the same original character art in a compact illustration. In contrast
// to the live canvas, poses here are fixed SVG transforms and have no handlers.
function miniature(model,id,{x=11,y=11,size=58,pose='still',focus=/$a/}={}){
 const whole={dance:'rotate(-10 167 220)',bow:'rotate(22 167 240)',rock:'rotate(-12 167 240)',shake:'rotate(-10 167 240)',slide:'rotate(-18 167 220)',stretch:'translate(0 -15) scale(1 1.07)'}[pose]||'';
 const parts=model.parts.map(p=>{
  let t='';
  if(pose==='dance'&&/leftleg|leftFoot|legs1|paws/.test(p.id))t='translate(-12 -22) rotate(9 167 230)';
  if(pose==='walk'&&/leftleg|leftFoot|legs1|frontLeg|frontLeft/.test(p.id))t='translate(16 -22)';
  if(pose==='wave'&&/rightarm|rightArm|arms|frontRight/.test(p.id))t='rotate(-28 167 170)';
  if(pose==='greet'&&p.id==='head')t='rotate(-12 167 190)';
  if(pose==='tail'&&p.id==='tail')t='rotate(25 120 190)';
  if(pose==='listen'&&/Ear|ears/.test(p.id))t='rotate(-12 167 150)';
  if(pose==='hide'&&/head|Leg|tail/.test(p.id))t='translate(70 70) scale(.55)';
  if(pose==='tiptoe'&&/Foot/.test(p.id))t='translate(0 -55) scale(1 1.2)';
  if((pose==='rest'||pose==='cuddle')&&/Wing|upper|lower|spot/.test(p.id))t='translate(108 0) scale(.35 1)';
  if(pose==='rest'&&/legs/.test(p.id))t='translate(0 70) scale(1 .72)';
  if(pose==='curl'&&/Left|Right/.test(p.id))t='translate(65 30) scale(.62 .85)';
  if(pose==='greet'&&/upperLeft|spotLeft/.test(p.id))t='translate(60 0) scale(.65 1)';
  if(pose==='flap'&&/leftWing|leftPanel/.test(p.id))t='rotate(20 167 165)';
  if(pose==='flap'&&/rightWing|rightPanel/.test(p.id))t='rotate(-20 167 165)';
  const details=(p.details||'')+(p.id===model.detailsPart?(model.details||''):'');
  return `<g transform="${t}">${path(p.d,partColor(p,id,focus),ink,6)}${details}</g>`;
 }).join('');
 return `<g transform="translate(${x} ${y}) scale(${size/335})"><g transform="${whole}">${parts}</g></g>`;
}
function illustration(model,id,key){
 const mini=opts=>miniature(model,id,opts);
 switch(key){
 case 'jump':return ground()+mini({y:1,size:57})+arrow('M12 59V43M7 49 12 42 17 49')+path('M31 62V58M45 62V58','none',blue);
 case 'dance':return ground()+mini({x:6,y:15,size:56,pose:'dance'})+music();
 case 'walk':return mini({y:4,pose:'walk'})+ellipse(27,70,6,3,blue)+ellipse(49,65,6,3,blue)+arrow('M60 70H74M69 65 75 70 69 75');
 case 'greet':return mini({pose:'greet',focus:/head|upperLeft/})+arrow('M55 13Q71 17 65 30M61 25 65 32 71 28');
 case 'wave':return mini({pose:'wave',focus:/rightarm|rightArm|arms|right$|frontRight/})+path('M61 14Q72 20 66 31M69 10Q80 20 73 32','none',blue);
 case 'rest':return ground()+mini({y:20,size:52,pose:'rest'})+path('M53 7C41 22 57 33 69 22 59 27 49 18 53 7Z',gold);
 case 'fly':case 'flap':return mini({y:9,pose:'flap',focus:/Wing|upper/})+path('M10 26 5 19M69 26 75 19M15 63Q40 73 65 63','none',blue);
 case 'float':return mini({y:3})+path('M23 60Q39 65 57 60M29 69Q40 72 51 69','none',blue);
 case 'tail':return mini({pose:'tail',focus:/tail/})+path('M13 22Q3 35 11 46M7 18Q-1 30 3 43','none',blue);
 case 'listen':return mini({y:15,pose:'listen',focus:/Ear|ears/})+path('M15 12Q9 18 15 24M7 8Q-2 18 7 29M65 12Q71 18 65 24','none',blue);
 case 'stretch':return mini({y:8,pose:'stretch',focus:/body/})+arrow('M68 60V20M63 26 68 19 73 26');
 case 'hide':return mini({pose:'hide',focus:/shell/})+arrow('M72 34 57 42M61 35 56 43 65 46');
 case 'swim':return mini({x:17,y:12,size:55})+ripple()+path('M5 31H15M3 43H12','none',blue);
 case 'splash':return mini({x:14,y:0,size:53})+ripple()+path('M14 52 10 43M29 57 27 49M57 52 62 43','none',blue,4)+ellipse(69,38,3,5,blue);
 case 'turn':return mini({x:18,y:12,size:45})+turnArrow();
 case 'drive':return mini({x:17,y:12,size:57})+path('M5 32H17M3 43H14M6 55H18M14 69H71','none',blue);
 case 'hill':return path('M6 70Q40 35 74 70','none',blue,4)+mini({x:12,y:-1,size:55,pose:'rock'});
 case 'cab-jump':return ground()+mini({y:1,focus:/body|window/})+arrow('M69 38V20M64 25 69 19 74 25');
 case 'headlight':return path('M15 25H36V57H15Q5 41 15 25Z',gold)+path('M46 25 69 16M46 36H72M46 47 70 52M46 58 65 69','none',gold,5);
 case 'beacon':return path('M22 58V36Q22 20 40 20T58 36V58Z','#ff7d6d')+path('M16 59H64V67H16Z','#8bd9ed')+path('M30 36Q30 29 37 29','none','white',4)+spark();
 case 'door':return path('M18 16H61V66H18Z','#8bd9ed')+path('M20 17 48 9V58L20 66Z','#fff1cd')+path('M27 24 41 20V38L27 41Z','#8bd9ed')+ellipse(40,47,2,2,ink)+arrow('M56 38Q72 43 66 58M61 53 66 60 72 55');
 case 'windows':return path('M11 18H69V63H11Z','#8bd9ed')+path('M12 19 30 27V55L12 63Z','#fff1cd')+path('M68 19 50 27V55L68 63Z','#fff1cd')+arrow('M39 57V30M34 36 39 29 44 36');
 case 'shutter':return path('M15 14H65V68H15Z','#8bd9ed')+path('M15 14H65V34H15Z','#fff1cd')+path('M19 21H61M19 28H61')+arrow('M40 63V41M34 47 40 40 46 47');
 case 'scoop':return mini({x:3,y:17,size:51,focus:/bucket|arm/})+path('M49 26 70 35 64 49Q51 47 47 37Z',gold)+arrow('M58 21Q70 15 73 27M67 24 74 28 77 21');
 case 'tip':return path('M10 48H67V58H10Z','#8bd9ed')+ellipse(23,62,7,7,ink)+ellipse(58,62,7,7,ink)+path('M12 44 25 15 56 29 48 46Z',gold)+path('M56 37H69L74 48H56Z','#8bd9ed')+arrow('M10 28 17 12M10 15 18 10 21 19');
 case 'leaf':return leaf()+path('M10 29Q5 40 10 49M66 37Q72 48 63 58','none',blue);
 case 'crown':return path('M39 65C20 61 12 46 13 30 27 33 33 44 39 57 25 36 29 19 37 10 48 24 48 40 43 57 48 37 59 25 70 25 71 46 56 60 39 65Z',green)+path('M39 65 37 28M39 65 23 43M39 65 59 39','none',ink,2)+path('M13 17 7 23M67 12 73 18','none',blue);
 case 'bow':return ground()+mini({pose:'bow',y:17,size:51})+arrow('M62 17Q76 25 69 42M64 36 69 44 76 39');
 case 'tiptoe':return ground()+mini({pose:'tiptoe',y:3,focus:/Foot/})+arrow('M68 60V39M63 45 68 38 73 45');
 case 'rock':case 'shake':return mini({pose:key,x:15,y:12,size:51})+arrow('M14 19Q5 32 13 48M8 41 14 49 18 40M66 19Q75 32 67 48M62 40 66 49 73 42');
 case 'cherry-greet':return mini({x:10,y:16,focus:/Fruit/})+path('M34 9 40 17 46 9M40 4V12','none',gold,4);
 case 'launch':return mini({x:15,y:0,size:50,focus:/flame/})+path('M28 57 23 72M40 59V76M51 56 57 71','none','#f58b38',4);
 case 'moon':return mini({x:5,y:20,size:48})+ellipse(61,19,10,10,gold,ink)+arrow('M73 34Q78 52 62 61M67 53 61 62 71 64');
 case 'ring':return ellipse(40,38,19,19,'#8bd9ed',ink)+path('M22 32C-5 25 9 62 51 55S77 27 58 28','none',gold,6)+arrow('M60 9Q74 14 73 25M68 20 73 27 78 21');
 case 'rays':return ellipse(40,40,16,16,gold,ink)+path('M40 4V15M40 65V76M4 40H15M65 40H76M14 14 22 22M58 58 66 66M14 66 22 58M58 22 66 14','none','#f5a537',5);
 case 'panels':return mini({pose:'flap',focus:/Panel/})+arrow('M7 25V10M2 16 7 9 12 16M72 25V10M67 16 72 9 77 16');
 case 'signal':return path('M19 59 30 44 48 60M16 66H57','none',ink,4)+path('M15 24Q15 60 51 60Z','#8bd9ed')+path('M32 42 48 25','none',ink,4)+ellipse(50,23,4,4,gold)+path('M50 11Q66 11 68 28M52 3Q76 4 77 28','none',blue);
 case 'wind':return mini({pose:'rock',x:5,y:16,size:52})+path('M40 16H65Q75 16 72 9M51 29H70Q77 29 74 36','none',blue);
 case 'star':return star(40,36,1.3)+turnArrow();
 case 'baubles':return path('M15 9H65M24 9V26M56 9V38')+ellipse(24,40,13,13,'#ff9f8b',ink)+ellipse(56,52,13,13,gold,ink)+path('M17 36 29 44M49 48 61 56','none','white',3)+arrow('M8 64V48M4 53 8 47 12 53');
 case 'clap':return `<g transform="rotate(17 25 45)">${path('M11 64V35Q11 24 22 24H28Q35 24 35 32V38Q43 29 46 38L39 52V64Z',gold)}</g><g transform="translate(80 0) scale(-1 1) rotate(17 25 45)">${path('M11 64V35Q11 24 22 24H28Q35 24 35 32V38Q43 29 46 38L39 52V64Z','#8bd9ed')}</g>`+path('M33 13 37 21M47 13 43 21M40 7V17','none',blue);
 case 'slide':return mini({pose:'slide',x:14,y:8,size:57})+path('M5 59H18M5 66H71','none',blue)+arrow('M59 74H74M69 70 75 74 69 78');
 case 'snow':return path('M17 62V35Q17 11 40 11T63 35V62Z','#dff6ff')+path('M14 63H66V70H14Z','#8bd9ed')+['25 30','42 24','54 39','34 48','49 57'].map(v=>{const[x,y]=v.split(' ').map(Number);return path(`M${x-3} ${y}H${x+3}M${x} ${y-3}V${y+3}`,'none',blue,2.5);}).join('')+arrow('M9 34V52M5 47 9 53 13 47');
 case 'cottage':return ground()+path('M21 35H59V59H21Z','#ffc399')+path('M14 35 40 14 66 35Z','#ed8b84')+path('M35 44H46V59H35Z','#8bd9ed')+arrow('M70 49V29M65 35 70 28 75 35');
 case 'wink':return ellipse(40,40,28,28,'#ffb77a',ink)+path('M22 34Q28 28 34 34M28 49Q40 60 53 48','none',ink,3.5)+ellipse(51,33,4,6,ink);
 case 'cuddle':return mini({pose:'cuddle',x:13,y:16,size:54})+path('M40 15C24-1 12 16 40 30 68 16 56-1 40 15Z','#ff9fa7');
 case 'curl':return mini({pose:'curl',x:14,y:16,size:53})+arrow('M5 38H20M14 33 21 38 14 43M75 38H60M66 33 59 38 66 43');
 case 'magic':return mini({x:6,y:25,size:49})+star(59,20,.7)+star(18,13,.4)+path('M49 49 62 34','none',gold,4);
 case 'bubble':return path('M15 40H65L59 65Q40 76 21 65Z','#b2c8f2')+path('M12 40H68','none',ink,5)+ellipse(28,28,9,9,green,ink)+ellipse(52,14,6,6,'#8bd9ed',ink)+ellipse(53,33,4,4,gold,ink);
 case 'handles':return mini({focus:/Handle/})+path('M7 31 3 25M73 31 77 25M11 23 8 16M69 23 72 16','none',blue);
 default:throw new Error(`Missing reaction illustration: ${id}/${key}`);
 }
}
export function reactionIconSpec(model,reactionId){
 const modelId=modelIds.get(model),semantic=REACTION_ICON_MAP[modelId]?.[reactionId];
 if(!semantic)throw new Error(`Missing semantic reaction map: ${modelId}/${reactionId}`);
 return {modelId,semantic};
}
function reactionIcon(model,reactionId){
 const {modelId,semantic}=reactionIconSpec(model,reactionId);
 return `<svg class="reaction-picture" data-semantic="${semantic}" viewBox="0 0 80 80" aria-hidden="true" focusable="false"><circle cx="40" cy="40" r="38" fill="#fff"/>${illustration(model,modelId,semantic)}</svg>`;
}
export function reactionButtons(model) {
 return reactionDescriptors(model).map(r=>`<button type="button" data-reaction="${r.id}" aria-label="${escapeAttribute(r.label)}" aria-pressed="false">${reactionIcon(model,r.id)}</button>`).join('');
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
