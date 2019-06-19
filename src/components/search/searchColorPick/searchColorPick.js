import React from 'react';
import {Checkbox, Div, Gallery} from "@vkontakte/vkui";
import RoundSizeButton from "../../buttons/roundSizeButton/RoundSizeButton";

class SearchColorPick extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className='search-page-color-handle'>
          <div className='color-handle-text'>
            По цвету <div className='color-handle-text_color'>2</div>
          </div>
          <Checkbox></Checkbox>
        </div>
        <div className='search-page-color-pick'>
          <Gallery slideWidth='15%' >
            <RoundSizeButton backgroundColor='#CAEC6B'/>
            <RoundSizeButton backgroundColor='#FFEA60'/>
            <RoundSizeButton backgroundColor='#FEA838'/>
            <RoundSizeButton backgroundColor='#FF5136'/>
            <RoundSizeButton backgroundColor='#FE389B'/>
            <RoundSizeButton backgroundColor='#CA33FF'/>
            <RoundSizeButton backgroundColor='#433EDB'/>
          </Gallery>
        </div>
      </React.Fragment>
    )
  }
}

export default SearchColorPick;
