import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/layout/Header'
import Home from './pages/Home/Home'
import Footer from './components/layout/Footer'
import OwnerDashboard from './components/OwnerDashboard'
import Register from './pages/auth/Register'
function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <Header/>
 <Home/>
 <Footer/>
 <Register/>
 </>
  )
}

export default App
