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
export const CHARACTERS = {halloween_pumpkin:pumpkin,halloween_ghost:ghost,halloween_bat:bat};
