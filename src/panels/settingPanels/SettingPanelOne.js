import React from 'react';
import './SettingPanelOne.css';
import {Div, FormLayoutGroup, IOS, Panel, platform, Radio} from "@vkontakte/vkui";
import Header from "../../components/header/Header";
import IconChevronRight from "../../components/icon/IconChevronAndroidRight";
import RectangleButton from "../../components/buttons/rectangleButton/RectangleButton";
import IconChevronIOSRight from "../../components/icon/IconChevronIOSRight";

class SettingPanelOne extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const osname = platform();
    let fontStyleGlobal = {
      fontFamily: `${osname === IOS ? 'SF UI Text' : 'Roboto'}, sans-serif`,
      fontSize: `${osname === IOS ? '17px' : '14px'}`
    };

    return (
      <Panel id={this.props.id}
             theme='white'
             className='setting-page_wrap'
             style={fontStyleGlobal}>
        <Header/>
        <Div className='setting-page-size setting-border-bottom'>
          <div className='setting-page-size_left'>
            <div>Размер </div>
            <div className='setting-page-size_left_color'>40</div>
            <div className='setting-page-size_left_color'>41</div>
            <div className='setting-page-size_left_color'>42</div>
          </div>
          <div className='setting-page-size_right'>
            {osname === IOS ? <IconChevronIOSRight/> : <IconChevronRight/>}
          </div>
        </Div>
        <Div className='setting-page-checkbox-group setting-border-bottom'>
          <FormLayoutGroup>
            <Radio name='type'>Мужские</Radio>
            <Radio name='type'>Женские</Radio>
          </FormLayoutGroup>
        </Div>
        <Div className='setting-page-notifications setting-border-bottom'>
          <div className='setting-page-notifications_left'>
            <div>Уведомления</div>
            <div className='setting-page-notifications_left_color'>3</div>
          </div>
          <div className='setting-page-notifications_right'>
            {osname === IOS ? <IconChevronIOSRight/> : <IconChevronRight/>}
          </div>
        </Div>
        <Div className='setting-page-buttons'>
          <RectangleButton title='поделиться приложением'/>
          <RectangleButton title='сообщить о проблеме'/>
          <RectangleButton title='сообщество приложения '/>
        </Div>
      </Panel>
    )
  }
}

export default SettingPanelOne;
