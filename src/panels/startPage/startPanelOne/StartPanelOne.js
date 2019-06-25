import React from 'react';
import './StartPanelOne.css';
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";
import {IOS, platform, Panel} from "@vkontakte/vkui";
import PageBullets from "../../../components/pageBullets/PageBullets";

const StartPanelOne = ({id, goPanel}) => {
  return (
    <Panel id={id}>
      <div className='start-panel-one_wrap'>
        <div className='start-panel-one_content'>
          <div className='start-panel-one-content_title'>Кроссы</div>
          <div className='start-panel-one-content_text'>
            Сервис «Кроссы» - это отличный помощник в нелегкой задаче поиска своих самых любимых кросовок!
          </div>
        </div>
        <RectangleButton title='Далее'
                         func={goPanel}
                         goTo='start-2'/>
        <PageBullets/>
      </div>
    </Panel>
  )
};

export default StartPanelOne;
