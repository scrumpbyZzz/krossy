import React from 'react';
import './ProductPriceView.css';

const ProductPriceView = ({price, oldPrice, discount}) => {
  return (
    <div className='product-price_wrap'>
      <span className='product-price_old'>
        {oldPrice}
        </span>
      <span className='product-price_new'>
        {price}
        </span>
      <span className='product-price_currency'>
          руб
        </span>
      <span className='product-price_discount'>
          -{discount}%
        </span>
    </div>
  )
};

export default ProductPriceView;
