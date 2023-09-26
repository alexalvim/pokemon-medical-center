import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { TeamRegister } from '.'
import { light } from '../../styles/themes/light'

describe('TeamRegister', () => {
  it('should render component correctly', () => {
    const props = {
      fields: [{ id: '1' }],
      options: ['test1'],
      getNameByIndex: (index: number) => `pokemons.${index}.pokemon`,
      setFormValue: jest.fn(),
      register: jest.fn(),
      getErrorMessageByIndex: () => 'Error text',
      appendField: jest.fn(),
    }
    render(
      <ThemeProvider theme={light}>
        <TeamRegister {...props} />
      </ThemeProvider>,
    )
    const inputLabel = screen.getByText('Pokémon 01')
    const appendButton = screen.getByText('Adicionar novo pokémon ao time...')
    const errorText = screen.getByText('Error text')

    expect(inputLabel).toBeInTheDocument()
    expect(appendButton).toBeInTheDocument()
    expect(errorText).toBeInTheDocument()

    fireEvent.click(appendButton)

    expect(props.appendField).toHaveBeenCalled()
  })
})
