//Required React components
import React from "react";
// import ReactDOM from 'react-dom'

import NavBar from "../NavBar/nav_bar.js";
import './levels.css'

const BASE_URL = "https://www.googleapis.com/civicinfo/v2/representatives?"

const key = "AIzaSyAGXQCKyT0aUdZ30n3FJE9QD_fYFUb_7jY"


//component that will be passed to access voter information
export default class State extends React.Component {
   
  constructor(props) {
    super(props);

    this.state = {
       address: "1606 E Sharp Ave Spokane, WA 99202",
        representativesInfo: [
          {office:"President of the United States",
            people:[{Name: "Donald Trump"}]},
          {office: "Vice President",
            people:[ {name: "Pence"}]},
          {office: "Vice President",
            people:[{Name: "Pence"},{Name: "Pence"}]},
          {office: "Vice President",
            people:[{Name: "Pence"}]},
          {office: "Vice President",
            people:[{Name: "Pence"}]},
          {office: "Vice President",
            people:[{name: "Pence"}]},
          {office: "Vice President",
            people:[{Name: "Pence"},{Name: "Pence"}]},
          {office: "Vice President",
            people:[{Name: "Pence"}]}
        ]
     
   
     };
    this.handleClick = this.handleClick.bind(this);
 }

 //When the submit button is clicked this fuction will run, this is the api cal. 
 handleClick() {
  
   fetch(`${BASE_URL}key=${key}&address=${this.state.address}`)
     .then(response => response.json())
     .then(
       (result) => {
        //  console.log("this is result", result);
         let finalDataObject = result.offices.map( office => {
             return {
               "Office":office.name,
               "people":office.officialIndices.map((index) => {
                 return result.officials[index]
               })
             }
         });
         console.log("this is final data object")
         console.log(finalDataObject);
         



         this.setState({ representativesInfo : finalDataObject })
         // console.log(this.state);
         // this.props.resultReturn(this.state)
         
       });
 }

  render() {
   return(
    <div id = "state">

      <NavBar />
     <h1>State Representatives </h1>

     <div className = "executive"onClick={this.handleClick}>

       <h2>Executive</h2>
       <h4>{this.state.representativesInfo[4].Office}</h4>
       <h4>{this.state.representativesInfo[4].people[0].name}</h4>
       <h4>{this.state.representativesInfo[4].people[0].party}</h4>

     </div>

     <div className = "us-senate" onClick={this.handleClick}>

       <h2>Senate</h2>
       <h4>{this.state.representativesInfo[6].Office}</h4>
       <h4>{this.state.representativesInfo[6].people[0].name}</h4>
       <h4>{this.state.representativesInfo[2].people[0].party}</h4>
      
     </div>

     <div className = "us-house" onClick={this.handleClick}>
       <h2>House</h2>
       <h4>{this.state.representativesInfo[7].Office}</h4>
       <h4>{this.state.representativesInfo[7].people[0].name}</h4>
       <h4>{this.state.representativesInfo[7].people[0].party}</h4>
     </div>
    

    </div>
   )
  }
}
