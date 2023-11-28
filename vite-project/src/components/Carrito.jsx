import React from 'react'
import { useContext } from 'react'
import { context } from '../providers/CustomProvider'

const Carrito = () => {
  const { carrito } = useContext(context);

  if (carrito.length === 0) {
    return <p>El carrito está vacío.</p>;
  }
  console.log('Carrito renderizado:', carrito);

  return (
    <div>
      <h1>carrito </h1>
    {carrito.map((producto) => (
      <div key={producto.id}>
        <img src={producto.img} alt={producto.title} className="imgCard"/>
        <h1>{producto.title}</h1>
        <p>{producto.description}</p>
        <p>Precio: ${producto.price}</p>
      </div>
    ))}
  </div>
  )
}
export default Carrito 


