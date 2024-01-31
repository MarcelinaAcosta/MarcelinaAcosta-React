import React from 'react';
import { Link } from 'react-router-dom';
import MetodosDePagoContainer from './MetodosDePagoContainer';
import ContainerSlideFeatured from './ContainerSlideFeatured';

  function MainPageContainer() {
 
  return (
    <div>
        <img src="../img/cover.webp" alt=""  className='imgCoverContainer'/>
       <MetodosDePagoContainer />
       <ContainerSlideFeatured />
       <div className="ContainerCategoryMainPage">
       <div className="CategorysMainPage">
        <img src="https://i.pinimg.com/564x/98/46/f7/9846f7bef01c5585a6a673875732d8b5.jpg"></img>
       </div>
       <div className="CategorysMainPage">
        <img src="https://i.pinimg.com/564x/45/6c/04/456c04af237ea3f478a34a9607f3f0ff.jpg"></img>
       </div>
       <div className="CategorysMainPage">
        <img src="https://i.pinimg.com/564x/e0/fe/a0/e0fea05210e9b9423177d7f6552383b1.jpg"></img>
       </div>
       <div className="CategorysMainPage">
        <img src="https://i.pinimg.com/564x/e9/8a/87/e98a87f0c8050b5ba690d09e5c2ab3e8.jpg"></img>
       </div>
       </div>
    
  <Link to="/Products" style={{margin:"400px"}}>Ver todos.. </Link>
</div>
    
  )
 }

export default MainPageContainer;
