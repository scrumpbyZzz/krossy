import React from 'react';
import './Advertising.css';
import {platform, IOS} from "@vkontakte/vkui";
import pic from '../../assets/image/Rectangle 1384@2x.png';
import brandLogo from '../../assets/image/asics-seeklogo.com.svg';

import arrowWhite from '../../assets/icon/arrow-right-white.svg';
import RoundSizeButton from '../buttons/roundSizeButton/RoundSizeButton';
import ProductSizeChartView from "../product/productSizeChartView/ProductSizeChartView";
import ProductPriceView from "../product/productPriceView/ProductPriceView";
import ProductBrandView from "../product/productBrandView/ProductBrandView";
import ProductCountShopView from "../product/prodoctCountShopView/ProductCountShopView";

const osname = platform();

const Advertising = ({func, goTo}) => {

  let styleDiv = {
    width: `${osname === IOS ? '343' : '328'}px`
  };

  return (
    <div style={styleDiv} className='advertising_wrap'>
      <div className='advertising-image_wrap'>
        <img className='advertising-image'
             src={pic}
             alt='reklama'/>
        <span className='advertising-sticker'>Реклама</span>
      </div>
      <div className='advertising-product-footer_wrap'>
        <div className='advertising-info'>
          <ProductBrandView logo={brandLogo}/>
          <div className='advertising-product-price_wrap'>
            <ProductPriceView/>
          </div>
          <div className='advertising-product-footer'>
            <ProductSizeChartView/>
            <ProductCountShopView/>
          </div>
        </div>
        <div className='advertising-product-footer-button-wrap'>
          <RoundSizeButton icon={arrowWhite}
                           backgroundColor='#4986CC'
                           func={func}
                           goTo={goTo}/>
        </div>

      </div>
    </div>
  )
};

export default Advertising;
