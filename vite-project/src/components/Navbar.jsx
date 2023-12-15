import React, { useContext } from 'react';
import CartWidget from './Cartwidget';
import SearchBar from './SearchBar';
import UserContainer from './UserContainer';
import { Link } from 'react-router-dom';
import "../style/app.scss"
import { context } from '../providers/CustomProvider';

function Navbar() {
  const valorDelContexto = useContext(context)
  console.log(valorDelContexto.cantidad)
  

  return (
    <div className='container_NavBar'>
      <div className='textHeader'>
        <p>cuotas sin interes </p>
      </div>
    <nav className='NavBar'>
      <div>
        <img src="../img/logo1_2.png" alt="logo" className='NavBarLogo' />
      </div>
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
      <SearchBar />
      <UserContainer />
      
      <CartWidget />
    </nav>
    </div>
  );
}

export default Navbar;
