import React  from 'react';
import './FavoritesPage.css';
import {Panel, Div} from "@vkontakte/vkui";
import Header from "../../components/header/Header";
import ProductCardSmall from "../../components/productCardSmall/ProductCardSmall";

const FavoritesPage = ({id}) => {
  return (
    <Panel id={id} className='favorites-page'>
      <Header />
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

export default FavoritesPage;
