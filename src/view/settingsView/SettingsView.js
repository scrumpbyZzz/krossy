import React from 'react';

import {View, Panel} from "@vkontakte/vkui";

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
        <Panel id='settings'>Тут будет страница "Settings"</Panel>
      </View>
    )
  }
}

export default SettingsView;
