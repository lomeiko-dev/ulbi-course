import style from './NavBar.module.scss'
import { Link } from 'react-router-dom'
import { pathRoute } from 'shared/config/path-routes'
import { useTranslation } from 'react-i18next'
import React from 'react'

export const NavBar: React.FC = () => {
  const { t } = useTranslation()
  return (
        <div className={style.bar}>
            <Link to={pathRoute.MAIN}>{t('linkMain')}</Link>
            <Link to={pathRoute.ABOUT}>{t('linkAbout')}</Link>
        </div>
  )
}
