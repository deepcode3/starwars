import React from 'react';
import './image.css';
import Page2 from '../secondpage/People';
import im11 from './StarWarDesign/Art Assets/Topics/characters_normal.png'
//import im12 from './StarWarDesign/Art Assets/Topics/characters_pressed.png'
import im21 from './StarWarDesign/Art Assets/Topics/droids_normal.png'
//import im22 from './StarWarDesign/Art Assets/Topics/droids_pressed.png'
import im31 from './StarWarDesign/Art Assets/Topics/films_normal.png'
//import im32 from './StarWarDesign/Art Assets/Topics/films_pressed.png'
import im41 from './StarWarDesign/Art Assets/Topics/planets_normal.png'
//import im42 from './StarWarDesign/Art Assets/Topics/planets_pressed.png'
import im51 from './StarWarDesign/Art Assets/Topics/species_normal.png'
//import im52 from './StarWarDesign/Art Assets/Topics/species_pressed.png'
import im61 from './StarWarDesign/Art Assets/Topics/vehicles_normal.png'
//import im62 from './StarWarDesign/Art Assets/Topics/vehicles_normal.png'
 


function Image(){
        return(
         
          <body>
        
               <div className="image">
                 <div to="/People">
                    <a href="http://swapi.dev/api/people/">
                      <img src={im11} alt="i" loading="i1" className="image_1"></img></a>
                      <span className="text">Peoples</span>
                </div>
                 <div to="/Droid">
                      <img src={im21} alt="i" className="image_1" />
                      <span className="text">Droids</span>
                 </div>
                 <div to="/Films">
                      <img src={im31} alt="i" className="image_1" />
                      <span className="text">films</span>
                 </div>
               </div> 
              <div className="image1">
                <div to="/Planet">
                      <img src={im41} alt="i" className="image_2" />
                      <span  className="text">Planets</span>
                 </div>
                 <div to="/Species">
                      <img src={im51} alt="i" className="image_2" />
                      <span className="text">species</span>
                 </div>
                 <div to="/Vehicles">
                      <img src={im61} alt="i" className="image_2" />
                      <span  className="text">Vehicles</span>
                 </div>
              </div>
            
             </body>
      
                 
        )
        } 
export default Image