import { describe, it, expect } from 'vitest'
import { column } from '../array'

describe('column', () => {
  it('should return an array of values for a given key', () => {
    const data = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 }
    ]
    expect(column(data, 'name')).toEqual(['Alice', 'Bob', 'Charlie'])
    expect(column(data, 'age')).toEqual([25, 30, 35])
  })

  it('should return an empty array', () => {
    expect(column([], 'name')).toEqual([])
    // @ts-expect-error
    expect(column(null, 'name')).toEqual([])
    // @ts-expect-error
    expect(column(undefined, 'name')).toEqual([])
    // @ts-expect-error
    expect(column('data', 'name')).toEqual([])
    // @ts-expect-error
    expect(column({}, 'name')).toEqual([])
  })
})



