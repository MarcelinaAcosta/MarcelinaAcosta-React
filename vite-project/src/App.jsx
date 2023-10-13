import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
 import "./style/app.scss"



function App() {
  

  return (
    <>
     <Navbar />
            <ItemListContainer greeting="¡Hola, bienvenido a Venus de Milo!" />
     
    </>
  )
}

export default App
