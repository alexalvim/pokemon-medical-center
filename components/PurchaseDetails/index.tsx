import { formatCentsToCurrency } from '../../ultils/formatters'
import {
  SERVICE_VALUE,
  calculateServiceTax,
  calculateValueWithoutTax,
} from '../../ultils/purchase'
import { ContentWrapper, InfoMessage, Row } from './styles'

interface PurchaseDetailsProps {
  pokemonsQuantity: number
}

export const PurchaseDetails = ({ pokemonsQuantity }: PurchaseDetailsProps) => {
  return (
    <ContentWrapper>
      <Row>
        <span>Número de pokémons a serem atendidos:</span>
        <span>0{pokemonsQuantity}</span>
      </Row>
      <Row>
        <span>Atendimento unitário por pokémon:</span>
        <span>R$ {formatCentsToCurrency(SERVICE_VALUE)}</span>
      </Row>
      <Row>
        <span>Subtotal:</span>
        <span>
          R$ {formatCentsToCurrency(calculateValueWithoutTax(pokemonsQuantity))}
        </span>
      </Row>
      <Row>
        <span>Taxa geracional*:</span>
        <span>
          R$ {formatCentsToCurrency(calculateServiceTax(pokemonsQuantity))}
        </span>
      </Row>
      <InfoMessage>
        *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
        alta do time, com limite de até 30%
      </InfoMessage>
    </ContentWrapper>
  )
}
