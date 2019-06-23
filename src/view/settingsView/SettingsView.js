import React from 'react';

import {View, Panel} from "@vkontakte/vkui";
import SettingPanelOne from "../../panels/settingPanels/settingPanelOne/SettingPanelOne";
import SettingPanelTwo from "../../panels/settingPanels/settingPanelTwo/SettingPanelTwo";
import SettingPageThree from '../../panels/settingPanels/settingPanelThree/SettingPageThree';

class SettingsView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'settings-3'
    }
  }

  go = (e) => {
    this.setState({activePanel: e.currentTarget.dataset.to})
  };

  render() {
    return(
      <View id={this.props.id}
            activePanel={this.state.activePanel}>
        <SettingPanelOne id='settings-1'/>
        <SettingPanelTwo id='settings-2' />
        <SettingPageThree id='settings-3'/>
      </View>
    )
  }
}

export default SettingsView;
