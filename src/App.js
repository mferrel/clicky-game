import React from "react";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import "./index.css";


const App = () => (
  <div className="container-fluid mainCardContainer">
    <Jumbotron />
    <Wrapper /> 
  </div>
);

export default App;
