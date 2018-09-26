import React, { Component } from 'react';
import Latex from 'react-latex';
import { InlineMath, BlockMath } from 'react-katex';

const DiscreteMaths = () => (

        <div>

        <h2>Discrete Mathematics</h2>

        <p>Discrete Mathematics is taught on most Computer Science courses and is going to be required reading for when we move onto the Art of Computer Programming and Concrete Mathematics. Two great books on this subject are <a href="https://www.amazon.co.uk/Discrete-Mathematics-Elementary-Beyond-Undergraduate/dp/0387955852/ref=sr_1_2?ie=UTF8&qid=1537684223&sr=8-2&keywords=discrete+mathematics+springer">Discrete Mathematics: Elementary and Beyond</a> and <a href="https://www.amazon.co.uk/DISCRETE-MATHEMATICS-ITS-APPLN-GE/dp/9814670138/ref=sr_1_2?ie=UTF8&qid=1537684203&sr=8-2&keywords=discrete+mathematics">Discrete Mathematics and it Applications</a>. I would recommend studying these two books if time permits, I have studied one of them and this section will be the parts I missed or need to recap on rather than the whole text.</p>

        <h3>Sequences and Summations</h3>
        <h4>Sequence</h4>
        <p>A sequence is a structure used to represent an ordered list it can be finite or infinite. For example <InlineMath math="1, 2, 3, 4, 5"/> is an example of a finite sequence with five terms and <InlineMath math="1, 3, 9, ... 3^n"/> is an infinite sequence. The notation <InlineMath math="a_n"/> is used to denote a single entry in the sequence and is called a term.</p>

        <p>Now lets take a simple example of a sequence.</p>

        <BlockMath math="a_n = \frac{1}{n}"></BlockMath>

        <BlockMath math="a_1,a_2,a_3 .... ,"></BlockMath>
        <p>This sequence will start with the following:</p>
        <BlockMath math="\frac{1}{1},\frac{1}{2},\frac{1}{3} .... ,"></BlockMath>

        <p>Two other important definitions are geometric progression and arithmetic progression I will leave it up to the reader to investigate these.</p>

        <h4>Recurrence Relation</h4>
        <p>When we defined the sequence above we provided explicit formulas for the terms. Another way is to provide the initial terms and a rule for defining later terms. This is a recurrence relation. A sequence is said to be a solution of a recurrence relation if its terms satisfy the recurrence relation.</p>
        <p>Lets check a nice and easy example. This example provides a rule of <InlineMath math="a_n = a_{n-1} + 3"/> for <InlineMath math="n = 1,2,3 ... "/> for the initial term of <InlineMath math="a_0 = 2"/> This then produces the sequence <InlineMath math="a_1 = a_0 + 3 = 2 + 3 = 5"/> then followed by <InlineMath math="a_2 = 5 + 3 = 8"/> and <InlineMath math="a_3 = 8 + 3 = 11"/></p>

        <h4>Special Integer Sequences</h4>
        <p>With the above we were given the closed formula (the pattern the sequence is running in forumla) a recurrence relation or other type of general rule. What if this is not provided, well given the firt few values of the sequence then we have to make an educated conjecture (guess) about the identity of the sequence. Some common things to look for are there runs of the same value inthe sequence, are terms made from previous terms by adding, subtracting, multiplying or manipulting them in some way. Or are there specific cycles. </p>

        <h4>Summations</h4>
        <p>Summations are simply sequences that are the additions of terms of a sequence. These expressions are expressed using the sigma notation.</p>

        <BlockMath math="\sum_{j=m}^n a_j"></BlockMath>

        <p>This is read as the sum from  <InlineMath math="j = m"/>, to  <InlineMath math="j = n"/> of  <InlineMath math="a_j"/> We have used the variable j to be used as the index of the summation but any variable can be used. We start with a lower limit m and a upper limit of n.</p>


        <h3>Number Theory</h3>

        <h4>Division</h4>
        <p>When <i>a</i> divides <i>b</i> we say that <i>a</i> is a facotr or divisor of <i>b</i> and that <i>b</i> is a multiple of <i>a</i>. When dividing we gave the quotient as q, a as the dividend, d as the divisor and r as the remainder. It follows this formula.</p>

        <BlockMath math="q = a/d"></BlockMath>
        <BlockMath math="r = a \mod d"></BlockMath>

        <p>Lets see an example of this definition above. We have 113 divided by 12:</p>

        <BlockMath math="113 = 12*9+5"></BlockMath>

        <p>Hence, the quotient when 113 is divided by 12 is 9 = 113 div 12 and the remainder is 5 = 113 mod 12.</p>

    </div>
);

export default DiscreteMaths;
