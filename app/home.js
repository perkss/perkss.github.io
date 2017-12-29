import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import SideBar from './side-bar.js';
import Header from './header.js';
import HomeTemplate from './home-page.js';
import FunctionalProgrammingPage from "./functional-programming";
import AlgorithmsPage from "./algorithms.js";
import MathFundamentalsPage from "./math-fundamentals";
import MathsForCompSciPage from "./maths-for-comp-sci.js";
import CLanguagePage from "./c-language.js";
import ClojurePage from "./clojure.js";
import './../css/nav-grid.css';



const home = {

   title: 'The Perks of Computer Science',
    contents: [

     <div className='center'>
           
               <ul className='nav nav-grid center'>
               
            <li className='amber'>
            <NavLink to={"/MathFundamentals"}>
         Math<br/>Fundamentals
       </NavLink>
           </li>
     
           <li className='cyan'>
            <NavLink to={"/MathsForCompSci"}>
          Maths for<br/>Computer Science
       </NavLink>
           </li>
               <li className='pink'>
        <NavLink to={"/Algorithms"}>
         Algorithms
        </NavLink>
           </li>
           <li className='purple'>
           <NavLink to={"/clojure"}>
          Clojure
           </NavLink>
      
                </li>

                 <li className='sixth-gold'>
           <NavLink to={"/FunctionalProgramming"}>
           Functional<br/>Programming
           </NavLink>
      
                </li>

                 <li className='orange'>
           <NavLink to={"/CLanguage"}>
           C <br/>Programming
           </NavLink>
      
                </li>

                 <li className='yellow'>
           <NavLink to={"/ProgrammingPearls"}>
           Programming<br/>Pearls
           </NavLink>
      
           </li>
    
        
           </ul>
</div>

    ],
    text: [<div><p>Hello and congratulations on finding <strong>The Perks of Computer Science</strong>. This blog will become a treasure chest of technical and mathematical knowledge for all those interested in computer science and programming to use. Suitable for all but especially for those who like to learn with all the details and solid examples, no more algorithm teachers assumptions.</p>

            <p>Please check the side menu on the top left. We will be covering fundamental maths looking in depth and Concrete Mathematics. Along with SICP to get some functional  programming languages using Clojure.</p>

<p>Build in PROGRESS we will be GROWING quickly!</p></div>]
    
};

const HomePage = (props) => {
      return (
        <HomeTemplate  
          title={home.title}
          contents={home.contents}
          text={home.text}
        />
      );
    }

 
export default HomePage;
