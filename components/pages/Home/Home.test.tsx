import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { Home } from '.'
import { light } from '../../../styles/themes/light'

describe('Home', () => {
  it('should render component correctly', () => {
    render(
      <ThemeProvider theme={light}>
        <Home />
      </ThemeProvider>,
    )
    const mainTitle = screen.getByText(
      'Cuidamos bem do seu pokémon, para ele cuidar bem de você',
    )

    expect(mainTitle).toBeInTheDocument()
  })
})
