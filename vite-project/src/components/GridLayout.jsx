import React from 'react';
import Header from './header';
import Main from './Main';
import Footer from "./footer"
import '../style/app.scss'


const GridLayout = () => {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  };
  export default GridLayout;