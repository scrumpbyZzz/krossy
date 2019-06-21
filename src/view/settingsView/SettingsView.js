import React from 'react';

import {View, Panel} from "@vkontakte/vkui";
import SettingPage from "../../panels/settingPanels/SettingPanelOne";

class SettingsView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'settings'
    }
  }

  go = (e) => {
    this.setState({activePanel: e.currentTarget.dataset.to})
  };

  render() {
    return(
      <View id={this.props.id}
            activePanel={this.state.activePanel}>
        <SettingPage id='settings'/>
      </View>
    )
  }
}

export default SettingsView;
