import React from 'react';
import Latex from 'react-latex';
import {BlockMath, InlineMath} from 'react-katex';

const FinanceMathematics = () => (


    <div>
        <h2>Finance Mathematics</h2>

        <h2>Computational Thinking</h2>

        <h3>Introduction</h3>

        <p>Declarative knowledge is composed of a statement of facts. Imperative knowledge is the how to knowledge that
            shares recipes for deducing information like algorithms. To create these algorithms for a computer we need a
            programming language. Alan Turing described a hypothetical computing device in 1936 stating the machine had
            unbounded memory in the form of tape on which one could write zeroes and ones with some primitive read, move
            and write instructions for the tape. The Church-Turing thesis states if a function is computable a Turing
            Machine can run it. Not all problems have a computational solution and the halting problem states it is
            undecidable the problem is whether an arbitrary program will will finish running or continue to run
            forever.</p>

        <p>Turing completeness is when a programming language can be used to simulate a Turing Machine.</p>


        <h3>Stochastic Programs</h3>

        <p>A stochastic process is when the next state depends on previous states and a random element. In a stochastic
            process two events are <strong>independent</strong> if the outcome of one event has no influence on the
            other event. Often a simulation model is used to estimate a unkown quantity making use of inferential
            statistics (random sample draws same properties as the population from which it is drawn). </p>

        <p>Lets now take flipping a coin as a example we know that the average flip will be 0.5 as it is 1/2 as we have
            two choices head or tail. The <strong>Law of Large numbers</strong> states that with repeated experiments
            that are fair and independent the closer we get to infinity number of tries the average result will tend
            toward the expected result in this case 0.5.</p>

        <p><strong>The gamblers fallacy</strong> and the law of large numbers does not imply this, is that if we see a
            sequence that deviates from expected behaviour then it will event itself out in the future runs. For example
            if we do 10 coin tosses and have 5 heads then it will be followed by 5 tails. This is the gamblers fallacy
            and the law of large numbers does not imply this. </p>

        <p>Variance is how much spread there is in the possible different outcomes. The <strong>Standard
            Deviation</strong> can tell us the fraction of values that are close to the mean. If many values are close
            to the mean then the standard deviation is small and the opposite for large is the values all match the mean
            then the standard deviation is zero. The standard deviation should always be viewed in context of the mean
            if the mean is 100000 and the standard deviation is 100 then this is a small dispersion result, but if the
            mean is 100 and the standard deviation is 100 then this dispersion is large. <strong>The coefficient of
                variation</strong> is the standard deviation divided by the mean. This is useful in comparing results
            with high variability and generally if the coefficient of variation is less than one then the results are
            considered low-variance.</p>

        <h4>Distributions</h4>

        <p>Data can be spread out (distributed) in different ways it can be more to the left, more to the right or
            completely jumbled up, or it can look like a bell shape.</p>

        <h5>Normal Distributions</h5>
        <p>A <strong>histogram</strong> is used to plot the distributions of values in a set of data. The data is first
            sorted and then divided into a set of bins. <strong>Normal Distributions</strong> peak at the mean and fall
            off symmetrically before and after the mean. This resembles the shape of a bell therefore is sometimes
            called a bell curve. Many naturally occurring distributions are normal distributions. These distributions
            can be used for create confidence levels. Confidence levels provide a range and a percentage that a unknown
            value will be in this range with this percentage of confidence. Think about polls you may indicate that a
            result will have a 60% of the votes with a +/- 5% range. This having a confidence interval of size 10 and a
            confidence level of 95%. This provides a indicator of the reliability of the estimate and almost always
            increasing the confidence level will increase the confidence interval. Error Bars are a good way to
            visualize confidence intervals.</p>

        <p>Empirical means relying on experience of past observations without regard to theory. The standard deviation
            is how spread out numbers are in a normal distribution generally the empirical rule is that we find 68% of
            values are in 1 std deviation. 95% of the data will fall in 2 std deviations. And almost all the data 99.7%
            will fall within 3 std deviations. <a
                href={"https://www.mathsisfun.com/data/standard-normal-distribution.html"}>[MathsIsFun]</a></p>

        <h5>Uniform Distributions</h5>

        <p>Uniform distributions are those that have equally likely outcomes such as rolling a dice a million times you
            would expect roughly an even number of 1 to 6 to be rolled. Uniform distributions are common in chance
            games, but in nature they are rarely seen. </p>

        <h5>Exponential Distributions</h5>

        <p>Exponential distributions occur quite commonly like normal distributions, they can be used to model inter
            arrival times such as cars joining a motorway or requests for a webpage. They are import as they have
            a <strong>memoryless property</strong> this means that the probability of one step does not depend on the
            result of a previous step. They can be thought of as the amount of time until some specific event occurs. A
            good reference is <a
                href={"https://courses.lumenlearning.com/introstats1/chapter/the-exponential-distribution/"}>Lumen
                Learning</a></p>

        <h5>Geometric Distribution</h5>

        <p>This is the discrete analog of the exponential distribution.This represents the number of failures (or
            successes) you get before a success (failure) for example a dodgy car wont always start first time.</p>


        <h5>Benfords Distribution</h5>
        <p>Benfords distribution is an interesting one for example if you had a large set of decimal integers you would
            expect that the first digit to appear for each would be about a ninth of the time due to 1-9. In reality
            this has not turned out to be true and Benford has a formula that is more accurate for naturally occurring
            data sets such as the starting digit of iPhone passcodes. Benfords law is that a set of decimal numbers
            follow it if the first digit <i>d</i> is consistent with <InlineMath
                math={"P(d) = {log_10} (1 + 1/d)"}></InlineMath></p>


        <h4>Random Walks</h4>

        <p>A random walk is a random process where it describes a path that consists of a succession of random steps in
            a mathematical space. They are widely used to model physical processes, biological processes and social
            processes like the stock market moving. They can be used for simulation of events and you can manipulate
            them with biases.</p>

        <h4>Monte Carlo Simulation</h4>


        <h4>Time Series Analysis</h4>

        <h5>Regression Analysis vs Time Series</h5>

        <p>Regression analysis will interpolate values as it is between two fixed points you have two independent
            observations such as ice cream sales vs temperature and you can plot between the two independent
            observations which become the independent and dependent (regressor variable). This will have a consistent
            error residual. For example ice cream sales vs temperature. Here you have a fixed range of temperature along
            the x-axis and you can have repeated temperatures.</p>

        <p>An example of time series is plotting time along the x-axis and what is my sale of ice cream for tomorrow,
            time does not
            repeat itself like temperature would. The data series has a dependent on time and when comparing two
            independent observations you need to consider the time aspect of the two points as well. For time series the
            prediction is extrapolated as you are predicting
            beyond the last point. When looking
            further forward the error value will be propagated for each data point in the future from the previous
            prediction. Creating larger error residuals further in the future.</p>

        <h5>Stationarity</h5>

        <h5>Strict Stationarity</h5>

        <h5>Covariance (Weak) Stationarity</h5>

        <h5>Wold Representation Theorem</h5>

        <h5>White Noise</h5>

        <h5>Auto Regressive (AR) Model</h5>

        <p>The current data point in time has an influence from previous data points T-1. These are called lags. An
            AR(1)
            model takes the previous lag only but you can take the previous 2 lags and this is an AR(2) model.</p>

        <h5>Moving Average (MA) Model</h5>

        <h5>ARMA Model</h5>

        <h5>ARIMA Model</h5>

        <h5>Model Selection</h5>

        {/*https://otexts.com/fpp2/autocorrelation.html*/}

    </div>


);

export default FinanceMathematics
