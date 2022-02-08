import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import './login.css';
async function loginUser(credentials) {
  return fetch('http://localhost:69/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(credentials)
  })
    .then(
     data  =>data.json()
      )
  // return axios.post('http://localhost:69/api/auth', {
  //   userName    : credentials.userName,
  //   password : credentials.userName.password
  // }).then(data  =>data.json())
 }
const Login = ({ setToken }) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      userName,
      password
    });
    console.log(token);
    setToken(token);
  }
  return<div className='row mt-5'>
    <div className='col col-lg-4'></div>
    <div className='col col-lg-4'>
  <div className='card'>
    <div className="card-header">Login Here</div>
  
   <div className="Login card-body">
  <form onSubmit={handleSubmit}>
  <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button  size="lg" className='button' type="submit" >
          Login
        </Button>
    {/* <label>
      <p>Username</p>
      <input type="text" onChange={e => setUserName(e.target.value)}/>
    </label>
    <label>
      <p>Password</p>
      <input type="password" onChange={e => setPassword(e.target.value)} />
    </label>
    <div>
      <button type="submit">Submit</button>
    </div> */}
  </form>
 
  </div>
  </div>
  </div>
  <div className='col col-lg-4'></div>
</div>;
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;
