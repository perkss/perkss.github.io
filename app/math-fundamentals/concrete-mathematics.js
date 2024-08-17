import React from 'react';
import Latex from 'react-latex';
import {BlockMath, InlineMath} from 'react-katex';
import {HashLink as Link} from 'react-router-hash-link';

const ConcreteMathematics = () => (


    <div>
        <h2>Calculus and Differential Equations</h2>
        <h3>Topics</h3>
        <ul className="text-list">
            <li><Link to="#introduction">Introduction</Link></li>
            <li><Link to="#limits">Limits</Link></li>
            <li><Link to="#differentiation">Differentiation</Link></li>
            <li><Link to={"#integration"}>Integration</Link></li>
            <li><Link to={"#differential"}>Differential Equations</Link></li>
        </ul>

        <h3 id={"introduction"}>Introduction</h3>

        <p>Calculus is like understanding something by looking at small pieces. Differential calculus is cutting
            something into small pieces to find out how it changes. Whilst integral calculus is joining the small
            pieces together to find out how much there is. </p>

        <p>Learning calculus follows three main parts limits and then differentiation and integration.</p>

        <h3 id={"limits"}>Limits</h3>

        <p>The limit of a function is a value of the function as the input (or index) gets closer and closer or
            approaches some number. It has to do this from both sides. When a limit does not approach the same value
            from both sides we say that the ordinary limit does not exist. But instead we write the left side
            approaching limit with a negative sign and the right side approaching limit with a plus sign. Graphically
            the graphs with hole, jump or vertical asymptote are not continuous and will have limit gaps.</p>

        <p>For example when plotting a graph of a function it may have a hole at a certain point where the limit does
            not exist or
            be a piecewise graph where there are clear gaps. <a
                href={"https://www.mathsisfun.com/calculus/limits.html"}>Read</a> a good example where a function is
            indeterminate at <i>x = 1</i> but either side you can see the value of <i>y</i> is heading toward the value
            2. Here we can see that we are approaching the limit for <i>x = 1</i> will equal <i>2</i>.</p>

        <BlockMath math="\lim_{x \to 1} \frac{x^2-1}{x-1} = 2"></BlockMath>

        <p>When we approach different values from different sides of the limit like in a piecewise graph we say the
            ordinary limit as written above does not exist. Instead we right a negative limit to represent coming from
            the left side and a positive limit to represent coming from the right side. In the example we say as we
            approach <i>a</i>.</p>

        <BlockMath math="\lim_{x \to a^-} f(x) = 3.8"></BlockMath>

        <BlockMath math="\lim_{x \to a^+} f(x) = 1.3"></BlockMath>

        <p>Limits can be used to state values even if we can work out the value at <i>a</i> its not only for
            indeterminate points.</p>

        <h4>Limits with Infinity</h4>

        <p><strong>Infinity</strong> can be used in limits as we are approach infinity. We can plug very large numbers
            into the function and see the trend as the function approaches infinity and state its limit this can be a
            value or can be its self infinity depending on the function.</p>

        <h4>Eulers Number</h4>

        <p>The following formula gets closer and closer to Eulers number as <i>n</i> increases.</p>

        <BlockMath math="(1 + \frac{1}{n})^n"></BlockMath>

        <p>As we approach larger and larger numbers we move closer and closer to Eulers number. This is referenced later
            when we look at interest rate formulas in financial maths.</p>

        <BlockMath math="\lim_{x \to \infty} (1 + \frac{1}{n})^n = e"></BlockMath>

        <h4>Evaluating Limits</h4>

        <p>Below are the methods of how to find the value of the <a
            href={"https://www.mathsisfun.com/calculus/limits-evaluating.html"}>limit</a>.</p>

        <h5>Put the Value in the Function</h5>
        <p>Your first approach could be to simply put the limit value into the function and see if it works. If this
            doesnt give an appropriate result we can try another method.</p>

        <h5>Factors</h5>

        <p>We can try and factor the function to see if that can be put into a form to provide a valid answer.</p>

        <h5>Conjugate</h5>

        <p>For some fractions you can multiply the top and bottom by a conjugate and then rearrange and simplify.</p>

        <h5>Infinite Limits and Rational Functions</h5>

        <p>A rational function is one that is the ration of two polynomials. We can discover the overall degree of the
            function to see if it is zero, infinity or negative infinity.</p>

        <h5>L'Hopital's Rule</h5>

        <p>This rule can help find a limit as it says that the limit when we divide one function by another is the same
            as taking the derivative of each function. <a
                href={"https://www.mathsisfun.com/calculus/l-hopitals-rule.html"}>More info.</a></p>


        <h3 id={"differentiation"}>Differentiation</h3>
        <p>Differentiation is used for calculating the rate of change. The rate of change of a function can be found
            by
            finding the derived function. You can ask to differentiate by the following notations , firstly the
            Liebniz
            Notation <InlineMath math="\frac{dy}{dx}"/> or <InlineMath math="f'(x)"/>.</p>

        <p>The general formula to solve differentiation is to bring the power down to the front of x and multiply
            and
            then bring the power down by 1.</p>

        <BlockMath math="f(x) = ax^n \rightarrow f'(x) = nax^{n-1}"/>

        <p>For example</p>

        <BlockMath math="y = x^{4}"/>

        <BlockMath math="\frac{dy}{dx} = 4x^{3}"/>

        <p>When you have a negative power the law of indices need to be remembered. </p>

        <BlockMath math="a^{-n} = \frac{1}{a^n}"/>

        <BlockMath math="a^{\frac{m}{n}} = \sqrt[n]{a^m}"/>

        <p>Before differentiating you should remove brackets, separate top heavy fractions, change terms involving
            roots
            into fractional powers and change terms with <i>x</i> on the denominator to negative powers.</p>

        <h3 id={"integration"}>Integration</h3>
        <h3 id={"differential"}></h3>

    </div>

);

export default ConcreteMathematics
