import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { InputField } from '.'
import { light } from '../../styles/themes/light'

describe('InputField', () => {
  it('should render component correctly', () => {
    const props = {
      label: 'Test Label',
      placeholder: 'Test Placeholder',
      formProps: {
        onChange: jest.fn(),
        onBlur: jest.fn(),
        ref: jest.fn(),
        name: 'test-name',
      },
      errorMessage: 'Test error message',
    }
    render(
      <ThemeProvider theme={light}>
        <InputField {...props} />
      </ThemeProvider>,
    )
    const labelText = screen.getByText(props.label)
    const errorMessage = screen.getByText(props.errorMessage)
    const input = screen.getByPlaceholderText(props.placeholder)

    fireEvent.change(input, {
      target: { value: 'test' },
    })
    fireEvent.blur(input)

    expect(labelText).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(props.formProps.onChange).toHaveBeenCalled()
    expect(props.formProps.onBlur).toHaveBeenCalled()
  })
})
