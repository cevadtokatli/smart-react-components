import { OrderPosition } from '../types'
import { getReverseOrderPosition } from './props'

describe('props', () => {
  it('should get reverse value of the order position', () => {
    expect(getReverseOrderPosition(OrderPosition.LEFT)).toEqual(OrderPosition.RIGHT)
    expect(getReverseOrderPosition(OrderPosition.RIGHT)).toEqual(OrderPosition.LEFT)
  })
})
