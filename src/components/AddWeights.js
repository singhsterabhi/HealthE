import React, { Component } from "react";
import fire from "./firebase";
import "firebase/database";
import "../css/AddWeights.css";
const database = fire.database();

class AddWeights extends Component {
  state = {
    weight: "",
    date: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  AddWeight = e => {
    e.preventDefault();
    let { weight, date } = this.state;
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
      <div id="addWeight">
        <form onSubmit={this.AddWeight} >
          
            <label for='inputWeight' className=''>
              Weight
            </label>

            <input
              className='form-control'
              id='inputWeight'
              placeholder='Input Weight'
              type='text'
              name='weight'
              value={this.state.weight}
              onChange={this.handleChange}
            />
            <label for='inputDate' className=''>
              Date
            </label>

            <input
              className='form-control'
              id='inputDate'
              placeholder='Input Date'
              type='date'
              name='date'
              value={this.state.date}
              onChange={this.handleChange}
            />
            <button id="addWeightButton" type='submit' className='btn btn-dark '>
              ADD
            </button>
        </form>
      </div>
    );
  }
}

export default AddWeights;
