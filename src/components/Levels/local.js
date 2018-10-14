//Required React components
import React, { Component } from "react";
import ReactDOM from 'react-dom'

import NavBar from "../NavBar/nav_bar.js";
import './levels.css'



//component that will be passed to access voter information
export default class State extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
  voterInfo:{},
  };
 }
  render() {
   return(
    <div id = "local">
    
      <NavBar />
     <h1>Local Representatives </h1>
     <div>
       <h2>Executive</h2>
     </div>
     <div>
       <h2>Legislative</h2>
     </div>
     <div>
       <h2>Judicial</h2>
     </div>
    
    </div>
   )
  }
}
