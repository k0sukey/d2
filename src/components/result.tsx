import React, { useEffect, useState } from 'react';

import { Dendrogram } from '../models/fusion/dendrogram';
import { Devil } from '../models/devil/devil';
import { getCommons } from '../models/fusion/get-commons';
import { getDendrogram } from '../models/fusion/get-dendrogram';
import { getSumKarma } from '../models/fusion/get-sum-karma';
import { getSumMagnetite } from '../models/fusion/get-sum-magnetite';
import Chart from './chart';
import Commons from './commons';
import Information from './information';
import Readme from './readme';

type Props = {
  devil: Devil | null;
  activeTab: number;
};

const Result = ({ devil, activeTab }: Props) => {
  const [dendrogram, setDendrogram] = useState<Dendrogram | null>(null);

  useEffect(() => {
    if (devil === null) {
      return;
    }
    setDendrogram(getDendrogram(devil));
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
        </>
      )}
    </>
  );
};

export default Result;
