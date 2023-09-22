import { useState } from 'react'
import {
  ContentHolder,
  ContentWrapper,
  FormTitle,
  FormWrapper,
  ResponseWrapper,
  Row,
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

type PageStatus = 'waiting' | 'success' | 'error'

export const Scheduling = () => {
  const [pageStatus, setPageStatus] = useState<PageStatus>('waiting')

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
                />
                <SelectField
                  label={'Cidade'}
                  placeholder={'Selecione sua cidade'}
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
                  />
                  <SelectField
                    label={'Pokémon 02'}
                    placeholder={'Selecione seu pokémon'}
                    isHorizontal={true}
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
                />
                <SelectField
                  label={'Horário de atendimento'}
                  placeholder={'Selecione um horário'}
                />
              </Row>
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
