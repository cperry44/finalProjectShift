// this section imports all the required elements from other files

import React, {Component} from "react";



// need for shaping navbar to the left
import './nav_bar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
     addressFromSearchBar: '',
     representativesInfoByAddress: {}
   };
  }
 
   
  render() {
   console.log(this.state)
    return (
     <div id = "exp-rep-navbar">
      <h3>Current Address</h3>
      <span>{this.props.address}</span>
        <h3>National</h3>
        <h3>State</h3>
        {/* <h3>Local</h3> */}
     </div>
     );
    }
  }



export default NavBar;