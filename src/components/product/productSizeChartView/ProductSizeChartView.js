import React from 'react';

import './ProductSizeChartView.css';
import IconDone from '../../icon/IconDone';

const ProductSizeChartView = (props) => {
  return (
    <div className='product-size-block-wrap'>
      <div className='product-size-block_icon'><IconDone/></div>
      <div className='product-size-block_content'>40</div>
      <div className='product-size-block_content'>41</div>
      <div className='product-size-block_content'>42</div>
    </div>
  )
};

export default ProductSizeChartView;

