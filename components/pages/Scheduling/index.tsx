import { useState } from 'react'
import {
  ContentHolder,
  ContentWrapper,
  FormWrapper,
  ResponseWrapper,
} from './styles'
import { NoticeBox } from '../../NoticeBox'
import checkIcon from '../../../public/check.svg'
import warningIcon from '../../../public/warning.svg'
import { PageSummary } from '../../PageSummary'
import { InputField } from '../../InputField'
import { SelectField } from '../../SelectField'

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
          <FormWrapper>
            <InputField />
            <SelectField />
          </FormWrapper>
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
