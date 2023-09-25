import {
  FieldArrayWithId,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form'
import { OutlinedButton } from '../OutlinedButton'
import { SelectField } from '../SelectField'
import {
  ContentWrapper,
  TeamRegisterFields,
  TeamRegisterHighlightedText,
  TeamRegisterText,
} from './styles'

interface TeamRegisterProps {
  fields: Record<'id', string>[]
  options: string[]
  getNameByIndex: (index: number) => string
  setFormValue: UseFormSetValue<FieldValues>
  register: UseFormRegister<FieldValues>
  getErrorMessageByIndex: (index: number) => string
  appendField: () => void
}

export const TeamRegister = ({
  fields,
  options,
  getNameByIndex,
  setFormValue,
  register,
  getErrorMessageByIndex,
  appendField,
}: TeamRegisterProps) => {
  return (
    <ContentWrapper>
      <TeamRegisterHighlightedText>
        Cadastre seu time
      </TeamRegisterHighlightedText>
      <TeamRegisterText>Atendemos até 06 pokémons por vez</TeamRegisterText>
      <TeamRegisterFields>
        {fields.map((pokemonField, index) => (
          <SelectField
            key={pokemonField.id}
            label={`Pokémon 0${index + 1}`}
            placeholder={'Selecione seu pokémon'}
            isHorizontal={true}
            options={options}
            formProps={register(getNameByIndex(index))}
            name={getNameByIndex(index)}
            setFormValue={setFormValue}
            errorMessage={getErrorMessageByIndex(index)}
          />
        ))}
      </TeamRegisterFields>
      <OutlinedButton
        onClick={(e) => {
          e.preventDefault()
          appendField()
        }}
        label={'Adicionar novo pokémon ao time...'}
        rightLabel="+"
      />
    </ContentWrapper>
  )
}
