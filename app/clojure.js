import React from "react";
import BlogPage from './blog-page.js';
import {Route} from "react-router-dom";

import {HashLink as Link} from 'react-router-hash-link';
import Eggplant from './clojure-posts/eggplant';
import CassandraClojure from './clojure-posts/cassandra';
import KafkaClojure from './clojure-posts/kafka';
import ConcurrencyClojure from './clojure-posts/concurrency';
import DataStructuresClojure from './clojure-posts/data-structures';
import GarbageCollection from './clojure-posts/garbage-collection';
import Specs from './clojure-posts/specs.js';

const ClojurePage = ({match}) => {

    return (
        <BlogPage
            title='Hipster Clojure'
            contents={<div className='center'>
                <ul className='nav menu center'>
                    <li className='gray'>
                        <Link to={`${match.url}#text-body`}>
                            Eggplant<br/>BDD</Link>
                    </li>
                    <li className='quay-pink'>
                        <Link to={`${match.url}/CassandraClojure#text-body`}>
                            Cassandra<br/>API</Link>
                    </li>
                    <li className='dark-blue'>
                        <Link to={`${match.url}/KafkaClojure#text-body`}>
                            Kafka<br/>API</Link>
                    </li>
                    <li className='teal'>
                        <Link to={`${match.url}/ConcurrencyClojure#text-body`}>
                            Concurrency<br/>Clojure</Link>
                    </li>
                    <li className='yellow'>
                        <Link to={`${match.url}/DataStructuresClojure#text-body`}>
                            Data<br/>Structures</Link>
                    </li>
                    <li className='orange'>
                        <Link to={`${match.url}/GarbageCollection#text-body`}>
                            Garbage<br/>Collection</Link>
                    </li>
                    <li className='gray'>
                        <Link to={`${match.url}/Specs#text-body`}>
                            Skateboards<br/>and Specs</Link>
                    </li>

                </ul>
            </div>}

            text={<div>
                <Route exact path={`${match.url}`} component={Eggplant}/>
                <Route exact path={`${match.url}/CassandraClojure`} component={CassandraClojure}/>
                <Route exact path={`${match.url}/KafkaClojure`} component={KafkaClojure}/>
                <Route exact path={`${match.url}/ConcurrencyClojure`} component={ConcurrencyClojure}/>
                <Route exact path={`${match.url}/DataStructuresClojure`} component={DataStructuresClojure}/>
                <Route exact path={`${match.url}/GarbageCollection`} component={GarbageCollection}/>

                <Route exact path={`${match.url}/Specs`} component={Specs}/>
            </div>
            }
        />
    );

}

export default ClojurePage;
