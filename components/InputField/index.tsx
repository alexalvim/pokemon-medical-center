import { ContentWrapper, LabelText, StyledInput } from './styles'

export const InputField = () => {
  return (
    <ContentWrapper>
      <LabelText>Label</LabelText>
      <StyledInput type={'text'} placeholder={'Test'} />
    </ContentWrapper>
  )
}
