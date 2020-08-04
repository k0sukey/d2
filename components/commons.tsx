import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Dendrogram } from '../src/models/devil/dendrogram';
import { Devils } from '../src/models/devil/devils';
import { getCommons } from '../src/models/fusion/get-commons';

type Props = {
  devils: Devils;
  dendrogram: Dendrogram;
};

const Commons = ({ devils, dendrogram }: Props) => {
  const commons = getCommons(dendrogram);
  return (
    <>
      <dl>
        {Object.keys(commons).map((no) => {
          const n = parseInt(no, 10);
          const v = devils.find(n);
          return (
            <React.Fragment key={v?.name}>
              <dt>
                <Typography variant="caption">{v?.name}</Typography>
              </dt>
              <dd>
                <Typography variant="body2">{commons[n]}体</Typography>
              </dd>
            </React.Fragment>
          );
        })}
      </dl>
    </>
  );
};

export default Commons;
