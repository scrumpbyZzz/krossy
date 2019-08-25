import React from 'react';
import {Panel, HorizontalScroll} from '@vkontakte/vkui';
import {connect} from "react-redux";
import './StartPanelTwo.css';
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";

import {onChangeGender, onChooseSize} from "../../../reducers/user";
import DotsSlide from "../../../components/dotsSlide/DotsSlide";
import ApiService from "../../../api/krossy-api";


class StartPanelTwo extends React.PureComponent {

  Service = new ApiService();

  onChangeGender = (event) => {
    const value = event.target.value;
    this.props.onChangeGender(value)
  };

  onChangeSize = (event) => {
    const id = parseInt(event.target.dataset.id, 10);
    this.props.onPickSize(id)
  };

  saveUserSettings = () => {
    const {gender, sizeChart, userInfo} = this.props.data;
    const id = userInfo.id;
    const sizes = [];
    sizeChart.forEach(item => {
      if(item.isSelected) {
        sizes.push(item.size)
      }
    });
    const form = new FormData();
    form.append("gender", gender);
    form.append("size", JSON.stringify(sizes));

    this.Service.saveSetting(id, form)
  };

  render() {
    const {id, goPanel, data} = this.props;
    return (
      <Panel id={id}>
        <div className='start-panel-two_wrap'>
          <div className='start-panel-two_title'>Персонализация</div>
          <div className='start-panel-two_text start-panel-two_text-1'>
            Какие кроссовки Вам интересны?
          </div>
          <div className='start-panel-two-buttons_wrap'>
            <input className='start-panel-two_radio'
                   type='radio'
                   onChange={this.onChangeGender}
                   name='gender'
                   value='male'
                   id='genderMale'
                   checked={data.gender === "male"}
            />
            <label htmlFor='genderMale'
                   className='start-panel-two_radio_label'>
              Мужские
            </label>
            <input className='start-panel-two_radio'
                   type='radio'
                   onChange={this.onChangeGender}
                   name='gender'
                   value='female'
                   id='genderFemale'
                   checked={data.gender === "female"}
            />
            <label htmlFor='genderFemale' className='start-panel-two_radio_label'>
              Женские
            </label>
          </div>
          <div className='start-panel-two_text start-panel-two_text-2'>
            Выберете до 3-х интересующих Вас размеров кроссовок
          </div>
            <div onClick={this.onChangeSize} className='start-panel-two_horizontal_wrap'>
              {
                data.sizeChart.map(item => {
                  return <div key={item.id}
                              data-id={item.id}
                              className='start-panel-two_size'
                              style={item.isSelected ? {borderColor: "#ffffff", boxShadow: "0 0 4px 0 #fff"} : {}}
                  >
                    {item.size}
                  </div>
                })
              }
            </div>
          <div className='start-panel-two-button_bottom'>
            <RectangleButton title='Далее'
                             func={goPanel}
                             secondAction={this.saveUserSettings}
                             goTo='start-3'/>
          </div>
          <DotsSlide/>
        </div>
      </Panel>
    )
  }
}

export default connect(
  state => ({
    data: state.user
  }),
  dispatch => ({
    onChangeGender: value => dispatch(onChangeGender(value)),
    onPickSize: id => dispatch(onChooseSize(id))
  })
)
(StartPanelTwo);
