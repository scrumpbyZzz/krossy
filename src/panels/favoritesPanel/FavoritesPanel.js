import React  from 'react';
import './FavoritesPanel.css';
import {Panel, Div} from "@vkontakte/vkui";
import Header from "../../components/header/Header";
import ProductCardSmall from "../../components/productCardSmall/ProductCardSmall";

const FavoritesPanel = ({id}) => {
  return (
    <Panel id={id} className='favorites-page'>
      <Header title='Избранное 15' asideShow={true}/>
      <Div className='favorites-page_wrap'>
        <ProductCardSmall formSticker='round' nameSticker='like'/>
        <ProductCardSmall formSticker='round' nameSticker='like'/>
        <ProductCardSmall formSticker='round' nameSticker='like'/>
        <ProductCardSmall formSticker='round' nameSticker='like'/>
        <ProductCardSmall formSticker='round' nameSticker='like'/>
        <ProductCardSmall formSticker='round' nameSticker='like'/>
      </Div>
    </Panel>
  )
};

export default FavoritesPanel;
