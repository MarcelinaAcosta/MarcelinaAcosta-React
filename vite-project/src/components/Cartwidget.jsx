import { useContext } from "react"
import { context } from "../providers/CustomProvider"
import "../style/app.scss"
import { app } from "../data/FirebaseConfig"
import { getFirestore, collection, addDoc } from "firebase/firestore"



const CartWidget = () => {

  const valorDelContexto = useContext(context)

    const handleClick = () => {
      valorDelContexto.toggleDark()
    }
    const handleFinalizarCompra = () => { 
      const compra = {
        carrito : [],
        usuario : {},
        created_at :""
      }

      const db = getFirestore(app);
      const comprasCollection = collection(db, "compras");
      const consulta = addDoc(comprasCollection, compra);

      consulta
      .then(respuesta => {
        console.log(respuesta)
    })
      .catch(error => {
        console.log(error)
    })
  }

    return (
      
          <div >
            <h1>hola</h1>
            <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
            
            </div>
      
    );
  
}
  
  export default CartWidget;