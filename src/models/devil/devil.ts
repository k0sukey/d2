import { RaceKey } from '../race/race-key';

export interface Devil {
  no: number;
  race: RaceKey;
  rare: number;
  grade: number;
  name: string;
  fusion: boolean;
}
