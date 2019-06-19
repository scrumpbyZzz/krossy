import React from 'react';
import './ProductPriceView.css';

const ProductPriceView = () => {
  return (
    <div className='product-price_wrap'>
      <span className='product-price_old'>
          4395
        </span>
      <span className='product-price_new'>
          3670
        </span>
      <span className='product-price_currency'>
          руб
        </span>
      <span className='product-price_discount'>
          -26%
        </span>
    </div>
  )
};

export default ProductPriceView;
