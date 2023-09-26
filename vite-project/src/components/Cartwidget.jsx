import React from 'react';
import "../style/app.scss"
const CartWidget = () => {
    return (
      <div>
          <div className='containerCartwidget'>
            <button className='buttonCartwidget'>
              <span class="material-symbols-outlined">shopping_cart</span>
            </button>
            <div className='numberCartwidget'>0</div>
            </div>
      </div>
    );
  }
  
  export default CartWidget;