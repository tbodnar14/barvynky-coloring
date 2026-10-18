// Catalogue identity is independent of the most recently created draft.
export function catalogDrawing(records, animal) {
  const candidates = records.filter(d => d.animal === animal && !d.deleted && d.artVersion === 3);
  const completed = candidates.filter(d => d.completed);
  return [...(completed.length ? completed : candidates)].sort((a,b)=>(b.updated||0)-(a.updated||0))[0];
}
// A generous gesture-length cue, not a coverage/accuracy score. The native
// app's exact threshold is unknown; native verification remains required.
export function stepReady(drawing, part, scale = 1) {
  const own = drawing.actions.filter(a => a.part === part);
  if (own.some(a => a.type === 'fill')) return true;
  return own.filter(a=>a.type==='stroke').reduce((sum,a)=>sum+(a.travel||0)*scale,0)>=180;
}
export function toolCenters(active) {
  return ({pencil:[116.5,292.5,454,616.5,779],fill:[102,278.5,454,616.5,779],spray:[102,264,440,616.5,779],crayon:[102,264,425.5,601,779],erase:[102,264,425.5,586,764.5]})[active];
}
