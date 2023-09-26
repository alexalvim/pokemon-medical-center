import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { OutlinedButton } from '.'
import { light } from '../../styles/themes/light'

describe('OutlinedButton', () => {
  it('should render component correctly with onClick', () => {
    const props = {
      label: 'Test label',
      rightLabel: '+',
      onClick: jest.fn(),
    }

    render(
      <ThemeProvider theme={light}>
        <OutlinedButton {...props} />
      </ThemeProvider>,
    )
    const buttonLabel = screen.getByText(props.label)
    const rightLabel = screen.getByText(props.rightLabel)

    fireEvent.click(buttonLabel)

    expect(buttonLabel).toBeInTheDocument()
    expect(rightLabel).toBeInTheDocument()
    expect(props.onClick).toHaveBeenCalled()
  })
})
