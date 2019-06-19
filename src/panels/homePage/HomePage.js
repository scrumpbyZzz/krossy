import React from 'react';
import {Panel, Div} from "@vkontakte/vkui";
import Header from "../../components/header/Header";
import ProductCardSmall from '../../components/productCardSmall/ProductCardSmall';
import './HomePage.css';

import Advertising from '../../components/advertising/Advertising';
import {platform, IOS} from "@vkontakte/vkui";

const osname = platform();

class HomePage extends React.Component {
  render() {

    return (
      <Panel  id={this.props.id}>
        <Header />
        <Div className='all-product-page_wrap'>
          <div className='all-product-page_content'>
            <ProductCardSmall func={this.props.go} goTo='productCard'/>
            <ProductCardSmall func={this.props.go} goTo='productCard'/>
            <Advertising func={this.props.go} goTo='productCard'/>
            <ProductCardSmall func={this.props.go} goTo='productCard'/>
            <ProductCardSmall func={this.props.go} goTo='productCard'/>
          </div>

        </Div>
      </Panel>
    )
  }
}

export default HomePage;
