import { RaceKey } from '../race/race-key';
import { raceMap } from '../race/race-map';
import { Devil } from './devil';

export class Devils {
  raceOrder: RaceKey[] = [...raceMap].map((v) => v[0]);

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

  orderByRaceAndGradeAsc(): Devils {
    const list = this.list.sort((a, b) => {
      if (a.race !== b.race) {
        return this.raceOrder.indexOf(a.race) - this.raceOrder.indexOf(b.race);
      }
      if (a.grade !== b.grade) {
        return a.grade - b.grade;
      }
      return 0;
    });
    return new Devils(list);
  }

  orderByGradeDesc(): Devils {
    const list = this.list.sort((a, b) => b.grade - a.grade);
    return new Devils(list);
  }

  getSacrifices(): Devils {
    const list = this.list.filter((v) => v.sacrifice);
    return new Devils(list);
  }

  *[Symbol.iterator](): IterableIterator<Devil> {
    for (const v of this.list) {
      yield v;
    }
  }
}
