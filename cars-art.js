// Original friendly vehicles. Permanent IDs and canonical paint coordinates.
const circle=(x,y,r)=>`M${x-r} ${y} C${x-r} ${y-r*.5523} ${x-r*.5523} ${y-r} ${x} ${y-r} C${x+r*.5523} ${y-r} ${x+r} ${y-r*.5523} ${x+r} ${y} C${x+r} ${y+r*.5523} ${x+r*.5523} ${y+r} ${x} ${y+r} C${x-r*.5523} ${y+r} ${x-r} ${y+r*.5523} ${x-r} ${y} Z`;
const wheel=(id,x)=>({id,label:id==='rearWheel'?'Заднє колесо':'Переднє колесо',d:circle(x,254,35),details:`<circle cx="${x}" cy="254" r="13" fill="none" stroke="#253950" stroke-width="4"/><path d="M${x} 226 L${x} 237 M${x+28} 254 L${x+17} 254 M${x} 282 L${x} 271 M${x-28} 254 L${x-17} 254" fill="none" stroke="#253950" stroke-width="3" stroke-linecap="round"/>`});
const face=(x1,x2,y)=>`<ellipse class="expression-eye" cx="${x1}" cy="${y}" rx="6" ry="8" fill="#152438"/><ellipse class="expression-eye" cx="${x2}" cy="${y}" rx="6" ry="8" fill="#152438"/><path class="expression-mouth" d="M${x1+2} ${y+17} C${x1+8} ${y+26} ${x2-8} ${y+26} ${x2-2} ${y+17}" fill="none" stroke="#152438" stroke-width="3.5" stroke-linecap="round"/>`;
const camera=()=>({x:72,y:25,scale:2.12});
function vehicle(name,parts,steps,detailsPart,details){return{name,viewBox:'0 0 335 332',parts,steps,detailsPart,details,cameras:steps.map(camera),rig:Object.fromEntries(parts.map(p=>[p.id,p.id==='rearWheel'?[80,254]:p.id==='frontWheel'?[254,254]:[167,238]]))};}
export const CHARACTERS={
 car_compact:vehicle('Маленька машинка',[
  {id:'body',label:'Кузов машинки',d:'M24 185 C28 173 48 172 62 170 L87 124 C96 109 111 101 133 101 L186 101 C207 101 221 112 237 137 L258 168 L294 180 C311 185 317 195 317 215 L317 234 C317 246 306 252 293 252 L38 252 C23 252 17 243 17 230 L17 204 C17 195 19 190 24 185 Z'},
  {id:'window',label:'Віконце',d:'M85 167 L108 129 C111 123 119 119 132 119 L184 119 C196 119 203 124 211 135 L233 167 Z'},
  {id:'bumper',label:'Бампер',d:'M24 218 L310 218 L310 235 C310 241 305 243 296 243 L37 243 C29 243 24 239 24 233 Z'},
  {id:'lamp',label:'Фара',d:'M273 183 C289 185 303 192 305 204 L305 212 L270 212 C265 212 263 208 264 201 C264 191 267 185 273 183 Z'},
  wheel('rearWheel',80),wheel('frontWheel',254)
 ],['body','window','rearWheel','frontWheel','bumper','lamp'],'window',face(142,179,139)),
 car_bus:vehicle('Автобус',[
  {id:'body',label:'Кузов автобуса',d:'M26 105 C26 89 38 81 54 81 L277 81 C296 81 310 98 310 119 L310 234 C310 246 303 253 290 253 L41 253 C28 253 21 246 21 233 L21 123 C21 116 23 111 26 105 Z'},
  {id:'rearWindow',label:'Вікна пасажирів',d:'M44 111 L99 111 L99 171 L44 171 Z M112 111 L166 111 L166 171 L112 171 Z',details:'<path d="M44 145 L99 145 M112 145 L166 145" fill="none" stroke="#253950" stroke-width="3"/>'},
  {id:'window',label:'Переднє віконце',d:'M185 111 L273 111 C285 111 291 118 291 131 L291 171 L185 171 Z'},
  {id:'bumper',label:'Весела смужка',d:'M28 199 L303 199 L303 223 L28 223 Z'},
  wheel('rearWheel',80),wheel('frontWheel',254)
 ],['body','window','rearWindow','rearWheel','frontWheel','bumper'],'window',face(220,257,134)),
 car_fire:vehicle('Пожежна машинка',[
  {id:'body',label:'Кузов пожежної машинки',d:'M24 150 C24 140 30 134 41 134 L181 134 L181 108 C181 99 188 94 198 94 L257 94 C269 94 276 101 284 115 L311 160 C317 170 319 181 319 194 L319 237 C319 248 311 253 299 253 L38 253 C25 253 19 245 19 233 L19 167 C19 160 21 154 24 150 Z'},
  {id:'ladder',label:'Драбина',d:'M30 95 C30 91 33 88 37 88 L171 88 C175 88 178 91 178 95 L178 116 C178 120 175 123 171 123 L37 123 C33 123 30 120 30 116 Z M49 116 L62 116 L62 139 L49 139 Z M146 116 L159 116 L159 139 L146 139 Z',details:'<path d="M39 99 L169 99 M39 112 L169 112 M53 98 L53 113 M79 98 L79 113 M105 98 L105 113 M131 98 L131 113 M157 98 L157 113" fill="none" stroke="#253950" stroke-width="3" stroke-linecap="round"/>'},
  {id:'window',label:'Віконце водія',d:'M198 113 L252 113 C258 113 263 117 267 124 L288 162 L198 162 Z'},
  {id:'equipment',label:'Відсік для спорядження',d:'M40 153 L163 153 L163 216 L40 216 Z',details:'<path d="M51 172 L151 172 M51 190 L151 190 M94 204 L111 204" fill="none" stroke="#253950" stroke-width="3" stroke-linecap="round"/>'},
  {id:'beacon',label:'Маячок',d:'M205 96 L205 76 C205 65 214 60 225 60 C236 60 245 65 245 76 L245 96 Z'},
  wheel('rearWheel',80),wheel('frontWheel',254)
 ],['body','window','rearWheel','frontWheel','ladder','equipment','beacon'],'window',face(222,254,132))
};
