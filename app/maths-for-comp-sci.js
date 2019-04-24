import React from "react";
import Latex from 'react-latex';
import {InlineMath, BlockMath} from 'react-katex';

import BlogPage from './blog-page.js';

const mathsForCompSci = {

    title: 'Maths for Computer Science',
    contents: '',
    text: [<div>


        <p><strong>Please ensure you check out Math Fundamentals before proceeding into the world of Maths for Computer
            Science.</strong></p>

        <p>Hitting the blog very soon. Next infact! </p>


        <h3>Proofs</h3>
        <h4>Intro</h4>
        <p>To begin with proofs we will list some key defintions. A proposition is a statement that can either be true
            or false. This adds limitations to statements but it is difficult to know if the statement is true or false.
            This relates to computer programming as developers we need to ensure correctness of our programs. Similarly
            a <strong>predicate</strong> is a proposition whose truth depends on the value of one or more
            variables. <strong>Axioms</strong> are propositions that are accepted as true. A <strong>proof</strong> is a
            sequence of logical deductions found from axioms and previously proved statements that concludes with the
            porposition in question (Lehman et al ...). A <strong>theorem</strong> is a result that has been proved true
            and a <strong>lemma</strong> is a preliminary proposition proved true. </p>


        <h4>Proof Methods</h4>
        <h6>Proof by Direct Implication</h6>
        <p>Running through the example provided in <a href="https://jeremykun.com/2013/02/16/methods-of-proof-direct-implication/">Jeremy Kun awesome primers! </a>
        lets prove that <i>that one set is a subset of another</i>. Obviously if the sets are finite then you could manually check each value, computer could do this fairly fast,
        but it would not be efficient! Lets define two sets:</p>



        <h4>Well Ordering Principle</h4>
        <p></p>
        <h4>Logic and Propositions</h4>
        <p></p>

        <h4>Quantifiers and Predicate Logic</h4>
        <p></p>
        <p></p>
        <h4>Sets</h4>
        <p></p>
        <h4>Binary Relations</h4>
        <p></p>
        <h4>Induction</h4>
        <p></p>
        <h4>State Machines</h4>
        <p></p>
        <h4>Recursive Definition</h4>
        <p></p>
        <h4>Infinite Sets</h4>
        <p></p>
        <h3>Structures</h3>
        <p></p>
        <h3>Counting</h3>
        <p></p>
        <h3>Probability</h3>
        <p></p>

    </div>]

};


const MathsForCompSciPage = (props) => {

    return (


        <BlogPage
            title={mathsForCompSci.title}
            contents={mathsForCompSci.contents}
            text={mathsForCompSci.text}
        />
    );

}

export default MathsForCompSciPage;
