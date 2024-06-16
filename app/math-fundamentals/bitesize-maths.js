import React from 'react';
import Latex from 'react-latex';
import {BlockMath, InlineMath} from 'react-katex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {HashLink as Link} from 'react-router-hash-link';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import GridMethod from "../../images/math/AlgebraicDivisionGrid.jpeg";


const BiteSizeMath = () => (


    <div>
        <h2>Foundational Mathematics</h2>

        <p>Welcome to the very beginning of our journey through mathematics, this first section of Math
            Fundamentals.</p>

        <h3>Topics</h3>
        <ul className="text-list">
            <li><Link to="#fractions">Fractions</Link></li>
            <li><Link to="#factors">Factorising</Link></li>
            <li><Link to="#primes">Primes</Link></li>
            <li><Link to={"#reciprocal"}>Reciprocal</Link></li>
            <li><Link to={"#indices"}>Indices</Link></li>
            <li><Link to={"#squareroot"}>Square Root</Link></li>
            <li><Link to={"#surds"}>Surds</Link></li>
            <li><Link to="#algebra">Algebra</Link></li>
            <li><Link to={"#inequalities"}>Inequalities</Link></li>
            <li><Link to={"#polynomial"}>Polynomial</Link></li>
            <li><Link to={"#partialfraction"}>Partial Fractions</Link></li>
            <li><Link to={"#factortheorem"}>Factor Theorem</Link></li>
            <li><Link to={"#algebraicdivision"}>Algebraic Division</Link></li>
            <li><Link to={"#quadraticequation"}>Quadratic Equation</Link></li>
            <li><Link to={"#quadraticfunctiongraph"}>Quadratic Function and Graphs</Link></li>
            <li><Link to={"#simultaneousequation"}>Simultaneous Equations</Link></li>
            <li><Link to={"#absolutevalues"}>Absolute Values (Modulus)</Link></li>
            <li><Link to={"#geometry"}>Coordinate Geometry</Link></li>
            <li><Link to={"#parabola"}>Parabola</Link></li>
            <li><Link to={"#circles"}>Circles</Link></li>
            <li><Link to={"#polynomialgraph"}>Polynomial Graph</Link></li>
            <li><Link to={"#graphsketching"}>Graphical Transformations and Curve Sketching</Link></li>
            <li><Link to={"#proportion"}>Proportion</Link></li>
            <li><Link to={"#compositefunctions"}>Composite and Inverse Functions</Link></li>
            <li><Link to={"#permutation"}>Permutation</Link></li>
            <li><Link to={"#recurrencerelation"}>Recurrence Relation</Link></li>
            <li><Link to={"#trigonemtry"}>Trigonometry</Link></li>
            <li><Link to={"#mechanics"}>Mechanics</Link></li>
        </ul>

        <br/>

        <h3>Basic Rules</h3>

        <p>When multiplying or dividing two integers if the signs are different then the result is negative. If the
            signs are the same (both positive or both negative) then the result is positive.</p>

        <BlockMath math="4 \times 3 = 12"/>
        <BlockMath math="-4 \times 3 = -12"/>
        <BlockMath math="-4 \times -3 = 12"/>

        <BlockMath math="12 \div 4 = 3"/>
        <BlockMath math="-12 \div 4 = -3"/>
        <BlockMath math="-12 \div -4 = 3"/>

        <h3 id={"fractions"}>Fractions</h3>
        <p>A fraction is a numerical quantity that is not a whole number.</p>
        <h4>Add</h4>
        <p>Adding fractions you need to have the same denominator if they are not the same you can get the least common
            denominator of a common denominator. Once they have the same denominator you just add the numerator. </p>
        <BlockMath math="\frac{2}{5} + \frac{7}{5} = \frac{9}{5}"/>
        <h4>Subtract</h4>

        <p>Subtracting fractions is similar you need to make the denominator the same then can subtract.</p>
        <BlockMath math="\frac{3}{4} - \frac{1}{4} = \frac{2}{4} = \frac{1}{2}"/>

        <h4>Multiply</h4>
        <p>Rules multiplying is you multiply the numerator by the other numerator and the denominator by the other
            denominator and simplify if needed.</p>

        <BlockMath math="\frac{1}{2} \times \frac{2}{5} = \frac{2}{10} = \frac{1}{5}"/>

        <h4>Divide</h4>

        <p>Dividing fractions is a little more complex the steps are 1) Turn the second fraction upside down into its
            reciprocal. Multiply the first fraction by the reciprocal. Simplify as needed.</p>

        <BlockMath
            math="\frac{1}{2} \div \frac{1}{6} = \frac{1}{2} \times \frac{6}{1} = \frac{6}{2} = \frac{3}{1} = 3"/>


        <h3>Multiples and Factors</h3>

        <p>Lets <a href="https://www.bbc.co.uk/education/guides/zpvgdxs/revision">begin</a> with multiples (A multiple
            of a number is that number multiplied by an integer and there are an infinite amount) and factors (A factor
            is an integer that will divide exactly into another number.) for code examples please see <a
                href="https://github.com/perkss/basic-maths/blob/master/maths-for-computer-science/src/maths_for_computer_science/factors.clj">here.</a> An
            example of a multiple is that 15 is a multiple of 5 because <Latex>$ 3 \times 5 = 15$. So you multiplied 5
                by 3 to get 15. But 16 would not be a multiple of 5. Listing multiples of
                $5$ gives $5, 10, 15, 20, 25$</Latex> and so on. An example, 8 is a factor of 24 because 8 will divide
            into 24 exactly 3 times with no remainder (Bitesize). Factor pairs are are two numbers that multiply
            together to make another number so for example the factor pairs of <Latex>$24$ are $(1,24), (2,12), (3,8),
                (4,6)$. The algorithm for this is to divide the number (eg $24$) by the smallest divisor so beginning
                with $1$ as $1$ is always a factor pair and then terminating when the next number to divide by is
                already shown in the list of pairs. In the case of $24$ the algorithm can safely terminate at $6$ due to
                the pair $(4,6)$.


            </Latex></p>

        <p></p>

        <h3 id={"factors"}>Factorising</h3>

        <p>Finding what is multiplied together to get an expression. Basically as above we split the expression into a
            multiplication of simpler expressions. We should find the <strong>highest common factor</strong>.</p>

        <p>The steps to follow when factoring are to factor out common terms, see if it fits any of the identities below
            and keep going until you cannot factor anymore.</p>

        <h5>Common Identities</h5>

        <BlockMath math="a^2 - b^2 = (a+b)(a-b)"/>
        <BlockMath math="a^2 + 2ab + b^2 = (a+b)(a+b)"/>
        <BlockMath math="a^2 - 2ab + b^2 = (a-b)(a-b)"/>
        <BlockMath math="a^3 + b^3 = (a+b)(a^2-ab+b^2)"/>
        <BlockMath math="a^3-b^3 = (a-b)(a^2+ab+b^2)"/>
        <BlockMath math="a^3+3a^2b+3ab^2+b^3 = (a+b)^3"/>
        <BlockMath math="a^3-3a^2b+3ab^2-b^3 = (a-b)^3"/>

        <h4>Methods</h4>

        <h5>unFOIL</h5>
        <p>To factor the quadratic <InlineMath math="ax^2 + bx + c"/> you can use the unFOIL method the opposite to
            multiplying our and distributing a binomial.</p>

        <p>Step 1: Determine all the ways you can multiply numbers to get <i>a</i>.</p>
        <p>Step 2: Determine all the ways you can multiply two numbers together to get <i>c</i>.</p>
        <p>Step 3: Look at the sign of <i>c</i> and the lists of multiples from step 1 and 2. Then if it is a
            positive <i>c</i> find a value from Step 1 list and another from the step 2 list where the sum of their
            product and the product of the two numbers they are paired with result in <i>b</i>. <InlineMath
                math="e \times g"></InlineMath> and <InlineMath math="f \times h"></InlineMath> such that <InlineMath
                math="(e \times g) + (f \times h) = b"/></p>
        <p>If <i>c</i> is negative then find the numbers so that <InlineMath math="e \times g"/> and <InlineMath
            math="f \times h"/> are <InlineMath math="(e \times g) - (f \times h)"/></p>

        <p>Step 4: Arrange the positions of the variables above in a binomial <InlineMath math="(e h)(f g)"/></p>
        <p>Step 5: Then set the signs where signs are both positive when <i>c</i> is positive and <i>b</i> is positive.
        </p>
        <p>Step 5: Then set the signs where signs are both negative when <i>c</i> is positive and <i>b</i> is negative.
        </p>
        <p>Step 5: Then set the signs where signs are one sign is positive and negative depending on if <i>c</i> is
            positive or negative and <i>b</i> is positive or negative.
        </p>

        <h4 id={"primes"}>Prime Numbers</h4>
        <p> A prime number has exactly two factors. A prime number can only be divided by <Latex>$1$</Latex> and itself.
            Hence three key facts can be drawn from this:
        </p>
        <ol className="text-list">
            <li><Latex>$1$ is not a prime number as it does not have two factors only one factor itself.</Latex></li>
            <li><Latex>$2$ is the only even prime number as all other even numbers have $2$ as a factor.</Latex></li>
            <li>There are a infinite number of prime numbers</li>
        </ol>

        <p>Prime numbers an example: Given <Latex>$33, 34, 35, 36, 37$</Latex> which numbers are prime? </p>

        <p>Well
            from the key facts we can ignore even numbers of <Latex>$34$ and $36$ straight away. Now to work out $33$ we
                can
                divide by numbers from $3$ to the $\sqrt 33$ as prime divisors will always be pairs. One member of the
                pair
                will be less than the square root and the other will be more thus adding an efficiency to the algorithm.
                So
                we can try $33\mod 3 = 0$ so here the first number tried is divisible so is modulo $0$ as $33/3 = 11$ so
                $33$ is not prime. Now lets try the same for $35$ so $35 \mod 3$ is $!=0$, now try $35\mod 4$ which is
                also
                $!= 0$, now we try $35 \mod 5=0$ which is as $35/5 = 7$ so $35$ is not prime. Finally we can run this
                algorithm over $37$ and see that no value when applying $37\mod 3$ ... $\sqrt 37$ so $37$ is
                prime.</Latex>
        </p>

        <p>This function has been written in Clojure for example:</p>
        <p>

            <div className="code-block">
                <SyntaxHighlighter language='clojure' style={darcula}>(defn is-prime? [n]
                    (cond
                    (&lt; n 2) false
                    (= 2 n) true
                    :else
                    (not-any? #(zero? (mod n %)) (cons 2 (range 3 (inc (Math/sqrt n)) 2)))))</SyntaxHighlighter>
            </div>
        </p>
        <p>Further explanation of efficiencies. You are only required to test up to the square root of n as if n is not
            prime it can be factored by a * b and if a and b were greater than the square root of <Latex>$n$ then $a
                \times b$ would be
                greater than $n$</Latex>. Hence we only need to check factors that are less than or equal to the square
            root of n.</p>

        <p>Another interesting way to prove that a number is not prime is to show it in the difference of squares form.
            A question in Discrete Mathematics (Biggs) asks this and a great answer is written <a
                href={"https://www.quora.com/How-can-I-prove-that-2-66-1-is-not-a-prime-number-What-is-the-thought-process-or-rather-how-to-approach-a-problem-like-this-I-have-trouble-with-knowing-where-to-start-on-a-proof"}>here. </a>
            But basically if you can get the form <Latex>$(m+1)(m-1)$</Latex> you know a number is not prime
            unless <Latex>$(m-1) = 1$</Latex> as <Latex>$(m+1)$</Latex> can never equal 1 as m will always be greater
            than 0 as 0 is not a <a href={"http://curiouscheetah.com/BlogMath/is-zero-a-factor-of-zero/"}>factor</a>. In
            the example question having <i>m</i> as <InlineMath math="2^{33}"/> is not going to be zero so it is not
            prime!
            You maybe wondering about 1 being prime again well no as our definition says two factors for prime 1 and
            itself
            therefore 1 only has itself so it is <b>NOT PRIME.</b>
        </p>

        <p>

            Prime Factors are factors of a number that are also prime. The method is to look for two factors, check if
            they are prime if they are not break them down until they are. Then to get back to the original you multiply
            together all the prime factors. A nice reference is <a
            href={"https://study.com/academy/lesson/how-to-find-the-prime-factorization-of-a-number.html"}>here.</a>
        </p>

        <p>To look for the two factors you can form a tree. Where you divide the top number by a multiple until it is a
            prime number. If the new leaf is not a prime number you divide again and repeat until it is a prime number.
            A easy start is usually dived by 2. Then you have all the prime numbers which a terminal leaves of the tree
            as the factors. </p>

        <p>Highest common factor is a factor shared by two or more numbers for example 8 and 12 have the common factors
            of 1,2 and 4. The highest common factor here is 4. </p>
        <p>Lowest common multiple is a number that is shared multiple of two or more numbers. For example the lowest
            common multiple of 3 and 4 is 12.</p>


        <h4 id={"reciprocal"}>Reciprocal</h4>

        <p>Reciprocal of a number is the 1 divided by the number for example <InlineMath math="8"/> the reciprocal
            is <InlineMath math="\frac{1}{8}"/>. For fractions you flip the whole number over.</p>

        <h4>Finding slope between two points</h4>

        <p>In algebra to find the slope between two points you can use the formula.</p>

        <BlockMath math="\frac{y2 - y1}{x2 - x2}"/>

        <p>Basically it is dividing the vertical change (rise) by the horizontal change (run).</p>


        <h3 id={"indices"}>Indices</h3>
        <p>The law of indices are important to know as a reference so please refer back to these when required: <a
            href="https://www.bbc.co.uk/education/guides/z826y4j/revision/5">Source</a>
        </p>

        <p>When we have the exponent 0 then then result is always 1. <InlineMath math="9^0 = 1"/>.</p>

        <p>When we have the exponent 1 then then result is always the base number. <InlineMath math="9^1 = 9"/>.</p>

        <p><InlineMath math="0^0"/> this is indeterminate. As it could be zero or one.</p>

        <p>Be careful about grouping and use parentheses as <InlineMath math="(-2)^2 = (-2) \times (-2) = 4"/> but
            without <InlineMath math="-2^2 = -(2 \times 2) = -4"/></p>

        <p>Another example is <InlineMath math="(ab)^2 = ab \times ab"/> or without this would be <InlineMath
            math="ab^2 = a \times (b)^2 = a \times b \times b"/></p>

        <h4>Laws of Indices</h4>

        <p>First law Multiplication: <InlineMath math="a^m \times a^n = a^{m+n}"/> for example <InlineMath
            math="3^2 \times 3^5 = 3^{2+5} = 3^7"/> as this is <InlineMath
            math="(3 \times 3) \times (3 \times 3 \times 3 \times 3 \times 3) = 3^7"/></p>
        <p>Second law Division: <InlineMath math="a^m \div a^n = a^{m-n}"/> for example <InlineMath
            math="a^4 \div a^2 = a^{4-2} = a^2"/> this can be thought as <InlineMath
            math="\frac{a \times a \times a \times a}{a \times a}"/> which can be cancelled out which would leave
            you <InlineMath math="a \times a = a^2"/></p>

        <p>Third law raising a power to another power: <InlineMath math="(k^3)^2 = k^3 \times k^3"/> this is stating
            that <InlineMath math="k^3"/> is raised again by the power of 2. In this case then we multiply the powers
            together. For example <InlineMath math="(k^3)^2 = (k^{3 \times 2} = k^3 \times k^3 = k^6)"/>. An example of
            this is <InlineMath math="(3a^4)^3 = 3^3 \times a^{4 \times 3} = 27 \times a^{12} = 27a^{12}"/></p>

        <p>Fourth law if <InlineMath math="a > 0 \implies a^0 =1"/> this is because any number divided by itself is 1.
            For example <InlineMath math="a^2 \div a^2 = a^{2-2} = a^0"/> as <InlineMath
                math="j^2 \div j^2 = 25 \div 25 = 1"/></p>

        <p>Fifth law if we have negative it can be solved as <InlineMath math="a^{-n} = \frac{1}{a^n}"/> For
            example <InlineMath math="3^5 \times 3^{-5} = 3^0 = 1"/> this can be rearranged by dividing both sides
            with <InlineMath math="3^5"/> as <InlineMath math="3^{-5} = \frac{1}{3^5}"/></p>

        <p>Sixth law is fractional powers this will result in the denominator of the fraction becomes the root and then
            numerator becomes the power to raise too as this formula states<InlineMath
                math="a^{\frac{m}{n}} = (\sqrt[n]a)^m"/>. For example <InlineMath
                math="8^{\frac{2}{3}} = (\sqrt[3]8)^2 = 2^2 = 4"/></p>


        <h4>Some further examples:</h4>

        <p>In this example we need to simplify the term in the brackets in this case the bracket is raised to the power
            of 2 so that is exampled to be <InlineMath math="(3^2) \times y^2 = 9y^2"/>.</p>

        <BlockMath math="4y^4 \times (3y)^2 = 4y^4 \times 9y^2 = 36y^6"/>

        <p><a href={"https://www.mathsisfun.com/algebra/variables-exponents-multiply.html"}>Math is fun</a> provides
            some good examples. In particular its worth highlighting.</p>

        <p>Mixed variable example is we just add up the exponents of the same variable. Remember when there is not power
            it is to the power of one.</p>
        <BlockMath math="(x^3y^5)(x^2yz) = x^{3 + 2} y^{5 + 1} z^1 = x^5y^6z"/>

        <p>Variables will often have constants you simply multiply the constants and put the result in the answer for
            example.</p>
        <BlockMath math="(3x^2y^2)(4x^2) = 3 \times 4 x^{2 + 2} y^2 = 12x^4y^2"/>
        <p>Negative exponents means how many times to divide by the number. You take the exponent and take 1 and divide
            by the number to the power of the positive exponent.</p>
        <BlockMath math="4^{-2} = \frac{1}{4^2} = \frac{1}{16}"/>
        <BlockMath math="x^{-1} = \frac{1}{x}"/>
        <BlockMath math="x^{-2} = \frac{1}{x^2}"/>
        <BlockMath math="x^{-3} = \frac{1}{x^3}"/>

        <p>Dividing exponents is easy. Simply subtract the bottom exponents from the top for like terms. In this case we
            get negative exponent so it moves to be a denominator and the z's get cancelled out.</p>
        <BlockMath math="\frac{x^3yz^2}{xy^2z^2} = x^{3-1}y^{1-2}z^{2-2} = x^2y^-1z^0 = \frac{x^2}{y}"/>

        <h3 id={"squareroot"}>Square Root</h3>

        <p>The square root of a number can be negative for example <InlineMath math="-3 \times -3 = 9"/> but
            also <InlineMath math="3 \times 3 = 9"/> therefore the square root could be <InlineMath
                math="-3"/> or <InlineMath math="3"/>. But when using the square root symbol it can only give the
            positive or zero result. Therefore <InlineMath math="\sqrt{9} = 3"/> is the positive value only.</p>

        <p>To simplify square roots make the number inside the square root as small as possible but still be a whole
            number.</p>

        <BlockMath math="\sqrt{12} = \sqrt{4 \times 3}"/>
        <p>Use the rule: <InlineMath math="\sqrt{ab} = \sqrt{a} \times \sqrt{b}"/></p>
        <BlockMath math="\sqrt{4 \times 3} = \sqrt{4} \times \sqrt{3}"/>
        <BlockMath math="\sqrt{4} \times \sqrt{3} = 2\sqrt{3}"/>

        <p>The above example is a simpler representation as the number inside the square root gets smaller and is a
            factor. This example is taken from <a
                href={"https://www.mathsisfun.com/numbers/simplify-square-roots.html"}>Maths is Fun</a></p>

        <p>For fractions there is another rule to follow to simplify <InlineMath
            math="\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}}"/>.</p>

        <p>Using this rule can make it simple for working with fractions.</p>

        <BlockMath math="\frac{\sqrt{30}}{\sqrt{10}} = \sqrt{\frac{30}{10}} = \sqrt{3}"/>

        <p>A more complex example</p>

        <BlockMath math="\frac{\sqrt{20} \times \sqrt{5}}{\sqrt{2}}"/>
        <BlockMath math="\frac{\sqrt{2 \times 2 \times 5} \times \sqrt{5}}{\sqrt{2}}"/>
        <BlockMath math="\frac{\sqrt{2} \times \sqrt{2} \times \sqrt{5} \times \sqrt{5}}{\sqrt{2}}"/>
        <p>Now cancel out terms</p>
        <BlockMath math="\sqrt{2} \times \sqrt{5} \times \sqrt{5}"/>
        <p>Now you can multiply out the two 5</p>
        <BlockMath math="\sqrt{2} \times 5"/>
        <p>Place at front the multiplication</p>
        <BlockMath math="5\sqrt{2}"/>

        <p>Another example to know is:</p>

        <BlockMath math="2\sqrt{12} + 9\sqrt{3}"/>

        <p>First simplify:</p>

        <BlockMath math="2\sqrt{12} = 2 \times 2\sqrt{3} = 4\sqrt{3}"/>

        <p>Now both terms has a <InlineMath math="\sqrt{3}"/> and we can add them.</p>

        <BlockMath math="4\sqrt{3} + 9\sqrt{3} = (4+9)\sqrt{3} = 13\sqrt{3}"/>

        <h3 id={"fracexponents"}>Fractional Exponents</h3>
        <p>Fractional exponents will take the root of the base number with the following general rule.</p>

        <BlockMath math="x^{\frac{1}{n}} = \sqrt[n]{x}"/>

        <p>The reason for this is as follows when you multiply a number by itself to get another number. This is the
            square root of the number that resulted in.</p>

        <BlockMath math="9^{\frac{1}{2}} \times 9^{\frac{1}{2}} = 9^{(\frac{1}{2} + \frac{1}{2})} = 9^{(1)} = 9"/>
        <p>Therefore: </p>
        <BlockMath math="\sqrt{9} \times \sqrt{9} = 9"/>
        <BlockMath math="9^{\frac{1}{2}} \times 9^{\frac{1}{2}} = 9"/>
        <p>Resulting in these being equivalent <InlineMath math="9^\frac{1}{2}"/> is the same as <InlineMath
            math="\sqrt{9}"/></p>

        <p>Some examples to make this clearer:</p>

        <BlockMath math="4^{\frac{1}{3}} = \sqrt[3]{4}"/>
        <BlockMath math="4^{\frac{1}{4}} = \sqrt[4]{4}"/>

        <p>A good guide is written up on <a href={"https://www.mathsisfun.com/algebra/exponent-fractional.html"}> Maths
            is fun</a></p>

        <h3 id={"surds"}>Surds</h3>

        <p>Surds are the representation of the most simplified version of a number. Where it cannot be simplified
            anymore in latin surd means death. It enables writing irrational numbers precisely. Irrational numbers are
            real numbers that cannot be written as a simple fraction. Having the exact surd form is useful in
            mathematics.</p>

        <h4>Key Facts</h4>

        <BlockMath math="a\sqrt{b} + c\sqrt{b} = (a+c)\sqrt{b}"/>
        <BlockMath math="a\sqrt{b} - c\sqrt{b} = (a-c)\sqrt{b}"/>
        <BlockMath math="\sqrt{a} \times \sqrt{a} = a"/>
        <BlockMath math="\sqrt{a} \times \sqrt{b} = \sqrt{ab}"/>
        <BlockMath math="\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}}"/>

        <h5>Example</h5>
        <p>Lets start simple we can simplify <InlineMath math="\sqrt{75}"/> this can be simplified as follows by looking
            for factors such as 25 and 3:</p>

        <BlockMath math="\sqrt{75} = \sqrt{25 \times 3} = \sqrt{25} \times \sqrt{3} = 5\sqrt{3}"/>

        <h5>Example</h5>

        <p>Finding the simplest surd without a calculator.</p>

        <BlockMath
            math="\sqrt{392} = \sqrt{4 \times 98} = \sqrt{4} \times \sqrt{2} \times \sqrt{49} = 2 \times \sqrt{2} \times 7 =  14\sqrt{2}"/>

        <p>Having surds on the denonminator is not a good thing. When a surd is written on the denominator of a
            fraction,
            we rationalise the denominator to make it simpler. We do this by multiplying the numerator and denominator
            by an expression that will simplify the surd on the denominator. Therefore you can multiply the fraction by
            the surd over the surd as the example below as if you do this is just multiply by 1 is the same result. </p>

        <h5>Example</h5>
        <BlockMath math="\frac{14}{\sqrt{7}} \times \frac{\sqrt{7}}{\sqrt{7}} = \frac{14\sqrt{7}}{7} = 2\sqrt{7}"/>

        <p>In the example we start with the tricky square root 7 at the bottom therefore we can multiply by the square
            root 7 over square root 7. This is legitimate as anything divided by itself is just 1 and you multiply
            anything by 1 is just itself. Which can then simplify the denominator to 7 and then you end up with the 14
            divided by the 7 to give the final answer of <InlineMath math="2\sqrt{7}"></InlineMath>.</p>


        <h5>Example</h5>
        <p>Another example provided shows how to solve with sqrt on the bottom.</p>

        <BlockMath math="\frac{5}{\sqrt{32}}"/>

        <p>Start by simplifying <InlineMath math="\sqrt{32}"/></p>

        <BlockMath math="\sqrt{32} = \sqrt{16 \times 2} = 4\sqrt{2}"/>

        <p>Now have:</p>
        <BlockMath math="\frac{5}{\sqrt{32}} = \frac{5}{4\sqrt{2}}"/>

        <p>We can now rationalise the denominator by multiplying the numerator and denominator by <InlineMath
            math="\sqrt{2}"/></p>

        <BlockMath
            math="\frac{5}{4\sqrt{2}} \times \frac{\sqrt{2}}{\sqrt{2}} = \frac{5\sqrt{2}}{4\sqrt{2} \times \sqrt{2}} = \frac{5\sqrt{2}}{4 \times 2} = \frac{5\sqrt{2}}{8}"/>

        <p>This is possible as <InlineMath math="\sqrt{2} \times \sqrt{2} = 2"/> which removes the root from the
            denominator and <InlineMath math="\frac{\sqrt{2}}{\sqrt{2}} = 1"/> so the multiplication does not affect the
            value of the fraction.</p>

        <h5>Example</h5>

        <p>In this case you can do a common denominator but we can simply multiply and remove the denominator of each
            side. Which is what is done here, then divide by the new denominator. </p>

        <BlockMath
            math="\frac{6}{\sqrt{3}} - \frac{8}{2\sqrt{2}} = \frac{6}{\sqrt{3}} \times \frac{\sqrt{3}}{\sqrt{3}} - \frac{8}{2\sqrt{2}} \times \frac{\sqrt{2}}{\sqrt{2}}"/>

        <p>We can then simplify by multiplying out and then dividing by the integer denominator. It ends up
            as <InlineMath math="2 \times 2"/> as the <InlineMath math="\sqrt{2} \times \sqrt{2} = 2"/> and then there
            is the extra <InlineMath math="2"/> that multiplies the result.</p>

        <BlockMath
            math="\frac{6\sqrt{3}}{3} - \frac{8\sqrt{2}}{2 \times 2} = 2\sqrt{3} - 2\sqrt{2} = 2(\sqrt{3} - \sqrt{2})"/>

        <h5>Example</h5>
        <p>Another more complex example is the following. Where we have two items in the denominator we simply multiply
            by both (the whole denominator still not just the surd) with the opposite sign. This allows them to be
            cancelled out.</p>

        <BlockMath math="\frac{2 + \sqrt{7}}{3 - \sqrt{2}}"/>
        <BlockMath math="\frac{2 + \sqrt{7}}{3 - \sqrt{2}} \times \frac{3 + \sqrt{2}}{3 + \sqrt{2}}"/>

        <BlockMath math="\frac{6 + 2\sqrt{2} + 3\sqrt{7} + \sqrt{14}}{3^2 - 3\sqrt{2} + 3\sqrt{2} - (\sqrt{2}) ^2}"/>

        <p>Note that the <InlineMath math="\sqrt{7} \times \sqrt{2} = \sqrt{14}"/> as stated in the rule earlier. </p>

        <p>Now it simplifies by cancelling the values out. In particular <InlineMath math="-3\sqrt{2} + 3\sqrt{2}"/> and
            also <InlineMath math=" (\sqrt{2}) ^ 2 = 2"/> as you multiply out the square root.</p>

        <BlockMath math="\frac{6 + 2\sqrt{2} + 3\sqrt{7} + \sqrt{14}}{9-2}"/>
        <p></p>
        <BlockMath math="\frac{6 + 2\sqrt{2} + 3\sqrt{7} + \sqrt{14}}{7}"/>


        <p>A good reference with lots of examples is <a
            href={"https://twinklsecondary.blog/simplifying-surds-as-level/"}>here</a>.</p>

        <h3 id={"algebra"}>Algebra</h3>

        <h4>Basic Rules</h4>

        <p>When working with algebra the order of the operations matter.</p>

        <p>Grouping Symbols: Starting from the inside out and then powers and roots, division and multiplication (can be
            done at the same time) then addition and subtraction.</p>

        <p>Important: When the expression is in fraction form, perform all the operations on the numerator and
            denominator separately and then finally divide.</p>

        <h4>Like Terms</h4>

        <p><strong>Like Terms</strong> have exactly the same variables in them and each variable is powered the same.
            For example two terms that are alike are <InlineMath math="5a^2bc^3"/> and <InlineMath math="2a^2b^3"/> as
            they have the same variables and powers. The difference in numerical coefficient is fine. But <InlineMath
                math="5a^3bc^2"/> is not the same as <InlineMath math="2a^2bc^3"/> as the powers of the same bases are
            different.
        </p>

        <h5>Adding and Subtracting Like Terms</h5>

        <p>When adding and subtracting if they are like terms you can simply combine the like terms and simplify.</p>

        <p>An example taken from Algebra 1 for Dummies.</p>

        <BlockMath math="8x^2 - 3x + 4xy - 9x^2 - 5x - 20xy"/>

        <BlockMath math="(8x^2 - 9x^2)+(-3x -5x)+(4xy - 20xy) = -x^2 - 8x - 16xy"/>

        <h4>Multiplying Algebraically</h4>

        <p>When multiplying and dividing you can use the law of indices and work on terms where the base is the same,
            but they do not need to be like terms so can have different powers. When multiplying factors containing
            variables simply multiply the coefficients and then the variables as usual. If the bases are the same you
            can add the exponents as per the law of indices.</p>

        <p>An example taken from Algebra 1 for Dummies.</p>

        <BlockMath math="(4x^2y^2z^3)(3xy^4z^3) = 12x^3y^6z^6"/>

        <h4>Dividing Algebraically</h4>

        <p>When you need to divide algebraically you write the problem as a fraction then divide the coefficient and use
            the law of indices to divide the variables that are the same. <strong>Each variable is considered
                individually.</strong></p>


        <h4>Expanding Brackets</h4>
        <p>When working with future maths expanding brackets on Algebra is key lets have a <a
            href="https://www.bbc.co.uk/education/guides/zcqmsrd/revision/3">Bitesize</a> refresher. Expanding brackets
            directly means that we multiply each term in the expression by the term outside of it.

        </p>
        <p><h5>Examples</h5>
            <ul className="text-list">
                <li><Latex>$3(m + 7) = $$3 \times m + 3 \times 7 $$= 3m + 21$</Latex></li>
                <li><Latex>$k(k - 2) = $$k \times k - 2 \times k $$= k^2 - 2k$</Latex></li>
                <li><Latex>$3(m + 7) = $$3 \times m + 3 \times 7 $$= 3m + 21$.</Latex></li>

            </ul>

        </p>

        <p>When expanding out brackets with powers we must remember the Laws of Indices noted above. For example to
            expand <Latex>$5p^3q(4pq - 2p^5q^2 + 3p)$ we need to do the following steps:</Latex></p>
        <ol className="text-list">
            <li><Latex>$5p^3q \times 4pq =$$ 20p^4q^2$</Latex></li>
            <li><Latex>$5p^3q \times - 2p^5q^2 =$$ - 10p^8q^3$</Latex></li>
            <li><Latex>$5p^3q \times 3p =$$ 15p^4q$</Latex></li>
            <li><Latex>$5p^3q(4pq - 2p^5q^2 + 3p) =$$ 20p^4q^2 - 10p^8q^3 + 15p^4q$</Latex></li>

        </ol>

        <p>Expanding and then simplifying is another key skill required remember the rules of BIDMAS for this. <Latex>$6g
            + 2g(3g + 7) = $$6g + 2g\times 3g + 2g\times 7 = $$6g + 6g^2 + 14g$</Latex>. Here you multiply the bracket
            equation <Latex>$(3g+7)\times 2g$</Latex> following the rules of BIDMAS. Then you simplify it resulting
            in <Latex>$6g^2 + 20g$</Latex>. </p>

        <h4>Expanding Double Brackets</h4>
        <p>To expand double brackets each term needs to be multiplied together so the first term in the first bracket
            needs to be multiplied by the first and second term in the second bracket. And then the second term in the
            first bracket needs to be multiplied by the first and second term in the second bracket also. An
            example <Latex>expand the bracket $(2m - 3)(m + 1)$</Latex>: </p>


        <ol className="text-list">
            <li><Latex>$2m\times m =$$ 2m^2$</Latex></li>
            <li><Latex>$2m\times 1 =$$ 2m$</Latex></li>
            <li><Latex>$(-3)\times m =$$ -3m$</Latex></li>
            <li><Latex>$(-3)\times 1 =$$ -3$</Latex></li>


        </ol>

        <p>Resulting in <Latex>$2m^2 + 2m - 3m - 3$</Latex> which can be simplified down to <Latex>$2m^2 - m -
            3$</Latex>.</p>

        <p>This process can be applied to any number of brackets that need expanding. Also if you see something to the
            power of as brackets such as <Latex>$(2n+1)^2$</Latex> then it is the same as <Latex>$(2n+1)(2n+1)$ which
                can be expanded doing the same as above to $4n^2 + 2n + 2n + 1$ $= 4n^2 + 4n + 1$</Latex>. Remember this
            part for Math prerequisites.</p>


        <h3 id={"inequalities"}>Inequalities</h3>

        <p>Things are not always equal for example someone could be faster than someone else but we do not know how fast
            therefore we just say that he was faster. Which can be written as <InlineMath math='a > b'/>.</p>

        <p>The aim of solving inequalities is to have the variable say x on the left side of the sign on its own.</p>

        <p>When simplifying inequalities you can safely Add (or subtract) a number on both sides, Multiply (or divide)
            a <strong>positive</strong> number on both sides or simplify a side. None of these things change the
            direction of the inequality.</p>

        <p>But a quick rule for inequalities is when you multiply or divide by something negative then you swap the
            inequality.</p>

        <p>If you solve the inequality but the variable is on the right side then you simply swap the sides and flip the
            inequality sign.</p>

        <p>Referencing Algebra 1 by Mary Jane Sterling</p>

        <ul className="text-list">
            <li>If <InlineMath math="a > b"/> then adding or subtracting <InlineMath math="c"/> does not change the
                direction of the inequality and you get <InlineMath math="a \pm c > b \pm c"/></li>
            <li>
                If <InlineMath math="a > b"/> then multiplying or dividing each side by a positive <InlineMath
                math="c"/> <strong>does not change</strong> the direction of the inequality and you get <InlineMath
                math="a \times c > b \times c"/> or <InlineMath math="a \div c > b \div c"/>
            </li>
            <li>
                If <InlineMath math="a > b"/> then multiplying or dividing each side by a negative <InlineMath
                math="c"/> <strong>does change</strong> the direction of the inequality (reverses it) and you
                get <InlineMath math="a \times c < b \times c"/> or <InlineMath math="a \div c < b \div c"/>
            </li>

            <li>
                If <InlineMath math="a > b"/> then reversing the terms reverses the inequality and you get <InlineMath
                math="b < a"/>
            </li>
        </ul>

        <p>If there are multiple inequalities then you do the same reductions to all parts of the inequality.</p>

        <p>A linear equality example is <InlineMath math="-4x \le -20"/> you can easily see divided by -4 to get the
            answer but remember the rule you then swap the inequality. <InlineMath math="x \ge 5"/></p>

        <p>Do not try and divide by a variable say x. As you do not know the sign if x is positive or negative. You can
            if you know the sign of the variable.</p>

        <h4>Two Inequalities</h4>
        <p>When you have two inequalities such as <InlineMath math="-4 < \frac{6 - 2x}{2} < 4"/> then for each
            simplification you apply the same to all parts of the inequality. In this case we multiply each part by 2 to
            clear the divide. Resulting in <InlineMath math="-8 < 6 - 2x < 8"/>. Now subtract six from each
            part <InlineMath math="-14 < -2x < 2"/>. And finally divide by negative two each part giving the final
            result of <InlineMath math="7 > x > -1"/>. Note as dividing by negative two it requires to flip the
            inequalities.</p>

        <h4>Graphing Linear Inequalities</h4>

        <p>To graph a linear equality you need to rearrange the equation so <i>y</i> is on the left and everything else
            is on the right hand side. Plot the <i>y=</i> making it solid for greater than and equal too or less than
            and equal too. With it dashed for just greater than or less than. If it is <InlineMath
                math="y >  (y \ge)"/> then shade <strong>above</strong> the line or if it is <InlineMath
                math="y< (y \le)"/> then shade <strong>below</strong> the line. You can then also check the shape of the
            graph
            and the value of the <InlineMath math="x"/> variable to see if shade on the inside or outside of where the
            curve hits the x-axis.</p>

        <h4>Quadratic Inequality</h4>

        <p>For quadratics it is best to sketch the graph. To find the range of values that satisfy the inequality such
            as <InlineMath math="36x \le 6x^2"/> follow these steps. Rearrange into the form <InlineMath
                math="f(x) \ge 0"/>.
            By moving the values to one side. Then write the expression as a equation for this case <InlineMath
                math="y = x^2 - 6x"/>.
        </p>

        <p>Then find out where the curve crosses the x-axis by factorising the quadratic to find its solutions by
            setting <InlineMath math="y=0"/>. In this case
            <InlineMath math="x^2 - 6x = 0 \implies x(x-6) = 0"/> therefore <InlineMath math="x = 0"/> or <InlineMath
                math="x = 6"/>. As the coefficient is positive this is a <strong>U</strong> shaped graph. Therefore the
            graph is positive to the left of <InlineMath math="x = 0"/> and to the right of <InlineMath
                math="x = 6"/> inclusive. Therefore <InlineMath math="x \le 0"/> or <InlineMath math="x \ge 6"/>.</p>

        <h4>Finding Region of Inequality</h4>

        <p>If it is required to find the region of the inequality for multiple lines and curves then you can sketch them
            and then test the coordinate points and the region you are looking for will hold true for any tested
            point.</p>

        <p>Remember that for <InlineMath math="\ge"/> or <InlineMath math="\le"/> you use a solid line to draw the
            region. But for <InlineMath math=">"/> or <InlineMath math="<"/> then use a dotted line for the region.</p>

        <h3 id={"polynomial"}>Polynomial</h3>

        <p>A polynomial is an expression that can have variables, constants and exponents that are combined with
            mathematical operations such as addition, subtraction, multiplication and division (except division by a
            variable so something like <InlineMath math="\frac{1}{x}"/> is not allowed.) They also cannot have negative
            or fractional indices.</p>

        <p>Polynomial means many terms and in mathematics and they can be made up of constants, variables and exponents,
            but never division by a variable. Polynomials are good to work with as if you add or multiply
            polynomials you are guaranteed to get another polynomial. The <a
                href={"https://www.mathopenref.com/rootpolynomial.html"}>root</a> of a polynomial are the values for the
            variables that cause the polynomial to evaluate to zero. Graphically if they are <i>x</i> values then it is
            the
            values that cross the <i>x</i> axis.</p>


        <h5>Names</h5>
        <p>A single polynomial is a <i>Monomial</i>, a two term polynomial is a <i>Binomial</i> and a three term
            polynomial is a <i>Trinomial</i>.</p>

        <h5>Variables</h5>
        <p>Polynomials can have no variable so just a constant term of say 32.</p>
        <p>It can have one variable say (x) <InlineMath math="x^4 + 2x^3 + x"/></p>
        <p>Or it can have two or more variables <InlineMath math="xy^3 - 2x^2z"/></p>

        <h5>Properties</h5>

        <p>Adding and multiplying polynomials always results in another polynomial. You can divide polynomial but the
            result may not be a polynomial.</p>

        <p>The degree of the polynomial is the variable with the highest exponent. <InlineMath
            math="x^4 + 2x^3 + x"/> in this case the degree is 4.</p>

        <p>The standard form for writing a polynomial is to put the terms with the highest degree first.</p>


        <h4>Adding Polynomials</h4>

        <p>Adding polynomials is easy you simply add the like terms. A like term is a term whose variable and exponent
            is the same. There are examples of like terms <InlineMath
                math="2y\hspace{0.5cm}y\hspace{0.5cm}-4y"/> or <InlineMath
                math="\frac{1}{3}xy^2 \hspace{0.5cm} 6xy^2"/> but these are not like terms <InlineMath
                math="4y\hspace{0.5cm}4y^2\hspace{0.5cm}2z\hspace{0.5cm}2xz "/> as their variables and exponents are not
            the same.</p>

        <p>To add two polynomials simply place the like terms together and then add the like terms. </p>

        <p>You can use the column method for adding where you line the polynomials on top of each other with like terms
            above and below and then add. A good example can be see on <a
                href={"https://www.mathsisfun.com/algebra/polynomials-adding-subtracting.html"}>MathsIsFun</a>.</p>

        <h4>Subtracting Polynomials</h4>
        <p>You can use the column method for subtracting where you line the polynomials on top of each other with like
            terms above and below and then subtract.</p>

        <h4>Multiplying Polynomials</h4>
        <p><a href={"https://www.mathsisfun.com/algebra/polynomials-multiplying.html"}>Maths is fun</a> provides a good
            guide on multiplying polynomials. The method is to multiply each term in polynomial by each term in other
            polynomial.</p>
        <h5>Polynomial Long Multiplication</h5>
        <p></p>
        <h4></h4>

        <h3 id={"partialfraction"}>Partial Fractions</h3>

        <p>An <strong>algebraic fraction</strong> is a fraction in which the numerator and denominator are both
            polynomial expressions.
            When the numerator is of a lower degree than the denominator the fraction is called a <strong>proper
                fraction</strong>.
            When the numerator is of a higher degree than the denominator the fraction is a called a <strong>improper
                fraction</strong>.
            A good example is taken from the <a
                href={"https://www.mathcentre.ac.uk/resources/uploaded/mc-ty-partialfractions-2009-1.pdf"}>Math
                Centre.</a>
            Sometimes these fractions are simpler to work with if split up into its component parts and these are
            called <strong>partial fractions</strong>.</p>

        <h5>Adding and Subtracting Fractions</h5>

        <BlockMath math="\frac{3}{x+1} + \frac{2}{x+3}"></BlockMath>

        <p>To complete this addition we need to find the lowest common denominator which in this case is <InlineMath
            math="(x+1)(x+3)"/></p>
        <p>We then write each fraction with its denominator.</p>

        <BlockMath math="\frac{3(x+3)}{(x+1)(x+3)} + \frac{2(x+1)}{(x+1)(x+3)}"/>

        <p>The denominators are now the same so we can simply add the fractions like usual.</p>

        <BlockMath math="\frac{3x + 9 + 2x + 1}{(x+1)(x+3)}"/>

        <p>This then can be simplified as the following fraction.</p>
        <BlockMath math="\frac{5x + 10}{(x+1)(x+3)}"/>

        <hr/>

        <p>To complete this lets do a example of <strong>subtracting a fraction.</strong></p>

        <BlockMath math="\frac{5}{x-2} - \frac{3}{x+2}"></BlockMath>

        <p>The lowest common denominator is <InlineMath math="(x-2)(x+2)"/></p>

        <p>Now make the denominator the same by multiplying to get them.</p>

        <BlockMath math="\frac{5(x+2)}{(x-2)(x+2)} - \frac{3(x-2)}{(x+2)(x-2)}"></BlockMath>

        <p>Now simplify not the double negative becomes a plus for the 6.</p>

        <BlockMath math="\frac{5x+10 - 3x + 6}{(x-2)(x+2)}"></BlockMath>

        <BlockMath math="\frac{2x + 4}{(x-2)(x+2)}"></BlockMath>

        <p>All done.</p>

        <h5>Partial Fraction Decomposition</h5>

        <p>Above we combined partial fraction into the algebraic fraction. Now we can do the reverse.</p>

        <p>The steps to do this are as follow applied to the reverse for our addition of fractions example.</p>

        <BlockMath math="\frac{4x+5}{(x+4)(2x-3)}"></BlockMath>
        <p>The bottom is already factored in this case but firstly factor the bottom.</p>

        <p>Then write one partial fraction of each of the factors with the numerator as A and B.</p>

        <BlockMath math="\frac{A}{(x+4)} + \frac{B}{2x-3}"></BlockMath>

        <p>Now multiply through by the bottom so we no longer have fractions.</p>

        <BlockMath math="4x + 5 = A(2x-3) + B(x+4)"></BlockMath>

        <p>Now we find the constants A and B by substituting the roots in to make zero. In this case</p>

        <BlockMath math="x = -4"/>

        <BlockMath math="x = -\frac{3}{2}"/>

        <BlockMath math="4(-4) + 5 = A(2(-4)-3) + 0"/>
        <BlockMath math="-16 + 5 = A(-11)"/>
        <BlockMath math="\frac{-11}{-11} = A"/>
        <BlockMath math="A = 1"/>

        <BlockMath math="4(1.5) + 5 = A(2(1.5)-3) + B(1.5 + 4)"/>
        <BlockMath math="11 = 0 + B5.5"/>
        <BlockMath math="11/5.5 = B"/>
        <BlockMath math="B = 2"/>

        <p>Giving the final result of:</p>

        <BlockMath math="\frac{1}{(x+4)} + \frac{2}{(2x-3)}"/>

        <hr/>

        <h3 id={"factortheorem"}>Factor Theorem (Solving Cubics)</h3>
        <p>To find the linear factors of a polynomial (split the polynomial into as many factors as you can) you first
            you simply plugin and try different numbers until they equal zero. This is going to be time consuming
            though. You only need to try the numbers that are factors of the constant. If no of these works then you
            cannot find simple integer factors. </p>

        <p>The factor theorem defined <InlineMath math="f(x)"/> is a polynomial and <InlineMath
            math="f(k) = 0"/> then <InlineMath math="(x-k)"/> is a factor of <InlineMath math="f(x)"/></p>

        <BlockMath math="x^3 - 6x^2 + 3x + 10"/>

        <p>In the example above the factors to try are of 10 which are <InlineMath math="(\pm 1) (\pm 2) (\pm3)"/>. Once
            you have found two of the factors in this case <InlineMath math="(x+1)(x-2)( ... )"/> you can simply then
            work out that the way to get a <InlineMath math="10"/> is through a factor of <InlineMath
                math="1 \times -2"/> multiplied by something will be <InlineMath math="1 \times -2 \times -5 = 10"/>.
        </p>

        <BlockMath math="p(x) = 2x^3 + 3x^2 - 32x + 15"/>

        <p>Another example we take has a coefficient before the <InlineMath math="x^3"/>. In this case we take the
            factors of the constant still here which are <InlineMath math="\pm 1"/>, <InlineMath
                math="\pm 2"/> or <InlineMath math="\pm 5"/> but as the coefficient exists before the <InlineMath
                math="3x^3"/> we need to also consider the factors over the coefficient so <InlineMath
                math="\pm\frac{1}{2}"/>, <InlineMath math="\pm\frac{3}{2}"/> and <InlineMath math="\pm\frac{5}{2}"/></p>

        <p>We need to find one linear factor first then we can do the shorter method so we try each of the potential
            p(x) suggested above.</p>

        <BlockMath math="p(3) = 54 + 27 - 96 + 15 = 0"/>

        <p>Now we have a linear factor we know that we can try work out the rest. We can fill in the first and last part
            of the other expression as it will need to equate to the first and last part of the polynomial
            so <InlineMath math="2x^2"/> and <InlineMath math="-5"/></p>

        <BlockMath math="p(x) = (x-3)(2x^2 + kx -5)"/>

        <p>Now we can find coefficients by comparing them we can choose <InlineMath math="x^2"/> therefore we
            have <InlineMath math="3 = -6 + k"/>. This is found from the <InlineMath math="-3 \times 2x^2"/>. Resulting
            in <InlineMath math="9 = k"/>.</p>

        <p>We can now check with the other coefficient for <i>x</i>. <InlineMath math="-32 = -5 - 3k"/> and this results
            in <InlineMath math="k = 9"/>. Therefore they match and this is correct.</p>

        <p>In this case we can factor the final quadratic even further.</p>

        <BlockMath math="2x^3 + 3x^2 - 32x + 15 = (x-3)(2x^2 + 9x -5)"/>
        <BlockMath math="= (x-3)(2x - 1 )(x + 5)"/>

        <h4>Sketching Cubics</h4>

        <p>Once you know the factors of a cubic sketching the graph is straightforward. You can find the roots by
            setting <i>x</i> to zero. As all cubics have a similar shape if <InlineMath math="x^3"/> is positive it is
            bottom left to top right and if <InlineMath math="x^3"/> is negative it is top left to bottom right.</p>


        <h3 id={"algebraicdivision"}>Algebraic Division (or Polynomial Division)</h3>

        <p>Algebraic Division (or polynomial division) allows you to divide one polynomial by another a good resource
            can be read <a href={"https://twinklsecondary.blog/algebraic-division-a-level-maths-revision/"}>here</a>.
        </p>

        <p>There are three main methods to do this Alegbraic Long Division, The Grid Method and Equating Coefficients.
            Firstly though you want to simplify the expression by cancelling out any common factors an example of this
            is shown.</p>

        <BlockMath math="\frac{2x^2 + 9x -18}{x^2 + 6x} = \frac{(2x-3)(x+6)}{x(x+6)} = \frac{(2x-3)}{x}"/>

        <p>Once you have simplified the rational function (a algebraic fraction where both numerator and denominator are
            polynomial expressions) you may still need to do division and can choose from one of the three methods
            below.</p>

        <h5>Algebraic Long Division</h5>

        <p>If there is no remainder then the divisor is a factor of the expression. If there are missing terms you can
            just write the missing term in with a zero coefficient.</p>

        <BlockMath math="\frac{6x^3 - 13x^2 + 10x - 6}{2x - 3}"/>

        <BlockMath math="

2x-3\overline{\smash{)}6x^3 - 13x^2 + 10x - 6}
"/>

        <p>First divide the first term inside the bus stop by the first divisor term <InlineMath
            math="6x^3 \div 2x = 3x^2"/></p>

        <p>Second multiply the answer <InlineMath math="3x^2"/> by the divisor <InlineMath
            math="3x^2 \times 2x-3 = 6x^3 - 9x^2"/></p>

        <p>Thirdly subtract your multiplied answer <InlineMath math="6x^3 - 9x^2"/> from the equivalent
            dividend <InlineMath math="6x^3 - 13x^2"/>.</p>

        <BlockMath math="(6x^3 - 13x^2) - (6x^3 - 9x^2) = -4x^2"/>

        <p>Then write the answer below the divide then bring down the next term from the dividend <InlineMath
            math="10x"/> then we start to repeat.</p>

        <p>Divide the first term in <InlineMath math="-4x^2 \div 2x = -2x"/> by the first term in the divisor then add
            answer to the top of the bus stop which looks like this now <InlineMath math="3x^2 - 2x"/>.</p>

        <p>Second again multiply the answer by the divisor and write this under the bus stop. <InlineMath
            math="-2x \times 2x -3 = -4x^2 + 6x"/></p>

        <p>Thirdly subtract <InlineMath math="-4x^2 + 10x - (-4x^2 + 6x) = 4x"/> the multiplied answer from the
            equivalent dividend.</p>

        <p>Then bring the next term down from the dividend in this case <InlineMath math="-6"/>.</p>

        <p>Repeat divide the first term by first divisor <InlineMath math="4x \div 2x = 2"/> and then add the answer to
            the top of the bus stop which looks like this now <InlineMath math="3x^2 - 2x + 2"/>.</p>

        <p>Second multiply the answer by the divisor <InlineMath math="2 \times 2x-3"/> and write this result under the
            bus stop <InlineMath math="2 \times 2x-3 = 4x - 6"/>.</p>

        <p>Thirdly subtract your multiplied answer <InlineMath math="4x -6 - (4x - 6) = 0"/> from the equivalent
            dividend and then it is a factor <InlineMath math="3x^2 - 2x +2"/>.</p>

        <h5>The Grid Method</h5>

        <p>The grid method works by reversing the multiplication process. You need to setup a grid with the divisor on
            the left hand side in this case <InlineMath math="2x-3"/> then you know the top left is going to
            be <InlineMath math="6x^3"/> and the constant will be the last value in bottom right of the grid <InlineMath
                math="-6"/> you can then work out what multiplies in the grid to get the factor on the top row by
            filling it out.</p>

        <p>The solution is filled out in this grid taken from A-level Mathematics for Year 12 - Course 1: Algebraic
            Methods, Graphs and Applied Mathematics Methods from edx.</p>

        <img width="60%" height="60%" src={GridMethod} alt="Grid"/>

        <br/>
        <br/>
        <br/>
        <h5>Equating Coefficient Method</h5>

        <p>This method works well when there is no remainder for example if you used the factor theorem to find your
            divisor.</p>

        <p>It works by collecting up the matching coefficient. If the cubic expression is divisible by the linear factor
            then the result must be a quadratic expression.</p>

        <p>Repeating the same example.</p>

        <BlockMath math="\frac{6x^3 - 13x^2 + 10x - 6}{2x - 3}"/>

        <p>We know that it will result like so.</p>

        <BlockMath math="(2x - 3)(ax^2 + bx + c) = 6x^3 - 13x^2 + 10x - 6"/>

        <p>Now we can expand the brackets on the left hand side.</p>

        <BlockMath math="(2x - 3)(ax^2 + bx + c) = 2ax^3 + 2bx^2 + 2xc - 3ax^2 - 3bx - 3c"/>

        <p>Next equate the coefficients of each power of x you can partially factorise to help.</p>

        <BlockMath math="2ax^3 + 2bx^2 + 2xc - 3ax^2 + 3bx + 3c = (2a)x^3 + (2b - 3a)x^2 + (2c - 3b)x - 3c"/>

        <p>Comparing both sides of the equals gives</p>

        <BlockMath math="2a = 6 = \frac{6}{2} = 3"/>
        <BlockMath math="2b - 3a = -13"/>
        <BlockMath math="2c - 3b = 10"/>
        <BlockMath math="-3c = -6 = \frac{-6}{-3} = 2"/>

        <p>Solve each equation to find values and substitute from the top.</p>

        <BlockMath math="a = 3"/>
        <BlockMath math="2b - 3(3) = -13 = 2b - 9 = 13 = 2b = -4 = b = \frac{-4}{2} = -2"/>

        <BlockMath math="b = -2"/>
        <BlockMath math="2c - 3(-2) = 10 = 2c + 6 = 10 = 2c = 4 = c = 2"/>

        <BlockMath math="c = 2"/>

        <p>This now gives the final answer of plugging in the a, b and c</p>

        <BlockMath math="(2x - 3)(3x^2 - 2x + 2) = 6x^3 - 13x^2 + 10x - 6"/>

        <p>This can be shortened by noting that we can work out the <InlineMath
            math="(2x - 3)(3x^2 + kx + 2) = 6x^3 - 13x^2 + 10x - 6"/> the first and last term can be found out by
            checking the calculation for the <InlineMath math="6x^3"/> and <InlineMath math="-6"/>.</p>

        <p>You have now seen the three approaches to algebraic (polynomial) division.</p>

        <h3 id={"quadraticequation"}>Quadratic Equations</h3>

        <p>A quadratic equation is an equation with a degree of 2.</p>

        <p>They can be solved in different ways.</p>

        <h4>Solving by Factorising</h4>
        <p>For simple quadratic equations you can simply factorise for example <InlineMath
            math="x^2 + x - 12 = 0"></InlineMath> this can be factored into <InlineMath
            math="(x+4)(x-3)=0"></InlineMath> therefore <InlineMath
            math="x=-4"></InlineMath> or <InlineMath math="x=+3"></InlineMath></p>

        <h4>Completing the Square</h4>

        <p>The square is in the form <InlineMath math="(x + something)^2 + ?"></InlineMath> its pretty much the
            factorised equation (with two identical factors) but you need to <i>complete</i> it by adding a number to
            the
            square to make the original equation.</p>

        <p>A sure formula way of completing the square is the following: <InlineMath math="ax^2 + bx + c"/></p>

        <p>1. Take a factor out of <InlineMath math="a"/> out of the <InlineMath math="x^2"/> and <InlineMath
            math="x"/> terms
            to give <InlineMath math="a(x^2 + \frac{b}{a}x) + c"/>.</p>

        <p>2. Now rewrite the bracket as one bracket squared where the number in the bracket is always <InlineMath
            math="\frac{b}{2a}"/>
            therefore the bracket will be <InlineMath math="a(x+\frac{b}{2a})^2"/>.</p>

        <p>3. Now add <i>d</i> to the bracket to complete the square and find <i>d</i> by setting the new and original
            expressions
            equal to each other <InlineMath math="a(x + \frac{b}{2a})^2 + d = ax^2 + bx + c"/> (remember to expand left
            side)</p>

        <p>4. Now solve this equation always gives <InlineMath math="d = (c - \frac{b^2}{4a})"/> therefore: </p>

        <BlockMath math="a(x + \frac{b}{2a})^2 + (c-\frac{b^2}{4a}) = ax^2 + bx + c"/>

        <p>For example you start with <InlineMath>x^2 - 6x + 5 = 0</InlineMath>.</p>

        <p>1. Take a factor of <InlineMath math="1"/> out of the <InlineMath math="x^2"/> and <InlineMath
            math="-6x"/> terms
            to give <InlineMath math="1(x^2 - \frac{6}{1}x) + 5"/>.</p>

        <p>2. Now rewrite the bracket as one bracket squared where the number in the bracket is always <InlineMath
            math="\frac{6}{2 \times 1}"/>
            therefore the bracket will be <InlineMath math="1(x - \frac{6}{2 \times 1})^2"/>.</p>

        <p>3. Now add <i>d</i> to the bracket to complete the square and find <i>d</i> by setting the new and
            original expressions equal to each other <InlineMath math="(x - 3)^2 + d = x^2 - 6x + 5"/>.
            Expanding the left hand side gives <InlineMath math="x^2 - 6x + 9 + d = x^2 - 6x + 5"/> now can cancel these
            out to be <InlineMath math="-9 + d = 5"/></p>

        <p>4. Now solve this equation gives <InlineMath math="d = -4"/> therefore putting <i>d</i> back into the
            equation you get <InlineMath math="(x-3)^2 - 4 = 0"></InlineMath> as <InlineMath
                math="x^2 - 6x + 9 - 4 = x^2 - 6x + 5"></InlineMath></p>

        <p>Now the final solution is <InlineMath math="(x-3)^2 = 4"/> simplify <InlineMath
            math="x-3 = \sqrt{4} "/> which results in <InlineMath math="x = 3 \pm 2"/> therefore <InlineMath
            math="x = 5"/> or <InlineMath
            math="x = 1"/>.</p>


        <hr/>

        <p>Another more complex example is when there is a multiplier to the quadratic part of the expression.</p>

        <BlockMath math="2x^2 - 6x -2 = 0"/>

        <p>Step one take out the factor of 2</p>

        <BlockMath math="2(x^2 - 3x) -2 = 0"/>

        <p>Now find the part of the bracket as one bracket squared</p>

        <p>Therefore <InlineMath math="b = -6"/> and then the formula to do is <InlineMath math="\frac{b}{2a}"/> which
            is
            <InlineMath math="\frac{-6}{2 \times 2}"/>. Therefore it is <InlineMath math="- \frac{3}{2}"/>.</p>

        <p>This gives <InlineMath math="2(x-\frac{3}{2})^2 + d"/></p>

        <p>Now we need to expand out the bracket after setting the new equation to the original equation.</p>

        <BlockMath math="2(x - \frac{3}{2})^2 + d = 2x^2 - 6x - 2"/>

        <p>Expanding out the left side is not straight forward so follow closely. First expand out the squared
            bracket.</p>

        <BlockMath math="(x - \frac{3}{2})(x - \frac{3}{2}) = x^2 - \frac{3}{2}x - \frac{3}{2}x + \frac{9}{4}"/>
        <p>Simplify now</p>
        <BlockMath math="2(x^2 - \frac{6}{2}x + \frac{9}{4})"/>
        <p>Then we need to multiply by the outside multiplier</p>
        <BlockMath math="2x^2 - 6x + \frac{9}{2} + d = 2x^2 - 6x -2"/>

        <p>Now we can cancel out the equation and find d.</p>

        <BlockMath math="\frac{9}{2} + d = -2"/>
        <BlockMath math="d = -2 - \frac{9}{2}"/>
        <BlockMath math="d = - \frac{13}{2}"/>

        <p>Hence we have completed the square as:</p>
        <BlockMath math="2(x - \frac{3}{2})^2 - \frac{13}{2} = 0"/>

        <p>Now to find the exact solutions: </p>

        <BlockMath math="2(x - \frac{3}{2})^2 = \frac{13}{2}"/>

        <p>Divide both sides by 2.</p>

        <BlockMath math="(x - \frac{3}{2})^2 = \frac{13}{4}"/>

        <p>Now square root both sides</p>

        <BlockMath math="x - \frac{3}{2} = \pm \sqrt{\frac{13}{4}}"/>

        <p>Add the fraction to move to the other side and square root the bottom of the fraction leaving just the top
            rationalising the fraction.</p>

        <BlockMath math="x = \frac{3 \pm \sqrt{13}}{2}"/>

        <hr/>

        <p>The way we have come to the solution is the full method but in example one you can reduce the expansion steps
            as a shortcut as remember <InlineMath math="ax^2 + bx + c = 0 "/> we can turn into this <InlineMath
                math="a(x+d)^2 + e"/>.</p>

        <p>Where we have <InlineMath math="d = \frac{b}{2a}"/> and <InlineMath math="e = c - \frac{b^2}{4a}"/></p>

        <p>Repeating the last example we would have the following:</p>

        <BlockMath math="2x^2 - 6x -2 = 0"/>

        <BlockMath math="d = \frac{-6}{2 \times 2} = -\frac{3}{2}"/>

        <BlockMath math="e = -2 - \frac{6^2}{4 \times 2} = \frac{36}{8} = \frac{9}{2}"/>

        <BlockMath math="e = \frac{-2}{1} - \frac{9}{2} = - \frac{13}{2}"/>

        <p>Putting it back into the formula gives.</p>

        <BlockMath math="2(x - \frac{3}{2})^2 - \frac{13}{2} = 0"/>

        <p>Now you can find the exact solutions as before.</p>

        <br/>

        <h4>Quadratic Formula</h4>

        <p>The final way is to use the quadratic formula this can be the simplest way for complex quadratics.</p>

        <BlockMath math="x = \frac {-b \pm \sqrt{b^2 -4ac}} {2a}"/>

        <p>The formula is applied to the values in a quadratic formula.</p>

        <BlockMath math="ax^2 + bx + c = 0"/>

        <p>Part of the formula can be used to tell the roots of a quadratic equation.</p>

        <BlockMath math="b^2 - 4ac"/>

        <p>This part of the formula is called the discriminant.</p>

        <p>Two real roots <InlineMath math="b^2 - 4ac > 0"/> as the graph will cross the x-axis twice and these values
            are the roots.</p>
        <p>One real root <InlineMath math="b^2 - 4ac = 0"/> graph just touches the x-axis from above or below if
            negative coefficient.</p>
        <p>No real roots (equal roots) <InlineMath math="b^2 - 4ac < 0"/> graph will not touch the x-axis at all as it
            is greater than zero.</p>

        <p>Sometimes a,b or c are unknown you may then have to find a range of values of the unknown.</p>

        <hr/>

        <h3 id={"quadraticfunctiongraph"}>Quadratic Functions and Graphs</h3>

        <p>If you are struggling with a problem then graphing a quadration function can help there are some key points
            to be able to do this.</p>

        <ol className={"text-list"}>
            <li>Up or Down</li>
            <p>If the coefficient <InlineMath math="x^2"/> is positive then the graph is U-shaped.</p>
            <p>If the coefficient <InlineMath math="x^2"/> is negative then the graph is N-shaped.</p>
            <li>Axes: You can find out where it crosses the y-axis by (set x = 0) and crosses the x-axis by (set y =
                0).
            </li>
            <li>Maximum or Minimum: You can find the maximum or minimum point by finding the point halfway between the
                roots <strong>or</strong> by completing the square.
            </li>
            <li>Sketch the graph. You now have all you need to sketch the graph.</li>
        </ol>

        <h5>An example</h5>

        <p>This example is taken from GCP book on A level maths.</p>

        <BlockMath math="y = 8 - 2x - x^2"/>

        <p>Point 1 we know this is n-shaped as it is a negative coefficient on the <InlineMath math="x^2"/>.</p>

        <p>Point 2: Now find y when x is zero.</p>

        <BlockMath math="y = 8 - 2(0) - 0^2 = 8"/>

        <p>When y is zero</p>
        <BlockMath math="8 - 2x - x^2 = 0"/>
        <BlockMath math="(2 - x)(x + 4) = 0"/>
        <p><InlineMath math="x = 2"/> or <InlineMath math="x = -4"/></p>

        <p>This means that the curve crosses y at <InlineMath math="(0,8)"/> and x at <InlineMath
            math="(2,0)"/> and <InlineMath math="(-4,0)"/>.</p>

        <p>Point 3: We can now find the max point. Which is halfway between the roots because the curve is
            symmetrical.</p>

        <BlockMath math="(2 + -4) \div 2 = -1"/>

        <p>So the max value is at <i>-1</i>.</p>

        <BlockMath math="y = 8 - 2(-1) - (-1)^2 = 9"/>

        <p>The graph has a maximum at <InlineMath math="(-1,9)"/></p>

        <p>We now have all the points to sketch the graph.</p>

        <h5>No real roots</h5>

        <p>Again completing the square can be useful way to quickly find if a graph crosses the x-axis. It will only
            cross the x-axis if the function changes sign.</p>


        <hr/>

        <br/>

        <h3 id={"simultaneousequation"}>Simultaneous Equations</h3>

        <p>Simultaneous equations are two or more equations that share a variable.</p>

        <p>Simultaneous equations that are both linear can easily be solved by matching the coefficients of the
            equations
            so that when you add them they will negate to zero that variable and eliminate it.</p>

        <p>If one equation is linear and one is quadratic then you need to do substitution. In this case you isolate one
            variable in the linear equation by rearranging to <i>x</i> or <i>y</i> on its own. Then you can substitute
            this <i>x</i> or <i>y</i> into
            the quadratic equation. You can solve by factorising or using the quadratic formula. Once resolved then
            place the result back into the linear equation to find the solution to the other variable.</p>

        <p>The number of solutions is the number of intersections between the two equations. If there are two solutions
            then the graph meets at these two locations. If this is one solution the graph meets in one place and if
            their are no solutions then the graphs never meet.</p>

        <hr/>

        <h3 id={"absolutevalues"}>Absolute Values (Modulus)</h3>

        <p>The absolute value means how far a number is from zero. A great resource is <a
            href="https://www.mathsisfun.com/algebra/absolute-value-solving.html">Maths is Fun</a>. Therefore the
            absolute value of <i>6</i> is <strong>6</strong> and the absolute value of <i>-6</i> is
            also <strong>6</strong>. The absolute value symbol us two bars as shown <InlineMath
                math="\lvert 6 \rvert = 6"/> and <InlineMath math="\lvert -6 \rvert = 6"/></p>

        <p>Rules:</p>

        <ul className="text-list">
            <li><InlineMath math="\lvert a \rvert \geq 0"/></li>
            <li><InlineMath math="\lvert a \rvert = \sqrt(a^2)"/> squaring a makes it positive or zero. The taking the
                square root will undo the square but leave it positive.
            </li>
            <li><InlineMath math="\lvert a \times b \rvert = \lvert a \rvert \times \lvert b \rvert"/> the
                multiplication is the same for absolute of each or both.
            </li>
            <li><InlineMath math="\lvert x \rvert = a"/> is the same as <InlineMath math="x = \pm a"/> this is an
                important one and helps solve most problems.
            </li>
        </ul>

        <h4>Graphical View</h4>

        <p>You can easily plot the graphs and then see the result of the mods using different reflection mechanisms. You
            can set the equation in the form equal to zero. The
            rules for these are as follows.</p>

        <ul className="text-list">
            <li><InlineMath math="y = \lvert f(x) \rvert"/> any negative values of <i>f(x)</i> are made positive by
                reflecting them on the x-axis.
            </li>
            <li><InlineMath math="y =  f(\lvert x \rvert) "/> the negative x-values produce the same results as the
                corresponding positive x-values.
            </li>
            <li><InlineMath math="y = \lvert f(-x) \rvert"/> the x-values change from positive to negative (or negative
                to positive) so the graph is reflected on the y-axis.
            </li>
        </ul>

        <h4>Absolute Value Inequalities</h4>

        <p>Absolute values can be written as inequalities here are some examples but remember these represent the values
            distance from <i>x</i>.</p>

        <p><InlineMath math="\lvert x \rvert < 4"/> these are everything in between but not
            including <i>-4</i> and <i>4</i>.</p>

        <p><InlineMath math="-4 < x < 4"/></p>

        <p><strong>Important point</strong> for less than, less than or equal to we get one interval.</p>

        <p>Another example is <InlineMath math="\lvert x+3 \rvert \leq 3"/> in this case we state <InlineMath
            math="-3 \leq x+3 \leq 3"/> the we subtract the central 3 from each side to give the equivalent <InlineMath
            math="-6 \leq x \leq 0"/></p>

        <p><strong>Important point</strong> for greater than, greater than or equal to we get two separate intervals.
        </p>

        <p><InlineMath math="\lvert x \rvert > 4"/> we get everything less than -4 or greater than 4.</p>

        <p><InlineMath math="x < -4"/> or <InlineMath math="x > 4"/></p>

        <br/>
        <hr/>


        <h3 id={"geometry"}>Coordinate Geometry</h3>

        <p>Things to know up front</p>

        <p>Midpoint of a line segment: <InlineMath math="M = (\frac{x1 + x2}{2}, \frac{y1 + y2}{2})"/></p>
        <p>Distance between two points: <InlineMath math="AB = \sqrt{(x2 - x1)^2 + (y2 - y1)^2}"/> this is
            pythagoras theorem a triangle is created and you find the hypotenuse.</p>
        <p>Find the Gradient (Slope) of a straight line: <InlineMath math="\frac{y2 - y1}{x2 - x1}"/></p>

        <p>Forms of equation of a straight line:</p>
        <p>Gradient (Slope) Intercept: <InlineMath math="y = mx + c"/></p>
        <p>Gradient (Slope) Point Form: <InlineMath math="y - y1 = m(x - x1)"/>. Use this when given a slope and a
            point.</p>
        <p>Equation Form: <InlineMath math="ax + by + c = 0"/></p>
        <p>Two Point Form: <InlineMath math="\frac{y - y1}{y2 - y1} = \frac{x - x1}{x2 - x1}"/>. When given two points.
        </p>

        <p>These forms of line can easily be transformed between each form the easiest to find is the gradient point
            form.</p>

        <h4>Straight Line Graphs</h4>

        <h4>Graphing using Points</h4>

        <p>Plotting graphs can be done by substituting values of <i>x</i> or <i>y</i> into the equation and then find
            the opposite value to plot by solving it. Then marking the cartesian pair and plotting them.</p>

        <p>A straight line graph is known as linear.</p>

        <h4>Horizontal and Vertical Plots</h4>

        <p>When <i>y</i> is a constant you have a horizontal straight line such as <InlineMath math="y = 10"/> where the
            line is parallel to the <i>x-axis</i>. When <i>x</i> is equal to a constant then
            you have a vertical straight line <InlineMath math="x = 10"/> is a straight line up through 10 parallel to
            the <i>y-axis</i>.</p>

        <h4>Graphing lines with Intercepts</h4>

        <p>You can easily graph intercepts as you can set either <i>x</i> or <i>y</i> to zero to find the intercept. The
            x-intercept is where it crosses the <i>x-axis</i> to find this let <i>y</i> be equal to zero and solve
            for <i>x</i>. </p>

        <p>The y-intercept is where the line crosses the <i>y-axis</i> and can be found by setting <i>x</i> to zero and
            solve for <i>y</i>.</p>

        <h4>Finding the Gradient (Slope) of Lines</h4>

        <p>The slope of the line is a number that describes the slopes steepness and if it rises or falls.</p>

        <p><strong>Rise over run</strong> is when a slope is written as a fraction and states for example <InlineMath
            math="\frac{5}{2}"/> that we have for every two units along the x-axis it has five units up the y-axis.</p>

        <p>As shown in the formulas above finding the slope (gradient) of a line is easy with two points you plug into
            the formula.</p>

        <p>Gradient (Slope) of a straight line: <InlineMath math="\frac{y2 - y1}{x2 - x1}"/></p>

        <p>Remember a slope of 0 is a horizontal line and a vertical line has no slope.</p>

        <p>When the formula is in the gradient intercept or gradient point form you already have the gradient
            represented by <i>m</i>.</p>

        <p>When the graph is in this form you can simply plot the y-intercept on the y-axis. Write the slope as a
            fraction then move along with rise over run to mark the the next points.</p>

        <p>For example <InlineMath math="y = \frac{5}{2}x + 7"/> you know that when <i>x</i> is set to zero the
            y-intercept is <i>7</i>. Then you know that you need to go two units along and five units up as represented
            by rise over run.</p>


        <h4>Parallel Lines</h4>

        <p>Parallel lines have an equal gradients. Therefore you can find the equation of a parallel line easily by
            <InlineMath math="y = mx + c"/> and substituting in the gradient of the parallel line you know and the
            x and y of the parallel line point you are trying to find the equation of. Parallel lines never touch and
            never share a common point.</p>

        <h4>Perpendicular Lines</h4>

        <p>Perpendicular lines form a 90 degree angle where they cross. They have slopes that are negative reciprocals
            of each other.</p>

        <h4>Finding Line Intersections</h4>

        <p>If two lines intersect they cross at a common point between the two lines. You can test a point by putting it
            into each formula <i>x</i> and <i>y</i> coordinates and checking it is true for both.</p>

        <p>You can simply graph the two equations to see if they intersect graphically. But you can use the <strong>substitution
            method</strong>.</p>

        <p>First put each equation into the slope intercept form <InlineMath math="y = mx + c"/>. Then substitute the y
            value into the other formula. Then substitute the solved <i>x</i> into one of the original formula to find
            the <i>y</i>. </p>

        <h3 id={"parabola"}>Parabolas</h3>

        <p>A parabola is roughly a U-shaped curve. It is one of the conic sections where the other conic sections are
            ellipsis and hyperbolas.</p>

        <p>This section relates back to the curve sketching section.</p>

        <h3 id={"circles"}>Circles</h3>

        <p>A circle has a centre point and a radius. The definition of a circle is the set of all points on a plane
            that
            are fixed distance from the center. The diameter is the width of the circle through the centre, the
            circumference is perimeter and the radius is the measure from the centre of the circle to any of outs
            boundary which is <InlineMath math="2r = d"/> two times the radius is the diameter. The formula for
            calculating the circumference is <InlineMath math="c = \pi d"/> or <InlineMath math="c = 2\pi r"/>.</p>

        <p>The <strong>cartesian</strong> equation of a circle with a centre of (a,b) and radius r can be written
            as <InlineMath math="(x-a)^2 + (y-b)^2 = r^2"/> where x and y are points on the circle. This can be
            thought
            of as taking a triangle from the centre to the radius (so any point on the circle) using pythagoras
            theorem <InlineMath math="a^2 + b^2 = c^2"/>. This is described at <a
                href="https://www.mathsisfun.com/algebra/circle-equations.html">Maths is Fun</a>. In that example
            they
            have a radius of five and then any point on the circle can be thought of as <InlineMath
                math="x^2 + y^2 = 5^2"/>.</p>

        <h5>Circle Theorem</h5>

        <p>The angle in a semi circle that are created when you join the two ends of the diameter to one point on
            the
            arc using chord is always a right angle <InlineMath math="90 \degree"/>. A good <a
                href="https://thirdspacelearning.com/gcse-maths/geometry-and-measure/angle-in-a-semi-circle/">read.</a>
        </p>

        <p>A cyclic quadrilateral inside a circle its opposite angles will always add up to <InlineMath
            math="180 \degree"/>.</p>

        <p>The angles at the circumference subtended by the same arc are equal.</p>

        <p>Inscribed angle is the angle formed in the interior of a circle when two chords intersect on the circle.
            The
            inscribed angle theorem states that an angle inscribed in a circle is half the central angle that
            subtends
            the same arc on the circle. Good <a
                href="https://en.wikipedia.org/wiki/Inscribed_angle#:~:text=In%20geometry%2C%20an%20inscribed%20angle,The%20inscribed%20angle%20%CE%B8%20circle.">reference</a>.
        </p>

        <p>The tangent to a circle is a straight line that touches the circumference of the circle at only one
            point.
            The angle between a tangent and a radius is <InlineMath math="90 \degree"/>. Tangents that meet at the
            same
            point are equal in length. <a
                href="https://thirdspacelearning.com/gcse-maths/geometry-and-measure/tangent-of-a-circle/">A good
                reference</a>.</p>

        <p>The perpendicular from the centre of a circle to a chord always bisects (midpoint) the chord.</p>

        <p>The distances from the meeting point of two tangents to the points where each tangent touches the circle
            are
            equal.</p>

        <p>The alternate segment theorem the angle between the tangent and a chord is equal to the angle in an
            alternate
            segment.</p>

        <h5>Standard Form</h5>

        <p>To make this generic we can think of the centre of a circle as (a,b) with all points on the circle
            as <strong>r</strong> away from the center represented as (x,y). Using the right angle triangle and
            pythagoras theorem we can work out where the points are in a standard form equation of <InlineMath
                math="(x-a)^2 + (y-b)^2 = r^2"/>. This allows us to find missing values by rearranging the formula.
        </p>

        <p>To find the distance between two points we can use the formula <InlineMath
            math="distance = \sqrt{a^2 + b^2}"/>. In our case we can have the two circles as <InlineMath
            math="(x-10)^2 + (y-6)^2 = 9"/> and <InlineMath math="(x+2)^2 + (y+3)^2 = 16"/> therefore the distance
            between these two points is the <InlineMath math="AB^2 = 12^2 + 9^2"/> which is <InlineMath
                math="AB^2 = 225"/> and then take the square root <InlineMath math="AB = 15"/>. This is the distance
            between the centers of the circles and now if we want the max and the minimum we simply add each radius
            or
            subtract each radius to give the max and minimum distances resulting in <InlineMath
                math="max = 15 + 3 + 4 = 22"/> and the shortest is <InlineMath math="min = 15 - 3 - 4 = 8"/>.</p>

        <h5>General Form</h5>

        <p>Sometimes equations are not written in standard form therefore you may see a circle equation and not know
            it.
            This can be described as general form and is standard form expanded. <InlineMath
                math="x^2 + y^2 + Ax + By + C = 0"/>.</p>

        <p>Equations of a circle centre and radius can be written in general form so <InlineMath
            math="x^2 + y^2 - 6x + 4y + 8 = 0"/> this can be written into the form above by completing the square
            twice
            once for <strong>x</strong> and once for <strong>y</strong>.</p>

        <p>Now put the <strong>x</strong> and <strong>y</strong> together. <InlineMath
            math="(x^2 -6x) + (y^2 + 4y) + 8 = 0"/>. Next move the constant to the right side. <InlineMath
            math="(x^2 -6x) + (y^2 + 4y) = -8"/>. Now we <a
            href="https://www.mathsisfun.com/algebra/completing-square.html">complete the square</a>. </p>

        <p>Complete the square for <strong>x</strong> we can take half the <InlineMath math="-6x"/> square it and
            add to
            both sides. Resulting in <InlineMath math="(x^2 -6x + (-3)^2) + (y^2 + 4y) = -8 + (-3)^2"/></p>

        <p>Now complete the square for <strong>y</strong> which is take half the <InlineMath math="4"/> square it
            and
            add to both sides. Resulting in <InlineMath
                math="(x^2 -6x + (-3)^2) + (y^2 + 4y + (2)^2) = -8 + (-3)^2 + (2)^2"/></p>

        <p>Then tidy up. <InlineMath math="(x^2 -6x + 9) + (y^2 + 4y + 4) = -8 + (-3)^2 + (2)^2"/></p>
        <p>Factor the left side which can be simplified to <InlineMath
            math="(x-3)^2 + (y+2)^2 = 3^2 + 2^2 - 8 = 5"/> therefore the centre is <InlineMath math="(3,-2)"/> and
            radius
            is <InlineMath math="\sqrt{5}"/>.</p>

        <h5>Is it defining a circle</h5>
        <p>There are some requirements for it to be a circle definition is must have an <InlineMath
            math="x^2 + y^2"/> and these must both be the same sign for it to be a circle. They also cannot have
            different coefficients of the <InlineMath math="x^2 +y^2"/> terms <InlineMath math="2x^2 +y^2"/>. It
            will
            also only be a circle if the x and y terms can cancel for example this is not a circle <InlineMath
                math="x^2 + y^2 - 3xy + 4y + 3 = 0"/>.</p>

        <h5>Finding the length of a Chord</h5>

        <p>Question: A circle has the equation of <InlineMath math="x^2 + y^2 - 4x - 6y = 12"/>. A chord PQ has a
            midpoint at <InlineMath math="(4,4)"/>. Find the length of the chord and the coordinates of P and Q.</p>

        <p>In this example we first need to find the centre and radius of the circle using the technique above.</p>

        <p>We first put the like terms together and then we complete the squares for both terms x and y.</p>
        <BlockMath math="(x^2 - 4x + (-2)^2 + (y^2 - 6y + (-3)^2 = 12 + (-2)^2 + (-3)^2"/>
        <p>Then we simplify.</p>
        <BlockMath math="(x^2 - 4x - 4) + (y^2 -6y +9) = 25"/>
        <BlockMath math="(x-2)^2 + (y-3)^2 = 25"/>

        <p>Therefore the centre of the circle is <InlineMath math="(2,3)"/> with a radius of <InlineMath math="5"/>
        </p>

        <p>Now to find the length of the chord we check the distance between the centre of the circle and the centre
            of
            the chord. <InlineMath math="\sqrt{(4-2)^2 + (4-3)^2} = \sqrt{5}"/>. This is because we are finding the
            length from the centre of the circle to the midpoint of the chord PQ. So the distance between the two
            points
            as per the standard formula for distance between two points. We can then create a full triangle as we
            know
            that the radius to the circle boundary so to the end of the chord line as it is the radius which we know
            is <InlineMath math="5"/>. Therefore we can work out the final length of the triangle which is half the
            length of the chord as <InlineMath math="a^2 = b^2 + c^2 = 5^2 = b^2 + (\sqrt{5})^2"/>. The formula can
            be
            rearrranged to give us <InlineMath
                math="5^2 - (\sqrt{5})^2 = b^2 = 25 - 5 = b^2 = \sqrt{20} = b"/> therefore this can be simplified
            to <InlineMath math="b = \sqrt{20} = \sqrt{4 \times 5} = 2\sqrt{5}"/>. This is the length of the half
            chord
            therefore the <strong>length</strong> of the chord is two times this so <InlineMath math="4\sqrt{5}"/>
        </p>

        <p>Now we need to calculate the coordinates of the endpoints PQ.</p>

        <p>We can find the gradient of the line from the centre of the circle through the chord by using the
            formula <InlineMath math="\frac{4-3}{4-2} = \frac{1}{2}"/>. The gradient of the chord will be a right
            angle
            to this so it must be <InlineMath math="-1 \div \frac{1}{2} = -2"/>. </p>

        <p>Therefore we know that the chord PQ has gradient <InlineMath math="-2"/> and passes through <InlineMath
            math="(4,4)"/>. And we know that from the gradient form formula shared at the start this is <InlineMath
            math="y - 4 = -2(x-4)"/>. We can expand this to get <InlineMath math="y-4 = -2x + 8"/> giving a final
            result
            of <InlineMath math="y = -2x + 12"/> this gives us the equation of the straight line.</p>

        <p>We now have the equation of the circle and straight line and can find the points where they intersect by
            solving them simultaneously. Therefore we can sub one into the other to find this.</p>

        <p>We sub y from the equation of the line into the equation of the circle.</p>
        <BlockMath math="(x-2)^2 + (-2x + 9)^2 = 25"/>
        <BlockMath math="x^2 -4x + 4x + 4x^2 -36x + 81 = 25"/>
        <BlockMath math="5x^2 -40x + 60"/>

        <p>A common factor of 5 exists in all the terms so can be cancelled giving.</p>
        <BlockMath math="x^2 - 8x + 12 = 0"/>
        <BlockMath math="(x-2)(x-6) = 0"/>

        <p>Therefore this states that <InlineMath math="x = 2"/> or <InlineMath math="x = 6"/></p>

        <p>Now we have the x values we can plug in to find the y values.</p>

        <p>When <InlineMath math="x = 2"/> then <InlineMath math="y = -2 \times 2 + 12 = 8"/></p>
        <p>When <InlineMath math="x = 6"/> then <InlineMath math="y = -2 \times 6 + 12 = 0"/></p>
        <p>Therefore the points of PQ are <InlineMath math="(2,8)"/> and <InlineMath math="(6,0)"/></p>

        <br/>

        <h3 id={"polynomialgraph"}>Polynomial Graphs</h3>

        <p>The graph of a polynomial is a smooth curve. As in the previous sections you want to factor a polynomial to
            find the x-intercepts or zeroes of a polynomial. These are the places where the curve crosses the
            x-axis.</p>

        <p>Steps to draw this curve are:</p>

        <p>1: Let <InlineMath math="x = 0"/> then <InlineMath math="P(0) = a_{0}"/>. This gives
            the <strong>y-intercept</strong> of the
            curve <InlineMath math="(0, a_{0})"/>.</p>

        <p>2: Factor the equation <InlineMath math="P(x)"/> and set the factor form equal to zero. <InlineMath
            math="P(x) = 0"/> when <InlineMath math="x = b"/>. Then <InlineMath math="(b,0)"/> is an x-intercept.</p>

        <p>3. Now plot the coordinates. If the exponent on the <strong>x-intercept</strong> is even then it will just
            touch that point and not cross the x-axis. Else if it is odd it will then it will cross the a-xis. It will
            cross the y-axis at the <strong>y-intercept.</strong></p>

        <p>4. You can work out if the function <InlineMath math="P(x)"/> is positive or negative between the
            x-intercepts to determine if positive line or negative. Simply test a number between the points and see if
            it is negative or positive on the plot.</p>

        <h3>Inequality Function Graphs</h3>

        <p>When sketching graphs for inequalities convert to a format where you have <i>y</i> on its own. For
            example <InlineMath math="x + y > 5"/> would be <InlineMath math="y > -x + 5"/> this has a line slope of -1
            and a intercept on y of 5. Then you need to <strong>shade</strong> to consider the inequality sign you can
            test a point in the formula to see if its true if it is then shade that side of the
            line. <strong>Remember</strong> if the inequality is greater/less than it is a dotted line else it is a
            solid line for grater/less than or equal to.</p>

        <h3>Absolute Values Graphed</h3>

        <p>Absolute value graphs are always positive and if linear will be V shaped. As usual plug in an x value to find
            the y values.</p>

        <br/>

        <h3 id={"graphsketching"}>Graphical Transformations and Curve Sketching</h3>

        <h4>Graphs of Functions</h4>

        <p>The graph in the form <InlineMath math="y = kx^n"/> is a different shape for the different values
            of <strong>k</strong> and <strong>n</strong>.</p>

        <br/>

        <ul className="text-list">
            <li><strong>n</strong> is positive and even
                and <strong>k</strong> is <strong>positive</strong> you will
                get a <strong>u-shaped</strong> graph.
            </li>
            <li><strong>n</strong> is positive and even
                and <strong>k</strong> is <strong>negative</strong> you will
                get a <strong>n-shaped</strong> graph.
            </li>
            <li><strong>n</strong> is positive and odd
                and <strong>k</strong> is <strong>positive</strong> you will
                get a <strong>corner to corner shape which is bottom left to top right</strong> graph.
            </li>
            <li><strong>n</strong> is positive and odd
                and <strong>k</strong> is <strong>negative</strong> you will
                get a <strong>corner to corner shape which is top left to bottom right</strong> graph.
            </li>
            <li><strong>n</strong> is negative and even you will get a graph with two lines back to back
                and if <strong>k</strong> is <strong>negative</strong> you will
                get the graph <strong>below the x-axis</strong> and
                if <strong>k</strong> is <strong>positive</strong> you will get a graph above
                the a-axis.
            </li>
            <li><strong>n</strong> is negative and odd you will get a graph with two parts opposite the <strong>x and y
                axis</strong> if it is positive <strong>k</strong> then it is top right and bottom left quadrant else
                for <strong>negative k</strong> the graph is in the top left and bottom right quadrants.
            </li>
        </ul>

        <br/>

        <p>To be able to find the graph of a function you can set <i>x</i> to zero and then find the <i>y</i> intercept,
            along with checking the intercepts of <i>x</i> which are the values that make the function
            for <i>x</i> equal zero.</p>

        <BlockMath math="f(x) = (x^2 - 1)(3 - x)"/>

        <p>This example will intercept <i>y</i> at <InlineMath
            math="f(0) = (0^2 - 1)(3 - x) = -1 \times 3 = -3"/> therefore it crosses the y-axis at <InlineMath
            math="(0,-3)"/>. It will then cross the x-axis and intercept at <InlineMath
            math="(-1,0), (1,0), (3,0)"/> where you can create <strong>x</strong> is equal to zero.
        </p>

        <br/>

        <h4>Transformations</h4>

        <ul className="text-list">
            <li><InlineMath math="y = f(x + c)"/> will shift the graph to the left side. <InlineMath
                math="y = f(x - c)"/> will shift the graph to the right side.
            </li>
            <li><InlineMath math="y = f(x) + c"/> will shift the graph upwards by c. <InlineMath
                math="y = f(x) - c"/> will shift the graph downwards by c.
            </li>
            <li>Reflections in the x-axis flip the <InlineMath math="f(x)"/> vertically and reflections in the y-axis
                flip the <InlineMath math="f(x)"/> horizontally.
            </li>
            <li><InlineMath math="y = af(x)"/> if <InlineMath math="|a| > 1"/> the graph of <InlineMath
                math="y = af(x)"/> is stretched vertically by a factor of <i>a</i>.
            </li>
            <li><InlineMath math="y = af(x)"/> if <InlineMath math="0 < |a| < 1"/> the graph of <InlineMath
                math="y = af(x)"/> is squashed vertically by a factor of <i>a</i>.
            </li>
            <li><InlineMath math="y = af(x)"/> if <InlineMath math="a < 0"/> the graph of <InlineMath
                math="y = af(x)"/> is also reflected on the <i>x-axis</i>.
            </li>
            <li><InlineMath math="y = f(ax)"/> if <InlineMath math="|a| > 1"/> the graph of <InlineMath
                math="y = f(ax)"/> is squashed horizontally by a factor of <i>a</i>.
            </li>
            <li><InlineMath math="y = f(ax)"/> if <InlineMath math="0 < |a| < 1"/> the graph of <InlineMath
                math="y = f(ax)"/> is stretched horizontally by a factor of <i>a</i>.
            </li>
            <li><InlineMath math="y = f(ax)"/> if <InlineMath math="a < 0"/> the graph of <InlineMath
                math="y = f(ax)"/> is also reflected on the <i>y-axis</i>.
            </li>
        </ul>

        <br/>


        <h3 id={"proportion"}>Proportion</h3>

        <p>Proportional variables are closely related.</p>

        <h4>Direct Proportion</h4>

        <p>If two variables are directly proportional it means that changing one variable will change the other by the
            same scale factor.
            This can be written as <InlineMath math="y \propto x"/> which is equivalent to <InlineMath math="y = kx"/>.
        </p>

        <p>Direct proportion graphs are straight lines through the origin.</p>

        <h4>Inverse Proportion</h4>

        <p>If two variables are inverse proportion changing one variable will change the other by the reciprocal of the
            scale factor. Therefore
            multiplying one by variable by any constant will be the same as dividing the other variable by the same
            constant.</p>

        <p><InlineMath math="y \propto \frac{1}{x}"/> which is equivalent to <InlineMath math="y = \frac{k}{x}"/>.</p>

        <br/>

        <h3 id={"compositefunctions"}>Composite and Inverse Functions</h3>

        <p>Mappings take one number and transform it into another functions are a type of mapping in mathematics.</p>

        <h4>Functions</h4>

        <ul className="text-list">
            <li>A function is an operation that takes one or many numbers and maps them to one and only one number.</li>
            <li>The set of starting numbers is the <strong>domain</strong> and the resulting numbers they become is the
                range.
            </li>
            <li>A one to one mapping takes one number in the domain and maps to one number in the range.</li>
            <li>A many to one function maps more than one element in the domain to one element in the range.</li>
            <li>One to many mappings are not functions as per the definition in the first item in this list.</li>
        </ul>

        <h4>Composite Functions</h4>

        <p>A composite function is when you take multiple functions and combine them to make a composite one. They are
            written in the order they should be executed. </p>

        <h4>Inverse Functions</h4>

        <p><strong>Only one to one functions have inverses</strong>. An inverse function does the opposite to the
            original function and is written as <InlineMath math="f^{-1}(x)"/>.</p>

        <p>The <strong>domain</strong> of the inverse is the <strong>range</strong> of the function.</p>
        <p>The <strong>range</strong> of the inverse is the <strong>domain</strong> of the function.</p>

        <p>To work out the inverse for complex cases you can use algebra. For simple cases you can usually just look at
            it and work it out. The steps are as follows:</p>

        <ul className="text-list">
            <li>First replace <InlineMath math="f(x)"/> with <InlineMath math="y"/> to make it easier to work with.</li>
            <li>Rearrange the equation to make <i>x</i> the subject.</li>
            <li>Replace <i>x</i> with <InlineMath math="f^{-1}(x)"/> and <i>y</i> with <i>x</i>.</li>
            <li>Finally you then swap the domain and the range.</li>
        </ul>

        <p>If you need to draw the inverse function it is a reflection of the original function graph along <i>y=x</i>.
        </p>

        <br/>

        <h3 id={"permutation"}>Permutation & Combination</h3>

        <p>When the <strong>order does not matter</strong> its a <strong>Combination</strong> (so the lock naming is
            wrong) when the <strong>order does matter</strong> it is a <strong>Permutation</strong>.</p>

        <h4>Combinations</h4>

        <p>Combinations state how many ways you can choose some of the items from a group. The formula below can be used
            to answer this <i>n</i> is how many items in the total group and <i>r</i> is how many are to be chosen from
            all those available.</p>

        <p>For example how many ways to choose 9 numbers out of of a possible 72 numbers.</p>

        <BlockMath math="\frac{n!}{r!(n-r)!}"/>

        <h4>Permutations</h4>

        <p>With permutations ordering matters. Therefore when choosing items from a list you need to think about the
            different order the items can be in.</p>

        <BlockMath math="\frac{n!}{(n-r)!}"/>

        <br/>

        <h3 id={"recurrencerelation"}>Recurrence Relations</h3>

        <p><a href={"https://www.bbc.co.uk/bitesize/guides/z8syyrd/revision/2"}>A initial guide</a></p>


        <h3 id={"trigonemtry"}>Trigonometry</h3>

        <br/>

        <p></p>

        <br/>

        <h3 id={"mechanics"}>Mechanics</h3>
        <p><strong>Scalar</strong> are quantities without direction they only have a size(magnitude) for example a speed
            of of 10 m/s or distance of 12m.</p>

        <p><strong>Vectors</strong> are quantities that have a <strong>direction</strong> they can be positive or
            negative. Some examples of vectors are <strong>displacement</strong> which is the distance moved in a given
            direction from a starting point. <strong>Velocity</strong> which is a speed given with direction
            and <strong>acceleration</strong> which is a change in velocity over time.</p>

        <h4>Fundamental Units</h4>
        <p><strong>Fundamental Units</strong> are the international standard units.</p>

        <p><strong>Length measured in metres (m)</strong> which can also be called displacement. 1km = 1000m, 1m =
            100cm, 1cm = 10mm.</p>
        <p><strong>Time measured in seconds (s)</strong>. 1 hour = 60 minutes, 1 minute = 60 seconds.</p>
        <p><strong>Mass measured in kilograms (kg)</strong>. 1kg = 1000g, 1g = 1000mg.</p>

        <p>Converting units is straightforward for example to convert 4.2 hours to seconds you simply do <InlineMath
            math="4.2 hours \times 3600 = 15,120 seconds"/>.</p>
        <h4>Derived Units</h4>

        <p>Derived units are combinations of the <strong>fundamental units</strong>.</p>
        <p><strong>Speed or Velocity</strong> is <InlineMath math="\frac{distance}{time}"/> which is <InlineMath
            math="m/s"/></p>
        <p><strong>Acceleration</strong> is <InlineMath math="\frac{velocity}{time}"/> which is <InlineMath
            math="m/s^2"/></p>
        <p><strong>Weight or Force</strong> is <InlineMath math="mass \times acceleration"/> which is <InlineMath
            math="kg m/s^2"/> or <strong>N (N=Newtons)</strong></p>

        <h4>Types of Force</h4>
        <p>A <strong>force</strong> is a vector with both magnitude and direction. It is either push or pull and is
            measured in Newtons.</p>

        <p>The types of forces include <strong>weight</strong> (effect of mass and gravity and acts
            downwards), <strong>tension</strong> is a pulling force, <strong>thrust</strong> is a pushing
            force, <strong>friction</strong> is a resistive force and opposes the motion of the object.</p>

        <h4>Modelling</h4>

        <p>Mechanics uses modelling to solve real life problems where assumptions are made to turn these problems into
            graphs or equations. The standard type of assumptions are:</p>

        <ul className="text-list">
            <li>Gravity is constant and vertical</li>
            <li>Air resistance is negligible and can be ignored</li>
            <li>Smooth surface has no friction</li>
            <li>A rough surface has friction</li>
            <li>A particle is so small the forces will act on the particle at the same point</li>
            <li>A uniform object mass is evenly distributed</li>
            <li>A light object has zero mass</li>
            <li>An inextensible object cannot be stretched</li>
        </ul>

        <h4>Displacement Time Graphs</h4>

        <p>Displacement time graphs show the displacement (change in position of object can be negative) from a fixed
            origin in a straight line.</p>

        <p>They show displacement (on the vertical axis) against time (on the horizontal axis). They can go below the
            horizontal axis as displacement can be negative. Distance Time graphs cannot do this as cannot be
            negative.</p>

        <p>Displacement time graph key features.</p>

        <ul className="text-list">
            <li>Gradient of the graph means the velocity of the object. Positive (forward), Negative (backward). Steeper
                is greater speed.
            </li>
            <li>A straight line shows the object is moving with constant velocity.</li>
            <li>A curved line shows acceleration or deceleration.</li>
            <li>A horizontal line is the object is at rest.</li>
            <li>If the graph touches the x-axis it means it is at the origin.</li>
        </ul>

        <p>Knowing these features means the following can be calculated.</p>

        <BlockMath math="Average Speed = \frac{Total Distance Travelled}{Time}"/>

        <p>Speed is a scalar quantity and can only be positive.</p>

        <BlockMath math="Average Velocity = \frac{Displacement from starting point}{Time}"/>

        <p>The velocity is a vector quantity and can be positive, negative or zero.</p>

        <p>Using these two formulas questions about the graph can easily be answered.</p>

        <h4>Velocity Time Graphs</h4>

        <p>Show the velocity of an object as it moves in a straight line.</p>
        <p>They show velocity (on vertical axis) against the time on the (horizontal axis).</p>
        <p>They can go below the horizontal axis as can be negative.</p>

        <ul className="text-list">
            <li>The gradient of the graph equals the acceleration of the object.</li>
            <li>A straight line shows the object is accelerating at a constant rate.</li>
            <li>A horizontal line shows the object is moving at a constant velocity.</li>
            <li>Displacement can be found by the distance between the graph and the x-axis.</li>
            <li>The total displacement is the sum of the areas above the x-axis and the area below the x-axis
                subtracted.
            </li>
            <li>The total distance travelled is the sum of all areas above and below.</li>
            <li>If the graph is at the x-axis the object is stationary, if it is above it is travelling forwards and if
                it is below it is travelling backward.
            </li>
        </ul>

    </div>


);

export default BiteSizeMath
