import React, { Component } from "react";
import { BlockMath } from 'react-katex';


import BlogPage from './blog-page.js';

const mathsForCompSci = {

    title: 'Maths for Computer Science',
    contents: '',
    text: [ <div>


        <p><strong>Please ensure you check out Math Fundamentals before proceeding into the world of Maths for Computer Science.</strong></p>

<p>Hitting the blog very soon. Next infact! <BlockMath math="a^m \times a^n = a^{m+n}"></BlockMath> </p>


                                                                                                           <h3>Proofs</h3>
                                                                                                           <h4>Intro</h4>
                                                                                                           <h4>Proof Methods</h4>
                                                                                                           <h4>Well Ordering Principle</h4>

                                                                                                           <h4>Logic and Propositions</h4>
                                                                                                           <h4>Quantifiers and Predicate Logic</h4>
                                                                                                           <h4>Sets</h4>

                                                                                                           <h4>Binary Relations</h4>
                                                                                                           <h4>Induction</h4>
                                                                                                           <h4>State Machines</h4>
                                                                                                           <h4>Recursive Definition</h4>
                                                                                                              <h4>Infinite Sets</h4>
                                                                                                           <h3>Structures</h3>

                                                                                                           <h3>Counting</h3>
                                                                                                           <h3>Probability</h3>

                                                                                                          
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
