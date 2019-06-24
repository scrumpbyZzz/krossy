import React from 'react';
import {Button} from "@vkontakte/vkui";
import './RectangleButton.css';
import '../../../assets/fonts/fonts.css'

const RectangleButton = ({title, func, icon, goTo, iconSvg}) => {

  let pic;

  if (icon) {
    pic = <img alt='logo' className='round-size-btn_image' src={icon}/>
  }
  else if (iconSvg) {
    pic = <React.Fragment>{iconSvg}</React.Fragment>
  }


  return (
    <Button className='rectangle-button'
            level="outline"
            onClick={func}
            data-to={goTo}
            size='l'>
      <div className='rectangle-button_wrap'>
        <div className='rectangle-button_icon'>{pic}</div>
        <div className='rectangle-button_text'>{title}</div>
      </div>
    </Button>
  )
};

export default RectangleButton;