import React from 'react';
import { Panel, ScreenSpinner } from '@vkontakte/vkui';
import './StartPanelOne.css';
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";
import DotsSlide from "../../../components/dotsSlide/DotsSlide";
import ApiService from "../../../api/krossy-api";
import {connect as reduxConnect} from "react-redux";
import {isLoadSetting, onChangeGender, onChooseSizeBySize} from "../../../reducers/user";

class StartPanelOne extends React.Component {

  Service = new ApiService();

  loadSettings = () => {
    const id = this.props.data.userInfo.id;
    this.props.isLoadSetting(true);
    this.Service.loadSetting(id)
      .then(res => {
        if(res.status === "success" || res.ok) {
          this.props.gender(res.result.gender);
          res.result.size.forEach(s => this.props.size(s));
          this.props.isLoadSetting(false);
        }
      })
  };

  componentDidMount() {
    if(!this.props.data.isLoadUserInfo) {
     this.loadSettings();
    }
  }

  render() {
    const { data } = this.props;
    console.log(this.props)
    return (
      data.isLoadSetting ?
        <ScreenSpinner /> :
      <Panel id={this.props.id} >
        <div className='start-panel-one_wrap'>
          <div className='start-panel-one_content'>
            <div className='start-panel-one-content_title'>Кроссы</div>
            <div className='start-panel-one-content_text'>
              Сервис «Кроссы» - это отличный помощник в нелегкой задаче поиска своих самых любимых кросовок!
            </div>
          </div>
          <RectangleButton title='Далее'
                           goTo='start-2'
                           func={this.props.goPanel}
                           />
          <DotsSlide />
        </div>
      </Panel>
    )
  }
};

export default reduxConnect(
  state => ({
    data: state.user
  }),
  dispatch => ({
    isLoadSetting: bool => dispatch(isLoadSetting(bool)),
    gender: value => dispatch(onChangeGender(value)),
    size: size => dispatch(onChooseSizeBySize(size))
  })
)(StartPanelOne);
