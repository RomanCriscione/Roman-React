import './App.css'
import Navbar from "./Componets/Navbar/Navbar"
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componets/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"FitóPlantas"} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Categoria del producto: "} />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App