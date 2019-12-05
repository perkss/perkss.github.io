import React from "react";
import {Route} from "react-router-dom";

import Architecture from './distributed-systems/architecture';
import Databases from './distributed-systems/databases';
import DistSIntro from './distributed-systems/dist-s-intro';
import DistributedAlgorithms from './distributed-systems/distributed-algorithms';
import FaultTolerance from './distributed-systems/fault-tolerance';
import Streaming from './distributed-systems/streaming';
import {HashLink as Link} from 'react-router-hash-link';
import BlogPage from './blog-page.js';
import "./../css/list-menu.css";

const DataSciencePage = ({match}) => {

    return (

        <BlogPage
            title='Distributed Systems'

            contents={
                <div className='center'>

                    <ul className='nav menu center'>

                        <li className='gray'>
                            <Link to={`${match.url}#text-body`}>
                                Distributed<br/>Systems
                            </Link>
                        </li>

                        <li className='quay-pink'>
                            <Link to={`${match.url}/DistributedAlgorithms#text-body`}>
                                Distributed<br/>Algorithms
                            </Link>
                        </li>
                        <li className='dark-blue'>
                            <Link to={`${match.url}/Architecture#text-body`}>
                                Architecture<br/>Patterns
                            </Link>
                        </li>
                        <li className='blue'>
                            <Link to={`${match.url}/Databases#text-body`}>
                                Distributed<br/>Databases
                            </Link>
                        </li>
                        <li className='teal'>
                            <Link to={`${match.url}/Streaming#text-body`}>
                                Stream<br/>Processing
                            </Link>

                        </li>
                        <li className='cyan'>
                            <Link to={`${match.url}/FaultTolerance#text-body`}>
                                Fault<br/>Tolerance
                            </Link>

                        </li>


                    </ul>
                </div>
            }


            text={<div>
                <Route exact path={`${match.url}`} component={DistSIntro}/>

                <Route path={`${match.url}/DistributedAlgorithms`} component={DistributedAlgorithms}/>
                <Route path={`${match.url}/Architecture`} component={Architecture}/>
                <Route path={`${match.url}/Databases`} component={Databases}/>

                <Route path={`${match.url}/Streaming`} component={Streaming}/>
                <Route path={`${match.url}/FaultTolerance`} component={FaultTolerance}/>
            </div>
            }


        />
    );
};


export default DataSciencePage;