import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Login.css';
import RowDetails from './admin/RowDetails';

function Login() {
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/register');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const onDelete = (id) => {
    if (window.confirm('Are you sure to delete this user?')) {
      axios.delete(`/register/${id}`).then((res) => {
        setMessage(res.data.message);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 4000);
        setUsers(users.filter((user) => user._id !== id));
      });
    }
  };

  return (
    <div className="row p-4"  >
      <div className="alert alert-success d-flex align-items-center" role="alert">
        <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
          <use xlinkHref="#check-circle-fill" />
        </svg>
      </div>
      <div className="mt-4" id='interface'>
        <h1 className='xxx'> Administration Interface</h1>
      </div>
       
      <div className="col-12 col-lg-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">email</th>
              <th scope="col">name</th>
              <th scope="col">Password</th>
              <th scope="col">id</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ name, email, password, _id }) => (
              <RowDetails name={name} email={email} password={password} ID={_id} onDelete={onDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Login;
