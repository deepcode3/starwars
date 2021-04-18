import React, { Component } from 'react';
import './App.css';
//import './starwars/main.css';
import Main from './starwars/main';
import Title from './starwars/Title';
import Footer from './starwars/footer';
import Image from './starwars/image';



class App extends Component {
  render(){
return (
    <div>
     <Main/>
      <Title/>
      <Footer/>
      <Image/>
    </div>
  );
}
}
export default App
