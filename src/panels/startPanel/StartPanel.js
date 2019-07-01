import React from 'react';
import './StartPanel.css';

import {Gallery, Panel} from "@vkontakte/vkui";
import StartPanelOne from "./startPanelOne/StartPanelOne";
import StartPanelTwo from "./StartPanelTwo/StartPanelTwo";
import StartPanelThree from "./startPanelThree/StartPanelThree";

class StartPanel extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      slideIndex: 0
    }
  }

  handleNextSlide = () => {
    this.setState({slideIndex: this.state.slideIndex + 1})
  };

  handlePrevSlide = () => {
    this.setState({slideIndex: 1})
  };

  render() {
    return(
      <Panel id={this.props.id}>
        <Gallery slideIndex={this.state.slideIndex}
                 bullets='light'
                 style={{height: '100vh'}}>
          <StartPanelOne handleNextSlide={this.handleNextSlide}/>
          <StartPanelTwo handleNextSlide={this.handleNextSlide}/>
          <StartPanelThree handlePrevSlide={this.handlePrevSlide}
                           goView={this.props.goView} />
        </Gallery>
      </Panel>
    )
  }
}

export default StartPanel;
