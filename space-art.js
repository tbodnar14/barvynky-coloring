// Original space characters. These IDs and canonical coordinates are permanent
// save-data keys. All painted groups, including their marks, move as a unit.
const full = () => ({x:105,y:125,scale:1.9});
const eyes = (x1,x2,y) => `<ellipse class="expression-eye" cx="${x1}" cy="${y}" rx="6.5" ry="8"/><ellipse class="expression-eye" cx="${x2}" cy="${y}" rx="6.5" ry="8"/>`;
export const CHARACTERS = {
  space_planet: {
    name:'Планета', viewBox:'0 0 335 332',
    steps:['globe','west','east','cap','moon'], detailsPart:'globe',
    parts:[
      {id:'globe',label:'Кругла планета',d:'M157 72 C219 72 269 122 269 184 C269 246 219 296 157 296 C95 296 45 246 45 184 C45 122 95 72 157 72 Z'},
      {id:'west',label:'Великий острів',d:'M84 114 C99 104 123 106 128 120 C132 132 116 140 115 153 C114 165 126 172 118 183 C109 196 89 190 83 178 C79 170 65 168 63 156 C60 143 72 135 74 125 C75 119 78 116 84 114 Z'},
      {id:'east',label:'Другий острів',d:'M192 105 C209 102 225 114 229 127 C233 139 250 144 249 159 C249 174 232 181 218 175 C208 171 205 159 193 155 C179 150 178 137 184 128 C188 121 182 111 192 105 Z'},
      {id:'cap',label:'Південна шапочка',d:'M85 269 C110 254 133 263 157 263 C182 263 206 251 229 269 C210 286 184 296 157 296 C130 296 104 286 85 269 Z'},
      {id:'moon',label:'Маленький супутник',d:'M285 23 C301 23 314 36 314 52 C314 68 301 81 285 81 C269 81 256 68 256 52 C256 36 269 23 285 23 Z',details:'<path d="M272 43 C275 37 282 36 285 40 M291 63 C296 64 300 61 300 57" fill="none" stroke="#000" stroke-opacity=".2" stroke-width="4" stroke-linecap="round"/>'},
    ],
    details:`<g fill="#000">${eyes(132,182,210)}</g><path class="expression-mouth" d="M142 234 C148 246 168 246 174 234" fill="none" stroke="#000" stroke-width="4.8" stroke-linecap="round"/>`,
    cameras:[{x:35,y:-35,scale:2.5},full(),full(),full(),full()],
    rig:{globe:[157,184],west:[157,184],east:[157,184],cap:[157,184],moon:[285,52]},
  },
  space_ringed_planet: {
    name:'Планета з кільцем',viewBox:'0 0 335 332',
    steps:['globe','backRing','frontRing','band','star'],detailsPart:'globe',
    parts:[
      {id:'backRing',label:'Дальня половина кільця',d:'M24 211 C5 180 64 126 151 94 C231 64 300 65 315 92 L292 108 C281 91 226 96 162 119 C89 146 47 180 45 204 Z'},
      {id:'globe',label:'Кругла планета',d:'M166 76 C216 76 257 117 257 167 C257 217 216 258 166 258 C116 258 75 217 75 167 C75 117 116 76 166 76 Z'},
      {id:'band',label:'Смуга на планеті',d:'M99 107 C122 92 145 100 166 105 C191 111 211 108 229 101 C240 111 248 125 252 138 C229 146 204 145 178 137 C145 126 113 126 83 130 C87 121 92 113 99 107 Z'},
      {id:'frontRing',label:'Ближня половина кільця',d:'M24 211 C38 244 115 231 197 194 C272 160 321 120 315 92 L292 108 C289 126 245 159 184 186 C113 218 61 225 45 204 Z'},
      {id:'star',label:'Зірочка',d:'M49 21 C51 18 54 19 55 23 L62 39 L79 42 C83 43 84 46 81 49 L67 61 L70 79 C71 83 68 85 64 83 L49 74 L34 83 C30 85 27 83 28 79 L31 61 L17 49 C14 46 15 43 19 42 L36 39 L44 23 C45 20 47 19 49 21 Z'},
    ],
    details:`<g fill="#000">${eyes(144,187,155)}</g><path class="expression-mouth" d="M151 177 C157 187 174 187 180 177" fill="none" stroke="#000" stroke-width="4.5" stroke-linecap="round"/>`,
    cameras:[{x:-10,y:-10,scale:2.65},full(),full(),full(),full()],
    rig:{globe:[166,167],band:[166,167],backRing:[166,167],frontRing:[166,167],star:[49,52]},
  },
  space_rocket: {
    name:'Ракета',viewBox:'0 0 335 332',
    steps:['body','nose','leftFin','rightFin','window','flame'],detailsPart:'window',
    parts:[
      {id:'flame',label:'Вогник двигуна',d:'M143 243 C137 261 137 281 148 298 L167 323 C169 326 172 322 174 319 L191 291 C200 275 198 257 191 243 Z'},
      {id:'leftFin',label:'Ліве крило',d:'M125 171 C105 183 83 211 76 241 L69 275 C68 280 72 282 76 278 L117 252 L135 217 Z'},
      {id:'rightFin',label:'Праве крило',d:'M209 171 C229 183 251 211 258 241 L265 275 C266 280 262 282 258 278 L217 252 L199 217 Z'},
      {id:'body',label:'Корпус ракети',d:'M120 83 C141 63 193 63 214 83 C222 120 224 184 225 239 C211 255 123 255 109 239 C110 184 112 120 120 83 Z'},
      {id:'nose',label:'Носик ракети',d:'M167 16 C146 29 123 62 113 105 C145 114 189 114 221 105 C211 62 188 29 167 16 Z'},
      {id:'window',label:'Кругле віконце',d:'M167 115 C187 115 203 131 203 151 C203 171 187 187 167 187 C147 187 131 171 131 151 C131 131 147 115 167 115 Z'},
    ],
    details:`<path d="M145 128 C150 123 157 121 164 121" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"/><g fill="#000">${eyes(154,180,146)}</g><path class="expression-mouth" d="M156 165 C161 173 173 173 178 165" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>`,
    cameras:[{x:-45,y:-40,scale:2.8},{x:60,y:90,scale:2.15},full(),full(),full(),full()],
    rig:{body:[167,180],nose:[167,180],window:[167,180],leftFin:[167,180],rightFin:[167,180],flame:[167,248]},
  },
};
