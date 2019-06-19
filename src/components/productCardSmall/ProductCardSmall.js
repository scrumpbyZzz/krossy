import React from 'react';
import {platform, IOS} from "@vkontakte/vkui";

import pic from '../../assets/image/Rectangle 1276.png';
import brandLogo from '../../assets/image/adidas.png';
import done from '../../assets/icon/done.svg';

import './ProductCardSmall.css';
import ProductSizeChartView from "../product/productSizeChartView/ProductSizeChartView";
import ProductPriceView from "../product/productPriceView/ProductPriceView";
import IconTrend from "../icon/IconTrend";
const osname = platform();

const ProductCardSmall = ({func, goTo}) => {

  return (
    <div onClick={func}
         data-to={goTo}
         className='product-card-small_wrap'>
      <div className='product-card-small-pic_wrap'>
        <img className='product-card-small-pic'
             src={pic}
             alt='pic'/>
        <div className='product-card-small-sticker_wrap'>
          <IconTrend />
        </div>
      </div>
      <div className='product-card-small-brand-logo_wrap'>
        <img className='product-card-small-brand-logo'
             src={brandLogo}
             alt='logo'/>
        <div className='product-card-small-brand-name'>
          ADIDAS AIR HUARACHE
        </div>
      </div>
      <div className='product-card-small-price_wrap'>
        <ProductPriceView />
      </div>
      <div className='product-card-small_footer'>
        <ProductSizeChartView />
        <span className='product-card-small_count-shop'>3 магазина</span>
      </div>
    </div>
  )
};

export default ProductCardSmall;
