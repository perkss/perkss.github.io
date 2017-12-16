import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";
import FunctionalProgramming from "./functional-programming";
import Algorithms from "./algorithms.js";
import BasicMaths from "./basic-maths.js";
import MathsForCompSci from "./maths-for-comp-sci.js"

class Main extends Component {
  render() {
    return (
       <HashRouter>
        <div>
         
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/MathsForCompSci">Maths for Computer Science</NavLink></li>
            <li><NavLink to="/Algorithms">Algorithms</NavLink></li>
<li><NavLink to="/contact">Clojure</NavLink></li>
<li><NavLink to="/FunctionalProgramming">Functional Programming</NavLink></li>
<li><NavLink to="/contact">C</NavLink></li>
<li><NavLink to="/contact">Machine Learning</NavLink></li>
<li><NavLink to="/BasicMaths">Maths Fundamentals</NavLink></li>
          </ul>
          <div className="content">
                   <Route exact path="/" component={Home}/>
            <Route path="/MathsForCompSci" component={MathsForCompSci}/>
            <Route path="/Algorithms" component={Algorithms}/>
 <Route path="/FunctionalProgramming" component={FunctionalProgramming}/>
            <Route path="/BasicMaths" component={BasicMaths}/>
                       </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
