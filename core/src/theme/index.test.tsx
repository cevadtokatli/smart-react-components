import createTheme from './'
import color from './color'
import fontFamily from './font-family'
import fontSize from './font-size'
import fontWeight from './font-weight'
import i18n from './i18n'
import length from './length'
import opacity from './opacity'
import radius from './radius'
import size from './size'
import zIndex from './z-index'

describe('theme', () => {
  it('should create theme by default params', () => {
    const theme = createTheme()
    expect(theme.$.color).toEqual(color)
    expect(theme.$.fontFamily).toEqual(fontFamily)
    expect(theme.$.fontSize).toEqual(fontSize)
    expect(theme.$.fontWeight).toEqual(fontWeight)
    expect(theme.$.i18n).toEqual(i18n)
    expect(theme.$.length).toEqual(length)
    expect(theme.$.opacity).toEqual(opacity)
    expect(theme.$.radius).toEqual(radius)
    expect(theme.$.size).toEqual(size)
    expect(theme.$.zIndex).toEqual(zIndex)
  })

  it('should create theme by custom params', () => {
    const theme = createTheme({
      $: {
        color: {
          red: '#ff0000',
        },
      },
      custom: 'custom',
    })
    expect(theme.$.color.red).toEqual('#ff0000')
    expect(theme.custom).toEqual('custom')
  })

  it('should create theme light mode', () => {
    const theme = createTheme()
    expect(theme.$.color.dynamic).toEqual(theme.$.color.light)
    expect(theme.$.color['!dynamic']).toEqual(theme.$.color.dark)
    expect(theme.$.palette.dynamic).toEqual(theme.$.palette.light)
    expect(theme.$.palette['!dynamic']).toEqual(theme.$.palette.dark)
  })

  it('should create theme dark mode', () => {
    const theme = createTheme({}, true)
    expect(theme.$.color.dynamic).toEqual(theme.$.color.dark)
    expect(theme.$.color['!dynamic']).toEqual(theme.$.color.light)
    expect(theme.$.palette.dynamic).toEqual(theme.$.palette.dark)
    expect(theme.$.palette['!dynamic']).toEqual(theme.$.palette.light)
  })
})
