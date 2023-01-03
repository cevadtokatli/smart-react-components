import { mount } from 'enzyme'
import React from "react"
import Transition from './Transition'

describe('<Transition />', () => {
  describe('status', () => {
    it('should render #element when true', () => {
      const wrapper = mount(<Transition status><div id="element" /></Transition>)
      expect(wrapper.find('#element').exists()).toBe(true)
    })

    it('should not render #element when false', () => {
      const wrapper = mount(<Transition status={false}><div id="element" /></Transition>)
      expect(wrapper.find('#element').exists()).toBe(false)
    })
  })

  describe('isPreserved', () => {
    it('should render #element with display block when status true', () => {
      const wrapper = mount(<Transition status isPreserved><div id="element" /></Transition>)
      expect(wrapper.find('#element').exists()).toBe(true)

      const style = getComputedStyle(wrapper.find('#element').getDOMNode())
      expect(style.display).toEqual('block')
    })

    it('should render #element with display none when status false', () => {
      const wrapper = mount(<Transition status={false} isPreserved><div id="element" /></Transition>)
      expect(wrapper.find('#element').exists()).toBe(true)

      const style = getComputedStyle(wrapper.find('#element').getDOMNode())
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

        const wrapper = mount(<Transition {...props}><div /></Transition>)
        const instance = wrapper.instance()
        const oldProps = instance.props
        const oldState = instance.state
        wrapper.setProps({
          status: true
        });
        (wrapper.instance() as any).componentDidUpdate(oldProps, oldState)
      })

      it('should call beforeShow method', () => {
        expect(props.beforeShow).toHaveBeenCalled()
      })

      it('should call show method', () => {
        expect(props.show).toHaveBeenCalled()
      })

      it('should call afterShow method', () => {
        expect(props.afterShow).toHaveBeenCalled()
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

        const wrapper = mount(<Transition {...props}><div /></Transition>)
        const instance = wrapper.instance()
        const oldProps = instance.props
        const oldState = instance.state
        wrapper.setProps({
            status: false
        });
        (wrapper.instance() as any).componentDidUpdate(oldProps, oldState)
      })

      it('should call beforeHide method', () => {
        expect(props.beforeHide).toHaveBeenCalled()
      })

      it('should call hide method', () => {
        expect(props.hide).toHaveBeenCalled()
      })

      it('should call afterHide method', () => {
        expect(props.afterHide).toHaveBeenCalled()
      })
    })
  })
})
