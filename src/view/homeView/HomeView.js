import React from 'react';
import HomePanel from "../../panels/homePanel/HomePanel";
import ProductCardPanel from "../../panels/productCardPanel/ProductCardPanel";
import {View} from "@vkontakte/vkui";

class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'productCardPanel'
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
        <HomePanel id='homePanel'
                   go={this.go}/>
        <ProductCardPanel id='productCardPanel'
                          go={this.go}/>
      </View>
    )
  }
}

export default HomeView;
