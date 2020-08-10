import fs from 'fs';
import path from 'path';

export async function generateRaceMap(keys: string[], labels: string[]) {
  const code: string[] = [];
  code.push(`import { RaceKey } from './race-key';
import { RaceLabel } from './race-label';

export const raceMap = new Map<RaceKey, RaceLabel>([`);
  keys.forEach((v, i) => code.push(`  ['${v}', '${labels[i]}'],`));
  code.push(`  ['Enigma', '秘神'],`);
  code.push(`  ['Entity', '威霊'],`);
  code.push(`  ['Rumor', '怪異'],`);
  code.push(`  ['UMA', '珍獣'],`);
  code.push(`  ['Zealot', '狂神'],`);
  code.push(']);');

  await fs.writeFileSync(
    path.join('src', 'models', 'race', 'race-map.ts'),
    code.join('\n'),
  );
}
