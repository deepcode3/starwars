import React from 'react'
import Image from '../homePage/image'
import "./card.css"
import {NavLink} from 'react-router-dom'
const NavigationBar = () => {
  return (
        <>
        <nav className="nav">
                {
                       Image.map((Title,idx)=>{
                        return(
                      <ul key={idx} >
                          <NavLink style={{color:"red"}} to= {`/${Title.title}`}>
                              <li className="nav-list">{Title.title.toUpperCase()}</li>
                          </NavLink>
                       </ul>
                    )})
                }
            </nav>
            <hr className="line3"/>
        </>)
        }
export default NavigationBar