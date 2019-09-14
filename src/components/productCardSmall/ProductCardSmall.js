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
import ApiService from "../../api/krossy-api";
import {connect as reduxConnect} from "react-redux";
import {getData, isChangeBoolean} from "../../reducers/user";
import {getColorsSelector, getPictures, getSizeSelector} from "../../reducers/selectors";

const osname = platform();

class ProductCardSmall extends React.PureComponent {

  Service = new ApiService();

  constructor(props){
    super(props);
    this.imageHeight = React.createRef()
  }

  goProduct = async (e) => {
    const {data} = this.props;
    const goTo = e.currentTarget.dataset.to;
    const target = +e.currentTarget.dataset.goodId;
    this.props.isLoad(true);
    await this.Service.getModels(target, data.userInfo.id)
      .then(res => {
        if (res.ok) {
          this.props.models(res.result);
          const colors = getColorsSelector(res.result);
          const sizes = getSizeSelector(res.result);
          const pictures = getPictures(res.result);

          const initProduct = {
            sizes: sizes,
            pictures:pictures
          };

          this.props.prod(initProduct);
          this.props.colors(colors);
          this.props.sizes(sizes);
          this.props.isLoad(false);
        }
      });

    await this.props.func(goTo)
  };

  render() {
    const { goTo, productId, formSticker, nameSticker, product } = this.props;

    return (
      <div onClick={this.goProduct}
           data-good-id={productId}
           data-to={goTo}
           className='product-card-small_wrap'>
        <div className='product-card-small-sticker_wrap'>
          <Sticker form={formSticker}
                   icon={nameSticker} />
        </div>
        <div className='product-card-small-pic_wrap'>
          { product ?
            <img ref={this.imageHeight}
                className='product-card-small-pic'
                src={product.pictures[0]}
                alt='pic'/> : null
          }
        </div>
        <div className='product-card-small-brand_wrap'>
          { product ?
            <ProductBrandView
            name={product.name}
            model={product.model}
            logo={brandLogo}/> : null
          }
        </div>
        <div className='product-card-small-price_wrap'>
          { product ?
            <ProductPriceView price={product.price}
                             oldPrice={product.oldPrice}
                             discount={product.discount}/> : null
          }
        </div>
        <div className='product-card-small_footer'>
          {product ? <ProductSizeChartView sizes={product.sizes}/> : null}
          {product ? <ProductCountShopView shops={product.shops}/> : null}
        </div>
      </div>
    )
  }
};

export default reduxConnect(
  state => ({
    data: state.user
  }),
  dispatch => ({
    isLoad: bool => dispatch(isChangeBoolean('isLoadModels', bool)),
    models: data => dispatch(getData('models', data)),
    colors: data => dispatch(getData('modelColors', data)),
    sizes: data => dispatch(getData('modelSizes', data)),
    prod: data => dispatch(getData('productCard', data))
  })
)(ProductCardSmall);
