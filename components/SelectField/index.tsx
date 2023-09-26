import { useEffect, useRef, useState } from 'react'
import {
  ContentWrapper,
  EmptyMessage,
  ErrorMessage,
  InputWrapper,
  LabelText,
  OptionsList,
  OptionsWrapper,
  SelectWrapper,
  StyledSelect,
} from './styles'
import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormSetValue,
} from 'react-hook-form'

interface SelectFieldProps {
  label: string
  placeholder: string
  options: string[]
  isHorizontal?: boolean
  formProps: UseFormRegisterReturn<string>
  name: string
  setFormValue: UseFormSetValue<FieldValues>
  errorMessage: string
}

export const SelectField = ({
  label,
  placeholder,
  options,
  isHorizontal,
  formProps,
  name,
  setFormValue,
  errorMessage,
}: SelectFieldProps) => {
  const [isOpened, setIsOpened] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')
  const wrapperRef = useRef<HTMLLabelElement>(null)

  const handleSelectOption = (value: string) => {
    setSelectedValue(value)
    setIsOpened(false)
    setFormValue(name, value)
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
      <InputWrapper>
        <SelectWrapper $isOpened={isOpened}>
          <StyledSelect
            $hasError={errorMessage !== '' && !selectedValue}
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
                      key={`${option}-${i}`}
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
          <input type="text" readOnly value={selectedValue} {...formProps} />
        </SelectWrapper>
        {!selectedValue && errorMessage ? (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        ) : null}
      </InputWrapper>
    </ContentWrapper>
  )
}
