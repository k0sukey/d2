import { Devil } from './devil';
import { fromRace } from './from-race';

export function getLesser(target: Devil): Devil | null {
  const devils = fromRace(target.race).orderByGradeDesc();
  const filtered = [...devils].filter((v) => v.fusion);
  let result: Devil | null = null;

  for (let i = 0; i < filtered.length; i++) {
    const candidate = filtered[i];
    if (candidate.grade === target.grade) {
      result = filtered[i + 1] ?? null;
    }
  }

  return result;
}
