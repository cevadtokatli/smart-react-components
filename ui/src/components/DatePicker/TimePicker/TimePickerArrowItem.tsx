import React from 'react'
import ArrowDownIcon from '../../../icons/ArrowDown'

interface Props {
  isUp: boolean
  onClick: () => void
}

const TimePickerArrowItem: React.FC<Props> = ({ isUp, onClick }) => (
  <div>
    <ArrowDownIcon
      {...isUp && {
        style: {
          transform: 'rotate(180deg)',
        },
      }}
      onClick={onClick}
    />
  </div>
)

export default TimePickerArrowItem
