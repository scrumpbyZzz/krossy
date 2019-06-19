import React from 'react';
import favorGrey from '../../../assets/icon/heart-grey.svg';
import favorBlack from '../../../assets/icon/heart-dark.svg';
import './TabbarButtonIcon.css';


const FavoritesTabbarButtonIcon = ({active}) => {
  return (
    <img className='tabbar-button_icon'
         src={active ? favorBlack : favorGrey}
         alt='icon' />
  )
};

export default FavoritesTabbarButtonIcon;
