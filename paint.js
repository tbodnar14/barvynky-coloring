// Fill is a background, never a replacement for the child's marks.
export function visibleActions(actions, part) {
  const own = actions.filter(action => action.part === part);
  const fill = own.filter(action => action.type === 'fill').at(-1);
  return [...(fill ? [fill] : []), ...own.filter(action => action.type !== 'fill')];
}
export function hasPaint(drawing, part) {
  return drawing.actions.some(action => action.part === part && action.type !== 'erase');
}
