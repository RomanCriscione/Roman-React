import './App.css'
import Navbar from "./Componets/Navbar/Navbar"
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componets/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationsService'
import CartView from "./Componets/CartView/CartView"
import Checkout from './Componets/Checkout/Checkout'


function App() {

 

  return (
    <>
    <NotificationProvider>
    <CartProvider>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"FitóPlantas"} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Categoria del producto: "} />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartView />} />
        <Route path='/checkout' element={<Checkout />} />
        </Routes>
        
      </BrowserRouter>
      </CartProvider>
      </NotificationProvider>
      </>
  )
}

export default App