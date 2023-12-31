import { createContext } from 'react'
import { enumTheme } from 'shared/config/themes'

interface IThemeContext {
  theme: enumTheme
  setTheme: (theme: enumTheme) => void
}
export const themeContext = createContext<IThemeContext>({
  theme: enumTheme.light,
  setTheme: () => {}
})
