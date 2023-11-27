import React, { useContext } from 'react';
import CartWidget from './Cartwidget';
import { Link } from 'react-router-dom';
import "../style/app.scss"
import { context } from '../providers/CustomProvider';

function Navbar() {
  const valorDelContexto = useContext(context)
  console.log(valorDelContexto.cantidad)
  

  return (
    <nav className='List-nav'>
      <h1 className='title'>VENUS</h1>
      <ul className='Ul-container'>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/products/men">MEN</Link>
        </li>
        <li>
          <Link to="/products/women">WOMEN</Link>
        </li>
        <li>
          <Link to="/products/children">CHILDREN</Link>
        </li>
        <li><Link to="/new">NEW</Link></li>
        <li><Link to="/help">HELP</Link></li>
        
      </ul>
      
      <CartWidget />
    </nav>
  );
}

export default Navbar;
