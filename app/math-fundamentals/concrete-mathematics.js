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


        <p>To read the following you are saying as x approaches infinity 1/x approaches zero (but never reaches
            zero).</p>
        <BlockMath math="\lim_{x \to \infty} \frac{1}{x} = 0"></BlockMath>

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

        <p>When modelling <InlineMath math="a^x"/> and the gradient graph of <InlineMath
            math="\frac{dy}{dx} = a^x"/> you will
            notice that the curves of the graphs will be identical when the value of <i>a</i> is exactly Eulers number
            of 2.718281828459045…</p>

        <p>This means the result of differentiating <i>e</i> to find the rate is the same as the original function.</p>

        <p>This is the reason why Euler number is used so much as it makes it very convenient for logarithm and
            exponential functions.</p>

        <p>Anything in the form of <InlineMath math="y = a^x"/> is <strong>an</strong> exponential function
            whilst <InlineMath math="y = e^x"/> is <strong>the</strong> exponential function.</p>

        <p>The following formula that can be used for compounding calculations and gets closer and closer to Eulers
            number as <i>n</i> increases to infinity.</p>

        <BlockMath math="(1 + \frac{1}{n})^n"></BlockMath>

        <p>This can be tried out as the following.</p>

        <BlockMath math="(1 + \frac{1}{100})^{100} = 2.704813829942"></BlockMath>

        <BlockMath math="(1 + \frac{1}{10000})^{10000} = 2.71814592682"></BlockMath>

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

        <p>When learning about slopes of graphs you can find the average slope between two points. The slope is the
            change</p>

        <BlockMath
            math="Slope = \frac{rise}{run} = \frac{Change in Y}{Change in X} = \frac{y_2 - y_1}{x_2 - x_2}"></BlockMath>

        <p>Following this approach if you want to know the slope at a single point you cannot as it would be zero change
            in both therefore:</p>

        <BlockMath math="Slope = \frac{0}{0} = ?"></BlockMath>

        <p>but with derivatives we can take a small change and shrink it down towards zero.</p>

        <BlockMath math="Slope = \frac{Change in Y}{Change in X} = \frac{\vartriangle Y}{\vartriangle X}"></BlockMath>

        <p>This leads to the difference quotient formula for differentiation which you will not use once you learn the
            rules. The change in <i>x</i> is commonly replaced by the letter <i>h</i>.</p>

        <BlockMath
            math="Slope = \lim_{\vartriangle x \to 0} \frac{\vartriangle Y}{\vartriangle X} = \frac{f(x+\vartriangle x) - f(x)}{\vartriangle x}"></BlockMath>

        <p>Differentiation is used for calculating the rate of change. The rate of change of a function can be found
            by finding the derived function. You can ask to differentiate by the following notations , firstly the
            Liebniz Notation <InlineMath math="\frac{dy}{dx}"/> or <InlineMath math="f'(x)"/>.</p>

        <h4>Derivatives Rules</h4>

        <p>To differentiate there are many rules that can be followed these can be found listed on <a
            href={"https://www.mathsisfun.com/calculus/derivatives-rules.html"}>Maths is Fun</a></p>

        <h5>Power Rule</h5>
        <p>For example the power rule to solve differentiation is to bring the power down to the front of x and multiply
            and then bring the power down by 1.</p>

        <BlockMath math="f(x) = ax^n \rightarrow f'(x) = nax^{n-1}"/>

        <p>For example</p>

        <BlockMath math="y = x^{4}"/>

        <BlockMath math="\frac{dy}{dx} = 4x^{3}"/>

        <p>When you have a negative power the law of indices need to be remembered. </p>

        <BlockMath math="a^{-n} = \frac{1}{a^n}"/>

        <BlockMath math="a^{\frac{m}{n}} = \sqrt[n]{a^m}"/>

        <p>Before differentiating you should remove brackets, separate top heavy fractions, change terms involving
            roots into fractional powers and change terms with <i>x</i> on the denominator to negative powers.</p>

        <h5>Product Rule</h5>

        <p>The product rule is used when you need to differentiate two functions that are multiplied together. Here you
            differentiate each function and multiply it by the other non differentiated function then add them.</p>

        <p>' means derivative of</p>
        <BlockMath math="(fg)' = fg' + gf'"/>

        <h5>Chain Rule</h5>

        <p>If we know the rate of change for two related things, how do we work out the overall rate of change?</p>
        <p>The chain can tell us the overall rate of change when we know the rate of change of two related things.</p>

        <BlockMath math="\frac{dy}{dx} = \frac{dy}{du} \times \frac{du}{dx}"/>

        <p>Simply when you have a function of a function (a composite function) you will use the chain rule. You can
            replace the value inside with a variable. Differentiate both parts and multiply then plug back in the
            original value for the
            variable. <a href={"https://www.mathsisfun.com/calculus/chain-rule.html"}>Example</a>.</p>

        <p>Lets walk through an example of the chain rule. Firstly identify the structure. A composite function
            generally looks like the following:</p>

        <BlockMath math="f(g(x))"/>

        <p>Where <InlineMath math="f(x)"/> is the outer function and <InlineMath math="g(x)"/> is the inner function.
        </p>

        <p>In this example <InlineMath math="h(x) = (3x^2 + 2)^3"/></p>

        <p>Now using the chain rule you can identify the functions.</p>

        <p>Outer function is <InlineMath math="f(u) = u^3"/>.</p>
        <p>Inner function is <InlineMath math="g(x) = 3x^2 + 2"/>.</p>

        <p>Now differentiate the outer function</p>

        <p><InlineMath math="f'(u) = 3u^2"/></p>

        <p>Now differentiate the inner function <InlineMath math="g'(x) = 6x"/>.</p>

        <p>Multiply the results to get <InlineMath
            math="h'(x) = f'(g(x)) \times g'(x) = 3(3x^2 + 2)^2 \times 6x = 18x(3x^2+2)^2"/></p>


        <h4>Tangent Line</h4>
        <p>add examples from book for these</p>
<h4>Normal Line</h4>

        <h4>Higher Order Derivatives</h4>

        <p>You can differentiate multiple times as required to get higher order derivatives. This enables you to see the
            the rate of change of the rate of change. For example the acceleration of speed, or the jerk of
            acceleration.</p>

        <p>Therefore to find the <strong>velocity</strong> of a ball thrown given a function you differentiate it once
            then to find the acceleration at that point you differentiate it again therefore the second derivative gives
            you the acceleration.</p>

        <p>To find the rates of change at different points on a graph where the points cross the x-axis you first
            factorise the equation and then set the equation y = 0 and find the x coordinates. You then differentiate
            the equation and plug in the x values to find the rate of change at those coordinates.</p>

        <h4>Partial Derivatives</h4>

        <p>A <a href={"https://www.mathsisfun.com/calculus/derivatives-partial.html"}>partial derivative</a> is one
            where we have multiple variables and therefore we hold some variables constant. For example if we have
            variables <i>x</i> and <i>y</i> then we can differentiate <i>x</i> and hold <i>y</i> constant.</p>

        <h4>Concave (Convexity)</h4>

        <p>The concave upward (also called convex) is when the slope increases and the concave downward (also called
            concave) is when the slope decreases. To calculate this using differentiation is you take the second
            derivative of the function then set the value equal to zero and solve for the <i>x</i>. When the slope is
            positive you concave and when negative you convex. The point where it changes is called the <strong>inflection
                point</strong>.</p>

        <h4>Taylor Series</h4>

        <p>A Taylor Series is an expansion of a function into a infinite sum of terms where each terms exponent is
            larger and larger. We can use the first few terms of a Taylor Series to then get an approximate value for
            the function.</p>

        <h3 id={"integration"}>Integration</h3>

        <p>Integration can be thought of as the reverse of differentiation it is adding up the small pieces to find the
            whole. It can be used for areas, volumes and central points.</p>
        <p>The symbol for integral is below and we always require to add the constant as the derivative of a constant is
            zero, therefore when we integrate back we have providing for all constants. A good introduction and examples
            can be found at <a href={"https://www.mathsisfun.com/calculus/integration-introduction.html"}>Maths is
                Fun</a></p>

        <BlockMath math="\int 2x \;dx = x^2 + c"/>

        <p>When you have a single variable you have the following to integrate.</p>

        <BlockMath math="\int x \;dx = \frac{1}{2}x^2 + c"/>

        <p>This will follow the integration power rule.</p>

        <BlockMath math="\int x^n \;dx = \frac{x^{n+1}}{n+1} + c"/>

        <p>When you have a single constant to integrate it is simply the value with <i>x</i> plus a constant</p>

        <BlockMath math="\int 1 \;dx = x + c"/>

        <BlockMath math="\int 7 \;dx = 7x + c"/>

        <h4>Integration Rules</h4>

        <p>As with differentiation as set of rules exist for integration that makes it much easier to solve.</p>

        <p>These have been written up well at <a href={"https://www.mathsisfun.com/calculus/integration-rules.html"}>Maths
            is Fun Integration Rules</a> therefore I would suggest reading them here.</p>

        <h5>Examples</h5>

        <p>Constant <InlineMath math="\int a \;dx = ax + c"/></p>
        <p>Variable <InlineMath math="\int x \;dx = \frac{x^2}{2} + c"/></p>
        <p>Square <InlineMath math="\int x \;dx = \frac{x^3}{3} + c"/></p>
        <p>Reciprocal <InlineMath math="\int (\frac{1}{x}) \;dx = \ln|x| + c"/></p>
        <p>Exponential euler <InlineMath math="\int e^x \;dx = e^x + c"/></p>
        <p>Exponent <InlineMath math="\int a^x \;dx = \frac{a^x}{\ln(a)} + c"/></p>
        <p>Natural Log <InlineMath math="\int \ln(x) dx = x \ln(x) - x + c"/></p>

        <h5>Rules</h5>
        <p>Multiplication by Constant <InlineMath math="\int cf(x) \;dx = c \int f(x) + dx"/></p>
        <p>Power Rule <InlineMath math="\int x^n \;dx = \frac{x^{n+1}}{n+1} + c"/></p>
        <p>Sum Rule <InlineMath math="\int (f+g) \;dx = \int f \;dx + \int g \; dx"/></p>
        <p>Difference Rule <InlineMath math="\int (f - g) \;dx = \int f \;dx - \int g \; dx"/></p>
        <p>Integration By Parts <InlineMath math="\int u v \;dx = u \int v \;dx - \int u'(\int v dx) \; dx"/></p>
        <p>Integration By Substitution see details below.</p>


        <h4>Definite vs Indefinite Integrals</h4>

        <p>When you see an integral with no boundaries they are indefinite integrals. A definite integral has actual
            values listed with the bottom value the start value and the upper value the end value. To work out the
            definite integral the function is required to be continuous between the two points.</p>

        <p>To calculate definite integrals you first integrate the indefinite function then plug in the start calculate
            and then the end value and then subtract the start value result from the end value result. As you do this
            you will notice the <i>C</i> constants are cancelled out in the subtraction. <a
                href={"https://www.mathsisfun.com/calculus/integration-definite.html"}>Please check the example.</a></p>


        <h4>Integration by Parts</h4>

        <p>When trying to integrate a function that is a product of two functions you use the integration by parts
            formula. <a href={"https://www.mathsisfun.com/calculus/integration-by-parts.html"}>Reference</a> for the
            basics and a neat video <a
                href={"https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-4-techniques-of-integration/part-b-partial-fractions-integration-by-parts-arc-length-and-surface-area/session-76-integration-by-parts/"}> here.</a>
        </p>

        <BlockMath math="\int u v dx = u \int v dx - \int u' (\int v dx) dx"/>

        <p>Where <i>u</i> is the function <InlineMath math="u(x)"/> <i>v</i> is the function <InlineMath
            math="v(x)"/> and <i>u'</i>
            is the derivative of the function <InlineMath math="u(x)"/></p>

        <p>The steps to follow are as follows you can choose <i>U</i> and <i>V</i>. You can then differentiate <i>U</i>.
            Remember choose the
            <i>U</i> and <i>V</i> appropriately to make the calculation easier. Integrate <i>V</i>. Put them into the
            formula and then solve and simplify.</p>


        <h5>Example Integration by Parts</h5>
        <BlockMath math="\int x \; cos(x) dx"/>
        <p>First choose the functions of u and v.</p>
        <BlockMath math="u = x"/>
        <BlockMath math="v = cos(x)"/>

        <p>Now it is in the format <InlineMath math="\int u x \;dx"/> we can proceed.</p>

        <p>Differentiate u is <InlineMath math="u' = x' = 1"/></p>

        <p>Integrate v is <InlineMath math="\int v \;dx = \int cos(x) dx = sin(x)"/></p>

        <p>Now put this together to give the following then solve.</p>

        <p><InlineMath math="x sin(x) - \int 1 \; sin(x) \;dx"/> solved is <InlineMath math="x sin(x) + cos(x) + c"/>
        </p>
        <p>Put simply we have (u integral v) minus integral of (derivative u, integral v)</p>

        <h4>Integration by Substitution (Reverse Chain Rule)</h4>

        <p>The reverse chain rule is a method to find an integral but only when it can be setup in a specific way.</p>

        <p>This is the method for making a substitution to simplify an integral <a
            href={"https://www.mathsisfun.com/calculus/integration-by-substitution.html"}>reference.</a></p>

        <p>It requires being able to write the integral in this form <InlineMath math="\int \;f(g(x)) \;g'(x) \;dx"/> this
            gives <InlineMath math="g(x)"/> and its derivative <InlineMath math="g'(x)"/>.</p>

        <p>Lets take an example. <InlineMath math="\int cos(x^2) \;2x \;dx"/>. Identify the substitution <InlineMath
            math="u = x^2"/>. Now compute <InlineMath math="du = \;2x \;dx"/>.</p>

        <p>Do the replacements of <InlineMath math="u"/>. <InlineMath
            math="\int cos(x^2) \;2x \;dx = \int cos(u) \;du"/>. <strong>Integrate</strong> the form. <InlineMath
            math="\int cos(u) \;du = sin(u) + c."/></p>

        <p>Now substitute back u. <InlineMath math="sin(x^2) + c"/>.</p>

        <p>This only works for certain integrals some require rearranging to get it into this form for example when
            multiplied by a constant. You need the u to be equal to the derivative of the multiplier as per the formula
            stated at the start of this section. </p>

        <p>For example <InlineMath math="\int cos(x^2) \;6x \;dx"/> is not on the correct form but it can be by moving the
            multiplier out. <InlineMath math="\int cos(x^2) 6x \;dx = 3 \int cos(x^2) \; 2x \; dx"/></p>

        <h3 id={"differential"}></h3>

    </div>

);

export default ConcreteMathematics
