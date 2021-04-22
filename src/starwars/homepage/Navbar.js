import React from 'react';
import './Navbar.css';
import logo from './StarWarDesign/Art Assets/logo.png'
import {Link} from 'react-router-dom';

function Navbar(){
        return(
            <div className="nav">
                <Link to="/">
               <img src={logo} alt="nav1" className="nav_1" />
               </Link>
               <Link to='People'>
                    press<button>click</button>
               </Link>
               <hr className='l1'></hr>
           </div>
        )
        } 
export default Navbar