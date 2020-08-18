import { Devil } from '../devil/devil';
import { Dendrogram } from './dendrogram';
import { getSacrifices } from './get-sacrifices';
import { getMagnetite } from './get-magnetite';

function terminatedSacrifice(result: Devil): Dendrogram {
  return { ...result, a: null, b: null, cost: null };
}

function getDumpingSacrifices(
  result: Devil,
  sacrifices: [Devil, Devil][],
): [Devil, Devil][] {
  const a = sacrifices.filter(([a, b]) => a.rarity === 2 && b.rarity === 2);
  if (a.length > 0) {
    return a;
  }

  const b = sacrifices.filter(
    ([a, b]) => a.grade < result.grade && b.grade < result.grade,
  );
  if (b.length > 0) {
    return b;
  }

  const c = sacrifices.filter(
    ([a, b]) =>
      (a.grade <= result.grade && b.grade < result.grade) ||
      (a.grade < result.grade && b.grade <= result.grade),
  );
  if (c.length > 0) {
    return c;
  }

  const d = sacrifices.filter(
    ([a, b]) => a.grade <= result.grade && b.grade <= result.grade,
  );
  if (d.length > 0) {
    return d;
  }

  return sacrifices;
}

function recursiveSacrifices(result: Devil, ancestors: number[]): Dendrogram {
  const sacrifices = getDumpingSacrifices(
    result,
    getSacrifices(result).filter(
      ([a, b]) => !ancestors.includes(a.no) && !ancestors.includes(b.no),
    ),
  );
  sacrifices.sort(
    ([a1, b1], [a2, b2]) =>
      a1.grade +
      a1.rarity +
      b1.grade +
      b1.rarity -
      (a2.grade + a2.rarity + b2.grade + b2.rarity),
  );

  const [a, b] = sacrifices[0];
  return {
    ...result,
    a:
      a !== undefined && a.rarity > 2
        ? recursiveSacrifices(a, ancestors.concat(a.no))
        : terminatedSacrifice(a),
    b:
      b !== undefined && b.rarity > 2
        ? recursiveSacrifices(b, ancestors.concat(b.no))
        : terminatedSacrifice(b),
    cost:
      a === undefined || b === undefined ? null : getMagnetite(result, a, b),
  };
}

export function getDendrogram(result: Devil): Dendrogram {
  return recursiveSacrifices(result, [result.no]);
}
