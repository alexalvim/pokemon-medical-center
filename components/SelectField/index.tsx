import { useEffect, useRef, useState } from 'react'
import {
  ContentWrapper,
  EmptyMessage,
  LabelText,
  OptionsList,
  OptionsWrapper,
  SelectWrapper,
  StyledSelect,
} from './styles'

interface SelectFieldProps {
  label: string
  placeholder: string
  options: string[]
  isHorizontal?: boolean
}

export const SelectField = ({
  label,
  placeholder,
  options,
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
          <OptionsWrapper>
            {options.length > 0 ? (
              <OptionsList>
                {options.map((option, i) => (
                  <li
                    key={`${option}-{i}`}
                    onClick={() => handleSelectOption(option)}
                  >
                    {option}
                  </li>
                ))}
              </OptionsList>
            ) : (
              <EmptyMessage>Nenhuma opção carregada</EmptyMessage>
            )}
          </OptionsWrapper>
        ) : null}
        <input type="text" value={selectedValue} readOnly />
      </SelectWrapper>
    </ContentWrapper>
  )
}
