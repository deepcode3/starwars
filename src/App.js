import './App.css';
import React from 'react';
import Navbar from './starwars/homepage/Navbar'
import Main from './starwars/homepage/main'
import Footer from './starwars/homepage/footer'
import Map from './starwars/homepage/map'



function  App() {
 return(
     <div className="App">
       <Main/>
       <Navbar/>
       <Footer/>
       <Map/>
       </div>
   )  
}

export default App;
