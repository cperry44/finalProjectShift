//Required React components
import React, { Component } from "react";

//Required for http call 
// import axios  from 'axios';

import NavBar from '../NavBar/nav_bar.js';

const BASE_URL = "https://www.googleapis.com/civicinfo/v2/representatives?"

const key = "AIzaSyAGXQCKyT0aUdZ30n3FJE9QD_fYFUb_7jY"
             
// const address = "  51 poppy trail durham nc 27713  "

//the class SearchBar will be exported to App to create the Search page. 
class SearchBar extends Component {

  constructor(props) {
     super(props);

     this.state = {
        address: "",
        representativesInfo: {}
      };
     this.handleClick = this.handleClick.bind(this);
  }

  render() {
   return (
     <div className="search-bar">
     <div className = "title">Voter Assist</div>
     <NavBar resultReturn = {this.voterInformation}  />
      <input
        placeholder = "Address"
        value = {this.state.address}
          onChange = {event =>this.onInputChange(event.target.value)}
       
       />
       <button onClick={this.handleClick}>
       Submit
       </button>

       <h1>{this.state.address}</h1>
      
     </div>
   );
  }

  resultReturn(){
    return this.state
  }


   //When the submit button is clicked this fuction will run, this is the api cal.  
   handleClick() {

    console.log(this.state)
    fetch(`${BASE_URL}key=${key}&address=${this.state.address}`)
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({ representativesInfo : result })
          // console.log(this.state);
          // this.props.resultReturn(this.state)
          // this.props.resultReturn(this.state);
        }).then(this.props.resultReturn(this.state));
  }

  //sets state and logs what you are typing to see if it is correct. 
  onInputChange(address){
    this.setState({address});
    // this.props.resultReturn(this.state);
  }

}


export default SearchBar;