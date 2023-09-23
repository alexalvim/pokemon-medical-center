import { UseFormRegisterReturn } from 'react-hook-form'
import { ContentWrapper, ErrorMessage, LabelText, StyledInput } from './styles'

interface InputFieldProps {
  label: string
  placeholder: string
  formProps: UseFormRegisterReturn<string>
  errorMessage: string
}

export const InputField = ({
  label,
  placeholder,
  formProps,
  errorMessage,
}: InputFieldProps) => {
  return (
    <ContentWrapper>
      <LabelText>{label}</LabelText>
      <StyledInput
        $hasError={errorMessage !== ''}
        type={'text'}
        placeholder={placeholder}
        {...formProps}
      />
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </ContentWrapper>
  )
}
