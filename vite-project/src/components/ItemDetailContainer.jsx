import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'; 
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { app } from '../data/FirebaseConfig'; 


const ItemDetailContainer = () => {
 
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  

  useEffect(() => {
    const db = getFirestore(app)
    const productsCollection = collection(db, 'Products')
    const docRef = doc(productsCollection, id)

    const consulta = getDoc(docRef)
    consulta
    .then(respuesta => {
  const producto = respuesta.data()
  producto.id = respuesta.id
  
  setProduct(producto)
})
.catch(error => {
  console.log(error)
})

  }, [id ]);

  return (
    <div id='ItemDetailContainer'>
    {product ? (
      <ItemDetail product={product} />
    ) : (
      <div>Cargando...</div>
    )}
  </div>
  );
};

export default ItemDetailContainer;





