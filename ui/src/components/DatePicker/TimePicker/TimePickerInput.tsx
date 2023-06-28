import React from 'react'

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDecrease: () => void
  onIncrease: () => void
  value: string
}

const TimePickerInput: React.FC<Props> = ({ onChange, onDecrease, onIncrease, value }) => {
  const ref = React.useRef<HTMLInputElement>(null)

  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    const delta = ((e.deltaY || -(e as any).wheelDelta || e.detail) >> 10) || 1
    const isUp = delta > 0

    if (isUp) {
      onIncrease()
    } else {
      onDecrease()
    }
  }

  React.useEffect(() => {
    ref.current.value = value
  }, [value])

  return (
    <div>
      <input
        defaultValue={value}
        ref={ref}
        onBlur={onChange}
        onWheel={handleWheel}
        spellCheck={false}
      />
    </div>
  )
}

export default TimePickerInput
