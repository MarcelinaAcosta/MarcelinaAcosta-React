import React from 'react';
import CartWidget from './Cartwidget';

function Navbar() {
  return (
    <nav>
      <div>
      <img src="../img/Logo1.png" alt="logo" className='ImgLogo1'/>
      </div>
      <div>
      <img src="../img/Logo2.png" alt="logo" className='ImgLogo2'/>
      </div>
      <CartWidget />
      <div className='List-nav'>
        <ul>
            <li><a href="">INICIO</a></li>
            <li><a href="">SHOP</a></li>
            <li><a href="">MEN</a></li>
            <li><a href="">WOMEN</a></li>
            <li><a href="">STORES</a></li>
            <li><a href="">NEW</a></li>
            <li><a href="">HELP</a></li>
       </ul>
     </div>
      
      
      <a href=""></a>
      
    </nav>
  );
}

export default Navbar;
