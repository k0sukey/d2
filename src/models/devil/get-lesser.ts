import { Devil } from './devil';
import { fromRace } from './from-race';

export function getLesser(target: Devil): Devil | null {
  const devils = [...fromRace(target.race).getSacrifices().orderByGradeDesc()];
  let result: Devil | null = null;

  for (let i = 0; i < devils.length; i++) {
    const candidate = devils[i];
    if (candidate.grade === target.grade) {
      result = devils[i + 1] ?? null;
    }
  }

  return result;
}
