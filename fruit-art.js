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
