import React from 'react'
import style from './NotFoundPage.module.scss'
import notfoundIcon from 'shared/assets/notfound.jpg'

export const NotFoundPage: React.FC = () => {
  return (
        <div className={style.not_found}>
            Not Found
            <img src={notfoundIcon}/>
        </div>
  )
}
