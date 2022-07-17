import React from 'react';

import s from './Header.module.scss';

export default function Header() {
  return (
    <header className={s.header}>Header
    
      <div className={s.wrapper}>
        <div className={s.logo}></div>
        <div className={s.title}>weather</div>
      </div>
      <div className={s.wrapper}>

      </div>
    </header>
  )
}