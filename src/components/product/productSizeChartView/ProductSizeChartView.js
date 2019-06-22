import React from 'react';

import './ProductSizeChartView.css';
import IconDone from '../../icon/IconDone';

const ProductSizeChartView = (props) => {
  return (
    <div  className='product-size-block-wrap'>
      <IconDone />
      <span  className='product-size-block_content'>40</span>
      <span  className='product-size-block_content'>41</span>
      <span  className='product-size-block_content'>42</span>
    </div>
  )
};

export default ProductSizeChartView;

