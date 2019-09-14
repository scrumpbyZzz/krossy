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
import ProductCardNotification from "../../components/productCardNotification/ProductCardNotification";
import Sticker from "../../components/Sticker/Sticker";
import {connect as reduxConnect} from "react-redux";
import {getData, isChangeBoolean} from "../../reducers/user";
import {getModel} from "../../reducers/selectors";

class ProductCardPanel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      isOpenShopList: false,
      isOpenNotification: false
    }
  }

  handleOpenSelect = () => {
    this.setState({isOpenShopList: !this.state.isOpenShopList})
  };

  handleOpenNotificationModal = () => {
    this.setState({isOpenNotification: !this.state.isOpenNotification})
  };

  goBack = () => {
    this.props.go('homePanel');
  };

  onChangeColor = (e) => {
    const color = e.currentTarget.dataset.color;
    const { models } = this.props;
    const temp = getModel(models, color);
    const initProduct = {
      sizes: temp.sizes,
      pictures: temp.pic
    };
    this.props.product(initProduct);
  };

  render() {
    const { data, prod } = this.props;
    const osname = platform();
    const fontStyleAndroid = {
      fontFamily: 'Roboto, sans-serif',
      position: 'relative'
    };

    const fontStyleIOS = {
      fontFamily: 'SF UI Text, sans-serif',
    };

    const blurStyle = {
      filter: 'blur(9px)'
    };

    let heightStyle = osname === IOS ? 236 : 220;
    return (
      <Panel id={this.props.id}
             style={osname === IOS ? fontStyleIOS : fontStyleAndroid}>
        <Header func={this.goBack}
                iconIOS={true}
                iconAndroid={true}
                title={<Sticker form='rectangle' icon='trend'/>}/>

        {this.state.isOpenNotification ?
          <ProductCardNotification isOpen={this.handleOpenNotificationModal}/> : null}

        <div style={this.state.isOpenNotification ? blurStyle : null}
             className='product-card_wrap'>
          <div className='product-card-image_wrap'>
            <Gallery slideIndex={this.state.slideIndex}
                     bullets='dark'
                     >
              {
                prod.pictures.map((item, index) => {
                  return <img key={index} src={item}
                              alt='pic'/>
                })
              }
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
                {
                  data.modelColors.map((item, index) => {
                    return <ProductColorView action={this.onChangeColor} key={index} color={item}/>
                  })
                }
              </div>
              <div className='product-card_attribute-size'>

                <ProductSizeChartView sizes={prod.sizes}/>

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
                <RoundSizeButton iconSvg={<IconHeartPink/>} />
                <RoundSizeButton func={this.handleOpenNotificationModal}
                                 iconSvg={<IconNotification/>}/>
                <RectangleButton iconSvg={<IconQuestion/>}
                                 title='Поделиться'/>
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
}

export default reduxConnect(
  state => ({
    data: state.user,
    models: state.user.models,
    prod: state.user.productCard
  }),
  dispatch => ({
    product: data => dispatch(getData('productCard', data))
  })
)(ProductCardPanel);
