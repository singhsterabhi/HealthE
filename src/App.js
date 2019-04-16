
import React, { Component } from "react";
import AddWeights from "./AddWeights";
import DisplayWeightData from './DisplayWeightData';


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
        <AddWeights />
		<DisplayWeightData/>
      </div>
    );
  }
}

export default App;
