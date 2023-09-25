import axios from 'axios'
import { PokemonFormSchema } from '../components/pages/Scheduling'

export const getAppointmentDates = (): Promise<string[]> => {
  return axios.get('/api/scheduling/date').then((res) => res.data)
}

export const getAppointmentTimes = (date: string): Promise<string[]> => {
  return axios
    .post(
      '/api/scheduling/time',
      { date },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then((res) => res.data)
}

export const createAppointment = (
  date: PokemonFormSchema,
): Promise<string[]> => {
  return axios
    .post(
      '/api/scheduling',
      { date },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then((res) => res.data)
}
