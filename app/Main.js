import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";


class Main extends Component {
  render() {
    return (
       <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Maths for Computer Science</NavLink></li>
            <li><NavLink to="/contact">Algorithms</NavLink></li>
<li><NavLink to="/contact">Clojure</NavLink></li>
<li><NavLink to="/contact">Functional Programming</NavLink></li>
<li><NavLink to="/contact">C</NavLink></li>
<li><NavLink to="/contact">Machine Learning</NavLink></li>
<li><NavLink to="/contact">Published Work</NavLink></li>
          </ul>
          <div className="content">
                   <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
