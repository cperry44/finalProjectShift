//required modules for React to work. 
import React, { Component } from 'react';


//styling for the main app.
import './App.css';


//components to the app imports. 
import SearchBar from "../components/SearchBar/searchBar.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className = "title">Voter Assist</div>
          <SearchBar />
        </header>
      </div>
    );
  }
}

export default App;
