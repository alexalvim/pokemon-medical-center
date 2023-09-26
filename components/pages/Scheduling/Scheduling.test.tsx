import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { Scheduling } from '.'
import { light } from '../../../styles/themes/light'
import { getRegions, getPokemons } from '../../../api/pokemon'
import { getAppointmentDates } from '../../../api/appointment'

jest.mock('../../../api/pokemon', () => ({
  getRegions: jest.fn(),
  getPokemons: jest.fn(),
}))

jest.mock('../../../api/appointment', () => ({
  getAppointmentDates: jest.fn(),
}))

describe('Scheduling', () => {
  it('should render component correctly', () => {
    render(
      <ThemeProvider theme={light}>
        <Scheduling />
      </ThemeProvider>,
    )
    const formTitle = screen.getByText(
      'Preencha o formulário abaixo para agendar sua consulta',
    )
    const nameLabel = screen.getByText('Nome')
    const lastNameLabel = screen.getByText('Sobrenome')
    const regionLabel = screen.getByText('Região')
    const locationLabel = screen.getByText('Cidade')
    const pokemonLabel = screen.getByText('Pokémon 01')
    const dateLabel = screen.getByText('Data para atendimento')
    const timeLabel = screen.getByText('Horário de atendimento')
    const submitButton = screen.getByText('Concluir agendamento')

    expect(formTitle).toBeInTheDocument()
    expect(nameLabel).toBeInTheDocument()
    expect(lastNameLabel).toBeInTheDocument()
    expect(regionLabel).toBeInTheDocument()
    expect(locationLabel).toBeInTheDocument()
    expect(pokemonLabel).toBeInTheDocument()
    expect(dateLabel).toBeInTheDocument()
    expect(timeLabel).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
    expect(getRegions).toHaveBeenCalled()
    expect(getPokemons).toHaveBeenCalled()
    expect(getAppointmentDates).toHaveBeenCalled()
  })
})
