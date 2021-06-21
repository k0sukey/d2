import { Devil } from '../devil/devil';

export function isMultiple(devil: Devil | null): boolean {
  if (devil === null) {
    return false;
  }
  return [
    155, 156, 157, 158, 159, 160, 167, 168, 192, 193, 213, 222, 230, 243, 255,
    257, 258,
  ].includes(devil.no);
}
