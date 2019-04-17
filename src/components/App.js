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
        <DisplayWeightData />
      </div>
    );
  }
}

export default App;
