import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/signUp'
import Login from './components/login'
import Homepage from './components/homepage'
import { Route,Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/" element={<Signup></Signup>} />
    <Route path="/login" element={<Login></Login>} />
    <Route path="/homepage" element={<Homepage></Homepage>} />

    </Routes>
    
    </>

    
  )
}

export default App
