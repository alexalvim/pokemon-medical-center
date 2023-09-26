import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { NoticeBox } from '.'
import { light } from '../../styles/themes/light'

describe('NoticeBox', () => {
  it('should render component correctly', () => {
    const props = {
      title: 'Test Title',
      text: 'Test Text',
      imageSrc: '/test-image',
      onButtonClick: jest.fn(),
      buttonLabel: 'Test Button Label',
    }
    const nextImageSrc = '/_next/image?url=%2Ftest-image&w=96&q=75'
    render(
      <ThemeProvider theme={light}>
        <NoticeBox {...props} />
      </ThemeProvider>,
    )
    const boxTitle = screen.getByText(props.title)
    const boxText = screen.getByText(props.text)
    const boxButton = screen.getByText(props.buttonLabel)
    const boxIcon = screen.getByAltText('Ícone do box')

    fireEvent.click(boxButton)

    expect(boxTitle).toBeInTheDocument()
    expect(boxText).toBeInTheDocument()
    expect(boxButton).toBeInTheDocument()
    expect(boxIcon).toHaveAttribute('src', nextImageSrc)
    expect(props.onButtonClick).toHaveBeenCalled()
  })
})
