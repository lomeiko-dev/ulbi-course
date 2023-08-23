import React from 'react'
import style from './NavBarContent.module.scss'
import { Link } from 'react-router-dom'

import { pathRoute } from 'shared/config/path-routes'
import MediaIcon from 'shared/assets/icons/dirs/media.svg'
import DocumentationIcon from 'shared/assets/icons/dirs/documentation.svg'
import { useTranslation } from 'react-i18next'

export const NavBarContent: React.FC = () => {
  const { t } = useTranslation()
  return (
        <div className={style.bar}>
            <Link to={pathRoute.MEDIA}>
                <MediaIcon/> <
                span>{t('linkVideos')}</span>
            </Link>
            <Link to={pathRoute.DOCUMENTATION}>
                <DocumentationIcon/>
                <span>{t('linkDocumentation')}</span>
            </Link>
        </div>
  )
}
