import {
  SERVICE_VALUE,
  SERVICE_TAX,
  calculateValueWithoutTax,
  calculateValueWithTax,
  calculateServiceTax,
} from './purchase'

describe('purchase', () => {
  describe('calculateValueWithoutTax', () => {
    it('should return calculated value without tax', () => {
      const quantity = 2
      const expectedResult = quantity * SERVICE_VALUE
      expect(calculateValueWithoutTax(quantity)).toBe(expectedResult)
    })
  })
  describe('calculateValueWithTax', () => {
    it('should return calculated value with tax', () => {
      const quantity = 4
      const expectedResult = quantity * SERVICE_VALUE * (1 + SERVICE_TAX)
      expect(calculateValueWithTax(quantity)).toBe(expectedResult)
    })
  })
  describe('calculateServiceTax', () => {
    it('should return calculated tax', () => {
      const quantity = 1
      const expectedResult = quantity * SERVICE_VALUE * SERVICE_TAX
      expect(calculateServiceTax(quantity)).toBe(expectedResult)
    })
  })
})
