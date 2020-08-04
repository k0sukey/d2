import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';

type Props = {
  rare: number;
};

const Rare = ({ rare }: Props) => (
  <>
    {Array.from(Array(rare), (_, i) => i + 1).map((i) => (
      <StarRateIcon key={`rare-${i}`} fontSize="small" />
    ))}
  </>
);

export default Rare;
