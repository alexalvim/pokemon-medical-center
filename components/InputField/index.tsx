import { UseFormRegisterReturn } from 'react-hook-form'
import { ContentWrapper, LabelText, StyledInput } from './styles'

interface InputFieldProps {
  label: string
  placeholder: string
  formProps: UseFormRegisterReturn<string>
}

export const InputField = ({
  label,
  placeholder,
  formProps,
}: InputFieldProps) => {
  return (
    <ContentWrapper>
      <LabelText>{label}</LabelText>
      <StyledInput type={'text'} placeholder={placeholder} {...formProps} />
    </ContentWrapper>
  )
}
