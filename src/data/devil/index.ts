import { Devils } from '../../models/devil/devils';
import { RaceKey } from '../../models/race/race-key';
import avatar from './avatar.json';
import avian from './avian.json';
import beast from './beast.json';
import brute from './brute.json';
import deity from './deity.json';
import divine from './divine.json';
import dragon from './dragon.json';
import drake from './drake.json';
import fairy from './fairy.json';
import fallen from './fallen.json';
import femme from './femme.json';
import foul from './foul.json';
import fury from './fury.json';
import genma from './genma.json';
import haunt from './haunt.json';
import herald from './herald.json';
import holy from './holy.json';
import jaki from './jaki.json';
import jirae from './jirae.json';
import kishin from './kishin.json';
import lady from './lady.json';
import megami from './megami.json';
import night from './night.json';
import raptor from './raptor.json';
import snake from './snake.json';
import tyrant from './tyrant.json';
import vile from './vile.json';
import wilder from './wilder.json';
import yoma from './yoma.json';

const list = avatar.concat(
  [...avian],
  [...beast],
  [...brute],
  [...deity],
  [...divine],
  [...dragon],
  [...drake],
  [...fairy],
  [...fallen],
  [...femme],
  [...foul],
  [...fury],
  [...genma],
  [...haunt],
  [...herald],
  [...holy],
  [...jaki],
  [...jirae],
  [...kishin],
  [...lady],
  [...megami],
  [...night],
  [...raptor],
  [...snake],
  [...tyrant],
  [...vile],
  [...wilder],
  [...yoma],
);
export default new Devils(list.map((v) => ({ ...v, race: v.race as RaceKey })));
