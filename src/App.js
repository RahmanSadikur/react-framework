
import React,{ useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './components/auth/login';
import Main from './components/layout/main/main';
import UseToken from './components/auth/useToken';

const App=()=> {

//  const { token, setToken } = UseToken();
//   if(!token) {
//     return <Login setToken={setToken}/>
//   }
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
