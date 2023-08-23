import React, { type ReactNode, useMemo, useState } from 'react'
import { themeContext } from 'shared/lib/contexts'
import { LOCAL_STORAGE_THEME_KEY } from 'shared/config/local-storage-keys'
import { enumTheme } from 'shared/config/themes'

const initialState = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? enumTheme.light

interface IThemeProvider {
  children: ReactNode
}

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<enumTheme>(initialState as enumTheme)

  const memoProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
        <themeContext.Provider value={memoProps}>
            {children}
        </themeContext.Provider>
  )
}
