import { ContentWrapper, InfoMessage, Row } from './styles'

export const PurchaseDetails = () => {
  return (
    <ContentWrapper>
      <Row>
        <span>Número de pokémons a serem atendidos:</span>
        <span>01</span>
      </Row>
      <Row>
        <span>Atendimento unitário por pokémon:</span>
        <span>R$ 70,00</span>
      </Row>
      <Row>
        <span>Subtotal:</span>
        <span>R$ 70,00</span>
      </Row>
      <Row>
        <span>Taxa geracional*:</span>
        <span>R$ 2,10</span>
      </Row>
      <InfoMessage>
        *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
        alta do time, com limite de até 30%
      </InfoMessage>
    </ContentWrapper>
  )
}
