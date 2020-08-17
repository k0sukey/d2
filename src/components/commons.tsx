import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import { Devils } from '../models/devil/devils';
import { raceMap } from '../models/race/race-map';

type Props = {
  devils: Devils;
  commons: { [no: number]: number };
};

const Commons = ({ devils, commons }: Props) => {
  return (
    <>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="right" padding="none">
                <Typography variant="caption">No.</Typography>
              </TableCell>
              <TableCell align="center" padding="none">
                <Typography variant="caption">種族</Typography>
              </TableCell>
              <TableCell padding="none">
                <Typography variant="caption">名前</Typography>
              </TableCell>
              <TableCell align="right" padding="none">
                <Typography variant="caption">必要数</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(commons).map((no) => {
              const n = parseInt(no, 10);
              const v = devils.find(n);
              if (v === null) {
                return null;
              }
              return (
                <TableRow key={v.name}>
                  <TableCell
                    align="right"
                    padding="none"
                    style={{
                      width: '24px',
                      paddingTop: '6px',
                      paddingBottom: '6px',
                    }}
                  >
                    <Typography variant="caption">{v.no}</Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    padding="none"
                    style={{
                      width: '60px',
                      paddingTop: '6px',
                      paddingBottom: '6px',
                    }}
                  >
                    <Typography variant="caption">
                      {raceMap.get(v.race) ?? ''}
                    </Typography>
                  </TableCell>
                  <TableCell
                    padding="none"
                    style={{ paddingTop: '6px', paddingBottom: '6px' }}
                  >
                    <Typography variant="caption">{v.name}</Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    padding="none"
                    style={{
                      width: '60px',
                      paddingTop: '6px',
                      paddingBottom: '6px',
                    }}
                  >
                    <Typography variant="caption">{commons[n]}</Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Commons;
