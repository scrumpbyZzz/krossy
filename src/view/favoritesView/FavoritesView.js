import React from 'react';

import {View, Panel} from "@vkontakte/vkui";
import FavoritesPage from "../../panels/favoritesPage/FavoritesPage";

class FavoritesView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'favorites'
    }
  }

  go = (e) => {
    this.setState({activePanel: e.currentTarget.dataset.to})
  };

  render() {
    return(
      <View id={this.props.id}
            activePanel={this.state.activePanel}>
        <FavoritesPage id='favorites'/>
      </View>
    )
  }
}

export default FavoritesView;
