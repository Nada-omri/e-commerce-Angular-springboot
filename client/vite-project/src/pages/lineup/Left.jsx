import React from 'react'
import './Left.css'
import pic from './pic.png'
function Left() {
    const handleRegisterClick = () => {
      window.location.href = '/register';
    };
  
  return (
    <div className='axax'>
      <div className='display'>
      <div className='contain1'>
      <img src={pic} id='picxx' className='aa'/>
      <h1 className='h'>TOMORROWLAND</h1></div>
      <button className='regi' onClick={handleRegisterClick} >Register Now </button></div></div>
  )
}

export default Left