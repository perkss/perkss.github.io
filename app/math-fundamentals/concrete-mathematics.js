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
            pieces
            together to find out how much there is. </p>

        <h3 id={"limits"}>Limits</h3>

        <p>The limit of a function is a value of the function as the input (or index) gets closer and closer or
            approaches some number. It has to do this from both sides. When a limit does not approach the same value
            from both sides we say that the limit does not exist. </p>

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
