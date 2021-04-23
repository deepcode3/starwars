import React from 'react'
import "./card.css"


function Routing(props){
    const {Image}=props
    return(
        <>
        <div className="card">
           {
               Image.map((val,indx)=>{
                   return(
                <ul key={indx} className="card-data">
                    <li className="card-list">{val.title || val.name}</li>
                </ul>
                   )
               })
           }
        </div>  
        </>
    )
}

export default Routing