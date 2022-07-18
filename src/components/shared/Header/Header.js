import React from 'react';
import GlobalSVGselector from '../../../assets/icons/global/GlobalSVGselector'
import Select from 'react-select';
import s from './Header.module.scss';




export default function Header() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  



  return (
    <header className={s.header}>
      {/* left part of header */}
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSVGselector id="header-logo"/>
        </div>
        <div className={s.title}>weather</div>
      </div>
      {/* rightpart of header */}
      <div className={s.wrapper}>
        <div className={s.toggle_view}> </div>
          <GlobalSVGselector id= "toggle-view" />
          <Select options={options} />
      </div>
    </header>
  )
}