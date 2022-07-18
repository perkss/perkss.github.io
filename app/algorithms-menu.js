import React from "react";
import {Route} from "react-router-dom";

import AlgorithmIntro from './algorithms/algorithms-intro';
import DataStructures from './algorithms/data-structures';
import DynamicProgramming from './algorithms/dynamic-programming';
import Sorting from './algorithms/sorting';
import Searching from './algorithms/searching';
import Graphs from './algorithms/graphs';
import Interview from './algorithms/interview';
import Intractable from './algorithms/intractable';
import Combinatorial from './algorithms/combinatorial';
import {HashLink as Link} from 'react-router-hash-link';
import BlogPage from './blog-page.js';
import "./../css/list-menu.css";


const AlgorithmsMenu = ({match}) => {

    return (

        <BlogPage
            title='Algorithms'

            contents={
                <div className='center'>

                    <ul className='nav menu center'>

                        <li className='gray'>
                            <Link to={`${match.url}#text-body`}>
                                Welcome to<br/>Algorithms
                            </Link>
                        </li>

                        <li className='quay-pink'>
                            <Link to={`${match.url}/DataStructures#text-body`}>
                                Data<br/>Structures
                            </Link>
                        </li>

                        <li className='teal'>
                            <Link to={`${match.url}/Searching#text-body`}>
                                Search<br/>Algorithms
                            </Link>

                        </li>

                        <li className='blue'>
                            <Link to={`${match.url}/Sorting#text-body`}>
                                Sorting<br/>Algorithms
                            </Link>
                        </li>

                        <li className='cyan'>
                            <Link to={`${match.url}/Graphs#text-body`}>
                                Trees and<br/>Graphs
                            </Link>

                        </li>

                        <li className='cyan'>
                            <Link to={`${match.url}/Combinatorial#text-body`}>
                                Combinatorial Search<br/>and Heuristics
                            </Link>

                        </li>

                        <li className='dark-blue'>
                            <Link to={`${match.url}/DynamicProgramming#text-body`}>
                                Dynamic<br/>Programming
                            </Link>
                        </li>

                        <li className='cyan'>
                            <Link to={`${match.url}/Intractable#text-body`}>
                                Intractable<br/>Problems
                            </Link>

                        </li>

                        <li className='quay-pink'>
                            <Link to={`${match.url}/Interview#text-body`}>
                                Interview<br/>Questions
                            </Link>
                        </li>


                    </ul>
                </div>
            }


            text={<div>
                <Route exact path={`${match.url}`} component={AlgorithmIntro}/>

                <Route path={`${match.url}/DataStructures`} component={DataStructures}/>
                <Route path={`${match.url}/Interview`} component={Interview}/>
                <Route path={`${match.url}/DynamicProgramming`} component={DynamicProgramming}/>
                <Route path={`${match.url}/Sorting`} component={Sorting}/>

                <Route path={`${match.url}/Searching`} component={Searching}/>
                <Route path={`${match.url}/Graphs`} component={Graphs}/>
                <Route path={`${match.url}/Intractable`} component={Intractable}/>
                <Route path={`${match.url}/Combinatorial`} component={Combinatorial}/>
            </div>
            }


        />
    );
};


export default AlgorithmsMenu;
