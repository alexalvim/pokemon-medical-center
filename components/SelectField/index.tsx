import { useState } from 'react'
import {
  ContentWrapper,
  LabelText,
  SelectWrapper,
  StyledSelect,
} from './styles'

export const SelectField = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <ContentWrapper>
      <LabelText>Label</LabelText>
      <SelectWrapper $isOpened={isOpened}>
        <StyledSelect
          onFocus={() => {
            setIsOpened(true)
          }}
          onBlur={() => {
            setIsOpened(false)
          }}
          onChange={() => {
            setIsOpened(false)
          }}
        >
          <option value="">Test</option>
          <option value="valor2">Valor 2</option>
          <option value="valor2">Valor 2</option>
        </StyledSelect>
      </SelectWrapper>
    </ContentWrapper>
  )
}
