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


class Content extends Component {

    render() {
        return (
              <HashRouter>
        <div>

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

    
}

export default Content;
