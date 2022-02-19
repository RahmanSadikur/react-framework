import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AutoSuggest } from 'react-autosuggestions';
import { Button } from 'primereact/button';
// import { useNavigate } from "react-router-dom";
import "./nav.css";
import { Row } from 'react-bootstrap';

const NavBar = () => {
  useEffect(() => {
     // countryservice.getCountries().then(data => setOptions(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [options, setOptions] = useState([
    "Acura",
    "BMW",
    "Audi",
    "Bentley",
    "Buick",
    "Cadillac",
    "Chevrolet",
    ]);
  const [product, setproduct] = useState();
  const handleSubmit = (e) => {
      e.preventDefault();
      alert(`The product selected was ${product}`)
  }
  // let navigate = useNavigate(); 
 const userName=sessionStorage.getItem('userName');
  return <nav className='navbar navbar-expand-sm navbar-dark fixed-top' style={{backgroundColor: '#088054'}}>
        <div className="collapse navbar-collapse">
        <img className='logo' src="/logo.png" alt="logo" />
    </div>
    <div className="nav justify-content-center">
             <form  onSubmit={handleSubmit}>
             <div className='row'>
             <div className='col'>
             <AutoSuggest
                options={options}
                handleChange={setproduct}
                value={product}
                styles={
                  {
                    announcement: {
                      position: "absolute",
                      clip: "rect(0 0 0 0)",
                      clipPath: "inset(50%)",
                      height: "1px",
                      width: "1px",
                      overflow: "hidden",
                    },
                    combobox: {
                      display: "inline-block",
                    },
                    searchField: {
                      padding: "0rem",
                      border: "1px solid #c8c8c8",
                      backgroundColor: "#fff",
                      borderRadius: "6px",
                      color: "#000",
                      fontWeight: "normal",
                      fontSize: "1.35rem",
                      margin: "0 auto",
                      width: "19rem",
                      focus: {
                        color: "#000",
                        border: "2px solid #005499",
                        outline: "none",
                      },
                    },
                    searchLabel: {
                      display: "none",
                      fontSize: "1.35rem",
                    },
                    suggestionsContainer: {
                      display: "block",
                      position: "absolute",
                      border: "1px solid #999",
                      background: "#fff",
                      width: "20rem",
                    },
                    suggestionOptions: {
                      margin: "0",
                      padding: "0",
                      listStyle: "none",
                    },
                    suggestionOption: {
                      margin: "0",
                      padding: ".5rem",
                      fontSize: "1.35rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      cursor: "default",
                    },
                  } 
                }
            />
                 </div>
                 <div className='col'>
                 {/* <button >Submit</button> */}
                 <Button label="Submit" className="p-button-success" />
               </div>
             </div>  
        </form>
        </div>
    <div className="collapse navbar-collapse mr-5">   
        <ul className="navbar-nav ms-auto mr-5">
            <li className="nav-item">
            <Link to="/hr/profile" className='navbar-brand ml-5'>{userName}</Link>
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
