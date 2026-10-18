// Original Barvynky artwork. The locked reference tab establishes only the baby
// icon; it does not establish a paid character inventory. No external assets.
// Permanent IDs and canonical geometry are saved-drawing compatibility data.
const face = '<g fill="#26242a"><ellipse class="expression-eye" cx="143" cy="103" rx="5" ry="7"/><ellipse class="expression-eye" cx="191" cy="103" rx="5" ry="7"/></g><path class="expression-mouth" d="M154 122 Q167 137 180 122" fill="none" stroke="#26242a" stroke-width="4" stroke-linecap="round"/>';
const head = 'M167 39 C133 39 111 61 111 91 C96 85 94 111 112 114 C117 141 139 154 167 154 C195 154 217 141 222 114 C240 111 238 85 223 91 C223 61 201 39 167 39 Z';
const leftArm = 'M124 155 C110 150 101 160 94 175 L75 213 C69 212 64 217 66 224 C58 229 66 241 74 240 C78 252 93 244 96 235 L120 199 C134 184 139 167 124 155 Z';
const rightArm = 'M210 155 C224 150 233 160 240 175 L259 213 C265 212 270 217 268 224 C276 229 268 241 260 240 C256 252 241 244 238 235 L214 199 C200 184 195 167 210 155 Z';
const leftLeg = 'M132 233 L160 233 L158 295 C158 307 144 311 121 309 C109 308 109 297 119 292 L130 288 Z';
const rightLeg = 'M174 233 L202 233 L204 288 L215 292 C225 297 225 308 213 309 C190 311 176 307 176 295 Z';
const part=(id,label,d,details)=>({id,label,d,...(details?{details}:{})});
const full=()=>({x:85,y:58,scale:2.05});
function child({name,hair,outfit,outfitDetails,extra,arms=[leftArm,rightArm],legs=[leftLeg,rightLeg],faceMarkup=face}) {
 const steps=['head','hair','outfit','leftarm','rightarm','leftleg','rightleg',...(extra?[extra.id]:[])];
 return {name,viewBox:'0 0 335 332',detailsPart:'head',details:faceMarkup,steps,
  // Arms/legs tuck under clothing. Hair and head share exactly one motion pivot.
  parts:[part('leftleg','Ліва ніжка',legs[0]),part('rightleg','Права ніжка',legs[1]),part('leftarm','Ліва ручка',arms[0]),part('rightarm','Права ручка',arms[1]),part('outfit','Одяг',outfit,outfitDetails),part('head','Голівка',head),part('hair','Зачіска або шапочка',hair),...(extra?[extra]:[])],
  cameras:steps.map((_,i)=>i<2?{x:-38,y:43,scale:2.8}:full()),
  rig:{head:[167,151],hair:[167,151],outfit:[167,226],leftarm:[120,164],rightarm:[214,164],leftleg:[145,238],rightleg:[189,238],...(extra?{[extra.id]:extra.id==='bow'?[167,151]:[167,226]}:{})}
 };
}
export const PEOPLE = {
 kid_baby: child({name:'Малятко',
  hair:'M145 54 C136 43 143 27 156 29 C154 12 180 10 185 27 C202 24 213 40 200 53 C192 40 183 42 177 52 C165 43 154 44 145 54 Z',
  outfit:'M131 145 Q167 160 203 145 C226 163 224 193 218 213 L207 261 Q189 274 167 256 Q145 274 127 261 L116 213 C110 193 108 163 131 145 Z',
  legs:['M132 241 C143 237 155 245 154 258 L142 280 C130 296 106 303 87 298 C75 295 74 280 86 276 L116 260 Z','M202 241 C191 237 179 245 180 258 L192 280 C204 296 228 303 247 298 C259 295 260 280 248 276 L218 260 Z'],
  extra:part('bib','Слинявчик','M140 153 Q167 164 194 153 L192 184 C190 211 144 211 142 184 Z','<path d="M155 181 Q167 191 179 181" fill="none" stroke="#303038" stroke-width="3" stroke-linecap="round"/>')
 }),
 kid_bows: child({name:'Малючка з бантиком',
  hair:'M114 85 C96 90 84 72 91 56 C95 45 109 43 119 51 C129 22 152 22 168 28 C190 18 216 37 220 52 C232 43 248 48 251 61 C255 78 242 92 222 85 L218 99 C209 79 194 74 180 66 C166 88 134 88 114 85 Z',
  outfit:'M130 147 Q167 161 204 147 L215 180 L204 191 L231 264 Q167 287 103 264 L130 191 L119 180 Z',
  extra:part('bow','Бантик','M170 44 C157 21 137 18 137 34 L138 58 C143 69 160 57 170 50 C181 66 201 70 201 56 L202 33 C198 20 180 33 170 44 Z')
 }),
 kid_curls: child({name:'Кучерявий малюк',
  hair:'M110 91 C96 86 97 69 108 63 C98 47 111 32 126 36 C128 19 146 15 158 26 C168 9 190 17 193 30 C210 21 225 31 224 46 C242 45 248 64 235 75 C242 88 229 99 218 92 L214 72 Q196 82 183 65 Q171 82 157 67 Q144 84 131 72 L121 96 Z',
  outfit:'M128 146 Q167 161 206 146 L222 180 L207 190 L209 263 L177 263 L167 239 L157 263 L125 263 L127 190 L112 180 Z',
  outfitDetails:'<path d="M145 155 L145 183 L189 183 L189 155" fill="none" stroke="#303038" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  extra:part('pocket','Кишенька','M147 195 L187 195 L185 222 Q167 238 149 222 Z')
 }),
 kid_rain: child({name:'Малюк у дощовику',
  hair:'M109 100 C93 57 112 17 167 17 C222 17 241 57 225 100 L214 109 C217 59 194 42 167 42 C140 42 117 59 120 109 Z',
  outfit:'M129 145 Q167 163 205 145 L225 179 L213 191 L222 269 Q167 284 112 269 L121 191 L109 179 Z',
  legs:['M130 247 L159 247 L157 290 C154 305 135 313 113 309 C100 306 103 292 117 287 L128 282 Z','M175 247 L204 247 L206 282 L217 287 C231 292 234 306 221 309 C199 313 180 305 177 290 Z'],
  extra:part('pocket','Кишеня для скарбів','M147 207 L187 207 L187 235 Q167 250 147 235 Z','<path d="M151 212 L183 212" stroke="#303038" stroke-width="3"/>')
 }),
 kid_sleepy: child({name:'Сонний малюк',
  hair:'M111 78 C111 41 133 16 165 19 C198 19 214 35 241 26 C256 22 267 35 261 49 C257 61 241 64 233 53 C216 59 218 69 221 79 Q166 63 111 78 Z',
  outfit:'M130 145 Q167 161 204 145 L223 177 L210 190 L211 272 L178 273 L167 243 L156 273 L123 272 L124 190 L111 177 Z',
  extra:part('star','Зірочка на піжамі','M167 178 L177 198 L199 201 L183 217 L187 240 L167 229 L147 240 L151 217 L135 201 L157 198 Z'),
  faceMarkup:'<path class="expression-eye" d="M137 103 Q143 111 149 103 M185 103 Q191 111 197 103" fill="none" stroke="#26242a" stroke-width="4" stroke-linecap="round"/><path class="expression-mouth" d="M157 124 Q167 131 177 124" fill="none" stroke="#26242a" stroke-width="4" stroke-linecap="round"/>'
 })
};

// Sixth original child: the toque and apron give a distinct, broad silhouette.
PEOPLE.kid_chef = child({name:'Малюк-кухар',
 hair:'M111 80 L110 61 C92 56 89 37 104 27 C115 18 131 22 137 30 C141 10 168 9 179 25 C192 8 219 17 220 34 C240 29 254 46 245 61 Q238 73 224 70 L223 82 Q166 93 111 80 Z',
 outfit:'M128 147 Q167 161 206 147 L225 179 L210 192 L211 264 L178 264 L167 240 L156 264 L123 264 L124 192 L109 179 Z',
 outfitDetails:'<path d="M117 174 L130 180 M204 180 L217 174" fill="none" stroke="#303038" stroke-width="3" stroke-linecap="round"/>',
 extra:part('apron','Фартушок','M145 155 L189 155 L190 193 L208 245 Q167 260 126 245 L144 193 Z','<path d="M148 209 L186 209 L185 228 Q167 238 149 228 Z" fill="none" stroke="#303038" stroke-width="3" stroke-linejoin="round"/>')
});
const peopleActionIcon=(paths)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${paths}</g></svg>`;
const peopleIcons={
 wave:peopleActionIcon('<path d="M17 40 L12 26 Q9 20 13 18 L19 24 V10 Q22 4 25 10 L26 23 Q38 15 36 27 L30 40 Z M6 7 L9 11 M36 6 L33 11"/>'),
 dance:peopleActionIcon('<circle cx="24" cy="9" r="5"/><path d="M24 16 L21 29 L10 39 M21 29 L32 39 M22 21 L9 15 M23 21 L37 17 M37 7 V12 M34 10 H40"/>'),
 jump:peopleActionIcon('<path d="M9 41 H39 M24 29 V6 M16 14 L24 6 L32 14 M13 32 Q24 23 35 32"/>'),
};
// Each menu has three different trajectories; IDs are unique to each model.
for(const [id,model] of Object.entries(PEOPLE)) model.reactions=[
 {id:id+'_wave',label:'Помахати',icon:peopleIcons.wave,loop:false,durationMs:2200},
 {id:id+'_dance',label:'Танцювати',icon:peopleIcons.dance,loop:true,durationMs:2400},
 {id:id+'_jump',label:'Підстрибнути',icon:peopleIcons.jump,loop:false,durationMs:1600},
];

export const PEOPLE_CATALOG = Object.freeze(Object.keys(PEOPLE));
// A category-scoped control uses the existing engine's free/guided model.
// It retains all paint and the current step when switching either direction.
export function peopleModeButton(d) {
 if(!PEOPLE[d?.animal]||d.completed)return '';
 const free=d.mode==='free';
 return `<button class="people-mode" data-action="people-mode" aria-label="${free?'Покроково':'Вільно малювати'}">${free?'Покроково':'Вільно малювати'}</button>`;
}
