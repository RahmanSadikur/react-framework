import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";
const NavBar = () => {
  return <nav className='navbar navbar-expand-sm navbar-dark fixed-top' style={{backgroundColor: '#ccffda'}}>
        <div class="collapse navbar-collapse">
        <img className='logo' src="/logo.png" alt="image" />
    </div>
    <div class="collapse navbar-collapse">   
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <Link to="/hr/profile" className='navbar-brand ml-5'>Profile</Link>
            </li>
            <li class="nav-item">
            <Link to="/logout" className='navbar-brand ml-5'><img className='logout' src="/logout.png" alt="image" /></Link>
            </li>
        </ul>
        </div>
     
  </nav>
};

export default NavBar;
