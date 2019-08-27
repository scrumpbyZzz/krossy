import React from 'react';

import './ProductSizeChartView.css';
import IconDone from '../../icon/IconDone';

const ProductSizeChartView = ({sizes = []}) => {
  return (
    <div className='product-size-block-wrap'>
      <div className='product-size-block_icon'><IconDone/></div>

      {
        sizes.map(item => {
          return <div key={item}
                      className='product-size-block_content'>
            {item}
          </div>
        })
      }
    </div>
  )
};

export default ProductSizeChartView;

