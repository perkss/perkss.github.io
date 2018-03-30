import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import BlogPage from './blog-page.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, docco } from 'react-syntax-highlighter/styles/hljs';
import SICP from './functional-programming/sicp';
import LambdaCalculus from './functional-programming/lambda-calculus';
  


const FunctionalProgrammingPage = ({ match }) => {

	return (
		
		<BlogPage

		title='Functional Programming'

		contents={

        <div className='center'>
           
               <ul className='nav menu center'>
               
               <li className='gray'>
            <Link to={`${match.url}#text-body`}>
          Functional<br/>Programming
          </Link>
           </li>
     
           <li className='quay-pink'>
            <Link to={`${match.url}/LambdaCalculus#text-body`}>
          Lambda<br/>Calculus
       </Link>
			</li>
				</ul>

			</div>


	}    
	text={

            <div>
             <Route exact path={`${match.url}`} component={SICP} />
 
            <Route path={`${match.url}/LambdaCalculus`} component={LambdaCalculus}/>
			</div>

    }
       
       
       />
   );
}

    

export default FunctionalProgrammingPage;
