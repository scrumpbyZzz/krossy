import React from 'react';
import {Panel, Gallery, platform, IOS, HeaderButton, PanelHeader} from '@vkontakte/vkui';
import Header from '../../components/header/Header';
import './ProductCardPage.css';
import pic from '../../assets/image/Rectangle 1297@2x.png';
import done from '../../assets/icon/done.svg';
import RoundSizeButton from '../../components/buttons/roundSizeButton/RoundSizeButton';
import RectangleButton from '../../components/buttons/rectangleButton/RectangleButton';
import chevronDown from '../../assets/icon/chevron-down-white.svg';

import ProductColorView from '../../components/product/productColorView/ProductColorView';
import heartPink from '../../assets/icon/heart-pink.svg';
import ringGrey from '../../assets/icon/ring-grey.svg';
import messageWhite from '../../assets/icon/message-white.svg';
import ProductSizeChartView from "../../components/product/productSizeChartView/ProductSizeChartView";
import ProductPriceView from "../../components/product/productPriceView/ProductPriceView";
import HeaderButtonBackIOS from "../../components/icon/IconChevronIOSBack";
import HeaderButtonBackAndroid from "../../components/icon/IconArrowAndroisBack";
import HeaderButtonMore from "../../components/buttons/headerButtonMore/HeaderButtonMore";
import HeaderButtonCancel from "../../components/buttons/headerButtonCancel/HeaderButtonCancel";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";

const osname = platform();

let productCardShare = {
  width: `${osname === IOS ? '327' : '312'}px`
};

let marginPruductPage = {
  marginLeft: `${osname === IOS ? '24' : '40'}px`
};

class ProductCardPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0
    }
  }

  render() {
    let heightStyle = osname === IOS ? 236 : 220;
    return (
      <Panel id={this.props.id}>
        <Header func={this.props.go} goTo='homePage'/>
        <div className='product-card_wrap'>
          <div className='product-card-image_wrap'>
            <Gallery slideIndex={this.state.slideIndex}
                     bullets='dark'
                     style={{height: heightStyle}}>
              <img src={pic}
                   alt='pic'/>
              <img src={pic}
                   alt='pic'/>
              <img src={pic}
                   alt='pic'/>
            </Gallery>
          </div>
          <div style={marginPruductPage}
               className='product-card-name'>
              <span className='product-card-name_brand'>
                Nike
              </span>
            <span className='product-card-name_product'>AIR HUARACHE CITY SNEAKER</span>
          </div>
          <div style={marginPruductPage}
               className='product-card_attribute'>
            <div className='product-card_attribute-color'>
              <ProductColorView color='#86DEE8'/>
              <ProductColorView color='#FE389B'/>
              <ProductColorView color='#353535'/>
            </div>
            <div className='product-card_attribute-size'>
              <ProductSizeChartView/>
            </div>
            <div className='product-card_attribute-sex'>
              Мужской
            </div>
          </div>
          <div style={marginPruductPage}
               className='product-card-price_wrap'>
            <ProductPriceView/>
          </div>
          <div style={marginPruductPage}
               className='product-card-share_wrap'>
            <div className='product-card-share_wrap-btn'
                 style={productCardShare}>
              <RoundSizeButton icon={heartPink} border='none'/>
              <RoundSizeButton icon={ringGrey} border='none'/>
              <RectangleButton icon={messageWhite}
                               title='поделиться'/>
            </div>
          </div>
          <div className='product-card-select_wrap'>
            <div style={productCardShare}
                 className='product-card-select_wrap-width'>
              <span className='product-card-select_count'>
                купить в <span className='product-card-select_count_color'>3</span> магазинах
              </span>
              <div className='product-card-select-icon_wrap'>
                <img src={chevronDown}
                     alt='chevron'/>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    )
  }
};

export default ProductCardPage;
