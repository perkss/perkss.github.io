
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
 constructor(props) {
    super(props);
    this.handleMenuClick =  this.handleMenuClick.bind(this);
  }

    
   handleMenuClick (event) {
       event.preventDefault();
         console.log('closing menu');
           this.setState({isOpen: false});
     }


    
  render() {
    return (
       <HashRouter>

            <Menu isOpen={ false }>
            <a onClick={ this.handleMenuClick }  > <NavLink exact to="/">Home</NavLink></a>
            <a  onClick={ this.handleMenuClick } > <NavLink to="/MathFundamentals">Math Fundamentals</NavLink></a>
            <a  onClick={ this.handleMenuClick } > <NavLink to="/MathsForCompSci">Maths for Computer Science</NavLink></a>
            <a onClick={ this.handleMenuClick } ><NavLink to="/Algorithms">Algorithms</NavLink></a>
            <a onClick={ this.handleMenuClick } ><NavLink to="/clojure">Clojure</NavLink></a>
            <a onClick={ this.handleMenuClick } ><NavLink to="/FunctionalProgramming">Functional Programming</NavLink></a>
            <a onClick={ this.handleMenuClick } ><NavLink to="/CLanguage">C Language</NavLink></a>
            <a onClick={ this.handleMenuClick } ><NavLink to="/contact">Machine Learning</NavLink></a>
                    
            </Menu>


      </HashRouter>
    );
  }

}
 
export default SideBar;
