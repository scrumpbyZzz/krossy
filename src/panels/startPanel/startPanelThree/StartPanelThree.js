import React from 'react';
import './StartPanelThree.css';
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";
import IconHome from "../../../components/icon/IconHome";
import IconSearch from "../../../components/icon/IconSearch";
import IconKross from "../../../components/icon/IconKross";
import IconHeart from "../../../components/icon/IconHeart";
import IconSetting from "../../../components/icon/IconSetting";
import IconArrowRight from "../../../components/icon/IconArrowRight";
import RoundSizeButton from "../../../components/buttons/roundSizeButton/RoundSizeButton";
import IconArrowAndroidBack from "../../../components/icon/IconArrowAndroisBack";

const StartPanelThree = ({goView, handlePrevSlide}) => {
  return (
    <div className='start-panel-three_wrap'>
      <div className='start-panel-three-circle-button_wrap'>
        <RoundSizeButton func={handlePrevSlide}
                         iconSvg={<IconArrowAndroidBack currentColor='#ffffff'/>}/>
      </div>
      <div className='start-panel-three_content'>
        <div className='start-panel-three_title'>Готово!</div>
        <div className='start-panel-three_text start-panel-three_text-1'>
          Сервис «Кроссы» - это отличный помощник в нелегкой
          задаче поиска своих самых любимых кросовок!
        </div>
        <div className='start-panel-three_text start-panel-three_text-2'>
          Особенно рекомендуем наш Tinder для кроссовок - очень кашерно!
        </div>
      </div>
      <div className='start-panel-three-icon_arrow'>
        <IconArrowRight/>
      </div>
      <div className='start-panel-three-setting'>
        <div className='start-panel-three-setting-icon_wrap '>
          <IconHome currentColor='#ffffff'/>
        </div>
        <div className='start-panel-three-setting-icon-wrap'>
          <IconSearch currentColor='#ffffff'/>
        </div>
        <div className='start-panel-three-setting-icon-wrap'>
          <IconKross currentColor='#ffffff'/>
        </div>
        <div className='start-panel-three-setting-icon-wrap'>
          <IconHeart currentColor='#ffffff'/>
        </div>
        <div className='start-panel-three-setting-icon-wrap'>
          <IconSetting currentColor='#ffffff'/>
        </div>
      </div>
      <RectangleButton title='Приступить'
                       func={goView}/>
    </div>
  )
};

export default StartPanelThree;
