import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      lightestColor: string
      mainColor: string
      darkestColor: string
      lightGray: string
      darkGray: string
      darkestGray: string
      blue: string
      dangerRed: string
    }

    spaces: {
      50: string
      100: string
      150: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
    }

    typo: {
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
    }
  }
}
