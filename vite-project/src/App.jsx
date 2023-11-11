import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import "./style/app.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CustomProvider from "./providers/CustomProvider"
import CartWidget from "./components/Cartwidget.jsx"

function App() {
  return (
    <BrowserRouter>
    <CustomProvider >
     <Navbar />
     <Routes>
     <Route path="/" element={<ItemListContainer greeting="¡Hola, bienvenido a Venus de Milo!" />} />
     <Route path="/products/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartWidget />} />
     </Routes>
     </CustomProvider>
    </BrowserRouter>
  )
}

export default App
