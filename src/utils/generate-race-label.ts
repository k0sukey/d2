import fs from 'fs';
import path from 'path';

export async function generateRaceLabel(list: string[]) {
  const code: string[] = [];
  code.push('export type RaceLabel =');
  list.forEach((v) => code.push(`  | '${v}'`));
  code.push(';');

  await fs.writeFileSync(
    path.join('src', 'models', 'race', 'race-label.ts'),
    code.join('\n'),
  );
}
