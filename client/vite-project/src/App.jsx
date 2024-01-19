
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from '../src/pages/Home/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios'
import Footer from './pages/Home/footer/Footer'
import LineUp from './pages/lineup/LineUp'
import AdminLog from './pages/AdminLog'
axios.defaults.baseURL='http://localhost:8003';
axios.defaults.withCredentials = true
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/register' element ={<Register/>} />
      <Route path='/lineup' element ={<LineUp/>} />  
      <Route path='/login' element ={<Login/>} />  
      <Route path='/adminlog' element ={<AdminLog/>} />  
                        
    </Routes>
    <Footer/>
    </>
  )
}

export default App
