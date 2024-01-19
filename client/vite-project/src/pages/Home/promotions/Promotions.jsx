import React from 'react'
import { useEffect, useRef, useState } from "react";
import './Promotions.css';
const messages = [
    "Experience the extraordinary ",
    "Don't miss the chance ",
    "Get your tickets now!",
    
  ];
function Promotions() {
    const containerRef = useRef();
    const [show, setShow] = useState(true);
    const [messageIndex, setMessageIndex] = useState(0);
    useEffect(() => {
        setTimeout(() => {
          setShow(false);
        }, 2000);
    const intervalId = setInterval(() => {
    // get next message
    setMessageIndex((i) => (i + 1) % messages.length);
    
    // slide the message in
    setShow(true);
    
    setTimeout(() => {
    setShow(false);
    }, 2000);
    }, 3000);
    
    return () => {
    clearInterval(intervalId);
    };
    }, []);
  return (
    <div className='promotions'>
         <div ref={containerRef} style={{ overflow: "hidden" }} className='anim'>
      {show && (
        <div
        direction={show ? "left" : "right"}
        in={show}
        container={containerRef.current}
        timeout={{
          enter: 400,
          exit: 100,
        }}
        >
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"1.5%" }}>
            <div className='msg'>
              {messages[messageIndex]}
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Promotions




 
 


