import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
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
    <TableContainer>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell component="th" align="right" style={{ width: '140px' }}>
              <Typography variant="caption">図鑑番号</Typography>
            </TableCell>
            <TableCell>{devil.no}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" align="right" style={{ width: '140px' }}>
              <Typography variant="caption">レアリティ</Typography>
            </TableCell>
            <TableCell>{devil.rare}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" align="right" style={{ width: '140px' }}>
              <Typography variant="caption">グレード</Typography>
            </TableCell>
            <TableCell>{devil.grade}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" align="right" style={{ width: '140px' }}>
              <Typography variant="caption">種族</Typography>
            </TableCell>
            <TableCell>{raceMap.get(devil.race) ?? ''}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" align="right" style={{ width: '140px' }}>
              <Typography variant="caption">
                合体に必要な
                <br />
                総マグネタイト
              </Typography>
            </TableCell>
            <TableCell>{magnetite.toLocaleString()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" align="right" style={{ width: '140px' }}>
              <Typography variant="caption">
                召喚に必要な
                <br />
                総カルマ
              </Typography>
            </TableCell>
            <TableCell>{karma.toLocaleString()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </>
);

export default Information;
