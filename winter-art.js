// Original canonical vectors. Stable IDs bind the child's paint to these parts.
const camera = () => ({x:110,y:90,scale:1.9});
const face = (x,y) => `<g fill="#20252b"><ellipse class="expression-eye" cx="${x-18}" cy="${y}" rx="5.5" ry="7"/><ellipse class="expression-eye" cx="${x+18}" cy="${y}" rx="5.5" ry="7"/></g><path class="expression-mouth" d="M${x-13} ${y+20} Q${x} ${y+33} ${x+13} ${y+20}" fill="none" stroke="#20252b" stroke-width="4" stroke-linecap="round"/>`;
const snowman={
 name:'Сніговик',viewBox:'0 0 335 332',
 steps:['body','head','arms','hat','scarf','nose'],detailsPart:'head',
 parts:[
  {id:'arms',label:'Ручки-гілочки',d:'M103 187 C82 180 63 164 47 145 L34 129 Q29 124 24 130 Q21 133 26 140 L41 159 L21 156 Q13 156 14 163 Q14 169 23 170 L52 174 L91 209 Z M232 187 C253 180 272 164 288 145 L301 129 Q306 124 311 130 Q314 133 309 140 L294 159 L314 156 Q322 156 321 163 Q321 169 312 170 L283 174 L244 209 Z'},
  {id:'body',label:'Снігова кулька',d:'M167 151 C110 151 76 186 74 237 C71 290 107 316 167 316 C227 316 263 290 260 237 C258 186 224 151 167 151 Z',details:'<path d="M167 151 C110 151 76 186 74 237 C71 290 107 316 167 316 C227 316 263 290 260 237 C258 186 224 151 167 151 Z" fill="none" stroke="#adcbd9" stroke-width="2.7"/><g fill="#29333d"><circle cx="167" cy="222" r="6"/><circle cx="167" cy="252" r="6"/><circle cx="167" cy="282" r="6"/></g>'},
  {id:'head',label:'Голівка',d:'M167 63 C124 63 94 86 94 123 C94 162 124 184 167 184 C210 184 240 162 240 123 C240 86 210 63 167 63 Z'},
  {id:'hat',label:'Тепла шапочка',d:'M100 87 C102 49 129 28 162 31 C191 27 219 45 231 77 L236 89 Q236 98 225 98 L110 98 Q98 98 100 87 Z M161 11 Q169 11 173 17 C180 26 178 39 166 44 C155 49 144 44 142 32 C140 20 148 11 161 11 Z',details:'<path d="M110 80 Q167 68 225 82" fill="none" stroke="#263b48" stroke-opacity=".38" stroke-width="4" stroke-linecap="round"/>'},
  {id:'scarf',label:'Шарфик',d:'M100 166 Q167 190 235 166 L236 188 Q223 197 207 198 L217 240 Q204 251 184 245 L177 201 Q131 203 99 188 Z',details:'<path d="M191 231 L192 239 M201 230 L203 239" stroke="#263b48" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"/>'},
  {id:'nose',label:'Ніс-морквинка',d:'M160 124 Q161 113 173 118 L210 131 Q217 135 209 139 L172 146 Q157 147 160 124 Z'},
 ],details:'<path d="M167 63 C124 63 94 86 94 123 C94 162 124 184 167 184 C210 184 240 162 240 123 C240 86 210 63 167 63 Z" fill="none" stroke="#adcbd9" stroke-width="2.7"/>'+face(167,111),cameras:Array.from({length:6},camera),
 rig:{body:[167,300],head:[167,176],arms:[167,190],hat:[167,176],scarf:[167,190],nose:[167,176]},
};
const tree={
 name:'Зимова ялинка',viewBox:'0 0 335 332',
 steps:['trunk','lower','middle','top','star','ornaments'],detailsPart:'middle',
 parts:[
  {id:'trunk',label:'Стовбур',d:'M143 251 L190 251 L194 305 Q167 318 140 305 Z'},
  {id:'lower',label:'Нижні гілочки',d:'M167 134 C139 177 92 209 53 255 Q47 264 59 268 Q94 283 124 274 Q169 293 209 275 Q242 284 277 268 Q287 264 280 254 C238 207 199 176 167 134 Z'},
  {id:'middle',label:'Середні гілочки',d:'M167 89 C145 119 112 154 80 193 Q73 203 86 206 Q116 216 138 208 Q170 222 198 209 Q223 217 248 206 Q260 202 253 193 C219 153 191 119 167 89 Z'},
  {id:'top',label:'Верхівка',d:'M167 40 C147 68 129 91 109 119 Q101 129 114 133 Q139 142 166 134 Q194 143 220 133 Q232 129 224 119 C203 92 185 68 167 40 Z'},
  {id:'star',label:'Зірочка',d:'M167 9 Q170 9 172 15 L181 34 L203 36 Q210 37 205 43 L189 59 L193 81 Q194 87 188 84 L167 73 L146 84 Q140 87 141 81 L145 59 L129 43 Q124 37 131 36 L153 34 L162 15 Q164 9 167 9 Z'},
  {id:'ornaments',label:'Ялинкові кульки',d:'M117 227 C117 214 107 204 94 204 C81 204 71 214 71 227 C71 240 81 250 94 250 C107 250 117 240 117 227 Z M260 232 C260 219 250 209 237 209 C224 209 214 219 214 232 C214 245 224 255 237 255 C250 255 260 245 260 232 Z M189 257 C189 244 179 234 166 234 C153 234 143 244 143 257 C143 270 153 280 166 280 C179 280 189 270 189 257 Z',details:'<g fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".8"><path d="M83 224 Q85 218 92 217 M226 229 Q228 223 235 222 M155 254 Q157 248 164 247"/></g>'},
 ],details:face(167,163),cameras:Array.from({length:6},camera),
 rig:{trunk:[167,300],lower:[167,300],middle:[167,300],top:[167,300],star:[167,300],ornaments:[167,300]},
};
const mittens={
 name:'Рукавички',viewBox:'0 0 335 332',
 steps:['left','right','leftCuff','rightCuff','leftPatch','rightPatch'],detailsPart:'leftPatch',
 parts:[
  {id:'left',label:'Ліва рукавичка',d:'M68 256 L53 126 C49 90 65 65 91 63 C119 61 133 80 137 111 L143 159 L153 145 C166 130 182 140 176 160 L158 209 Q153 229 159 245 Z'},
  {id:'right',label:'Права рукавичка',d:'M267 256 L282 126 C286 90 270 65 244 63 C216 61 202 80 198 111 L192 159 L182 145 C169 130 153 140 159 160 L177 209 Q182 229 176 245 Z'},
  {id:'leftCuff',label:'Лівий манжет',d:'M64 242 Q106 244 154 231 Q161 229 163 238 L171 280 Q173 288 165 291 L84 307 Q76 308 74 300 Z',details:'<path d="M89 255 L96 292 M109 252 L116 288 M129 249 L136 284 M148 244 L155 279" fill="none" stroke="#25334a" stroke-opacity=".4" stroke-width="3" stroke-linecap="round"/>'},
  {id:'rightCuff',label:'Правий манжет',d:'M271 242 Q229 244 181 231 Q174 229 172 238 L164 280 Q162 288 170 291 L251 307 Q259 308 261 300 Z',details:'<path d="M246 255 L239 292 M226 252 L219 288 M206 249 L199 284 M187 244 L180 279" fill="none" stroke="#25334a" stroke-opacity=".4" stroke-width="3" stroke-linecap="round"/>'},
  {id:'leftPatch',label:'Ліва усмішка',d:'M106 130 C84 130 69 147 71 168 C73 191 91 202 110 199 C132 196 142 180 139 160 C137 141 123 129 106 130 Z'},
  {id:'rightPatch',label:'Права усмішка',d:'M229 130 C251 130 266 147 264 168 C262 191 244 202 225 199 C203 196 193 180 196 160 C198 141 212 129 229 130 Z',details:face(230,157)},
 ],details:face(105,157),cameras:Array.from({length:6},camera),
 rig:{left:[118,266],leftCuff:[118,266],leftPatch:[118,266],right:[217,266],rightCuff:[217,266],rightPatch:[217,266]},
};

// New v0.8 subjects use closed paint regions; released vectors above stay untouched.
const penguin={name:'Пінгвін',viewBox:'0 0 335 332',
 steps:['body','bib','leftWing','rightWing','leftFoot','rightFoot','beak'],detailsPart:'bib',
 parts:[
 {id:'leftWing',label:'Ліве крильце',d:'M104 137 Q62 145 47 204 Q40 232 55 237 Q76 241 102 191 L123 159 Z'},
 {id:'rightWing',label:'Праве крильце',d:'M231 137 Q273 145 288 204 Q295 232 280 237 Q259 241 233 191 L212 159 Z'},
 {id:'leftFoot',label:'Ліва лапка',d:'M117 274 Q97 283 84 301 Q79 311 94 314 L150 314 Q161 311 156 300 L148 277 Z'},
 {id:'rightFoot',label:'Права лапка',d:'M218 274 Q238 283 251 301 Q256 311 241 314 L185 314 Q174 311 179 300 L187 277 Z'},
 {id:'body',label:'Пінгвінчик',d:'M167 28 C111 28 89 75 91 129 C68 180 77 257 113 281 Q167 311 222 281 C258 257 267 180 244 129 C246 75 223 28 167 28 Z'},
 {id:'bib',label:'Світла грудка',d:'M167 99 C151 71 118 77 112 108 C109 125 119 137 119 147 C98 175 96 239 126 260 Q167 283 209 260 C239 239 237 175 216 147 C216 137 226 125 223 108 C217 77 184 71 167 99 Z'},
 {id:'beak',label:'Дзьобик',d:'M148 132 Q167 125 187 132 Q193 135 188 143 L174 158 Q167 163 160 158 L146 143 Q141 135 148 132 Z'},
 ],details:face(167,117),cameras:Array.from({length:7},camera),
 rig:{body:[167,280],bib:[167,280],leftWing:[106,151],rightWing:[229,151],leftFoot:[132,291],rightFoot:[203,291],beak:[167,280]},
};
const sled={name:'Санчата',viewBox:'0 0 335 332',
 steps:['rearRunner','frontRunner','seat','backrest','cushion','rope'],detailsPart:'cushion',
 parts:[
 {id:'rearRunner',label:'Дальня полозка',d:'M65 207 L79 207 L84 249 L253 249 Q281 249 284 226 Q285 216 296 219 Q304 223 299 240 Q290 267 258 267 L58 267 Q43 267 43 257 Q43 249 55 249 L69 249 Z'},
 {id:'backrest',label:'Спинка',d:'M65 105 Q63 91 77 89 L108 89 Q121 89 124 103 L144 212 L89 218 Z'},
 {id:'seat',label:'Сидіння',d:'M77 201 Q78 192 92 191 L244 191 Q258 191 258 204 L255 225 Q254 233 241 233 L88 233 Q77 233 77 223 Z'},
 {id:'frontRunner',label:'Ближня полозка',d:'M96 224 L112 224 L115 277 L230 277 L234 224 L250 224 L246 277 L267 277 Q291 277 299 251 Q302 240 312 244 Q320 249 313 265 Q301 294 267 295 L66 295 Q53 295 53 286 Q53 277 66 277 L100 277 Z'},
 {id:'cushion',label:'М’яка подушка',d:'M112 144 Q171 127 232 145 Q247 151 243 172 L240 196 Q238 207 224 207 L116 207 Q104 207 103 195 L101 164 Q100 150 112 144 Z'},
 {id:'rope',label:'Мотузочка',d:'M250 196 Q265 142 298 131 Q320 121 322 142 Q324 165 307 188 Q301 196 294 189 Q290 184 296 176 Q310 156 307 148 Q296 143 283 160 Q272 174 265 201 Z'},
 ],details:face(173,164),cameras:Array.from({length:6},camera),
 rig:{rearRunner:[173,286],frontRunner:[173,286],seat:[173,286],backrest:[173,286],cushion:[173,286],rope:[256,197]},
};
const snowglobe={name:'Снігова куля',viewBox:'0 0 335 332',
 steps:['dome','base','snowbank','cottage','roof','snowflakes'],detailsPart:'cottage',
 parts:[
 {id:'dome',label:'Скляна куля',d:'M167 28 C94 28 43 78 43 150 C43 209 79 251 118 267 L216 267 C255 251 291 209 291 150 C291 78 240 28 167 28 Z'},
 {id:'snowbank',label:'Сніговий пагорб',d:'M66 214 Q111 180 156 205 Q195 178 267 212 Q247 246 212 260 L122 260 Q87 244 66 214 Z'},
 {id:'cottage',label:'Хатинка',d:'M114 143 L167 107 L220 143 L220 228 Q168 241 114 228 Z'},
 {id:'roof',label:'Дах',d:'M103 151 Q98 146 105 139 L157 91 Q167 82 177 91 L230 139 Q238 148 230 152 L218 155 L168 115 L117 155 Z'},
 {id:'snowflakes',label:'Сніжинки',d:'M95 99 A11 11 0 1 0 73 99 A11 11 0 1 0 95 99 Z M250 95 A11 11 0 1 0 228 95 A11 11 0 1 0 250 95 Z M180 61 A11 11 0 1 0 158 61 A11 11 0 1 0 180 61 Z',details:'<path d="M79 96 L85 102 M85 96 L79 102 M235 92 L241 98 M241 92 L235 98 M166 58 L172 64 M172 58 L166 64" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>'},
 {id:'base',label:'Підставка',d:'M112 250 Q167 268 222 250 L247 283 Q255 295 241 300 Q167 320 93 300 Q79 295 87 283 Z',details:'<path d="M103 284 Q167 301 231 284" fill="none" stroke="#263b48" stroke-opacity=".3" stroke-width="4" stroke-linecap="round"/>'},
 ],details:face(167,178),cameras:Array.from({length:6},camera),
 rig:{dome:[167,261],base:[167,299],snowbank:[167,261],cottage:[167,229],roof:[167,229],snowflakes:[167,261]},
};
// Compact, original action drawings. Icons are standalone SVG, without external assets.
const actionIcon=(paths)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${paths}</g></svg>`;
const reaction=(id,label,paths,durationMs=2400,loop=false)=>({id,label,icon:actionIcon(paths),loop,durationMs});
snowman.reactions=[
 reaction('winter_greet','Привіт','<path d="M14 36 L14 17 Q14 12 18 15 L22 26 L23 9 Q25 5 28 10 L28 24 L34 13 Q38 10 39 15 L33 34 Q26 45 14 36 M6 10 L9 14 M37 4 L34 7"/>'),
 reaction('winter_bow','Уклін','<circle cx="31" cy="14" r="6"/><path d="M25 22 L16 19 L10 33 M17 20 L25 35 M31 28 Q36 29 39 24 M38 19 L39 24 L44 24"/>'),
 reaction('winter_jump','Підстрибнути','<path d="M10 39 H38 M24 30 V7 M16 15 L24 7 L32 15 M14 31 Q24 21 34 31"/>',1800),
];
tree.reactions=[
 reaction('winter_wind','Вітер','<path d="M5 16 H31 Q42 16 39 9 Q36 3 31 8 M7 24 H38 M5 32 H28 Q38 32 35 39 Q31 44 27 39"/>',2800,true),
 reaction('winter_star','Зірочка','<path d="M24 9 L28 20 L40 20 L30 27 L34 39 L24 32 L14 39 L18 27 L8 20 L20 20 Z"/>'),
 reaction('winter_baubles','Кульки','<circle cx="13" cy="31" r="7"/><circle cx="35" cy="31" r="7"/><path d="M13 18 V6 M8 11 L13 6 L18 11 M35 18 V6 M30 11 L35 6 L40 11"/>'),
];
mittens.reactions=[
 reaction('winter_clap','Хлопки','<path d="M5 35 L13 19 Q17 15 20 20 L22 35 Z M43 35 L35 19 Q31 15 28 20 L26 35 Z M24 5 V12 M12 8 L17 13 M36 8 L31 13"/>'),
 reaction('winter_wave','Помахати','<path d="M17 40 L12 26 Q9 20 13 18 L19 24 V10 Q22 4 25 10 L26 23 Q38 15 36 27 L30 40 Z M6 7 L9 11 M36 6 L33 11"/>'),
 reaction('winter_hops','Стрибки','<path d="M7 37 Q9 29 16 29 Q23 29 25 37 Z M27 24 Q29 16 36 16 Q43 16 44 24 Z M15 21 V7 M10 12 L15 7 L20 12 M35 35 V40"/>'),
];
penguin.reactions=[
 reaction('winter_flap','Крильця','<path d="M24 37 C10 34 4 24 6 12 Q20 15 24 26 Q28 15 42 12 C44 24 38 34 24 37 Z M9 5 L13 9 M39 5 L35 9"/>',2200,true),
 reaction('winter_waddle','Крокувати','<ellipse cx="15" cy="19" rx="6" ry="10" transform="rotate(-15 15 19)"/><ellipse cx="32" cy="31" rx="6" ry="10" transform="rotate(15 32 31)"/>',2200,true),
 reaction('winter_slide','Ковзати','<path d="M6 33 H42 L34 25 M17 11 Q31 6 35 19 L12 24 Q7 18 17 11 Z M5 41 H29"/>',2600),
];
sled.reactions=[
 reaction('winter_ride','Їхати','<path d="M8 19 H33 V30 H12 Z M7 36 H35 Q42 36 42 29 M4 11 H18 M4 25 H8 M32 8 H42 L37 4 M42 8 L37 12"/>',2600,true),
 reaction('winter_rock','Гойдатися','<path d="M9 21 H37 L33 31 H14 Z M6 31 Q24 46 42 31 M9 7 L4 13 L12 14 M4 13 Q24 1 41 13"/>'),
 reaction('winter_bump','На горбочку','<path d="M5 39 Q24 17 43 39 M12 18 H35 M16 13 V18 M31 13 V18 M24 4 V10 M20 8 L24 4 L28 8"/>',1800),
];
snowglobe.reactions=[
 reaction('winter_snowfall','Снігопад','<path d="M12 6 V20 M6 13 H18 M8 9 L16 17 M16 9 L8 17 M34 21 V37 M26 29 H42 M29 24 L39 34 M39 24 L29 34 M12 29 V41 M8 37 L12 41 L16 37"/>',2800,true),
 reaction('winter_shake','Похитати','<circle cx="24" cy="20" r="12"/><path d="M15 32 L12 41 H36 L33 32 M4 12 V29 M1 25 L4 29 L7 25 M44 10 V27 M41 14 L44 10 L47 14"/>'),
 reaction('winter_cottage','Хатинка','<path d="M11 37 V23 L24 12 L37 23 V37 Z M7 24 L24 9 L41 24 M20 37 V28 H28 V37 M16 4 L14 1 M32 4 L34 1"/>'),
];
export const CHARACTERS={winter_snowman:snowman,winter_tree:tree,winter_mittens:mittens,winter_penguin:penguin,winter_sled:sled,winter_snowglobe:snowglobe};
