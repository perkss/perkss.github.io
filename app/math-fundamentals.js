import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import MathPrerequisites from './math-fundamentals/math-prerequisites';
import BiteSizeMath from './math-fundamentals/bitesize-maths';

const MathFundamentals = ({ match })  => 
  
   (
      <div>
            <h2>Math Fundamentals</h2>



  <ul>
     
           <li>
            <NavLink to={`${match.url}/BiteSizeMath`}>
          Bitesize Math
       </NavLink>
           <li>
           Concrete Mathematics
           <ul>
           <li>
           Recurrent Problems
       </li>
           <li>
           Sums
           </li>
           <li>
           Integer Functions
           </li>
           <li>
           Number Theory
           </li>
           <li>
           Binomial Coefficients
           </li>
           <li>
           Special Numbers
       </li>
         
           <li>
           Generating Functions
           </li>
           </ul>
           </li>
           </li>
            <li>
        <NavLink to={`${match.url}/MathPrerequisites`}>
          Math Prerequisites
        </NavLink>
           </li>
   </ul>


        <Route path={`${match.url}/MathPrerequisites`} component={MathPrerequisites}/>   
           <Route path={`${match.url}/BiteSizeMath`} component={BiteSizeMath}/>


       
       
             </div>
    );
  


export default MathFundamentals;
