import { ProgressBar } from '@smart-react-components/ui'
import React from 'react'

export const DisplayValue = () => {
  const [value, setValue] = React.useState(() => 50)
  const [value2, setValue2] = React.useState(() => 50)

  return (
    <>
      <input type="number" min={0} max={100} value={value} onChange={e => setValue(Number(e.target.value))} /> <ProgressBar value={value} />
      <input type="number" min={0} max={100} value={value2} onChange={e => setValue2(Number(e.target.value))} /> <ProgressBar value={value2} displayValue />
    </>
  )
}

export const TotalValue = () => {
  const [value, setValue] = React.useState(() => 100)
  const [totalValue, setTotalValue] = React.useState(() => 1000)

  return (
    <>
      <input type="number" min={0} max={100} value={value} onChange={e => setValue(Number(e.target.value))} />
      <input type="number" min={0} max={100} value={totalValue} onChange={e => setTotalValue(Number(e.target.value))} />
      <ProgressBar value={value} totalValue={totalValue} displayValue suffix='' />
    </>
  )
}

export const Palette = () => {
  const [value, setValue] = React.useState(() => 50)
  const [value2, setValue2] = React.useState(() => 50)

  return (
    <>
      <input type="number" min={0} max={100} value={value} onChange={e => setValue(Number(e.target.value))} /> <ProgressBar value={value} palette="success" />
      <input type="number" min={0} max={100} value={value2} onChange={e => setValue2(Number(e.target.value))} /> <ProgressBar value={value2} palette="warning" />
    </>
  )
}

export const IsFilled = () => {
  const [value, setValue] = React.useState(() => 50)
  const [value2, setValue2] = React.useState(() => 50)

  return (
    <>
      <input type="number" min={0} max={100} value={value} onChange={e => setValue(Number(e.target.value))} /> <ProgressBar value={value} palette="danger" isFilled />
      <input type="number" min={0} max={100} value={value2} onChange={e => setValue2(Number(e.target.value))} /> <ProgressBar value={value2} palette="danger" isFilled displayValue />
    </>
  )
}


export const IsStriped = () => {
  const [value, setValue] = React.useState(() => 50)
  const [value2, setValue2] = React.useState(() => 50)

  return (
    <>
      <input type="number" min={0} max={100} value={value} onChange={e => setValue(Number(e.target.value))} /> <ProgressBar value={value} palette="dark" isStriped isFilled displayValue />
      <input type="number" min={0} max={100} value={value2} onChange={e => setValue2(Number(e.target.value))} /> <ProgressBar value={value2} palette="dark" isStriped hasStripedAnimation={false} isFilled displayValue />
    </>
  )
}
