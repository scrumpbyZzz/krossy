import React from 'react';

import {IOS, platform, View} from "@vkontakte/vkui";
import StartPanelOne from "../../panels/startPage/startPanelOne/StartPanelOne";
import StartPanelTwo from "../../panels/startPage/StartPanelTwo/StartPanelTwo";
import StartPanelThree from "../../panels/startPage/startPanelThree/StartPanelThree";


const osname = platform();

const fontStyleGlobal = {
  fontFamily: `${osname === IOS ? 'SF UI Text' : 'Roboto'}, sans-serif`
};

class StartView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activePanel: 'start-1'
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
        <StartPanelOne id='start-1' goPanel={this.goPanel}/>
        <StartPanelTwo id='start-2' goPanel={this.goPanel}/>
        <StartPanelThree id='start-3' goPanel={this.goPanel}
                         goView={this.props.goView}/>
      </View>
    )
  }
}

export default StartView;
