import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { Header } from '.'
import { light } from '../../styles/themes/light'

const mockedPush = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockedPush,
  }),
}))

describe('Header', () => {
  it('should render component correctly', () => {
    render(
      <ThemeProvider theme={light}>
        <Header />
      </ThemeProvider>,
    )
    const pokeballButtonLabel = screen.getByText('Centro Pokémon')
    const aboutUsLink = screen.getByText('Quem somos')
    const schedulingButton = screen.getByText('Agendar consulta')

    fireEvent.click(schedulingButton)

    expect(pokeballButtonLabel).toBeInTheDocument()
    expect(aboutUsLink).toBeInTheDocument()
    expect(aboutUsLink).toHaveAttribute('href', '/about-us')
    expect(schedulingButton).toBeInTheDocument()
    expect(mockedPush).toHaveBeenCalledWith('/scheduling')
  })
})
