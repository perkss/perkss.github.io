import React from 'react';
import {BlockMath, InlineMath} from 'react-katex';
import {HashLink as Link} from 'react-router-hash-link';

const DiscreteMaths = () => (

    <div>

        <h2>Discrete Mathematics</h2>

        <p>Discrete Mathematics is taught on most Computer Science courses and is going to be required reading for when
            we move onto the Art of Computer Programming and Concrete Mathematics. Three great books on this subject
            are <a
                href="https://www.amazon.co.uk/Discrete-Mathematics-Elementary-Beyond-Undergraduate/dp/0387955852/ref=sr_1_2?ie=UTF8&qid=1537684223&sr=8-2&keywords=discrete+mathematics+springer">Discrete
                Mathematics: Elementary and Beyond</a> and <a
                href="https://www.amazon.co.uk/DISCRETE-MATHEMATICS-ITS-APPLN-GE/dp/9814670138/ref=sr_1_2?ie=UTF8&qid=1537684203&sr=8-2&keywords=discrete+mathematics">Discrete
                Mathematics and it Applications</a> and <a href="https://www.amazon.co.uk/gp/product/0198507178/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1">Discrete Mathematics</a>. I would recommend studying these three books if time permits, I have
            studied them and this section will be the parts I missed or need to recap on rather than the whole
            text.</p>

        <h3>Topics</h3>
        <ul className="text-list">
            <li><Link to="#sequences">Sequences and Summations</Link></li>
            <li><Link to="#Recurrence">Recurrence Relation</Link></li>
            <li><Link to={"#Summations"}>Summations</Link></li>
            <li><Link to={"#numbertheory"}>Number Theory</Link></li>
        </ul>

        <h3 id={"sequences"}>Sequences and Summations</h3>
        <h4>Sequence</h4>
        <p>A sequence is a structure used to represent an ordered list it can be finite or infinite. For
            example <InlineMath math="1, 2, 3, 4, 5"/> is an example of a finite sequence with five terms
            and <InlineMath math="1, 3, 9, ... 3^n"/> is an infinite sequence. The notation <InlineMath math="a_n"/> is
            used to denote a single entry in the sequence and is called a term.</p>

        <p>Now lets take a simple example of a sequence.</p>

        <BlockMath math="a_n = \frac{1}{n}"/>

        <BlockMath math="a_1,a_2,a_3 .... ,"/>
        <p>This sequence will start with the following:</p>
        <BlockMath math="\frac{1}{1},\frac{1}{2},\frac{1}{3} .... ,"/>

        <p>Two other important definitions are geometric progression and arithmetic progression I will leave it up to
            the reader to investigate these.</p>

        <h4 id={"Recurrence"}>Recurrence Relation</h4>
        <p>When we defined the sequence above we provided explicit formulas for the terms. Another way is to provide the
            initial terms and a rule for defining later terms. This is a recurrence relation. A sequence is said to be a
            solution of a recurrence relation if its terms satisfy the recurrence relation.</p>
        <p>Lets check a nice and easy example. This example provides a rule of <InlineMath
            math="a_n = a_{n-1} + 3"/> for <InlineMath math="n = 1,2,3 ... "/> for the initial term of <InlineMath
            math="a_0 = 2"/> This then produces the sequence <InlineMath math="a_1 = a_0 + 3 = 2 + 3 = 5"/> then
            followed by <InlineMath math="a_2 = 5 + 3 = 8"/> and <InlineMath math="a_3 = 8 + 3 = 11"/></p>

        <h4>Special Integer Sequences</h4>
        <p>With the above we were given the closed formula (the pattern the sequence is running in forumla) a recurrence
            relation or other type of general rule. What if this is not provided, well given the firt few values of the
            sequence then we have to make an educated conjecture (guess) about the identity of the sequence. Some common
            things to look for are there runs of the same value inthe sequence, are terms made from previous terms by
            adding, subtracting, multiplying or manipulting them in some way. Or are there specific cycles. </p>

        <h4 id={"Summations"}>Summations</h4>
        <p>Summations are simply sequences that are the additions of terms of a sequence. These expressions are
            expressed using the sigma notation.</p>

        <BlockMath math="\sum_{j=m}^n a_j"/>

        <p>This is read as the sum from <InlineMath math="j = m"/>, to <InlineMath math="j = n"/> of <InlineMath
            math="a_j"/> We have used the variable j to be used as the index of the summation but any variable can be
            used. We start with a lower limit m and a upper limit of n.</p>


        <h3 id={"numbertheory"}>Number Theory</h3>

        <h4>Division</h4>
        <p>When <i>a</i> divides <i>b</i> we say that <i>a</i> is a facotr or divisor of <i>b</i> and that <i>b</i> is a
            multiple of <i>a</i>. When dividing we gave the quotient as q, a as the dividend, d as the divisor and r as
            the remainder. It follows this formula.</p>

        <BlockMath math="q = a/d"/>
        <BlockMath math="r = a \mod d"/>

        <p>Lets see an example of this definition above. We have 113 divided by 12:</p>

        <BlockMath math="113 = 12*9+5"/>

        <p>Hence, the quotient when 113 is divided by 12 is 9 = 113 div 12 and the remainder is 5 = 113 mod 12. Simply
            you divide the 113 by 12 and floor to get the quotient and then you do the modulo on the 113 by 12 to get
            the remainder of 5.</p>


        <BlockMath math="quotient = a \div d"/>
        <BlockMath math="remainder = a\mod n"/>

        <p>If you get stuck a great reference is <a
            href="https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic">here</a> that
            discusses the clock method for dealing with mods. Just remember its mod 3 then you have a clock of 0,1,2 and
            you count clockwise the number of times the value of a or if a is negative you count counter clockwise. For
            exmple -11 mod 3. You count 2,1,0,2,1,0,2,1,0,2,1 so the answer of -11 mod 3 = 1. For negative numbers you
            round down when taking the floor for the quotient for example -3.6 is floored to -4.</p>

        <h4>Modular Arithmetic</h4>
        <p>Sometimes we only care about the remainder for example when looking at a 24hour clock what time is it 40 hour
            from now, we add 40 hours plus to the current hour and divide by 24. A closely related notation indicates
            that two integers say a and b, have the same remainder when both divided ((a - b)/m) by positive m. The
            congruence is defined as follows: </p>

        <BlockMath math="a \equiv b  \text{ (mod  m) is a congruence and m is its modulus}"/>

        <p>Lets see an example determine if 16 is congruent to 4 modulo 6.</p>

        <BlockMath math="6 \div 16 - 4 = 12  \text{ shows that } 16 \equiv 4 \text{ mod } 6"/>

        <h4>Arithmetic Modulo</h4>
        <p>Arithmetic mod is simple just follow the formula and either add or multiply two numbers and then mod it.
            Simples.</p>


    </div>
);

export default DiscreteMaths;
