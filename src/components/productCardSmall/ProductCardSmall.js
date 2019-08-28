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

class ProductCardSmall extends React.PureComponent {
  constructor(props){
    super(props)
    this.imageHeight = React.createRef()
  }


  componentDidMount() {
    console.log(this.imageHeight.current.offsetHeight)
  }

  render() {
    const {func, goTo, formSticker, nameSticker, data} = this.props;
    const image = data.pictures[0];
    return (
      <div onClick={func}
           data-to={goTo}
           className='product-card-small_wrap'>
        <div className='product-card-small-sticker_wrap'>
          <Sticker form={formSticker}
                   icon={nameSticker} />
        </div>
        <div className='product-card-small-pic_wrap'>
          <img ref={this.imageHeight}
               className='product-card-small-pic'
               src={image}
               alt='pic'/>
        </div>
        <div className='product-card-small-brand_wrap'>
          <ProductBrandView
            name={data.name}
            model={data.model}
            logo={brandLogo}/>
        </div>
        <div className='product-card-small-price_wrap'>
          <ProductPriceView price={data.price}
                            oldPrice={data.oldPrice}
                            discount={data.discount}/>
        </div>
        <div className='product-card-small_footer'>
          <ProductSizeChartView sizes={data.sizes}/>
          <ProductCountShopView shops={data.shops}/>
        </div>
      </div>


    )
  }
};

export default ProductCardSmall;
