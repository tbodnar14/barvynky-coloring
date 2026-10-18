import { DINOSAURS } from './dinosaur-art.js';

export { DINOSAURS };
export const DINOSAUR_IDS = Object.freeze(['bronto', 'stego', 'triceratops', 'ankylosaur', 'friendly_trex', 'pterosaur']);
export const DINOSAUR_CATEGORY = Object.freeze({ id: 'dino', name: 'Динозаври', color: '#27b17a', ids: DINOSAUR_IDS });

// A long neck, four feet, rounded muzzle and long tail read at tab size.
// White silhouette matches the existing category system; no emoji/font asset.
export function dinosaurCategorySVG() {
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true"><path fill="white" d="M25 56 C17 57 10 52 5 47 Q2 45 3 49 C6 60 14 68 25 70 L25 83 Q25 86 29 86 H35 Q39 86 39 82 L39 72 L55 72 L56 83 Q56 86 60 86 H66 Q70 86 69 82 L68 68 C74 57 74 39 74 26 C81 28 92 25 93 18 C95 10 87 5 78 5 C68 5 61 11 61 20 L61 49 C49 44 32 46 25 56 Z"/><circle cx="81" cy="15" r="2.7" fill="#23855e"/><path d="M85 23 Q89 25 92 22" fill="none" stroke="#23855e" stroke-width="1.7" stroke-linecap="round"/></svg>';
}
