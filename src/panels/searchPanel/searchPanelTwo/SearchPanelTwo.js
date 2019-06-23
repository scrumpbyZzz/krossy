import React from 'react';
import './SearchPanelTwo.css';
import {Panel, Div} from '@vkontakte/vkui';
import Header from '../../../components/header/Header';
import ProductCardSmall from '../../../components/productCardSmall/ProductCardSmall';

const SearchPnelTwo = ({id, goPanel}) => {
  return (
    <Panel id={id}
           className='search-panel-two'>
      <Header func={goPanel}
              goTo='search-1'/>
      <Div className='search-panel-two_wrap'>
        <ProductCardSmall formSticker='round' nameSticker='star'/>
        <ProductCardSmall formSticker='round' nameSticker='tinder'/>
        <ProductCardSmall formSticker='round' nameSticker='star'/>
        <ProductCardSmall formSticker='round' nameSticker='tinder'/>
        <ProductCardSmall formSticker='round' nameSticker='tinder'/>
        <ProductCardSmall formSticker='round' nameSticker='like'/>
      </Div>
    </Panel>
  )
};

export default SearchPnelTwo;
