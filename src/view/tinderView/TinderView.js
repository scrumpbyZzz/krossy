import React from 'react';

import {View, Panel, PanelHeader, HeaderButton, osname, IOS} from "@vkontakte/vkui";
import Icon24Back from '@vkontakte/icons/dist/24/cancel';
import Icon28ChevronBack from '@vkontakte/icons/dist/24/cancel';

class TinderView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'tinder'
    }
  }

  go = (e) => {
    this.setState({activePanel: e.currentTarget.dataset.to})
  };

  render() {
    return(
      <View id={this.props.id}
            activePanel={this.state.activePanel}>
        <Panel id='tinder'>
          <PanelHeader
            left={<HeaderButton onClick={() => this.setState({ activePanel: 'brand' })}>
              {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
            addon={<HeaderButton onClick={() => this.setState({ activePanel: 'brand' })}>Назад</HeaderButton>}
          >
            Котики
          </PanelHeader>
        </Panel>
      </View>
    )
  }
}

export default TinderView;
