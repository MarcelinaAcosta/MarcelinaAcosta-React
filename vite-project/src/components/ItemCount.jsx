import React, { useContext, useState } from 'react';
import { context } from '../providers/CustomProvider';



export default function ItemCount(props) {
 
  const valorDelContexto = useContext(context)
  const { cantidad, handleIncrementTotal } = valorDelContexto; 
  const [contador, setContador] = useState(props.initial);
  const [stock, setStock] = useState(props.stock);

  const HandleRestar = () => {
    if (contador > 1) {
      setContador(contador - 1);
      
      
    }
  };
  const HandleSumar = () => {
    if (contador < stock) setContador(contador + 1);
    
    
  };
  const addToCart = () => {
    props.onAdd(contador)
    
    
  };


  return (
    <div>
      <button onClick={HandleRestar} className="btn">
        -
      </button>
      <span>{contador}</span>
      <button onClick={HandleSumar} className="btn">
        +
      </button>
      <button onClick={addToCart} className="btn">
        Agregar al carrito
      </button>
      
    </div>
  );
}