import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { Button } from '.'
import { light } from '../../styles/themes/light'

describe('Button', () => {
  it('should render component correctly with onClick', () => {
    const props = {
      label: 'Test label',
      onClick: jest.fn(),
    }

    render(
      <ThemeProvider theme={light}>
        <Button {...props} />
      </ThemeProvider>,
    )
    const buttonLabel = screen.getByText(props.label)

    fireEvent.click(buttonLabel)

    expect(buttonLabel).toBeInTheDocument()
    expect(props.onClick).toHaveBeenCalled()
  })

  it('should render component correctly with type submit', () => {
    const props = {
      label: 'Test label',
    }
    const formSubmit = jest.fn()

    render(
      <ThemeProvider theme={light}>
        <form onSubmit={formSubmit}>
          <Button type={'submit'} {...props} />
        </form>
      </ThemeProvider>,
    )
    const buttonLabel = screen.getByText(props.label)

    fireEvent.click(buttonLabel)

    expect(buttonLabel).toBeInTheDocument()
    expect(formSubmit).toHaveBeenCalled()
  })
})
