import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';
import Home from './pages/Home/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
