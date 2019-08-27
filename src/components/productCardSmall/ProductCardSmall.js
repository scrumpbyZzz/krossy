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

const ProductCardSmall = ({func, goTo, formSticker, nameSticker, data}) => {
  // let pictures = "https://via.placeholder.com/156x118"

  return (

      <div onClick={func}
                  data-to={goTo}
                  className='product-card-small_wrap'>
      <div className='product-card-small-sticker_wrap'>
        <Sticker form={formSticker} icon={nameSticker} />
      </div>
      <div className='product-card-small-pic_wrap'>
        {data ? <img className='result'
                         src={data.pictures[0]}
                         alt='pic'/> : null}
      </div>
      <div className='product-card-small-brand_wrap'>
        {data ?
          <ProductBrandView
            name={data.name}
            model={data.model}
            logo={brandLogo}/> : null}
      </div>
      <div className='product-card-small-price_wrap'>
        {data ? <ProductPriceView price={data.price}
                                  oldPrice={data.oldPrice}
                                  discount={data.discount}/> : null}
      </div>
      <div className='product-card-small_footer'>
        {data ? <ProductSizeChartView sizes={data.sizes}/> : null}
        {data ? <ProductCountShopView shops={data.shops}/> : null}
      </div>
    </div>


  )
};

export default ProductCardSmall;
