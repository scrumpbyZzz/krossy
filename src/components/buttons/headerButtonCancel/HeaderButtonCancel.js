import React from 'react';
import iconCross from '../../../assets/icon/iconCross.svg';
import {HeaderButton} from '@vkontakte/vkui';

const HeaderButtonCancel = () => {
  return(
    <HeaderButton className='header-right-button-block_position'
                  key='more'>
      <img className='header-right-button-icon'
           src={iconCross}/>
    </HeaderButton>
  )
};

export default HeaderButtonCancel;
