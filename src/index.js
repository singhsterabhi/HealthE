import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./index.css";
import App from "./components/App";
import AddWeights from "./components/AddWeights";
import Header from './components/Header';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" render={()=><Header><App/></Header>}/>
      <Route path="/add" render={()=><Header><AddWeights/></Header>}/>
    </Switch>
  </Router>,

  document.getElementById("root")
);
