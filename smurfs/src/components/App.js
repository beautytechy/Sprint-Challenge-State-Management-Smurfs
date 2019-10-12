import React, { Component } from "react";
import {Route} from "react-router-dom";
import "./App.css";
import {SmurfContext} from "../contexts/SmurfContext";
import {VillageContext} from "../contexts/VillageContext";
import useFetch from "../hooks/useFetch";
import Smurfs from "./Smurfs";
import Village from "./Village";


const App = () => {

 const [smurfs, setSmurfData] = useFetch('http://localhost:3333/smurfs');
      
  
    return (
      // <SmurfContext.Provider value={{smurfs}}>
      // <VillageContext.Provider value={smurfData}>
      <div className="App">
        <h1>Welcome new Smurfs to the Village</h1>
        <Route exact path="/" component={Smurfs}/>
        <Route path="/village" component={Village}/>}
        
      </div>
      /* </SmurfContext.Provider>
      </VillageContext.Provider> */
    );
  }



export default App;
