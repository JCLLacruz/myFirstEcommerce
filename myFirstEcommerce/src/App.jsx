import './App.css'
import './custom.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalProvider>
        <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer />
      </GlobalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
