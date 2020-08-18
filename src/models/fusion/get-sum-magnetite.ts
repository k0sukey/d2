import { Dendrogram } from './dendrogram';

function recursive(cost: number, v: Dendrogram): number {
  if (v.cost === null) {
    return 0;
  }
  return (
    v.cost +
    (v.a !== null ? recursive(cost, v.a) : 0) +
    (v.b !== null ? recursive(cost, v.b) : 0)
  );
}

export function getSumMagnetite(v: Dendrogram): number {
  return recursive(0, v);
}
