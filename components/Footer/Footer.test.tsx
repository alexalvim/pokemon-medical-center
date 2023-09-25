import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { Footer } from '.'
import { light } from '../../styles/themes/light'

describe('Footer', () => {
  it('should render component correctly', () => {
    render(
      <ThemeProvider theme={light}>
        <Footer />
      </ThemeProvider>,
    )
    const footerText = screen.getByText(
      'Todas as marcas e ilustrações utilizadas são de seus respectivos donos.',
    )

    expect(footerText).toBeInTheDocument()
  })
})
