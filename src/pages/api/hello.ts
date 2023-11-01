import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  //   console.log(req.method);
  if (req.method === 'POST') {
    res.status(200).json({ message: 'A POST from Next.js!' });
    return;
  }

  res.status(200).json({ message: 'Hellos from Next.js!' });
}
