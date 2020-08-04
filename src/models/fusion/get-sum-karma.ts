import { Dendrogram } from '../devil/dendrogram';

function getKarma(v: number): number {
  if (v === 1) {
    return 3;
  } else if (v === 2) {
    return 10;
  }
  throw new Error('Invalid Devil');
}

function recursive(cost: number, v: Dendrogram): number {
  if (v.cost === null) {
    return getKarma(v.rare);
  }
  return (
    (v.a !== null ? recursive(cost, v.a) : getKarma(v.rare)) +
    (v.b !== null ? recursive(cost, v.b) : getKarma(v.rare))
  );
}

export function getSumKarma(v: Dendrogram): number {
  return recursive(0, v);
}
