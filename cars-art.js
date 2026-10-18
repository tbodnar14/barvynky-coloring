// Original friendly vehicles. Permanent IDs and canonical paint coordinates.
const circle=(x,y,r)=>`M${x-r} ${y} C${x-r} ${y-r*.5523} ${x-r*.5523} ${y-r} ${x} ${y-r} C${x+r*.5523} ${y-r} ${x+r} ${y-r*.5523} ${x+r} ${y} C${x+r} ${y+r*.5523} ${x+r*.5523} ${y+r} ${x} ${y+r} C${x-r*.5523} ${y+r} ${x-r} ${y+r*.5523} ${x-r} ${y} Z`;
const wheel=(id,x)=>({id,label:id==='rearWheel'?'Заднє колесо':'Переднє колесо',d:circle(x,254,35),details:`<circle cx="${x}" cy="254" r="13" fill="none" stroke="#253950" stroke-width="4"/><path d="M${x} 226 L${x} 237 M${x+28} 254 L${x+17} 254 M${x} 282 L${x} 271 M${x-28} 254 L${x-17} 254" fill="none" stroke="#253950" stroke-width="3" stroke-linecap="round"/>`});
const face=(x1,x2,y)=>`<ellipse class="expression-eye" cx="${x1}" cy="${y}" rx="6" ry="8" fill="#152438"/><ellipse class="expression-eye" cx="${x2}" cy="${y}" rx="6" ry="8" fill="#152438"/><path class="expression-mouth" d="M${x1+2} ${y+17} C${x1+8} ${y+26} ${x2-8} ${y+26} ${x2-2} ${y+17}" fill="none" stroke="#152438" stroke-width="3.5" stroke-linecap="round"/>`;
const camera=()=>({x:72,y:25,scale:2.12});
function vehicle(name,parts,steps,detailsPart,details){return{name,viewBox:'0 0 335 332',parts,steps,detailsPart,details,cameras:steps.map(camera),rig:Object.fromEntries(parts.map(p=>[p.id,p.id==='rearWheel'?[80,254]:p.id==='frontWheel'?[254,254]:[167,238]]))};}
export const CHARACTERS={
 car_compact:vehicle('Маленька машинка',[
  {id:'body',label:'Кузов машинки',d:'M24 185 C28 173 48 172 62 170 L87 124 C96 109 111 101 133 101 L186 101 C207 101 221 112 237 137 L258 168 L294 180 C311 185 317 195 317 215 L317 234 C317 246 306 252 293 252 L38 252 C23 252 17 243 17 230 L17 204 C17 195 19 190 24 185 Z'},
  {id:'window',label:'Віконце',d:'M85 167 L108 129 C111 123 119 119 132 119 L184 119 C196 119 203 124 211 135 L233 167 Z'},
  {id:'bumper',label:'Бампер',d:'M24 218 L310 218 L310 235 C310 241 305 243 296 243 L37 243 C29 243 24 239 24 233 Z'},
  {id:'lamp',label:'Фара',d:'M273 183 C289 185 303 192 305 204 L305 212 L270 212 C265 212 263 208 264 201 C264 191 267 185 273 183 Z'},
  wheel('rearWheel',80),wheel('frontWheel',254)
 ],['body','window','rearWheel','frontWheel','bumper','lamp'],'window',face(142,179,139)),
 car_bus:vehicle('Автобус',[
  {id:'body',label:'Кузов автобуса',d:'M26 105 C26 89 38 81 54 81 L277 81 C296 81 310 98 310 119 L310 234 C310 246 303 253 290 253 L41 253 C28 253 21 246 21 233 L21 123 C21 116 23 111 26 105 Z'},
  {id:'rearWindow',label:'Вікна пасажирів',d:'M44 111 L99 111 L99 171 L44 171 Z M112 111 L166 111 L166 171 L112 171 Z',details:'<path d="M44 145 L99 145 M112 145 L166 145" fill="none" stroke="#253950" stroke-width="3"/>'},
  {id:'window',label:'Переднє віконце',d:'M185 111 L273 111 C285 111 291 118 291 131 L291 171 L185 171 Z'},
  {id:'bumper',label:'Весела смужка',d:'M28 199 L303 199 L303 223 L28 223 Z'},
  wheel('rearWheel',80),wheel('frontWheel',254)
 ],['body','window','rearWindow','rearWheel','frontWheel','bumper'],'window',face(220,257,134)),
 car_fire:vehicle('Пожежна машинка',[
  {id:'body',label:'Кузов пожежної машинки',d:'M24 150 C24 140 30 134 41 134 L181 134 L181 108 C181 99 188 94 198 94 L257 94 C269 94 276 101 284 115 L311 160 C317 170 319 181 319 194 L319 237 C319 248 311 253 299 253 L38 253 C25 253 19 245 19 233 L19 167 C19 160 21 154 24 150 Z'},
  {id:'ladder',label:'Драбина',d:'M30 95 C30 91 33 88 37 88 L171 88 C175 88 178 91 178 95 L178 116 C178 120 175 123 171 123 L37 123 C33 123 30 120 30 116 Z M49 116 L62 116 L62 139 L49 139 Z M146 116 L159 116 L159 139 L146 139 Z',details:'<path d="M39 99 L169 99 M39 112 L169 112 M53 98 L53 113 M79 98 L79 113 M105 98 L105 113 M131 98 L131 113 M157 98 L157 113" fill="none" stroke="#253950" stroke-width="3" stroke-linecap="round"/>'},
  {id:'window',label:'Віконце водія',d:'M198 113 L252 113 C258 113 263 117 267 124 L288 162 L198 162 Z'},
  {id:'equipment',label:'Відсік для спорядження',d:'M40 153 L163 153 L163 216 L40 216 Z',details:'<path d="M51 172 L151 172 M51 190 L151 190 M94 204 L111 204" fill="none" stroke="#253950" stroke-width="3" stroke-linecap="round"/>'},
  {id:'beacon',label:'Маячок',d:'M205 96 L205 76 C205 65 214 60 225 60 C236 60 245 65 245 76 L245 96 Z'},
  wheel('rearWheel',80),wheel('frontWheel',254)
 ],['body','window','rearWheel','frontWheel','ladder','equipment','beacon'],'window',face(222,254,132))
};

// v0.8 expansion. Released model geometry above is intentionally immutable.
const newWheel=(id,x,y,r)=>({id,label:id==='rearWheel'?'Заднє колесо':'Переднє колесо',d:circle(x,y,r),details:`<circle cx="${x}" cy="${y}" r="${r*.36}" fill="none" stroke="#253950" stroke-width="4"/><path d="M${x} ${y-r*.78} L${x} ${y-r*.5} M${x+r*.78} ${y} L${x+r*.5} ${y} M${x} ${y+r*.78} L${x} ${y+r*.5} M${x-r*.78} ${y} L${x-r*.5} ${y}" fill="none" stroke="#253950" stroke-width="4" stroke-linecap="round"/>`});
const tractor=vehicle('Тракторець',[
 {id:'body',label:'Капот і рама',d:'M46 172 L170 172 L170 158 L219 158 C237 158 247 170 247 189 L247 230 C247 241 238 247 225 247 L47 247 C34 247 28 239 28 226 L28 194 C28 180 35 172 46 172 Z'},
 {id:'cabin',label:'Кабіна',d:'M65 180 L65 85 C65 76 72 71 82 71 L146 71 C155 71 161 77 161 86 L161 180 Z'},
 {id:'window',label:'Віконце',d:'M83 91 L142 91 L142 156 L83 156 Z'},
 {id:'arm',label:'Важіль ковша',d:'M175 191 C179 186 186 185 192 190 L281 225 L276 246 L183 213 C173 210 170 199 175 191 Z'},
 {id:'bucket',label:'Ківш',d:'M266 217 L281 217 L281 246 L302 246 L312 232 L312 267 L276 267 C267 267 260 260 260 251 L260 225 C260 220 262 217 266 217 Z'},
 newWheel('rearWheel',80,254,51),newWheel('frontWheel',217,264,30)
],['body','cabin','window','rearWheel','frontWheel','arm','bucket'],'window',face(98,127,113));
tractor.rig={body:[80,254],cabin:[80,254],window:[80,254],arm:[183,201],bucket:[183,201],rearWheel:[80,254],frontWheel:[217,264]};

const dumptruck=vehicle('Самоскид',[
 {id:'body',label:'Кабіна і рама',d:'M30 211 L199 211 L199 120 C199 111 206 105 216 105 L264 105 C274 105 280 111 287 123 L312 165 C317 174 319 184 319 196 L319 238 C319 249 311 254 299 254 L34 254 C23 254 18 247 18 236 L18 224 C18 215 22 211 30 211 Z'},
 {id:'cargo',label:'Пісочок',d:'M37 145 C42 130 48 114 64 111 C71 89 96 85 110 100 C130 86 156 96 161 113 C175 115 186 130 188 145 Z'},
 {id:'bed',label:'Вантажний кузов',d:'M46 132 L193 132 L180 207 C179 215 174 219 166 219 L52 219 C44 219 40 215 38 207 Z',details:'<path d="M59 149 L68 201 M105 149 L110 201 M153 149 L151 201" fill="none" stroke="#253950" stroke-width="3.5" stroke-linecap="round"/>'},
 {id:'window',label:'Віконце водія',d:'M216 125 L259 125 C265 125 270 129 274 136 L294 171 L216 171 Z'},
 {id:'bumper',label:'Бампер',d:'M204 219 L311 219 L311 237 C311 242 307 245 300 245 L204 245 Z'},
 newWheel('rearWheel',72,254,35),newWheel('frontWheel',257,254,35)
],['body','window','rearWheel','frontWheel','cargo','bed','bumper'],'window',face(237,266,143));
dumptruck.rig={body:[167,238],window:[167,238],bumper:[167,238],cargo:[43,212],bed:[43,212],rearWheel:[72,254],frontWheel:[257,254]};

const ambulance=vehicle('Швидка допомога',[
 {id:'body',label:'Кузов швидкої',d:'M41 96 L257 96 C270 96 280 103 287 116 L311 158 C317 169 319 180 319 194 L319 237 C319 248 310 254 297 254 L36 254 C24 254 18 246 18 234 L18 121 C18 104 26 96 41 96 Z'},
 {id:'door',label:'Задні дверцята',d:'M42 119 L155 119 L155 226 L42 226 Z',details:'<path d="M132 164 L143 164" fill="none" stroke="#253950" stroke-width="4" stroke-linecap="round"/>'},
 {id:'heart',label:'Добре сердечко',d:'M98 158 C87 142 67 148 67 163 C67 178 88 191 98 198 C108 191 129 178 129 163 C129 148 109 142 98 158 Z'},
 {id:'window',label:'Віконце водія',d:'M188 115 L251 115 C261 115 267 121 272 130 L291 164 L188 164 Z'},
 {id:'beacon',label:'Маячок',d:'M195 98 L195 77 C195 65 204 59 216 59 C228 59 237 65 237 77 L237 98 Z'},
 newWheel('rearWheel',80,254,35),newWheel('frontWheel',254,254,35)
],['body','window','rearWheel','frontWheel','door','heart','beacon'],'window',face(217,252,136));
ambulance.rig={body:[167,238],window:[167,238],beacon:[167,238],door:[42,173],heart:[42,173],rearWheel:[80,254],frontWheel:[254,254]};
Object.assign(CHARACTERS,{car_tractor:tractor,car_dumptruck:dumptruck,car_ambulance:ambulance});

// Self-contained original selector icons. Shared engine renders these verbatim.
const icon=(inside)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true"><g stroke="#29435b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${inside}</g></svg>`;
const reactionIcons={
 drive:icon('<circle cx="32" cy="32" r="23" fill="#96d9ef"/><circle cx="32" cy="32" r="8" fill="#fff2a0"/><path d="M32 10V22M54 32H42M32 54V42M10 32H22" fill="none"/>'),
 bounce:icon('<path d="M16 48H48M20 43L44 37L20 31L44 25L20 19H44M32 15V5M24 12L32 4L40 12" fill="none"/><path d="M10 52H54V58H10Z" fill="#ffca73"/>'),
 headlight:icon('<path d="M10 18H25C40 18 40 46 25 46H10Z" fill="#ffe680"/><path d="M43 20L55 15M45 32H59M43 44L55 49" fill="none"/>'),
 windows:icon('<path d="M10 13H54V52H10Z" fill="#8fdef0"/><path d="M11 38H53M32 18V33M25 27L32 34L39 27" fill="none"/>'),
 beacon:icon('<path d="M18 47V31C18 12 46 12 46 31V47Z" fill="#81c7f4"/><path d="M13 48H51V55H13Z" fill="#ffe680"/><path d="M32 5V10M8 18L13 22M56 18L51 22" fill="none"/>'),
 shutter:icon('<path d="M12 12H52V53H12Z" fill="#91dcef"/><path d="M13 20H51M13 28H51M13 36H51M32 47V31M25 38L32 31L39 38" fill="none"/>'),
 scoop:icon('<path d="M9 25L36 39L32 47L7 33Z" fill="#94d8ee"/><path d="M35 32H43V47H57L57 56H35Z" fill="#ffce72"/><path d="M38 21L46 11L54 21M46 12V29" fill="none"/>'),
 tip:icon('<path d="M10 23L44 9L53 31L19 45Z" fill="#ffd47c"/><path d="M12 53H55M21 45L30 52M46 40L51 47" fill="none"/><circle cx="18" cy="54" r="5" fill="#95dcf1"/>'),
 door:icon('<path d="M12 9H50V55H12Z" fill="#9bdef0"/><path d="M12 9L36 17V49L12 55Z" fill="#ffdc84"/><circle cx="29" cy="34" r="2" fill="#29435b"/>')
};
const reaction=(id,label,iconId=id,loop=false,durationMs=2200)=>({id,label,icon:reactionIcons[iconId],loop,durationMs});
const drive=()=>reaction('drive','Їдь','drive',true,1800);
const bounce=(id='bounce',label='Підстрибни')=>reaction(id,label,'bounce',false,1800);
CHARACTERS.car_compact.reactions=[drive(),bounce(),reaction('headlight','Блимни фарою','headlight',false,2400)];
CHARACTERS.car_bus.reactions=[drive(),reaction('windows','Відчини вікна'),bounce()];
CHARACTERS.car_fire.reactions=[drive(),reaction('beacon','Увімкни маячок','beacon',false,2400),reaction('shutter','Відкрий відсік')];
tractor.reactions=[drive(),reaction('scoop','Підніми ківш','scoop',false,2600),bounce('hill','На горбочок')];
dumptruck.reactions=[drive(),reaction('tip','Підніми кузов','tip',false,2600),bounce('cab_bounce')];
ambulance.reactions=[drive(),reaction('beacon','Увімкни маячок','beacon',false,2400),reaction('door','Відчини дверцята','door',false,2600)];
