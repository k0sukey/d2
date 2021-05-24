import { useCallback, useEffect, useState } from 'react';

import { Devil } from '../models/devil/devil';

export function useRarityFilter(sacrifices: [Devil, Devil][]) {
  const all = [1, 2, 3, 4, 5];
  const [rarities, setRarities] = useState<number[]>(all);

  const toggle = useCallback(
    (rarity: number) => {
      if (rarities.includes(rarity)) {
        setRarities(rarities.filter((v) => v !== rarity));
        return;
      }
      setRarities(rarities.concat(rarity));
    },
    [all, rarities],
  );

  useEffect(() => {
    setRarities(all);
  }, [sacrifices]);

  return [all, rarities, toggle] as const;
}
