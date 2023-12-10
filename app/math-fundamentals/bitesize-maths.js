import React from 'react';
import Latex from 'react-latex';
import {BlockMath, InlineMath} from 'react-katex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';


const BiteSizeMath = () => (


    <div>
        <h2>Basic Math</h2>

        <p>Welcome to the very beginning of our journey through mathematics, this first section of Math Fundamentals
            focuses on High School level maths with some help from the BBC Bitesize page. This section will be minimal
            and offer many resources to the reader to take each topic further.</p>

        <h3>Fractions</h3>
        <p>A fraction is a numerical quantity that is not a whole number.</p>
        <h4>Add</h4>
        <p>Adding fractions you need to have the same denominator if they are not the same you can get the least common denominator of a common denominator. Once they have the same denomiator you just add the numerator. </p>
        <BlockMath math="\frac{2}{5} + \frac{7}{5} = \frac{9}{5}" />
        <h4>Subtract</h4>

        <p>Subtracting fractions is similar you need to make the denominator the same then can subtract.</p>
        <BlockMath math="\frac{3}{4} - \frac{1}{4} = \frac{2}{4} = \frac{1}{2}" />

        <h4>Multiply</h4>
        <p>Rules multiplying is you multiply the numerator by the other numerator and the denominator by the other denominator and simplify if needed.</p>

        <BlockMath math="\frac{1}{2} \times \frac{2}{5} = \frac{2}{10} = \frac{1}{5}" />

        <h4>Divide</h4>

        <p>Dividing fractions is a little more complex the steps are 1) Turn the second fraction upside down into its reciprocal. Multiply the first fraction by the reciprocal. Simplify as needed.</p>

        <BlockMath math="\frac{1}{2} \div \frac{1}{6} = \frac{1}{2} \times \frac{6}{1} = \frac{6}{2} = \frac{3}{1} = 3" />

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

        <h4>Prime Numbers</h4>
        <p> A prime number has exactly two factors. A prime number can only be divided by <Latex>$1$</Latex> and itself.
            Hence three key facts can be drawn from this:
        </p>
        <ol className="text-list">
            <li><Latex>$1$ is not a prime number as it does not have two factors only one factor itself.</Latex></li>
            <li><Latex>$2$ is the only even prime number as all other even numbers have $2$ as a factor.</Latex></li>
            <li>There are a infinite number of prime numbers</li>
        </ol>

        <p>Prime numbers an example: Given <Latex>$33, 34, 35, 36, 37$</Latex> which numbers are prime? </p> <p>Well
        from the key facts we can ignore even numbers of <Latex>$34$ and $36$ straight away. Now to work out $33$ we can
            divide by numbers from $3$ to the $\sqrt 33$ as prime divisors will always be pairs. One member of the pair
            will be less than the square root and the other will be more thus adding an efficiency to the algorithm. So
            we can try $33\mod 3 = 0$ so here the first number tried is divisible so is modulo $0$ as $33/3 = 11$ so
            $33$ is not prime. Now lets try the same for $35$ so $35 \mod 3$ is $!=0$, now try $35\mod 4$ which is also
            $!= 0$, now we try $35 \mod 5=0$ which is as $35/5 = 7$ so $35$ is not prime. Finally we can run this
            algorithm over $37$ and see that no value when applying $37\mod 3$ ... $\sqrt 37$ so $37$ is prime.</Latex>
    </p><p>This function has been written in Clojure for example:</p>
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

<p>To look for the two factors you can form a tree. Where you divide the top number by a multiple until it is a prime number. If the new leaf is not a prime number you divide again and repeat until it is a prime number. A easy start is usually dived by 2. Then you have all the prime numbers which a terminal leaves of the tree as the factors. </p>

        <p>Highest common factor is a factor shared by two or more numbers for example 8 and 12 have the common factors
            of 1,2 and 4. The highest common factor here is 4. </p>
        <p>Lowest common multiple is a number that is shared multiple of two or more numbers. For example the lowest
            common multiple of 3 and 4 is 12.</p>

        <h3>Indices</h3>
        <p>The law of indices are important to know as a reference so please refer back to these when required: <a
            href="https://www.bbc.co.uk/education/guides/z826y4j/revision/5">Source</a>

        </p>

        <p>First law Mutliplication: <InlineMath math="a^m \times a^n = a^{m+n}" /> for example <InlineMath math="3^2 \times 3^5 = 3^{2+5} = 3^7" /> as this is <InlineMath math="(3 \times 3) \times (3 \times 3 \times 3 \times 3 \times 3) = 3^7" /></p>
        <p>Second law Division: <InlineMath math="a^m \div a^n = a^{m-n}" /> for example <InlineMath math="a^4 \div a^2 = a^{4-2} = a^2" /> this can be thought as <InlineMath math="\frac{a \times a \times a \times a}{a \times a}" /> which can be cancelled out which would leave you <InlineMath math="a \times a = a^2" /></p>

        <p>Third law raising a power to another power: <InlineMath math="(k^3)^2 = k^3 \times k^3" /> this is stating that <InlineMath math="k^3" /> is raised again by the power of 2. In this case then we multiply the powers together. For example <InlineMath math="(k^3)^2 = (k^{3 \times 2} = k^3 \times k^3 = k^6)" />. An example of this is <InlineMath math="(3a^4)^3 = 3^3 \times a^{4 \times 3} = 27 \times a^{12} = 27a^{12}"/></p>

        <p>Fourth law if <InlineMath math="a > 0 \implies a^0 =1" /> this is because any number divided by itself is 1. For example <InlineMath math="a^2 \div a^2 = a^{2-2} = a^0" /> as <InlineMath math="j^2 \div j^2 = 25 \div 25 = 1" /></p>

        <p>Fifth law if we have negative it can be solved as <InlineMath math="a^{-n} = \frac{1}{a^n}" /> For example <InlineMath math="3^5 \times 3^{-5} = 3^0 = 1" /> this can be rearranged by dividing both sides with <InlineMath math="3^5" /> as <InlineMath math="3^{-5} = \frac{1}{3^5}" /></p>

        <p>Sixth law is fractional powers this will result in the denomiator of the fraction becomes the root and then numerator becomes the power to raise too as this formula states<InlineMath math="a^{\frac{m}{n}} = (\sqrt[n]a)^m" />. For example <InlineMath math="8^{2}{3} = (\sqrt[3]8)^2 = 2^2 = 4" /></p>


        <p>Some further examples:</p>

        <p>In this example we need to simplify the term in the brackets in this case the bracket is raised to the power of 2 so that is exampled to be <InlineMath math="(3^2) \times y^2 = 9y^2" />.</p>

        <BlockMath math="4y^4 \times (3y)^2 = 4y^4 \times 9y^2 = 36y^2" />

        <h3>Surds</h3>

        <p>Surds are the representation of the most simplified version of a number. Where it cannot be simplified anymore in latin surd means death. It enables writing irrational numbers precisely. Irrational numbers are real numbers that cannot be written as a simple fraction. Having the exact surd form is useful in mathematics.</p>

        <h4>Key Facts</h4>

        <BlockMath math="a\sqrt{b} + c\sqrt{b} = (a+c)\sqrt{b}" />
        <BlockMath math="a\sqrt{b} - c\sqrt{b} = (a-c)\sqrt{b}" />
        <BlockMath math="\sqrt{a} \times \sqrt{a} = a" />
        <BlockMath math="\sqrt{a} \times \sqrt{b} = \sqrt{ab}" />
        <BlockMath math="\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}}" />

<h5>Example</h5>
        <p>Lets start simple we can simplify <InlineMath math="\sqrt{75}"/> this can be simplified as follows:</p>

<BlockMath math="\sqrt{75} = \sqrt{25 \times 3} = \sqrt{25} \times \sqrt{3} = 5\sqrt{3}"/>

<h5>Example</h5>

<p>Finding the simpliest surd without a calculator.</p>

<BlockMath math="\sqrt{392} = \sqrt{4 \times 98} = \sqrt{4} \times \sqrt{2} \times \sqrt{49} = 14\sqrt{2}"/>

        <p>Having surds on the denonmiator is not a good thing. When a surd is written on the denominator of a fraction, we rationalise the denominator to make it simpler. We do this by multiplying the numerator and denominator by an expression that will simplify the surd on the denominator. Therefore you can multiply the fraction by the surd over the surd as the example below as if you do this is just multiply by 1 is the same result. </p>

<h5>Example</h5>
        <BlockMath math="\frac{14}{\sqrt{7}} \times \frac{\sqrt{7}}{\sqrt{7}} = \frac{14\sqrt{7}}{7} = 2\sqrt{7}" />

        <p>In the example we start with the tricky square root 7 at the bottom therefore we can multiply by the square root 7 over square root 7.  This is legitamate as anything divided by itself is just 1 and you multiply anything by 1 is just itself. Which can then simplify the denominator to 7 and then you end up with the 14 divided by the 7 to give the final answer of <InlineMath math="2\sqrt{7}"></InlineMath>.</p>



        <h5>Example</h5>
        <p>Another example provided shows how to solve with sqrt on the botttom.</p>

        <BlockMath math="\frac{5}{\sqrt{32}}" />

        <p>Start by simplifying <InlineMath math="\sqrt{32}" /></p>

        <BlockMath math="\sqrt{32} = \sqrt{16 \times 2} = 4\sqrt{2}" />

        <p>Now have:</p>
        <BlockMath math="\frac{5}{\sqrt{32}} = \frac{5}{4\sqrt{2}}" />

        <p>We can now rationalise the denominator by multiplying the numerator and denominator by <InlineMath math="\sqrt{2}" /></p>

        <BlockMath math="\frac{5}{4\sqrt{2}} \times \frac{\sqrt{2}}{\sqrt{2}} = \frac{5\sqrt{2}}{4\sqrt{2} \times \sqrt{2}} = \frac{5\sqrt{2}}{4 \times 2} = \frac{5\sqrt{2}}{8}" />

        <p>This is possible as <InlineMath math="\sqrt{2} \times \sqrt{2} = 2" /> which removes the root from the denominator and <InlineMath math="\frac{\sqrt{2}}{\sqrt{2}} = 1" /> so the multiplication does not affect the value of the fraction.</p>

<h5>Example</h5>

<p>In this case you can do a common denominator but we can simply multiply and remove the denominator of each side. Which is what is done here, then divide by the new denominator. </p>

<BlockMath math="\frac{6}{\sqrt{3}} - \frac{8}{2\sqrt{2}} = \frac{6}{\sqrt{3}} \times \frac{\sqrt{3}}{\sqrt{3}} - \frac{8}{2\sqrt{2}} \times \frac{\sqrt{2}}{\sqrt{2}}"/>

<p>We can then simplify by multiplying out and then dividing by the integer denominator. It ends up as <InlineMath math="2 \times 2"/> as the  <InlineMath math="\sqrt{2} \times \sqrt{2} = 2"/> and then there is the extra  <InlineMath math="2"/> that multiplies the result.</p>

<BlockMath math="\frac{6\sqrt{3}}{3} - \frac{8\sqrt{2}}{2 \times 2} = 2\sqrt{3} - 2\sqrt{2} = 2(\sqrt{3} - \sqrt{2})"/>

        <h5>Example</h5>
        <p>Another more complex example is the following. Where we have two items in the denominator we simply multiply by both (the whole denominator still not just the surd) with the opposite sign. This allows them to be cancelled out.</p>

        <BlockMath math="\frac{2 + \sqrt{7}}{3 - \sqrt{2}}" />
        <BlockMath math="\frac{2 + \sqrt{7}}{3 - \sqrt{2}} \times \frac{3 + \sqrt{2}}{3 + \sqrt{2}}" />

        <BlockMath math="\frac{6 + 2\sqrt{2} + 3\sqrt{7} + \sqrt{14}}{3^2 - 3\sqrt{2} + 3\sqrt{2} - (\sqrt{2}) ^2}" />

        <p>Note that the <InlineMath math="\sqrt{7} \times \sqrt{2} = \sqrt{14}" /> as stated in the rule earlier. </p>

        <p>Now it simplifies by cancelling the values out. In particular <InlineMath math="-3\sqrt{2} + 3\sqrt{2}" /> and also <InlineMath math=" (\sqrt{2}) ^ 2 = 2" /> as you multiply out the square root.</p>

        <BlockMath math="\frac{6 + 2\sqrt{2} + 3\sqrt{7} + \sqrt{14}}{9-2}" />
        <p></p>
        <BlockMath math="\frac{6 + 2\sqrt{2} + 3\sqrt{7} + \sqrt{14}}{7}" />


        <p>A good reference with lots of examples is <a href={"https://twinklsecondary.blog/simplifying-surds-as-level/"}>here</a>.</p>

        <h3>Algebra</h3>

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

<p>In alegbra to find the slope between two points you can use the formula.</p>

<BlockMath math="\frac{y2 - y1}{x2 - x2}"/>

<p>Basically it is dividing the vetical change (rise) by the horizontal change (run).</p>

        <h3>Polynomials</h3>

        <p>Polynomial means many terms and in mathematics and they can be made up of constants, variables and exponents,
            but never division by a variable. Polynomials are good to work with as if you add or multiply
            polynomials you are guaranteed to get another polynomial. The <a
                href={"https://www.mathopenref.com/rootpolynomial.html"}>root</a> of a polynomial are the values for the
            variables that cause the polynomial to evaluate to zero. Graphically if they are <i>x</i> values then it is
            the
            values that cross the <i>x</i> axis.</p>

        <h3>Permutation & Combination</h3>

        <p>When the <strong>order does not matter</strong> its a <strong>Combination</strong> (so the lock naming is
            wrong) when the<strong>order does matter</strong> it is a <strong>Permutation</strong></p>

        <h3>Recurrence Relations</h3>

        <p><a href={"https://www.bbc.co.uk/bitesize/guides/z8syyrd/revision/2"}>A initial guide</a> </p>

        <h3>Calculus</h3>

        <p>Calculus is like understanding something by looking at small pieces. Differential calculus is cutting something into small pieces to find out how it changes. Whilst integral calculus is joining the small pieces together to find out how much there is. </p>

        <h4>Differentiation</h4>

        <p>Differentiation is used for calculating the rate of change. The rate of change of a function can be found by finding the derived function. You can ask to differentiate by the following notations , firstly the Liebniz Notation <InlineMath math="\frac{dy}{dx}" /> or <InlineMath math="f'(x)" />.</p>

        <p>The general formula to solve differentiation is to bring the power down to the front of x and multiply and then bring the power down by 1.</p>

        <BlockMath math="f(x) = ax^n \rightarrow f'(x) = nax^{n-1}" />

        <p>For example</p>

        <BlockMath math="y = x^{4}" />

        <BlockMath math="\frac{dy}{dx} = 4x^{3}" />

        <p>When you have a negative power the law of indices need to be remembered. </p>

        <BlockMath math="a^{-n} = \frac{1}{a^n}" />

        <BlockMath math="a^{\frac{m}{n}} = \sqrt[n]{a^m}"/>

        <p>Before differentiating you should remove brackets, separate top heavy fractions, change terms involving roots into fractional powers and change terms with <i>x</i> on the denominator to negative powers.</p>







    </div>


);

export default BiteSizeMath
