import React, { Component } from 'react';
import Latex from 'react-latex';

const MathPreliminaries  = () => (


        <div>
        <h2>The Art of Computer Programming: Math Preliminaries</h2>

        <p>Welcome to the section on one of the most important texts in the computer science world The Art of Computer Programming (Knuth). This section will coer the mathematical preliminaries section of the book from the first chapter. The Concrete Mathematics book we also study in the next section has taken the preliminaries even further. So if this is tricky for you please read Concrete Mathematics first. </p>
    
        <h3>Mathematical Induction</h3>

        <p>The book starts with a proof using Mathematical Induction. (A initially very scary concept, but please think like a mathematician not an engineer). The steps for mathematical induction are: </p> <ol  className="text-list">
        <li>Give a proof that P(1) is true. Simply verify that the method works for the number 1.</li>
        <li>Assume that the method works for an arbitrary number, k.</li>
        <li>Give a proof that “if all of P(1), P (2), ..., P (n) are true, then P(n + 1) is also true”; this proof should be valid for any positive integer n. Simply prove that if the method works for an arbitrary number k, then it work for the number k+1, too.</li>
        <li>After the 3 steps were completed, then the formula works for any number.</li>

    </ol>
<p>
    </p>

    
    </div>

);

export default MathPreliminaries;
