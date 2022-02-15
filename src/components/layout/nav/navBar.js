import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./nav.css";
const NavBar = () => {
  let navigate = useNavigate(); 

  return <nav className='navbar navbar-expand-sm navbar-dark fixed-top' style={{backgroundColor: '#088054'}}>
        <div className="collapse navbar-collapse">
        <img className='logo' src="/logo.png" alt="logo" />
    </div>
    <div className="collapse navbar-collapse">   
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <Link to="/hr/profile" className='navbar-brand ml-5'>Profile</Link>
            </li>
            <li className="nav-item">
            <img className='logout' src="/logout.png" alt="logout" onClick={()=>{ 
               sessionStorage.clear();
               sessionStorage.removeItem('token');
               //navigate("/login")
               window.location.href="/login"
               }}/>
            </li>
        </ul>
        </div>
     
  </nav>
};

export default NavBar;
