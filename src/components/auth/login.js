import React, { useState, useEffect,useRef } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Loader from "../utility/loader/loader";
import { useDispatch } from "react-redux";
import { OnLoader, OffLoader } from "../../redux/action/loaderAction";
import { Toast } from 'primereact/toast';


const Login = ({ setToken }) => {
  const toast = useRef(null);
  async function loginUser(credentials, dispatch) {
    const options = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    try {
      dispatch(OnLoader());
      return axios
        .post("http://192.168.0.102:8080/api/auth", credentials)
        .then((data) => {
          dispatch(OffLoader());
          if(data!==undefined && data!==null){
          
            if(data.data.hasError!==undefined && data.data.hasError!==null && data.data.hasError===true){
              toast.current.show({severity: 'error', summary: 'Error Message', detail: data.data.message});
              return data;
              
            }else{
             
              return data;
              
            }
           
          }
         
        })
    } catch (error) {
      //const err = error as AxiosError
      dispatch(OffLoader());
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error);
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  let navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token= await loginUser(
      {
        userName,
        password,
      },
      dispatch
    );
    
    if (token !== null || token !== undefined) {
      if(token.data.hasError===undefined||token.data.hasError===false){
        setToken(token.data);
        sessionStorage.setItem("userName", userName);
        window.location.href = "/dashboard";
      }
      
    }
  };
  return (
    <div className="row mt-5">
      <div className="col col-lg-4"></div>
      <div className="col col-lg-4">
        <div className="card">
          <div className="card-header">Login Here</div>

          <div className="Login card-body">
            <Loader />
            <Toast ref={toast} />
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
              <Button size="lg" className="button" type="submit">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="col col-lg-4"></div>
    </div>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
