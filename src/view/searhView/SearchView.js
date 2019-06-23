import React from 'react';

import {View, Panel} from "@vkontakte/vkui";
import SearchPanelOne from "../../panels/searchPanel/searchPanelOne/SearchPanelOne";
import './SearchView.css'
import SearchPnelTwo from '../../panels/searchPanel/searchPanelTwo/SearchPanelTwo';

class SearchView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'search-1'
    }
  }

  goPanel = (e) => {
    this.setState({activePanel: e.currentTarget.dataset.to})
  };

  render() {
    return(
      <View id={this.props.id}
            activePanel={this.state.activePanel}>
        <SearchPanelOne id='search-1' goPanel={this.goPanel}/>
        <SearchPnelTwo id='search-2' goPanel={this.goPanel}/>
      </View>
    )
  }
}

export default SearchView;
