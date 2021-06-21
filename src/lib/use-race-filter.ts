import { useCallback, useEffect, useMemo, useState } from 'react';

import { Devil } from '../models/devil/devil';
import { RaceKey } from '../models/race/race-key';

export function useRaceFilter(
  sacrifices: [Devil, Devil][],
): readonly [RaceKey[], RaceKey[], (raceKey: RaceKey) => void] {
  const all = useMemo<RaceKey[]>(() => {
    return sacrifices.reduce<RaceKey[]>((acc, [a, b]) => {
      return acc.concat(
        !acc.includes(a.race) ? a.race : [],
        !acc.includes(b.race) ? b.race : [],
      );
    }, []);
  }, [sacrifices]);

  const [races, setRaces] = useState<RaceKey[]>(all);

  const toggle = useCallback(
    (raceKey: RaceKey) => {
      if (races.includes(raceKey)) {
        setRaces(races.filter((v) => v !== raceKey));
        return;
      }
      setRaces(races.concat(raceKey));
    },
    [races],
  );

  useEffect(() => {
    setRaces(all);
  }, [all]);

  return [all, races, toggle] as const;
}
