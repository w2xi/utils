import { describe, it, expect } from 'vitest'
import { validateMobilePhone } from '../valid'

describe('validateMobilePhone', () => {
  it('test valid mobile phone', () => {
    ['18888888888', '19999999999', '16666666666'].forEach((val) => {
      expect(validateMobilePhone(val)).toBe(true)
    })
  })

  it('test invalid mobile phone', () => {
    ['1234567890', '123456789012', '123456789a'].forEach((val) => {
      expect(validateMobilePhone(val)).toBe(false)
    })
  })
})