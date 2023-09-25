import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { NotFound } from '.'
import { light } from '../../../styles/themes/light'

describe('NotFound', () => {
  it('should render component correctly', () => {
    render(
      <ThemeProvider theme={light}>
        <NotFound />
      </ThemeProvider>,
    )
    const bannerText = screen.getByText('Página não encontrada')

    expect(bannerText).toBeInTheDocument()
  })
})
