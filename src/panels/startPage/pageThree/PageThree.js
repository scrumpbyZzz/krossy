import React from 'react';
import RoundSizeButton from "../../../components/buttons/roundSizeButton/RoundSizeButton";
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";
import './PageThree.css';
import iconArrowBack from '../../../assets/icon/arrowBack.svg';
import iconArrowDown from '../../../assets/icon/arrowDown.svg';
import iconKross from '../../../assets/icon/kross-white.svg';
import iconSq from '../../../assets/icon/sq-white.svg';
import iconSearch from '../../../assets/icon/search-white.svg';
import iconHeart from '../../../assets/icon/heart-white.svg';
import iconSetting from '../../../assets/icon/sett-white.svg';


const PageThree = ({handleSecondSlide, goView}) => {

  return (
    <div className='wrapper-three-page'>
      <div onClick={handleSecondSlide}
           className='three-page-button-back'>
        <div className='three-page-button-back_wrap'>
          <RoundSizeButton icon={iconArrowBack}/>
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
          <img className='three-page-icon_arrow-image'
               src={iconArrowDown}
               alt='logo'/>
        </div>
        <div className='three-page-setting  '>
          <div className='three-page-setting-icon_wrap'>
            <img className='three-page-setting-icon_img'
                 src={iconSq}
                 alt='logo'/>
          </div>
          <div className='three-page-setting-icon-wrap'>
            <img className='three-page-setting-icon_img'
                 src={iconSearch}
                 alt='logo'/>
          </div>
          <div className='three-page-setting-icon-wrap'>
            <img className='three-page-setting-icon_img'
                 src={iconKross}
                 alt='logo'/>
          </div>
          <div className='three-page-setting-icon-wrap'>
            <img className='three-page-setting-icon_img'
                 src={iconHeart}
                 alt='logo'/>
          </div>
          <div className='three-page-setting-icon-wrap'>
            <img className='three-page-setting-icon_img'
                 src={iconSetting}
                 alt='logo'/>
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
