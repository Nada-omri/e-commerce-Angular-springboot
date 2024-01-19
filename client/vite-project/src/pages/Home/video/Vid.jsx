import React from 'react'
import video from './vid.mp4'
import './Vid.css'
import Promotions from '../promotions/Promotions'
function Vid() {
  return (
    <div className='back'> 
   <video  controls autoPlay id='vv'>
    <source src={video} type="video/mp4" />
  </video>
  <Promotions/>
   
    </div>
  );
  
}

export default Vid