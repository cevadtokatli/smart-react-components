import createTheme from '../theme'
import createPaletteItem from './palette'

describe('palette', () => {
  const theme = createTheme()

  it('should create palette item by string param', () => {
    const paletteItem = createPaletteItem(theme.$.color.red, theme)
    expect(paletteItem.main).toEqual(theme.$.color.red)
    expect(paletteItem.font).toEqual(theme.$.color.dark.font)
  })

  it('should create palette item by object param', () => {
    const paletteItem = createPaletteItem({
      main: theme.$.color.red,
      font: theme.$.color.dark.font,
    }, theme)
    expect(paletteItem.main).toEqual(theme.$.color.red)
    expect(paletteItem.font).toEqual(theme.$.color.dark.font)
  })
})
