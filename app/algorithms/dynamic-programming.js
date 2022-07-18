import React from 'react';
import BlogPage from "../blog-page";
import Latex from 'react-latex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {HashLink as Link} from 'react-router-hash-link';
import {BlockMath, InlineMath} from 'react-katex';

const algorithms = {
    title: 'Dynamic Programming',
    contents:
        '',
    text: [
        <div>

            <ul className="text-list">
                <li><Link to={"#DynamicProgramming"}>Dynamic Programming</Link></li>

            </ul>

            <h3 id={"DynamicProgramming"}>Dynamic Programming</h3>

            <p>Dynamic Programming is an optimization technique for solving overlapping sub problems. It requires the
                problem to be solved to have <strong>optimal substructure</strong> so final solution can be solved from
                optimal solutions of sub problems. The sub problems <strong>overlap</strong> and can be reused in the
                answer. It usually follows two approaches <strong>memoization</strong> top down cache filling where we
                cache and reuse previous results for example in a fibonacci solution.
                Or <strong>tabulation</strong> bottom up cache filling where we focus on filling the cache with results.
            </p>

            <p>Dynamic programming can be applied when these factors fall true, can the problem be divided into
                repetitive sub problems (notice repetitive) if so if we do a recursive solution we can memoize these
                problems.</p>

            <h4>Framework for Dynamic Programming</h4>

            <p>To solve a dynamic programming question we need to combine the following three items. This framework is
                suggested by <a
                    href={"https://leetcode.com/explore/learn/card/dynamic-programming/631/strategy-for-solving-dp-problems/4096/"}>Leetcode</a>.
            </p>

            <h5>A function or data structure that will compute the answer to each state in the problem</h5>

            <p>Typically a top down approach will solve the problem using recursion and a hash map whilst a bottom up
                approach will solve the problem with nested for loops and arrays.</p>

            <h5>A recurrence relation to transition between states</h5>

            <p>States in DP are a set of values that can describe the scenario of the problem. A recurrence relation
                takes
                the states and relates them to each other for a solution.</p>

            <h4>Base Cases</h4>

            <p>As with recursion we need to stop our function when it is complete. We need to apply some logical
                thinking
                and ask what states can be used to find the answer without DP.</p>

            <h4>Memoize Fibonacci Sequence</h4>

            <p>A classic coding example the Fibonacci sequence. A recursive solution to this can have dynamic
                programming optimisation applied. As fibonacci formula repeats the same calculation we can cache this
                result and reduce the workload from <i>O(2^n)</i> to <i>O(n)</i> incredible stuff right? Lets see the
                code.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`private Map<Integer, Integer> cache = new HashMap<Integer,Integer>();

public int fib(int n) {
    if(cache.containsKey(n)) {
        return cache.get(n);
    } else {
        // classic fib
        if(n < 2) {
            return n;
        } else {
            cache.put(n, fib(n-1) + fib(n-2));
            return cache.get(n);
        }
    }
}`}</SyntaxHighlighter>

            <h4>Minimum Cost of Climbing Stairs</h4>

            <p>A common dynamic programming question is <a
                href={"https://leetcode.com/problems/min-cost-climbing-stairs/"}>Minimum Cost of Climbing Stairs</a>. In
                this question the cost of each step is represented as an array. You can climb the stairs with either one
                or two steps.</p>

            <p>To recognise this is a dynamic programming question when you see the word minimum or maximum then you
                should note its a optimisation problem. Does it have overlapping sub problems. With dynamic programming
                you always want to have a working solution you can then continually optimise. Recursion will also be
                used which
                requires a base case and the recursive steps. A recurrence relation can give you the formula for the
                basis of a recursive solution.</p>

            <p>We want to define the minimum cost of getting to step n the end of the array. The cost to get to step n
                is cost of <i>n</i> and
                the minimum of step <i>n-1</i> and <i>n-2</i>. We take the minimum value of these two results. This
                repeats down as the min of <i>n-2</i> is the minimum of <i>n-3</i> and <i>n-4</i> added to the cost
                of <i>n-2</i>. And the min
                of <i>n-1</i> can be found by the minimum of <i>n-2</i> and <i>n-3</i> added to the cost of <i>n-1</i>.
                This is the recurrence relation of the relationship between the steps. This repeats until <i>n=0</i>.
                We can now see that we are repeating calculations, much like the fibonacci sequence. Therefore we have
                repeating sub problems that can be solved with dynamic programming.
            </p>

            <p>Now we need to turn this into a generic formula. This can be seen as where step is <i>i</i> <i>minCost(i)
                = cost[i] + minimum(minCost(i-1) + minCost(i-2))</i>. With a base case of checking for if the step
                is <i>i == 0 || i == 1</i> and just return that value.</p>

            <p>The basic solution below is not optimised and it has time complexity of <InlineMath
                math="O(2^n)"></InlineMath>. This is because we call
                the function twice we have a base of 2 for each item in the array. A space complexity
                of <InlineMath
                    math="O(n)"></InlineMath> as the call stack gets filled for a single branch first and then the
                second one.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int minCostClimbingStairs(int[] cost) {
        // start at the top step which has a cost of 0.
        int n = cost.length;
        return Math.min(minCost(cost, n-1), minCost(cost, n-2)); // + cost[n] which would be zero in this case the top step
    }
    
    public int minCost(int[] cost, int idx) {
        if(idx < 0) {
            return 0;
        }
        // otherwise we go down to -1
        // base case
        if(idx == 0 || idx == 1) {
            return cost[idx];
        }
        
        //formula is the cost of the current step and the minimum of the previous two steps
        return cost[idx] + Math.min(minCost(cost, idx-1), minCost(cost, idx-2));
    }`}</SyntaxHighlighter>

            <p>Our first optimisation can be to memoize our calls that are repeated for each step this is a <strong>top
                down</strong> dynamic programming approach. We can do the classic
                approach of adding it into a map and then getting that result if already calculated. In this case though
                we only need to remember the last two steps. This then takes the time complexity to <i>O(n)</i>. The
                space complexity does increase to <i>O(n)</i> as we store each step in the memoized cache. For
                interviews this approach is usually enough.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`// memoize the results
    private Map<Integer, Integer> stepToCost = new HashMap<>();
    
    public int minCostClimbingStairs(int[] cost) {
        // start at the top step so the next index in the array with a cost of 1.
        int n = cost.length;
        return Math.min(minCost(cost, n-1), minCost(cost, n-2)); // + cost[n] which would be zero in this case the top step
    }
    
    public int minCost(int[] cost, int idx) {
        if(idx < 0) {
            return 0;
        }
        // otherwise we go down to -1
        // base case
        if(idx == 0 || idx == 1) {
            return cost[idx];
        }
        
        if(stepToCost.containsKey(idx)) {
            return stepToCost.get(idx);
        }
        
        //formula is the cost of the current step and the minumum of the previous two steps
        int stepCost = cost[idx] + Math.min(minCost(cost, idx-1), minCost(cost, idx-2));
        stepToCost.put(idx, stepCost);
        
        return stepToCost.get(idx);
    }`}</SyntaxHighlighter>

            <p>To reduce our space complexity we can also look at the <strong>bottom up</strong> tabulation approach.
                This approach takes the opposite approach from top down and looks to see if we can build our cases from
                the bottom so the <i>n=0</i> and the <i>n=1</i> the bottom two steps. This then can give us the minimum
                value to the next step as we have a choice of taking one or two steps to get to the next step plus the
                cost of that next step. For example <i>minCost(2) = cost(2) + minCost(1) + minCost(2)</i>. The bottom up
                approach is usually iterative. In this code we start at the bottom so the first two steps have no
                calculation so we take the cost of them. Once higher than the first two steps we do the calculation and
                store in the result. At the final step we take the minimum of the previous two steps. As we can go from
                either of them. We still store the full set of steps in the cache which is <i>O(n)</i>.
            </p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int minCostBottomUp(int[] cost) {
        int n = cost.length;
        for(int i = 0; i<n; i++) {
            if(i<2) {
                // first two steps
                stepToCost.put(i, cost[i]);
            } else {
                // take the previously calculated data and store again with the cost of the current step
                stepToCost.put(i, cost[i] + Math.min(stepToCost.get(i-1), stepToCost.get(i-2)));
            }
        }
        
        // as we have the optio of two steps to get to the top take the min of the previous two
        return Math.min(stepToCost.get(n-1), stepToCost.get(n-2));
    }`}</SyntaxHighlighter>

            <p>Here we have applied the optimisation by only storing the previous two steps. Reducing our space
                complexity by <i>O(1)</i>. </p>
            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int minCostBottomUp(int[] cost) {
        int n = cost.length;
        int prevStep = cost[1];
        int prevStep2 = cost[0];
        for(int i = 2; i<n; i++) {
            // take the previously calculated data and store again with the cost of the current step
            int currentCost =  cost[i] + Math.min(prevStep, prevStep2);
            prevStep2 = prevStep; // update the cached steps to move to the next two
            prevStep = currentCost;
        }
        
        // as we have the option of two steps to get to the top take the min of the previous two
        return Math.min(prevStep, prevStep2);
    }`}</SyntaxHighlighter>

        </div>
    ]
}

const DynamicProgramming = () => {

    return (
        <BlogPage
            title={algorithms.title}
            contents={algorithms.contents}
            text={algorithms.text}
        />
    );


};

export default DynamicProgramming;