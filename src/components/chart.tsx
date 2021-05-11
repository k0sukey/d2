import React, { useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';

import { Dendrogram } from '../models/fusion/dendrogram';

type Props = {
  dendrogram: Dendrogram;
};

const getChecked = (target: number, checked: number[]) => {
  return checked.includes(target) ? (
    <CheckIcon style={{ fontSize: '10px' }} color="secondary" />
  ) : null;
};

const getChartFragment = ({
  fragment,
  checked,
  onToggle,
}: {
  fragment: Dendrogram | null;
  checked: number[];
  onToggle(v: number): void;
}) => {
  if (fragment === null) {
    return;
  }

  const a = getChartFragment({ fragment: fragment.a, checked, onToggle });
  const b = getChartFragment({ fragment: fragment.b, checked, onToggle });
  return (
    <>
      <dl key={`dendrogram-${fragment.nodeNo}`} className="parent">
        <dt key={`dendrogram-parent-${fragment.nodeNo}`}>
          <Button
            size="small"
            disableRipple
            style={{ padding: 0, textAlign: 'left', justifyContent: 'left' }}
            onClick={() => onToggle(fragment?.nodeNo)}
          >
            <Typography variant="caption" component="span">
              {fragment.name}
              {getChecked(fragment.nodeNo, checked)}
            </Typography>
          </Button>
        </dt>
        {a && (
          <dd
            key={`dendrogram-children-${fragment.a!.nodeNo}`}
            className="children"
          >
            {a}
          </dd>
        )}
        {b && (
          <dd
            key={`dendrogram-children-${fragment.b!.nodeNo}`}
            className="children"
          >
            {b}
          </dd>
        )}
      </dl>
    </>
  );
};

const Chart = ({ dendrogram }: Props) => {
  const [checked, setChecked] = useState<number[]>([]);
  const handleToggle = useCallback(
    (no: number) => {
      setChecked(
        checked.includes(no)
          ? checked.filter((v) => v !== no)
          : checked.concat(no),
      );
    },
    [checked],
  );

  return (
    <>
      {getChartFragment({
        fragment: dendrogram,
        checked,
        onToggle: handleToggle,
      })}
    </>
  );
};

export default Chart;
