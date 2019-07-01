import React from 'react';
import {platform, IOS} from "@vkontakte/vkui";

import pic from '../../assets/image/Rectangle 1276.png';
import brandLogo from '../../assets/image/adidas.png';

import './ProductCardSmall.css';
import ProductSizeChartView from "../product/productSizeChartView/ProductSizeChartView";
import ProductPriceView from "../product/productPriceView/ProductPriceView";
import ProductBrandView from "../product/productBrandView/ProductBrandView";
import ProductCountShopView from "../product/productCountShopView/ProductCountShopView";
import Sticker from "../Sticker/Sticker";

const osname = platform();

const ProductCardSmall = ({func, goTo, formSticker, nameSticker}) => {
  return (
    <div onClick={func}
         data-to={goTo}
         className='product-card-small_wrap'>
      <div className='product-card-small-sticker_wrap'>
        <Sticker form={formSticker} icon={nameSticker} />
      </div>
      <div className='product-card-small-pic_wrap'>
        <img className='product-card-small-pic'
             src={pic}
             alt='pic'/>
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
