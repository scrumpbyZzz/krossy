import React from 'react';


const ProductBrandView = ({logo}) => {
  return (
    <React.Fragment>
      <img className='product-brand-view-logo'
           src={logo}
           alt='logo'/>
      <div className='product-brand-view-name'>
        ADIDAS AIR HUARACHE
      </div>
    </React.Fragment>
  )
};

export default ProductBrandView;
