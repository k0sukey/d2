import { Dendrogram } from './dendrogram';

function recursive(count: number, v: Dendrogram): number {
  if (v.cost === null) {
    return 0;
  }
  return (
    (v.a !== null ? recursive(count, v.a) : 0) +
    (v.b !== null ? recursive(count, v.b) : 0)
  );
}

export function getSumFusion(v: Dendrogram): number {
  return recursive(1, v);
}
