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
import DevOpsPage from "./devops.js";
import ScrollToTopRoute from './scroll-to-top-route';



class Content extends Component {

    render() {
        return (
              <HashRouter>
                <div>
                <ScrollToTopRoute>

 <div className="content">
                   <Route exact path="/" component={HomePage}/>
            <Route path="/MathsForCompSci" component={MathsForCompSciPage}/>
                <Route path="/Algorithms" component={AlgorithmsPage}/>
 <Route path="/FunctionalProgramming" component={FunctionalProgrammingPage}/>
            <Route path="/MathFundamentals" component={MathFundamentalsPage}/>
          <Route path="/CLanguage" component={CLanguagePage}/>
                <Route path="/Clojure" component={ClojurePage}/>
                <Route path="/Devops" component={DevOpsPage}/>
            </div>


        </ScrollToTopRoute>
        </div>
 </HashRouter>
        );
    }


}

export default Content;
