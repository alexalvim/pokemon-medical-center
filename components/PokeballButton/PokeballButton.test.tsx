import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { PokeballButton } from '.'
import { light } from '../../styles/themes/light'

const mockedPush = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockedPush,
  }),
}))

describe('PokeballButton', () => {
  it('should render component correctly', () => {
    const buttonImageSrc = '/_next/image?url=%2Fimg.jpg&w=96&q=75'
    render(
      <ThemeProvider theme={light}>
        <PokeballButton />
      </ThemeProvider>,
    )
    const buttonLabel = screen.getByText('Centro Pokémon')
    const buttonImage = screen.getByAltText('Ícone de pokebola')

    fireEvent.click(buttonLabel)

    expect(buttonLabel).toBeInTheDocument()
    expect(buttonImage).toHaveAttribute('src', buttonImageSrc)
    expect(mockedPush).toHaveBeenCalledWith('/')
  })
})
