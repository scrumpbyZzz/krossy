import React from 'react';
import RectangleButton from "../buttons/rectangleButton/RectangleButton";

const ProductCardTinderWelcome = ({closeModal}) => {
  return (
    <div className='tinder-page-welcome'>
      <div className='tinder-page-welcome_title'>Кроссы помогут!</div>
      <div className='tinder-page-welcome_text'>Кроссы помогут подобрать нужные именно Вам кроссовки.
        Просто нажимайте «Нравится» или
        «Не нравится» - и все получится! Или еще проще:
      </div>
      <div className='tinder-page-welcome_button'>
        <RectangleButton func={closeModal} title='Понятно'/>
      </div>
    </div>
  )
};

export default ProductCardTinderWelcome;
