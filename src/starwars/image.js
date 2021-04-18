import React from 'react';
import './image.css';
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
         
          <header>
              
               <div className="image">
                <img src={im11} alt="i" className="image_1"/>
                 {/*<img src={im12} alt="i" className="image_1"/>*/}
                 <img src={im21} alt="i" className="image_1" />
                 {/*<img src={im22} alt="i" className="image_1" />*/}
                 <img src={im31} alt="i" className="image_1" />
                 {/*<img src={im32} alt="i" className="image_1" />*/}
            </div>

            <div className="image1">
                 <img src={im41} alt="i" className="image_2" />
                 {/*<img src={im42} alt="i" className="image_2" />*/}
                 <img src={im51} alt="i" className="image_2" />
                 {/*<img src={im52} alt="i" className="image_2" />*/}
                 <img src={im61} alt="i" className="image_2" />
                 {/*<img src={im62} alt="i" className="image_2" />*/}
            </div>
          
            </header>
                 
        )
        } 
export default Image