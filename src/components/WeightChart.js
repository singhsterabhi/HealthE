import React, { Component } from "react";
import Chart from "chart.js";
import moment from "moment";

class WeightChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }

  componentDidUpdate() {
    let dateFormat = "MMM D, YYYY";

    const newDateString = date => {
      return moment(date).format(dateFormat);
    };

    // console.log(newDate("2018-08-01"));

    let labels = [];
    let data = [];
    // console.log(this.props);
    for (let key in this.props["d"]) {
      //   console.log("q");
      //   console.log(this.props["d"][key]);
      labels.push(newDateString(this.props["d"][key]["date"]));
      data.push({
        x: newDateString(this.props["d"][key]["date"]),
        y: this.props["d"][key]["weight"]
      });
    }
    console.log(labels);
    console.log(data);

    // let color = Chart.helpers.color;
    let config = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Weight",
            backgroundColor: "rgba(231, 76, 60,0.2)",
            borderColor: "rgba(192, 57, 43,1.0)",
            fill: true,
            data: data,
            type: "line",
            pointRadius: 0,
            lineTension: 0,
            borderWidth: 2
          }
        ]
      },
      options: {
        title: {
          text: "Weight"
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "series",
              time: {
                parser: dateFormat,
                // round: 'day'
                tooltipFormat: "ll"
              },
              scaleLabel: {
                display: true,
                labelString: "Date"
              },
              ticks: {
                source:'data',
                autoskip:true,
                callback: function(value, index, values) {
                  if (values[index])
                    return moment(parseInt(values[index]["value"], 10)).format(
                      'MMM D, YY'
                    );
                  else return value;
                }
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Weights"
              }
            }
          ]
        },
        tooltips: {
          intersect: false,
          mode: "index",
          callbacks: {
            label: function(tooltipItem, myData) {
              var label = myData.datasets[tooltipItem.datasetIndex].label || "";
              if (label) {
                label += ": ";
              }
              label += parseFloat(tooltipItem.value).toFixed(2);
              return label;
            }
          }
        }
      }
    };

    let ctx = document.getElementById("myChart").getContext("2d");
    window.myLineChart = new Chart(ctx, config);
  }
  render() {
    return <canvas id='myChart' />;
  }
}

export default WeightChart;
