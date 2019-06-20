import React from 'react';
import {platform, IOS} from "@vkontakte/vkui";

import pic from '../../assets/image/Rectangle 1276.png';
import brandLogo from '../../assets/image/adidas.png';

import './ProductCardSmall.css';
import ProductSizeChartView from "../product/productSizeChartView/ProductSizeChartView";
import ProductPriceView from "../product/productPriceView/ProductPriceView";
import IconTrend from "../icon/IconTrend";
import ProductBrandView from "../product/productBrandView/ProductBrandView";
import ProductCountShopView from "../product/prodoctCountShopView/ProductCountShopView";

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
          <IconTrend/>
        </div>
      </div>
      <div className='product-card-small-brand_wrap'>
        <ProductBrandView logo={brandLogo}/>
      </div>
      <div className='product-card-small-price_wrap'>
        <ProductPriceView/>
      </div>
      <div className='product-card-small_footer'>
        <ProductSizeChartView/>
        <ProductCountShopView/>
      </div>
    </div>
  )
};

export default ProductCardSmall;
