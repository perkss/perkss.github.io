import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import MathPrerequisites from './math-fundamentals/math-prerequisites';
import BiteSizeMath from './math-fundamentals/bitesize-maths';
import ConcreteMathematics from './math-fundamentals/concrete-mathematics';

const MathFundamentals = ({ match })  => 
  
   (
      <div>
            <h2>Math Fundamentals</h2>



  <ul>
     
           <li>
            <NavLink to={`${match.url}/BiteSizeMath`}>
          Bitesize Math
       </NavLink>
           </li>
               <li>
        <NavLink to={`${match.url}/MathPrerequisites`}>
          Math Prerequisites
        </NavLink>
           </li>
           <li>
           <NavLink to={`${match.url}/ConcreteMathematics`}>
           Concrete Mathematics
           </NavLink>
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
            <li>
           Discrete Probability
       </li>
            <li>
           Asymptotics
           </li>
           </ul>
           </li>
    
        
   </ul>


        <Route path={`${match.url}/MathPrerequisites`} component={MathPrerequisites}/>   
           <Route path={`${match.url}/BiteSizeMath`} component={BiteSizeMath}/>


        <Route path={`${match.url}/ConcreteMathematics`} component={ConcreteMathematics}/>
       
             </div>
    );
  


export default MathFundamentals;
