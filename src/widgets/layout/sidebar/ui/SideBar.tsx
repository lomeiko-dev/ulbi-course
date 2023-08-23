import React from 'react'
import style from './SideBar.module.scss'
import { NavBarContent } from 'widgets/layout/navbar-content'

export const SideBar: React.FC = () => {
  return (
        <div className={style.bar}>
            <NavBarContent/>
        </div>
  )
}
