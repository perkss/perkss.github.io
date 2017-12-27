import React, { Component } from "react";
import Latex from 'react-latex';
import BlogPage from './blog-page.js';

const mathsForCompSci = {

    title: 'Maths for Computer Science',
    contents: '',
    text: [ <div>

<Latex>What is $(3/times 4) \div (5-3)$</Latex>
            <h2>Maths for Computer Science</h2>

        <p><strong>Please ensure you check out Math Fundamentals before proceeding into the world of Maths for Computer Science.</strong></p>

      </div>]

};


const MathsForCompSciPage = (props) =>  {

    return (


            <BlogPage
        title={mathsForCompSci.title}
        contents={mathsForCompSci.contents}
        text={mathsForCompSci.text}
        />
    );
 
}

export default MathsForCompSciPage;
