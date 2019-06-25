import React from 'react';
import './CaruselSizeChart.css';

class CaruselSizeChart extends React.Component {
  render() {
    const sizeChart = [38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44, 44.5, 45];
    const markUp = sizeChart.map(item =>{
      return <div key={item}
                  className='carusel-size-chart_circle'>{item}</div>
    })
    return(
      <div className='carusel-size-chart_wrap'>
        {markUp}
      </div>
    )
  }
};

export default CaruselSizeChart;
