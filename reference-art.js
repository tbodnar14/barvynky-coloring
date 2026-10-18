// Original vectors, drawn against the observed scene proportions. No screenshot
// pixels or application resources are embedded here. Coordinates are shared by
// every part: a step changes the camera, never the anatomy or a saved stroke.
import { ANIMALS as LEGACY } from './art.js';

const fullCamera = () => ({ x: 217, y: 180, scale: 1.64 });
const sheep = {
  name: 'Овечка',
  viewBox: '0 0 335 332',
  detailsPart: 'head',
  steps: ['head', 'tuft', 'ears', 'inner', 'body', 'tail', 'legs1', 'legs2', 'hooves1', 'hooves2'],
  // The observed close-up brings both ears in front of the forelock while
  // they are painted. The finished character tucks them behind it again.
  foregroundByStep: { ears: ['ears'], inner: ['ears', 'inner'], body: ['body'] },
  // Back-to-front drawing order is independent of the teaching order above.
  parts: [
    { id: 'legs2', label: 'Друга пара ніжок', d: 'M120 223 C126 225 138 225 149 221 L149 306 L120 306 Z M210 227 C220 231 230 230 240 224 L240 306 L210 306 Z' },
    { id: 'hooves2', label: 'Друга пара копитець', d: 'M120 289 L149 289 L149 313 Q149 316 146 315 L135 308 L124 315 Q120 317 120 313 Z M210 289 L240 289 L240 313 Q240 316 237 315 L225 308 L214 315 Q210 317 210 313 Z' },
    { id: 'tail', label: 'Хвостик', d: 'M50 78 C41 65 22 68 17 82 C13 87 14 93 15 97 C3 100 -1 112 0 122 C0 132 10 138 22 135 C19 148 28 160 41 158 C56 161 66 149 63 137 C79 139 88 124 82 113 C86 99 77 89 65 90 C64 79 57 72 50 78 Z' },
    { id: 'body', label: 'Пухнастий тулуб', d: 'M73.24095 102.02753 C71.86741 101.33934 70.49387 101.33934 70.49387 99.27478 C69.8071 80.69373 84.22924 66.2418 106.20584 66.2418 C123.37506 64.17724 136.42366 71.74729 141.91781 84.82285 C142.60458 86.88741 143.97811 86.88741 145.35165 84.82285 C154.27964 68.99455 167.32825 65.55361 183.12393 66.92998 C206.47406 66.92998 226.39035 80.69373 232.57127 95.83384 C233.25803 97.8984 234.63157 98.58659 236.69188 97.8984 C250.42725 93.76928 266.22293 99.27478 276.52446 108.9094 C288.88629 119.92039 289.57306 137.12507 285.45245 148.82425 C284.76568 150.88881 285.45245 152.26518 287.51276 152.95337 C304.68197 160.52343 307.42905 181.85723 287.51276 196.30916 C285.45245 197.68553 285.45245 199.0619 286.82599 201.12647 C295.06721 219.01933 284.07891 236.91219 265.53616 234.84763 C263.47585 234.84763 262.10232 235.53582 261.41555 237.60038 C255.23463 252.7405 239.43895 263.75149 221.58297 256.18143 C219.52266 255.49325 218.14912 256.18143 216.77559 258.24599 C209.9079 271.32155 199.60637 272.69792 189.30484 262.37512 C187.93131 260.99874 186.55777 260.99874 185.18423 262.37512 C169.38855 275.45067 146.72519 273.38611 132.30305 260.31055 C130.24274 258.24599 128.8692 258.93418 127.49567 260.99874 C115.13383 273.38611 93.84401 270.63336 78.04833 263.75149 C64.31295 255.49325 58.81881 246.54681 58.13204 236.22401 C58.13204 234.15945 56.7585 233.47126 54.69819 234.15945 C36.84221 236.91219 27.22745 223.14845 36.15544 202.50284 C37.52898 200.43828 36.84221 199.0619 34.7819 198.37372 C14.86561 190.80366 16.92592 159.83524 36.84221 144.69513 C38.90252 143.31875 38.90252 141.94238 36.84221 140.566 C25.16714 130.93138 30.66129 110.28577 44.39666 103.4039 C53.32466 99.27478 63.62619 98.58659 73.24095 102.02753 Z' },
    { id: 'legs1', label: 'Перша пара ніжок', d: 'M74 230.2 C83 233.2 94 234.2 104 229.2 L104 318 L74 318 Z M164 228.8 C175 233.8 185 236 194 238.5 L194 318 L164 318 Z' },
    { id: 'hooves1', label: 'Перша пара копитець', d: 'M74 306 L104 306 L104 329 Q104 332 101 331 L89 324 L78 331 Q74 333 74 329 Z M164 306 L194 306 L194 329 Q194 332 191 331 L179 324 L168 331 Q164 333 164 329 Z' },
    { id: 'ears', label: 'Вушка', d: 'M163 64 C153 51 131 58 115 72 C104 81 97 97 99 105 C101 116 126 119 143 111 C159 104 173 78 163 64 Z M271 64 C281 51 303 58 319 72 C330 81 337 97 335 105 C333 116 308 119 291 111 C275 104 261 78 271 64 Z' },
    { id: 'head', label: 'Голівка', d: 'M220 24 C172 24 149 67 149 125 C149 161 174 180 220 180 C266 180 292 161 292 125 C292 67 268 24 220 24 Z' },
    { id: 'inner', label: 'Серединки вушок', d: 'M152 72 C145 64 132 68 122 77 C114 83 109 95 111 100 C113 106 128 107 139 102 C150 97 159 80 152 72 Z M282 72 C289 64 302 68 312 77 C320 83 325 95 323 100 C321 106 306 107 295 102 C284 97 275 80 282 72 Z' },
    { id: 'tuft', label: 'Чубчик', d: 'M172.76878 25.93024 C172.76878 27.92465 169.81474 26.92745 166.86071 25.93024 C150.12118 22.93861 134.36633 34.90512 134.36633 48.86605 C134.36633 54.84931 137.32036 59.83536 141.25907 63.82419 C143.22843 65.81861 143.22843 67.81303 141.25907 69.80745 C133.38165 80.77675 137.32036 93.74048 148.15182 97.72931 C160.95264 102.71536 172.76878 95.7349 176.70749 83.76838 C177.69217 80.77675 179.66153 79.77954 182.61556 80.77675 C196.40106 86.76001 210.18655 84.76559 218.06398 75.79071 C220.03333 72.79908 222.00269 73.79629 223.97205 76.78792 C231.84947 86.76001 245.63497 91.74606 257.45111 88.75443 C260.40514 87.75722 261.38982 88.75443 264.34386 91.74606 C276.15999 100.72094 288.96081 98.72652 294.86888 86.76001 C300.77695 75.79071 295.85356 65.81861 287.97613 59.83536 C286.00678 57.84094 286.00678 55.84652 287.97613 52.85489 C295.85356 38.89396 285.0221 22.93861 271.2366 21.9414 C266.31321 20.94419 261.38982 21.9414 258.43579 23.93582 C255.48175 25.93024 254.49707 23.93582 254.49707 21.9414 C250.55836 7.98047 238.74222 1 229.88012 6.98326 C225.9414 8.97768 222.98737 11.9693 222.00269 14.96093 C221.01801 17.95256 218.06398 17.95256 217.0793 14.96093 C213.14059 4.98884 205.26316 1 197.38573 1 C182.61556 1 171.7841 10.97209 172.76878 25.93024 Z' },
  ],
  details: '<g fill="#000"><circle cx="192" cy="103" r="8.5"/><circle cx="247" cy="103" r="8.5"/><path d="M199 124 C199 116.7 241 116.7 241 124 C241 132.5 230 141.7 220 142.5 C210 141.7 199 132.5 199 124 Z"/></g><path d="M220 141.5 L220 163 M195 148 C195 168 246 168 246 148" fill="none" stroke="#000" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>',
  cameras: [
    // Scene-space transforms at the 1200 × 900 comparison size. The main
    // renderer adds the blue guide halo outside the active shape's path.
    { x: -332.75, y: 67, scale: 3.75 },
    { x: -212.5, y: 161, scale: 3.25 },
    { x: 0, y: 247, scale: 2.28 },
    { x: 0, y: 247, scale: 2.28 },
    { x: 177, y: 210.4, scale: 1.78 }, fullCamera(), fullCamera(), fullCamera(), fullCamera(), fullCamera(),
  ],
};

// The available reference research has no verified cat/fish step sequence.
// Reuse our own original drawings, with an assembled camera model. Keeping
// these paths independent of old records also preserves legacy save geometry.
function remapPath(d, scale, dx, dy) {
  let coordinate = 0;
  return d.replace(/-?\d+(?:\.\d+)?/g, value => {
    const offset = coordinate++ % 2 ? dy : dx;
    return String(Math.round((Number(value) * scale + offset) * 1000) / 1000);
  });
}
function adaptedAnimal(id, transform, steps, cameras) {
  const source = LEGACY[id];
  const [scale, dx, dy] = transform;
  const face = id === 'cat'
    ? '<g fill="#000"><ellipse cx="259" cy="201" rx="8" ry="11"/><ellipse cx="341" cy="201" rx="8" ry="11"/><path d="M290 220 Q300 216 310 220 Q309 229 300 232 Q291 229 290 220Z"/></g><g fill="none" stroke="#000" stroke-width="5" stroke-linecap="round"><path d="M300 232 L300 238 M284 237 Q289 249 300 239 Q311 249 316 237 M220 219 L182 213 M221 232 L185 239 M380 219 L418 213 M379 232 L415 239"/></g>'
    : '<ellipse cx="411" cy="228" rx="9" ry="12" fill="#000"/><path d="M426 267 Q437 281 450 267" fill="none" stroke="#000" stroke-width="5" stroke-linecap="round"/>';
  return {
    name: source.name,
    viewBox: '0 0 335 332',
    steps,
    parts: source.parts.map(({ id: partId, label, d }) => ({ id: partId, label, d: remapPath(d, scale, dx, dy) })),
    detailsPart: id === 'cat' ? 'head' : 'body',
    details: `<g transform="translate(${dx} ${dy}) scale(${scale})">${face}</g>`,
    cameras,
  };
}

export const ANIMALS = {
  sheep,
  cat: adaptedAnimal('cat', [1, -132, -80], ['head', 'ears', 'body', 'soft', 'tail'], [
    { x: 47, y: 196, scale: 2.65 },
    { x: 47, y: 196, scale: 2.65 },
    fullCamera(), fullCamera(), fullCamera(),
  ]),
  fish: adaptedAnimal('fish', [0.92, -109, -58], ['body', 'tail', 'fins', 'stripe', 'sidefin'], [
    { x: 110, y: 165, scale: 2.05 },
    fullCamera(), fullCamera(), fullCamera(), fullCamera(),
  ]),
  free: {
    name: 'Вільний малюнок',
    viewBox: '0 0 638 758',
    parts: [{ id: 'paper', label: 'Аркуш', d: 'M0 0 H638 V758 H0 Z' }],
    steps: ['paper'],
    details: '',
    cameras: [{ x: 176, y: 72, scale: 1 }],
  },
};
