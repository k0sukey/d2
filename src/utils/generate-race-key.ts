import fs from 'fs';
import path from 'path';

export async function generateRaceKey(list: string[]) {
  const code: string[] = [];
  code.push('export type RaceKey =');
  list.forEach((v) => code.push(`  | '${v}'`));
  code.push(';');

  await fs.writeFileSync(
    path.join('src', 'models', 'race', 'race-key.ts'),
    code.join('\n'),
  );
}
