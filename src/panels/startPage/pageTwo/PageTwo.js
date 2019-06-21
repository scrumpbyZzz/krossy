import React from 'react';
import './PageTwo.css'
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";
import RoundSizeButton from "../../../components/buttons/roundSizeButton/RoundSizeButton";


const sizeChart = [38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44, 44.5, 45];
const markUp = sizeChart.map(item => {
    return <div key={item}
                className='round-size-btn_margin'>
        <RoundSizeButton content={item}/>
    </div>
});

const PageTwo = ({handleNextSlide}) => {
    return (
        <div className='wrapper-two-page'>
            <div className='content-two-page'>
                <h3 className='two-page-title'>Персонализация</h3>
                <span className='two-page-text two-page-text_first'>Какие кроссовки Вам интересны?</span>
                <div className='two-page-btn-wrap'>
                    <RectangleButton title='Мужские' />
                    <RectangleButton title='Женские' />
                </div>
                <span className='two-page-text two-page-text_second'>
        Выберете до 3-х интересующих Вас размеров кроссовок
      </span>
                <div className='two-page-slider-size'>
                    {markUp}
                </div>
                <div className='two-page-bottom-btn-wrap'>
                    <RectangleButton title='Далее'
                                     func={handleNextSlide}/>
                </div>
            </div>
        </div>
    )
};

export default PageTwo;
