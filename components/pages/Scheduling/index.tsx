import { useEffect, useState } from 'react'
import {
  ContentHolder,
  ContentWrapper,
  FormTitle,
  FormWrapper,
  ResponseWrapper,
  Row,
  SubmitHolder,
} from './styles'
import { NoticeBox } from '../../NoticeBox'
import checkIcon from '../../../public/check.svg'
import warningIcon from '../../../public/warning.svg'
import { PageSummary } from '../../PageSummary'
import { InputField } from '../../InputField'
import { SelectField } from '../../SelectField'
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
import {
  formatCentsToCurrency,
  formatName,
  formatTime,
  formatUrlData,
} from '../../../ultils/formatters'
import {
  createAppointment,
  getAppointmentDates,
  getAppointmentTimes,
} from '../../../api/appointment'
import z from 'zod'
import {
  FieldValues,
  SubmitHandler,
  UseFormRegister,
  UseFormSetValue,
  useFieldArray,
  useForm,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TeamRegister } from '../../TeamRegister'
import { calculateValueWithTax } from '../../../ultils/purchase'
import { AxiosError } from 'axios'

type PageStatus = 'waiting' | 'success' | 'error'

interface PokemonsField {
  pokemon: string
}

export interface PokemonFormSchema {
  name: string
  lastName: string
  region: string
  location: string
  pokemons: PokemonsField[]
  date: string
  time: string
}

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
  pokemons: z.array(
    z.object({
      pokemon: z.string().nonempty('Pokémon é obrigatório'),
    }),
  ),
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
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      name: '',
      lastName: '',
      region: '',
      location: '',
      pokemons: [{ pokemon: '' }],
      date: '',
      time: '',
    },
  })

  const { fields: pokemonsFields, append: appendPokemonField } = useFieldArray({
    name: 'pokemons',
    control,
  })

  const watchedRegion = watch('region')
  const watchedDate = watch('date')
  const watchedTime = watch('time')
  const watchedPokemons = watch('pokemons')

  useEffect(() => {
    const fillSelects = async () => {
      try {
        const [resultRegions, resultPokemons, resultDates] = await Promise.all([
          getRegions(),
          getPokemons(),
          getAppointmentDates(),
        ])

        setRegions(resultRegions)
        setPokemons(resultPokemons)
        setDates(resultDates)
      } catch (e) {
        if (e instanceof Error) {
          setPageStatus('error')
          setErrorMessage(`Error to get select values:\n${e.message}`)
        }
      }
    }

    fillSelects()

    return () => {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (watchedRegion) {
      const fillLocation = async () => {
        setLocations([])
        try {
          const resultLocations = await getLocations(
            formatUrlData(watchedRegion),
          )
          setLocations(resultLocations)
        } catch (e) {
          if (e instanceof AxiosError) {
            setPageStatus('error')
            setErrorMessage(`Error to get location:\n${e.message}`)
          }
        }
      }

      fillLocation()
    }
  }, [watchedRegion])

  useEffect(() => {
    if (watchedDate) {
      const fillTimes = async () => {
        setTimes([])
        try {
          const resultTimes = await getAppointmentTimes(watchedDate)
          setTimes(resultTimes)
        } catch (e) {
          if (e instanceof AxiosError) {
            setPageStatus('error')
            setErrorMessage(`Error to get times:\n${e.message}`)
          }
        }
      }

      fillTimes()
    }
  }, [watchedDate])

  const onSubmit: SubmitHandler<PokemonFormSchema> = async (data) => {
    try {
      await createAppointment(data)
      setPageStatus('success')
      setSuccessMessage(
        `Seu agendamento para dia ${watchedDate}, às ${formatTime(
          watchedTime,
        )}, para ${
          watchedPokemons.length
        }x pokémons foi realizado com sucesso!`,
      )
    } catch (e) {
      if (e instanceof AxiosError) {
        setPageStatus('error')
        setErrorMessage(
          `Error to create appointment:\n${e?.response?.statusText}`,
        )
      }
    } finally {
      reset()
    }
  }

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
                    formProps={register('region')}
                    name={'region'}
                    setFormValue={
                      setValue as unknown as UseFormSetValue<FieldValues>
                    }
                    errorMessage={(errors.region?.message as string) || ''}
                  />
                  <SelectField
                    label={'Cidade'}
                    placeholder={'Selecione sua cidade'}
                    options={locations.map((location) =>
                      formatName(location.name),
                    )}
                    formProps={register('location')}
                    name={'location'}
                    setFormValue={
                      setValue as unknown as UseFormSetValue<FieldValues>
                    }
                    errorMessage={(errors.location?.message as string) || ''}
                  />
                </Row>
                <TeamRegister
                  options={pokemons.map((pokemon) => formatName(pokemon.name))}
                  fields={pokemonsFields}
                  getNameByIndex={(index: number) =>
                    `pokemons.${index}.pokemon`
                  }
                  setFormValue={
                    setValue as unknown as UseFormSetValue<FieldValues>
                  }
                  register={register as unknown as UseFormRegister<FieldValues>}
                  getErrorMessageByIndex={(index) =>
                    (errors.pokemons &&
                      (errors?.pokemons[index]?.pokemon?.message as string)) ||
                    ''
                  }
                  appendField={() => {
                    if (watchedPokemons.length < 6) {
                      appendPokemonField({ pokemon: '' })
                    }
                  }}
                />
                <Row>
                  <SelectField
                    label={'Data para atendimento'}
                    placeholder={'Selecione uma data'}
                    options={dates}
                    formProps={register('date')}
                    name={'date'}
                    setFormValue={
                      setValue as unknown as UseFormSetValue<FieldValues>
                    }
                    errorMessage={(errors.date?.message as string) || ''}
                  />
                  <SelectField
                    label={'Horário de atendimento'}
                    placeholder={'Selecione um horário'}
                    options={times}
                    formProps={register('time')}
                    name={'time'}
                    setFormValue={
                      setValue as unknown as UseFormSetValue<FieldValues>
                    }
                    errorMessage={(errors.time?.message as string) || ''}
                  />
                </Row>
                <PurchaseDetails pokemonsQuantity={watchedPokemons.length} />
                <SubmitHolder>
                  <span>
                    Valor Total: R${' '}
                    {formatCentsToCurrency(
                      calculateValueWithTax(watchedPokemons.length),
                    )}
                  </span>
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
                text={successMessage}
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
                text={errorMessage}
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
