import React from 'react';
import BlogPage from "../blog-page";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {Link} from "react-router-dom";

const algorithms = {
    title: 'Combinatorial',
    contents:
        '',
    text: [
        <div>

            <ul className="text-list">
                <li><Link to={"#BackTracking"}>Backtracking</Link></li>
            </ul>

            <h3 id={"BackTracking"}>Backtracking</h3>

            <p>Backtracking is a technique for solving problems where it trys to build the correct solution
                incrementally and if it fails to meet the constraints at any time it backtracks and trys another
                route. It can be thought of as trying every single possible option that the solution could be then if it
                fails it backtracks to another option and attempts that until the solution is found all or options are
                exhausted.</p>

            <p>Backtracking provides a template for solving these problems which can be adapted to work for different
                issues. We will run through this solution template and then apply it to some LeetCode examples.</p>

            <h4>When to use Backtracking</h4>

            <p>Backtracking is generally used for <strong>Constraint Satisfaction Problems</strong> which means a
                problem defined as a set of objects whose state must satisfy a constraint.</p>

            <p><strong>Decision Problems</strong> where we search for a feasible solution.</p>
            <p><strong>Optimization Problems</strong> where we search for the best solution.</p>
            <p><strong>Enumeration Problems</strong> find all possible solutions.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{``}</SyntaxHighlighter>

        </div>
    ]
}

const Combinatorial = () => {

    return (
        <BlogPage
            title={algorithms.title}
            contents={algorithms.contents}
            text={algorithms.text}
        />
    );


};

export default Combinatorial;