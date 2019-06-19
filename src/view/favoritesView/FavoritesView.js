import React from 'react';

import {View, Panel} from "@vkontakte/vkui";

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
        <Panel id='favorites'>Тут будет страница "Favorites"</Panel>
      </View>
    )
  }
}

export default FavoritesView;
