import React from 'react'
import { findDOMNode } from 'react-dom'
import { TransitionProps, TransitionStandardProps } from './types'

export interface Props extends TransitionProps, TransitionStandardProps {}

interface State {
  status: boolean
}

export default class Transition extends React.Component<Props, State> {
  private static readonly defaultProps = {
    beforeHide: () => Promise.resolve(),
    beforeShow: () => Promise.resolve(),
    hide: () => Promise.resolve(),
    show: () => Promise.resolve(),
  }

  private isProcessing = false

  constructor (props) {
    super(props)

    this.state = {
      status: props.status,
    }
  }

  componentDidMount () {
    const { props, state } = this

    if (props.isPreserved && !state.status) {
      const el = findDOMNode(this) as HTMLElement
      const style = el.getAttribute('style') ?? ''
      el.setAttribute('style', `display: none !important; ${style}`)
    }
  }

  async componentDidUpdate (prevProps, prevState) {
    const { props, state } = this

    if (props.status !== prevProps.status) {
      this.setStatus(props, state)
    }

    if (state.status !== prevState.status) {
      if (state.status) {
        this.show()
      } else {
        props.afterHide?.(props.children)
        this.isProcessing = false

        if (props.status) {
          this.setStatus(props, state)
        }
      }
    }
  }

  /**
   * Sets status state or starts hide operation depending on status.
   */
  setStatus = async (props: Props, state: State) => {
    if (!this.isProcessing && props.status !== state.status) {
      this.isProcessing = true

      if (props.status) {
        try {
          await props.beforeShow(props.children)
        } catch (err) {}

        this.setState({ status: true })
      } else {
        this.hide()
      }
    }
  }

  /**
   * Shows the element.
   */
  show = () => {
    const el = findDOMNode(this) as HTMLElement

    if (this.props.isPreserved) {
      const style = el.getAttribute('style') ?? ''
      el.setAttribute('style', style.replace(/display[^;]+;?/g, ''))
    }

    this.props.show(el)
      .then(() => this.props.afterShow?.(this.props.children))
      .finally(() => {
        this.isProcessing = false

        if (!this.props.status) {
          this.setStatus(this.props, this.state)
        }
      })
  }

  /**
   * Hides the element.
  */
  hide = async () => {
    const el = findDOMNode(this) as HTMLElement
    const { props } = this

    try {
      await props.beforeHide(props.children)
    } catch (err) {}

    this.props.hide(el)
      .finally(() => {
        const style = el.getAttribute('style') ?? ''
        el.setAttribute('style', `display: none !important; ${style}`)

        this.setState({ status: false })
      })
  }

  render () {
    const { props, state } = this

    return (props.isPreserved || state.status) ? props.children : null
  }
}
