// Original, hand-authored paint regions for the next content release.
// Every path uses absolute coordinates in a stable 335 × 332 space. Cameras
// move the assembled animal; saved strokes stay in these canonical coordinates.
const rabbitCamera = () => ({ x: 100, y: 120, scale: 1.95 });
const turtleCamera = () => ({ x: 100, y: 110, scale: 1.95 });

const rabbit = {
  name: 'Зайчик',
  viewBox: '0 0 335 332',
  steps: ['head', 'leftEar', 'rightEar', 'body', 'belly', 'leftPaw', 'rightPaw'],
  detailsPart: 'head',
  parts: [
    {
      id: 'leftEar', label: 'Ліве вушко',
      d: 'M123 132 C108 128 96 109 87 86 C75 56 72 22 85 10 C97 -1 112 12 123 37 C137 68 143 105 135 123 C132 129 128 132 123 132 Z',
    },
    {
      id: 'rightEar', label: 'Праве вушко',
      d: 'M211 132 C226 128 238 109 247 86 C259 56 262 22 249 10 C237 -1 222 12 211 37 C197 68 191 105 199 123 C202 129 206 132 211 132 Z',
    },
    {
      id: 'body', label: 'Тулуб',
      d: 'M167 199 C129 199 105 224 103 260 C100 292 123 312 167 312 C211 312 234 292 231 260 C229 224 205 199 167 199 Z',
    },
    {
      id: 'head', label: 'Голівка',
      d: 'M167 107 C118 107 80 130 80 169 C80 205 116 229 167 229 C218 229 254 205 254 169 C254 130 216 107 167 107 Z',
    },
    {
      id: 'belly', label: 'Животик',
      d: 'M167 233 C148 233 134 250 133 270 C132 289 144 300 167 300 C190 300 202 289 201 270 C200 250 186 233 167 233 Z',
    },
    {
      id: 'leftPaw', label: 'Ліва лапка',
      d: 'M109 286 C85 284 65 292 64 306 C63 318 80 325 106 325 C132 325 148 320 148 309 C148 297 132 288 109 286 Z',
    },
    {
      id: 'rightPaw', label: 'Права лапка',
      d: 'M225 286 C249 284 269 292 270 306 C271 318 254 325 228 325 C202 325 186 320 186 309 C186 297 202 288 225 286 Z',
    },
  ],
  details: '<g fill="#000"><ellipse class="expression-eye" cx="135" cy="160" rx="7.5" ry="9"/><ellipse class="expression-eye" cx="199" cy="160" rx="7.5" ry="9"/><path d="M156 180 C156 175 178 175 178 180 C178 185 171 190 167 190 C163 190 156 185 156 180 Z"/></g><path class="expression-mouth" d="M167 189 L167 195 M147 194 C148 205 160 207 167 197 C174 207 186 205 187 194" fill="none" stroke="#000" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>',
  cameras: [
    { x: -103, y: -70, scale: 3.25 },
    { x: 35, y: 90, scale: 2.4 },
    { x: 35, y: 90, scale: 2.4 },
    rabbitCamera(), rabbitCamera(), rabbitCamera(), rabbitCamera(),
  ],
  // CSS/SVG articulation pivots, expressed in the same coordinates as paint.
  // Head nods carry its face; ears can make independent small tilts.
  rig: {
    leftEar: [123, 123], rightEar: [211, 123], head: [167, 211],
    body: [167, 286], belly: [167, 286],
    leftPaw: [110, 304], rightPaw: [224, 304],
  },
};

const turtle = {
  name: 'Черепаха',
  viewBox: '0 0 335 332',
  steps: ['shell', 'head', 'backLeg', 'frontLeg', 'tail', 'belly', 'plates'],
  detailsPart: 'head',
  parts: [
    {
      id: 'tail', label: 'Хвостик',
      d: 'M58 212 C43 212 28 208 16 202 C12 200 10 203 13 207 C23 225 39 239 58 241 C66 238 68 220 58 212 Z',
    },
    {
      id: 'backLeg', label: 'Задня ніжка',
      d: 'M79 243 C77 258 71 270 70 281 C69 287 73 291 81 291 L112 291 C118 291 120 286 117 280 C113 269 111 257 111 246 Z',
    },
    {
      id: 'frontLeg', label: 'Передня ніжка',
      d: 'M211 246 C211 259 207 273 206 282 C205 288 209 291 217 291 L249 291 C257 291 259 286 254 279 C245 267 242 253 242 243 Z',
    },
    {
      id: 'head', label: 'Голівка та шия',
      d: 'M245 174 C243 153 246 123 266 104 C280 90 304 91 317 108 C331 127 327 150 308 164 C292 175 276 178 265 194 C257 195 247 185 245 174 Z',
    },
    {
      id: 'shell', label: 'Панцир',
      d: 'M50 217 C50 166 91 133 154 133 C211 133 257 164 262 211 C267 247 226 271 159 272 C96 273 51 255 50 217 Z',
    },
    {
      id: 'belly', label: 'Нижній край панцира',
      d: 'M54 234 C91 261 222 268 260 231 C256 251 224 276 157 278 C105 278 66 264 54 241 C52 238 52 235 54 234 Z',
    },
    {
      id: 'plates', label: 'Візерунок панцира',
      d: 'M116 167 C135 158 169 156 192 162 L215 199 L197 235 C171 242 138 239 112 229 L94 197 Z',
      // The seams belong to this last step. They never appear as future
      // contours during earlier shell/head/feet painting stages.
      details: '<path d="M116 167 C135 158 169 156 192 162 L215 199 L197 235 C171 242 138 239 112 229 L94 197 Z M116 167 L105 143 M192 162 L208 146 M215 199 L258 191 M197 235 L219 259 M112 229 L94 257 M94 197 L52 194" fill="none" stroke="#263c20" stroke-width="3.5" stroke-opacity=".72" stroke-linejoin="round" stroke-linecap="round"/>',
    },
  ],
  details: '<ellipse class="expression-eye" cx="298" cy="124" rx="7" ry="9" fill="#000"/><path class="expression-mouth" d="M299 147 C305 153 314 151 319 145" fill="none" stroke="#000" stroke-width="4.2" stroke-linecap="round"/>',
  cameras: [
    { x: 45, y: -90, scale: 2.5 },
    { x: 90, y: 80, scale: 2.05 },
    turtleCamera(), turtleCamera(), turtleCamera(), turtleCamera(), turtleCamera(),
  ],
  // Shell, belly and plates move as one; the head/neck pivots where it enters
  // the shell. Small alternating foot rotations suggest walking in place.
  rig: {
    head: [260, 177], shell: [156, 244], belly: [156, 244], plates: [156, 244],
    backLeg: [89, 248], frontLeg: [226, 249], tail: [54, 224],
  },
};

export const NEW_ANIMALS = { rabbit, turtle };

// Original puppy: floppy ears, broad muzzle and short rounded paws.
// Appended content leaves both released NEW_ANIMALS models untouched.
const puppyCamera=()=>({x:110,y:100,scale:1.9});
NEW_ANIMALS.puppy={
 name:'Цуцик',viewBox:'0 0 335 332',
 steps:['head','leftEar','rightEar','body','chest','tail','paws','muzzle'],detailsPart:'muzzle',
 parts:[
  {id:'tail',label:'Хвостик',d:'M220 244 C249 253 265 236 263 210 C261 187 273 178 286 190 C303 207 297 238 282 257 C266 278 239 279 220 265 Z'},
  {id:'body',label:'Тулуб',d:'M145 168 C121 178 109 207 109 250 C108 283 129 298 168 298 C207 298 230 283 229 250 C229 207 217 178 191 168 Z'},
  {id:'leftEar',label:'Ліве висяче вушко',d:'M108 76 C84 60 65 76 59 103 C51 130 49 175 67 193 C78 205 96 195 104 177 C113 155 119 119 121 96 Z'},
  {id:'rightEar',label:'Праве висяче вушко',d:'M226 76 C250 60 269 76 275 103 C283 130 285 175 267 193 C256 205 238 195 230 177 C221 155 215 119 213 96 Z'},
  {id:'head',label:'Голівка',d:'M167 57 C120 57 89 85 90 128 C88 169 114 196 167 196 C220 196 246 169 244 128 C245 85 214 57 167 57 Z',details:'<g fill="#20252b"><ellipse class="expression-eye" cx="137" cy="123" rx="7" ry="9"/><ellipse class="expression-eye" cx="197" cy="123" rx="7" ry="9"/></g>'},
  {id:'chest',label:'Грудка',d:'M167 207 C146 207 132 226 132 250 C132 272 145 285 167 285 C189 285 202 272 202 250 C202 226 188 207 167 207 Z'},
  {id:'paws',label:'Круглі лапки',d:'M117 271 C94 271 79 282 82 297 C84 310 103 314 123 312 C144 311 153 304 150 291 C148 279 134 271 117 271 Z M217 271 C240 271 255 282 252 297 C250 310 231 314 211 312 C190 311 181 304 184 291 C186 279 200 271 217 271 Z',details:'<path d="M104 295 L104 303 M119 296 L119 305 M215 296 L215 305 M230 295 L230 303" fill="none" stroke="#493425" stroke-opacity=".55" stroke-width="3" stroke-linecap="round"/>'},
  {id:'muzzle',label:'Мордочка',d:'M167 148 C149 135 118 142 112 164 C105 188 127 207 149 204 Q167 213 185 204 C207 207 229 188 222 164 C216 142 185 135 167 148 Z'},
 ],
 details:'<path d="M152 158 C152 149 182 149 182 158 C181 168 172 174 167 174 C162 174 153 168 152 158 Z" fill="#20252b"/><path class="expression-mouth" d="M167 174 L167 184 M148 182 Q151 196 167 185 Q183 196 186 182" fill="none" stroke="#20252b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>',
 cameras:[{x:-90,y:0,scale:3},puppyCamera(),puppyCamera(),puppyCamera(),puppyCamera(),puppyCamera(),puppyCamera(),puppyCamera()],
 rig:{head:[167,184],muzzle:[167,184],leftEar:[167,184],rightEar:[167,184],body:[167,278],chest:[167,278],tail:[229,256],paws:[167,296]},
};
