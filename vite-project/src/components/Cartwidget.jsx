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
       
      <button className='tbuttonCartwidge'>
      <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M268-132q-23.85 0-39.925-16.075Q212-164.15 212-188v-424q0-23.85 16.075-39.925Q244.15-668 268-668h80v-28q0-55.333 38.333-93.667Q424.667-828 480-828t93.667 38.333Q612-751.333 612-696v28h80q23.85 0 39.925 16.075Q748-635.85 748-612v424q0 23.85-16.075 39.925Q715.85-132 692-132H268Zm0-24h424q12 0 22-10t10-22v-424q0-12-10-22t-22-10h-80v108q0 5.15-3.462 8.575-3.462 3.425-8.667 3.425-5.204 0-8.538-3.425Q588-530.85 588-536v-108H372v108q0 5.15-3.462 8.575-3.462 3.425-8.667 3.425-5.204 0-8.538-3.425Q348-530.85 348-536v-108h-80q-12 0-22 10t-10 22v424q0 12 10 22t22 10Zm104-512h216v-28q0-45.667-31.167-76.833Q525.667-804 480-804t-76.833 31.167Q372-741.667 372-696v28ZM236-156v-488 488Z"/></svg> 
        </button>
        <span className="spanNumber"> {valorDelContexto.cantidad}</span>
        
       
      </Link>

       </div>

      
    );
  
}
  
  export default CartWidget;