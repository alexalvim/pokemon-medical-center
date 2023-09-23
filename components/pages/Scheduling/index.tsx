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
import { formatName } from '../../../ultils/formatters'

type PageStatus = 'waiting' | 'success' | 'error'

export const Scheduling = () => {
  const [pageStatus, setPageStatus] = useState<PageStatus>('waiting')
  const [regions, setRegions] = useState<Region[]>([])
  const [locations, setLocations] = useState<Location[]>([])
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    const fillSelects = async () => {
      const [resultRegions, resultPokemons] = await Promise.all([
        getRegions(),
        getPokemons(),
      ])

      setRegions(resultRegions)
      setPokemons(resultPokemons)
    }

    fillSelects()
  }, [])

  useEffect(() => {
    const fillLocation = async () => {
      const resultLocations = await getLocations('kanto')
      setLocations(resultLocations)
    }

    fillLocation()
  }, [])

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
            <FormWrapper>
              <Row>
                <InputField label={'Nome'} placeholder={'Digite seu nome'} />
                <InputField
                  label={'Sobrenome'}
                  placeholder={'Digite seu sobrenome'}
                />
              </Row>
              <Row>
                <SelectField
                  label={'Região'}
                  placeholder={'Selecione sua região'}
                  options={regions.map((region) => formatName(region.name))}
                />
                <SelectField
                  label={'Cidade'}
                  placeholder={'Selecione sua cidade'}
                  options={locations.map((location) =>
                    formatName(location.name),
                  )}
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
                  />
                  <SelectField
                    label={'Pokémon 02'}
                    placeholder={'Selecione seu pokémon'}
                    isHorizontal={true}
                    options={pokemons.map((pokemon) =>
                      formatName(pokemon.name),
                    )}
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
                  options={[]}
                />
                <SelectField
                  label={'Horário de atendimento'}
                  placeholder={'Selecione um horário'}
                  options={[]}
                />
              </Row>
              <PurchaseDetails />
              <SubmitHolder>
                <span>Valor Total: R$ 72,10</span>
                <Button
                  onClick={() => console.log('teste')}
                  label={'Concluir agendamento'}
                />
              </SubmitHolder>
            </FormWrapper>
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
