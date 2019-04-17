import React, { Component } from "react";
import fire from "./firebase";
import "firebase/database";
import "../css/DisplayWeightData.css";
import WeightChart from "./WeightChart";

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
        // console.log(snapshot);
        // console.log(snapshot.val());
        this.setState({ weightData: snapshot.val() });
      });
  }

  render() {
    return (
      <div id="displayWeightData" className="container">
        <div className='accordion ' id='accordionExample'>
          <h2 className='mb-0 row justify-content-center'>
            <button id="showData"
              className='btn btn-light btn-sm'
              type='button'
              data-toggle='collapse'
              data-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'>
              Weight Data
            </button>
          </h2>

          <div
            id='collapseOne'
            className='collapse row justify-content-center'
            aria-labelledby='headingOne'
            data-parent='#accordionExample'>
            <div className='card-body table-responsive col col-md-5 ' id="weightsTable">
              <WeightsTable data={this.state.weightData} />
            </div>
          </div>
        </div>
        <div id='weightsChart' className="row justify-content-center">
          <WeightChart d={this.state.weightData} />
        </div>
      </div>
    );
  }
}

const WeightsTable = props => {
  const el = [
    Object.keys(props.data).map(m => {
      let { weight, date } = props.data[m];
      let d = new Date(date + "T00:00:00");
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return (
        <tr key={m}>
          <td>{d.toLocaleString("en-US", options)}</td>
          <td>{weight}</td>
        </tr>
      );
    })
  ];

  return (
    <table className="table table-dark table-hover table-sm table-striped table-bordered">
      <thead className="">
        <tr>
          <th>Date</th>
          <th>weight</th>
        </tr>
      </thead>
      <tbody>{el}</tbody>
    </table>
  );
};

export default DisplayWeightData;
