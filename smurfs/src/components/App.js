import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { SmurfContext } from "../contexts/SmurfContext";
import { VillageContext } from "../contexts/VillageContext";
import Smurfs from "./Smurfs";
import Village from "./Village";
import useFetch from "../hooks/useFetch";

const App = () => {

  const [smurfData, setSmurfData] = useFetch('http://localhost:3333/smurfs');
  console.log(smurfData);

  const [house, setHouse] = useState([]);

  return (

    <SmurfContext.Provider value={{ smurfData }}>
      <VillageContext.Provider value={house}>
        <div className="App">
          <h1>Welcome new Smurfs to the Village</h1>
          <Route exact path="/" component={Smurfs} />
          <Route path="/village" component={Village} />
        </div>
      </VillageContext.Provider>
    </SmurfContext.Provider>


  );
}


export default App;
