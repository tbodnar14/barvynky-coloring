// Original paint geometry. IDs and canonical coordinates are persistent save data.
const steps = ['head','body','upperLeft','upperRight','lowerLeft','lowerRight','spotLeft','spotRight'];
const face = '<path d="M153 91 C147 70 139 63 132 62 M181 91 C187 70 195 63 202 62" fill="none" stroke="#38302d" stroke-width="4.5" stroke-linecap="round"/><circle cx="132" cy="62" r="5" fill="#38302d"/><circle cx="202" cy="62" r="5" fill="#38302d"/><ellipse class="expression-eye" cx="155" cy="108" rx="4.5" ry="6" fill="#252525"/><ellipse class="expression-eye" cx="179" cy="108" rx="4.5" ry="6" fill="#252525"/><path class="expression-mouth" d="M157 121 Q167 132 177 121" fill="none" stroke="#252525" stroke-width="3.5" stroke-linecap="round"/>';
const head = {id:'head',label:'Голівка',d:'M167 82 C146 82 132 94 132 112 C132 131 147 143 167 143 C187 143 202 131 202 112 C202 94 188 82 167 82 Z'};
const body = {id:'body',label:'Тулуб',d:'M167 130 C153 130 150 154 150 181 C150 221 155 262 167 269 C179 262 184 221 184 181 C184 154 181 130 167 130 Z'};
const labels = {upperLeft:'Ліве верхнє крильце',upperRight:'Праве верхнє крильце',lowerLeft:'Ліве нижнє крильце',lowerRight:'Праве нижнє крильце',spotLeft:'Лівий візерунок',spotRight:'Правий візерунок'};
function model(name,paths){return {
 name,viewBox:'0 0 335 332',steps:[...steps],detailsPart:'head',details:face,
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
};
