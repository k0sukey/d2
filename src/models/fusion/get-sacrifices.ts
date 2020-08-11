import reverseFusion from '../../data/reverse-fusion.json';
import { Devil } from '../devil/devil';
import { getAll } from '../devil/get-all';
import { getLesser } from '../devil/get-lesser';
import { RaceKey } from '../race/race-key';

/**
 * refs https://wikiwiki.jp/d2-megaten-l/%E4%BA%8C%E8%BA%AB%E5%90%88%E4%BD%93
 * Math.floor((a.grade + b.grade) / 2 + 1)
 */
export function getSacrifices(result: Devil): [Devil, Devil][] {
  if (!reverseFusion.hasOwnProperty(result.race)) {
    throw new Error('Invalid result');
  }

  const lesserDevil = getLesser(result);
  const lesserGrade = lesserDevil === null ? 0 : lesserDevil.grade;

  const devils = getAll();
  const candidates = reverseFusion[result.race] as [RaceKey, RaceKey][];

  let list: [Devil, Devil][] = [];
  candidates.forEach(([a, b]) => {
    const aDevils = [...devils.searchByRace(a).getSacrifices()];
    const bDevils = [...devils.searchByRace(b).getSacrifices()];
    const results = aDevils.reduce((acc, curr) => {
      const list = bDevils.filter((v) => {
        const grade = Math.floor((curr.grade + v.grade) / 2 + 1);
        return lesserGrade < grade && grade <= result.grade;
      });

      if (list.length === 0) {
        return acc;
      }
      return acc.concat(list.map((v) => [curr, v]));
    }, [] as [Devil, Devil][]);
    list = list.concat(results);
  });

  return list;
}
