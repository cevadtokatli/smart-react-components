import LengthAttributes from '../types/theme/length'

const lengthAttributes: LengthAttributes = {
  0: '0',
  1: '.25rem',
  2: '.5rem',
  3: '1rem',
  4: '2rem',
  5: '3rem',

  breadcrumb: {
    padding: {
      x: '.6rem',
      y: '.475rem',
    },
  },
  breakpoint: {
    small: 576,
    medium: 768,
    large: 992,
    xlarge: 1200,
  },
  grid: {
    containerWidth: {
      small: 540,
      medium: 720,
      large: 960,
      xlarge: 1140,
    },
  },
  overlay: {
    space: '1.75rem',
  },
  pagination: {
    fixedSize: '32px',
    margin: {
      x: '.2525rem',
      y: '.2525rem',
    },
    padding: {
      x: '.65rem',
      y: '.4rem',
    },
  },
  table: {
    border: '1px',
    headBorder: '2px',
  },
}

export default lengthAttributes
