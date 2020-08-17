import { NextApiRequest, NextApiResponse } from 'next';

import { getAll } from '../../models/devil/get-all';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const devils = await getAll();

  await res.status(200).json([...devils]);
};
