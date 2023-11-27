import { context } from "../providers/CustomProvider";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";


const ItemDetail = ({ product }) => {
  
  const { carrito, setCarrito } = useContext(context);
  
  if (!product) {
    return <div>Loading...</div>;
  }

  
  const handleAddToCart = (cantidad) => {
    
   const itemAgregado = { ...product, cantidad }
   if (carrito.some((item) => item.id === itemAgregado.id)) {
     return;
   }
   setCarrito([...carrito, itemAgregado]);
   console.log(carrito);
    
  };

  

  return (
    <div className="item-detail">
      <img src={product.img} alt={product.title} className="imgCard"/>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount handleAddToCart={handleAddToCart} stock={10} initial={1} />
   
    </div>
  );
};

export default ItemDetail;


