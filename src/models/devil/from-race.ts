import { RaceKey } from '../race/race-key';
import { Devils } from './devils';
import { getAll } from './get-all';

export function fromRace(key: RaceKey): Devils {
  const devils = getAll();
  return devils.searchByRace(key);
}
