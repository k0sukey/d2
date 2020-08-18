import { RaceKey } from '../race/race-key';

export interface Devil {
  no: number;
  race: RaceKey;
  rarity: number;
  grade: number;
  name: string;
  sacrifice: boolean;
}
