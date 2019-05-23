import React from "react";
import {BlockMath} from 'react-katex';
import Latex from 'react-latex';
import {HashLink as Link} from 'react-router-hash-link';

import BlogPage from './blog-page.js';

const mathsForCompSci = {

    title: 'Maths for Computer Science',
    contents: '',
    text: [<div>

        <p><strong>Please ensure you check out Math Fundamentals before proceeding into the world of Maths for Computer
            Science.</strong> Where we make many references to <i>Discrete Mathematics (Biggs), Mathematics for
            Programmers (Kun)</i> and the courses by <a
            href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/index.htm">MIT</a> and <a
            href="http://web.stanford.edu/class/cs103/">Stanford</a>. For the introduction to proofs we will call upon
            the great book <i>How to read and do proofs (Solow)</i>. Enjoy.</p>

        <h3>Topics</h3>
        <ul className="text-list">
            <li><Link to="#Proofs">Proofs</Link></li>
            <li><Link to="#Polynomials">Polynomials</Link></li>
            <li><Link to={"#Structures"}>Structures</Link></li>
            <li><Link to={"#Counting"}>Counting</Link></li>
            <li><Link to={"#Probability"}>Probability</Link></li>
        </ul>

        <h3 id={"Proofs"}>Proofs</h3>
        <h4>Intro</h4>
        <p>To begin with proofs we will list some key definitions. Firstly what really is a proof well it is a
            convincing argument written using mathematical language to show a statement is true (Solow). Now for some
            mathematical terminology. A <strong>proposition</strong> is a
            statement that can either be true or false. This adds limitations to statements but it is difficult to know
            if the statement is true or false.
            This relates to computer programming as developers we need to ensure correctness of our programs. Similarly
            a <strong>predicate</strong> is a proposition whose truth depends on the value of one or more
            variables. <strong>Axioms</strong> are propositions that are accepted as true. A <strong>proof</strong> is a
            sequence of logical deductions found from axioms and previously proved statements that concludes with the
            proposition in question (Lehman et al ...). A <strong>theorem</strong> is a statement that has been proved
            true and a <strong>lemma</strong> is a preliminary proposition proved true. </p>


        <p>Simply put we could have the Theorem:</p>

        <p><Latex>Theorem: $25$ is a multiple of $5$</Latex></p>

        <p><Latex>Proof: $5 \times 5 = 25$</Latex></p>

        <p>A Theorem is a statement that is proved true how do we use a Theorem to represent a non true statement,
            easy we inverse it with not, just like coding.</p>

        <p><Latex>Theorem: $21$ is </Latex><b>not</b><Latex> a multiple of $5$</Latex></p>

        <p><Latex>Proof: If $21$ were a multiple of $5$ there would be a natural number $n \times 5 = 21$ since $5
            \times 5 = 25 n$ must be less than $5$ but none of the values $1,2,3,4$ work.</Latex></p>


        <p>A <b>Existential Statement</b> says that something is true if there exists at least one variable that is true
            in the domain. A <b>Universal Statement</b> makes a statement
            about all numbers and every predicate variable must be true for all these numbers in the given domain.
            Therefore a Universal Statement is false if it is false for a single value and this is a counter example.
        </p>

        <p>In the Book Discrete Mathematics (Biggs) one of the exercises in section 1.5 shows an example of proving a
            Universal Statement.</p>

        <p>Theorem: For all natural numbers <Latex>$n, n^2 + n$</Latex> is an even number.</p>

        <p>Proof: Well the book explains the proof but what it doesnt really state is that if you have a factor of 2
            then it is even. In the odd case they add 1 for n to make it odd. The result for both then have a factor of
            2 so they are even a very similar example is very well explained <a
                href={"https://math.stackexchange.com/questions/2865609/for-all-natural-numbers-n-n2-n-is-even"}>here.</a>
        </p>

        <p>The deal with proofs that I find tricky is that they are written at a higher abstract level as they are done
            by competent and confident mathematicians who will skip the details. In this section we will work them out
            at a finer level of detail and you will have seen in some of the earlier sections examples of this.</p>

        <p>An interesting starting point is to step back to truth tables and implications. Here we are not proving the
            two statements of <i>A,B</i> are true we are showing that <i>B</i> is a logical result if <i>A</i> is true.
            Lets remind ourselves of an example implication. <i>If A is true, then B is true</i> proving this statement
            is useful in proofs because statement <i>B</i> maybe complex to prove, but statement <i>A</i> maybe trivial
            so we can prove <i>A</i> and then we know <i>B</i> is immediately true. Nice right! Stepping back to our
            section on Discrete Math remember this statement can be written as <Latex>$A \Longrightarrow B$</Latex>.
            Statement <i>A</i> is called the <strong>hypothesis</strong> and statement <i>B</i> is called
            the <strong>conclusion</strong>. Now we need to take a step back to truth tables for implies.
        </p>

        <br/>
        <hr/>
        <br/>

        <table>
            <tr>
                <th>A</th>
                <th>B</th>
                <th>A implies B</th>
            </tr>
            <tr>
                <td>True</td>
                <td>True</td>
                <td>True</td>
            </tr>
            <tr>
                <td>True</td>
                <td>False</td>
                <td>False</td>
            </tr>
            <tr>
                <td>False</td>
                <td>True</td>
                <td>True</td>
            </tr>
            <tr>
                <td>False</td>
                <td>False</td>
                <td>True</td>
            </tr>

        </table>

        <br/>
        <hr/>
        <br/>

        <p>The last two rows always catch me out. Solows book does a great example of this and a little reminder is if
            statement <i>A</i> is <b>Study Hard</b> and statement <i>B</i> is <b>then you get a good grade</b>. Then if
            you do not study hard then you cannot call your friend a liar as you did not study hard so each of these
            cases are true they are not a liar. Then if you study hard and do well your friend said the truth also so is
            not a liar, but if you study hard and do not get a good grade which is the second row then your friend is a
            liar. The third column is the true of false of whether the implies statement is true or false and then the
            first two columns are if statement A or statement B is true or false. If the statements are not so easy to
            determine if they are true or false we can reason the likely result, so we only care on the final true of
            the implies so the last two rows can be ignored as it is true. Therefore we focus on the first two rows and
            for this to be the case we need B to be true so we focus on proving B to be true and make the assumption
            that A is true which results in the first two of <i>True,True,True</i>.
        </p>

        <p>Right so representing proofs in this implied format makes them much easier to reason with. And all proofs are
            is a hypothesis and a conclusion and the tricky part is identifying those but it is the vital first
            step.</p>


        <h4>Proof Methods</h4>
        <h6>Proof by Direct Implication</h6>
        <p>Running through the example provided in <a
            href="https://jeremykun.com/2013/02/16/methods-of-proof-direct-implication/">Jeremy Kun awesome
            primers! </a>
            lets prove that <i>that one set is a subset of another</i>. Obviously if the sets are finite then you could
            manually check each value, computer could do this fairly fast,
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

        <br/>
        <hr/>
        <br/>

        <h3 id={"Polynomials"}>Polynomials and Secret Sharing</h3>

        <p>I was reading the great book by Jeremy Kun <a href="https://pimbook.org/">A programmers introduction to
            mathematics</a>, I recommend
            highly taking a read of this. Polynomials are discussed here and I just wanted record my notes. Degree is
            used a lot and a clear definition of this is defined
            <a href="https://www.mathsisfun.com/algebra/degree-expression.html"> here</a>. It is also critical to
            remember that polynomials can be displayed as <a
                href="https://www.mathsisfun.com/algebra/polynomials-behave.html">graphs</a>.
            This is a pretty straightforward chapter but I would like to share the example he walked through briefly and
            how I solved it using the <a href="https://math.dartmouth.edu/~ddeford/Lagrange_Interpolation.pdf">Lagrange
                polynomial</a> and then reversing back the polynomial to
            its original form. You maybe wondering the relationship between polynomial and secret sharing but basically
            as the chapter proves polynomials are unique and exist so that for a given set of points a unique polynomial
            exists, ideal for secret sharing! <b>Secret Sharing</b> this is cool right we can use a polynomial equation
            to encrypt data for data point 0 and then share data points 1,2,3 and these can all be combined
            to reveal the original answer for point 0, using the Lagrange Theorem as one method or solving using
            variable elimination as done in this great <a
                href="https://www.youtube.com/watch?v=rWPZoz0aux4&list=FLRp9sg-Zq5VRihj_CsdAPow&index=1">video</a>. As
            long as the number of data points
            is k+1 where k is the highest exponent of the polynomial equation so here we require three data points for
            the example as its highest exponent is 2. In the example they have <i>n = 5</i> daughters and we want any
            three of them <i>k = 3</i> to be able to
            combine there data points and reconstruct the secret. So as stated above we need to pick a polynomial with
            degree k-1 so in this case <i>2</i>. Leading to


        </p>

        <BlockMath math="f(x)= 109 + random \times x + random \times x^2"/>

        <p>So as the example states</p>

        <BlockMath math="271x^2 - 55x + 109"/>

        <p>We then need to create the values for the three data points so the secret is data point <i>0</i> obviously as
            it will just equal 109. Then the data points for <i>1,2,3</i> are as follows simply replace x by the wanted
            value.</p>

        <p><Latex>$(1, 325),(2, 1083),(3, 2383),(4, 4225),(5, 6609)$</Latex></p>

        <p>Now the tricky (honestly fairly easy just a little concentration required) Lagrange polynomial to form the
            answer:</p>

        <BlockMath math="x_1 = 1, y_1 = 325"/>

        <BlockMath math="x_2 = 1, y_2 = 1083"/>

        <BlockMath math="x_3 = 1, y_3 = 2383"/>

        <p>So plugging in the values in the <a href="https://en.wikipedia.org/wiki/Lagrange_polynomial">Lagrange
            Formula</a> data point 1 ....</p>

        <BlockMath math="325 \times \frac{(x-2)(x-3)}{(1-2)(1-3)}"/>

        <p>Lagrange Theorem data point 2 ....</p>

        <BlockMath math="1083 \times \frac{(x-1)(x-3)}{(2-1)(2-3)}"/>

        <p>Lagrange Theorem data point 3 ....</p>

        <BlockMath math="2383 \times \frac{(x-1)(x-2)}{(3-1)(3-2)}"/>

        <p>So now we want to plug in the value of <i>x = 0</i> so that we can see the value of the constant which is the
            secret value of 109. Hopefully you guess here that if we plug in 1 we get the result 325, plug in 2 we get
            the result 1083 and so forth. So lets work it out for the secret value (data point) when <i>x = 0</i></p>

        <BlockMath math="325 \times \frac{(0-2)(0-3)}{(1-2)(1-3)}"/>

        <BlockMath math="325 \times \frac{6}{2} = 325 \times 3 = 975"/>

        <BlockMath math="1083 \times \frac{(0-1)(0-3)}{(2-1)(2-3)}"/>

        <BlockMath math="1083 \times \frac{-3}{-1} = 1083 \times -3 = -3249"/>

        <BlockMath math="2383 \times \frac{(0-1)(0-2)}{(3-1)(3-2)}"/>

        <BlockMath math="2383 \times \frac{2}{2} = 2383 \times 1 = 2383"/>

        <p>Now to get our secret we simply add up the values returned from each line and it should equal the secret of
            109. </p>

        <BlockMath math="975 - 3249 + 2383 = 109"/>

        <p>Hooray!! We have cracked this secret sharing business. Now lets see how we can make this formula become the
            original polynomial equation form, taking things further than the book.</p>


        <p>So back too plugging in the values in the <a href="https://en.wikipedia.org/wiki/Lagrange_polynomial">Lagrange
            Formula</a> data point we can also factorise these points</p>

        <BlockMath math="325 \times \frac{(x-2)(x-3)}{(1-2)(1-3}"/>

        <p>This factored is .. </p>

        <BlockMath math="325(\frac{x^2 - 5x + 6}{2})"/>

        <p>Lagrange Theorem data point 2 ....</p>

        <BlockMath math="1083(\frac{(x-1)(x-3)}{(2-1)(2-3)})"/>

        <p>This factored is .. </p>

        <BlockMath math="1083 \times \frac{x^2 - x - 3x + 3}{-1}"/>

        <p>Further factored is .. </p>

        <BlockMath math="1083(\frac{x^2 - 4x + 3}{-1})"/>

        <p>Lagrange Theorem data point 3 ....</p>

        <BlockMath math="2383 \times \frac{(x-1)(x-2)}{(3-1)(3-2)}"/>

        <p>This factored is .. </p>

        <BlockMath math="2383(\frac{x^2 - x - 2x + 2}{2})"/>

        <BlockMath math="2383(\frac{x^2 - 3x + 2}{2})"/>

        <p>Now a vital part is to simplify this is getting all the parts over the same base denomiator so here we can
            get them all over 2 by multiplying <i>-1 by -2</i></p>


        <BlockMath math="1083(\frac{x^2 - 4x + 3}{-1})"/>

        <p>Making this become:</p>

        <BlockMath math="-2166(\frac{x^2 - 4x + 3}{2})"/>

        <p>Now we need to sum up each factorised part and can put them all over the base of 2 as shown:</p>


        <BlockMath
            math="\frac{325(x^2 - 5x + 6)-2166(x^2 - 4x + 3) + 2383(x^2 - 3x + 2)} {2}"/>

        <p>And then simplify that by multiplying out the brackets and bring the common like terms together</p>

        <BlockMath math="\frac{542x^2 - 110x + 218}{2}"/>

        <p>Finally divide by 2 to result back in the original formula!</p>

        <BlockMath math="271x^2 - 55x + 109"/>

        <p>Brilliant work we have gone full circle!! A big help for this was I answered the other example from <a
            href="https://math.dartmouth.edu/~ddeford/Lagrange_Interpolation.pdf">Dartmouth</a> and got some help on
            StackMath with the following <a
                href="https://math.stackexchange.com/questions/3209876/simplify-9x2-15x50-84-12x2-8x-20-3533x2-3x-10-60?noredirect=1#comment6604656_3209876">answer.</a>
        </p>

        <h5>But is this not a little too easy to crack?? I hear you say</h5>

        <p>Good spot and yes it is and this is based on Shamirs Secret sharing which is explained very well <a
            href="https://medium.com/@apogiatzis/shamirs-secret-sharing-a-numeric-example-walkthrough-a59b288c34c4">here</a>.
            The only tricky bit is the final part <Latex>$Finite Field Z91994388364979$</Latex> basically its overflowed
            so
            we need to subtract the negative from the max as so <Latex>$91994388364979-300000000319$</Latex>. But
            basically you would use modular arithmetic to come up with the coefficients for the polynomial equation.
            Remember you can read about Modular Arithmetic in our Discrete Maths Section!!</p>

        <br/>
        <hr/>
        <br/>
        <h3 id={"Structures"}>Structures</h3>
        <p></p>
        <br/>
        <hr/>
        <br/>
        <h3 id={"Counting"}>Counting</h3>
        <p></p>
        <br/>
        <hr/>
        <br/>
        <h3 id={"Probability"}>Probability</h3>
        <p></p>

    </div>]

};


const MathsForCompSciPage = () => {

    return (


        <BlogPage
            title={mathsForCompSci.title}
            contents={mathsForCompSci.contents}
            text={mathsForCompSci.text}
        />
    );

};

export default MathsForCompSciPage;
