import { fromNo } from '../models/devil/from-no';
import { getSacrifices } from '../models/fusion/get-sacrifices';

const target = fromNo(7);
if (target === null) {
  process.exit(1);
}
getSacrifices(target);
