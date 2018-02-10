import React, { Component } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, docco } from 'react-syntax-highlighter/styles/hljs';
import BlogPage from './blog-page.js';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import { HashLink as Link } from 'react-router-hash-link';
import Eggplant from './clojure-posts/eggplant';
import CassandraClojure from './clojure-posts/cassandra';
import KafkaClojure from './clojure-posts/kafka';

const ClojurePage = ({ match }) =>  {

    return (
            <BlogPage
        title='Hipster Clojure'
        contents={<div className='center'>
			<ul className='nav menu center'>
			<li className='gray'>
			<Link to={`${match.url}#text-body`}>
			Eggplant</Link>
				  </li>
				    <li className='quay-pink'>
				  	<Link to={`${match.url}/CassandraClojure#text-body`}>
			Cassandra</Link>
				  </li>
				   <li className='dark-blue'>
				  	<Link to={`${match.url}/KafkaClojure#text-body`}>
			Kafka</Link>
				  </li>
				  
				  </ul>
				 </div>}
		
        text={<div>
			  <Route exact path={`${match.url}`} component={Eggplant} />
			  <Route exact path={`${match.url}/CassandraClojure`} component={CassandraClojure} />
			  	<Route exact path={`${match.url}/KafkaClojure`} component={KafkaClojure} />
			</div>
			 }
		/>
    );

}

export default ClojurePage;
