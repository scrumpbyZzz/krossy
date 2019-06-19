import React from 'react';
import iconDots from '../../../assets/icon/iconDots.svg';
import {HeaderButton} from '@vkontakte/vkui';

const HeaderButtonMore = () => {
  return (
    <HeaderButton className='header-right-button-block_position'
                  key='dots'>
      <img className='header-right-button-icon'
           src={iconDots}/>
    </HeaderButton>
  )
};

export default HeaderButtonMore;
