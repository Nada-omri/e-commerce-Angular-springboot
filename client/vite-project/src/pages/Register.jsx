import React, { useState} from 'react';
import axios from 'axios';
import './Register.css'



function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post('/register', {
        name,
        email,
        password
      });
      alert('Welcome to the experience of a lifetime!!');
    } catch (error) {
      alert('Oups there is a problem.Please try again...')
    }
  };

  return (
         <div className="signUpContainer">
      <div className="leftSection">
        <img className="imageSignIn" src="https://images.unsplash.com/photo-1582711012124-a56cf82307a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1540&q=80" alt="Signup" />
      </div>
      <div className="rightSection">
      <h3 className='tct'>Take Your Place Now !</h3>
        <form onSubmit={registerUser} className="formxx">
            <label>Your Name : </label>
            <input className='fo-fo'
              type="text"
              placeholder="enter name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              
               required />
             <label>Your Email :</label>
            <input  className='fo-fo'
              type="email"
              placeholder="enter email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required   />
            <label>Your Password :</label>
                  <input className='fo-fo'
              type="password"
              placeholder="enter password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            required
            
            /> <br/> <br/> 
            <button type="submit" className='submit'>Register For The Party</button>
        
        </form>

      </div> </div>
  );
}

export default Register;