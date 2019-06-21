import React from 'react';
import './icon.css'

const IconHome = ({active}) => {
  let divStyle = {
    display: 'flex',
    width: '20px',
    height: '10px',
    justifyContent: 'space-evenly'
  };

  let colorSvg = active ? '#000' : '#aebfcf';
  return (
    <React.Fragment>
      <div style={divStyle}>
        <svg className='svg-icon-sq' xmlns="http://www.w3.org/2000/svg" width="7.646" height="7.646" viewBox="0 0 7.646 7.646">
          <g id="Rectangle_1215" data-name="Rectangle 1215" transform="translate(0)" fill="none" stroke={colorSvg}
             stroke-width="2">
            <rect width="7.646" height="7.646" rx="2" stroke="none"/>
            <rect x="1" y="1" width="5.646" height="5.646" rx="1" fill="none"/>
          </g>
        </svg>
        <svg className='svg-icon-sq' xmlns="http://www.w3.org/2000/svg" width="7.646" height="7.646" viewBox="0 0 7.646 7.646">
          <g id="Rectangle_1215" data-name="Rectangle 1215" transform="translate(0)" fill="none" stroke={colorSvg}
             stroke-width="2">
            <rect width="7.646" height="7.646" rx="2" stroke="none"/>
            <rect x="1" y="1" width="5.646" height="5.646" rx="1" fill="none"/>
          </g>
        </svg>
      </div>
      <div style={divStyle}>
        <svg className='svg-icon-sq' xmlns="http://www.w3.org/2000/svg" width="7.646" height="7.646" viewBox="0 0 7.646 7.646">
          <g id="Rectangle_1215" data-name="Rectangle 1215" transform="translate(0)" fill="none" stroke={colorSvg}
             stroke-width="2">
            <rect width="7.646" height="7.646" rx="2" stroke="none"/>
            <rect x="1" y="1" width="5.646" height="5.646" rx="1" fill="none"/>
          </g>
        </svg>
        <svg className='svg-icon-sq' xmlns="http://www.w3.org/2000/svg" width="7.646" height="7.646" viewBox="0 0 7.646 7.646">
          <g id="Rectangle_1215" data-name="Rectangle 1215" transform="translate(0)" fill="none" stroke={colorSvg}
             stroke-width="2">
            <rect width="7.646" height="7.646" rx="2" stroke="none"/>
            <rect x="1" y="1" width="5.646" height="5.646" rx="1" fill="none"/>
          </g>
        </svg>
      </div>
    </React.Fragment>

  )
};

export default IconHome;
