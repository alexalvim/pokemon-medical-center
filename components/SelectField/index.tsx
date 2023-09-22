import { useEffect, useRef, useState } from 'react'
import {
  ContentWrapper,
  LabelText,
  OptionsList,
  SelectWrapper,
  StyledSelect,
} from './styles'

interface SelectFieldProps {
  label: string
  placeholder: string
  isHorizontal?: boolean
}

export const SelectField = ({
  label,
  placeholder,
  isHorizontal,
}: SelectFieldProps) => {
  const [isOpened, setIsOpened] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')
  const wrapperRef = useRef<HTMLLabelElement>(null)

  const handleSelectOption = (value: string) => {
    setSelectedValue(value)
    setIsOpened(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpened(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <ContentWrapper $isHorizontal={!!isHorizontal} ref={wrapperRef}>
      <LabelText>{label}</LabelText>
      <SelectWrapper $isOpened={isOpened}>
        <StyledSelect
          role={'button'}
          onClick={() => {
            setIsOpened((io) => !io)
          }}
        >
          {selectedValue || placeholder}
        </StyledSelect>
        {isOpened ? (
          <OptionsList>
            <li onClick={() => handleSelectOption('Test')}>Test</li>
          </OptionsList>
        ) : null}
        <input type="text" value={selectedValue} readOnly />
      </SelectWrapper>
    </ContentWrapper>
  )
}
