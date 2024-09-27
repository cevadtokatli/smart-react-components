import createTheme from '../theme'
import { convertStyledPropToCSS } from './css'

describe('css', () => {
  const theme = createTheme()

  describe('convertStyledPropToCSS', () => {
    it.each([
      { key: 'margin', value: 0, expected: 'margin:0;', props: {} },
      { key: 'margin', value: 16, expected: 'margin:16px;' },
      { key: 'margin', value: -16, expected: 'margin:-16px;' },
      { key: 'margin', value: '16px', expected: 'margin:16px;' },
      { key: 'margin', value: '$length.3', expected: `margin:1rem;` },
      { key: 'margin', value: '-$length.3', expected: 'margin:-1rem;' },
      { key: 'margin', value: '{length.3}', expected: 'margin:1rem;' },
      { key: 'margin', value: '-{length.3}', expected: 'margin:-1rem;' },
      { key: 'margin', value: '$length.3 {length.2} 0', expected: 'margin:1rem .5rem 0;' },
      { key: 'color', value: '!primary', expected: 'color:#0665d0;' },
      { key: 'color', value: '!primary.main', expected: 'color:#0665d0;' },
      { key: 'color', value: '!primary.font', expected: 'color:#fff;' },
      { key: 'color', value: '[primary]', expected: 'color:#0665d0;' },
      { key: 'color', value: '[primary.main]', expected: 'color:#0665d0;' },
      { key: 'color', value: '[primary.font]', expected: 'color:#fff;' },
      { key: 'marginHorizontal', value: '16px', expected: 'margin-right:16px; margin-left:16px;' },
      { key: 'display', value: ['flex', true], expected: 'display:flex !important;' },
      { key: 'display', value: ['flex', false], expected: 'display:flex;' },
      { key: 'hover', value: { color: 'red', background: 'blue' }, expected: '&:hover{color:red; background:blue;}' },
      { key: 'color', value: null, expected: null },
      { key: 'color', value: [null, true], expected: null },
      { key: 'color', value: { background: 'blue' }, expected: null },
      { key: 'hover', value: 'red', expected: null },
      { key: 'foo', value: 'red', expected: null },
      { key: 'getSize', value: v => `width: ${v}; height: ${v};`, props: { size: '1000px', sizeSm: '250px' }, expected: `width: 1000px; height: 1000px;@media(min-width:576px) { width: 250px; height: 250px; }` },
    ])
    ('%s', ({ key, value, props={}, expected }) => {
      expect(convertStyledPropToCSS(key, { [key]: value, ...props }, theme)).toEqual(expected)
    })
  })
})
