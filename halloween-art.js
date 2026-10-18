// Original friendly Halloween characters; canonical geometry is save-data ABI.
const camera = () => ({x:110,y:100,scale:1.9});
const face = (y=160) => `<ellipse class="expression-eye" cx="143" cy="${y}" rx="7" ry="9" fill="#25212d"/><ellipse class="expression-eye" cx="192" cy="${y}" rx="7" ry="9" fill="#25212d"/><path class="expression-mouth" d="M149 ${y+24} C158 ${y+40} 178 ${y+40} 187 ${y+24}" fill="none" stroke="#25212d" stroke-width="5" stroke-linecap="round"/>`;
const pumpkin = {
 name:'Гарбузик',viewBox:'0 0 335 332',detailsPart:'body',details:face(176),
 steps:['body','leftLobe','rightLobe','stem','leaf'],
 parts:[
  {id:'stem',label:'Хвостик',d:'M148 100 C151 78 147 55 140 39 C153 31 175 31 190 39 C180 59 179 80 183 100 Z'},
  {id:'body',label:'Гарбузик',d:'M167 94 C100 63 49 103 40 171 C29 243 76 293 130 288 C156 306 184 304 209 288 C267 295 306 243 295 173 C286 106 235 63 167 94 Z'},
  {id:'leftLobe',label:'Лівий бочок',d:'M108 101 C71 112 53 144 52 186 C51 231 74 266 110 276 C89 242 80 205 84 167 C87 140 96 117 108 101 Z'},
  {id:'rightLobe',label:'Правий бочок',d:'M227 101 C264 112 282 144 283 186 C284 231 261 266 225 276 C246 242 255 205 251 167 C248 140 239 117 227 101 Z'},
  {id:'leaf',label:'Листочок',d:'M177 89 C193 53 226 43 260 58 C257 88 229 110 198 99 C188 95 182 93 177 89 Z',details:'<path d="M187 88 C206 76 223 69 245 64" fill="none" stroke="#355b2e" stroke-width="3" stroke-linecap="round"/>'},
 ],cameras:Array.from({length:5},camera),rig:{body:[167,284],leftLobe:[167,284],rightLobe:[167,284],stem:[167,96],leaf:[181,90]}
};
const ghost = {
 name:'Привиденя',viewBox:'0 0 335 332',detailsPart:'body',details:face(131),
 steps:['body','leftArm','rightArm','bowLeft','bowRight'],
 parts:[
  {id:'leftArm',label:'Ліва ручка',d:'M99 161 C79 151 58 132 46 116 C35 103 20 115 27 132 C36 158 54 183 84 196 C98 192 104 178 99 161 Z'},
  {id:'rightArm',label:'Права ручка',d:'M236 161 C256 151 277 132 289 116 C300 103 315 115 308 132 C299 158 281 183 251 196 C237 192 231 178 236 161 Z'},
  {id:'body',label:'Привиденя',d:'M167 40 C111 40 83 81 83 135 L83 230 C82 254 69 270 61 284 C58 290 65 296 73 293 C93 282 111 280 126 294 C140 307 154 310 168 295 C181 280 195 283 209 295 C226 308 241 295 249 280 C258 266 272 283 278 275 C283 268 251 247 251 225 L251 135 C251 81 223 40 167 40 Z'},
  {id:'bowLeft',label:'Ліве крильце бантика',d:'M166 206 C147 189 120 181 114 196 C110 207 112 226 122 235 C134 241 154 225 166 219 Z'},
  {id:'bowRight',label:'Праве крильце бантика',d:'M166 206 C185 189 212 181 218 196 C222 207 220 226 210 235 C198 241 178 225 166 219 Z'},
 ],cameras:Array.from({length:5},camera),rig:{body:[167,220],leftArm:[91,175],rightArm:[244,175],bowLeft:[167,220],bowRight:[167,220]}
};
const bat = {
 name:'Кажанчик',viewBox:'0 0 335 332',detailsPart:'body',details:face(133),
 steps:['body','leftWing','rightWing','leftEar','rightEar','belly'],
 parts:[
  {id:'leftWing',label:'Ліве крильце',d:'M134 157 C106 146 75 112 44 96 C37 120 25 140 13 154 C35 152 47 165 50 188 C67 177 83 186 86 209 C105 198 122 209 130 228 L147 190 Z'},
  {id:'rightWing',label:'Праве крильце',d:'M201 157 C229 146 260 112 291 96 C298 120 310 140 322 154 C300 152 288 165 285 188 C268 177 252 186 249 209 C230 198 213 209 205 228 L188 190 Z'},
  {id:'leftEar',label:'Ліве вушко',d:'M122 109 C104 92 96 64 104 35 C126 44 146 70 149 101 Z'},
  {id:'rightEar',label:'Праве вушко',d:'M213 109 C231 92 239 64 231 35 C209 44 189 70 186 101 Z'},
  {id:'body',label:'Кажанчик',d:'M167 84 C127 84 107 112 111 146 C114 166 128 176 125 191 C113 244 127 282 167 282 C207 282 221 244 209 191 C206 176 220 166 223 146 C227 112 207 84 167 84 Z'},
  {id:'belly',label:'Животик',d:'M167 195 C144 195 136 216 138 237 C140 257 149 267 167 267 C185 267 194 257 196 237 C198 216 190 195 167 195 Z'},
 ],cameras:Array.from({length:6},camera),rig:{body:[167,230],belly:[167,230],leftEar:[167,230],rightEar:[167,230],leftWing:[134,174],rightWing:[201,174]}
};


// v0.8 additions. Released models above retain exact geometry and ordering.
const spider = {
 name:'Павучок',viewBox:'0 0 335 332',detailsPart:'head',
 steps:['body','head','frontLeft','frontRight','rearLeft','rearRight'],
 parts:[
  {id:'rearLeft',label:'Ліві задні ніжки',d:'M132 203 C100 192 74 199 54 219 L27 246 C20 253 26 265 35 260 L69 234 C84 222 107 220 131 228 Z M135 228 C111 231 90 248 81 267 L68 295 C64 305 77 312 83 303 L102 278 C111 265 124 257 145 251 Z'},
  {id:'rearRight',label:'Праві задні ніжки',d:'M203 203 C235 192 261 199 281 219 L308 246 C315 253 309 265 300 260 L266 234 C251 222 228 220 204 228 Z M200 228 C224 231 245 248 254 267 L267 295 C271 305 258 312 252 303 L233 278 C224 265 211 257 190 251 Z'},
  {id:'frontLeft',label:'Ліві передні ніжки',d:'M135 169 C105 157 82 142 69 120 L53 93 C47 84 34 90 38 101 L51 135 C63 164 88 183 124 194 Z M125 189 C94 178 66 176 45 183 L20 192 C10 196 14 210 25 208 L52 204 C76 199 97 207 125 215 Z'},
  {id:'frontRight',label:'Праві передні ніжки',d:'M200 169 C230 157 253 142 266 120 L282 93 C288 84 301 90 297 101 L284 135 C272 164 247 183 211 194 Z M210 189 C241 178 269 176 290 183 L315 192 C325 196 321 210 310 208 L283 204 C259 199 238 207 210 215 Z'},
  {id:'body',label:'Тільце',d:'M167 147 C125 147 104 178 104 217 C104 255 129 278 167 278 C205 278 230 255 230 217 C230 178 209 147 167 147 Z'},
  {id:'head',label:'Голівка',d:'M167 67 C128 67 107 91 107 120 C107 155 133 176 167 176 C201 176 227 155 227 120 C227 91 206 67 167 67 Z'},
 ],details:face(112),cameras:Array.from({length:6},camera),rig:{body:[167,211],head:[167,166],frontLeft:[128,182],frontRight:[207,182],rearLeft:[131,225],rearRight:[204,225]}
};
const hat = {
 name:'Чарівний капелюшок',viewBox:'0 0 335 332',detailsPart:'crown',
 steps:['crown','brim','band','buckle','star'],
 parts:[
  {id:'crown',label:'Верх капелюшка',d:'M83 244 C108 205 119 168 130 124 C140 85 157 47 188 23 C197 16 206 22 203 32 C197 54 200 77 213 96 C220 108 215 117 205 116 L190 112 C197 158 217 204 252 244 Z'},
  {id:'brim',label:'Криси',d:'M167 229 C86 227 24 238 20 260 C16 282 83 302 166 302 C249 302 316 282 312 260 C308 238 248 227 167 229 Z'},
  {id:'band',label:'Стрічка',d:'M106 203 C139 214 197 214 228 203 L246 231 C202 247 133 247 88 231 Z'},
  {id:'buckle',label:'Пряжка',d:'M151 207 L185 207 C190 207 193 210 193 215 L193 234 C193 239 190 242 185 242 L151 242 C146 242 143 239 143 234 L143 215 C143 210 146 207 151 207 Z',details:'<path d="M155 217 L181 217 L181 232 L155 232 Z" fill="none" stroke="#473826" stroke-width="3" stroke-linejoin="round"/>'},
  {id:'star',label:'Зірочка',d:'M254 241 L262 254 L278 257 L266 267 L267 283 L253 277 L239 283 L240 267 L229 257 L246 254 Z'},
 ],details:face(162),cameras:Array.from({length:5},camera),rig:{crown:[167,231],band:[167,231],buckle:[167,231],brim:[167,268],star:[254,263]}
};
const cauldron = {
 name:'Чарівний казанок',viewBox:'0 0 335 332',detailsPart:'body',
 steps:['body','rim','leftHandle','rightHandle','leftBubble','rightBubble'],
 parts:[
  {id:'leftHandle',label:'Ліва ручка',d:'M99 171 C73 153 44 166 44 190 C44 218 74 228 99 211 L94 197 C81 207 61 201 61 189 C61 179 77 173 91 185 Z'},
  {id:'rightHandle',label:'Права ручка',d:'M236 171 C262 153 291 166 291 190 C291 218 261 228 236 211 L241 197 C254 207 274 201 274 189 C274 179 258 173 244 185 Z'},
  {id:'body',label:'Казанок',d:'M86 161 C73 199 75 244 97 270 L87 296 C83 307 98 313 105 303 L120 285 C149 297 187 297 216 285 L231 303 C238 313 253 307 249 296 L239 270 C261 244 263 199 250 161 Z'},
  {id:'rim',label:'Край казанка',d:'M167 141 C111 141 75 151 75 164 C75 181 113 191 167 191 C221 191 259 181 259 164 C259 151 223 141 167 141 Z'},
  {id:'leftBubble',label:'Ліва бульбашка',d:'M120 79 C103 79 92 91 92 107 C92 123 103 135 120 135 C137 135 148 123 148 107 C148 91 137 79 120 79 Z'},
  {id:'rightBubble',label:'Права бульбашка',d:'M205 38 C183 38 169 53 169 73 C169 93 183 108 205 108 C227 108 241 93 241 73 C241 53 227 38 205 38 Z'},
 ],details:face(218),cameras:Array.from({length:6},camera),rig:{body:[167,282],rim:[167,282],leftHandle:[91,188],rightHandle:[244,188],leftBubble:[120,107],rightBubble:[205,73]}
};

// Trusted, original SVG pictograms consumed by the shared reaction renderer.
const actionIcon = (shape) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true"><g fill="#f8df53" stroke="#63528b" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">${shape}</g></svg>`;
const reactionIcons = {
 sway:actionIcon('<path d="M15 20 Q32 8 49 20 L45 14 M49 20 L43 24" fill="none"/><path d="M14 34 Q32 23 50 34 L47 46 Q32 56 17 46 Z"/><path d="M21 55 Q32 59 43 55" fill="none"/>'),
 bounce:actionIcon('<path d="M24 19 L32 9 L40 19 M32 10 L32 29" fill="none"/><path d="M18 37 Q32 29 46 37 L44 49 Q32 57 20 49 Z"/><path d="M14 59 L50 59" fill="none"/>'),
 wink:actionIcon('<circle cx="32" cy="32" r="23"/><path d="M19 27 Q24 20 29 27" fill="none"/><ellipse cx="41" cy="26" rx="3" ry="5" fill="#63528b"/><path d="M22 39 Q32 50 43 39" fill="none"/>'),
 float:actionIcon('<path d="M17 39 L17 26 C17 6 47 6 47 26 L47 39 L40 35 L32 41 L24 35 Z"/><path d="M10 50 Q19 45 28 50 Q37 55 54 49 M20 58 Q32 54 43 58" fill="none"/><circle cx="26" cy="25" r="2" fill="#63528b"/><circle cx="38" cy="25" r="2" fill="#63528b"/>'),
 wave:actionIcon('<path d="M22 51 C14 44 13 33 16 30 C20 27 23 32 24 36 L24 16 C24 9 31 9 31 16 L31 28 L34 12 C36 6 42 9 41 16 L39 30 C50 22 53 29 49 35 L43 46 C39 55 30 58 22 51 Z"/><path d="M11 15 Q5 24 8 32 M48 9 Q56 14 57 22" fill="none"/>'),
 dance:actionIcon('<path d="M26 20 C26 9 40 9 40 20 C40 31 26 31 26 20 Z M32 30 L32 43 M32 35 L17 28 M32 35 L47 27 M32 43 L21 54 M32 43 L44 54" fill="none"/><path d="M48 13 L48 5 L57 3 L57 12" fill="none"/><circle cx="45" cy="14" r="3"/><circle cx="54" cy="13" r="3"/>'),
 fly:actionIcon('<path d="M31 35 C23 22 17 15 7 13 L10 30 L17 29 L19 40 Z M33 35 C41 22 47 15 57 13 L54 30 L47 29 L45 40 Z"/><path d="M17 49 Q32 56 47 49 M20 57 L16 48 L25 48" fill="none"/>'),
 listen:actionIcon('<path d="M23 44 C14 35 12 15 20 8 C32 20 32 35 23 44 Z M41 44 C50 35 52 15 44 8 C32 20 32 35 41 44 Z"/><path d="M5 23 Q1 31 6 39 M59 23 Q63 31 58 39" fill="none"/>'),
 cuddle:actionIcon('<path d="M32 29 C24 13 10 21 15 33 L32 48 L49 33 C54 21 40 13 32 29 Z" fill="#f39ab9"/><path d="M10 12 Q6 42 27 52 L21 34 Z M54 12 Q58 42 37 52 L43 34 Z"/>'),
 walk:actionIcon('<ellipse cx="21" cy="39" rx="8" ry="12" transform="rotate(20 21 39)"/><ellipse cx="42" cy="24" rx="8" ry="12" transform="rotate(20 42 24)"/><circle cx="22" cy="21" r="4"/><circle cx="45" cy="7" r="4"/>'),
 curl:actionIcon('<ellipse cx="32" cy="32" rx="14" ry="18"/><path d="M14 16 Q2 27 17 32 M50 16 Q62 27 47 32 M14 48 Q2 37 17 32 M50 48 Q62 37 47 32" fill="none"/>'),
 bow:actionIcon('<path d="M17 44 L30 15 L45 44 Z M10 47 Q32 38 54 47 L52 53 L12 53 Z"/><path d="M44 10 Q58 14 56 30 L51 24 M56 30 L61 24" fill="none"/>'),
 magic:actionIcon('<path d="M32 9 L39 24 L55 26 L43 38 L46 54 L32 46 L18 54 L21 38 L9 26 L25 24 Z"/><path d="M6 9 L9 13 M57 8 L54 13" fill="none"/>'),
 bubble:actionIcon('<path d="M12 40 L52 40 Q52 58 32 58 Q12 58 12 40 Z"/><circle cx="20" cy="27" r="7"/><circle cx="42" cy="15" r="10"/>'),
 rock:actionIcon('<path d="M14 25 L50 25 Q52 49 32 49 Q12 49 14 25 Z"/><path d="M10 55 Q32 65 54 55 M10 55 L14 50 M54 55 L50 50" fill="none"/>'),
};
const action=(id,label,loop,durationMs)=>({id,label,icon:reactionIcons[id],loop,durationMs});
pumpkin.reactions=[action('sway','Гойдатися',true,2200),action('bounce','Підстрибнути',false,1400),action('wink','Підморгнути',false,1500)];
ghost.reactions=[action('float','Літати',true,3000),action('wave','Помахати',false,1600),action('dance','Танцювати',true,2000)];
bat.reactions=[action('fly','Летіти',true,1600),action('listen','Прислухатися',false,1800),action('cuddle','Обійнятися',false,2000)];
spider.reactions=[action('walk','Крокувати',true,1800),action('wave','Помахати',false,1700),action('curl','Згорнутися',false,1900)];
hat.reactions=[action('bow','Вклонитися',false,1500),action('magic','Чарувати',true,2600),action('bounce','Підстрибнути',false,1500)];
cauldron.reactions=[action('bubble','Булькати',true,2400),action('rock','Гойдатися',true,2100),action('wave','Помахати',false,1700)];
export const CHARACTERS = {halloween_pumpkin:pumpkin,halloween_ghost:ghost,halloween_bat:bat,halloween_spider:spider,halloween_hat:hat,halloween_cauldron:cauldron};
