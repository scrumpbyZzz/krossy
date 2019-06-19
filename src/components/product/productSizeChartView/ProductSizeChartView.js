import React from 'react';
import done from "../../../assets/icon/done.svg";
import './ProductSizeChartView.css';

const ProductSizeChartView = (props) => {
  return (
    <div  className='product-size-block-wrap'>
      <img className='product-size-block_img' src={done} alt='done'/>
      <span  className='product-size-block_content'>40</span>
      <span  className='product-size-block_content'>41</span>
      <span  className='product-size-block_content'>42</span>
    </div>
  )
};

export default ProductSizeChartView;

