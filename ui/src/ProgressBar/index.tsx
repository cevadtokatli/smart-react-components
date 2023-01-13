import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { Theme } from '@smart-react-components/core/theme'
import { JSXElementProps, PaletteProp, TimingFunction } from '@smart-react-components/core/types'
import { addEventListener, removeEventListener } from '@smart-react-components/core/util/dom'
import React from 'react'
import { ThemeContext } from 'styled-components'
import ProgressBarElement, { Bar, Percentage } from './ProgressBarElement'

export interface Props {
  displayValue?: boolean
  elementProps?: JSXElementProps
  hasStripedAnimation?: boolean
  isFilled?: boolean
  isNested?: boolean
  isStriped?: boolean
  palette?: PaletteProp
  prefix?: string
  separator?: string
  suffix?: string
  transitionDuration?: number
  transitionTimingFunction?: TimingFunction
  totalValue?: number
  value: number
}

const ProgressBar: React.FC<Props> = ({ displayValue, elementProps = {}, hasStripedAnimation = true, isFilled, isNested, isStriped, palette = 'primary', prefix, separator, suffix, transitionDuration = 450, transitionTimingFunction = 'linear', totalValue, value }) => {
  const theme = React.useContext<Theme>(ThemeContext)

  const getStripedAnimationDuration = () => displayValue ? 400 : 1500
  const getHeight = () => elementProps.height ? (typeof elementProps.height === 'string' ? elementProps.height : `${elementProps.height}px`) : (isNested ? '100%' : (displayValue ? '16px' : '4px'))
  const getPercentage = () => {
    const label = {
      prefix: prefix ?? theme.$.i18n.progressBar.prefix,
      separator: separator ?? theme.$.i18n.progressBar.separator,
      suffix: suffix ?? theme.$.i18n.progressBar.suffix,
    }

    if (totalValue) {
      return {
        label: `${label.prefix}${value}${label.suffix} ${label.separator} ${label.prefix}${totalValue}${label.suffix}`,
        value: Math.round((value / totalValue) * 100),

      }
    }

    return {
      value,
      label: `${label.prefix}${value}${label.suffix}`,
    }
  }

  const [stripedAnimationDuration, setStripedAnimationDuration] = React.useState(() => getStripedAnimationDuration())
  const [height, setHeight] = React.useState(() => getHeight())
  const [left, setLeft] = React.useState(() => -1)
  const [percentage, setPercentage] = React.useState(() => getPercentage())
  const el = React.useRef<HTMLDivElement>(null)
  const percentageEl = React.useRef<HTMLDivElement>(null)

  const handleResize = () => setLeft((el.current.offsetWidth / 2) - (percentageEl.current.offsetWidth / 2))

  useChangeEffect(() => {
    setStripedAnimationDuration(getStripedAnimationDuration())
  }, [stripedAnimationDuration])

  useChangeEffect(() => {
    setHeight(getHeight())
  }, [elementProps.height, displayValue])

  useChangeEffect(() => {
    setPercentage(getPercentage())
  }, [value, totalValue, prefix, separator, suffix])

  React.useEffect(() => {
    if (displayValue) {
      addEventListener(window, ['resize'], handleResize)

      return () => {
        removeEventListener(window, ['resize'], handleResize)
      }
    }
  }, [displayValue])

  React.useEffect(() => {
    if (displayValue) {
      handleResize()
    }
  }, [percentage])

  const PercentageEl = displayValue && <Percentage ref={percentageEl} style={{ left: `${left}px`, visibility: left > -1 ? 'visible' : 'hidden' }}>{percentage.label}</Percentage>

  return (
    <ProgressBarElement
      {...elementProps}
      hasStripedAnimation={hasStripedAnimation}
      height={height}
      isFilled={isFilled}
      isNested={isNested}
      isStriped={isStriped}
      palette={palette}
      ref={el}
      stripedAnimationDuration={stripedAnimationDuration}
      transitionDuration={transitionDuration}
      transitionTimingFunction={transitionTimingFunction}
    >
      {PercentageEl}
      <Bar style={{ width: `${percentage.value}%` }}>{!isNested && PercentageEl}</Bar>
    </ProgressBarElement>
  )
}

export default ProgressBar
