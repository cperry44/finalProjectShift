//required modules for React to work. 
import React, { Component } from 'react';


//styling for the main app.
import './App.css';


//components to the app imports. 
import SearchBar from "../components/SearchBar/search_bar";
import FederalReps from "../components/FederalReps/federal_reps.js";


class App extends Component {
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
     console.log("This is app state");
     console.log(this.state);
    };

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className = "title">Voter Assist</div>
          <SearchBar resultReturn = {this.voterInformation}  />
          <FederalReps Reps= {this.state.representativesInfoByAddress} />
        </header>
      </div>
    );
  }
}

export default App;
