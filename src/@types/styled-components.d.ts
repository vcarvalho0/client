import 'styled-components'
import Theme from '../styles/theme'

type Theme = typeof Theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
