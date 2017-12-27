import React, { Component } from "react";
import Latex from 'react-latex';
import BlogPage from './blog-page.js';

const mathsForCompSci = {

    title: 'Maths for Computer Science',
    contents: '',
    text: [ <div>


        <p><strong>Please ensure you check out Math Fundamentals before proceeding into the world of Maths for Computer Science.</strong></p>

<p>Hitting the blog very soon. Next infact!</p>

<Latex>What is $(3 \times 4) \div (5-3)$</Latex>
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
