import React from 'react';
import PropTypes from 'prop-types';

import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';
import './StartPage.css'
import PageOne from "./pageOne/PageOne";
import PageTwo from "./pageTwo/PageTwo";
import PageThree from "./pageThree/PageThree";
import {Panel} from "@vkontakte/vkui";


class StartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0
    }
  }

  handleNextSlide = () => {
    this.setState({slideIndex: this.state.slideIndex + 1})
  };

  handleSecondSlide = () => {
    this.setState({slideIndex: 1})
  };

  render() {
    return (
      <Panel id={this.props.id}>
        <div className='start-page_wrap'>
          <Gallery slideIndex={this.state.slideIndex}
                   style={{backgroundColor: "#4986CC", height: '100vh'}}
                   bullets="light">
            <PageOne handleNextSlide={this.handleNextSlide}/>
            <PageTwo handleNextSlide={this.handleNextSlide}/>
            <PageThree handleSecondSlide={this.handleSecondSlide}
                       goView={this.props.goView}/>
          </Gallery>
        </div>
      </Panel>
    );
  }
}

StartPage.propTypes = {
  id: PropTypes.string.isRequired,

};

export default StartPage;
