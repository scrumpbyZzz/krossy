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
    case "бежевый":
      selectedColor = "beige";
      break;
    case "бирюзовый":
      selectedColor = "turquoise";
      break;
    case "бордовый":
      selectedColor = "burgundy";
      break;
    case "голубой":
      selectedColor = "lightblue";
      break;
    case "желтый":
      selectedColor = "yellow";
      break;
    case "зеленый":
      selectedColor = "green";
      break;
    case "золотой":
      selectedColor = "gold";
      break;
    case "коралловый":
      selectedColor = "coral";
      break;
    case "коричневый":
      selectedColor = "brown";
      break;
    case "красный":
      selectedColor = "red";
      break;
    case "оранжевый":
      selectedColor = "orange";
      break;
    case "розовый":
      selectedColor = "pink";
      break;
    case "серый":
      selectedColor = "grey";
      break;
    case "разноцветный":
      selectedColor = "multi";
      break;
    default:
      selectedColor = "multi"
  }

  return (
    <div className={`product-color-view bg_${selectedColor}`}>
    </div>
  )
};

export default ProductColorView;
