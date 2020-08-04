import { Devil } from './devil';
import { RaceKey } from '../race/race-key';

export class Devils {
  constructor(private readonly list: Devil[]) {}

  count(): number {
    return this.list.length;
  }

  find(no: number): Devil | null {
    return this.list.find((v) => v.no === no) ?? null;
  }

  searchByRace(raceKey: RaceKey): Devils {
    const list = this.list.filter((v) => v.race === raceKey);
    return new Devils(list);
  }

  orderByNoAsc(): Devils {
    const list = this.list.sort((a, b) => a.no - b.no);
    return new Devils(list);
  }

  orderByGradeDesc(): Devils {
    const list = this.list.sort((a, b) => b.grade - a.grade);
    return new Devils(list);
  }

  withoutSpecial(): Devils {
    const list = this.list.filter(v => v.fusion);
    return new Devils(list);
  }

  *[Symbol.iterator](): IterableIterator<Devil> {
    for (const v of this.list) {
      yield v;
    }
  }
}
