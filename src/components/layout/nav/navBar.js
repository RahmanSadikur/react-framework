import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return <nav className='navbar navbar-expand-lg navbar-dark ' style={{backgroundColor: '#ccffda'}}>
      <ul>
          <li>
           <Link to="/" className='navbar-brand ml-5'>working</Link>
          </li>
          <li>
           <Link to="/Login" className='navbar-brand ml-5'>working</Link>
          </li>
      </ul>
     
  </nav>
};

export default NavBar;
