//==============Required Components=========


//required modules for React to work. 
import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom'

//styling for the main app.
import './App.css';

//components to the app imports. 
import SearchBar from "../components/SearchBar/search_bar";
import FederalReps from "../components/FederalList/federal_reps.js";

//==============MasterApp==============
class MasterApp extends Component {
  constructor () {
    super()

    this.state = {
      addressFromSearchBar: '',
      representativesInfoByAddress: {}
    };
  
    this.voterInformation = this.voterInformation.bind(this)
  }
    voterInformation (props){
      this.setState({ addressFromSearchBar : props.address })
      this.setState({ representativesInfoByAddress : props.representativesInfo});
     console.log("This is state");
     console.log(this.state);
    };

  
  render() {
    return (
      <div className="App">
       <BrowserRouter>
        <Route exact path="/" component={SearchBar} resultReturn = {this.voterInformation}  /> 
       </BrowserRouter>
      </div>
    );
  }
}

export default MasterApp;