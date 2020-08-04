import { Devil } from './devil';

export type Dendrogram = Devil & {
  a: Dendrogram | null;
  b: Dendrogram | null;
  cost: number | null;
};
