import {
  capitalize,
  formatCentsToCurrency,
  formatCurrencyToCents,
  formatName,
  formatTime,
  formatUrlData,
} from './formatters'

describe('formatters', () => {
  describe('formatName', () => {
    it('shold return formatted name when receive unformatted name', () => {
      const testName = 'test-test'
      const expectedResult = 'Test Test'
      expect(formatName(testName)).toBe(expectedResult)
    })
  })
  describe('capitalize', () => {
    it('shold return capitalized string', () => {
      const testString = 'test'
      const expectedResult = 'Test'
      expect(capitalize(testString)).toBe(expectedResult)
    })
  })
  describe('formatUrlData', () => {
    it('shold return formatted url data when receive a name', () => {
      const testUrlData = 'Test Test'
      const expectedResult = 'test-test'
      expect(formatUrlData(testUrlData)).toBe(expectedResult)
    })
  })
  describe('formatCentsToCurrency', () => {
    it('shold return formatted currency when receive a value in cents', () => {
      const testCents = 1000
      const expectedResult = '10,00'
      expect(formatCentsToCurrency(testCents)).toBe(expectedResult)
    })
    it('shold return formatted currency when receive a value in cents with value only with cents', () => {
      const testCents = 10
      const expectedResult = '0,10'
      expect(formatCentsToCurrency(testCents)).toBe(expectedResult)
    })
    it('shold return formatted currency when receive a value in cents with zero value', () => {
      const testCents = 0
      const expectedResult = '0,00'
      expect(formatCentsToCurrency(testCents)).toBe(expectedResult)
    })
  })
  describe('formatCurrencyToCents', () => {
    it('shold return value in cents when receive the formated currency', () => {
      const currencyValue = '12,55'
      const expectedResult = 1255
      expect(formatCurrencyToCents(currencyValue)).toBe(expectedResult)
    })
  })
  describe('formatTime', () => {
    it('shold return formatted time in XXhXXm pattern', () => {
      const timeValue = '10:30:00'
      const expectedResult = '10h30m'
      expect(formatTime(timeValue)).toBe(expectedResult)
    })
  })
})
