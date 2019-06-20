import React from 'react';
import './TinderPage.css';

import {Panel, Div, platform, IOS} from "@vkontakte/vkui";
import Header from "../../components/header/Header";

import ProductCardTinder from "../../components/productCardTinder/ProductCardTinder";
import RectangleButton from "../../components/buttons/rectangleButton/RectangleButton";
import IconDislike from "../../components/icon/IconDislike";
import IconLike from "../../components/icon/IconLike";

const osname = platform();

const fontStyleAndroid = {
  fontFamily: 'Roboto, sans-serif',
};

const fontStyleIOS = {
  fontFamily: 'SF UI Text, sans-serif',
};


class TinderPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <Panel style={osname === IOS ? fontStyleIOS : fontStyleAndroid}
             id={this.props.id}
             theme='white'>
        <Header/>
        <Div className='tinder-page'>
          <ProductCardTinder/>
          <div className='tinder-page-button-wrap'>
            <div className='tinder-page-button_first'>
              <RectangleButton title='Не нравится' iconSvg={<IconDislike/>}/>
            </div>
            <div className='tinder-page-button_second'>
              <RectangleButton title='Нравится' iconSvg={<IconLike/>}/>
            </div>


          </div>
        </Div>
      </Panel>
    )
  }
}

export default TinderPage;
