import React from 'react';
import { Panel } from '@vkontakte/vkui';
import './StartPanelOne.css';
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";
import DotsSlide from "../../../components/dotsSlide/DotsSlide";
import ApiService from "../../../api/krossy-api";
import {connect as reduxConnect} from "react-redux";
import {getUserInfo, onChangeGender, onChooseSizeBySize} from "../../../reducers/user";

class StartPanelOne extends React.Component {

  Service = new ApiService();

  loadSett = () => {
    const id = this.props.data.userID;
    console.log(this.props.data)
    this.Service.loadSetting(id)
      .then(res => {
        if(res) {
          this.props.gender(res.gender);
          res.size.forEach(s => this.props.size(s));
        }
      })
  }

  render() {
    return (
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
                           secondAction={this.loadSett}/>
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
    gender: value => dispatch(onChangeGender(value)),
    size: size => dispatch(onChooseSizeBySize(size))
  })
)(StartPanelOne);
