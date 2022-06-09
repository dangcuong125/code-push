import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      100: '#3D9BE0',
      200: '#216BCD',
      300: '#0E3C9E',
    },
    neutral: {
      50: '#E6E6E6',
      100: '#CCCCCC',
      200: '#B3B3B3',
      300: '#999999',
      400: '#808080',
      500: '#666666',
      600: '#4D4D4D',
      700: '#333333',
      800: '#1A1A1A',
    },
    secondary: {
      100: '#ECF7FB',
      200: '#D4A418',
    },
    warning: '#FFC107',
    success: '#28A745',
    error: '#DC3545',
    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
})
