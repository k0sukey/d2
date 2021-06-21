import fs from 'fs';
import path from 'path';

export async function generateFusionResult(
  key: string,
  keys: string[],
  list: string[],
): Promise<string> {
  const code: string[] = [];
  code.push(`import { RaceKey } from '../../models/race/race-key';

export function get${key}FusionResult(key: RaceKey): RaceKey | null {
  switch (key) {`);
  keys.forEach((v, i) => {
    if (list[i] === '---') {
      code.push(`    case '${v}':
      return null;`);
    } else {
      code.push(`    case '${v}':
      return '${list[i]}';`);
    }
  });
  code.push(`    default:
      throw new Error('Invalid race');
  }
}
`);

  const name = `get-${key.toLowerCase()}-fusion-result`;
  await fs.writeFileSync(
    path.join('src', 'lib', 'fusion', `${name}.ts`),
    code.join('\n'),
  );
  return name;
}
