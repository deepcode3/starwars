import React from 'react';
import './Navbar.css';
import logo from './StarWarDesign/Art Assets/logo.png'


function Navbar(){
        return(
            <div>
               <img src={logo} alt="nav1" className="nav_1" />
               <hr className='l1'></hr>
           </div>
        )
        } 
export default Navbar