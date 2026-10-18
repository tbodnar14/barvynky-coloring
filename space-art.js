// Original space characters. These IDs and canonical coordinates are permanent
// save-data keys. All painted groups, including their marks, move as a unit.
const full = () => ({x:105,y:125,scale:1.9});
const eyes = (x1,x2,y) => `<ellipse class="expression-eye" cx="${x1}" cy="${y}" rx="6.5" ry="8"/><ellipse class="expression-eye" cx="${x2}" cy="${y}" rx="6.5" ry="8"/>`;
export const CHARACTERS = {
  space_planet: {
    name:'Планета', viewBox:'0 0 335 332',
    steps:['globe','west','east','cap','moon'], detailsPart:'globe',
    parts:[
      {id:'globe',label:'Кругла планета',d:'M157 72 C219 72 269 122 269 184 C269 246 219 296 157 296 C95 296 45 246 45 184 C45 122 95 72 157 72 Z'},
      {id:'west',label:'Великий острів',d:'M84 114 C99 104 123 106 128 120 C132 132 116 140 115 153 C114 165 126 172 118 183 C109 196 89 190 83 178 C79 170 65 168 63 156 C60 143 72 135 74 125 C75 119 78 116 84 114 Z'},
      {id:'east',label:'Другий острів',d:'M192 105 C209 102 225 114 229 127 C233 139 250 144 249 159 C249 174 232 181 218 175 C208 171 205 159 193 155 C179 150 178 137 184 128 C188 121 182 111 192 105 Z'},
      {id:'cap',label:'Південна шапочка',d:'M85 269 C110 254 133 263 157 263 C182 263 206 251 229 269 C210 286 184 296 157 296 C130 296 104 286 85 269 Z'},
      {id:'moon',label:'Маленький супутник',d:'M285 23 C301 23 314 36 314 52 C314 68 301 81 285 81 C269 81 256 68 256 52 C256 36 269 23 285 23 Z',details:'<path d="M272 43 C275 37 282 36 285 40 M291 63 C296 64 300 61 300 57" fill="none" stroke="#000" stroke-opacity=".2" stroke-width="4" stroke-linecap="round"/>'},
    ],
    details:`<g fill="#000">${eyes(132,182,210)}</g><path class="expression-mouth" d="M142 234 C148 246 168 246 174 234" fill="none" stroke="#000" stroke-width="4.8" stroke-linecap="round"/>`,
    cameras:[{x:35,y:-35,scale:2.5},full(),full(),full(),full()],
    rig:{globe:[157,184],west:[157,184],east:[157,184],cap:[157,184],moon:[285,52]},
  },
  space_ringed_planet: {
    name:'Планета з кільцем',viewBox:'0 0 335 332',
    steps:['globe','backRing','frontRing','band','star'],detailsPart:'globe',
    parts:[
      {id:'backRing',label:'Дальня половина кільця',d:'M24 211 C5 180 64 126 151 94 C231 64 300 65 315 92 L292 108 C281 91 226 96 162 119 C89 146 47 180 45 204 Z'},
      {id:'globe',label:'Кругла планета',d:'M166 76 C216 76 257 117 257 167 C257 217 216 258 166 258 C116 258 75 217 75 167 C75 117 116 76 166 76 Z'},
      {id:'band',label:'Смуга на планеті',d:'M99 107 C122 92 145 100 166 105 C191 111 211 108 229 101 C240 111 248 125 252 138 C229 146 204 145 178 137 C145 126 113 126 83 130 C87 121 92 113 99 107 Z'},
      {id:'frontRing',label:'Ближня половина кільця',d:'M24 211 C38 244 115 231 197 194 C272 160 321 120 315 92 L292 108 C289 126 245 159 184 186 C113 218 61 225 45 204 Z'},
      {id:'star',label:'Зірочка',d:'M49 21 C51 18 54 19 55 23 L62 39 L79 42 C83 43 84 46 81 49 L67 61 L70 79 C71 83 68 85 64 83 L49 74 L34 83 C30 85 27 83 28 79 L31 61 L17 49 C14 46 15 43 19 42 L36 39 L44 23 C45 20 47 19 49 21 Z'},
    ],
    details:`<g fill="#000">${eyes(144,187,155)}</g><path class="expression-mouth" d="M151 177 C157 187 174 187 180 177" fill="none" stroke="#000" stroke-width="4.5" stroke-linecap="round"/>`,
    cameras:[{x:-10,y:-10,scale:2.65},full(),full(),full(),full()],
    rig:{globe:[166,167],band:[166,167],backRing:[166,167],frontRing:[166,167],star:[49,52]},
  },
  space_rocket: {
    name:'Ракета',viewBox:'0 0 335 332',
    steps:['body','nose','leftFin','rightFin','window','flame'],detailsPart:'window',
    parts:[
      {id:'flame',label:'Вогник двигуна',d:'M143 243 C137 261 137 281 148 298 L167 323 C169 326 172 322 174 319 L191 291 C200 275 198 257 191 243 Z'},
      {id:'leftFin',label:'Ліве крило',d:'M125 171 C105 183 83 211 76 241 L69 275 C68 280 72 282 76 278 L117 252 L135 217 Z'},
      {id:'rightFin',label:'Праве крило',d:'M209 171 C229 183 251 211 258 241 L265 275 C266 280 262 282 258 278 L217 252 L199 217 Z'},
      {id:'body',label:'Корпус ракети',d:'M120 83 C141 63 193 63 214 83 C222 120 224 184 225 239 C211 255 123 255 109 239 C110 184 112 120 120 83 Z'},
      {id:'nose',label:'Носик ракети',d:'M167 16 C146 29 123 62 113 105 C145 114 189 114 221 105 C211 62 188 29 167 16 Z'},
      {id:'window',label:'Кругле віконце',d:'M167 115 C187 115 203 131 203 151 C203 171 187 187 167 187 C147 187 131 171 131 151 C131 131 147 115 167 115 Z'},
    ],
    details:`<path d="M145 128 C150 123 157 121 164 121" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"/><g fill="#000">${eyes(154,180,146)}</g><path class="expression-mouth" d="M156 165 C161 173 173 173 178 165" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>`,
    cameras:[{x:-45,y:-40,scale:2.8},{x:60,y:90,scale:2.15},full(),full(),full(),full()],
    rig:{body:[167,180],nose:[167,180],window:[167,180],leftFin:[167,180],rightFin:[167,180],flame:[167,248]},
  },
};

// 0.8 additions; released models above retain their canonical save geometry.
const newCamera=()=>({x:105,y:105,scale:1.85});
const circlePath=(x,y,r)=>`M${x-r} ${y} C${x-r} ${y-r*.5523} ${x-r*.5523} ${y-r} ${x} ${y-r} C${x+r*.5523} ${y-r} ${x+r} ${y-r*.5523} ${x+r} ${y} C${x+r} ${y+r*.5523} ${x+r*.5523} ${y+r} ${x} ${y+r} C${x-r*.5523} ${y+r} ${x-r} ${y+r*.5523} ${x-r} ${y} Z`;
const starPath=(x,y,r)=>Array.from({length:10},(_,i)=>{const a=-Math.PI/2+i*Math.PI/5,k=i%2?r*.48:r;return `${i?'L':'M'}${(x+Math.cos(a)*k).toFixed(2)} ${(y+Math.sin(a)*k).toFixed(2)}`}).join(' ')+' Z';
const friendlyFace=(x,y)=>`<g fill="#20252b">${eyes(x-16,x+16,y)}</g><path class="expression-mouth" d="M${x-12} ${y+17} Q${x} ${y+31} ${x+12} ${y+17}" fill="none" stroke="#20252b" stroke-width="4" stroke-linecap="round"/>`;
const ray=(deg)=>{const a=deg*Math.PI/180,pt=(u,v)=>`${(167+u*Math.cos(a)-v*Math.sin(a)).toFixed(2)} ${(166+u*Math.sin(a)+v*Math.cos(a)).toFixed(2)}`;return `M${pt(70,-14)} L${pt(126,-14)} C${pt(147,-14)} ${pt(147,14)} ${pt(126,14)} L${pt(70,14)} Z`;};
Object.assign(CHARACTERS,{
 space_moon:{
  name:'Місяць',viewBox:'0 0 335 332',steps:['crescent','craterTop','craterBottom','craterSide','starLeft','starRight'],detailsPart:'crescent',
  parts:[
   {id:'crescent',label:'Півмісяць',d:'M222 36 C150 0 57 18 43 96 C15 192 103 287 198 282 C228 280 252 266 270 244 C199 257 132 217 123 157 C114 99 164 62 222 36 Z',details:undefined},
   {id:'craterTop',label:'Верхній кратер',d:circlePath(83,91,17)},
   {id:'craterBottom',label:'Нижній кратер',d:circlePath(98,209,21)},
   {id:'craterSide',label:'Бічний кратер',d:circlePath(165,250,17)},
   {id:'starLeft',label:'Перша зірочка',d:starPath(251,96,27)},
   {id:'starRight',label:'Друга зірочка',d:starPath(280,180,23)},
  ],details:'<path d="M222 36 C150 0 57 18 43 96 C15 192 103 287 198 282 C228 280 252 266 270 244 C199 257 132 217 123 157 C114 99 164 62 222 36 Z" fill="none" stroke="#c2b8d8" stroke-width="2.5"/>'+friendlyFace(86,142),cameras:Array.from({length:6},newCamera),
  rig:{crescent:[155,151],craterTop:[155,151],craterBottom:[155,151],craterSide:[155,151],starLeft:[251,96],starRight:[280,180]},
 },
 space_sun:{
  name:'Сонечко',viewBox:'0 0 335 332',steps:['disc','raysTop','raysRight','raysBottom','raysLeft'],detailsPart:'disc',
  parts:[
   {id:'raysTop',label:'Верхні промінчики',d:ray(-135)+' '+ray(-90)},
   {id:'raysRight',label:'Праві промінчики',d:ray(-45)+' '+ray(0)},
   {id:'raysBottom',label:'Нижні промінчики',d:ray(45)+' '+ray(90)},
   {id:'raysLeft',label:'Ліві промінчики',d:ray(135)+' '+ray(180)},
   {id:'disc',label:'Кругле сонечко',d:circlePath(167,166,83)},
  ],details:friendlyFace(167,157),cameras:Array.from({length:5},newCamera),
  rig:{disc:[167,166],raysTop:[167,166],raysRight:[167,166],raysBottom:[167,166],raysLeft:[167,166]},
 },
 space_satellite:{
  name:'Супутник',viewBox:'0 0 335 332',steps:['body','leftPanel','rightPanel','dish','window'],detailsPart:'window',
  parts:[
   {id:'dish',label:'Антена-тарілочка',d:'M120 45 Q167 18 214 45 C208 69 191 83 177 85 L177 111 L157 111 L157 85 C141 82 126 69 120 45 Z',details:'<path d="M131 46 Q167 30 203 46" fill="none" stroke="#fff" stroke-opacity=".65" stroke-width="4" stroke-linecap="round"/>'},
   {id:'leftPanel',label:'Ліве сонячне крило',d:'M40 124 L112 124 L126 145 L126 207 L112 229 L40 229 Q27 229 27 216 L27 137 Q27 124 40 124 Z',details:'<path d="M57 132 L57 221 M87 132 L87 221 M35 159 L111 159 M35 194 L111 194" fill="none" stroke="#304f79" stroke-opacity=".35" stroke-width="3"/>'},
   {id:'rightPanel',label:'Праве сонячне крило',d:'M294 124 L222 124 L208 145 L208 207 L222 229 L294 229 Q307 229 307 216 L307 137 Q307 124 294 124 Z',details:'<path d="M277 132 L277 221 M247 132 L247 221 M299 159 L223 159 M299 194 L223 194" fill="none" stroke="#304f79" stroke-opacity=".35" stroke-width="3"/>'},
   {id:'body',label:'Корпус супутника',d:'M139 101 L195 101 Q218 101 218 125 L218 228 Q218 250 195 250 L139 250 Q116 250 116 228 L116 125 Q116 101 139 101 Z'},
   {id:'window',label:'Віконце з усмішкою',d:'M167 133 C191 133 205 151 205 174 C205 198 189 213 167 213 C145 213 129 198 129 174 C129 151 143 133 167 133 Z'},
  ],details:friendlyFace(167,169),cameras:Array.from({length:5},newCamera),
  rig:{body:[167,176],window:[167,176],leftPanel:[120,176],rightPanel:[214,176],dish:[167,105]},
 },
});
// Original self-contained menu symbols; UI consumes strings without external assets.
const reactionIcon=(path)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="#fff2a3"/><path d="${path}" fill="none" stroke="#57438d" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const icons={
 hop:reactionIcon('M17 43 Q32 9 47 43 M36 14 L32 9 L27 16 M20 52 L44 52'),
 dance:reactionIcon('M17 22 L10 30 L18 38 M47 22 L54 30 L46 38 M25 43 Q32 51 39 43 M26 20 L38 20'),
 visit:reactionIcon('M12 40 C12 11 52 11 52 40 M44 33 L52 40 L57 31 M27 41 L37 41'),
 ring:reactionIcon('M10 39 C12 22 51 13 54 24 C57 35 17 49 10 39 Z M24 19 Q38 9 44 25 M21 43 Q36 54 46 38'),
 turn:reactionIcon('M14 28 C16 9 45 8 50 29 C55 48 25 58 16 42 M11 21 L14 30 L23 26'),
 rays:reactionIcon('M26 26 L38 26 L38 38 L26 38 Z M32 18 L32 8 M32 46 L32 56 M18 32 L8 32 M46 32 L56 32'),
 scan:reactionIcon('M19 22 Q32 45 45 22 M32 34 L32 51 M13 15 Q32 4 51 15 M21 18 Q32 11 43 18'),
 wings:reactionIcon('M25 23 L39 23 L39 44 L25 44 Z M20 17 L9 25 L18 40 M44 17 L55 25 L46 40'),
};
const reaction=(id,label,icon,loop=false,durationMs=1200)=>({id,label,icon:icons[icon],loop,durationMs});
CHARACTERS.space_planet.reactions=[reaction('hop','Підстрибнути','hop',false,1100),reaction('dance','Танцювати','dance',true,2800),reaction('moon-visit','Покликати супутник','visit',false,2600)];
CHARACTERS.space_ringed_planet.reactions=[reaction('hop','Підстрибнути','hop',false,1100),reaction('dance','Танцювати','dance',true,3200),reaction('ring-wave','Хитнути кільцем','ring',false,2400)];
CHARACTERS.space_rocket.reactions=[reaction('hop','Злетіти','hop',false,1200),reaction('dance','Танцювати','dance',true,2200),reaction('turn','Розвернутися','turn',false,2600)];
CHARACTERS.space_moon.reactions=[reaction('hop','Підстрибнути','hop'),reaction('dance','Танцювати','dance',true,3000),reaction('turn','Покрутитися','turn',false,2800)];
CHARACTERS.space_sun.reactions=[reaction('hop','Підстрибнути','hop'),reaction('dance','Танцювати','dance',true,2800),reaction('rays-open','Розправити промінчики','rays',false,2200)];
CHARACTERS.space_satellite.reactions=[reaction('hop','Підстрибнути','hop'),reaction('dance','Помахати крилами','wings',true,2400),reaction('scan','Знайти сигнал','scan',false,2600)];
