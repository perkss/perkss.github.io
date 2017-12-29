import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import MathIntro from './math-fundamentals/math-intro';
import MathPrerequisites from './math-fundamentals/math-prerequisites';
import BiteSizeMath from './math-fundamentals/bitesize-maths';
import ConcreteMathematics from './math-fundamentals/concrete-mathematics';


import BlogPage from './blog-page.js';
import "./../css/list-menu.css";


const MathFundamentals = ({ match })  => {
  
   return (

       <BlogPage
       title='Math Fundamentals'

       contents={
           <div className='center'>
           
               <ul className='nav menu center'>
               
               <li className='gray'>
            <NavLink to={`${match.url}`}>
          Welcome to<br/>Maths
       </NavLink>
           </li>
     
           <li className='quay-pink'>
            <NavLink to={`${match.url}/BiteSizeMath`}>
          Bitesize<br/>Math
       </NavLink>
           </li>
               <li className='dark-blue'>
        <NavLink to={`${match.url}/MathPrerequisites`}>
          Math<br/>Prerequisites
        </NavLink>
           </li>
           <li className='teal'>
           <NavLink to={`${match.url}/ConcreteMathematics`}>
           Concrete<br/>Mathematics
           </NavLink>
      
           </li>
    
        
           </ul>
</div>
       }


       text={<div>
             <Route exact path={`${match.url}`} component={MathIntro} />
 
             <Route path={`${match.url}/MathPrerequisites`} component={MathPrerequisites}/>   
           <Route path={`${match.url}/BiteSizeMath`} component={BiteSizeMath}/>


        <Route path={`${match.url}/ConcreteMathematics`} component={ConcreteMathematics}/>
       </div>
            }
       
       
       />
   );
}
  


export default MathFundamentals;
