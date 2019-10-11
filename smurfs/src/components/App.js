import React, { createContext, Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      origsmurfs: origSmurfData,
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome new Smurfs to the Village</h1>
       
      </div>
    );
  }
}

export default App;
