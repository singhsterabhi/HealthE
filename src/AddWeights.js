import React, { Component } from "react";
import fire from "./firebase";
import "firebase/database";
const database = fire.database();

class AddWeights extends Component {
  state = {
    weight: "",
    date: ""
  };

  handleChange = e => {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  AddWeight = e => {
    e.preventDefault();
    let { weight, date } = this.state;
    // console.log(date);
    let d = new Date(date).getTime();

    console.log(d);
    database
      .ref("weightData/" + d)
      .set({
        weight,
        date
      })
      .then(() => {
        console.log("Successfully written");
        this.setState({ weight: "", date: "" });
      });
  };

  render() {
    return (
      <div>
        <p>Add Weights</p>
        <form onSubmit={this.AddWeight}>
          <input
            type='text'
            name='weight'
            value={this.state.weight}
            onChange={this.handleChange}
          />
          <input
            type='date'
            name='date'
            value={this.state.date}
            onChange={this.handleChange}
          />
          <button type='submit'>ADD</button>
        </form>
      </div>
    );
  }
}

export default AddWeights;
