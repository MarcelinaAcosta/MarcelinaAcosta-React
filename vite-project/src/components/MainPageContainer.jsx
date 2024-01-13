import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { app } from '../data/FirebaseConfig';
import { getFirestore, collection, getDocs} from 'firebase/firestore';


 function MainPageContainer() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const db = getFirestore(app);
  const productsCollection = collection(db, 'Destacados');
  
  const consulta = getDocs(productsCollection);
  
  consulta
    .then((respuesta) => {
      const products = respuesta.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        const product = { id, ...data };
        return product;
      });
      setProducts(products);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
 
  return (
    <div>
        <img src="../img/cover.webp" alt=""  className='imgCoverContainer'/>
        <section className='MainPageSectionMetodosDePago'>
        

          <div className="MetodosDePagoContainer">
     
            <div className="MetodosDePagoPageMainSvg">
              <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"  fill='#fff'><path d="M225.015-210q-40.765 0-69.39-29.042Q127-268.083 127-308.5H81v-377.651q0-24.287 16.266-40.818Q113.53-743.5 138.5-743.5H654v138h81.5l144 194v103H821q0 40.417-29.11 69.458Q762.779-210 722.015-210q-40.765 0-69.39-29.042Q624-268.083 624-308.5H324q0 41-29.11 69.75Q265.779-210 225.015-210Zm.235-25.5q30.25 0 51.75-21.25t21.5-51.75q0-30.5-21.462-51.75-21.463-21.25-51.538-21.25-30.5 0-51.75 21.25T152.5-308.5q0 30.5 21.25 51.75t51.5 21.25ZM106.5-334H130q5.5-29 33-50.75t62.5-21.75q33 0 61.25 21T321-334h307.5v-384h-490q-12.5 0-22.25 10t-9.75 22v352Zm615.75 98.5q30.25 0 51.75-21.25t21.5-51.75q0-30.5-21.463-51.75-21.462-21.25-51.537-21.25-30.5 0-51.75 21.25T649.5-308.5q0 30.5 21.25 51.75t51.5 21.25ZM654-413h193.5l-127-167H654v167ZM367.5-526Z"/></svg>
            </div>
            <div className="MetodosDePagoPageMainText">
            <h4>Envíos gratis</h4>
            <p>Si compras más de $8000</p>
            </div>
           
          </div>
        
          
          <div className="MetodosDePagoContainer">
            <div className="MetodosDePagoPageMainSvg">
              <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60" fill='#fff' ><path d="M162.5-242v-297.5 21.5-200 476ZM694-172 583.707-282.348q-10.841-10.847-14.774-22.17Q565-315.841 565-328q0-24.915 17.5-44.957Q600-393 628.812-393q22.855 0 35.521 10.25Q677-372.5 694.238-355.5q16.262-16.5 28.911-27 12.649-10.5 35.698-10.5 29.618 0 46.885 19.904Q823-353.193 823-328.039q0 11.846-4.25 23.693-4.25 11.846-14.368 21.964L694-172ZM162.5-595.5h635V-686q0-12-10-22t-22-10h-571q-12 0-22 10t-10 22v90.5Zm282.5 379H194.491q-24.429 0-40.96-16.531Q137-249.562 137-273.802v-412.396q0-24.24 16.531-40.771Q170.062-743.5 194.28-743.5h571.44q24.218 0 40.749 16.531Q823-710.438 823-686v181q-28.427-16.472-60.968-25.486Q729.491-539.5 694-539.5q-25.025 0-49.263 4-24.237 4-47.237 12h-435V-274q0 12 10 22t22 10H441q1.1 7.123 1.871 12.989.772 5.867 2.129 12.511Z"/></svg>
            </div>
            <div className="MetodosDePagoPageMainText">
              <h4>Pagá en 3 y 6 cuotas sin interés</h4>
              <p>Con tarjetas de crédito bancarias</p>
            </div>
          </div>
          <div className="MetodosDePagoContainer">
            <div className="MetodosDePagoPageMainSvg">
            <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60" fill='#fff' ><path d="M274-137q-23.969 0-40.734-16.766Q216.5-170.531 216.5-194.5v-333q0-23.969 16.766-40.734Q250.031-585 274-585h61.5v-78.773q0-60.727 42-102.727 42-42 102.5-42t102.5 42q42 42 42 102.727V-585H686q23.969 0 40.734 16.766Q743.5-551.469 743.5-527.5v333q0 23.969-16.766 40.734Q709.969-137 686-137H274Zm0-25.5h412q14 0 23-9t9-23v-333q0-14-9-23t-23-9H274q-14 0-23 9t-9 23v333q0 14 9 23t23 9Zm205.916-146q22.347 0 37.465-15.035 15.119-15.034 15.119-37.381t-15.035-37.465Q502.431-413.5 480.084-413.5t-37.465 15.035Q427.5-383.431 427.5-361.084t15.035 37.465q15.034 15.119 37.381 15.119ZM361-585h238v-79.077q0-49.423-34.691-84.173T480.059-783q-49.559 0-84.309 34.767Q361-713.467 361-663.8v78.8ZM242-162.5v-397 397Z"/></svg>
            </div>
            <div className="MetodosDePagoPageMainText">
              <h4>Comprá de manera segura</h4>
              <p>Protegemos tus datos</p>
            </div>
          </div>
        </section>
        {products && products.length > 0 && (
  <div>
    <h1>Productos destacados</h1>
    <div class="carousel-container">
    <div class="cards-wrapper" id="cardsWrapper">
      {products.map((product) => (
        <div class="card" key={product.id}>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.img}</div>
          <div>{product.stock}</div>
          </div>
      ))}
    </div>
    <button class="prev-btn" onclick="prevCard()">Anterior</button>
    <button class="next-btn" onclick="nextCard()">Siguiente</button>
    </div>
    <Link to="/Products">Ver todos.. </Link>
  </div>
)}
    </div>
    
  )
}
export default MainPageContainer;
