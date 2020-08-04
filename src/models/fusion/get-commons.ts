import { Dendrogram } from '../devil/dendrogram';

function recursive(commons: number[], v: Dendrogram): number[] {
  if (v.a === null && v.b === null) {
    return commons.concat(v.no);
  }
  const a = v.a !== null ? recursive([], v.a) : [];
  const b = v.b !== null ? recursive([], v.b) : [];
  return commons.concat(a, b);
}

export function getCommons(v: Dendrogram): { [no: number]: number } {
  const commons: { [no: number]: number } = {};
  const list = recursive([], v);
  list.sort();
  list.forEach((no) => {
    if (commons.hasOwnProperty(no)) {
      commons[no] = commons[no] + 1;
    } else {
      commons[no] = 1;
    }
  });

  return commons;
}
