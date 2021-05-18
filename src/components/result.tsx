import React, { useEffect, useMemo } from 'react';

import { Devil } from '../models/devil/devil';
import { getCommons } from '../models/fusion/get-commons';
import { getDendrogram } from '../models/fusion/get-dendrogram';
import { getSacrifices } from '../models/fusion/get-sacrifices';
import { getSumKarma } from '../models/fusion/get-sum-karma';
import { getSumMagnetite } from '../models/fusion/get-sum-magnetite';
import Chart from './chart';
import Commons from './commons';
import Information from './information';
import Patterns from './patterns';
import Readme from './readme';

type Props = {
  devil: Devil | null;
  activeTab: number;
  onChange: (devil: Devil) => void;
};

const Result = ({ devil, activeTab, onChange }: Props) => {
  const sacrifices = useMemo(() => {
    if (devil === null) {
      return [];
    }
    const tmp = getSacrifices(devil);
    tmp.sort(([a], [b]) => a.no - b.no);
    return tmp;
  }, [devil]);

  const dendrogram = useMemo(() => {
    if (devil === null) {
      return null;
    }
    return getDendrogram(devil);
  }, [devil]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <>
      {!devil || !dendrogram ? (
        <Readme />
      ) : (
        <>
          <div hidden={activeTab !== 0} style={{ width: '100%' }}>
            <Information
              devil={devil}
              magnetite={getSumMagnetite(dendrogram)}
              karma={getSumKarma(dendrogram)}
            />
          </div>
          <div hidden={activeTab !== 1} style={{ width: '100%' }}>
            <Commons commons={getCommons(dendrogram)} />
          </div>
          <div hidden={activeTab !== 2} style={{ width: '100%' }}>
            <Chart dendrogram={dendrogram} />
          </div>
          <div hidden={activeTab !== 3} style={{ width: '100%' }}>
            <Patterns sacrifices={sacrifices} onChange={onChange} />
          </div>
        </>
      )}
    </>
  );
};

export default Result;
