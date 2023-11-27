import { useContext, useState } from "react"
import { context } from "../providers/CustomProvider"
import "../style/app.scss"
import { app } from "../data/FirebaseConfig"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { Link } from "react-router-dom"





const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0)

  const valorDelContexto = useContext(context)


    return (
      <div>
      <Link to="/cart">
      <button className='buttonCartwidget'>
            <span className="material-symbols-outlined">shopping_cart</span> 
        </button>
        <span> {valorDelContexto.cantidad}</span>
       
      </Link>

       </div>

      
    );
  
}
  
  export default CartWidget;