import React from 'react';
import sqGrey from '../../../assets/icon/sq-grey.svg';
import sqBlack from '../../../assets/icon/sq-dark.svg';
import './TabbarButtonIcon.css';


const HomeTabbarButtonIcon = ({active}) => {
  return (
    <img className='tabbar-button_icon'
         src={active ? sqBlack : sqGrey}
         alt='icon' />
  )
};

export default HomeTabbarButtonIcon;
