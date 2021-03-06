import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';
import { format } from 'prettier';

import { getAll } from '../models/devil/get-all';
import { getMagnetite } from '../models/fusion/get-magnetite';
import { getSacrifices } from '../models/fusion/get-sacrifices';

const root = path.join('src', 'data', 'fusion');
const list = [...getAll().getSacrifices()].map((devil) => {
  const race = devil.race.toLowerCase();
  const dir = path.join(root, race);
  mkdirp.sync(dir);

  const sacrifices = getSacrifices(devil);
  sacrifices.sort(
    ([a1, b1], [a2, b2]) =>
      a1.grade +
      a1.rarity +
      b1.grade +
      b1.rarity -
      (a2.grade + a2.rarity + b2.grade + b2.rarity),
  );
  const [a, b] = devil.rarity > 2 ? sacrifices[0] : [null, null];
  const cost = a !== null && b !== null ? getMagnetite(devil, a, b) : null;
  fs.writeFileSync(
    path.join(dir, `${devil.no}.json`),
    format(JSON.stringify({ ...devil, a, b, cost }), {
      parser: 'json',
    }),
  );
  return {
    import: `import ${race}${devil.no} from './${race}/${devil.no}.json';`,
    export: `${race}${devil.no}`,
  };
});

fs.writeFileSync(
  path.join(root, 'index.ts'),
  format(
    `${list.map((v) => v.import).join('\n')}

export {
  ${list.map((v) => v.export).join(`,\n`)}
};`,
    { parser: 'typescript', singleQuote: true, trailingComma: 'all' },
  ),
);
