import React from 'react';
import {Panel, Div, PullToRefresh} from "@vkontakte/vkui";
import ProductCardSmall from '../../components/productCardSmall/ProductCardSmall';
import './HomePanel.css';

import Advertising from '../../components/advertising/Advertising';
import {platform, IOS} from "@vkontakte/vkui";
import HeaderHome from "../../components/headerHome/HeaderHome";

const osname = platform();

class HomePanel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contextOpened: false,
      fetching: false,
      mode: 'all'
    };

    this.onRefresh = () => {
      this.setState({ fetching: true });

      setTimeout(
        () => {
          this.setState({fetching: false})
        } ,2000);
    }
  }

  toggleContext = () => {
    this.setState({contextOpened: !this.state.contextOpened});
  };

  select = (e) => {
    const currentMode = e.currentTarget.dataset.mode;
    this.setState({mode: currentMode});
    requestAnimationFrame(this.toggleContext);
  };

  render() {
    const {contextOpened, mode} = this.state;
    return (
      <Panel  id={this.props.id}>
        <HeaderHome toggleContext={this.toggleContext}
                    select={this.select}
                    contextOpened={contextOpened}
                    mode={mode} />
        <Div className='all-product-page_wrap'>
          <PullToRefresh onRefresh={this.onRefresh} isFetching={this.state.fetching}>
            <div className='all-product-page_content'>
              <ProductCardSmall func={this.props.go}
                                goTo='productCardPanel'
                                formSticker='round'
                                nameSticker='star'/>
              <ProductCardSmall func={this.props.go}
                                goTo='productCardPanel'
                                formSticker='round'
                                nameSticker='trend'/>
              <Advertising func={this.props.go} goTo='productCardPanel'/>
              <ProductCardSmall func={this.props.go}
                                goTo='productCardPanel'
                                formSticker='round'
                                nameSticker='star'/>
              <ProductCardSmall func={this.props.go}
                                goTo='productCardPanel'
                                formSticker='round'
                                nameSticker='like'/>
            </div>
          </PullToRefresh>
        </Div>
      </Panel>
    )
  }
}

export default HomePanel;
