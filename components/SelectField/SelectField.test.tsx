import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { SelectField } from '.'
import { light } from '../../styles/themes/light'

describe('SelectField', () => {
  it('should render component correctly', () => {
    const props = {
      label: 'Test label',
      placeholder: 'Test placeholder',
      options: ['test1', 'test2'],
      formProps: {
        onChange: jest.fn(),
        onBlur: jest.fn(),
        ref: jest.fn(),
        name: 'test-name',
      },
      name: 'test-name',
      setFormValue: jest.fn(),
      errorMessage: 'Test error message',
    }
    render(
      <ThemeProvider theme={light}>
        <SelectField {...props} />
      </ThemeProvider>,
    )
    const labelText = screen.getByText(props.label)
    const placeholderText = screen.getByText(props.label)
    const errorMessage = screen.getByText(props.errorMessage)

    expect(labelText).toBeInTheDocument()
    expect(placeholderText).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()

    fireEvent.click(placeholderText)

    waitFor(() => {
      const option1Text = screen.getByText(props.options[0])
      const option2Text = screen.getByText(props.options[1])

      expect(option1Text).toBeInTheDocument()
      expect(option2Text).toBeInTheDocument()

      fireEvent.click(option1Text)

      expect(props.setFormValue).toHaveBeenCalledWith(props.options[1])
    })
  })
})
