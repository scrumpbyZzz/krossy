import React from 'react';
import {Panel, Div, PanelHeaderContent} from "@vkontakte/vkui";
import Header from "../../components/header/Header";
import ProductCardSmall from '../../components/productCardSmall/ProductCardSmall';
import './HomePanel.css';

import Advertising from '../../components/advertising/Advertising';
import {platform, IOS} from "@vkontakte/vkui";

const osname = platform();

class HomePanel extends React.Component {
  render() {
    return (
      <Panel  id={this.props.id}>
        <Header title='Все кроссовки' asideShow={true} iconIOS={true} iconAndroid={false}/>
        <Div className='all-product-page_wrap'>
          <div className='all-product-page_content'>
            <ProductCardSmall func={this.props.go} goTo='productCardPanel'/>
            <ProductCardSmall func={this.props.go} goTo='productCardPanel'/>
            <Advertising func={this.props.go} goTo='productCardPanel'/>
            <ProductCardSmall func={this.props.go} goTo='productCardPanel'/>
            <ProductCardSmall func={this.props.go} goTo='productCardPanel'/>
          </div>
        </Div>
      </Panel>
    )
  }
}

export default HomePanel;
