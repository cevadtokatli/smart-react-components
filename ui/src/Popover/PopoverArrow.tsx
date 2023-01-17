import React from 'react'
import styled from 'styled-components'
import { Position } from '../types'

export default styled.svg.attrs({
  children: (
    <>
      <path d="M251.8,371.6c-17.4,5.9-37.2,2.6-50.4-8L16.3,215.3v-0.1c-18.1-14.5-18.1-38.1,0-52.6L201.4,14.2 c13.3-10.7,33.1-13.8,50.4-8" />
      <path d="M371,0c5.9,17.4,2.6,37.2-8,50.4L214.7,235.5h-0.1c-14.5,18.1-38.1,18.1-52.6,0L13.6,50.4 C2.9,37.1-0.2,17.3,5.6,0" />
    </>
  ),
})`
  position: absolute;
  stroke-width: 20px;

  &[data-src-position="${Position.LEFT}"],
  &[data-src-position="${Position.RIGHT}"] {
    height: 15px;
    width: 10px;

    path:last-child {
      display: none;
    }
  }

  &[data-src-position="${Position.TOP}"],
  &[data-src-position="${Position.BOTTOM}"] {
    height: 10px;
    width: 15px;

    path:first-child {
      display: none;
    }
  }

  &[data-src-position="${Position.LEFT}"],
  &[data-src-position="${Position.BOTTOM}"] {
    transform: rotate(180deg);
  }
`
