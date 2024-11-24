import React from "react";
import {BlockMath, InlineMath} from 'react-katex';
import Latex from 'react-latex';
import {HashLink as Link} from 'react-router-hash-link';
import CountingTower from '../images/counting_tower.JPG'

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
            <li><Link to={"#OrderingPrinciple"}>Well Ordering Principle</Link></li>
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
            variables. <strong>Axioms</strong> are propositions that are accepted as true without the need for a proof.
            A <strong>proof</strong> is a sequence of logical deductions found from axioms and previously proved
            statements that concludes with the proposition in question (Lehman et al ...). A <strong>theorem</strong> is
            a statement that has been proved true and a <strong>lemma</strong> is a preliminary proposition proved true.
            When the proof of a theorem is long it can be broken into pieces that are proved and these pieces are
            lemmas. A <strong>corollary</strong> is a proposition that follows almost immediately from a
            theorem. <strong>Definitions</strong> in mathematics are the meaning of a term agreed by all parties
            concerned.</p>


        <p>Simply put we could have the Theorem:</p>

        <p><Latex>Theorem: $25$ is a multiple of $5$</Latex></p>

        <p><Latex>Proof: $5 \times 5 = 25$</Latex></p>

        <p>A Theorem is a statement that is proved true how do we use a Theorem to represent a non true statement,
            easy we inverse it with not, just like coding.</p>

        <p><Latex>Theorem: $21$ is </Latex><b>not</b><Latex> a multiple of $5$</Latex></p>

        <p><Latex>Proof: If $21$ were a multiple of $5$ there would be a natural number $n \times 5 = 21$ since $5
            \times 5 = 25 n$ must be less than $5$ but none of the values $1,2,3,4$ work.</Latex></p>

        <p>Some further useful theorems along with some stated in the prerequisite section are: <i>The sum and
            difference of any two even numbers is even.</i>
            <i>The sum and difference of an odd number and an even number is odd.</i>
            <i>The product of any integer and an even number is even.</i>
            <i>The product of any two odd numbers is odd.</i></p>

        <p>Two particular statements occur many times in mathematics and these are referred to
            as <strong>quantifiers</strong>.</p>

        <p>A <b>Existential Statement</b> says that something is true if there exists at least one variable that is true
            in the domain. These statements tend to begin with <i>there is</i> and this is the <strong>existential
                quantifier.</strong> A <b>Universal Statement</b> makes a statement
            about all numbers and every predicate variable must be true for all these numbers in the given domain.
            Therefore a Universal Statement is false if it is false for a single value and this is a counter example.
            The universal quantifier <i>for all</i> usually begins these statements.
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
            that A is true which results in the first two of <i>True,True,True</i>. When thinking of proofs this
            shows <strong>very important</strong> that we can assume <i>A</i> is true and only have to prove
            that <i>B</i> is true.
        </p>

        <p>Right so representing proofs in this implied format makes them much easier to reason with. And all proofs are
            is a hypothesis and a conclusion and the tricky part is identifying those but it is the vital first
            step. Later on we will see that this common pattern is used in the Forward-Backward method as we
            assume <i>A</i> is true and induction.</p>


        <h4>The Forward-Backward Method</h4>

        <p>This section will describe the fundamental ideas which all future proof techniques stem from so please read
            carefully and take it in. Previously we were working with <Latex>$A \Longrightarrow B$</Latex>. Here we can
            use information from <i>A</i> the hypothesis to work forward <b>the forward process</b> to come to a
            conclusion. Or you can
            use <i>B</i> the conclusion and work backward <b>the backward process</b>.</p>

        <p>Remember still the first step to answering proofs is to extract the hypothesis and the conclusion.</p>

        <p>We want to create a forward statement that is the same as the last backward statement.</p>

        <h5>The Backward Process</h5>
        <p>The backward process you create from <Latex>$B$</Latex> a statement <Latex>$B1$</Latex> with the property
            that if <Latex>$B1$</Latex> is true then so is <Latex>$B$</Latex>. You start by looking
            at <Latex>$B$</Latex> and asking yourself how can I show this is true? When asking this question avoid using
            mathematical symbols or notation from the asked question as they get in the way. It commonly begins with <i>How
                can I show that ...</i>. A common method for answering these key questions is to use definitions such as
            how can I show a triangle is isosceles, with the answer check it has two sides the same length. When
            thinking of questions try and show the easier ones to answer first. When you have worked your way back as
            far as possible then you can move to the forward process.</p>

        <h5>The Forward Process</h5>

        <p>The forward process simply assumes that <Latex>$A$</Latex> is true and you work forward creating new true
            statements from <Latex>$A$</Latex>of <Latex>$A1$</Latex> then <Latex>$A2$</Latex> and further. Again
            definitions are commonly used to work forward from a given statement to give new true statements. The goal
            of this is to find a statement that precisely matches the final statement formed from the backward process.
            Look to eliminate any symbols you have to match the last backward statement from the forward statement.</p>

        <h5>Reading Proofs</h5>
        <p>What makes modern proof reading hard is that mathematicians write proofs in condensed formats skipping out
            lots of information. They also do not state what proof technique they are using such as the construction
            method or the forward backward method and is most likely using multiple techniques. You need to ask yourself
            what technique they are using and why? And is it correct. They also combine steps
            and may not have them in the correct order.</p>

        <h5>Overlapping Symbols</h5>
        <p>It is common to find cases where definitions have symbols that overlap with the statement to prove symbols.
            To overcome this rewrite the definition with different non overlapping symbols.</p>

        <h5>Using Definitions in Proofs</h5>
        <p>Definitions as stated in the processes can commonly be used to progress forward and backward. A list of
            common definitions can be found in the Math Prerequisite section.</p>

        <h5>Using Previous Knowledge</h5>
        <p>We mentioned using definitions to solve steps in the forward and backward process, previous knowledge of
            proved statements that match exactly. You use the symbol notation from the current statement trying to be
            proven. Going back to a definitions at the start this can be referred to as a <strong>Lemma</strong>. The
            basic steps to use previous knowledge in the forward process are to look for a previously defined statement
            that is true where <Latex>$A \Longrightarrow C$</Latex> to solve the form <Latex>$A \Longrightarrow
                B$</Latex> which is a proposition of the same hypothesis. This applied to the backward process is to
            prove <Latex>$A \Longrightarrow B$</Latex> is true, look for a previously proved term <Latex>$C
                \Longrightarrow B$</Latex>. Then match up the notation between the two using the notation in the
            statement you are proving. Then write a forward statement that C is true. Then complete the proof
            that <Latex>$A \Longrightarrow B$</Latex> by working forward from <Latex>$C$</Latex> and backward
            from <Latex>$B$</Latex>.</p>

        <br/>
        <hr/>
        <br/>

        <table>
            <tr>
                <th>Statement</th>
                <th>Name of Statement</th>
            </tr>
            <tr>
                <td><Latex>$A \Longrightarrow B$</Latex></td>
                <td><i>Original statement</i></td>
            </tr>
            <tr>
                <td><Latex>$B \Longrightarrow A$</Latex></td>
                <td><i>converse</i></td>
            </tr>
            <tr>
                <td><Latex>$\neg A \Longrightarrow \neg B$</Latex></td>
                <td><i>inverse</i></td>
            </tr>
            <tr>
                <td><Latex>$\neg B \Longrightarrow \neg A$</Latex></td>
                <td><i>contrapositive</i> (note this truth table is the same as <Latex>$A \Longrightarrow B$</Latex>)
                </td>
            </tr>
        </table>

        <br/>
        <hr/>
        <br/>

        <h5>Examples</h5>

        <h6>Example 1</h6>

        <p>Now to the exciting part lets take our knowledge we have learned from these first three sections and create
            some proofs of our own.</p>

        <p>If <i>n</i> is an odd integer, then <Latex>$n^2$</Latex> is an odd integer</p>

        <p><strong>Hypothesis (A)</strong> If <i>n</i> is an odd integer</p>

        <p><strong>Conclusion (B)</strong> <Latex>$n^2$</Latex> is an odd integer</p>

        <p><Latex>$A \Longrightarrow B$</Latex></p>

        <p><strong>Step One:</strong> Starting with the <strong>backward</strong> process can I show that a integer is
            odd, easy we
            have it in our table of definitions in prerequisites.</p>

        <p>
            <strong><i>B1: </i></strong>so <Latex>$n^2$</Latex> can be expressed as <Latex>$2n + 1$</Latex> of some
            other
            integer. Which integer though? Now we turn to the forward process.
        </p>

        <p>Because <i>n</i> is a odd integer we can use the definition for odd integer as 2 times some other integer
            plus 1.
        </p>

        <p><strong><i>A1: </i></strong>
            <Latex>$n = 2k + 1$</Latex>
        </p>

        <p>Now we can square both sides of <strong><i>A1</i></strong> and rewrite using the rules of algebra.</p>

        <BlockMath math="n^2 = (n)(n) = (2k)(2k) + 1^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1"/>

        <p>Therefore by the definition of an odd integer, we can conclude that <Latex>$n^2$</Latex> is an odd integer
            (as it is one more than twice the integer <Latex>$2k^2 + 2k$</Latex>).
        </p>

        <h6>Example 2</h6>

        <p>Lets see a similar version for the evens</p>

        <p>If <i>n</i> is an even integer, then <Latex>$n^2$</Latex> is an even integer</p>

        <p><strong>Hypothesis (A)</strong> If <i>n</i> is an even integer</p>

        <p><strong>Conclusion (B)</strong> <Latex>$n^2$</Latex> is an even integer</p>

        <p><Latex>$A \Longrightarrow B$</Latex></p>

        <p><strong>Step One:</strong> Starting with the <strong>backward</strong> process can I show that a integer is
            even, easy we
            have it in our table of definitions in prerequisites.</p>

        <p>
            <strong><i>B1: </i></strong>so <Latex>$n^2$</Latex> can be expressed as <Latex>$2n$</Latex> of some
            other integer. Which integer though? Now we turn to the forward process.
        </p>

        <p>Because <i>n</i> is an even integer we can use the definition for an even integer as 2 times some other
            integer.
        </p>

        <p><strong><i>A1: </i></strong>
            <Latex>$n = 2k$</Latex>
        </p>

        <p>Now we can square both sides of <strong><i>A1</i></strong> and rewrite using the rules of algebra.</p>

        <BlockMath math="n^2 = (n)(n) = (2k)(2k) = 4k^2 = 2(2k^2)"/>

        <p>Therefore by the definition of an even integer, we can conclude that <Latex>$n^2$</Latex> is an even integer
            (as it is twice the integer <Latex>$2k^2$</Latex>) as there exists <i>m</i> which
            is <Latex>$2k^2$</Latex> where
            <Latex>$n^2 = 2m$</Latex>.
        </p>

        <h6>Concrete Example</h6>

        <p>Lets now use a concrete value for our <strong>n</strong> to prove that if <Latex>$6$</Latex> is an even
            integer,
            then <Latex>$6^2$</Latex> is an even integer.</p>

        <p>Since <Latex>$6$</Latex> is an even number, there is some integer <Latex>$k$</Latex> such that <Latex>$6 =
            2k$</Latex>. This integer <Latex>$k =
            3$</Latex>. Showing that <Latex>$6$</Latex> is an even number. </p>

        <p>This means that we can plug
            in <Latex>$k$</Latex> as proved
            above like so where <Latex>$k = 3$</Latex> so <Latex>$6^2 = 6 \times 6 = (2 \times 3)(2 \times 3) = 4 \times
                3^2 = 2(2 \times
                3^2) = 2 \times 18 = 36$</Latex>.
        </p>
        <p>As <Latex>$36$</Latex> is an integer there is some integer m (which
            just worked out as <Latex>$18$</Latex>) such that <Latex>$6^2 =
                2m$</Latex> <strong>thus</strong> <Latex>$6^2$</Latex> is even. </p>
        <p>As <Latex>$2m = 2 \times 18 = 36$</Latex> and the formula for an even number is <Latex>$2k$</Latex> (or m in
            this case).</p>

        <h4>Proof Methods</h4>

        <h5>Construction Method</h5>

        <p>If encountering existential statements you need to make sure they clearly define the object, the certain
            property and the something happens. If you see existential statement in the forward process you should able
            to solve it using the object you have been provided. In the backward process you need to show that there is
            such an object. To do this you can use the construction method either by guessing it, using an algorithm or
            guessing
            it somehow. In general if you see the keywords there is in the forwards backwards process then you can use
            the construction method. You may not particularly see the keywords for the existential statement so may need
            to conclude them yourself. In the construction method you need to construct the object and show they are
            true. The three steps to using the construction method is firstly identify the object, type, certain
            property and the something that happens in the backward statement containing there is. Then use the forward
            process and the hypothesis to create the desired object. It may also be useful to work backward from here
            too. Then finally confirm the object you construct does satisfy the certain property and the something that
            happens.</p>

        <h5>Proof by Cases</h5>

        <p>Proof by cases is not particularly trusted process of proofs, but basically you divide the problem into
            smaller cases which exhaust all possibilities and show that these cases all hold true. The difficulty here
            is that all possibilities could be very large or infinite. An example that as programmers we use all the
            time is when we have AND and OR logic in an if statement. We can check each valid predicate by breaking them
            into cases and check all possibilities for correctness.</p>

        <h5>Proof by Contradiction</h5>

        <p></p>

        <h5>Proof by Direct Implication</h5>
        <p>Running through the example provided in <a
            href="https://jeremykun.com/2013/02/16/methods-of-proof-direct-implication/">Jeremy Kun awesome
            primers! </a>
            lets prove that <i>that one set is a subset of another</i>. Obviously if the sets are finite then you could
            manually check each value, computer could do this fairly fast,
            but it would not be efficient! Lets define two sets:</p>


        <h4 id={"OrderingPrinciple"}>Well Ordering Principle</h4>
        <p>Basically any non empty <strong>SET</strong> of non negative integers has a least element. </p>



        <h4>Logic and Propositions</h4>
        <p></p>

        <h4 id={"Quantifiers"}>Quantifiers and Predicate Logic</h4>
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

        <BlockMath math="x_2 = 2, y_2 = 1083"/>

        <BlockMath math="x_3 = 3, y_3 = 2383"/>

        <p>A reminder of Lagrange Polynomial formula but please read the reference below.</p>

        <BlockMath math="l(x)= \sum_{i=0}^n y_i \cdot \Bigg (\prod_{j \neq i} \frac{(x-x_j)}{(x_i-x_j)} \Bigg)"/>


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

        <p>Now a vital part is to simplify this is getting all the parts over the same base denominator so here we can
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

        <h5>Another example</h5>

        <p>For completeness lets try our own example with smaller numbers to make it easier, say we want to share
            secretly the number 3. Remember this polynomial needs to be in its simplest form for this to work which
            threw me.</p>

        <BlockMath math="f(x)= 3 + random \times x + random \times x^2"/>

        <BlockMath math="2x^2 + x + 3"/>

        <p>Now we need to calculate the points for 1,2,3 or it could actually be any number of points.</p>

        <p><Latex>$(1, 6),(2, 13),(3, 24)$</Latex></p>

        <BlockMath math="x_1 = 1, y_1 = 6"/>

        <BlockMath math="x_2 = 2, y_2 = 13"/>

        <BlockMath math="x_3 = 3, y_3 = 24"/>

        <p>So plugging in the values in the <a href="https://en.wikipedia.org/wiki/Lagrange_polynomial">Lagrange
            Formula</a> again data point 1 ....</p>

        <BlockMath math="6 \times \frac{(x-2)(x-3)}{(1-2)(1-3)}"/>

        <p>Lagrange Theorem data point 2 ....</p>

        <BlockMath math="13 \times \frac{(x-1)(x-3)}{(2-1)(2-3)}"/>

        <p>Lagrange Theorem data point 3 ....</p>

        <BlockMath math="24 \times \frac{(x-1)(x-2)}{(3-1)(3-2)}"/>

        <p>Now lets calculate this out, you will notice again the formula values actually equal the same as above and
            always will for these three values of <i>x</i>.</p>

        <BlockMath math="6 \times \frac{(0-2)(0-3)}{(1-2)(1-3)}"/>

        <BlockMath math="6 \times \frac{6}{2} = 6 \times 3 = 18"/>

        <BlockMath math="13 \times \frac{(0-1)(0-3)}{(2-1)(2-3)}"/>

        <BlockMath math="13 \times \frac{-3}{-1} = 13 \times -3 = -39"/>

        <BlockMath math="24 \times \frac{(0-1)(0-2)}{(3-1)(3-2)}"/>

        <BlockMath math="24 \times \frac{2}{2} = 24 \times 1 = 24"/>

        <p>Hooray!! Again we have cracked this secret sharing business.</p>

        <p>Now to get our secret we simply add up the values returned from each line and it should equal the secret of
            3. </p>

        <BlockMath math="18 - 39 + 24 = 3"/>

        <p>As before lets factor this back to the polynomial see above for the clearer details I have simplified it here
            to stop the duplication.</p>

        <BlockMath math="6(\frac{x^2 - 5x + 6}{2})"/>

        <p>Lagrange Theorem data point 2 ....</p>

        <BlockMath math="13(\frac{x^2 - 4x + 3}{-1})"/>

        <p>Lagrange Theorem data point 3 ....</p>

        <BlockMath math="24(\frac{x^2 - 3x + 2}{2})"/>


        <p>Again now a vital part is to simplify this is getting all the parts over the same base denominator so here we
            can
            get them all over 2 by multiplying <i>-1 by -2</i></p>


        <BlockMath math="13(\frac{x^2 - 4x + 3}{-1})"/>

        <p>Making this become:</p>

        <BlockMath math="-26(\frac{x^2 - 4x + 3}{2})"/>

        <p>Now we need to sum up each factorised part and can put them all over the base of 2 as shown:</p>

        <BlockMath
            math="\frac{6(x^2 - 5x + 6)-26(x^2 - 4x + 3) + 24(x^2 - 3x + 2)} {2}"/>

        <p>And then simplify that by multiplying out the brackets and bring the common like terms together</p>

        <BlockMath math="\frac{4x^2 - 2 + 6}{2}"/>

        <p>Finally divide by 2 to result back in the original formula!</p>

        <BlockMath math="x^2 - x + 3"/>

        <br/>
        <hr/>
        <br/>
        <h3 id={"Structures"}>Structures</h3>
        <p></p>
        <br/>
        <hr/>
        <br/>
        <h3 id={"Counting"}>Counting</h3>

        <h4>Introduction</h4>

        <p>Back to counting you may think I did this back in junior school. There you learnt direct counting from simple
            things such as how many fingers you have. Here and in computer science counting can be much larger and you
            need more refined methods for counting the middle ground. For example the number of ways you can select 5
            ice creams when there are 8 choices. Have a think about how you would go about this? Counting is useful in
            computer science for determining time and storage requirements, counting is a fundamental for probability
            theory, and it also is the basis for two proof techniques the pigeon hole principal and combinatorial
            proof.</p>

        <h4>Basic Counting Principle</h4>

        <p>When there a <i>m</i> ways to do one thing</p>
        <p>and <i>n</i> ways to do another</p>
        <p>then there are <Latex>$m \times n$</Latex> ways of doing <a
            href={"https://www.mathsisfun.com/data/basic-counting-principle.html"}><strong>both</strong></a></p>

        <p>An example is if you have two sizes of tee shirt Small and Medium, five colours to choose from and three
            brands, you can multiply them together to see total number of options. This only works if they are not
            dependent on each other. If that is the case you have to multiply by each dependent and then sum.</p>

        <BlockMath math="2 \text{(Sizes)} \times 5 \text{(Colours)} \times 3 \text{(Brands)}= 30"/>

        <h4>Sums and Asymptotics</h4>

        <p>We are briefly revisiting sums that were touched in the math fundamental section. Lets recall that we can
            have the sum for the number of nodes in a complete binary tree of size <Latex>$N$</Latex> as <Latex>$1 + 2 +
                4 ... + N$</Latex> and this can be represented as:</p>

        <BlockMath math="\sum_{i=0}^{\log_n} 2^i"/>

        <p>These sums can also be stated in <i>closed form</i> where it does not use the sum form or product form or any
            <Latex>$. . .$</Latex> and they are usually easier to understand. But I hope you are asking now how do I
            find these closed forms? Kind of like proofs its part maths and part art (or practice and experience).
            Unfortunately closed from does not always exist in these cases we attempt to find the upper and lower bounds
            of a sum in closed form.</p>

        <p>Some steps to get into closed form at to try and simplify the the sum (or product) form as much as possible,
            then you may even recognise a common closed for version if it turns out to be for example a geometric
            sum.</p>

        <p>One formal method you can try to help get to closed form is the perturbation method. This method basically
            attempts to perturb the sum and then combine the original sum with the perturb sum to find something
            simpler.</p>

        <p>For example <InlineMath math="S = 1 + x + x^2 + ... + x^{n-1}"/></p>

        <p>Perturb is by multiplying S by x would be <InlineMath math="xS = x + x^2 + ... + x^{n}"/></p>

        <p>Then if you subtract it you would get:</p>

        <BlockMath math="S - xS = 1 - x^{n}"/>

        <p>Then solving for S (TODO how explain this) gives the closed form known as the geometric sequence.</p>

        <BlockMath math="S = \frac{1 - x^{n}}{1 - x}"/>

        <h4>Geometric Sequences and Sums</h4>

        <p><a href={"https://www.mathsisfun.com/algebra/sequences-sums-geometric.html"}></a></p>

        <h4>Arithmetic Sequences and Sums</h4>

        <p><a href={"https://www.mathsisfun.com/algebra/sequences-sums-arithmetic.html"}></a></p>

        <h4>How many ways to choose two items from a Set</h4>

        <p>In Kuns book he covers an example of the number of ways to choose two objects from a set of <i>n</i> objects.
            He provides a diagram that shows how many ways there where you count the number of balls to give the number
            of ways. Each ball will have two different diagonals. And you count from the first item in row <i>X</i> at
            the bottom and depending on how the height of the tree is you then draw a diagonal the same distance to the
            next ball so the ground row is height 0 so you only draw a difference of zero between the two items in
            row <i>X</i> for each <i>X</i>. Then move up a row and the height is 1 so draw a distance of 1 between the
            two items in row <i>X</i>. Starting always from the left side until no more diagonal down on the right side.
            So when see the attached picture for a example when n is 4.
        </p>


        <p>When height is 0 and difference between diagonals is 0.</p>
        <BlockMath math="(1,2)(2,3)(3,4)"/>

        <p>When height is 1 and difference between diagonals is 1.</p>
        <BlockMath math="(1,3)(2,4)"/>

        <p>When height is 2 and difference between diagonals is 2.</p>
        <BlockMath math="(1,4)"/>

        <p>Totally 6 different ways to choose from a set of size 4. 4 objects.</p>

        <img width="30%" height="30%" src={CountingTower} alt="Counting Tower Image"/>

        <p>Lets define the example in a more structured form. <i>X</i> is a finite set of size <InlineMath
            math="n = |X|"/>. So in this case lets set <i>X</i> to be the set of <InlineMath
            math="\{1, 2, 3, 4\}"/> then <i>n</i> would be 4. Back to the image in this case we can see the bottom row
            of
            balls is count of 3 so <InlineMath math="n - 1"/> and next subsequent row up is <InlineMath
                math="n - 2"/> or stating
            from the top you have <InlineMath math="1,2,n-1"/> This formula can be seen as: <InlineMath
                math="\frac{n(n-1)}{2}"/>. Which is the <i>nth</i> triangular number a lovely proof of this can be
            seen <a href={"http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/runsums/triNbProof.html"}>here. Or now
                briefly explained below.</a></p>

        <p>To extend this as I included the formula form of <InlineMath math="\frac{4(4-1)}{2} = 6"/>. How do we prove
            this so for example we can show this by a lot of ways but a concrete way is. </p>

        <BlockMath math="X = 1 + 2 + (n-1) = 1 + 2 + 3"/>

        <BlockMath math="2X = (1 + 2 + 3) + (1 + 2 + 3)"/>

        <p>This can then be rearranged to:</p>

        <BlockMath math="2X = (1 + 2 + 3) + (3 + 2 + 1)"/>

        <p>then add term by term to get</p>

        <BlockMath math="2X = (1 + 3) + (2 + 2) + (3 + 1)"/>

        <p>to get </p>

        <BlockMath math="2X = 4 + 4 + 4 = 4 \times 3 = 12"/>

        <p>Then divide it by 2 again to get back the expected answer of <InlineMath math="6"/></p>

        <BlockMath math="X = 6"/>

        <p>Lets prove this by induction so the base case is that when <InlineMath math="n = 4"/>.</p>

        <p><strong>Base case</strong> <InlineMath math="p(4) = 1 + 2 + 3 + ... + (n - 1) = \frac{4(4-1)}{2} = 6"/> which
            holds true as shown in the diagram and counting the sum of <InlineMath math="1 + 2 + 3"/>. </p>

        <p><strong>Inductive step</strong> <InlineMath
            math="p(4 + 1) =  1 + 2 + 3 + ... + (n - 1) + n = \frac{4 + 1(4 + 1 -1)}{2} = 10"/></p>

        <BlockMath math="X = \{1,2,3,4,5\}"/>

        <p>Now <i>X</i> is the size of choosing two from <BlockMath math="n + 1 = 4 + 1"/> Where the size of choosing
            two from this is <InlineMath math="1 + 2+ ... + n-1"/> so <InlineMath math="1 + 2 + 3 + 4"/></p>

        <p>Now pick any element from X say in this case we choose the fifth element which is the <InlineMath
            math="n + 1"/> element and define <i>Y</i> as the set that remains when removing it from <i>X</i>.</p>

        <BlockMath math="Y= X - \{5\} = \{1,2,3,4\}"/>

        <p>Now we want to split the sets into two parts.</p>

        <p>Part 1: Is where all the elements except the chosen element is so its size to choose two from is the same
            as <i>Y</i> which in this case is <i>n</i> so it is 4 elements to choose from. Which has a choosing size
            of <InlineMath
                math="n = 1 + 2 ... + (n-1) = 1 + 2 + 3"/> so it is 6.</p>

        <p>Part 2: Is the choice element is this case we choose the single <InlineMath math="n+1"/> which is the
            value <InlineMath math="5"/> from the new set of <InlineMath math={"X"}/>.
            Which now for the second ball to be chosen only has the choices of the other elements reaming only as we
            have
            selected one element of the two already so it is either going to be <InlineMath math="1"/>, or <InlineMath
                math="2"/> or <InlineMath
                math="3"/> or <InlineMath math="4"/> as they are the elements in <i>X</i>. Which means that we have four
            choices available to match with our selected element which in this case was <InlineMath math="n + 1"/> which
            is <InlineMath math="5"/>. Therefore we have no remaining choices or overlaps between the two options so we
            can add the sizes of choosing of both parts 1 and 2 together which is <InlineMath math="6 + 4"/> which is
            the expected <InlineMath math="10"/> for <InlineMath math="n + 1"/>. As adding them is the same
            as <InlineMath
                math="n + 1 = 1 + 2 + 3 + ... + (n - 1) + n = 1 + 2 + 3 + 4 = 10"/>. So the expected answer
            for <i>5</i> as it is <InlineMath math="n + 1"/> of 10 with the same formula we set out to prove in the
            inductive step.</p>


        <br/>
        <hr/>
        <br/>
        <h3 id={"Probability"}>Probability</h3>
        <p>Probability is all around how <strong>likely</strong> something is to happen. When a single Die is rolled
            there are six possible outcomes <Latex>$1,2,3,4,5,6$</Latex> The probability of rolling say
            a <i>4</i> is <InlineMath math="\frac{1}{6}"/>. Generally the probability can be thought of as:</p>

        <BlockMath
            math="\text{Probability of an event happening} = \frac{\text{Number of ways it can happen}}{\text{Total number of outcomes}}"/>

        <p><strong>Important</strong> probability is always between <Latex>$0$</Latex> and <Latex>$1$</Latex>.
            Probability is only a guide for example <i>toss a coin hundred times, how many Heads come up?</i> Using
            probability you know its a <InlineMath math="\frac{1}{2}"/> chance due to Heads or Tails so we
            say we expect <i>50</i> times. Some key terms for Probability.</p>

        <table>
            <tr>
                <th>Term</th>
                <th>Definition</th>
                <th>Example</th>
            </tr>
            <tr>
                <td>Experiment</td>
                <td>A repeatable procedure with a set of possible results.</td>
                <td>A coin can be tossed again and again.</td>
            </tr>
            <tr>
                <td>Outcome</td>
                <td>A possible result of an experiment.</td>
                <td>Getting a head from a coin toss.</td>
            </tr>
            <tr>
                <td>Sample Space</td>
                <td>All the possible outcomes of an experiment.</td>
                <td>For a coin toss it is either head or tails.</td>
            </tr>
            <tr>
                <td>Sample Point</td>
                <td>Just one of the possible outcomes.</td>
                <td>For example heads.</td>
            </tr>
            <tr>
                <td>Event</td>
                <td>One or more outcomes of an experiment</td>
                <td>For example getting a heads on a coin toss.</td>
            </tr>
        </table>


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
