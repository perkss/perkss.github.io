import React from 'react';
import Latex from 'react-latex';
import { BlockMath, InlineMath } from 'react-katex';

const FinanceMathematics = () => (


    <div>
        <h2>Finance Mathematics</h2>

        <h3>Calculus 1</h3>

        <h4>Limits</h4>
        <p>The limit of a function is a value of the function as the input (or index) gets closer and closer or approaches some number. It has to do this from both sides. When a limit does not approach the same value from both sides we say that the limit does not exist. </p>


        <h3>Linear Algebra</h3>

<p><InlineMath math={"\reals ^2"}></InlineMath> the two dimensional real coordinate space is just the coordinate space that is found in the coordinates plane this is one representation of it. It is all possible real value two tuples (which is a ordered list of two numbers). Vectors are object in mathematics that have both magnitude and direction. Vectors can be added by simply adding each part of one vector to the other and this will create a new vector. The origin is not relevant when plotting vectors its tail can start at (0,0) but it can be plotted anyway. The magnitude and direction is the key part. The sum of two vectors shifts the original vectors is the same as plotting where the tail of vector A is used to start Vector B, it will align with the resulting vector C.</p>

<p>Vectors can also be mulitplied by a scalar a single number. You simply create a new vector with the values from the old multiplied by the scalar. The direction of the original vector remains but the magnitude increases. A scalar can be a negative number and this will reduce the magnitude.</p>

        <h2>Computational Thinking</h2>

        <h3>Introduction</h3>

        <p>Declarative knowledge is composed of a statement of facts. Imperative knowledge is the how to knowledge that shares recipes for deducing information like algorithms. To create these algorithms for a computer we need a programming language. Alan Turing described a hypotethetical computing device in 1936 stating the machine had unbounded memory in the form of tape on which one could write zeroes and ones with some primitive read, move and write instructions for the tape. The Church-Turing thesis states if a function is computable a Turing Machine can run it. Not all problems have a computational solution and the halting problem states it is undecidable the problem is whether an arbitrary program will will finish running or continue to run forever.</p>

        <p>Turing completeness is when a programming language can be used to simulate a Turing Machine.</p>


        <h3>Stochastic Programs</h3>

        <p>A stochastic process is when the next state depends on previous states and a random element. In a stochastic process two events are <strong>independent</strong> if the outcome of one event has no influence on the other event. Often a simulation model is used to estimate a unkown quantity making use of inferential statistics (random sample draws same properties as the population from which it is drawn). </p>

        <p>Lets now take flipping a coin as a example we know that the average flip will be 0.5 as it is 1/2 as we have two choices head or tail. The <strong>Law of Large numbers</strong> states that with repeated experiments that are fair and independent the closer we get to infinity number of tries the average result will tend toward the expected result in this case 0.5.</p>

        <p><strong>The gamblers fallacy</strong> and the law of large numbers does not imply this, is that if we see a sequence that deviates from expected behaviour then it will event itself out in the future runs. For example if we do 10 coin tosses and have 5 heads then it will be followed by 5 tails. This is the gamblers fallacy and the law of large numbers does not imply this. </p>

        <p>Variance is how much spread there is in the possible different outcomes. The <strong>Standard Deviation</strong> can tell us the fraction of values that are close to the mean. If many values are close to the mean then the standard deviation is small and the opposite for large is the values all match the mean then the standard deviation is zero. The standard deviation should always be viewed in context of the mean if the mean is 100000 and the standard deviation is 100 then this is a small dispersion result, but if the mean is 100 and the standard deviation is 100 then this dispersion is large. <strong>The coefficient of variation</strong> is the standard deviation divided by the mean. This is useful in comparing results with high variability and generally if the coefficient of variation is less than one then the results are considered low-variance.</p>

        <h4>Distributions</h4>

        <p>Data can be spread out (distributed) in different ways it can be more to the left, more to the right or completely jumbled up, or it can look like a bell shape.</p>

        <h5>Normal Distributions</h5>
        <p>A <strong>histogram</strong> is used to plot the distributions of values in a set of data. The data is first sorted and then divided into a set of bins. <strong>Normal Distributions</strong> peak at the mean and fall off symmetrically before and after the mean. This resembles the shape of a bell therefore is sometimes called a bell curve. Many naturally occurring distributuons are normal distributions. These distributions can be used for create confidence levels. Confidence levels provide a range and a percentage that a unknown value will be in this range with this percentage of confidence. Think about polls you may indicate that a result will have a 60% of the votes with a +/- 5% range. This having a confidence interval of size 10 and a confidence level of 95%. This provides a indicator of the reliability of the estimate and almost always increasing the confidence level will increase the confidence interval. Error Bars are a good way to visualize confidence intervals.</p>

        <p>Empirical means relying on experience of past observations without regard to theory. The standard deviation is how spread out numbers are in a normal distribution geenrally the empirical rule is that we find 68% of values are in 1 std deviation. 95% of the data will fall in 2 std deviations. And almost all the data 99.7% will fall within 3 std deviations. <a href={"https://www.mathsisfun.com/data/standard-normal-distribution.html"}>[MathsIsFun]</a></p>

        <h5>Uniform Distributions</h5>

        <p>Uniform distributions are those that have equally likely outcomes such as rolling a dice a million times you would expect roughly an even number of 1 to 6 to be rolled. Uniform distributions are common in chance games, but in nature they are rarely seen. </p>

        <h5>Exponential Distributions</h5>

        <p>Exponential distributions occur quite commonly like normal distributions, they can be used to model inter arrival times such as cars joining a motorway or requests for a webpage. They are import as they have a <strong>memoryless property</strong> this means that the probability of one step does not depend on the result of a previous step. They can be thought of as the amount of time until some specific event occurs. A good reference is <a href={"https://courses.lumenlearning.com/introstats1/chapter/the-exponential-distribution/"}>Lumen Learning</a></p>

        <h5>Geometric Distribution</h5>

        <p>This is the discrete analog of the exponential distribution.This represents the number of failures (or successes) you get before a success (failure) for example a dodgy car wont always start first time.</p>


        <h5>Benfords Distribution</h5>
        <p>Benfords distribution is an interesting one for example if you had a large set of decimal integers you would expect that the first digit to appear for each would be about a ninth of the time due to 1-9. In reality this has not turned out to be true and Benford has a formula that is more accurate for naturally ocurring data sets such as the starting digit of iPhone passcodes. Benfords law is that a set of decimal numbers follow it if the first digit <i>d</i> is consistent with <InlineMath math={"P(d) = {log_10} (1 + 1/d)"}></InlineMath> </p>


  <h4>Random Walks</h4>

  <p>A random walk is a random process where it describes a path that consists of a sucession of random steps in a mathematical space. They are widely used to model physical processes, biological processes and social processes like the stock market moving. They can be used for simulation of events and you can manipulate them with biases.</p>

  <h4>Monte Carlo Simulation</h4>

    </div>



);

export default FinanceMathematics
