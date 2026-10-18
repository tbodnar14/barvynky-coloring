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
export const CHARACTERS={winter_snowman:snowman,winter_tree:tree,winter_mittens:mittens};
