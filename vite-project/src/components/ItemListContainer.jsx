import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { app } from '../data/FirebaseConfig';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';




function ItemListContainer() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  
  

useEffect(() => {

  const db = getFirestore(app);
  const productsCollection = collection(db, 'Products');

  
    let filtro;
    if (category) {
      filtro = query(productsCollection, where("category", "==", category));
    } else {
      filtro = productsCollection; // Sin filtro si category no está definido
    }
   
    // const filtro = query(productsCollection, where("category", "==", "men"));
    // const filtro = query(productsCollection, where("category", "==", "women"));
    // const filtro = query(productsCollection, where("category", "==", category));
    
    const consulta = getDocs(filtro)
    
      consulta
      .then((respuesta) => {
        const products = respuesta.docs.map((doc) => {
            const id = doc.id
            const data = doc.data()
            const product = {id, ...data}
      return product
})
    setProducts(products)
    
    
    
})
    consulta.catch((error) => {
      console.log(error)
})

  }, [category]); 
 
  return (
    <div>
      <div className="coverContainer">
        <img src="../img/cover.webp" alt="" />
      </div>
        <ItemList products={products} />
    </div>
  );
   }

export default ItemListContainer;

