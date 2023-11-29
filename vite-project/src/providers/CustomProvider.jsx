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
      setCantidadSeleccionada(carrito.length + 1); 
    }
    const PrecioTotal = () => {
      return carrito.reduce((acc, producto) => acc + producto.price * producto.cantidad, 0);
    }
    const vaciarCarrito = () => { 
      setCarrito([]);
    }
    const eliminarProducto = (id) => { 
      setCarrito(carrito.filter(producto => producto.id !== id));
    }

    const valorDelContexto = {
      cantidad : cantidad,
      handleIncrementTotal : handleIncrementTotal,
      setCantidadSeleccionada : setCantidadSeleccionada,
      carrito : carrito,
      setCarrito : setCarrito,
      agregarAlCarrito : agregarAlCarrito,
      PrecioTotal : PrecioTotal,
      vaciarCarrito : vaciarCarrito,
      eliminarProducto : eliminarProducto,
  };

  return (
    <Provider value={valorDelContexto}>
        {props.children}
    </Provider>
    
    
  )
}

export default CustomProvider

