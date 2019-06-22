import React from 'react';
import RoundSizeButton from "../../../components/buttons/roundSizeButton/RoundSizeButton";
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";
import './PageThree.css';
import IconArrowAndroidBack from '../../../components/icon/IconArrowAndroisBack';
import IconHome from '../../../components/icon/IconHome';
import IconSearch from '../../../components/icon/IconSearch';
import IconKross from '../../../components/icon/IconKross';
import IconHeart from '../../../components/icon/IconHeart';
import IconSetting from '../../../components/icon/IconSetting';
import IconArrowRight from '../../../components/icon/IconArrowRight';

const PageThree = ({handleSecondSlide, goView}) => {

  return (
    <div className='wrapper-three-page'>
      <div onClick={handleSecondSlide}
           className='three-page-button-back'>
        <div className='three-page-button-back_wrap'>
          <RoundSizeButton iconSvg={<IconArrowAndroidBack currentColor='#ffffff'/>}/>
        </div>
      </div>
      <div className='content-three-page'>
        <h3 className='three-page-title'>Готово!</h3>
        <span className='three-page-text three-page-text_first'>
        Сервис «Кроссы» - это отличный помощник в нелегкой
        задаче поиска своих самых любимых кросовок!
      </span>
        <span className='three-page-text three-page-text_second'>
        Особенно рекомендуем наш Tinder для кроссовок - очень кашерно!
      </span>
        <div className='three-page-icon_arrow'>
          <IconArrowRight />
        </div>
        <div className='three-page-setting  '>
          <div className='three-page-setting-icon_wrap '>
            <IconHome currentColor='#ffffff' />
          </div>
          <div className='three-page-setting-icon-wrap'>
            <IconSearch currentColor='#ffffff'/>
          </div>
          <div className='three-page-setting-icon-wrap'>
            <IconKross currentColor='#ffffff' />
          </div>
          <div className='three-page-setting-icon-wrap'>
            <IconHeart currentColor='#ffffff'/>
          </div>
          <div className='three-page-setting-icon-wrap'>
            <IconSetting currentColor='#ffffff' />
          </div>
        </div>
        <RectangleButton title='Приступить'
                         func={goView}
                         goTo='homePage'/>
      </div>

    </div>
  )
};

export default PageThree;
