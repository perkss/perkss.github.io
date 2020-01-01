import React from 'react';
import Latex from 'react-latex';
import {BlockMath} from 'react-katex';

const MathPrerequisites = () => (


    <div>
        <h2>Math Prerequisites</h2>
        <p>I was looking through the course notes for <a
            href="http://web.stanford.edu/class/cs103/">CS103</a> Mathematical Foundations of Computing and found a
            greate slide on <a
                href="http://web.stanford.edu/class/cs103/handouts/020%20Mathematical%20Prerequisites.pdf">mathematical
                prerequisites</a> for the course. I felt straight away this was a great small sample of the required
            maths for any maths for computer science or algorithm course in a short form, I still recommend Concrete
            Mathematics and the Math Preliminaries section in Art of Computer Programming vol1 by Knuth to add a fuller
            picture. Coming from the UK GCSE Bitesize maths is also great for really basic recap of High School maths.
            Also I would recommend recapping basic Algebra with
            <a href="https://www.mathsisfun.com/algebra/index.html"> Maths is Fun</a> and then the <a
                href="https://www.mathsisfun.com/algebra/index-2.html">further algebra course.</a>
        </p>


        <h3>Multiplying Polynomials</h3>

        <p><Latex>As part of this course polynomical knowledge is expected to be known which may not be the case if
            students did not have a great maths experience at earlier school years. They come to a specific case $n^2 =
            (2k)^2$ this is the same as $n^2 = 4k^2$. This is fairly trivial to understand as you take $(2k)\times(2k) =
            2\times2$ and $k\times k = 4k^2$.</Latex></p>

        <p><Latex>The next example is a little less trivial if you do not know polynomial multiplication and simply says
            $n^2 = (2k + 1)^2$ which simplied is $n^2 = 4k^2 + 4k + 1$. What always trips me up here is the 4k. Lets
            walk though this example.</Latex></p>
        <p><Latex>$(2k+1)^2$ can be written as $(2k+1)(2k+1)$</Latex> so we take each part of multiply by the next
            section so: </p>

        <p><Latex>$2k \times 2k$ and $2k \times 1$ and then also $1 \times 2k$ and $1 \times 1$. This then equals $4k^2
            + 2k + 2k + 1$ and is the same as $4k^2 + 4k + 1$.</Latex></p>

        <p><Latex>We can now clearly see how they have got $n^2 = 4k^2 + 4k + 1$ (hopefully). Please message me if
            not.</Latex></p><p>
    </p>

        <p><strong>Congratulations this is a great starting step to understanding any future courses in this
            area!!</strong>
        </p>
        <h3>Manipulating Equalities</h3>

        <p>Similar to the above and covered in our BiteSize Maths section manipulating equalities is part of basic
            Algebra. For example <Latex>$2x + 6 = 10$ can be manipulated so we firstly subtract $6$ from each side to
                get $2x = 4$ and then divide both sides by $2$ to equal $x=2$. Nice and easy right?!</Latex></p>

        <p>The next example is a little trickier and is chaining equalities the example shown<Latex> is $(2n+1)^2 -
            (2n)^2 =$$ 4n + 1$ we have to refer back to expanding double brackets and can think of this in the form.
            $(2n+1)(2n+1) - (2n)(2n)$ so we expand out these brackets by multiplying the first term by the two terms in
            the second bracket and then the second term by the two terms in the second bracket. This calculation is
            $2n\times 2n + 2n\times 1 + $$ 1\times 2n + 1\times 1$ followed by $2n\times 2n$ resulting in $4n^2 + 2n +
            2n + 1 - 4n^2 =$$ 4n + 1$ once simplified.</Latex></p>


        <h3>Manipulating Fractions</h3>

        <p>Fraction requirements are minimal just need to be able to add and multiply them. Here are the two formulas
            firstly adding fractions <Latex>$a/b+c/d = ad/bd + bc/bd = ad+cb/bd$ and secondly how to multiply fractions
                $a/b\times c/d = ac/bd$</Latex></p>

        <h3>Exponents and Roots</h3>
        <p>This section presented by two links <a
            href="https://www.mathsisfun.com/algebra/exponent-laws.html">first</a> and <a
            href={"https://www.rapidtables.com/math/number/exponent/adding-exponents.html"}>second</a> is very
            important and clearly explained. Please read it thoroughly. </p>
        <p>One item to highlight is this formula <BlockMath math="2^{n+1} = 2 \times 2^n
 = 2^n + 2^n"></BlockMath> as it comes up a few times and is a good one to remember.</p>
        <h3>Types of Numbers Categorisation</h3>
        <p>Some definitions of numbers required for Mathematics for Computer Science</p>

        <ul className="text-list">
            <li>Natural Numbers are whole numbers starting from zero toward infinity: <Latex>$0,1,2,3 ... n$ Natural
                numbers do not include $\infty$ though.</Latex></li>
            <li>Integers are all whole numbers including negative ones. <Latex>..., $-3, -2, -1, 0, 1, 2, 3, ...$
                positive and negative $\infty$ are not included in Integers.</Latex></li>
            <li>Real Numbers are all of the numbers that exist on the number line but again do not include <Latex>postive
                or negative $\infty$.</Latex></li>
            <li>A rational number is the ratio of two numbers (a number that can be written as
                one <strong>integer</strong> divided by another <strong>integer</strong>) or in other words A rational
                number is a number that can be in the form p/q
                where p and q are integers and q is not equal to zero.
            </li>
            <li>An added definition here is closed form, in maths a closed form expression is one that can be evaluated
                in a finite number of operations. A nice answer to this is on stack exchange <a
                    href="https://math.stackexchange.com/questions/58502/closed-form-solution-of-recurrence-relation">here</a>
            </li>
        </ul>

        <h3>Logarithms</h3>
        <p>One key logarithm law that comes up regularly is <Latex>$b^c = x$ is equal to $\log _b(x) = c$</Latex> this
            is common in recursive algorithm time analysis. For example <Latex>$2^3 = 8$ and $\log _2(8) = 3$</Latex>
        </p>
        <h3>Closure Properties</h3>
        <p>When adding two natural numbers you are guaranteed to get back a natural number. This means that natural
            numbers are closed under addition. For subtraction of natural numbers it is not closed form as you may
            have <Latex>$2 - 5 = -3$ which is not a natural number as it is negative. Therefore natural numbers are not
                closed under subtraction.</Latex> Please see the summary table below as the text mentions these are
            fundamental it is usually just assumed the reader knows this when reading texts.</p>
        <table>
            <tr>
                <th></th>
                <th>Addition</th>
                <th>Subtraction</th>
                <th>Multiplication</th>
                <th>Division</th>
            </tr>
            <tr>
                <td>Natural Numbers</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Integers</td>
                <td>Yes</td>
                <td>Yes</td>

                <td>Yes</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Real Numbers</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>

        </table>


        <h3>Manipulating Inequalities</h3>
        <p>An example of an inequality is <Latex>$3$ &lt; $x$ &lt; $4$ this states that $x$ is strictly great than $3$
            and strictly lesss than $4$. Whats interesting to consider here if $x$ is a integer or a natural number then
            there are no choices for $x$ but if it is a real number it could be $3.1$ or $3.72412$. Another interesting
            case is that $3$ &lt; $n$ is the same as $3 \leq n$. These are equal because $2$ is strictly less than $n$
            so $n$ cannot be two or less it has to be three or more. In general sense this is the formula:</Latex></p>
        <p><Latex>$m$ &lt; $n$</Latex></p>
        <p><Latex>is the same as $m + 1 \leq n$</Latex></p>


        <h3>Laws for Sums</h3>

        <p>Please check Maths is Fun for a great explanation <a
            href="https://www.mathsisfun.com/associative-commutative-distributive.html">here</a>.</p>
        <table>
            <tr>
                <th>Law</th>
                <th>Meaning</th>
            </tr>
            <tr>
                <td>Distributive Law</td>
                <td>When we <b>multiply</b> a number by a group of numbers <b>added</b> together or do
                    each <b>multiply</b> separately and <b>add</b> them we get the same result.
                </td>
            </tr>
            <tr>
                <td>Associative Law</td>
                <td>When we group numbers it does not matter to the result when we <b>add</b> or <b>multiply</b></td>
            </tr>
            <tr>
                <td>Commutative Law</td>
                <td>When we swap numbers over we still get the same answer for <b>add</b> or <b>multiply</b> and even
                    percentages.
                </td>
            </tr>

        </table>

        <h3>Definitions commonly seen for proofs (Solow)</h3>

        <table>
            <tr>
                <th>Definition</th>
                <th>Meaning</th>
            </tr>
            <tr>
                <td>Divide</td>
                <td><i>An integer n divides an integer m (written n|m) if m = kn, for some integer k.</i></td>
            </tr>
            <tr>
                <td>Prime</td>
                <td><i>An integer p > 1 is prime if the only positive integers that divide p are 1 and p.</i></td>
            </tr>
            <tr>
                <td>Isosceles</td>
                <td><i>A triangle is isosceles if two of its sides have equal length</i></td>
            </tr>
            <tr>
                <td>Equal</td>
                <td><i>Two ordered pairs of real numbers (x1, x2) and (y1, y2) are equal if x1 =y1 and x2 =y2.</i></td>
            </tr>
            <tr>
                <td>Even</td>
                <td><i>An integer is even if and only if the remainder is 0 when dividing n by 2. Therefore an integer n is even if n = 2k for some integer k</i></td>
            </tr>
            <tr>
                <td>Odd</td>
                <td><i>An integer n is odd if and only if n = 2k+1 for some integer k.</i></td>
            </tr>
            <tr>
                <td>Rational</td>
                <td><i>A real number is rational if and only if r can be expressed as the ratio of two integers p and q
                    in which the denominator q is not 0.</i></td>
            </tr>
            <tr>
                <td>Equivalent</td>
                <td><i>Two statements A and B are equivalent if and only if “A implies B” and “B implies A.”</i></td>
            </tr>
            <tr>
                <td>AND</td>
                <td><i>The statement A AND B is true only if A is true and B is true.</i></td>
            </tr>
            <tr>
                <td>OR</td>
                <td><i>The statement A OR B is always true unless A is false and B is false.</i></td>
            </tr>
            <tr>
                <td>Pythagoras Theorem</td>
                <td><i>In a right angled triangle the square of the hypotenuse is equal to the sum of the squares of the
                    other two sides. Used to find the length of a side of a triangle when only know two sides
                    lengths.</i></td>
            </tr>
        </table>

        <h3>Summations</h3>

        <h4>Summation Formula and Properties</h4>

        <h4>Bounding Summations</h4>

    </div>

);

export default MathPrerequisites
