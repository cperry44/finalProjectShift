// this section imports all the required elements from other files

import React, {Component} from "react";
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'; // Redirect is used on line 29 in an if/else


// need for shaping navbar to the left
import './nav_bar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
     addressFromSearchBar: '',
     representativesInfoByAddress: {}
   };
 
   this.voterInformation = this.voterInformation.bind(this)
 }
   voterInformation (props){
     this.setState({ addressFromSearchBar : props.address })
     this.setState({ representativesInfoByAddress : props.representativesInfo});
    console.log("This is navbar state");
    console.log(this.state);
   };
   if(props){this.voterInformation();}
  render() {
 
    return (
     <div id = "exp-rep-navbar">
       <ul className = "navbar-ul ">
        <li>
          <Link to = {`/federal`} id = "expenses" className="navbar-li-a">
            Federal  
          </Link>
        </li>
        <li>
          <Link to = {`/state`} id = "reports" className = "navbar-li-a">
            State
          </Link>
        </li>
        <li>
          <Link to = {`/local`} id = "inbox" className = "navbar-li-a">
            Local
          </Link>
        </li>
      </ul>
     </div>
     );
    }
  }



export default NavBar;