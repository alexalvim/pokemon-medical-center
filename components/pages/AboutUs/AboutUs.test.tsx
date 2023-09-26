import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { AboutUs } from '.'
import { light } from '../../../styles/themes/light'

describe('AboutUs', () => {
  it('should render component correctly', () => {
    render(
      <ThemeProvider theme={light}>
        <AboutUs />
      </ThemeProvider>,
    )
    const mainTitle = screen.getByText('O Centro Pokémon')
    const howItWorksTitle = screen.getByText(
      'Como funciona a cura de um pokémon?',
    )
    const traditionTitle = screen.getByText('Uma tradição de mais de 20 anos')
    const bestToYourPokemonTitle = screen.getByText('O melhor para seu pokémon')
    const highTecnologiTitle = screen.getByText('Alta Tecnologia')

    expect(mainTitle).toBeInTheDocument()
    expect(howItWorksTitle).toBeInTheDocument()
    expect(traditionTitle).toBeInTheDocument()
    expect(bestToYourPokemonTitle).toBeInTheDocument()
    expect(highTecnologiTitle).toBeInTheDocument()
  })
})
