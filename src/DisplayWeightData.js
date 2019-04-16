import React, { Component } from "react";
import fire from "./firebase";
import "firebase/database";
const database = fire.database();

class DisplayWeightData extends Component {
  constructor() {
    super();
    this.state = {
      weightData: {}
    };
  }

  componentDidMount() {
    database
      .ref("/weightData/")
      .once("value")
      .then(snapshot => {
        console.log(snapshot);
        console.log(snapshot.val());
        this.setState({ weightData: snapshot.val() });
      });
  }

  render() {
    const el = [
      Object.keys(this.state.weightData).map(m => {
        let { weight, date } = this.state.weightData[m];
        return (
          <tr>
            <td>{date}</td>
            <td>{weight}</td>
          </tr>
        );
      })
    ];
    return (
      <div>
        <p>Weight Data</p>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>weight</th>
            </tr>
          </thead>
          <tbody>{el}</tbody>
        </table>
      </div>
    );
  }
}

export default DisplayWeightData;
