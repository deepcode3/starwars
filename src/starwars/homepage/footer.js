import React from 'react';
import './footer.css';
import logo from './StarWarDesign/Art Assets/footer_logo.png'

function Footer(){
    return(
           <div className="footer">
                <hr className='l2'></hr>
               <img src={logo} alt="f" className="footer_1" />
              <div>
               <ul id="horizontal-list" >
                    <li className="foot1">Terms of Use </li>
                    <li className="foot1">Legal Notices </li>
                    <li className="foot1">Privacy Policy   </li>
                    <li className="foot1">Star Wars Help Desk     </li>
                    <li className="foot1">Star Wars At Disney Store     </li>
                </ul>
                </div>
                <div>
                <p className="foot1">TM & c LucasFilm Ltd.All Rights Reserved</p>
                </div>
                </div>
        )
        } 
export default Footer