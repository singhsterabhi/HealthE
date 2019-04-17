import React, { Component } from "react";
import DisplayWeightData from "./DisplayWeightData";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className='App'>
        <h1>Health-E</h1>
        <DisplayWeightData />
      </div>
    );
  }
}

export default App;
