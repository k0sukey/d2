import React, { useCallback, useEffect, useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import Rating from '@material-ui/lab/Rating';

import { Devil } from '../models/devil/devil';
import { raceMap } from '../models/race/race-map';
import { useRaceFilter } from '../lib/use-race-filter';

type Props = {
  sacrifices: [Devil, Devil][];
  onChange: (devil: Devil) => void;
};

const defaultRarities = [1, 2, 3, 4, 5];

const Patterns = ({ sacrifices, onChange }: Props) => {
  const [rarities, setRarities] = useState(defaultRarities);
  const [allRaces, races, toggleRaces] = useRaceFilter(sacrifices);

  const handleRarities = useCallback(
    (rarity: number) => {
      if (rarities.includes(rarity)) {
        setRarities(rarities.filter((v) => v !== rarity));
        return;
      }
      setRarities(rarities.concat(rarity));
    },
    [rarities],
  );

  useEffect(() => {
    setRarities(defaultRarities);
  }, [sacrifices]);

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Chip
          icon={
            rarities.includes(1) ? (
              <StarIcon style={{ color: '#ffb400' }} />
            ) : (
              <StarIcon />
            )
          }
          variant={rarities.includes(1) ? 'default' : 'outlined'}
          size="small"
          label="1"
          onClick={() => handleRarities(1)}
          style={{ marginRight: '10px', marginBottom: '6px' }}
        />
        <Chip
          icon={
            rarities.includes(2) ? (
              <StarIcon style={{ color: '#ffb400' }} />
            ) : (
              <StarIcon />
            )
          }
          variant={rarities.includes(2) ? 'default' : 'outlined'}
          size="small"
          label="2"
          onClick={() => handleRarities(2)}
          style={{ marginRight: '10px', marginBottom: '6px' }}
        />
        <Chip
          icon={
            rarities.includes(3) ? (
              <StarIcon style={{ color: '#ffb400' }} />
            ) : (
              <StarIcon />
            )
          }
          variant={rarities.includes(3) ? 'default' : 'outlined'}
          size="small"
          label="3"
          onClick={() => handleRarities(3)}
          style={{ marginRight: '10px', marginBottom: '6px' }}
        />
        <Chip
          icon={
            rarities.includes(4) ? (
              <StarIcon style={{ color: '#ffb400' }} />
            ) : (
              <StarIcon />
            )
          }
          variant={rarities.includes(4) ? 'default' : 'outlined'}
          size="small"
          label="4"
          onClick={() => handleRarities(4)}
          style={{ marginRight: '10px', marginBottom: '6px' }}
        />
        <Chip
          icon={
            rarities.includes(5) ? (
              <StarIcon style={{ color: '#ffb400' }} />
            ) : (
              <StarIcon />
            )
          }
          variant={rarities.includes(5) ? 'default' : 'outlined'}
          size="small"
          label="5"
          onClick={() => handleRarities(5)}
          style={{ marginRight: '10px', marginBottom: '6px' }}
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {allRaces.map((race) => (
          <Chip
            key={`race-filter-${race}`}
            variant={races.includes(race) ? 'default' : 'outlined'}
            size="small"
            label={raceMap.get(race)}
            onClick={() => toggleRaces(race)}
            style={{ marginRight: '10px', marginBottom: '6px' }}
          />
        ))}
      </div>
      <List>
        {sacrifices
          .filter(
            ([a, b]) =>
              rarities.includes(a.rarity) && rarities.includes(b.rarity),
          )
          .filter(([a, b]) => races.includes(a.race) && races.includes(b.race))
          .map(([a, b]) => (
            <React.Fragment key={`${a.no}-${b.no}`}>
              <ListItem
                style={{
                  paddingRight: 0,
                  paddingLeft: 0,
                  justifyContent: 'space-between',
                }}
              >
                <ListItemText
                  primary={
                    <>
                      <Typography variant="caption">
                        {raceMap.get(a.race)} {a.grade}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        style={{ fontWeight: 'bold' }}
                      >
                        {a.name}
                      </Typography>
                    </>
                  }
                  secondary={
                    <Rating
                      readOnly
                      style={{ fontSize: '0.75rem' }}
                      value={a.rarity}
                    />
                  }
                  style={{ flexBasis: '45%', cursor: 'pointer' }}
                  onClick={() => onChange(a)}
                />
                <ListItemText primary="×" style={{ flexBasis: '10%' }} />
                <ListItemText
                  primary={
                    <>
                      <Typography variant="caption">
                        {raceMap.get(b.race)} {b.grade}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        style={{ fontWeight: 'bold' }}
                      >
                        {b.name}
                      </Typography>
                    </>
                  }
                  secondary={
                    <Rating
                      readOnly
                      style={{ fontSize: '0.75rem' }}
                      value={b.rarity}
                    />
                  }
                  primaryTypographyProps={{ variant: 'caption' }}
                  style={{ flexBasis: '45%', cursor: 'pointer' }}
                  onClick={() => onChange(b)}
                />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
      </List>
    </>
  );
};

export default Patterns;
