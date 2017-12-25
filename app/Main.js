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

class Main extends Component {
  render() {
    return (
       <HashRouter>
        <div>
         
          <ul className="header" id="topNav">
            <li><NavLink exact to="/">Home</NavLink></li>
<li><NavLink to="/MathFundamentals">Math Fundamentals</NavLink></li>
            <li><NavLink to="/MathsForCompSci">Maths for Computer Science</NavLink></li>
            <li><NavLink to="/Algorithms">Algorithms</NavLink></li>
<li><NavLink to="/clojure">Clojure</NavLink></li>
<li><NavLink to="/FunctionalProgramming">Functional Programming</NavLink></li>
<li><NavLink to="/CLanguage">C Language</NavLink></li>
<li><NavLink to="/contact">Machine Learning</NavLink></li>
          </ul>
          <div className="content">
                   <Route exact path="/" component={Home}/>
            <Route path="/MathsForCompSci" component={MathsForCompSci}/>
            <Route path="/Algorithms" component={Algorithms}/>
 <Route path="/FunctionalProgramming" component={FunctionalProgramming}/>
            <Route path="/MathFundamentals" component={MathFundamentals}/>
          <Route path="/CLanguage" component={CLanguage}/>
          <Route path="/Clojure" component={Clojure}/>
            </div>


        
        </div>
      </HashRouter>
    );
  }
burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}

}
 
export default Main;
