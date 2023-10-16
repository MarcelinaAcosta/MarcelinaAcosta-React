import React, { useState, useEffect } from 'react';

import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const { category } = useParams();
  

  useEffect(() => {
    fetch('/src/data/Products.json')
      .then((respuesta) => respuesta.json())
      .then((res) => {
        if (category) {
          setProducts(res.filter((prod) => prod.category === category));
        } else {
          setProducts(res);
        }
      })
      .catch((error) => console.log(error));
  }, [category]); 
 

  
  
   return (
    <div>
        
        <ItemList products={products} />
    
      
    </div>
  );
   }

export default ItemListContainer;

