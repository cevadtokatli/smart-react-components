import Div from '@smart-react-components/core/Element/Div'
import { ContentElement } from '@smart-react-components/core/types'
import React from 'react'

export interface Props {
  children: ContentElement
}

const DropdownCategory: React.FC<Props> = ({ children }) => (
  <Div fontWeight="$fontWeight.dropdownCategory">
    {children}
  </Div>
)

export default DropdownCategory
