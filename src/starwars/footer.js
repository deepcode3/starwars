import React from 'react';
import './footer.css';
import logo from './StarWarDesign/Art Assets/footer_logo.png'

function Footer(){
        return(
            <header>
           <div className="footer">
               <img src={logo} alt="f" className="footer_1" />
        
                <ul className="use" >
                    <li className="foot1">Terms of Use </li>
                    <li className="foot1">Legal Notices </li>
                    <li className="foot1">Privacy Policy </li>
                    <li className="foot1">Star Wars Help Desk </li>
                    <li className="foot1">Star Wars At Disney Store </li>
                </ul>
            </div>
            <h1 className="B">TM & c LucasFilm Ltd.All Rights Reserved </h1>
            </header>
        )
        } 
export default Footer