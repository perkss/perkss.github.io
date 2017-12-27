import React, { Component } from 'react';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import HomePage from "./home";
import FunctionalProgrammingPage from "./functional-programming.js";
import AlgorithmsPage from "./algorithms.js";
import MathFundamentalsPage from "./math-fundamentals";
import MathsForCompSciPage from "./maths-for-comp-sci.js";
import CLanguagePage from "./c-language.js";
import ClojurePage from "./clojure.js";



class Content extends Component {

    render() {
        return (
              <HashRouter>
        <div>

 <div className="content">
                   <Route exact path="/" component={HomePage}/>
            <Route path="/MathsForCompSci" component={MathsForCompSciPage}/>
                <Route path="/Algorithms" component={AlgorithmsPage}/>
 <Route path="/FunctionalProgramming" component={FunctionalProgrammingPage}/>
            <Route path="/MathFundamentals" component={MathFundamentalsPage}/>
          <Route path="/CLanguage" component={CLanguagePage}/>
          <Route path="/Clojure" component={ClojurePage}/>
            </div>


        
        </div>
 </HashRouter>
        );
    }

    
}

export default Content;
