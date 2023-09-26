import type { NextApiRequest, NextApiResponse } from 'next'

type DateResponse = Array<string>

function getDates(d1: number, d2: number): Array<Date> {
  const oneDay = 24 * 3600 * 1000
  const d = []
  let ms = d1 * 1
  const last = d2 * 1
  for (; ms < last; ms += oneDay) {
    d.push(new Date(ms))
  }
  return d
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DateResponse>,
) {
  const today = new Date()
  const nextWeek = today.getTime() * 1 + 7 * 24 * 3600 * 1000
  const dates = getDates(today.getTime(), nextWeek)

  const dateStringArray: Array<string> = []
  dates.forEach((date) => {
    dateStringArray.push(date.toLocaleDateString())
  })

  res.status(200).json(dateStringArray)
}
