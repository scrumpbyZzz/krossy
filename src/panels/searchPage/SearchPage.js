import React from 'react';

import SearchRangeSlider from "../../components/search/searchRangeSlider/SearchRangeSlider";
import {Panel, Gallery, FormLayoutGroup, Checkbox, Radio, platform, IOS, Div} from "@vkontakte/vkui";
import RectangleButton from "../../components/buttons/rectangleButton/RectangleButton";

import SearchColorPick from "../../components/search/searchColorPick/searchColorPick";

import './SearchPage.css';
import IconChevronIOSRight from '../../components/icon/IconChevronIOSRight';
import IconChevronAndroidRight from '../../components/icon/IconChevronAndroidRight';

const osname = platform();

const fontStyleAndroid = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: '14px'
};

const fontStyleIOS = {
  fontFamily: 'SF UI Text, sans-serif',
  fontSize: '17px'
};

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Panel id={this.props.id}
             theme='white'
             style={osname === IOS ? fontStyleIOS : fontStyleAndroid}
             className='search-page_wrap'>
        <Div className='search-page-brand-select search-border-bottom'>
          <div className='search-page-brand_text'>Бренд</div>
          <div className='search-page-brand_icon'>
            {osname === IOS ? <IconChevronIOSRight /> : <IconChevronAndroidRight />}
          </div>
        </Div>
        <Div className='search-page-price-range search-border-bottom'>
          <SearchRangeSlider/>
        </Div>
        <Div className='search-page-discount-only search-border-bottom'>
          <div className='search-page-discount-only_row'>
            Только со скидкой
            <Checkbox></Checkbox>
          </div>
        </Div>
        <Div className='search-page-checkbox-group search-border-bottom'>
          <FormLayoutGroup>
            <Radio name='type'>Не сортировать</Radio>
            <Radio name='type'>По возрастанию цены</Radio>
            <Radio name='type'>По убыванию цены</Radio>
          </FormLayoutGroup>
        </Div>
        <Div className='search-page-color-pick'>
          <SearchColorPick/>
          <div className='search-page-button_wrap'>
            <RectangleButton title='Найти'/>
          </div>
        </Div>
      </Panel>
    )
  }
}

export default SearchPage;
