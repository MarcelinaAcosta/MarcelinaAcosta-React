import React from 'react';
import CartWidget from './Cartwidget';
import "../style/app.scss"

function Navbar() {
  return (
    <nav className='List-nav'>
      
        <h1 className='title'>VENUS</h1>
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
       <CartWidget />
       
      
    </nav>
  );
}

export default Navbar;
