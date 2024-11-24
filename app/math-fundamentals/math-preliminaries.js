import React from 'react';
import Latex from 'react-latex';
import {BlockMath, InlineMath} from 'react-katex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {HashLink as Link} from 'react-router-hash-link';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import GridMethod from "../../images/math/AlgebraicDivisionGrid.jpeg";

const MathPreliminaries = () => (


    <div>
        <h2>Statistics and Probability</h2>

        <h3>Topics</h3>
        <ul className="text-list">
            <li><Link to="#probability">
                Probability Introduction</Link></li>
        </ul>

        <h3 id={"probability"}>Probability</h3>

        <p>Probability is the study of measuring certainty that an event will happen.</p>

        <p>Probability outcomes always sum up to 1. Probability is usually denoted as <InlineMath
            math={"P(x)"}></InlineMath> where x is the event of interest and its probability it will happen. If an event
            has a 70% chance of happening would say <InlineMath math={"P(X) = 0.7"}></InlineMath></p>

        <p><strong>Often Likelihood and Probability</strong> are used together. Probability quantifies predictions of
            events to happen. Likelihood is measuring the frequency of events that have already occurred. In statistics
            you often use past events to predict probability (the future).</p>

        <p>You can calculate the probability of an event not happening knowing the probability of it happening by
            doing <InlineMath math={"P(not X) = 1- 0.7 = 0.3"}></InlineMath>.</p>

        <p><strong>Odds</strong> probability can be expressed as odds and this is common in the betting
            industry. <InlineMath
                math={"O(x)"}></InlineMath> such as <InlineMath math={"2:1"}></InlineMath></p>

        <p>Odds can be transformed into probability and back with the following two formulas.</p>

        <BlockMath math="P(X) = \frac{O(X)}{1 + O(X)}"/>

        <p>Taking our example of odds <InlineMath math={"2:1"}></InlineMath>.</p>

        <BlockMath math="P(X) = \frac{O(\frac{2}{1})}{1 + O(\frac{2}{1})}"/>
        <BlockMath math="P(X) = \frac{2}{3} = 0.66..."/>

        <p>Now to convert back from a probability to odds we can do the following.</p>

        <BlockMath math="O(X) = \frac{P(X)}{1 - P(X)}"/>
        <BlockMath math="O(X) = \frac{P(\frac{2}{3})}{1 - P(\frac{2}{3})}"/>
        <BlockMath math="O(X) = \frac{2}{1} = 0.2"/>

        <h4>Joint Probability</h4>
        <p>Single probability of an event <InlineMath math={"P(x)"}></InlineMath> is also know as marginal probability.
            You can start combining probabilities and this is called <strong>joint probabilities</strong> when two or
            more events occur simultaneously. For example
            lets say we want to see the probability of rolling a 2 and flipping a tail. These are two separate
            probabilities of two separate events but if we want to find the probability of both events happening
            together then this is joint probability. <strong>Joint probability</strong> can be considered like
            a <strong>AND</strong> operator.</p>

        <p>Assuming both events are independent which they are in this case the probability of them both occurring is
            simply multiplying the probabilities together. </p>

        <h5>Product Rule</h5>

        <BlockMath math="P(A and B) = P(A) \times P(B)"/>

        <p>Flipping a tails.</p>
        <BlockMath math="P(tails) = \frac{1}{2}"/>

        <p>Rolling a two.</p>
        <BlockMath math="P(2) = \frac{1}{6}"/>

        <BlockMath math="P(tails AND 2) = \frac{1}{2} \times \frac{1}{6} = \frac{1}{12}"/>

        <h4>Union Probability</h4>

        <p>When we need to know the probability of even A or B this is called union probability and uses OR.</p>

        <h5>Mutually Exclusive Events</h5>

        <p>Mutually exclusive events are ones that occur simultaneously. For example rolling one die you can only get one outcome.</p>

    </div>

);

export default MathPreliminaries;
