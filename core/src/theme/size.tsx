import SizeAttributes from '../types/theme/size'

const sizeAttributes: SizeAttributes = {
  loading: {
    small: '10px',
    medium: '20px',
    large: '30px',
  },
  popover: {
    small: {
      fontSize: '.875rem',
      headerFontSize: '1rem',
      headerPadding: {
        x: '.5rem',
        y: '.4rem',
      },
      padding: {
        x: '.5rem',
        y: '.25rem',
      },
    },
    medium: {
      fontSize: '.875rem',
      headerFontSize: '1rem',
      headerPadding: {
        x: '.75rem',
        y: '.5rem',
      },
      padding: {
        x: '.8rem',
        y: '.7rem',
      },
    },
    large: {
      fontSize: '1rem',
      headerFontSize: '1.15rem',
      headerPadding: {
        x: '1.1rem',
        y: '1rem',
      },
      padding: {
        x: '1rem',
        y: '.75rem',
      },
    },
  },
}

export default sizeAttributes
