
import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import FunctionalProgramming from "./functional-programming";
import Algorithms from "./algorithms.js";
import MathFundamentals from "./math-fundamentals";
import MathsForCompSci from "./maths-for-comp-sci.js";
import CLanguage from "./c-language.js";
import Clojure from "./clojure.js";
import { slide as Menu } from 'react-burger-menu';


class SideBar extends Component {

    showSettings (event) {
    event.preventDefault();
   
  }
  render() {
    return (
       <HashRouter>
            <div>
            <Menu>
        <a> <NavLink exact to="/">Home</NavLink></a>
        <a> <NavLink to="/MathFundamentals">Math Fundamentals</NavLink></a>
            <a> <NavLink to="/MathsForCompSci">Maths for Computer Science</NavLink></a>
<a><NavLink to="/Algorithms">Algorithms</NavLink></a>
<a><NavLink to="/clojure">Clojure</NavLink></a>
<a><NavLink to="/FunctionalProgramming">Functional Programming</NavLink></a>
<a><NavLink to="/CLanguage">C Language</NavLink></a>
<a><NavLink to="/contact">Machine Learning</NavLink></a>

        
            </Menu>

         </div>
      </HashRouter>
    );
  }

}
 
export default SideBar;
