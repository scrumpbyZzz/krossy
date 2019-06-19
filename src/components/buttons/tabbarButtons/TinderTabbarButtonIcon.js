import React from 'react';
import krossGrey from '../../../assets/icon/kross-grey.svg';
import krossBlack from '../../../assets/icon/kross-dark.svg';
import './TabbarButtonIcon.css';


const TinderTabbarButtonIcon = ({active}) => {
  return (
    <img className='tabbar-button_icon tabbar-button_icon_kross'
         src={active ? krossBlack : krossGrey}
         alt='icon' />
  )
};

export default TinderTabbarButtonIcon;
