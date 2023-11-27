import { useState } from 'react';
import { createContext } from "react"

export const context = createContext();
const Provider = context.Provider

function CustomProvider(props) {
  const [cantidad, setCantidadSeleccionada] = useState(0);
  const [carrito, setCarrito] = useState([]);
   
    const handleIncrementTotal = (nuevaCant) => {
      setCantidadSeleccionada(nuevaCant)
    }
    const agregarAlCarrito = (producto) => {
      setCarrito([...carrito, producto]);
      // setCantidadSeleccionada(cantidad + producto.cantidad);
      setCantidadSeleccionada(carrito.length + 1); 
    }

    const valorDelContexto = {
      cantidad : cantidad,
      handleIncrementTotal : handleIncrementTotal,
      setCantidadSeleccionada : setCantidadSeleccionada,
      carrito : carrito,
      setCarrito : setCarrito,
      agregarAlCarrito : agregarAlCarrito
  };

  return (
    <Provider value={valorDelContexto}>
        {props.children}
    </Provider>
    
    
  )
}

export default CustomProvider

