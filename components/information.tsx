import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Devil } from '../src/models/devil/devil';
import { raceMap } from '../src/models/race/race-map';

type Props = {
  devil: Devil;
  magnetite: number;
  karma: number;
};

const Information = ({ devil, magnetite, karma }: Props) => (
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
        <Typography variant="body1">{magnetite.toLocaleString()}</Typography>
      </dd>
      <dt>
        <Typography variant="body2">召喚に必要な総カルマ</Typography>
      </dt>
      <dd>
        <Typography variant="body1">{karma.toLocaleString()}</Typography>
      </dd>
    </dl>
  </>
);

export default Information;
