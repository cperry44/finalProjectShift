//Required React components
import React, { Component } from "react";
import ReactDOM from 'react-dom'

//Required for http call 
import axios  from 'axios';

const BASE_URL = "https://www.googleapis.com/civicinfo/v2/representatives?"

const key = "AIzaSyAGXQCKyT0aUdZ30n3FJE9QD_fYFUb_7jY"
             
const address = "51 poppy trail durham City nc"
                

//component that will be passed to access voter information
export default class GetVoterInfo extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
  voterInfo:{},
  };
 }
 

 // componentDidMount() {
 

 //  fetch(`${BASE_URL}key=${key}&address=${address}`)
 //  .then(response => response.json())
 //  .then(
 //   (result) => {
 //    console.log(result);
 //   });
 //  }
  

  render() {
   return(
    <div>
     <h1>hello world </h1>
    </div>
   )
  }
}