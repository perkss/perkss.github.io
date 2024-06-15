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
            <li><Link to="#probability">Probability Introduction</Link></li>
        </ul>

        <h3 id={"probability"}>Probability</h3>

    </div>

);

export default MathPreliminaries;
