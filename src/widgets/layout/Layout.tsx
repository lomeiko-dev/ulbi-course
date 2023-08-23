import React, { type ReactNode, Suspense } from 'react'
import style from './Layout.module.scss'
import { Header } from './header'
import { SideBar } from './sidebar'

interface ILayout {
  children: ReactNode
  className: string
}

export const Layout: React.FC<ILayout> = ({ children, className }) => {
  return (
        <div className={className}>
            {/* for i18n */}
            <Suspense fallback="Translate...">
                <Header/>
                <div className={style.content_page}>
                    <SideBar/>
                    {children}
                </div>
            </Suspense>
        </div>
  )
}
