import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'


function App() {
  return (
    <>
        <h1>Redux Toolkit</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
