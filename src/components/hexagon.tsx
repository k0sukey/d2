import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  width: string;
  height: string;
  label: string;
  active?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick: () => void;
};

const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
    appearance: 'none',
    padding: 0,
    border: 'none',
    backgroundColor: 'transparent',
    '& #label': {
      textShadow:
        '1px 1px 4px rgba(255,255,255,0.2), -1px 1px 4px rgba(255,255,255,0.2), 1px -1px 4px rgba(255,255,255,0.2), -1px -1px 4px rgba(255,255,255,0.7)',
    },
    '&:disabled': {
      '& #base': {
        opacity: 0.4,
      },
      '& #label': {
        fill: 'grey',
      },
    },
    '&:active': {
      '& #base': {
        opacity: 0.4,
      },
      '& #label': {
        fill: 'grey',
      },
      '& #shadow-a': {
        opacity: 0.3,
      },
      '& #shadow-b': {
        opacity: 0.2,
      },
    },
  },
});

const Hexagon = ({
  width,
  height,
  label,
  active = false,
  disabled = false,
  style = {},
  onClick,
}: Props) => {
  const classes = useStyles();

  return (
    <button
      disabled={disabled}
      className={classes.root}
      style={{
        ...style,
        width,
        height,
      }}
      onClick={onClick}
    >
      <svg
        viewBox="0 0 200 200"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(1px 2px 2px rgba(0, 0, 0, .6))' }}
      >
        <polygon
          stroke="none"
          points="0,60 180,0 200,20 200,140 20,200 0,180"
        />
        <polygon
          id="base"
          fill="white"
          stroke="none"
          opacity="0.8"
          points="0,60 180,0 200,20 200,130 20,190, 0,170"
        />
        <text
          id="label"
          x="50%"
          y="135"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="44"
          fontWeight="bold"
          style={{
            fill: active ? 'white' : 'black',
            textShadow: active
              ? '4px 4px 10px rgba(245,0,87,0.7), -4px 4px 10px rgba(245,0,87,0.7), 4px -4px 10px rgba(245,0,87,0.7), -4px -4px 10px rgba(245,0,87,0.7)'
              : '1px 1px 4px rgba(255,255,255,0.7), -1px 1px 4px rgba(255,255,255,0.7), 1px -1px 4px rgba(255,255,255,0.7), -1px -1px 4px rgba(255,255,255,0.7)',
          }}
          transform="skewY(-19)"
        >
          {label}
        </text>
        <polygon
          id="shadow-a"
          fill="white"
          stroke="none"
          opacity="0.4"
          points="0,170 20,190 20,200 0,180"
        />
        <polygon
          id="shadow-b"
          fill="white"
          stroke="none"
          opacity="0.3"
          points="20,190 200,130 200,140 20,200"
        />
        <polygon
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity="0.6"
          points="0,60 180,0 200,20 200,130 20,190 0,170"
        />
      </svg>
    </button>
  );
};

export default Hexagon;
