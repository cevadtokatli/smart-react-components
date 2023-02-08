import { OrderPosition } from '../types'
import { applyResponsiveStyledProp, getReverseOrderPosition } from './props'

describe('props', () => {
  it('should apply the given responsive prop', () => {
    expect(applyResponsiveStyledProp({ size: 'small', sizeMd: 'medium', sizeLg: 'large' }, 'size', 'iconSize', v => `$size.icon.${v}`)).toEqual({
      iconSize: '$size.icon.small',
      iconSizeMd: '$size.icon.medium',
      iconSizeLg: '$size.icon.large',
    })
  })

  it('should get reverse value of the order position', () => {
    expect(getReverseOrderPosition(OrderPosition.LEFT)).toEqual(OrderPosition.RIGHT)
    expect(getReverseOrderPosition(OrderPosition.RIGHT)).toEqual(OrderPosition.LEFT)
  })
})
