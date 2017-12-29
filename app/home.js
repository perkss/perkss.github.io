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



const home = {

   title: 'The Perks of Computer Science',
    contents: [

     <div className='center'>
           
               <ul className='nav menu center'>
               
           <li>
            <NavLink to={"/MathFundamentals"}>
         Math Fundamentals
       </NavLink>
           </li>
     
           <li>
            <NavLink to={"/MathsForCompSci"}>
          Maths for Computer Science
       </NavLink>
           </li>
               <li>
        <NavLink to={"/Algorithms"}>
          Algorithms
        </NavLink>
           </li>
           <li>
           <NavLink to={"/clojure"}>
           Clojure
           </NavLink>
      
                </li>

                 <li>
           <NavLink to={"/FunctionalProgramming"}>
           Functional Programming
           </NavLink>
      
                </li>

                 <li>
           <NavLink to={"/CLanguage"}>
           C Programming
           </NavLink>
      
                </li>

                 <li>
           <NavLink to={"/ProgrammingPearls"}>
           Programming Pearls
           </NavLink>
      
           </li>
    
        
           </ul>
</div>

    ],
    text: [<div><p>Hello and congratulations on finding <strong>The Perks of Computer Science Ramblings</strong>. It will become a treasure chest of technical and mathematical knowledge for all those interested in computer science and programming to use. Suitable for all but especially for those who like to learn with all the details and solid examples, no more algorithm teachers assumptions.</p>

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
