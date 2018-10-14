//Required React components
import React, { Component } from "react";



class FederalReps extends Component {
 constructor (props) {
  super(props)
  this.state = {
   officials: this.props.officials ? this.props.officials : []
  };
 }
 
 
 render() {
  console.log("this log is props")
  console.log(this.props)
  return(
   <div>
      <ul>
      {
      this.props.reps.map(r => (
       <li key ={r.Office}>
        <h3>{r.Office}</h3>
       </li>
      )) 
     }
    </ul> 
   
   </div>
  );
 }
}
export default FederalReps