import React from 'react';

import {IOS, platform, View} from "@vkontakte/vkui";
import StartPanel from "../../panels/startPanel/StartPanel";


const osname = platform();

const fontStyleGlobal = {
  fontFamily: `${osname === IOS ? 'SF UI Text' : 'Roboto'}, sans-serif`
};

class StartView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activePanel: 'start'
    }
  }

  goPanel = (e) => {
    this.setState({activePanel: e.currentTarget.dataset.to})
  };

  render() {
    return (
      <View id={this.props.id}
            header={false}
            activePanel={this.state.activePanel}
            style={fontStyleGlobal}>
        <StartPanel id='start' goView={this.props.goView}/>
      </View>
    )
  }
}

export default StartView;
