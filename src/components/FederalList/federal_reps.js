//Required React components
import React, { Component } from "react";

//Required for http call 
// import axios  from 'axios';

const BASE_URL = "https://www.googleapis.com/civicinfo/v2/representatives?"

const key = "AIzaSyAGXQCKyT0aUdZ30n3FJE9QD_fYFUb_7jY"



class FederalReps extends Component {
 constructor(props) {
  super(props);

  this.state = {
   representativesInfoFederal:{}
  }
 }

 handleClick() {
  // console.log("This is address: ", this.state.address);
  fetch(`${BASE_URL}key=${key}&address=${this.state.address}`)
    .then(response => response.json())
    .then(
      (result) => {
        this.setState({ representativesInfo : result })
        // console.log(this.state);
        this.props.resultReturn(this.state)

      });
 }
 
 
 
 
 render() {
  console.log(this.props);
  return (
   <div>
    <button onClick={this.findFederal}>
      Federal
       </button>
   </div>
  )
  }

 }


export default FederalReps;