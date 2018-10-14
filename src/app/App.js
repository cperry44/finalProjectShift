//required modules for React to work. 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Router, Route, Link } from 'react-router-dom';

//styling for the main app.
import './App.css';


//components to the app imports. 
import SearchBar from "../components/SearchBar/search_bar";
import FederalReps from "../components/FederalReps/federal_reps.js";
import NavBar from "../components/NavBar/nav_bar.js";


class App extends Component {
  constructor () {
    super()

    this.state = {
      addressFromSearchBar: '51 poppy trail durham nc 27713',
      representativesInfoByAddress: [{
        Office: "President of the United States",
        People: [{
          address:[{
            line1: "The White House",
            line2: "1600 Pennsylvania Avenue NW", city: "Washington", 
            state: "DC",
             zip: "20500"
          }],
          channels:[
            {type: "GooglePlus", id: "+whitehouse"},
            {type: "Facebook", id: "whitehouse"},
            {type: "Twitter", id: "potus"},
            {type: "YouTube", id: "whitehouse"}
          ],
          name: "Donald J. Trump",
          party: "Republican",
          phones: ["(202) 456-1111"],
          photoUrl: "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/PE%20Color.jpg",
          urls: ["http://www.whitehouse.gov/"]
        }]
      }]
    };
  
    this.voterInformation = this.voterInformation.bind(this)
  }
    voterInformation (props){
      this.setState({ addressFromSearchBar : props.address })
      this.setState({ representativesInfoByAddress : props.representativesInfo});
     console.log("This is  app state");
     console.log(this.state);
    };

  
  render() {
    return (
      <div id = "App">
        <div id = "app-title">Voter Assist</div>
        <header id = "app-header">
          
          <NavBar address = {this.state.addressFromSearchBar}/>
          <SearchBar resultReturn = {this.voterInformation}  />
          {/* <FederalReps reps= {this.state.representativesInfoByAddress} /> */}
        </header>
      </div>
    );
  }
}


export default App;
