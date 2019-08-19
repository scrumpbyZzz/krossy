import React from 'react';
import {Panel} from '@vkontakte/vkui';
import {connect} from "react-redux";
import './StartPanelTwo.css';
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";
import HorizontalSizeChart from "../../../components/caruselSizeChart/HorizontalSizeChart";


class StartPanelTwo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sex: '',
      size: []
    }
  }
  render() {
    console.log(this.props)
    const { id, goPanel } = this.props;
    return (
      <Panel id={id}>
        <div className='start-panel-two_wrap'>
          <div className='start-panel-two_title'>Персонализация</div>
          <div className='start-panel-two_text start-panel-two_text-1'>
            Какие кроссовки Вам интересны?
          </div>
          <div className='start-panel-two-buttons_wrap'>
            <RectangleButton title='Мужские'/>
            <RectangleButton title='Женские'/>
          </div>
          <div className='start-panel-two_text start-panel-two_text-2'>
            Выберете до 3-х интересующих Вас размеров кроссовок
          </div>
          <div className='start-panel-two-carusel_wrap'>
            <HorizontalSizeChart/>
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
    user: state.user
  }),
  dispatch => ({})
)
(StartPanelTwo);
