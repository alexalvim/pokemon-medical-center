export const SERVICE_VALUE = 7000

export const SERVICE_TAX = 0.03

export const calculateValueWithoutTax = (quantity: number) =>
  SERVICE_VALUE * quantity

export const calculateValueWithTax = (quantity: number) =>
  SERVICE_VALUE * quantity * (1 + SERVICE_TAX)

export const calculateServiceTax = (quantity: number) =>
  SERVICE_VALUE * quantity * SERVICE_TAX
