import React from 'react';
import './RoundSizeButton.css'

const RoundSizeButton = ({func, goTo, content, icon, backgroundColor}) => {

  let divStyle = {
    backgroundColor: backgroundColor
  };

  return (
    <div className='round-size-btn'
         style={divStyle}
         onClick={func}
         data-to={goTo}>
      {icon ? <img alt='logo'
                   className='round-size-btn_image'
                   src={icon}/> : content }
    </div>
  )
};

export default RoundSizeButton;
