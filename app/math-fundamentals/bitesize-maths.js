import React from 'react';
import Latex from 'react-latex';
import {BlockMath, InlineMath} from 'react-katex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {HashLink as Link} from 'react-router-hash-link';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import GridMethod from "../../images/math/AlgebraicDivisionGrid.jpeg";


const BiteSizeMath = () => (


    <div>
        <h2>Basic Math</h2>

        <p>Welcome to the very beginning of our journey through mathematics, this first section of Math Fundamentals
            focuses on High School level maths with some help from the BBC Bitesize page. This section will be minimal
            and offer many resources to the reader to take each topic further.</p>

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
            <li><Link to={"#geometry"}>Coordinate Geometry</Link></li>
            <li><Link to={"#permutation"}>Permutation</Link></li>
            <li><Link to={"#recurrencerelation"}>Recurrence Relation</Link></li>
            <li><Link to={"#calculus"}>Calculus</Link></li>
            <li><Link to={"#"}></Link></li>
        </ul>

        <br/>

        <h3 id={"fractions"}>Fractions</h3>
        <p>A fraction is a numerical quantity that is not a whole number.</p>
        <h4>Add</h4>
        <p>Adding fractions you need to have the same denominator if they are not the same you can get the least common
            denominator of a common denominator. Once they have the same denomiator you just add the numerator. </p>
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

        <p>In alegbra to find the slope between two points you can use the formula.</p>

        <BlockMath math="\frac{y2 - y1}{x2 - x2}"/>

        <p>Basically it is dividing the vetical change (rise) by the horizontal change (run).</p>


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

        <p>Sixth law is fractional powers this will result in the denomiator of the fraction becomes the root and then
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
        <p>Resulting in these being equavalent <InlineMath math="9^\frac{1}{2}"/> is the same as <InlineMath
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

        <p>Finding the simpliest surd without a calculator.</p>

        <BlockMath
            math="\sqrt{392} = \sqrt{4 \times 98} = \sqrt{4} \times \sqrt{2} \times \sqrt{49} = 2 \times \sqrt{2} \times 7 =  14\sqrt{2}"/>

        <p>Having surds on the denonmiator is not a good thing. When a surd is written on the denominator of a fraction,
            we rationalise the denominator to make it simpler. We do this by multiplying the numerator and denominator
            by an expression that will simplify the surd on the denominator. Therefore you can multiply the fraction by
            the surd over the surd as the example below as if you do this is just multiply by 1 is the same result. </p>

        <h5>Example</h5>
        <BlockMath math="\frac{14}{\sqrt{7}} \times \frac{\sqrt{7}}{\sqrt{7}} = \frac{14\sqrt{7}}{7} = 2\sqrt{7}"/>

        <p>In the example we start with the tricky square root 7 at the bottom therefore we can multiply by the square
            root 7 over square root 7. This is legitamate as anything divided by itself is just 1 and you multiply
            anything by 1 is just itself. Which can then simplify the denominator to 7 and then you end up with the 14
            divided by the 7 to give the final answer of <InlineMath math="2\sqrt{7}"></InlineMath>.</p>


        <h5>Example</h5>
        <p>Another example provided shows how to solve with sqrt on the botttom.</p>

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
        <p>To expand double brackets each term needs to be multipled together so the first term in the first bracket
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
                math="y< (y \le)"/> then shade <strong>below</strong> the line.</p>

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

        <h3 id={"factortheorem"}>Factor Theorem</h3>
        <p>To find the linear factors of a polynomial (split the polynomial into as many factors as you can) you first
            you simply plugin and try different numbers until they equal zero. This is going to be time consuming
            though. You only need to try the numbers that are factors of the constant. If no of these works then you
            cannot find simple integer factors. </p>

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

        <p></p>

        <h3 id={"geometry"}>Coordinate Geometry</h3>

        <p>Things to know up front</p>

        <p>Midpoint of a line: <InlineMath math="M = (\frac{x1 + x2}{2}, \frac{y1 + y2}{2})"/></p>
        <p>Distance between two points: <InlineMath math="AB = \sqrt{(x2 - x1)^2 + (y2 - y1)^2}"/> this is pythagoras
            theorem a triangle is created and you find the hypotenuse.</p>
        <p>Gradient of a straight line: <InlineMath math="\frac{y2 - y1}{x2 - x1}"/></p>

        <p>Three forms of equation of a straight line:</p>
        <p>Gradient Intercept: <InlineMath math="y = mx + c"/></p>
        <p>Gradient Point Form: <InlineMath math="y - y1 = m(x - x1)"/></p>
        <p>Two Point Form: <InlineMath math="\frac{y - y1}{y2 - y1} = \frac{x - x1}{x2 - x1}"/></p>

        <p>A circle has a centre point and a radius. The definition of a circle is the set of all points on a plane that
            are fixed distance from the center. The diameter is the width of the circle through the centre, the
            circumference is perimeter and the radius is the measure from the centre of the circle to any of outs
            boundary which is <InlineMath math="2r = d"/> two times the radius is the diameter. The formula for
            calculating the circumference is <InlineMath math="c = \pi d"/> or <InlineMath math="c = 2\pi r"/>.</p>

        <p>The <strong>cartesian</strong> equation of a circle with a centre of (a,b) and radius r can be written
            as <InlineMath math="(x-a)^2 + (y-b)^2 = r^2"/> where x and y are points on the circle. This can be thought
            of as taking a triangle from the centre to the radius (so any point on the circle) using pythagoras
            theorem <InlineMath math="a^2 + b^2 = c^2"/>. This is described at <a
                href="https://www.mathsisfun.com/algebra/circle-equations.html">Maths is Fun</a>. In that example they
            have a radius of five and then any point on the circle can be thought of as <InlineMath
                math="x^2 + y^2 = 5^2"/>.</p>

        <h5>Circle Theorem</h5>

        <p>The angle in a semi circle that are created when you join the two ends of the diameter to one point on the
            arc using chord is always a right angle <InlineMath math="90 \degree"/>. A good <a
                href="https://thirdspacelearning.com/gcse-maths/geometry-and-measure/angle-in-a-semi-circle/">read.</a>
        </p>

        <p>A cyclic quadrilateral inside a circle its opposite angles will always add up to <InlineMath
            math="180 \degree"/>.</p>

        <p>The angles at the circumference subtended by the same arc are equal.</p>

        <p>Inscribed angle is the angle formed in the interior of a circle when two chords intersect on the circle. The
            inscribed angle theorem states that an angle inscribed in a circle is half the central angle that subtends
            the same arc on the circle. Good <a
                href="https://en.wikipedia.org/wiki/Inscribed_angle#:~:text=In%20geometry%2C%20an%20inscribed%20angle,The%20inscribed%20angle%20%CE%B8%20circle.">reference</a>.
        </p>

        <p>The tangent to a circle is a straight line that touches the circumference of the circle at only one point.
            The angle between a tangent and a radius is <InlineMath math="90 \degree"/>. Tangents that meet at the same
            point are equal in length. <a
                href="https://thirdspacelearning.com/gcse-maths/geometry-and-measure/tangent-of-a-circle/">A good
                reference</a>.</p>

        <p>The perpendicular from the centre of a circle to a chord always bisects (midpoint) the chord.</p>

        <p>The distances from the meeting point of two tangents to the points where each tangent touches the circle are
            equal.</p>

        <p>The alternate segment theorem the angle between the tangent and a chord is equal to the angle in an alternate
            segment.</p>

        <h5>Standard Form</h5>

        <p>To make this generic we can think of the centre of a circle as (a,b) with all points on the circle
            as <strong>r</strong> away from the center represented as (x,y). Using the right angle triangle and
            pythagoras theorem we can work out where the points are in a standard form equation of <InlineMath
                math="(x-a)^2 + (y-b)^2 = r^2"/>. This allows us to find missing values by rearranging the formula.</p>

        <p>To find the distance between two points we can use the formula <InlineMath
            math="distance = \sqrt{a^2 + b^2}"/>. In our case we can have the two circles as <InlineMath
            math="(x-10)^2 + (y-6)^2 = 9"/> and <InlineMath math="(x+2)^2 + (y+3)^2 = 16"/> therefore the distance
            between these two points is the <InlineMath math="AB^2 = 12^2 + 9^2"/> which is <InlineMath
                math="AB^2 = 225"/> and then take the square root <InlineMath math="AB = 15"/>. This is the distance
            between the centers of the circles and now if we want the max and the minumum we simply add each radius or
            subtract each radius to give the max and minimum distances resulting in <InlineMath
                math="max = 15 + 3 + 4 = 22"/> and the shortest is <InlineMath math="min = 15 - 3 - 4 = 8"/>.</p>

        <h5>General Form</h5>

        <p>Sometimes equations are not written in standard form therefore you may see a circle equation and not know it.
            This can be described as general form and is standard form expanded. <InlineMath
                math="x^2 + y^2 + Ax + By + C = 0"/>.</p>

        <p>Equations of a circle centre and radius can be written in general form so <InlineMath
            math="x^2 + y^2 - 6x + 4y + 8 = 0"/> this can be written into the form above by completing the square twice
            once for <strong>x</strong> and once for <strong>y</strong>.</p>

        <p>Now put the <strong>x</strong> and <strong>y</strong> together. <InlineMath
            math="(x^2 -6x) + (y^2 + 4y) + 8 = 0"/>. Next move the constant to the right side. <InlineMath
            math="(x^2 -6x) + (y^2 + 4y) = -8"/>. Now we <a
            href="https://www.mathsisfun.com/algebra/completing-square.html">complete the square</a>. </p>

        <p>Complete the square for <strong>x</strong> we can take half the <InlineMath math="-6x"/> square it and add to
            both sides. Resulting in <InlineMath math="(x^2 -6x + (-3)^2) + (y^2 + 4y) = -8 + (-3)^2"/></p>

        <p>Now complete the square for <strong>y</strong> which is take half the <InlineMath math="-2"/> square it and
            add to both sides. Resulting in <InlineMath
                math="(x^2 -6x + (-3)^2) + (y^2 + 4y + (-2)^2) = -8 + (-3)^2 + (-2)^2"/></p>

        <p>Then tidy up. <InlineMath math="(x^2 -6x + 9) + (y^2 + 4y + 4) = -8 + (-3)^2 + (-2)^2"/></p>
        <p>Factor the left side which can be simplified to <InlineMath
            math="(x-3)^2 + (y-2)^2 = 3^2 + 2^2 - 8 = 5"/> therefore the centre is <InlineMath math="(3,2)"/> and radius
            is <InlineMath math="\sqrt{5}"/>.</p>

        <h5>Is it defining a circle</h5>
        <p>There are some requirements for it to be a circle definition is must have an <InlineMath
            math="x^2 + y^2"/> and these must both be the same sign for it to be a circle. They also cannot have
            different coefficients of the <InlineMath math="x^2 +y^2"/> terms <InlineMath math="2x^2 +y^2"/>. It will
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

        <p>Therefore the centre of the circle is <InlineMath math="(2,3)"/> with a radius of <InlineMath math="5"/></p>

        <p>Now to find the length of the chord we check the distance between the centre of the circle and the centre of
            the chord. <InlineMath math="\sqrt{(4-2)^2 + (4-3)^2} = \sqrt{5}"/>. This is because we are finding the
            length from the centre of the circle to the midpoint of the chord PQ. So the distance between the two points
            as per the standard formula for distance between two points. We can then create a full triangle as we know
            that the radius to the circle boundary so to the end of the chord line as it is the radius which we know
            is <InlineMath math="5"/>. Therefore we can work out the final length of the triangle which is half the
            length of the chord as <InlineMath math="a^2 = b^2 + c^2 = 5^2 = b^2 + (\sqrt{5})^2"/>. The formula can be
            rearrranged to give us <InlineMath
                math="5^2 - (\sqrt{5})^2 = b^2 = 25 - 5 = b^2 = \sqrt{20} = b"/> therefore this can be simplied
            to <InlineMath math="b = \sqrt{20} = \sqrt{4 \times 5} = 2\sqrt{5}"/>. This is the length of the half chord
            therefore the <strong>length</strong> of the chord is two times this so <InlineMath math="4\sqrt{5}"/></p>

        <p>Now we need to calculate the coordinates of the endpoints PQ.</p>

        <p>We can find the gradient of the line from the centre of the circle through the chord by using the
            formula <InlineMath math="\frac{4-3}{4-2} = \frac{1}{2}"/>. The gradient of the chord will be a right angle
            to this so it must be <InlineMath math="-1 \div \frac{1}{2} = -2"/>. </p>

        <p>Therefore we know that the chord PQ has gradient <InlineMath math="-2"/> and passes through <InlineMath
            math="(4,4)"/>. And we know that from the gradient form formula shared at the start this is <InlineMath
            math="y - 4 = -2(x-4)"/>. We can expand this to get <InlineMath math="y-4 = -2x + 8"/> giving a final result
            of <InlineMath math="y = -2x + 12"/> this gives us the equation of the stright line.</p>

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


        <h3 id={"permutation"}>Permutation & Combination</h3>

        <p>When the <strong>order does not matter</strong> its a <strong>Combination</strong> (so the lock naming is
            wrong) when the <strong>order does matter</strong> it is a <strong>Permutation</strong></p>

        <h3 id={"recurrencerelation"}>Recurrence Relations</h3>

        <p><a href={"https://www.bbc.co.uk/bitesize/guides/z8syyrd/revision/2"}>A initial guide</a></p>

        <h3 id={"calculus"}>Calculus</h3>

        <p>Calculus is like understanding something by looking at small pieces. Differential calculus is cutting
            something into small pieces to find out how it changes. Whilst integral calculus is joining the small pieces
            together to find out how much there is. </p>

        <h4>Differentiation</h4>

        <p>Differentiation is used for calculating the rate of change. The rate of change of a function can be found by
            finding the derived function. You can ask to differentiate by the following notations , firstly the Liebniz
            Notation <InlineMath math="\frac{dy}{dx}"/> or <InlineMath math="f'(x)"/>.</p>

        <p>The general formula to solve differentiation is to bring the power down to the front of x and multiply and
            then bring the power down by 1.</p>

        <BlockMath math="f(x) = ax^n \rightarrow f'(x) = nax^{n-1}"/>

        <p>For example</p>

        <BlockMath math="y = x^{4}"/>

        <BlockMath math="\frac{dy}{dx} = 4x^{3}"/>

        <p>When you have a negative power the law of indices need to be remembered. </p>

        <BlockMath math="a^{-n} = \frac{1}{a^n}"/>

        <BlockMath math="a^{\frac{m}{n}} = \sqrt[n]{a^m}"/>

        <p>Before differentiating you should remove brackets, separate top heavy fractions, change terms involving roots
            into fractional powers and change terms with <i>x</i> on the denominator to negative powers.</p>


    </div>


);

export default BiteSizeMath
