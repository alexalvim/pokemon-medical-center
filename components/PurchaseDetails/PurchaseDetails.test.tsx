import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { PurchaseDetails } from '.'
import { light } from '../../styles/themes/light'
import { formatCentsToCurrency } from '../../ultils/formatters'
import {
  SERVICE_VALUE,
  calculateServiceTax,
  calculateValueWithoutTax,
} from '../../ultils/purchase'

describe('Footer', () => {
  it('should render component correctly', () => {
    const pokemonsQuantity = 2
    render(
      <ThemeProvider theme={light}>
        <PurchaseDetails pokemonsQuantity={pokemonsQuantity} />
      </ThemeProvider>,
    )
    const pokemonsQuantityLabel = screen.getByText(
      'Número de pokémons a serem atendidos:',
    )
    const pokemonsQuantityValue = screen.getByText(`0${pokemonsQuantity}`)
    const appointmentPriceLabel = screen.getByText(
      'Atendimento unitário por pokémon:',
    )
    const appointmentPriceValue = screen.getByText(
      `R$ ${formatCentsToCurrency(SERVICE_VALUE)}`,
    )
    const subtotalLabel = screen.getByText('Subtotal:')
    const subtotalValue = screen.getByText(
      `R$ ${formatCentsToCurrency(calculateValueWithoutTax(pokemonsQuantity))}`,
    )
    const taxLabel = screen.getByText('Taxa geracional*:')
    const taxValue = screen.getByText(
      `R$ ${formatCentsToCurrency(calculateServiceTax(pokemonsQuantity))}`,
    )
    const infoMessage = screen.getByText(
      '*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%',
    )

    expect(pokemonsQuantityLabel).toBeInTheDocument()
    expect(pokemonsQuantityValue).toBeInTheDocument()
    expect(appointmentPriceLabel).toBeInTheDocument()
    expect(appointmentPriceValue).toBeInTheDocument()
    expect(subtotalLabel).toBeInTheDocument()
    expect(subtotalValue).toBeInTheDocument()
    expect(taxLabel).toBeInTheDocument()
    expect(taxValue).toBeInTheDocument()
    expect(infoMessage).toBeInTheDocument()
  })
})
