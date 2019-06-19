import React from 'react';
import './Advertising.css';
import {platform, IOS} from "@vkontakte/vkui";
import pic from '../../assets/image/Rectangle 1384@2x.png';
import brandLogo from '../../assets/image/asics-seeklogo.com.svg';
import done from '../../assets/icon/done.svg';
import arrowWhite from '../../assets/icon/arrow-right-white.svg';
import RoundSizeButton from '../buttons/roundSizeButton/RoundSizeButton';
import ProductSizeChartView from "../product/productSizeChartView/ProductSizeChartView";
import ProductPriceView from "../product/productPriceView/ProductPriceView";

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
        <span className='advertising-brand-logo_wrap'>
          <img src={brandLogo} alt='alt'/>
        </span>
          <span className='advertising-product-name'>
          ASICS GEL-ROCKET 8 GREEN SUPER
        </span>
          <div className='advertising-product-price_wrap'>
            <ProductPriceView/>
          </div>
          <div className='advertising-product-footer'>
            <ProductSizeChartView  />
            <span className='advertising-product_count-shop'>3 магазина</span>

          </div>
        </div>
        <div className='advertising-product-footer-button-wrap'>
          <RoundSizeButton icon={arrowWhite}
                           imgWidth='12'
                           border='none'
                           width='30'
                           height='30'
                           backgroundColor='#4986CC'
                           func={func}
                           goTo={goTo}/>
        </div>

      </div>
    </div>
  )
};

export default Advertising;
