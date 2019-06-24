import React from 'react';
import {Panel, Gallery, platform, IOS, Div} from '@vkontakte/vkui';
import Header from '../../components/header/Header';
import './ProductCardPanel.css';
import pic from '../../assets/image/Rectangle 1297@2x.png';

import RoundSizeButton from '../../components/buttons/roundSizeButton/RoundSizeButton';
import RectangleButton from '../../components/buttons/rectangleButton/RectangleButton';
import ProductColorView from '../../components/product/productColorView/ProductColorView';
import ProductSizeChartView from "../../components/product/productSizeChartView/ProductSizeChartView";
import ProductPriceView from "../../components/product/productPriceView/ProductPriceView";
import IconNotification from '../../components/icon/IconNotification';
import IconHeartPink from '../../components/icon/IconHeartPink';
import IconQuestion from '../../components/icon/IconQuestion';
import ProductCardLikeBrand from '../../components/productCardLikeBrand/ProductCardLikeBrand';
import ShopList from "../../components/shopList/ShopList";
import ProductSelectShop from "../../components/product/productSelectShop/ProductSelectShop";

class ProductCardPanel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      isOpenShopList: false
    }
  }

  handleOpenSelect = () => {
    this.setState({isOpenShopList: !this.state.isOpenShopList})
  };

  render() {
    const osname = platform();
    const fontStyleAndroid = {
      fontFamily: 'Roboto, sans-serif',
    };

    const fontStyleIOS = {
      fontFamily: 'SF UI Text, sans-serif',
    };

    let heightStyle = osname === IOS ? 236 : 220;
    return (
      <Panel id={this.props.id}
             style={osname === IOS ? fontStyleIOS : fontStyleAndroid}>
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
          <Div className='product-card-content'>
            <div className='product-card-name'>
              <span className='product-card-name_brand'>
                Nike
              </span>
              <span className='product-card-name_product'>AIR HUARACHE CITY SNEAKER</span>
            </div>
            <div className='product-card_attribute'>
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
            <div className='product-card-price_wrap'>
              <ProductPriceView/>
            </div>
            <div className='product-card-share_wrap'>
              <div className='product-card-share_wrap-btn'>
                <RoundSizeButton iconSvg={<IconHeartPink/>} border='none'/>
                <RoundSizeButton iconSvg={<IconNotification/>} border='none'/>
                <RectangleButton iconSvg={<IconQuestion/>} title='Поделиться'/>
              </div>
            </div>
          </Div>
          <ProductSelectShop func={this.handleOpenSelect}
                             isOpen={this.state.isOpenShopList}/>
          {this.state.isOpenShopList ? <ShopList/> : null}
          <ProductCardLikeBrand/>
        </div>
      </Panel>
    )
  }
};

export default ProductCardPanel;
