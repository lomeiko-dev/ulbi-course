import React from 'react'
import style from './PageLoader.module.scss'
import { Loader } from 'shared/ui/loader/Loader.tsx'

export const PageLoader: React.FC = () => {
  return (
        <div className={style.page_loader}>
            <Loader/>
        </div>
  )
}
