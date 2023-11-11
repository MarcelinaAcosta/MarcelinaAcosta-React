import { context } from "../providers/CustomProvider";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";


const ItemDetail = ({ product }) => {
  const { carrito, setCarrito } = useContext(context);
  
  

  if (!product) {
    return <div>Loading...</div>;
  }

  
  const handleAddToCart = (cantidad) => {
    const itemAgregado = { ...product, cantidad};
  setCarrito(itemAgregado);
  console.log("Producto agregado al carrito:", itemAgregado);
    
    
  };

  // const handleAddToCart = (cantidad) => {
  //   const itemAgregado = { ...product, cantidad};
  //   agregarAlCarrito(itemAgregado);
  //   console.log(itemAgregado);
  //   console.log(carrito);
  // };

  

  return (
    <div className="item-detail">
      <img src={product.img} alt={product.title} className="imgCard"/>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount stock={10} initial={1}  onAdd={handleAddToCart}/>
      

      
      {/* Mostrar la cantidad seleccionada */}
      {/* <p>Cantidad seleccionada: {valorDelContexto.cantidad}</p> */}
    </div>
  );
};

export default ItemDetail;


