import React from 'react';
import {Panel, HorizontalScroll} from '@vkontakte/vkui';
import {connect} from "react-redux";
import './StartPanelTwo.css';
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";

import {getUserInfo, onChangeGender, onChooseSize} from "../../../reducers/user";



class StartPanelTwo extends React.PureComponent {

  onChangeGender = (event) => {
    const value = event.target.value;
    this.props.onChangeGender(value)
  };

  onChangeSize = (event) => {
    const id= parseInt(event.target.dataset.id, 10);
    this.props.onPickSize(id)
  };

  render() {
    console.log("render");
    const { id, goPanel, data } = this.props;
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
          <div className='start-panel-two-carusel_wrap'>
            <HorizontalScroll>
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
            </HorizontalScroll>
          </div>
          <div className='start-panel-two-button_bottom'>
            <RectangleButton title='Далее'
                             func={goPanel}
                             goTo='start-3'/>
          </div>
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
