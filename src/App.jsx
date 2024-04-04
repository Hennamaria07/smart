import { useState } from 'react';
import './App.css';
import 'flowbite';
import { Route, Routes } from 'react-router-dom';
import { Faq, Home, NotFound, Product } from './pages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
