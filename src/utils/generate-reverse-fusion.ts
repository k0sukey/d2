import fs from 'fs';
import path from 'path';
import { format } from 'prettier';

export function generateReverseFusion(keys: string[], list: string[][]) {
  const results: { [key: string]: [string, string][] } = {};
  keys.forEach((vertical, i1) => {
    list[i1].forEach((result, i2) => {
      if (result === '---') {
        return;
      }
      if (results[result] === undefined) {
        results[result] = [];
      }

      const found = results[result].find(
        ([v, h]) =>
          (v === vertical && h === keys[i2]) ||
          (v === keys[i2] && h === vertical),
      );
      if (found) {
        return;
      }

      results[result].push([vertical, keys[i2]]);
    });
  });
  results['Enigma'] = [];
  results['Entity'] = [];
  results['Rumor'] = [];
  results['UMA'] = [];
  results['Zealot'] = [];

  fs.writeFileSync(
    path.join('src', 'data', 'reverse-fusion.json'),
    format(JSON.stringify(results), { parser: 'json' }),
  );
}
