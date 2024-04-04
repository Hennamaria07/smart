import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layout/Layout'
import 'flowbite';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <h1>hello</h1>
      </Layout>
    </>
  )
}

export default App
