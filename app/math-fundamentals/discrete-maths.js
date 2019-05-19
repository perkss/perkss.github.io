import React from 'react';
import {BlockMath, InlineMath} from 'react-katex';
import {HashLink as Link} from 'react-router-hash-link';
import Latex from 'react-latex';

const DiscreteMaths = () => (

    <div>

        <h2>Discrete Mathematics</h2>

        <p>Discrete Mathematics is taught on most Computer Science courses and is going to be required reading for when
            we move onto the Art of Computer Programming and Concrete Mathematics. Three great books on this subject
            are <a
                href="https://www.amazon.co.uk/Discrete-Mathematics-Elementary-Beyond-Undergraduate/dp/0387955852/ref=sr_1_2?ie=UTF8&qid=1537684223&sr=8-2&keywords=discrete+mathematics+springer">Discrete
                Mathematics: Elementary and Beyond</a> and <a
                href="https://www.amazon.co.uk/DISCRETE-MATHEMATICS-ITS-APPLN-GE/dp/9814670138/ref=sr_1_2?ie=UTF8&qid=1537684203&sr=8-2&keywords=discrete+mathematics">Discrete
                Mathematics and it Applications</a> and <a
                href="https://www.amazon.co.uk/gp/product/0198507178/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1">Discrete
                Mathematics</a>. I would recommend studying these three books if time permits, I have
            studied them and this section will be the parts I missed or need to recap on rather than the whole
            text.</p>

        <h3>Topics</h3>
        <ul className="text-list">
            <li><Link to="#sets">Sets</Link></li>
            <li><Link to="#functions">Functions</Link></li>
            <li><Link to="#sequences">Sequences and Summations</Link></li>
            <li><Link to={"#numbertheory"}>Number Theory</Link></li>
            <li><Link to={"#logic"}>Logical Framework</Link></li>
            <li><Link to={"#naturalnumbers"}>Natural Numbers</Link></li>
        </ul>

        <br/>

        <h3 id={"sets"}>Sets</h3>

        <p>The <a href={"https://en.wikipedia.org/wiki/Cardinality"}>cardinality</a> of a set is the number of elements
            in the set for example in coding we say length. This is
            represented using the cardinality symbol, for example for set <Latex>$X$</Latex> the cardinality of this set
            is denoted
            with <Latex>$|X|$</Latex>. If two sets have the same cardinality we say there is a one to one correspondence
            from set A to set B <Latex>$|A| = |B|$</Latex>.</p>

        <h5>Countable Sets</h5>

        <p>Sets can be broken into two types countable sets have the same cardinality of natural numbers or are finite
            and those that do not.</p>

        <br/>
        <hr/>
        <br/>

        <h3 id={"functions"}>Functions</h3>

        <p>Functions in the context of Discrete mathematics are very similar to functions in programming. In Discrete
            maths they are when we want to assign an element of a first set to a particular element of a second set. A
            common example is a function that assigns grades to students. Some further terminology is <b>Domain</b> is
            the set of students, <b>Codomain</b> is the set of grades and the <b>Range</b> is the members of the grades
            set that are used, in plain english the grades that students have received. If all the students did not
            receive for example a grade F, then that is in the codomain but not in the range.</p>

        <h5>One to One (Injective) Function</h5>
        <p>A one to one function also known as an injective function never assigns the same value to two
            different <b>domain</b> elements.</p>

        <h5>Onto (Surjective) Function</h5>
        <p>A surjective function ensures that for every element in the codomain set B there is at least one or maybe
            more elements matching from the Domain in Set A. If you have a set A <InlineMath math="\{a,b,c\}"/> and
            set
            B <InlineMath math="\{4,5\}"/> then a surjective function could be <Latex>$f(a) = 4, f(b) = 5, f(c) =
                4$</Latex></p>

        <h5>Injective and Surjective thats a Bijective Function</h5>
        <p>Can you see above how a function can be injective and surjective which would make it Bijective? Well if the
            Domain only maps 1-1 to the codomain and the codomain is fully assigned then it is! Simple. If the codomain
            is not fully assigned from the domain and two images from the preimage point to the same image in the
            codomain then it is neither One to One or Onto.</p>

        <h5>Not a Function and the Identity Function</h5>
        <p>It is not a function if it maps one element in the domain to two elements in the codomain.</p>
        <p>The identity function is when the function maps the domain to the codomain as itself own value so <Latex>$f(x)
            = x$</Latex></p>

        <h5>Inverse Function</h5>

        <p>If the function <Latex>$f$</Latex> is Injective then it can have a inverse
            function <InlineMath math="f^{-1}"/> which reverts back for example <Latex>$f(a) = b$</Latex> then the
            inverse is <InlineMath math="f^{-1}(b) = a"/></p>

        <h5>Function Composition</h5>

        <p>Function composition is probably familiar to those who use a functional language like Clojure or Haskell. It
            enables one function to be called and that result to be immediately called by another combined in a single
            function. If we have a function <b><i>g</i></b> and a function <b><i>f</i></b> then the composed function
            is <InlineMath math="(f \circ g)(a) = f(g(a))"/></p>


        <h5>Floor and Ceiling Function</h5>

        <p>The floor function of real number <InlineMath math="x"/> assigns the largest integer that is less than or
            equal to <Latex>$x$</Latex>. The floor of <InlineMath math="\frac{1}{2}"/> is <InlineMath math="0"/>. Then
            the floor of <InlineMath math="-\frac{1}{2}"/> is <InlineMath math="-1"/>. The ceiling function assigns the
            the smallest integer that is greater than or equal to <InlineMath math="x"/>. The ceiling of <InlineMath
                math="\frac{1}{2}"/> is <InlineMath math="1"/>. Then the ceiling of <InlineMath
                math="-\frac{1}{2}"/> is <InlineMath math="0"/>. Groovy nice work making it through this all very
            interesting stuff and you can see the relation to functions in programming.</p>

        <h5>Partial Function</h5>
        <p>A partial function allows a undefined mapping for some elements in the domain set to the codomain such as a
            youngest child function for parents with no childen. When domain
            of <Latex>$f$</Latex> equals <Latex>$A$</Latex> we say that <Latex>$f$</Latex> is a total function.</p>

        <br/>
        <hr/>
        <br/>

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

        <h5>Arithmetic Sequence</h5>

        <p>Arithmetic sequence is made by adding the same value each time. The value added each time is called the
            common difference, this can also be negative.</p>

        <p>It is in the form: <InlineMath math="a,a + d,a + 2d ... a + nd, ..."/></p>

        <h5>Geometric Sequence</h5>

        <p>A Geometric sequence is formed by multiplying by the same value each time. The value that is multiplied by
            each time is called the common ratio. When trying to determine the sequence you can take the n+1 term and
            divide by the nth term for example term 1 is 3 and term 2 is 9 do <InlineMath math="\frac{9}{3} = 3"/> and
            can see this common ratio is 3.</p>

        <p>It is in the form: <InlineMath math="a,ar,ar^2 ... ar^n, ..."/></p>

        <p>In both of these sequences we always start with a value and its before we have added or multiplied it
            anything.</p>

        <h4 id={"Recurrence"}>Recurrence Relation</h4>

        <p>When we defined the sequence above we provided explicit formulas for the terms. Another way is to provide the
            initial terms and a rule for defining later terms. This is a recurrence relation. A sequence is said to be a
            solution of a recurrence relation if its terms satisfy the recurrence relation.</p>

        <p>Lets check a nice and easy example. This example provides a rule of <InlineMath
            math="a_n = a_{n-1} + 3"/> for <InlineMath math="n = 1,2,3 ... "/> for the initial term of <InlineMath
            math="a_0 = 2"/> This then produces the sequence <InlineMath math="a_1 = a_0 + 3 = 2 + 3 = 5"/> then
            followed by <InlineMath math="a_2 = 5 + 3 = 8"/> and <InlineMath math="a_3 = 8 + 3 = 11"/></p>

        <p>The Fibonacci sequence is commonly defined as a recurrence relation as the initial terms are provided and the
            formula to provide the next is also provided. <InlineMath math="f_0 = 0, f_1 = 1"/> with the
            formula <InlineMath math="f_n = f_{n-1} + f_{n-2}"/> for all of <InlineMath math="n = 2,3,4 ... "/></p>

        <h5>Solving Recurrence Relations</h5>
        <p>A recurrence relation is said to have been solved when we find a explicit formula said to be a <b>closed
            formula</b> for the terms of the sequence. But how do we go about finding this explicit formula to put it
            into closed form? <b>Iteration</b> can be used this can be <b>forward substitution</b> where we began with
            the initial term ending with <InlineMath math="a_n"/>. Or we can use <b>backward substitution</b> where we
            start with <InlineMath math="a_n"/> and go back to the initial term.</p>

        <h6>Calculating Compound Interest Example</h6>

        <p>Compound interest can be viewed as a recurrence relation and we can solve this. Say we have the loan start
            amount of £100. With interest of 10%. This can be viewed as the loan start amount added with the interest
            amount. The interest is turned into decimal form by moving it two decimal places to the right have a read on
            decimals and percentages unclear.</p>

        <BlockMath math="100 + 100 \times 10\%"/>

        <BlockMath math="100 \times 1 + 100 \times 0.10"/>

        <BlockMath math="100 \times (1 + 0.10)"/>

        <BlockMath math="100 \times (1.10)"/>

        <BlockMath math="= 110"/>

        <p>Now the great step is that we worked this out for a single year but this same formula can be done for every
            year! We just take the previous years amount in this case 110 and then apply the same formula.</p>

        <BlockMath math="110 + 110 \times 10\%"/>

        <BlockMath math="110 \times 1 + 110 \times 0.10"/>

        <BlockMath math="110 \times (1 + 0.10)"/>

        <BlockMath math="110 \times (1.10)"/>

        <BlockMath math="= 121"/>

        <p>Whats so great is that we can go straight to year 3 if we multiply the interest 3 times.</p>

        <BlockMath math="100 \times 1.10 \times 1.10 \times 1.10"/>

        <p>But it is far easier to write this down using exponents which in this case would be:</p>

        <BlockMath math="100 \times 1.10^3 "/>

        <p>Which leaves us with the formula to work out compound interest as:</p>

        <BlockMath math="Present Value \times (1 + Interest Rate)^{number of years} = Future Value"/>

        <h4>Special Integer Sequences</h4>

        <p>With the above we were given the closed formula (the pattern the sequence is running in forumla) a recurrence
            relation or other type of general rule. What if this is not provided, well given the first few values of the
            sequence then we have to make an educated conjecture (guess) about the identity of the sequence. Some common
            things to look for; are there runs of the same value in the sequence?, are terms made from previous terms by
            adding, subtracting, multiplying or manipulating them in some way? Or are there specific cycles?</p>

        <p>An interesting point from one of the Rosen examples is the way to display the sequence forms as a
            mathematician in the example below I immediately thought add 2 to the previous value in the sequence. But
            its much better to find the form from the value of n.</p>

        <BlockMath math="1,3,5,7,9 ..."/>

        <p>Simple this sequence is just add 2 to the last value and this is a arithmetic progression where <InlineMath
            math="a = 1"/> and <InlineMath math="d = 2"/>. But how does the initial value work? Its not closed
            form that is a recurrence relation as we have the initial term and some formula. To make it closed form we
            have to think about not requiring the initial term so the following seems like it would work:</p>

        <BlockMath math="a_n = 2n + 1"/>

        <h4>Summary</h4>
        <p>This section is again critical to many later parts of mathematics that arise. So please read and understand
            it!! We have stated a few useful ways to find rules for generating terms of a sequence. Another way is to
            compare them to common sequence patterns such as arithmetic progression, geometric progression, perfect
            squares, perfect cubes, factorial, fibonacci and to the power of n (where we are multiplying by some term,
            as for example multiply by 3 would be n times in the sequence <InlineMath math="3^n"/>).</p>

        <h4 id={"Summations"}>Summations</h4>
        <p>Summations are simply sequences that are the additions of terms of a sequence. These expressions are
            expressed using the sigma notation.</p>

        <BlockMath math="\sum_{j=m}^n a_j"/>

        <p>This is read as the sum from <InlineMath math="j = m"/>, to <InlineMath math="j = n"/> of <InlineMath
            math="a_j"/> We have used the variable j to be used as the index of the summation but any variable can be
            used. We start with a lower limit m and a upper limit of n.</p>

        <p>Double summations occur frequently in mathematics and computing such as a nested for loop. So just approach
            them like you do with computing, work out the nested loop first for the first value and the second value,
            then SUM up the values for the outer loop indexes.</p>

        <h4>Summary</h4>
        <p>Please note again that this section is critical and we will cover it again in later sections. Also note that
            common summations occur in maths and have a known closed form such as the sum of natural numbers, the sum of
            squares. Whats important to remember that these are closed form of the entire sum not each step to the sum
            so always think n as the total count of the sum you will have and its that final result added to the
            previous n items.</p>

        <br/>
        <hr/>
        <br/>

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
            example -11 mod 3. You count 2,1,0,2,1,0,2,1,0,2,1 so the answer of -11 mod 3 = 1. For negative numbers you
            round down when taking the floor for the quotient for example -3.6 is floored to -4. That is why the answer
            is 1 above as its <InlineMath math="-11 \div 3 = (floor) -4"/> so this is <InlineMath
                math="-4 \times 3 + 1 = -11"/></p>

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

        <br/>
        <hr/>
        <br/>

        <h3 id={"logic"}>Logical Framework</h3>

        <h4>Contrapositive Statement</h4>
        <p><b>Contrapositive statement</b> is when you negate both values of a implies statement and swap the order as
            follows: <Latex>$p \Longrightarrow q$</Latex> then the contrapositive statement is <Latex>$\neg q
                \Longrightarrow \neg
                p$</Latex> and these are logically equivalent as the truth table will be identical.</p>

        <p>Now for some examples taken from the exercise in Discrete Mathematics (Biggs). Write down the contrapositive
            statement of &quot; if n is a multiple of 7 then n is not a multiple of 3&quot;, where the contrapositive
            is &quot; if n is a multiple of 3 then n is not a multiple of 7&quot;.
        </p>

        <h5>Example</h5>

        <p>An example from the same book given is closely related to proof by contradiction. <i>&quot;The number 3 is a
            prime, and 3+1 = 4 is a perfect square. Show that there are no other prime numbers n such that n+1 is a
            perfect square.&quot;</i></p>

        <h5>Solution</h5>
        <p>So this question is dealing with the universe of all natural numbers greater than 4. We are asked to prove
            the statement.</p>

        <p><Latex>$n$ is a prime $\Longrightarrow n + 1$</Latex> is not a perfect square.</p>

        <p>Lets prove this as the contrapositive.</p>

        <p><Latex>$n + 1$ is a perfect square $\Longrightarrow n$</Latex> is not a prime.</p>

        <h6>Proof</h6>

        <p>If <Latex>$n + 1 = m^2$ then $n = m^2 -1 = (m+1)(m-1)$</Latex>. So we have moved the +1 to the other side to
            the square and then factorised it. Therefore as prime needs a single factor of m the only prime that can be
            made from the product of numbers is when <Latex>$m = 2$ then $n$ is $3$</Latex>. As stated the only prime so
            we have proved it.</p>

        <p>Nice things are starting to come together remember all of this for the Proofs section in Maths for Computer
            Science.</p>

        <br/>
        <hr/>
        <br/>

        <h3 id={"naturalnumbers"}>Natural Numbers</h3>

        <p></p>


    </div>
);

export default DiscreteMaths;
