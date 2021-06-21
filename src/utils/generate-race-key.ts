import fs from 'fs';
import path from 'path';

export async function generateRaceKey(list: string[]): Promise<void> {
  const code: string[] = [];
  code.push('export type RaceKey =');
  list.forEach((v) => code.push(`  | '${v}'`));
  code.push(`  | 'Enigma'`);
  code.push(`  | 'Entity'`);
  code.push(`  | 'Rumor'`);
  code.push(`  | 'UMA'`);
  code.push(`  | 'Zealot'`);
  code.push(';');

  await fs.writeFileSync(
    path.join('src', 'models', 'race', 'race-key.ts'),
    `${code.join('\n')}
`,
  );
}
