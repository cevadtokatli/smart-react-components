import { act, waitFor, render } from '@testing-library/react'
import React from 'react'
import CSSTransition from './CSSTransition'

describe('<CSSTransition />', () => {
  let props

  beforeEach(() => {
    props = {
      className: '',
      duration: 100,
    }
  })

  describe('status', () => {
    it('should render element when true', () => {
      const screen = render(<CSSTransition {...props} status><div data-testid="element" /></CSSTransition>)
      expect(screen.queryByTestId('element')).toBeTruthy()
    })

    it('should not render element when false', () => {
      const screen = render(<CSSTransition {...props} status={false}><div data-testid="element" /></CSSTransition>)
      expect(screen.queryByTestId('element')).toBeFalsy()
    })
  })

  describe('isPreserved', () => {
    it('should render element with display block when status true', () => {
      const screen = render(<CSSTransition {...props} status data-isPreserved><div data-testid="element" /></CSSTransition>)
      expect(screen.queryByTestId('element')).toBeTruthy()

      const style = getComputedStyle(screen.getByTestId('element'))
      expect(style.display).toEqual('block')
    })

    it('should render element with display none when status false', () => {
      const screen = render(<CSSTransition {...props} status={false} isPreserved><div data-testid="element" /></CSSTransition>)
      expect(screen.queryByTestId('element')).toBeTruthy()

      const style = getComputedStyle(screen.getByTestId('element'))
      expect(style.display).toEqual('none')
    })
  })

  describe('callbacks', () => {
    describe('show', () => {
      describe('hasShowAnimation true', () => {
        beforeEach(() => {
          props = {
            ...props,
            status: false,
            beforeShow: jest.fn(() => Promise.resolve()),
            afterShow: jest.fn(),
          }
  
          act(() => {
            const screen = render(<CSSTransition {...props}><div /></CSSTransition>)
            props.status = true
            screen.rerender(<CSSTransition {...props}><div /></CSSTransition>)
          })
        })
  
        it('should call beforeShow method', () => {
          waitFor(() => {
            expect(props.beforeShow).toHaveBeenCalled()
          })
        })
  
        it('should call afterShow method', () => {
          waitFor(() => {
            expect(props.afterShow).toHaveBeenCalled()
          })
        })
      })

      describe('hasShowAnimation false', () => {
        beforeEach(() => {
          props = {
            ...props,
            status: false,
            hasShowAnimation: false,
            beforeShow: jest.fn(() => Promise.resolve()),
            afterShow: jest.fn(),
          }

          act(() => {
            const screen = render(<CSSTransition {...props}><div /></CSSTransition>)
            props.status = true
            screen.rerender(<CSSTransition {...props}><div /></CSSTransition>)
          })
        })
  
        it('should not call beforeShow method', () => {
          waitFor(() => {
            expect(props.beforeShow).not.toHaveBeenCalled()
          })
        })
  
        it('should not call afterShow method', () => {
          waitFor(() => {
            expect(props.afterShow).not.toHaveBeenCalled()
          })
        })
      })
    })

    describe('hide', () => {
      describe('hasHideAnimation true', () => {
        beforeEach(() => {
          props = {
            ...props,
            status: true,
            beforeHide: jest.fn(() => Promise.resolve()),
            afterHide: jest.fn(),
          }
  
          act(() => {
            const screen = render(<CSSTransition {...props}><div /></CSSTransition>)
            props.status = false
            screen.rerender(<CSSTransition {...props}><div /></CSSTransition>)
          })
        })
  
        it('should call beforeHide method', () => {
          waitFor(() => {
            expect(props.beforeHide).toHaveBeenCalled()
          })
        })
  
        it('should call afterHide method', () => {
          waitFor(() => {
            expect(props.afterHide).toHaveBeenCalled()
          })
        })
      })

      describe('hasHideAnimation false', () => {
        beforeEach(() => {
          props = {
            ...props,
            status: true,
            hasHideAnimation: false,
            beforeHide: jest.fn(() => Promise.resolve()),
            afterHide: jest.fn(),
          }

          act(() => {
            const screen = render(<CSSTransition {...props}><div /></CSSTransition>)
            props.status = false
            screen.rerender(<CSSTransition {...props}><div /></CSSTransition>)
          })
        })
  
        it('should not call beforeHide method', () => {
          waitFor(() => {
            expect(props.beforeHide).not.toHaveBeenCalled()
          })
        })
  
        it('should not call afterHide method', () => {
          waitFor(() => {
            expect(props.afterHide).not.toHaveBeenCalled()
          })
        })
      })
    })
  })
})
