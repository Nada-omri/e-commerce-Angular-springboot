import React from 'react'
import insta from './insta.png'
import fb from './f.png'
import tik from './tiktok.png'
import twit from './twiter.png'
import youtube from './youtube.png'
import './Footer.css'
function Footer() {
  return (
    <div className='tout'> <div className='container'>
    <div className='child1'>
        <h1 className='titxx'>TOMORROWLAND BELGIUM</h1>
        <ul>
            <li>➤ Festival </li>
            <li>➤ Dream Ville</li>
            <li>➤ Global Journey </li>
        </ul>
    </div>
    <div className='child2'>
        <h1 className='titxx'> TOMORRWLAND WINTER</h1>
        <ul>
            <li>➤ Festival </li>
            <li>➤Practical</li>
        </ul>
    </div>
    <div className='child3'>
        <h1 className='titxx'>TOMORROWLAND BRASIL</h1>
        <ul><li>➤ Festival </li>
        <li>➤Practical</li>
        
            
        </ul>

    </div>
</div>
<hr/>
<h2>Follow us </h2>
<div className='container1'>
    <div className='child11'> <a href="https://www.facebook.com/tomorrowland"><img src={fb} width="30" id="im"/> </a></div>
    <div className='child22'> <a href="https://www.instagram.com/tomorrowland/"><img src={insta} width="30" id="im" /> </a></div>
    <div className='child33'> <a href="https://twitter.com/tomorrowland"><img src={twit} width="30" id="im"/> </a></div>
    <div className='child55'> <a href="https://www.youtube.com/user/TomorrowlandChannel"><img src={youtube} width="30" id="im"/> </a></div>
    <div className='child66'> <a href="https://www.tiktok.com/@tomorrowland"><img src={tik} width="30" id="im"/></a></div>
</div></div>
  );
}

export default Footer