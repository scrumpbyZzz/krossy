import React from 'react';

import {View, Panel} from "@vkontakte/vkui";
import SearchPage from "../../panels/searchPage/SearchPage";
import './SearchView.css'

class SearchView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'search'
    }
  }

  go = (e) => {
    this.setState({activePanel: e.currentTarget.dataset.to})
  };

  render() {
    return(
      <View id={this.props.id}
            activePanel={this.state.activePanel}>
        <SearchPage id='search'/>
      </View>
    )
  }
}

export default SearchView;
