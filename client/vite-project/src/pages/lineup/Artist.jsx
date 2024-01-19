import React, { useState } from 'react';
import './Artist.css';
import Records from './data.json';

function Artist() {
  const [date, setDate] = useState('Friday');

  let elements = [];

  if (date === 'Friday') {
    for (let i = 0; i < 3; i++) {
      const record = Records[i];
      elements.push(
        <div className='tableau' key={record.name}>
          <div className='ximagex'>
            <div className='namexxx'>{record.name}</div>
            <img src={record.image} alt={record.name} className='imxx' />
            <div className="card"> 
            <h2 id='hkkk'>Timing :</h2>
            <div className="intro"> 
            {(() => {
          const v = 2+7 + record.id;
          return <p id='ppp'>{v} PM </p>;
        })()}
      </div> </div> 
  </div>
          </div>
       
      );
    }
  } else if (date === 'Saturday') {
    for (let i = 3; i < 6; i++) {
      const record = Records[i];
      elements.push(
        <div className='tableau' key={record.name}>
          <div className='ximagex'>
            <div className='namexxx'>{record.name}</div>
            <img src={record.image} alt={record.name} className='imxx'/>
            <div className="card"> 
            <h2 id='hkkk'>Timing :</h2>
            <div className="intro"> 
            {(() => {
          const v = 2+3 + record.id;
          return <p id='ppp'>{v} PM </p>;
        })()}
      </div> </div> 
          </div>
        </div>
      );
    }
  } else {
    for (let i = 6; i < Records.length; i++) {
      const record = Records[i];
      elements.push(
        <div className='tableau' key={record.id}>
          <div className='ximagex'>
            <div className='namexxx'>{record.name}</div>
            <img src={record.image} alt={record.name} className='imxx'/>
            <div className="card"> 
            <h2 id='hkkk'>Timing :</h2>
            <div className="intro"> 
            {(() => {
          const v =  2+2+ record.id;
          return <p id='ppp'>{v} PM </p>;
        })()}
      </div> </div> 
          </div>
        </div>
      );
    }
  }

  return (
    <div className='boxsxs'>
      
      <div className='datexx' >
        
          <div id='fff' onClick={() => setDate('Friday')}>
            Friday |
          </div>
          <div id='fff' onClick={() => setDate('Saturday')}>
            Saturday |
          </div>
          <div id='fff' onClick={() => setDate('Sunday')}>
            Sunday
          </div>
          
        
      </div>
      <div className='txx'>{elements}</div>
   
    </div>
  );
}

export default Artist;
