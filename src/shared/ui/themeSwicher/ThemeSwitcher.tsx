import React from 'react'
import { useTheme } from 'shared/lib/hooks'
import { enumTheme } from 'shared/config/themes'

import DarkIcon from 'shared/assets/icons/themes/theme-dark.svg'
import LightIcon from 'shared/assets/icons/themes/theme-light.svg'

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  return (
        <button onClick={toggleTheme}>
            {theme === enumTheme.dark ? <LightIcon/> : <DarkIcon/>}
        </button>
  )
}
