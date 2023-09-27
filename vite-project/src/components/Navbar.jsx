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
        <ul className='Ul-container'>
            <li><a href="">INICIO</a></li>
            <li>
              <a href="">SHOP</a>
              <ul className='sub-menu-shop'>
						    <li><a href="">Submenu1</a></li>
						    <li><a href="">Submenu2</a></li>
						    <li><a href="">Submenu3</a></li>
						    <li><a href="">Submenu4</a></li>
						  </ul>
            </li>
            <li>
              <a href="">CHILDRENS</a>
              <ul className='sub-menu-childrens'>
						          <li><a href="">Submenu1</a></li>
						          <li><a href="">Submenu2</a></li>
						          <li><a href="">Submenu3</a></li>
						          <li><a href="">Submenu4</a></li>
						    </ul>
            </li>
            <li>
              <a href="">STORES</a>
              <ul className='sub-menu-stores'>
						        <li><a href="">Submenu1</a></li>
						        <li><a href="">Submenu2</a></li>
						        <li><a href="">Submenu3</a></li>
						        <li><a href="">Submenu4</a></li>
						  </ul>
            </li>
            <li><a href="">NEW</a></li>
            <li><a href="">HELP</a>
              <ul className='sub-menu-help'>
						      <li><a href="">Submenu1</a></li>
						      <li><a href="">Submenu2</a></li>
						      <li><a href="">Submenu3</a></li>
						      <li><a href="">Submenu4</a></li>
						  </ul>
            </li>
       </ul>
     </div>
      
    </nav>
  );
}

export default Navbar;
