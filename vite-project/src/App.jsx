import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import "./style/app.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CustomProvider from "./providers/CustomProvider"
import Carrito from "./components/Carrito"
import User from "./components/User"



function App() {
  return (
    <BrowserRouter>
    <CustomProvider >
     <Navbar />
     <Routes>
     <Route path="/" element={<ItemListContainer  />} />
     <Route path="/products/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Carrito />} />
        <Route path="/user" element={<User /> } />
     </Routes>
     </CustomProvider>
    </BrowserRouter>
  )
}

export default App
