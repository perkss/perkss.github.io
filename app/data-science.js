import React from "react";
import {Route} from "react-router-dom";

import MachineLearning from './data-science/machine-learning';
import DataScienceInfo from './data-science/data-science-info';
import DsIntro from './data-science/ds-intro'
import LinearRegression from './data-science/linear-regression';
import DeepLearning from './data-science/deep-learning';
import NLP from './data-science/nlp';
import {HashLink as Link} from 'react-router-hash-link';
import BlogPage from './blog-page.js';
import "./../css/list-menu.css";

const DataSciencePage = ({match}) => {

    return (

        <BlogPage
            title='Data Science'

            contents={
                <div className='center'>

                    <ul className='nav menu center'>

                        <li className='gray'>
                            <Link to={`${match.url}#text-body`}>
                                Welcome to<br/>Data Science
                            </Link>
                        </li>

                        <li className='quay-pink'>
                            <Link to={`${match.url}/MachineLearning#text-body`}>
                                Machine<br/>Learning
                            </Link>
                        </li>
                        <li className='dark-blue'>
                            <Link to={`${match.url}/DeepLearning#text-body`}>
                                Deep<br/>Learning
                            </Link>
                        </li>
                        <li className='blue'>
                            <Link to={`${match.url}/LinearRegression#text-body`}>
                                Linear <br/>Regression
                            </Link>
                        </li>
                        <li className='teal'>
                            <Link to={`${match.url}/DataScienceInfo#text-body`}>
                                Data<br/>Science
                            </Link>

                        </li>
                        <li className='cyan'>
                            <Link to={`${match.url}/NLP#text-body`}>
                                Natural Language<br/>Processing
                            </Link>

                        </li>


                    </ul>
                </div>
            }


            text={<div>
                <Route exact path={`${match.url}`} component={DsIntro}/>

                <Route path={`${match.url}/MachineLearning`} component={MachineLearning}/>
                <Route path={`${match.url}/DeepLearning`} component={DeepLearning}/>
                <Route path={`${match.url}/LinearRegression`} component={LinearRegression}/>

                <Route path={`${match.url}/DataScienceInfo`} component={DataScienceInfo}/>
                <Route path={`${match.url}/NLP`} component={NLP}/>
            </div>
            }


        />
    );
};


export default DataSciencePage;