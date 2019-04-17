import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./index.css";
import App from "./components/App";
import AddWeights from "./components/AddWeights";
import Header from './components/Header';

ReactDOM.render(
  <Router>
    <Switch>path
      <Route exact path="/" render={()=><Header path="/"><App/></Header>}/>
      <Route path="/add" render={()=><Header path="/add"><AddWeights/></Header>}/>
    </Switch>
  </Router>,

  document.getElementById("root")
);
