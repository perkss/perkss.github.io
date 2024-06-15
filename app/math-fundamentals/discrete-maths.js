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
            <li><Link to={"#integers"}>Integers</Link></li>
            <li><Link to={"#artof"}>Art of Computer Programming Prelimineries</Link></li>
            <li><Link to={"#concrete"}>Concrete Mathematics</Link></li>
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

        <h5>Binomial Coefficient</h5>

        <p>In sets its common to see examples such as you have a bag of 10 items how many different ways can I pick 5
            objects from the bag. So we have n choose m in this case 10 choose 5. Written as <InlineMath
                math="{n \choose m}"/> in this case <InlineMath math="{10 \choose 5}"/>. In more mathematical terms
            means the number of subsets of size <i>m</i> of a fixed set of size <i>n</i></p>

        <p>If you want to find out the answer to the binomial coefficient you use the factorial formula.</p>

        <p>The formula for permutations where order matters is:</p>
        <BlockMath math="{n \choose m} = {n \choose n - m} = \frac{n!}{(n - m)!}"/>
        <p>The formula for combinations where order does not matter is:</p>
        <BlockMath math="{n \choose m} = {n \choose n - m} = \frac{n!}{m!(n - m)!}"/>

        <p>A great explanation from <a
            href={"https://math.stackexchange.com/questions/1525332/how-many-ways-can-i-choose-5-items-from-10"}>StackExchange</a>
        </p>

        <p>Our example we have 10 items in a bag. To find how many was to choose five we have you would do this by
            choose 1 item then you have 9 items left, another item then you have 8 items left, then another 7, then
            another 6 then another 5 items left and you have chosen five items. This gives a total of <InlineMath
                math="10 \times 9 \times 8 \times 7 \ times 6 = (n - m + 1) = \frac{10!/5!} = 30240"/> where n = 10 and
            m = 5.
            This is the formulate for permutations where order matters. If order does not matter we have the possible
            options for the five are . <InlineMath
                math="5 \times 4 \times 3 \times 2 \ times 1 = 5!"/> this plugged in. If we had been choosing 4 from 10
            it would be <InlineMath
                math="\frac{10!/4!6!}"/> as we had 6 balls to choose from so 6 permutations. Then we plug this in and
            its <InlineMath
                math="\frac{10!/5!5!}"/></p>

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

        <h5>Injective and Surjective that's a Bijective Function</h5>
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
            youngest child function for parents with no children. When domain
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

        <p>In recurrence relation view this first part is initial amount <InlineMath math="a_0"/> which is <InlineMath
            math="100"/>. Then we just calculated <InlineMath math="a_1 = 110"/></p>

        <p>Some questions why do we plus with 1? As its one amount the starting amount. How come we can have <InlineMath
            math="100 \times 0.10"/> and then have <InlineMath math="100 \times (1 + 0.10)"/> this is because we can
            factor out the 100 and put it outside the brackets to have the equivalent sum..
        </p>

        <BlockMath math="110 + 110 \times 10\%"/>

        <BlockMath math="110 \times 1 + 110 \times 0.10"/>

        <BlockMath math="110 \times (1 + 0.10)"/>

        <BlockMath math="110 \times (1.10)"/>

        <BlockMath math="= 121"/>

        <p>In recurrence relation view the first part calculated as initial amount <InlineMath math="a_0"/>. We now
            have <InlineMath math="a_1 = a_0 \times (1.1)"/> where <InlineMath math="a_0"/> is the <InlineMath
                math="100"/> calculated previously and now <InlineMath math="a_1 = 110"/>. Then <InlineMath
                math="a_2 = a_1 \times (1.1)"/></p>

        <p>Whats so great is that we can go straight to year 3 if we multiply the interest 3 times.</p>

        <BlockMath math="100 \times 1.10 \times 1.10 \times 1.10"/>

        <p>But it is far easier to write this down using exponents which in this case would be:</p>

        <BlockMath math="100 \times 1.10^3 "/>

        <p>Which leaves us with the closed formula to work out compound interest as:</p>

        <BlockMath math="Present Value \times (1 + Interest Rate)^{number of years} = Future Value"/>

        <p>What happens if we want to double our money. How long does it take?</p>

        <p>We make the equation to represent this:</p>

        <BlockMath math="100 \times (1.10)^x = 200 "/>

        <p>Then we divide both sides by 100.</p>

        <BlockMath math="(1.10)^x = 2 "/>

        <p>Then using logarithms we can find the exact value.</p>

        <BlockMath math="x = \log _{1.1}(2)"/>

        <p>Divide and conquer operations like Binary Search have similar recurrence relations a <a
            href={"https://users.cs.duke.edu/~ola/ap/recurrence.html"}>reference.</a></p>

        <h4>Special Integer Sequences</h4>

        <p>With the above we were given the closed formula (the pattern the sequence is running in formula) a recurrence
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

        <p>Question: How do we compute the summation from 1 to <i>n</i>? Well lets check a more basic
            example from 1 to 5. <InlineMath math="1 + 2 + 3 + 4 + 5"/>. We can add the largest and the smallest value.
            So we have <InlineMath math="1 + 5 = 6"/> then add the next <InlineMath math="2 + 4 = 6"/> this case we have
            an odd number so we take two full pairs and the one half pair in this example the <i>3</i> which is half
            if <i>6</i> and then we do <InlineMath math="2.5 \times 6 = 15 = 1 + 2 + 3 + 4 + 5"/>. If we take the
            sequence from 1 to <i>n</i> we call this the <strong>arithmetic sequence</strong> with the sum of the
            smallest and largest numbers is <InlineMath math="n + 1"/> as there are <i>n</i> numbers there
            are <InlineMath
                math="\frac{n}{2}"/> pairs. As we saw before we took the pairs. So we have <InlineMath
                math="(n + 1)(\frac{n}{2})"/> and this equals <InlineMath math="\frac{n^2}{2} + \frac{n}{2}"/> as you
            expand out the bracket terms. <InlineMath math="n * \frac{n}{2}"/> and <InlineMath math="1 * \frac{n}{2}"/>.
            Testing this in our example we get <InlineMath math="\frac{5^2}{2} + \frac{5}{2} = 15"/> as we calculated
            before.</p>

        <br/>
        <hr/>
        <br/>

        <h3 id={"numbertheory"}>Number Theory</h3>

        <h4>Division</h4>
        <p>When <i>a</i> divides <i>b</i> we say that <i>a</i> is a factor or divisor of <i>b</i> and that <i>b</i> is a
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
            discusses the clock method for dealing with mods. </p>

        <p>So for example <InlineMath math="6 \div 4 =  1.5 = floor(1.5) = 1"/> then the remainder is
            calculated <InlineMath math="6 \mod 4 = 2"/> which can then be viewed as fractional form of <InlineMath
                math="\frac{2}{4} = \frac{1}{2} = 0.5"/> which makes perfect sense if you check the division above with
            the fractional form before we floor it.</p>

        <p>Just remember if its mod 4 then you have a clock of <InlineMath math="0,1,2,3"/> and
            you count clockwise so here you have <InlineMath math="0,1,2,3,0,1,2"/> and <strong>remember</strong> you
            start at 0 for the number of times the value of <i>a</i> round the clock for the size of <i>n</i>.</p>

        <BlockMath math="\frac{0}{4} = 0 \text{ remainder } 0"/>
        <BlockMath math="\frac{1}{4} = 0 \text{ remainder } 1"/>
        <BlockMath math="\frac{2}{4} = 0 \text{ remainder } 2"/>
        <BlockMath math="\frac{3}{4} = 0 \text{ remainder } 3"/>
        <BlockMath math="\frac{4}{4} = 1 \text{ remainder } 0"/>
        <BlockMath math="\frac{5}{4} = 1 \text{ remainder } 1"/>
        <BlockMath math="\frac{6}{4} = 1 \text{ remainder } 2"/>


        <p>If a is negative you count counter clockwise. For example <InlineMath math="-11\mod 3"/>. You
            count <InlineMath math="2,1,0,2,1,0,2,1,0,2,1"/> so
            the answer of <InlineMath math="-11\mod 3 = 1"/>. For negative numbers you round down when taking the floor
            for the quotient for
            example -3.6 is floored to -4. That is why the answer is 1 above as its <InlineMath
                math="-11 \div 3 = (floor) -4"/> so this is <InlineMath math="-4 \times 3 + 1 = -11"/></p>

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

        <h5>Recursive Definitions</h5>

        <p>When I started reading about recursive definitions I did wonder how they differed to Recurrence Relations.
            Recurrence relations are used to create a sequence where as recursion is not limited to only creating a
            sequence.</p>

        <h3 id={"integers"}>Integers</h3>

        <h5>Equivalence Relations</h5>

        <p>A <strong>relation R</strong> on a set X is a set of ordered pairs of members of X. Or informally when two
            members of a set X, say x and y are related in a particular way. Such as xy = 12</p>

        <p>A further definition that is stricter is <strong>equivalence relation</strong> is a relation where it is <i>reflexive,
            symmetric and transitive</i>. Reflexive is <Latex>$xRx$</Latex> for example <Latex>$xy=24$</Latex> is not
            reflexive because <Latex>$xx = x^2$</Latex> the square of x is not always equal to 24.</p>

        <p>It is however <i>symmetric</i> as <Latex>$xy = 24$</Latex> does imply that <Latex>$yx = 24$</Latex>, however
            it is not <i>transitive</i> as <Latex>$xy = 24$</Latex> and <Latex>$yz = 24$</Latex> does not imply
            that <Latex>$xz = 24$</Latex>
        </p>

        <p>The construction of Integers in Discrete Maths (Biggs) shows an interesting diagram 7.2. Its important to
            remember these pairs are being subtracted from each other to make the negative number on the left side and
            the positive version on the right side. In the explicit example for <i>-2</i> remember to subtract the right
            side from the left of the pair. For example <Latex>$(1,3) = -2 = 1 - 3$. Then the formula holds true for the
                relation of the pairs provided neat stuff.</Latex></p>

        <h2 id={"artof"}>The Art of Computer Programming: Math Preliminaries</h2>

        <p>Welcome to the section on one of the most important texts in the computer science world The Art of Computer
            Programming (Knuth). This section will cover the mathematical preliminaries section of the book from the
            first chapter. The Concrete Mathematics book we also study in the next section has taken the preliminaries
            even further. So if this is tricky for you please read Concrete Mathematics first. </p>

        <h3>Mathematical Induction</h3>

        <p>The book starts with a proof using Mathematical Induction. (A initially very scary concept, but please think
            like a mathematician not an engineer). The steps for mathematical induction are: </p>
        <ol className="text-list">
            <li>Give a proof that <Latex>$P(1)$</Latex> is true. Simply verify that the method works for the
                number <Latex>$1$</Latex>.
            </li>
            <li>Assume that the method works for an arbitrary number, <Latex>$n$ or sometimes $k$ is used but it means
                the same</Latex>.
            </li>
            <li>Give a proof that “if all of <Latex>$P(1), P (2), ..., P (n)$</Latex> are true, then <Latex>$P(n +
                1)$</Latex> is also true”; this proof should be valid for any positive integer <Latex>$n$. Simply prove
                that if the method works for an arbitrary number $k$, then it work for the number $k+1$</Latex>, too.
            </li>
            <li>After the 3 steps were completed, then the formula works for any number.</li>
        </ol>

        <p>Mathematical induction is used as a conclusive proof for an infinite number of statements one for
            each <Latex>$n$</Latex>. The term induction is used as one must somehow define what is to be proved before
            one can apply the technique of mathematical induction.</p>
        <h4>So Called Simple Example</h4>
        <p>Many books make this seem so easy and skip out a lot of steps so we will try cover this as they say simple,
            but as we say not so simple example. The example is that the sums of odd numbers is equal to the amount of
            odd numbers in the sum to the power or 2 for example.</p> <p><Latex>$1=1^2$$, 1+3=2^2$$, 1+3+5=3^2 . .
        .$</Latex></p>
        <p>This can be formulated as: <Latex>$1 + 3 + 5 . . . + $$(2n - 1) = n^2$.</Latex></p><p>Now lets do the fun
        part that looks scary but is actually simple when you understand step 2 and remember this is the sum to prove
        this by mathematical induction.</p>


        <strong>Step 1:</strong> Firstly we need to prove that the equation is valid when <Latex>$n = 1$. So we go ahead
        and substitute $n$ for $1$. When $n = 1$, instead of $(2n-1)$ we have $(2(1) - 1) = 1$, so the statement holds
        for $n = 1$ as $2 \times 1 = 2$ and then $2 - 1 = 1$.</Latex>

        <p></p>


        <strong> Step 2:</strong><Latex> We then need to assume that the equation is true for $n$.</Latex> (This is the
        part that always tripped me up before as we make the assumption that the proposed equation is true.)<br/>

        <strong>Assume: </strong> <Latex> $1 + 3 + 5 + ... + $$(2n - 1) = n^2$</Latex> <p></p>

        <strong>Step 3: </strong> <Latex>And then prove that the equation is true for $n + 1$. So we substitute $n$ on
        both sides with $n + 1$ giving the below. We are now working on the next in the sequence so the original left
        side sequence is kept in full including $(2n - 1)$ which is omitted in many texts which I find
        confusing.</Latex>
        <p></p>
        <strong> Prove: </strong> <br/><Latex> $1 + 3 + 5 +...+ $$(2(n + 1) - 1) = (n + 1)^2$</Latex>
        <p>So lets now prove this by working on simplifying the left hand side only to match the right hand side to see
            if the proof is true for <Latex>$n + 1$</Latex> values.</p>
        <br/>
        <strong>Proof: </strong><br/> <Latex> $1 + 3 + 5 +... + $$(2(n + 1) - 1)$</Latex>(The left side from
        above) <br/><br/>
        <Latex> $= 1 + 3 + 5 + ... + (2n - 1) + (2n + 2 - 1)$</Latex> (simplify we can see here the <Latex>$(2n -
        1)$</Latex> has returned as this is expected as we are working on the next in the sequence <Latex>$n +
        1$</Latex> so the original remains.)<br/><br/>
        <Latex> $= n^2 + (2n + 2 - 1)$</Latex> (by assumption Step 2 we can replace the left side of the equation
        with <Latex>$n^2$</Latex>)<br/><br/>
        <Latex> $= n^2 + 2n + 1$</Latex>(simplify) <br/><br/>
        <Latex> $= (n + 1)^2$</Latex>(See math prerequisites we did this example of simplification from the line
        above.) <br/><br/>

        Brilliant we have simplified the left side to match the right side, by induction, for every positive
        integer <Latex>$n,
        1 + 3 + 5 + ... + (2n - 1) = n^2$</Latex>. This is also proved visually using the square table in the book so
        please check that out. Some pointers it is the whole numer of squares up to the number so <Latex>$3$ is four
        squares as its the second step so $2 \times 2 - 1 = 3.$ Then you need to add the extra square from $1$ so that
        is $4$ which is $n^2$ so $2^2 = 4$ is equal to the added number of squares from the bottom left corner of
        $4$.</Latex>


        <p>
        </p>

        <h4>Fibonacci Example</h4>


        <h2 id={"concrete"}>Concrete Mathematics</h2>

        <p>The introduction chapter of Concrete Mathematics is tough, I have found that with many Computer Science
            Textbooks, so its sometimes good to revisit the first chapter once you have tried the relevant chapters, as
            the first usually covers a snapshot from the rest of the book. </p>

        <h3>Recurrent Problems</h3>

        <h4>Tower of Hanoi Problem: The Maths Explained</h4>


        <p><Latex>The Tower of Hanoi problem is a bit of fun, but the recurrence math behind it is intimidating, I hope
            we can walk through this and manage to get you to understand it as I have managed too with a lot of
            effort!</Latex></p>


        <p>The Tower of Hanoi problem is defined as given three pegs with one peg that has eight disks on it stacked in
            decreasing order. Transfer the disks to another peg moving only one disk at a time and never having a larger
            disk on top of a smaller one. There are some great examples of this <a
                href="https://www.mathsisfun.com/games/towerofhanoi.html">here</a>. Concrete Mathematics suggests some
            key points of tackling a problem like this firstly generalise the problem so what would happen if there
            were <Latex>$n$ disks? Then we can scale down the problem and look at small cases first what if there were
                only one or two disks? Then NAME and CONQUER basically add some notation to the problem. </Latex></p>
        <p><Latex>Here they say $T_n$ is the minimum number of moves to transfer $n$ disks from one peg to another peg.
            For example $T_1 = 1$ is one disk as you are just moving one. Moving $T_2$ disks needs thinking about so we
            are moving to the $2$ disks to the same peg. Following the rules we will need to move the top disk which is
            the smallest to a peg, then the next disk to another peg as it cannot go on top of the smallest disk and
            then the smallest disk on top of the other disk hence this is $3$ moves, $T_2 = 3$. We also can say that
            $T_0 = 0$ as no disks are moved.</Latex></p><p><Latex>Now we need to scale up what if we had a near infinite
        amount of disks. We have just shown optimally we can move two disks in $3$ moves. To move three optimally we
        follow the pattern moving the top two disks as mentioned above, to the middle peg and then move the third and
        then move the top two disks back on top of the third. Here we can say the movement of the smallest disk
        is </Latex><InlineMath math="T_{n-1}"/><Latex> so the case of two disks it is $2$ disks to move it
        is one move, in the case of three disks to move the two smallest are two moves and so on. We then move the very
        bottom disk which is one move $T_1 = 1$. Then we have to move the </Latex><InlineMath
        math="T_{n-1}"/> disks back on top.</p>

        <p>Producing the formula for disk movement as at most: </p>

        <BlockMath math="T_n \leq 2T_{n-1} + 1 \text{       for } (n > 0)"/>

        <p>Lets do the actual calculation for three disks. With this formula when having three disks <Latex>$n = 3$ so
            $T_2 = 3$ we multiply that by $2$ giving us $6$ and then plus the constant of moving the largest disk as
            $1$. Hence we expect to be able to move three disks in $7$ moves.</Latex></p>
        <p>Firstly we need to move the smallest disk so<Latex> $T_1 = 1$ we then need to move the next disk again $1$
            move and then place the smallest disk back onto it so another $1$ move this is the </Latex><InlineMath
            math="T_{n-1}"/> part. We now need to move the bottom largest disk with the constant move
            of <Latex> $1$ and then move the other two disks back so the smallest onto another peg $1$ move and then the
                next disk on top of the largest disk which takes $1$ move and then the smallest disk on top again so
                another $1$ move totalling $3$ again and this all totals $7$ moves so the formula is correct.</Latex>
        </p>

        <p><Latex>This has produced the following inequality and base case for $n = 0$:</Latex></p>

        <p><BlockMath math="T_0 = 0;"/></p>

        <p><BlockMath math="T_n = 2T_{n-1} + 1"/></p>

        <p><Latex>A set of equalities like this are called a recurrence (recurrence relation or recursion relation). It
            gives a boundary value and an equation for general value terms. The problem with this recurrence is that it
            is not in closed form (an expression that can be evaluated in finite number of steps) and what take a long
            time to computer for large values of $n$. As you need to know the sequence up to $n$ to work it out. To
            produce this closed form we need to solve the recurrence relation using mathematical induction, we have seen
            this in the Art of Computer Programming section before!</Latex></p>

        <p><Latex>Firstly we need to make a guess on the correct solution so we take a look at the small cases $T_1 = 0
            \times 1 + 1 = 1;$ $T_2 = 2 \times 1 + 1 = 3;$ $T_3 = 2 \times 3 + 1 = 7;$ $T_4 = 2 \times 7 + 1 = 15;$ $T_5
            = 2 \times 15 + 1 = 31;$ </Latex></p>

        <p>This pattern appears to be <BlockMath math="T_n = 2^n - 1, \text{ for } n \geq 0"/> this is our proposed
            solution.</p> <p><Latex>Mathematical induction is a general way to prove that some statement about the
        integer $n$ is true for all $n \geq n_0$. Firstly proving when $n$ has its smallest value, $n_0$ called the
        basis step. Then we prove for the statement $n$ > $n_0$ for all values between $n_0$ and $n-1$.</Latex></p>


        <p><Latex>Base case: $T_0 = 2^0 - 1 = 0$</Latex></p>

        <p><Latex>Inductive Step: Here the book assumes the reader knows rules of indices so we will walk through step
            by step.</Latex></p>

        <p><InlineMath math="T_n = 2T_{n-1} + 1"/> so lets replace <Latex>$T_n$ with the proposed solution of </Latex>
            <InlineMath math="T_n = 2^n - 1, \text{ for } n \geq 0"/> and use <Latex>$n - 1$.</Latex></p>
        <p>Providing: </p><BlockMath math="2(2^{n-1} - 1) + 1"/>

        <p><Latex>Simplify: Firstly distribute parentheses </Latex><InlineMath
            math="2 \times 2^{n-1} + 2 \times (-1) + 1"/>. Now we can use the product rule of exponents
            that states
            if two powers have the same base they can simply be added, remember that <Latex>$2$ is the same as
                $2^1$</Latex>. So shown here we simply using the product rule: <InlineMath
                math="2^{1} \times 2^{n-1} = 2^{1 + n - 1} = 2^n"/></p>

        <p><Latex>Resulting in: $2^n - 2 + 1$. Equalling $2^n - 1$ which is the proposed solution so this proof is
            correct. Throughout the rest of the book it will mainly focus on the recurrence relation part as the first
            two steps are provided. A recap 1: Look at small cases 2: Find and prove a mathematical expression for
            theses
            small cases 3: FInd and prove a closed form for our mathematical expression in step 2.</Latex></p>

        <p><Latex>The problem with solving like this is that we had to make a guess. Alternatively we could simplify the
            recurrence by adding $1$ to both sides.</Latex></p>

        <BlockMath math="T_0 + 1 = 0 + 1"/>

        <BlockMath math="T_n + 1 = 2T_{n - 1} + 1 + 1"/> <BlockMath math="\text{ for } n > 0"/>

        <p><Latex>Now we let $U_n = T_n + 1$ giving $U_0 = 1$</Latex></p>


        <BlockMath math="U_{n-1} = T_{n - 1}+1 \text{ and therefore }"/>
        <BlockMath math="2T_{n - 1}+2=2(T_{n - 1}+1)=2U{n-1}"/>
        <BlockMath math="\text{As we can substitute } U_{n - 1}"/>
        <BlockMath math="\text{We have seen that }"/><BlockMath math="T_n + 1 = 2T_{n - 1} + 2"/>
        <BlockMath math="\text{ and }  U_{n-1} = T_n + 1"/>
        <p>Therefore combining these you see:</p>
        <BlockMath math="U_n = 2U_{n-1} \text{, with } U_0 = 1"/>

        <p>Now we can see that from our definition of <InlineMath math="U_n"/> it is simply doubling each
            time <InlineMath math="n"/> is increased. </p>

        <BlockMath math="U_1 = 2U_0"/>
        <BlockMath math="U_2 = 2U_1 = 2^2U_0"/>
        <BlockMath math="U_3 = 2U_2 = 2^3U_0"/>
        <BlockMath math="U_4 = 2U_3 = 2^4U_0"/>

        <p>We can now conjecture (form an opinion based on the information) that <InlineMath math="U_n = 2^nU_0"/> for
            each <InlineMath math="n"/> > <InlineMath math="0"/>. This is true for <InlineMath math="n = 0"/> lets use
            induction to check for when <InlineMath math="n \geq 0"/> then <InlineMath
                math=" U_{n+1} = 2U_n = 2 \times 2^nU_0 = 2^{n+1}U_0"/>.</p>

        <p>Now we can look back at the fact we found <InlineMath math="U_0 = 1"/> to say that <InlineMath
            math="U_n = 2^n"/> for each <InlineMath math="n \geq 0"/> and hence from our proposed definition
            of <InlineMath math="T_n = U_n - 1 = 2^n - 1"/> it has come back true.</p>


        <h3>Sums</h3>

        <p><Latex></Latex></p>
        <h3>Integer Functions</h3>

        <p><Latex></Latex></p>
        <h3>Number Theory</h3>

        <p><Latex></Latex></p>
        <h3>Binomial Coefficients</h3>

        <p><Latex></Latex></p>
        <h3>Special Numbers</h3>

        <p><Latex></Latex></p>
        <h3>Generating Functions</h3>

        <p><Latex></Latex></p>

        <h3>Discrete Probability</h3>

        <h3>Asymptotic</h3>


    </div>
);

export default DiscreteMaths;
