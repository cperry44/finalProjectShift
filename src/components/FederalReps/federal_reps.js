//Required React components
import React, { Component } from "react";

//Required for http call 
import axios  from 'axios';

//components to the app imports. 
// import SearchBar from "../components/SearchBar/search_bar";

class FederalReps extends Component {
 constructor (props) {
  super(props)
  this.state = {
   officials: this.props.officials ? this.props.officials : []
  };
 }

 topLevel = "President"
 President = "President"
 Senator1 = "Senator"
 Senator2 = "Senator"
 CongressMan = "Representative"

 render() {
  console.log(this.props)
  return(
   <div>
    <div>
    {
     this.state.officials.map(official => {
      return ({official})
     })
    }
    
    
   
     </div>
    
    <p>{this.Senator1}</p>
    <p>{this.Senator2}</p>
    <p>{this.CongressMan}</p>
   </div>
  );
 }
}
export default FederalReps