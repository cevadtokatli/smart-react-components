import { act, waitFor, render } from '@testing-library/react'
import React from 'react'
import Transition from './Transition'

describe('<Transition />', () => {
  describe('status', () => {
    it('should render element when true', () => {
      const screen = render(<Transition status><div data-testid="element" /></Transition>)
      expect(screen.queryByTestId('element')).toBeTruthy()
    })

    it('should not render element when false', () => {
      const screen = render(<Transition status={false}><div data-testid="element" /></Transition>)
      expect(screen.queryByTestId('element')).toBeFalsy()
    })
  })

  describe('isPreserved', () => {
    it('should render element with display block when status true', () => {
      const screen = render(<Transition status data-isPreserved><div data-testid="element" /></Transition>)
      expect(screen.queryByTestId('element')).toBeTruthy()

      const style = getComputedStyle(screen.getByTestId('element'))
      expect(style.display).toEqual('block')
    })

    it('should render element with display none when status false', () => {
      const screen = render(<Transition status={false} isPreserved><div data-testid="element" /></Transition>)
      expect(screen.queryByTestId('element')).toBeTruthy()

      const style = getComputedStyle(screen.getByTestId('element'))
      expect(style.display).toEqual('none')
    })
  })

  describe('callbacks', () => {
    describe('show', () => {
      let props

      beforeAll(() => {
        props = {
          status: false,
          beforeShow: jest.fn(() => Promise.resolve()),
          show: jest.fn(() => Promise.resolve()),
          afterShow: jest.fn(),
        }

        act(() => {
          const screen = render(<Transition {...props}><div /></Transition>)
          props.status = true
          screen.rerender(<Transition {...props}><div /></Transition>)
        })
      })

      it('should call beforeShow method', () => {
        waitFor(() => {
          expect(props.beforeShow).toHaveBeenCalled()
        })
      })

      it('should call show method', () => {
        waitFor(() => {
          expect(props.show).toHaveBeenCalled()
        })
      })

      it('should call afterShow method', () => {
        waitFor(() => {
          expect(props.afterShow).toHaveBeenCalled()
        })
      })
    })

    describe('hide', () => {
      let props

      beforeAll(() => {
        props = {
          status: true,
          beforeHide: jest.fn(() => Promise.resolve()),
          hide: jest.fn(() => Promise.resolve()),
          afterHide: jest.fn(),
        }

        act(() => {
          const screen = render(<Transition {...props}><div /></Transition>)
          props.status = false
          screen.rerender(<Transition {...props}><div /></Transition>)
        })
      })

      it('should call beforeHide method', () => {
        waitFor(() => {
          expect(props.beforeHide).toHaveBeenCalled()
        })
      })

      it('should call hide method', () => {
        waitFor(() => {
          expect(props.hide).toHaveBeenCalled()
        })
      })

      it('should call afterHide method', () => {
        waitFor(() => {
          expect(props.afterHide).toHaveBeenCalled()
        })
      })
    })
  })
})
