import React,{useState,useEffect} from 'react';  //10
import './App.css';
import Navbar from './starwars/homepage/Navbar'
import Main from './starwars/homepage/main'
import Footer from './starwars/homepage/footer'
import Image from './starwars/homepage/image'
//import People1 from './starwars/secondpage/People'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react'

function  App() {
  const [People,setPeople] = useState([]);
  const [Planets,setPlanets] = useState([]);
  const [loading,setLoading] = useState([]);
  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results);
    }
    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/');
      let data = await res.json();
      setPlanets(data.results);
    }
   
    fetchPeople();
    fetchPlanets();
    
  }, []);
  console.log('people',People)
  console.log('planets',Planets)

   return(
     <div className="App">
       <Router>
         <Main/>
         <Navbar/>
         <Footer/>
         <Container>
           <Switch>
             <Route exact path='/'>
                <Image/>
             </Route>
             <Route exact path='/People'>
                <People/>
             </Route>
          </Switch>
         </Container>
       </Router>
     </div>
   )  
}
export default App;
