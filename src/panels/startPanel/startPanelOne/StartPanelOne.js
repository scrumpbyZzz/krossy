import React from 'react';
import './StartPanelOne.css';
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";

const StartPanelOne = ({handleNextSlide}) => {
  return (
      <div className='start-panel-one_wrap'>
        <div className='start-panel-one_content'>
          <div className='start-panel-one-content_title'>Кроссы</div>
          <div className='start-panel-one-content_text'>
            Сервис «Кроссы» - это отличный помощник в нелегкой задаче поиска своих самых любимых кросовок!
          </div>
        </div>
        <RectangleButton title='Далее' func={handleNextSlide}/>
      </div>
  )
};

export default StartPanelOne;
