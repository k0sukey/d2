import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Dendrogram } from '../models/devil/dendrogram';

import styles from './chart.module.css';

type Props = {
  dendrogram: Dendrogram;
};

const getDendrogram = (v: Dendrogram | null) => {
  if (v === null) {
    return;
  }

  const a = getDendrogram(v.a);
  const b = getDendrogram(v.b);
  return (
    <>
      <dl className={styles.parent}>
        <dt>
          <Typography variant="caption">{v.name}</Typography>
        </dt>
        {a && (
          <dd className={styles.children}>
            <Typography variant="caption">{a}</Typography>
          </dd>
        )}
        {b && (
          <dd className={styles.children}>
            <Typography variant="caption">{b}</Typography>
          </dd>
        )}
      </dl>
    </>
  );
};

const Chart = ({ dendrogram }: Props) => <>{getDendrogram(dendrogram)}</>;

export default Chart;
