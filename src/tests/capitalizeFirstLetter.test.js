import capitalizeFirstLetter from 'src/helpers/capitalizeFirstLetter'
import { describe, expect, it } from 'vitest'

describe('capitalizeFirstLetter', () => {
  it('should be a function', () => {
    expect(typeof capitalizeFirstLetter).toBe('function')
  })

  it('should return a string', () => {
    expect(typeof capitalizeFirstLetter('')).toBe('string')
  })

  it('should return a string with the first letter capitalized', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello')
  })

  it('should throw an error if the argument is not a string', () => {
    expect(() => capitalizeFirstLetter(123)).toThrow()
  })
})
