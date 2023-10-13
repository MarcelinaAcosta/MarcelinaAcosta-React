import React from 'react';
import "../style/app.scss"
const CartWidget = () => {
    return (
      
          <div className='containerCartwidget'>
            <button className='buttonCartwidget'>
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <div className='numberCartwidget'>0</div>
            </div>
      
    );
  }
  
  export default CartWidget;