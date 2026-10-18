// Original paint geometry. IDs and canonical coordinates are persistent save data.
const steps = ['head','body','upperLeft','upperRight','lowerLeft','lowerRight','spotLeft','spotRight'];
const face = '<path d="M153 91 C147 70 139 63 132 62 M181 91 C187 70 195 63 202 62" fill="none" stroke="#38302d" stroke-width="4.5" stroke-linecap="round"/><circle cx="132" cy="62" r="5" fill="#38302d"/><circle cx="202" cy="62" r="5" fill="#38302d"/><ellipse class="expression-eye" cx="155" cy="108" rx="4.5" ry="6" fill="#252525"/><ellipse class="expression-eye" cx="179" cy="108" rx="4.5" ry="6" fill="#252525"/><path class="expression-mouth" d="M157 121 Q167 132 177 121" fill="none" stroke="#252525" stroke-width="3.5" stroke-linecap="round"/>';
// Self-contained menu icons: flight, an asymmetric greeting, and folded rest.
const reactionIcon = body => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true"><g stroke="#5b4478" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`;
const flightIcon = reactionIcon('<path d="M31 28 C19 9 6 15 11 30 C13 36 20 38 25 37 C12 45 20 55 29 45 L32 35 L35 45 C44 55 52 45 39 37 C44 38 51 36 53 30 C58 15 45 9 33 28Z" fill="#d6b7ef"/><path d="M32 25 V45"/><path d="M20 9 L15 5 M44 9 L49 5 M7 40 L3 44 M57 40 L61 44" fill="none"/>');
const greetIcon = reactionIcon('<path d="M31 29 C19 9 5 16 11 29 C14 36 22 36 29 37 L32 46 L36 34 C48 36 52 28 46 24 C41 22 36 26 33 29Z" fill="#d6b7ef"/><path d="M29 32 C17 36 19 48 27 46 L32 39 C35 47 44 48 44 40 L36 34" fill="#f4d16c"/><path d="M32 27 V46 M9 12 L6 7 M17 8 L17 3" fill="none"/><circle cx="32" cy="25" r="5" fill="#b080d3"/>');
const restIcon = reactionIcon('<path d="M30 26 C21 13 17 17 19 31 L29 49 L32 38 L35 49 L45 31 C47 17 43 13 34 26Z" fill="#d6b7ef"/><path d="M32 28 V45"/><circle cx="32" cy="23" r="8" fill="#f4d16c"/><path d="M27 23 Q29 25 30 23 M34 23 Q36 25 37 23" fill="none"/>');
const menuReactions = () => [
 {id:'flight',label:'Літати',icon:flightIcon,loop:true,durationMs:2200},
 {id:'greet',label:'Привіт',icon:greetIcon,loop:false,durationMs:1800},
 {id:'rest',label:'Відпочити',icon:restIcon,loop:false,durationMs:2800},
];
const head = {id:'head',label:'Голівка',d:'M167 82 C146 82 132 94 132 112 C132 131 147 143 167 143 C187 143 202 131 202 112 C202 94 188 82 167 82 Z'};
const body = {id:'body',label:'Тулуб',d:'M167 130 C153 130 150 154 150 181 C150 221 155 262 167 269 C179 262 184 221 184 181 C184 154 181 130 167 130 Z'};
const labels = {upperLeft:'Ліве верхнє крильце',upperRight:'Праве верхнє крильце',lowerLeft:'Ліве нижнє крильце',lowerRight:'Праве нижнє крильце',spotLeft:'Лівий візерунок',spotRight:'Правий візерунок'};
function model(name,paths){return {
 name,viewBox:'0 0 335 332',steps:[...steps],detailsPart:'head',details:face,reactions:menuReactions(),
 parts:['lowerLeft','lowerRight','upperLeft','upperRight','spotLeft','spotRight'].map(id=>({id,label:labels[id],d:paths[id]})).concat([{...body},{...head}]),
 cameras:steps.map((_,i)=>i===0?{x:-72,y:45,scale:3}:{x:105,y:100,scale:1.95}),
 rig:{upperLeft:[162,165],spotLeft:[162,165],upperRight:[172,165],spotRight:[172,165],lowerLeft:[162,190],lowerRight:[172,190],head:[167,136],body:[167,170]},
};}
export const CHARACTERS = {
 butterfly_round:model('Метелик Веселка',{
  upperLeft:'M165 164 C141 133 124 77 82 61 C45 47 18 73 19 110 C20 153 56 189 105 195 C130 198 151 183 165 164 Z',
  upperRight:'M169 164 C193 133 210 77 252 61 C289 47 316 73 315 110 C314 153 278 189 229 195 C204 198 183 183 169 164 Z',
  lowerLeft:'M163 182 C134 172 91 172 64 196 C40 219 48 255 76 269 C108 285 147 262 161 230 C169 210 170 194 163 182 Z',
  lowerRight:'M171 182 C200 172 243 172 270 196 C294 219 286 255 258 269 C226 285 187 262 173 230 C165 210 164 194 171 182 Z',
  spotLeft:'M91 98 C68 86 46 101 48 122 C50 146 76 164 99 157 C121 151 116 114 91 98 Z',
  spotRight:'M243 98 C266 86 288 101 286 122 C284 146 258 164 235 157 C213 151 218 114 243 98 Z',
 }),
 butterfly_swallowtail:model('Метелик Махаон',{
  upperLeft:'M164 169 C131 122 101 56 38 28 C32 25 28 29 28 37 C28 90 33 136 68 170 C95 197 140 194 164 169 Z',
  upperRight:'M170 169 C203 122 233 56 296 28 C302 25 306 29 306 37 C306 90 301 136 266 170 C239 197 194 194 170 169 Z',
  lowerLeft:'M163 181 C127 173 85 173 67 196 C51 215 57 241 79 249 C75 266 65 288 63 307 C62 315 69 318 75 312 C95 294 112 278 121 256 C148 252 169 215 163 181 Z',
  lowerRight:'M171 181 C207 173 249 173 267 196 C283 215 277 241 255 249 C259 266 269 288 271 307 C272 315 265 318 259 312 C239 294 222 278 213 256 C186 252 165 215 171 181 Z',
  spotLeft:'M58 65 C83 85 106 115 120 150 C98 150 78 135 67 114 C59 99 55 80 58 65 Z',
  spotRight:'M276 65 C251 85 228 115 214 150 C236 150 256 135 267 114 C275 99 279 80 276 65 Z',
 }),
 butterfly_moth:model('Нічний Метелик',{
  upperLeft:'M164 166 C139 119 85 81 22 96 C16 98 15 104 20 110 L44 144 L32 165 C29 171 32 175 40 174 L63 171 L64 191 C65 198 70 199 77 194 L96 182 C116 196 148 191 164 166 Z',
  upperRight:'M170 166 C195 119 249 81 312 96 C318 98 319 104 314 110 L290 144 L302 165 C305 171 302 175 294 174 L271 171 L270 191 C269 198 264 199 257 194 L238 182 C218 196 186 191 170 166 Z',
  lowerLeft:'M162 182 C130 174 87 185 79 211 C72 236 94 263 121 275 C131 279 137 271 138 259 C153 255 166 220 162 182 Z',
  lowerRight:'M172 182 C204 174 247 185 255 211 C262 236 240 263 213 275 C203 279 197 271 196 259 C181 255 168 220 172 182 Z',
  spotLeft:'M88 119 C69 119 59 130 64 144 C69 160 89 169 106 164 C121 160 124 145 113 132 C107 124 97 119 88 119 Z',
  spotRight:'M246 119 C265 119 275 130 270 144 C265 160 245 169 228 164 C213 160 210 145 221 132 C227 124 237 119 246 119 Z',
 }),
 butterfly_leaf:model('Метелик Листочок',{
  upperLeft:'M164 169 C139 132 98 96 30 87 C21 86 17 92 24 100 C47 125 48 151 77 174 C105 197 140 195 164 169 Z',
  upperRight:'M170 169 C195 132 236 96 304 87 C313 86 317 92 310 100 C287 125 286 151 257 174 C229 197 194 195 170 169 Z',
  lowerLeft:'M163 183 C132 166 96 181 83 208 C73 229 81 257 62 280 C60 283 64 287 69 285 C111 274 142 250 157 222 C165 207 168 192 163 183 Z',
  lowerRight:'M171 183 C202 166 238 181 251 208 C261 229 253 257 272 280 C274 283 270 287 265 285 C223 274 192 250 177 222 C169 207 166 192 171 183 Z',
  spotLeft:'M61 111 C82 113 115 132 129 158 C108 168 89 154 78 140 C69 130 65 119 61 111 Z',
  spotRight:'M273 111 C252 113 219 132 205 158 C226 168 245 154 256 140 C265 130 269 119 273 111 Z',
 }),
 butterfly_longwing:model('Метелик Довгокрилик',{
  upperLeft:'M164 169 C146 132 136 69 110 35 C99 21 80 24 74 40 C62 77 78 131 98 165 C115 193 145 198 164 169 Z',
  upperRight:'M170 169 C188 132 198 69 224 35 C235 21 254 24 260 40 C272 77 256 131 236 165 C219 193 189 198 170 169 Z',
  lowerLeft:'M162 180 C139 169 114 184 108 207 C102 230 119 252 141 259 C157 256 168 211 162 180 Z',
  lowerRight:'M172 180 C195 169 220 184 226 207 C232 230 215 252 193 259 C177 256 166 211 172 180 Z',
  spotLeft:'M93 59 C105 75 120 105 127 137 C123 149 114 152 108 141 C96 119 85 83 87 66 C87 61 89 57 93 59 Z',
  spotRight:'M241 59 C229 75 214 105 207 137 C211 149 220 152 226 141 C238 119 249 83 247 66 C247 61 245 57 241 59 Z',
 }),
 butterfly_fan:model('Метелик Віяло',{
  upperLeft:'M164 166 C140 139 123 110 102 96 C86 85 63 82 39 86 C32 87 30 92 34 99 C43 116 43 138 62 154 C90 178 137 186 164 166 Z',
  upperRight:'M170 166 C194 139 211 110 232 96 C248 85 271 82 295 86 C302 87 304 92 300 99 C291 116 291 138 272 154 C244 178 197 186 170 166 Z',
  lowerLeft:'M162 178 C136 164 96 171 70 194 C45 199 28 220 44 242 C25 259 39 282 61 280 C64 301 88 307 108 299 C123 320 150 302 160 271 C171 238 173 198 162 178 Z',
  lowerRight:'M172 178 C198 164 238 171 264 194 C289 199 306 220 290 242 C309 259 295 282 273 280 C270 301 246 307 226 299 C211 320 184 302 174 271 C163 238 161 198 172 178 Z',
  spotLeft:'M118 207 C98 201 74 220 67 242 C61 261 79 278 99 272 C120 263 137 229 118 207 Z',
  spotRight:'M216 207 C236 201 260 220 267 242 C273 261 255 278 235 272 C214 263 197 229 216 207 Z',
 }),

};
// New-only camera/rig refinements. Released geometry and camera arrays stay frozen.
for (const id of ['butterfly_leaf','butterfly_longwing','butterfly_fan']) {
 CHARACTERS[id].cameras = steps.map((_,i)=>i===0?{x:-72,y:45,scale:3}:{x:105,y:82,scale:1.95});
}
CHARACTERS.butterfly_fan.rig.spotLeft = [162,190];
CHARACTERS.butterfly_fan.rig.spotRight = [172,190];
