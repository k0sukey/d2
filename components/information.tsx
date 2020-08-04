import React from 'react';
import Typography from '@material-ui/core/Typography';

import { getSumKarma } from '../src/models/fusion/get-sum-karma';
import { getSumMagnetite } from '../src/models/fusion/get-sum-magnetite';
import { Dendrogram } from '../src/models/devil/dendrogram';
import { Devil } from '../src/models/devil/devil';
import { raceMap } from '../src/models/race/race-map';

type Props = {
  devil: Devil;
  dendrogram: Dendrogram;
};

const Information = ({ devil, dendrogram }: Props) => (
  <>
    <dl>
      <dt>
        <Typography variant="body2">種族</Typography>
      </dt>
      <dd>
        <Typography variant="body1">{raceMap.get(devil.race) ?? ''}</Typography>
      </dd>
      <dt>
        <Typography variant="body2">グレード</Typography>
      </dt>
      <dd>
        <Typography variant="body1">{devil.grade}</Typography>
      </dd>
      <dt>
        <Typography variant="body2">合体に必要な総マグネタイト</Typography>
      </dt>
      <dd>
        <Typography variant="body1">
          {getSumMagnetite(dendrogram).toLocaleString()}
        </Typography>
      </dd>
      <dd>
        <Typography variant="caption">
          施設アップグレードの最大割引が適用されています
        </Typography>
      </dd>
      <dt>
        <Typography variant="body2">召喚に必要な総カルマ</Typography>
      </dt>
      <dd>
        <Typography variant="body1">
          {getSumKarma(dendrogram).toLocaleString()}
        </Typography>
      </dd>
    </dl>
  </>
);

export default Information;
