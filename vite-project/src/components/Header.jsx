import React from 'react';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';
import "../style/app.scss"

const Header = () => {
    return (
        <header className="header">
            

            <Navbar />
            <ItemListContainer greeting="¡Hola, bienvenido!" />
        </header>
    )
}
export default Header 