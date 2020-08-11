import React, { useState } from 'react';
import useSWR from 'swr';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { createMuiTheme } from '@material-ui/core/styles';

import { Dendrogram } from '../src/models/devil/dendrogram';
import { Devil } from '../src/models/devil/devil';
import { getAll } from '../src/models/devil/get-all';
import { getCommons } from '../src/models/fusion/get-commons';
import { getSumKarma } from '../src/models/fusion/get-sum-karma';
import { getSumMagnetite } from '../src/models/fusion/get-sum-magnetite';
import Chart from './chart';
import Commons from './commons';
import Information from './information';
import Readme from './readme';

type Props = {
  devil: Devil | null;
};

const fetcher = async (url: string): Promise<Dendrogram> => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data as Dendrogram;
};

const Result = ({ devil }: Props) => {
  const devils = getAll();
  const [activeTab, setActiveTab] = useState<number>(0);

  const { data, error } = useSWR<Dendrogram, any>(
    () => devil && `/api/fusion/${devil.no}`,
    fetcher,
  );

  if (!devil || !data || error) {
    return <Readme />;
  }

  const theme = createMuiTheme();

  return (
    <>
      <div style={{ display: 'flex', flexGrow: 1, marginTop: '20px' }}>
        <Tabs
          orientation="vertical"
          value={activeTab}
          onChange={(_, index) => setActiveTab(index)}
          style={{
            width: '40px',
            marginRight: '20px',
            borderRight: `solid 1px ${theme.palette.divider}`,
          }}
        >
          <Tab
            style={{ width: '40px', minWidth: '40px', paddingLeft: '6px' }}
            label={
              <span
                style={{ writingMode: 'vertical-rl', letterSpacing: '0.25em' }}
              >
                基本情報
              </span>
            }
          />
          <Tab
            style={{ width: '40px', minWidth: '40px', paddingLeft: '6px' }}
            label={
              <span
                style={{ writingMode: 'vertical-rl', letterSpacing: '0.25em' }}
              >
                悪魔全書から召喚
              </span>
            }
          />
          <Tab
            style={{ width: '40px', minWidth: '40px', paddingLeft: '6px' }}
            label={
              <span
                style={{ writingMode: 'vertical-rl', letterSpacing: '0.25em' }}
              >
                合体チャート
              </span>
            }
          />
        </Tabs>
        <div hidden={activeTab !== 0} style={{ width: '100%' }}>
            <Information
              devil={devil}
              magnetite={getSumMagnetite(data)}
              karma={getSumKarma(data)}
            />
        </div>
        <div hidden={activeTab !== 1} style={{ width: '100%' }}>
            <Commons devils={devils} commons={getCommons(data)} />
        </div>
        <div hidden={activeTab !== 2} style={{ width: '100%' }}>
            <Chart dendrogram={data} />
        </div>
      </div>
    </>
  );
};

export default Result;
