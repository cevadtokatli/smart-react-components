import extractElementProps, { includeResponsiveProps } from './'
import intrinsicStyledFlexProps from './intrinsic-styled-flex-props'
import intrinsicStyledSizeProps from './intrinsic-styled-size-props'

describe('element-props', () => {
  it('should extract the element props out of all props', () => {
    expect(extractElementProps({
      display: 'flex',
      flex: '1 1 auto',
      height: 100,
      width: 100,
    }, [intrinsicStyledFlexProps, intrinsicStyledSizeProps])).toEqual({
      flex: '1 1 auto',
      height: 100,
      width: 100,
    })
  })

  it('should include responsive props', () => {
    expect(includeResponsiveProps(['alignSelf', 'flex', 'order'])).toEqual([
      'alignSelf', 'alignSelfSm', 'alignSelfMd', 'alignSelfLg', 'alignSelfXl',
      'flex', 'flexSm', 'flexMd', 'flexLg', 'flexXl',
      'order', 'orderSm', 'orderMd', 'orderLg', 'orderXl',
    ])
  })
})
