import React from 'react';
import {Panel, Div, PullToRefresh} from "@vkontakte/vkui";
import ProductCardSmall from '../../components/productCardSmall/ProductCardSmall';
import './HomePanel.css';

import Advertising from '../../components/advertising/Advertising';
import {platform, IOS} from "@vkontakte/vkui";
import HeaderHome from "../../components/headerHome/HeaderHome";
import {connect as reduxConnect} from "react-redux";
import {getUserInfo, onChangeGender, onChooseSizeBySize} from "../../reducers/user";

const osname = platform();

class HomePanel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contextOpened: false,
      fetching: false,
      mode: 'all',
      products:[]
    };

    this.onRefresh = () => {
      this.setState({ fetching: true });

      setTimeout(
        () => {
          this.setState({fetching: false})
        } ,2000);
    }
  }

  componentDidMount() {
    console.log(this.props)
    setTimeout(() => {
      this.setState({
        products: this.props.data.products
      })
    }, 1000)
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
    const {data} = this.props;

    return (
      <Panel  id={this.props.id}>
        <HeaderHome toggleContext={this.toggleContext}
                    select={this.select}
                    contextOpened={contextOpened}
                    mode={mode} />
        <Div className='all-product-page_wrap'>
          <PullToRefresh onRefresh={this.onRefresh} isFetching={this.state.fetching}>
            <div className='all-product-page_content'>
              {
                this.state.products.map(item => {
                  return <ProductCardSmall key={item.id}
                                           data={item}
                                           func={this.props.go}
                                           goTo='productCardPanel'
                                           formSticker='round'
                                           nameSticker='star'/>
                })
              }




              {/*<ProductCardSmall func={this.props.go}
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
                                nameSticker='like'/>*/}
            </div>
          </PullToRefresh>
        </Div>
      </Panel>
    )
  }
}

export default reduxConnect(
  state => ({
    data: state.user
  }),
  dispatch => ({
    init: id => dispatch(getUserInfo(id)),
    gender: value => dispatch(onChangeGender(value)),
    size: size => dispatch(onChooseSizeBySize(size))
  })
)(HomePanel);
