import React from 'react';
import {RangeSlider, FormLayoutGroup, Checkbox} from "@vkontakte/vkui";

class SearchRangeSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startValue: 2000,
      endValue: 8000
    }
  }

  handleChange = (e) => {
    this.setState({startValue: e[0], endValue: e[1]})
  };

  render() {
    return (
      <FormLayoutGroup>
        <div className='search-page-price-range-counter'>
          <div className='range-price-counter_block'>
            <div className='range-price-counter_block__row'>Диапазон цены</div>
            <div className='range-price-counter_block__row'>
              от
              <div className='price-counter-start_color'>{Math.round(this.state.startValue)}</div>
              до
              <div className='price-counter-end_color'>{Math.round(this.state.endValue)}</div>
            </div>
          </div>
          <Checkbox></Checkbox>
        </div>
        <div className='search-page-price-range-slider'>
          <RangeSlider min={1000}
                       max={10000}
                       onChange={this.handleChange}
                       defaultValue={[2000, 8000]}/>
        </div>

      </FormLayoutGroup>
    )
  }
}

export default SearchRangeSlider;
