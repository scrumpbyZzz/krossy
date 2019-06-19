import React from 'react';
import './ProductColorView.css';

const ProductColorView = ({color}) => {
  let divStyle = {
    backgroundColor: `${color}`
  };

  return (
    <div style={divStyle}
         className='product-color-view'>
    </div>
  )
};

export default ProductColorView;
