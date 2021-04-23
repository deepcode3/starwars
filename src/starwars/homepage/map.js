import React from 'react';
import Image from './image'
import Styling from './Styling'
//import {Link} from "react-router-dom";
//import "../App.css"
function Map() 
{
    return(
        <div className="Mapping">
          {Image.map((val,ind)=>{
            return(
             // <Link className="Link" key={ind} to={`/${val.title}`}>
              <Styling key={ind} Image={val}/>
            //  </Link>
            )
          })}
        </div>)
}
          
   
export default Map;
{/*import React from "react"
import Styling from './Styling'
import Data from './Data'
import {Link} from "react-router-dom";
import "../app.css"
function Mapping(){
    return(
      <div className="Mapping">
        {Data.map((val,ind)=>{
          return(
            <Link className="Link" key={ind} to={`/${val.title}`}>
            <Styling key={ind} Data={val}/>
            </Link>
          )
        })}
        
      </div>
    )
  }
  export default Mapping
  
  --------------------------------------------------------------
       </div>
    <div className="mapping">
      Image.map(({id, src, title, alt, loading }) =>{
       return(
    {/*  <img key={id} src={src} title={title} alt={alt} loading={loading} />)
    <Styling key={id} Image={val}/>
    )
       }
    </div>
}
  */}