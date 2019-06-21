import React from 'react';
import './PageOne.css';
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";

const PageOne = ({handleNextSlide}) => {
    return (
        <div className='wrapper-one-page'>
            <div className='content-one-page'>
                <h2 className='one-page-title'>Кроссы</h2>
                <span className='one-page-text'>
        Сервис «Кроссы» - это отличный помощник в нелегкой задаче поиска своих самых любимых кросовок!
      </span>
                <RectangleButton title='Далее'
                                 func={handleNextSlide}/>
            </div>
        </div>
    )
};

export default PageOne;
