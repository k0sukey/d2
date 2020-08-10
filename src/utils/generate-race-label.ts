import fs from 'fs';
import path from 'path';

export async function generateRaceLabel(list: string[]) {
  const code: string[] = [];
  code.push('export type RaceLabel =');
  list.forEach((v) => code.push(`  | '${v}'`));
  code.push(`  | '秘神'`);
  code.push(`  | '威霊'`);
  code.push(`  | '怪異'`);
  code.push(`  | '珍獣'`);
  code.push(`  | '狂神'`);
  code.push(';');

  await fs.writeFileSync(
    path.join('src', 'models', 'race', 'race-label.ts'),
    code.join('\n'),
  );
}
