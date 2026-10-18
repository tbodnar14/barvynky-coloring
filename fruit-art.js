// Original fruit friends. Permanent IDs and canonical paint geometry.
const camera = () => ({x:100,y:70,scale:1.95});
const face = (y=180) => `<ellipse class="expression-eye" cx="135" cy="${y}" rx="7" ry="10" fill="#16151a"/><ellipse class="expression-eye" cx="200" cy="${y}" rx="7" ry="10" fill="#16151a"/><path class="expression-mouth" d="M151 ${y+26} Q168 ${y+45} 185 ${y+26}" fill="none" stroke="#16151a" stroke-width="5" stroke-linecap="round"/>`;
const feet = [
 {id:'leftFoot',label:'Ліва ніжка',d:'M112 271 C94 277 85 293 89 302 C94 313 126 316 143 306 C152 300 150 282 140 274 Z'},
 {id:'rightFoot',label:'Права ніжка',d:'M223 271 C241 277 250 293 246 302 C241 313 209 316 192 306 C183 300 185 282 195 274 Z'}
];
const make = (name, parts, steps, details, rig) => ({name,viewBox:'0 0 335 332',parts,steps,detailsPart:'body',details,cameras:steps.map(camera),rig});
export const CHARACTERS = {
 fruit_apple: make('Яблучко',[
 ...feet,
 {id:'stem',label:'Хвостик',d:'M157 101 C162 77 160 56 174 37 C178 32 187 37 183 44 C172 63 178 83 175 103 Z'},
 {id:'body',label:'Яблучко',d:'M167 104 C135 82 102 83 79 107 C50 137 55 189 68 228 C81 269 105 294 134 291 C151 290 158 283 167 283 C176 283 187 291 202 291 C234 293 257 264 270 225 C285 181 286 137 260 110 C237 85 200 81 167 104 Z'},
 {id:'leaf',label:'Листочок',d:'M174 78 C180 49 210 35 246 42 C235 72 210 92 174 78 Z'}
 ],['body','stem','leaf','leftFoot','rightFoot'],face(),{body:[167,270],stem:[167,270],leaf:[167,270],leftFoot:[127,281],rightFoot:[207,281]}),
 fruit_pear: make('Грушка',[
 ...feet,
 {id:'stem',label:'Хвостик',d:'M157 68 C156 47 165 30 184 23 C190 21 195 30 189 34 C174 45 172 52 174 70 Z'},
 {id:'body',label:'Грушка',d:'M166 61 C136 61 124 84 120 110 C116 139 90 152 76 178 C54 220 67 261 105 280 C140 298 194 297 228 280 C267 261 281 220 259 178 C245 151 218 137 214 109 C210 82 197 61 166 61 Z'},
 {id:'leaf',label:'Листочок',d:'M172 64 C190 34 224 28 249 41 C232 69 204 77 172 64 Z'}
 ],['body','stem','leaf','leftFoot','rightFoot'],face(192),{body:[167,270],stem:[167,270],leaf:[167,270],leftFoot:[127,281],rightFoot:[207,281]}),
 fruit_strawberry: make('Полуничка',[
 ...feet,
 {id:'body',label:'Ягідка',d:'M167 91 C127 71 79 83 64 115 C48 150 73 202 98 235 C121 265 148 290 167 292 C188 290 214 265 237 235 C262 202 287 150 271 115 C255 82 207 72 167 91 Z'},
 {id:'crown',label:'Зелені листочки',d:'M167 91 C149 74 126 65 107 70 L126 99 L80 109 C96 127 125 133 149 119 L167 144 L185 119 C209 133 238 127 254 109 L208 99 L227 70 C208 65 185 74 167 91 Z'},
 {id:'seeds',label:'Зернятка',d:'M91 146 Q103 136 104 151 Q103 167 91 146 Z M232 146 Q244 136 245 151 Q244 167 232 146 Z M90 188 Q102 178 103 193 Q102 209 90 188 Z M231 188 Q243 178 244 193 Q243 209 231 188 Z M116 230 Q128 220 129 235 Q128 251 116 230 Z M206 230 Q218 220 219 235 Q218 251 206 230 Z M162 258 Q174 248 175 263 Q174 279 162 258 Z'}
 ],['body','crown','seeds','leftFoot','rightFoot'],face(174),{body:[167,270],crown:[167,270],seeds:[167,270],leftFoot:[127,281],rightFoot:[207,281]})
};

// v0.8 additions. Released fruit models above retain every geometry field.
const smallFace = (x,y,gap=18) => `<ellipse class="expression-eye" cx="${x-gap}" cy="${y}" rx="6" ry="8" fill="#16151a"/><ellipse class="expression-eye" cx="${x+gap}" cy="${y}" rx="6" ry="8" fill="#16151a"/><path class="expression-mouth" d="M${x-12} ${y+20} Q${x} ${y+34} ${x+12} ${y+20}" fill="none" stroke="#16151a" stroke-width="4.5" stroke-linecap="round"/>`;
Object.assign(CHARACTERS, {
 fruit_banana: make('Бананчик',[
  {id:'leftFoot',label:'Ліва ніжка',d:'M111 266 C95 270 80 284 85 296 C91 308 119 309 137 301 C149 295 144 279 133 272 Z'},
  {id:'rightFoot',label:'Права ніжка',d:'M183 265 C201 265 218 279 219 291 C221 303 201 310 179 305 C164 301 162 287 166 275 Z'},
  {id:'body',label:'Бананчик',d:'M251 46 C278 103 278 175 240 227 C206 275 157 299 113 282 C74 268 50 232 55 188 C88 217 118 229 153 214 C211 190 244 123 251 46 Z'},
  {id:'topTip',label:'Верхній кінчик',d:'M248 68 C246 55 245 42 249 28 C255 24 265 27 270 32 C266 47 265 58 264 72 Z'},
  {id:'bottomTip',label:'Нижній кінчик',d:'M56 185 C51 185 45 189 44 195 C45 210 50 221 58 227 L74 215 C65 207 60 195 56 185 Z'}
 ],['body','topTip','bottomTip','leftFoot','rightFoot'],smallFace(155,230,24),{body:[155,275],topTip:[155,275],bottomTip:[155,275],leftFoot:[117,280],rightFoot:[183,280]}),
 fruit_cherries: {
  name:'Вишеньки',viewBox:'0 0 335 332',detailsPart:'leftFruit',details:smallFace(104,209,18),
  parts:[
   {id:'leftStem',label:'Лівий хвостик',d:'M164 39 C145 74 113 105 97 164 L113 172 C125 117 151 91 176 46 Z'},
   {id:'rightStem',label:'Правий хвостик',d:'M164 44 C185 85 214 119 223 173 L240 168 C227 106 197 70 178 37 Z'},
   {id:'leftFruit',label:'Ліва вишенька',d:'M104 158 C69 147 40 174 39 212 C38 251 66 281 103 281 C140 281 159 253 159 216 C159 180 145 150 113 158 C110 160 107 160 104 158 Z'},
   {id:'rightFruit',label:'Права вишенька',d:'M229 165 C193 154 177 182 177 220 C177 257 194 287 231 287 C270 287 298 258 297 221 C296 184 269 157 237 165 C234 167 232 167 229 165 Z',details:smallFace(232,216,18)},
   {id:'leaf',label:'Листочок',d:'M171 46 C188 18 219 13 249 26 C236 52 208 66 171 46 Z'}
  ],steps:['leftFruit','rightFruit','leftStem','rightStem','leaf'],cameras:Array.from({length:5},camera),
  rig:{leftFruit:[170,44],leftStem:[170,44],rightFruit:[170,44],rightStem:[170,44],leaf:[174,45]}
 },
 fruit_pineapple: make('Ананасик',[
  ...feet,
  {id:'crown',label:'Зелена корона',d:'M125 111 C107 91 89 64 87 42 C110 47 127 62 139 77 C135 52 139 27 153 12 C170 29 177 51 174 75 C189 51 211 36 236 35 C231 60 219 81 204 96 C222 89 237 87 252 90 C240 110 215 124 196 129 L139 131 Z'},
  {id:'body',label:'Ананасик',d:'M168 106 C118 106 87 133 84 184 C80 231 95 271 128 287 C152 297 184 297 208 287 C241 271 256 231 252 184 C249 133 218 106 168 106 Z'},
  {id:'belly',label:'Візерунок',d:'M167 218 C144 218 117 231 115 250 C114 269 138 281 167 282 C197 281 221 269 220 250 C218 231 191 218 167 218 Z',details:'<path d="M124 232 L180 279 M149 220 L207 268 M184 221 L124 267 M209 234 L154 280" fill="none" stroke="#a96b28" stroke-width="3" stroke-linecap="round" opacity=".65"/>'}
 ],['body','crown','belly','leftFoot','rightFoot'],face(167),{body:[167,275],crown:[167,275],belly:[167,275],leftFoot:[127,281],rightFoot:[207,281]})
});

// Icons are complete original SVGs, safe to repeat in the 3-button menu.
const actionIcon = (kind) => {
 const paths={
  dance:'<path d="M12 42 Q7 32 14 25 Q20 25 23 36 L25 45 Q20 51 12 42Z" fill="#8750dc"/><path d="M40 48 Q33 38 40 30 Q46 30 50 40 L52 49 Q47 55 40 48Z" fill="#f39a28"/><path d="M34 11 V27 M34 11 L46 8 V24" fill="none" stroke="#48aada" stroke-width="4"/><circle cx="29" cy="28" r="5" fill="#48aada"/><circle cx="41" cy="25" r="5" fill="#48aada"/>',
  wave:'<path d="M18 46 C12 22 29 13 48 16 C47 35 37 47 18 46Z" fill="#79c83d"/><path d="M18 46 L39 24 M8 21 Q7 12 15 7 M49 42 Q59 38 57 28" fill="none" stroke="#447f32" stroke-width="3.5" stroke-linecap="round"/>',
  jump:'<path d="M32 30 V8 M23 17 L32 8 L41 17" fill="none" stroke="#5b9ce3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="32" cy="45" rx="15" ry="11" fill="#f5b43a"/><circle cx="27" cy="43" r="2"/><circle cx="37" cy="43" r="2"/><path d="M26 49 Q32 54 38 49 M16 60 H48" fill="none" stroke="#745827" stroke-width="3" stroke-linecap="round"/>',
  bow:'<ellipse cx="31" cy="38" rx="15" ry="20" transform="rotate(-24 31 38)" fill="#f3bd3c"/><path d="M39 10 Q54 14 51 29 M44 25 L51 29 L56 23" fill="none" stroke="#8257c8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 59 H49" stroke="#5699b8" stroke-width="3"/>',
  tiptoe:'<ellipse cx="32" cy="26" rx="14" ry="17" fill="#efbf3c"/><path d="M25 43 L22 57 M39 43 L42 57 M12 59 H52 M8 36 V22 M3 28 L8 22 L13 28" fill="none" stroke="#619e6b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>',
  spin:'<ellipse cx="32" cy="33" rx="12" ry="15" fill="#f56c72"/><path d="M14 20 Q31 2 50 18 L53 26 M43 22 L53 26 L57 16 M51 44 Q33 62 15 47 L10 38 M20 41 L10 38 L7 49" fill="none" stroke="#7f58c5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>',
  rock:'<path d="M16 26 Q31 38 48 18 Q48 46 27 49 Q15 48 16 26Z" fill="#f6cd43"/><path d="M10 53 Q32 65 55 51 M7 42 L10 53 L20 50" fill="none" stroke="#58a0ca" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>',
  march:'<path d="M14 18 C6 22 9 37 17 43 L27 43 L24 29 C24 20 20 16 14 18Z" fill="#edb835"/><path d="M43 29 C35 33 38 48 46 54 L56 54 L53 40 C53 31 49 27 43 29Z" fill="#8d64d6"/><path d="M12 52 H28 M40 15 V5 M34 11 L40 5 L46 11" stroke="#4b9dca" stroke-width="3.5" fill="none" stroke-linecap="round"/>',
  swing:'<path d="M32 8 L13 40 M32 8 L51 40" stroke="#5fa348" stroke-width="4"/><circle cx="13" cy="46" r="10" fill="#ef6574"/><circle cx="51" cy="46" r="10" fill="#ef6574"/><path d="M12 25 Q32 37 52 25" stroke="#8b64cf" stroke-width="3" stroke-dasharray="4 4" fill="none"/>',
  bump:'<circle cx="19" cy="41" r="13" fill="#ed6371"/><circle cx="45" cy="41" r="13" fill="#f3a042"/><path d="M12 16 H26 M21 11 L26 16 L21 21 M52 16 H38 M43 11 L38 16 L43 21" stroke="#8058bc" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
 };
 return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${paths[kind]}</svg>`;
};
const reaction = (id,label,icon,loop,durationMs) => ({id,label,icon:actionIcon(icon),loop,durationMs});
CHARACTERS.fruit_apple.reactions=[reaction('dance','Танцювати','dance',true,2000),reaction('leaf-wave','Помахати','wave',true,1700),reaction('hop','Підстрибнути','jump',false,1300)];
CHARACTERS.fruit_pear.reactions=[reaction('dance','Танцювати','dance',true,2000),reaction('bow','Вклонитися','bow',false,1400),reaction('tiptoe','Навшпиньки','tiptoe',false,1500)];
CHARACTERS.fruit_strawberry.reactions=[reaction('dance','Танцювати','dance',true,2000),reaction('crown-wave','Помахати','wave',true,1700),reaction('spin','Покрутитися','spin',false,1500)];
CHARACTERS.fruit_banana.reactions=[reaction('rock','Погойдатися','rock',true,2200),reaction('march','Покрокувати','march',true,1600),reaction('bow','Вклонитися','bow',false,1400)];
CHARACTERS.fruit_cherries.reactions=[reaction('swing','Погойдатися','swing',true,2200),reaction('bump','Привітатися','bump',false,1400),reaction('leaf-wave','Помахати','wave',true,1700)];
CHARACTERS.fruit_pineapple.reactions=[reaction('dance','Танцювати','dance',true,2000),reaction('crown-wave','Помахати','wave',true,1700),reaction('hop','Підстрибнути','jump',false,1300)];
