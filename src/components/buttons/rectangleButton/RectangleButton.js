import React from 'react';
import {Button} from "@vkontakte/vkui";
import './RectangleButton.css';
import '../../../assets/fonts/fonts.css'

const RectangleButton = ({title, func, icon, goTo}) => {
  return (
    <Button className='rectangle-button'
            level="outline"
            onClick={func}
            data-to={goTo}
            size='l'>
      {icon ? <img src={icon} alt='icon'/> : null}
      {title}
    </Button>
  )
};

export default RectangleButton;
