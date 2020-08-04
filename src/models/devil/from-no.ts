import { Devil } from './devil';
import { getAll } from './get-all';

export function fromNo(no: number): Devil | null {
  const devils = getAll();
  return devils.find(no);
}
