import React from 'react';
import './StartPanelTwo.css';
import {Panel} from "@vkontakte/vkui";
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";
import CaruselSizeChart from "../../../components/caruselSizeChart/CaruselSizeChart";
import PageBullets from "../../../components/pageBullets/PageBullets";

const StartPanelTwo = ({id, goPanel}) => {
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
            <CaruselSizeChart/>
          </div>
          <div className='start-panel-two-button_bottom'>
            <RectangleButton title='Далее'
                             func={goPanel}
                             goTo='start-3'/>
          </div>
          <PageBullets/>
        </div>
      </Panel>
    )
  }
;

export default StartPanelTwo;
