import React from 'react';
import searchGrey from '../../../assets/icon/search-grey.svg';
import searchBlack from '../../../assets/icon/search-dark.svg';
import './TabbarButtonIcon.css';


const SearchTabbarButtonIcon = ({active}) => {
  return (
    <img className='tabbar-button_icon'
         src={active ? searchBlack : searchGrey}
         alt='icon' />
  )
};

export default SearchTabbarButtonIcon;
