import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<string>>,
) {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  if (Math.random() * 100 > 95) {
    res.statusMessage = 'Error to schedule an appointment'
    res.status(400).end()
    return
  }

  res.status(200).end()
}
