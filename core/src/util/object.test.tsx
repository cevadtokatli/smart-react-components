import { isObject, merge } from './object'

describe('object', () => {
  describe('isObject', () => {
    it.each([
      { item: 'a', expected: false, },
      { item: 1, expected: false, },
      { item: null, expected: false, },
      { item: undefined, expected: false, },
      { item: [], expected: false, },
      { item: ['a'], expected: false, },
      { item: {}, expected: true, },
      { item: {foo:'bar'}, expected: true, },
      { item: /^a$/g, expected: false, },
    ])('%s', ({ item, expected }) => {
      expect(isObject(item)).toEqual(expected)
    })
  })

  describe('merge', () => {
    let source
    let target
    
    beforeEach(() => {
      source = {
        a: 1,
        c: 'x',
        d: ['a', 'b'],
        e: 't',
        f: {
          a: 'b',
          b: 'x',
        },
        g: {
          a: 'b',
        },
        i: {
          a: 'b'
        },
        j: 'j',
      }
      target = {
        b: 2,
        c: 'y',
        d: ['a', 'c'],
        e: null,
        f: {
          a: 'c',
          c: 'y',
        },
        h: {
          a: 'b',
        },
        i: 'i',
        j: {
          a: 'b',
        },
      }
    })

    it('should merge two objects', () => {
      const expected = {
        a: 1,
        b: 2,
        c: 'y',
        d: ['a', 'c'],
        e: null,
        f: {
          a: 'c',
          b: 'x',
          c: 'y',
        },
        g: {
          a: 'b',
        },
        h: {
          a: 'b',
        },
        i: 'i',
        j: {
          a: 'b',
        },
      }
      expect(merge(source, target)).toEqual(expected)
    })

    it('should match json', () => {
      const expected = '{"a":1,"c":"y","d":["a","c"],"e":null,"f":{"a":"c","b":"x","c":"y"},"g":{"a":"b"},"i":"i","j":{"a":"b"},"b":2,"h":{"a":"b"}}'
      expect(JSON.stringify(merge(source, target))).toEqual(expected)
    })
  })
})
