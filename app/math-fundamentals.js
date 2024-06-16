import React from "react";
import {Route} from "react-router-dom";

import MathIntro from './math-fundamentals/math-intro';
import MathPrerequisites from './math-fundamentals/math-prerequisites';
import BiteSizeMath from './math-fundamentals/bitesize-maths';
import ConcreteMathematics from './math-fundamentals/concrete-mathematics';
import MathPreliminaries from './math-fundamentals/math-preliminaries';
import DiscreteMaths from './math-fundamentals/discrete-maths';
import FinanceMathematics from './math-fundamentals/finance-maths';
import {HashLink as Link} from 'react-router-hash-link';
import BlogPage from './blog-page.js';
import "./../css/list-menu.css";


const MathFundamentals = ({match}) => {

    return (

        <BlogPage
            title='Math Fundamentals'

            contents={
                <div className='center'>

                    <ul className='nav menu center'>

                        <li className='gray'>
                            <Link to={`${match.url}#text-body`}>
                                Welcome to<br/>Maths
                            </Link>
                        </li>

                        <li className='quay-pink'>
                            <Link to={`${match.url}/BiteSizeMath#text-body`}>
                                Foundational<br/>Math
                            </Link>
                        </li>
                        <li className='dark-blue'>
                            <Link to={`${match.url}/MathPrerequisites#text-body`}>
                                Math<br/>Prerequisites
                            </Link>
                        </li>

                        <li className='orange'>
                            <Link to={`${match.url}/ConcreteMathematics#text-body`}>
                                Calculus and<br/>Differential Equations
                            </Link>

                        </li>

                        <li className='blue'>
                            <Link to={`${match.url}/DiscreteMaths#text-body`}>
                                Discrete<br/>Maths
                            </Link>
                        </li>
                        <li className='teal'>
                            <Link to={`${match.url}/MathPreliminaries#text-body`}>
                                Statistics and<br/>Probability
                            </Link>

                        </li>


                        <li className='cyan'>
                            <Link to={`${match.url}/FinanceMathematics#text-body`}>
                                Mathematics for<br/>Finance
                            </Link>

                        </li>


                    </ul>
                </div>
            }


            text={<div>
                <Route exact path={`${match.url}`} component={MathIntro}/>

                <Route path={`${match.url}/MathPrerequisites`} component={MathPrerequisites}/>
                <Route path={`${match.url}/BiteSizeMath`} component={BiteSizeMath}/>
                <Route path={`${match.url}/DiscreteMaths`} component={DiscreteMaths}/>

                <Route path={`${match.url}/MathPreliminaries`} component={MathPreliminaries}/>
                <Route path={`${match.url}/ConcreteMathematics`} component={ConcreteMathematics}/>
                <Route path={`${match.url}/FinanceMathematics`} component={FinanceMathematics}/>
            </div>
            }


        />
    );
};


export default MathFundamentals;
