import React from 'react'
import { useContext } from 'react'
import { context } from '../providers/CustomProvider'
import "../style/app.scss"

const Carrito = () => {
  const { carrito, PrecioTotal, vaciarCarrito, eliminarProducto } = useContext(context);

  if (carrito.length === 0) {
    return <p>El carrito está vacío.</p>;
  }
  
  const handleVaciar = () => {
    vaciarCarrito();
    
    window.location.reload(); // Recarga la página actual para actualizar el estado del carrito.
    alert("Carrito vaciado");
    return; // Necesario para evitar que se ejecute el resto del código.
  }
  const handleEliminar = (id) => {  
   eliminarProducto(id);  
  }
  
  

  return (
    <div>
      <h1>carrito </h1>
    {carrito.map((producto) => (
      <div key={producto.id} className='ContainerCardCart'>
        <img src={producto.img} alt={producto.title} className="imgCardCart"/>
        <h1>{producto.title}</h1>
        <p>{producto.description}</p>
        <p>Precio unitario : ${producto.price}</p>
        <p>Cantidad : {producto.cantidad}</p>
        <p>Precio por cantidad : ${producto.price * producto.cantidad}</p>
        <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
      </div>
    ))}
    <h2>Precio Total : $ {PrecioTotal()}</h2>
    <button onClick={handleVaciar}>Vaciar Carrito </button>
    <button>Finalizar Compra </button>
  </div>
  )
}
export default Carrito 


