import React from 'react'
import style from './Header.module.scss'
import { NavBar } from '../../navbar'
import { ThemeSwitcher } from 'shared/ui/themeSwicher/ThemeSwitcher.tsx'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'shared/ui/langSwitcher/LangSwitcher.tsx'

export const Header: React.FC = () => {
  const { t } = useTranslation()
  return (
        <div className={style.header}>
            <h1>{t('title')}</h1>

            <NavBar/>

            <ThemeSwitcher/>
            <LangSwitcher/>
        </div>
  )
}
