import React from 'react';
import './ProductColorView.css';

const ProductColorView = ({color}) => {

  let selectedColor;
  switch (color) {
    case "черный":
      selectedColor = "black";
      break;
    case "белый":
      selectedColor = "white";
      break;
    case "синий":
      selectedColor = "blue";
      break;
    default:
      selectedColor = "transparent"
  }

  let divStyle = {
    backgroundColor: `${selectedColor}`
  };

  return (
    <div style={divStyle}
         className='product-color-view'>
    </div>
  )
};

export default ProductColorView;
