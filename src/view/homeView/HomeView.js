import React from 'react';
import HomePage from "../../panels/homePage/HomePage";
import ProductCardPage from "../../panels/productCardPage/ProductCardPage";
import {View} from "@vkontakte/vkui";

class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'homePage'
    }
  }

  go = (e) => {
    console.log('222')
    this.setState({
      activePanel: e.currentTarget.dataset.to
    })
  };

  render() {
    return(
      <View id={this.props.id}
            activePanel={this.state.activePanel}>
        <HomePage id='homePage'
                  go={this.go}/>
        <ProductCardPage id='productCard'
                         go={this.go}/>
      </View>
    )
  }
}

export default HomeView;
