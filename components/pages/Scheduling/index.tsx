import { useEffect, useState } from 'react'
import {
  ContentHolder,
  ContentWrapper,
  FormTitle,
  FormWrapper,
  ResponseWrapper,
  Row,
  SubmitHolder,
  TeamRegister,
  TeamRegisterFields,
  TeamRegisterHighlightedText,
  TeamRegisterText,
} from './styles'
import { NoticeBox } from '../../NoticeBox'
import checkIcon from '../../../public/check.svg'
import warningIcon from '../../../public/warning.svg'
import { PageSummary } from '../../PageSummary'
import { InputField } from '../../InputField'
import { SelectField } from '../../SelectField'
import { OutlinedButton } from '../../OutlinedButton'
import { PurchaseDetails } from '../../PurchaseDetails'
import { Button } from '../../Button'
import {
  Location,
  Pokemon,
  Region,
  getLocations,
  getPokemons,
  getRegions,
} from '../../../api/pokemon'
import { formatName, formatUrlData } from '../../../ultils/formatters'
import {
  getAppointmentDates,
  getAppointmentTimes,
} from '../../../api/appointment'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type PageStatus = 'waiting' | 'success' | 'error'

const scheduleFormSchema = z.object({
  name: z
    .string()
    .nonempty('Nome é obrigatório')
    .min(2, 'Nome deve ter no mínimo 2 caracteres'),
  lastName: z
    .string()
    .nonempty('Sobrenome é obrigatório')
    .min(2, 'Sobrenome deve ter no mínimo 2 caracteres'),
  region: z.string().nonempty('Região é obrigatório'),
  location: z.string().nonempty('Cidade é obrigatório'),
  pokemon: z.string().nonempty('Pokémon é obrigatório'),
  date: z.string().nonempty('Data é obrigatório'),
  time: z.string().nonempty('Horário é obrigatório'),
})

export const Scheduling = () => {
  const [pageStatus, setPageStatus] = useState<PageStatus>('waiting')
  const [regions, setRegions] = useState<Region[]>([])
  const [locations, setLocations] = useState<Location[]>([])
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [dates, setDates] = useState<string[]>([])
  const [times, setTimes] = useState<string[]>([])
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(scheduleFormSchema),
  })
  const watchedRegion = watch('region')
  const watchedDate = watch('date')

  useEffect(() => {
    const fillSelects = async () => {
      const [resultRegions, resultPokemons, resultDates] = await Promise.all([
        getRegions(),
        getPokemons(),
        getAppointmentDates(),
      ])

      setRegions(resultRegions)
      setPokemons(resultPokemons)
      setDates(resultDates)
    }

    fillSelects()
  }, [])

  useEffect(() => {
    if (watchedRegion) {
      const fillLocation = async () => {
        setLocations([])
        const resultLocations = await getLocations(formatUrlData(watchedRegion))
        setLocations(resultLocations)
      }

      fillLocation()
    }
  }, [watchedRegion])

  useEffect(() => {
    if (watchedDate) {
      const fillTimes = async () => {
        setTimes([])
        const resultTimes = await getAppointmentTimes(watchedDate)
        setTimes(resultTimes)
      }

      fillTimes()
    }
  }, [watchedDate])

  const onSubmit = async (data: Record<string, string>) => {
    console.log('Submitei')
  }

  console.log({ errors })

  return (
    <ContentWrapper>
      <PageSummary
        title={'Agendar consulta'}
        subtitle={'Recupere seus pokémons em 5 segundos'}
      />
      <ContentHolder>
        {pageStatus === 'waiting' ? (
          <>
            <FormTitle>
              Preencha o formulário abaixo para agendar sua consulta
            </FormTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormWrapper>
                <Row>
                  <InputField
                    errorMessage={(errors.name?.message as string) || ''}
                    formProps={{ ...register('name') }}
                    label={'Nome'}
                    placeholder={'Digite seu nome'}
                  />
                  <InputField
                    errorMessage={(errors.lastName?.message as string) || ''}
                    formProps={{ ...register('lastName') }}
                    label={'Sobrenome'}
                    placeholder={'Digite seu sobrenome'}
                  />
                </Row>
                <Row>
                  <SelectField
                    label={'Região'}
                    placeholder={'Selecione sua região'}
                    options={regions.map((region) => formatName(region.name))}
                    register={register}
                    name={'region'}
                    setFormValue={setValue}
                    errorMessage={(errors.region?.message as string) || ''}
                  />
                  <SelectField
                    label={'Cidade'}
                    placeholder={'Selecione sua cidade'}
                    options={locations.map((location) =>
                      formatName(location.name),
                    )}
                    register={register}
                    name={'location'}
                    setFormValue={setValue}
                    errorMessage={(errors.location?.message as string) || ''}
                  />
                </Row>
                <TeamRegister>
                  <TeamRegisterHighlightedText>
                    Cadastre seu time
                  </TeamRegisterHighlightedText>
                  <TeamRegisterText>
                    Atendemos até 06 pokémons por vez
                  </TeamRegisterText>
                  <TeamRegisterFields>
                    <SelectField
                      label={'Pokémon 01'}
                      placeholder={'Selecione seu pokémon'}
                      isHorizontal={true}
                      options={pokemons.map((pokemon) =>
                        formatName(pokemon.name),
                      )}
                      register={register}
                      name={'pokemon'}
                      setFormValue={setValue}
                      errorMessage={(errors.pokemon?.message as string) || ''}
                    />
                  </TeamRegisterFields>
                  <OutlinedButton
                    onClick={() => {
                      console.log('test')
                    }}
                    label={'Adicionar novo pokémon ao time...'}
                    rightLabel="+"
                  />
                </TeamRegister>
                <Row>
                  <SelectField
                    label={'Data para atendimento'}
                    placeholder={'Selecione uma data'}
                    options={dates}
                    register={register}
                    name={'date'}
                    setFormValue={setValue}
                    errorMessage={(errors.date?.message as string) || ''}
                  />
                  <SelectField
                    label={'Horário de atendimento'}
                    placeholder={'Selecione um horário'}
                    options={times}
                    register={register}
                    name={'time'}
                    setFormValue={setValue}
                    errorMessage={(errors.time?.message as string) || ''}
                  />
                </Row>
                <PurchaseDetails />
                <SubmitHolder>
                  <span>Valor Total: R$ 72,10</span>
                  <Button type={'submit'} label={'Concluir agendamento'} />
                </SubmitHolder>
              </FormWrapper>
            </form>
          </>
        ) : (
          <ResponseWrapper>
            {pageStatus === 'success' ? (
              <NoticeBox
                title={'Consulta Agendada'}
                text={
                  'Seu agendamento para dia xx/xx/xxxx, às 00h00m, para 0x pokémons foi realizado com sucesso!'
                }
                imageSrc={checkIcon.src}
                buttonLabel={'Fazer novo agendamento'}
                onButtonClick={() => {
                  setPageStatus('waiting')
                }}
              />
            ) : null}

            {pageStatus === 'error' ? (
              <NoticeBox
                title={'Houve um problema no agendamento'}
                text={'Mensagem de erro'}
                imageSrc={warningIcon.src}
                buttonLabel={'Fazer novo agendamento'}
                onButtonClick={() => {
                  setPageStatus('waiting')
                }}
              />
            ) : null}
          </ResponseWrapper>
        )}
      </ContentHolder>
    </ContentWrapper>
  )
}
