import React from 'react';
import {Panel, Gallery, platform, IOS, HeaderButton, PanelHeader} from '@vkontakte/vkui';
import Header from '../../components/header/Header';
import './ProductCardPage.css';
import pic from '../../assets/image/Rectangle 1297@2x.png';

import RoundSizeButton from '../../components/buttons/roundSizeButton/RoundSizeButton';
import RectangleButton from '../../components/buttons/rectangleButton/RectangleButton';
import ProductColorView from '../../components/product/productColorView/ProductColorView';
import ProductSizeChartView from "../../components/product/productSizeChartView/ProductSizeChartView";
import ProductPriceView from "../../components/product/productPriceView/ProductPriceView";
import IconNotification from '../../components/icon/IconNotification';
import IconHeartPink from '../../components/icon/IconHeartPink';
import IconQuestion from '../../components/icon/IconQuestion';
import IconChevronDown from '../../components/icon/IconChevronDown';


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
              <RoundSizeButton iconSvg={<IconHeartPink />} border='none'/>
              <RoundSizeButton iconSvg={<IconNotification/>} border='none'/>
              <RectangleButton iconSvg={<IconQuestion/>}
                               title='Поделиться'/>
            </div>
          </div>
          <div className='product-card-select_wrap'>
            <div style={productCardShare}
                 className='product-card-select_wrap-width'>
              <span className='product-card-select_count'>
                купить в <span className='product-card-select_count_color'>3</span> магазинах
              </span>
              <div className='product-card-select-icon_wrap'>
                <IconChevronDown currentColor='#fff'/>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    )
  }
};

export default ProductCardPage;
