
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './components/auth/login';
import Main from './components/layout/main/main';
import UseToken from './components/auth/useToken';
// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

const App=()=> {
  //const [token, setToken] = useState();
 // const token = getToken();
 const { token, setToken } = UseToken();
  if(!token) {
    return <Login setToken={setToken}/>
  }
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route exact path="*"  element={<Main />} />
        {/* <Route exact path="/login" element={<Login />}/> */}
      </Routes>
    </div>
  );
}

export default App;
