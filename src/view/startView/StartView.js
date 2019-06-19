import React from 'react';
import StartPage from "../../panels/startPage/StartPage";
import {IOS, platform, View} from "@vkontakte/vkui";


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

  render() {
    const showHeader = this.state.activePanel === 'start' ? false : true;
    return (
      <View id={this.props.id}
            header={showHeader}
            activePanel={this.state.activePanel}
            style={fontStyleGlobal}>
        <StartPage id='start'
                   goView={this.props.goView}/>
      </View>
    )
  }
}

export default StartView;
