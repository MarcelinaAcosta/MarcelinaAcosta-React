import React from 'react'

import { Link } from 'react-router-dom';


 function MainPageContainer() {
  return (
    <div>
        <img src="../img/cover.webp" alt=""  className='imgCoverContainer'/>
        <div>
            <h1>Productos destacados </h1>
            <Link to="/Products">Ver todos.. </Link>
        </div>
    </div>
    
  )
}
export default MainPageContainer;
