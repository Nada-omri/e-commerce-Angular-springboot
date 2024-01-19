import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import pic from './pic.png'
function Navbar() {
  return (

    <nav className='nav'>
      <img src={pic} id='picxx'/>
      <Link to='/' className='el'>Home</Link> 
      <Link to='/register' className='el'>Register</Link> 
      <Link to='/adminlog' className='el'>adminlog</Link>
      <Link to='/lineup' className='el1'>Lineup</Link>
   
         
    </nav>
  )
}

export default Navbar