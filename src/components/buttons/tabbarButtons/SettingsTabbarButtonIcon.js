import React from 'react';
import settGrey from '../../../assets/icon/sett-grey.svg';
import settBlack from '../../../assets/icon/sett-dark.svg';
import './TabbarButtonIcon.css';


const SettingsTabbarButtonIcon = ({active}) => {
  return (
    <img className='tabbar-button_icon'
         src={active ? settBlack : settGrey}
         alt='icon' />
  )
};

export default SettingsTabbarButtonIcon;
