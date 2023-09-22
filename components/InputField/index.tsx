import { ContentWrapper, LabelText, StyledInput } from './styles'

interface InputFieldProps {
  label: string
  placeholder: string
}

export const InputField = ({ label, placeholder }: InputFieldProps) => {
  return (
    <ContentWrapper>
      <LabelText>{label}</LabelText>
      <StyledInput type={'text'} placeholder={placeholder} />
    </ContentWrapper>
  )
}
