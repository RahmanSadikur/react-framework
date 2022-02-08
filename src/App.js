
import react from 'react';
import { Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './components/auth/login';
import Main from './components/layout/main/main';


const App=()=> {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route exact path="*"  element={<Main />} />
        <Route exact path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
