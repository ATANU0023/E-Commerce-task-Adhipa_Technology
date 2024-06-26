import { useState } from 'react'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products.jsx'
import Cart from './Pages/Cart.jsx';
import Login from './Pages/Login.jsx';
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-white text-black'>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Fruits' element={<Products />} />
          <Route path='/Vegitables' element={<Products />} />
          <Route path='/Fruit & Veggies' element={<Products />}/>
          <Route path='/product' element={<Products />}>
            <Route path=':productId' element={<Products/>}/>
          </Route>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/login' element = {<Login/>}/>
        </Routes>
        
      </BrowserRouter>

      
    </main>
  )
}

export default App