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
import { HashLink as Link } from 'react-router-hash-link';



const home = {

   title: 'The Perks of Computer Science',
    contents: [

     <div className='center'>
           
               <ul className='nav nav-grid center'>
               
            <li className='amber'>
            <Link to={"/MathFundamentals#header"}>
         Math<br/>Fundamentals
       </Link>
           </li>
     
           <li className='cyan'>
            <NavLink to={"/MathsForCompSci"}>
          Maths for<br/>Computer Science
       </NavLink>
           </li>
               <li className='pink'>
        <NavLink to={"/Algorithms"}>
         Algorithm<br/>Fun
        </NavLink>
           </li>
           <li className='purple'>
           <NavLink to={"/clojure"}>
          Some Hipster<br/>Clojure
           </NavLink>
      
                </li>

                 <li className='sixth-gold'>
           <NavLink to={"/FunctionalProgramming"}>
           Functional<br/>Programming
           </NavLink>
      
                </li>

                 <li className='orange'>
           <NavLink to={"/CLanguage"}>
           A little bit of<br/>C Programming
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

                                                                                                                                                                                       <p>Please check the side menu on the top left. We will be covering the <strong>Fundamentals of Mathematics&#39;s</strong> starting with some BiteSize Maths a few Prerequisites from Stanford and finally looking in depth at the book Concrete Mathematics. A study of <strong>Mathematics for Computer Science</strong> using course content from <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/index.htm">MIT</a> and <a href="http://web.stanford.edu/class/cs103/">Stanford</a> follows using the fundamental knowledge. <strong>Algorithms</strong> will then be discussed in detail building them imperatively and functionally using C and Clojure respectively. We will then dig into the world of <strong>Functional Programming</strong> using the text book the <a href="https://mitpress.mit.edu/sicp/">Structure and Interpretation of Computer Programs (SICP)</a> as the basis and Clojure as the main language. Check out <strong>A Little bit of C Programming</strong> for some Pointer Madness. Which will then lead to some <strong>Programming Pearls</strong> for all to learn from a case study of the <a href="https://www.amazon.co.uk/Programming-Pearls-Joe-Bentley/dp/8177588583">book</a>.</p>

                                                                                                                                                                                       <p>Build in PROGRESS we will be GROWING quickly!</p>

                                                                                                                                                                                       <p><strong>Most of all have fun!</strong></p></div>]
    
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
