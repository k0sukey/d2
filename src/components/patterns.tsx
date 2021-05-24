import React from 'react';
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
import { useRarityFilter } from '../lib/use-rarity-filter';

type Props = {
  sacrifices: [Devil, Devil][];
  onChange: (devil: Devil) => void;
};

const Patterns = ({ sacrifices, onChange }: Props) => {
  const [allRarities, rarities, toggleRarities] = useRarityFilter(sacrifices);
  const [allRaces, races, toggleRaces] = useRaceFilter(sacrifices);

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {allRarities.map((rarity) => (
          <Chip
            key={`rarity-filter-${rarity}`}
            icon={
              rarities.includes(rarity) ? (
                <StarIcon style={{ color: '#ffb400' }} />
              ) : (
                <StarIcon />
              )
            }
            variant={rarities.includes(rarity) ? 'default' : 'outlined'}
            size="small"
            label={rarity}
            onClick={() => toggleRarities(rarity)}
            style={{ marginRight: '10px', marginBottom: '6px' }}
          />
        ))}
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
