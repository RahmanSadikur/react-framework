import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './login.css';

async function loginUser(credentials) {
  const options = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      
  }
  };
  
  // return Post('http://localhost:69/api/auth', {
  //   method: 'POST',
  //   headers: {
  //      'Accept': 'application/json',
  //   'Content-Type': 'application/x-www-form-urlencoded',
  //   'Access-Control-Allow-Origin': '*',

  //   },
  //   body: JSON.stringify(credentials)
  // })
  //   .then(
  //    data  =>data.json()
  //     )
  try{
    return axios.post('http://192.168.0.188:80/api/auth',credentials).then(data  =>data)

  }  catch (error) {
        //const err = error as AxiosError
        if (error.response) {
           console.log(error.response.status)
           console.log(error.response.data)
        }
        else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error);
          console.log('Error', error.message);
        }
        console.log(error.config);
       // this.handleAxiosError(error)
     }

 }
const Login = ({ setToken }) => {
  let navigate = useNavigate(); 
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      userName,
      password
    });
    console.log(token);
    console.log(token.data);
    if(token!==null||token !==undefined){
      setToken(token.data);
      sessionStorage.setItem('userName', userName);
     // navigate("/dashboard")
     window.location.href="/dashboard"
    }
    
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
