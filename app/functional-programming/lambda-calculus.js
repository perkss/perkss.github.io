import React from 'react';
import {BlockMath, InlineMath} from 'react-katex';

const LambdaCalculus = () => (

    <div>

        <h2>Lambda Calculus</h2>

        <p>Functional programming has many of its roots from Lambda Calculus <InlineMath math="\lambda"></InlineMath>.
            Therefore its good to have a grasp of Lambda Calculus originall defined by Alonzo Church around 1930. It is
            a formal system to describe the most basic ways that operators or functions can be combined to form other
            operators (Hindley et al, 2008). </p>

        <BlockMath math="\lambda"></BlockMath>


        <p>Lambda Calculus</p>

    </div>


);

export default LambdaCalculus;
