import { NextApiRequest, NextApiResponse } from 'next';

import { getCost } from '../../../src/models/fusion/get-cost';
import { getSacrifices } from '../../../src/models/fusion/get-sacrifices';
import { Dendrogram } from '../../../src/models/devil/dendrogram';
import { Devil } from '../../../src/models/devil/devil';
import { getAll } from '../../../src/models/devil/get-all';

function terminatedSacrifice(result: Devil): Dendrogram {
  return { ...result, a: null, b: null, cost: null };
}

function getDumpingSacrifices(
  result: Devil,
  sacrifices: [Devil, Devil][],
): [Devil, Devil][] {
  const a = sacrifices.filter(
    ([a, b]) => a.grade < result.grade && b.grade < result.grade,
  );
  if (a.length > 0) {
    return a;
  }

  const b = sacrifices.filter(
    ([a, b]) =>
      (a.grade <= result.grade && b.grade < result.grade) ||
      (a.grade < result.grade && b.grade <= result.grade),
  );
  if (b.length > 0) {
    return b;
  }

  const c = sacrifices.filter(
    ([a, b]) => a.grade <= result.grade && b.grade <= result.grade,
  );
  if (c.length > 0) {
    return c;
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
      a1.rare +
      b1.grade +
      b1.rare -
      (a2.grade + a2.rare + b2.grade + b2.rare),
  );

  const [a, b] = sacrifices[0];
  return {
    ...result,
    a:
      a !== undefined && a.rare > 2
        ? recursiveSacrifices(a, ancestors.concat(a.no))
        : terminatedSacrifice(a),
    b:
      b !== undefined && b.rare > 2
        ? recursiveSacrifices(b, ancestors.concat(b.no))
        : terminatedSacrifice(b),
    cost: a === undefined || b === undefined ? null : getCost(result, a, b),
  };
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { no },
  } = req;

  if (Array.isArray(no)) {
    res.status(404);
    return;
  }

  const devils = getAll();
  const result = devils.find(parseInt(no, 10));

  if (result === null) {
    res.status(404);
    return;
  }

  const response = recursiveSacrifices(result, [result.no]);
  res.status(200).json(response);
};
