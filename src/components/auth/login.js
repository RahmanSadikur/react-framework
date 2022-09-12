import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Loader from "../utility/loader/loader";
import { useDispatch } from "react-redux";
import { OnLoader, OffLoader } from "../../redux/action/loaderAction";

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
      .post("http://192.168.0.106:1048/api/auth", credentials)
      .then((data) => {
        dispatch(OffLoader());
        return data;
      });
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
const Login = ({ setToken }) => {
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  let navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser(
      {
        userName,
        password,
      },
      dispatch
    );

    if (token !== null || token !== undefined) {
      setToken(token.data);
      sessionStorage.setItem("userName", userName);
      window.location.href = "/dashboard";
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
