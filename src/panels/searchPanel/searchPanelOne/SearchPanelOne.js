import React from 'react';

import {Panel, FormLayoutGroup, Radio, platform, IOS, Div, Switch} from "@vkontakte/vkui";

import './SearchPanelOne.css';
import IconChevronIOSRight from '../../../components/icon/IconChevronIOSRight';
import IconChevronAndroidRight from '../../../components/icon/IconChevronAndroidRight';
import SearchRangeSlider from '../../../components/search/searchRangeSlider/SearchRangeSlider';
import SearchColorPick from '../../../components/search/searchColorPick/searchColorPick';
import RectangleButton from '../../../components/buttons/rectangleButton/RectangleButton';
import RadioButton from "../../../components/radioButton/RadioButton";
import Header from "../../../components/header/Header";

const osname = platform();

const fontStyleAndroid = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: '14px'
};

const fontStyleIOS = {
  fontFamily: 'SF UI Text, sans-serif',
  fontSize: '17px'
};

class SearchPanelOne extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Panel id={this.props.id}
             theme='white'
             style={osname === IOS ? fontStyleIOS : fontStyleAndroid}
             className='search-page_wrap'>
        <Header title='Поиск'/>
        <Div className='search-page-brand-select search-border-bottom'>
          <div className='search-page-brand_text'>Бренд</div>
          <div className='search-page-brand_icon'>
            {osname === IOS ? <IconChevronIOSRight/> : <IconChevronAndroidRight/>}
          </div>
        </Div>
        <Div className='search-page-price-range search-border-bottom'>
          <SearchRangeSlider/>
        </Div>
        <Div className='search-page-discount-only search-border-bottom'>
          <div className='search-page-discount-only_row'>
            Только со скидкой
            <Switch />
          </div>
        </Div>
        <Div className='search-page-checkbox-group search-border-bottom'>
          <RadioButton name='sort' title='Не сортировать'/>
          <RadioButton name='sort' title='По возрастанию цены'/>
          <RadioButton name='sort' title='По убыванию цены'/>
        </Div>
        <Div className='search-page-color-pick'>
          <SearchColorPick/>
          <div className='search-page-button_wrap'>
            <RectangleButton title='Найти'
                             func={this.props.goPanel}
                             goTo='search-2'/>
          </div>
        </Div>
      </Panel>
    )
  }
}

export default SearchPanelOne;
