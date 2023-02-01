import { OrderPosition } from '../types'
import { getIconSizeProps, getReverseOrderPosition } from './props'

describe('props', () => {
  it('should get icon size', () => {
    expect(getIconSizeProps('small', null, 'medium', 'large')).toEqual({
      height: '$size.icon.small',
      width: '$size.icon.small',
      heightMd: '$size.icon.medium',
      widthMd: '$size.icon.medium',
      heightLg: '$size.icon.large',
      widthLg: '$size.icon.large',
    })
  })

  it('should get reverse value of the order position', () => {
    expect(getReverseOrderPosition(OrderPosition.LEFT)).toEqual(OrderPosition.RIGHT)
    expect(getReverseOrderPosition(OrderPosition.RIGHT)).toEqual(OrderPosition.LEFT)
  })
})
