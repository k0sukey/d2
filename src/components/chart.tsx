import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Dendrogram } from '../models/fusion/dendrogram';

import styles from './chart.module.css';

type Props = {
  dendrogram: Dendrogram;
};

const getDendrogram = (v: Dendrogram | null, tier: number) => {
  if (v === null) {
    return;
  }

  const a = getDendrogram(v.a, tier + 1);
  const b = getDendrogram(v.b, tier + 1);
  return (
    <>
      <dl className={styles.parent}>
        <dt>
          <Typography variant="caption" component="span">
            {v.name}
          </Typography>
        </dt>
        {a && <dd className={styles.children}>{a}</dd>}
        {b && <dd className={styles.children}>{b}</dd>}
      </dl>
    </>
  );
};

const Chart = ({ dendrogram }: Props) => <>{getDendrogram(dendrogram, 1)}</>;

export default Chart;
