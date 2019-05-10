import React from 'react';
import Latex from 'react-latex';

const MathPreliminaries = () => (


    <div>
        <h2>The Art of Computer Programming: Math Preliminaries</h2>

        <p>Welcome to the section on one of the most important texts in the computer science world The Art of Computer
            Programming (Knuth). This section will coer the mathematical preliminaries section of the book from the
            first chapter. The Concrete Mathematics book we also study in the next section has taken the preliminaries
            even further. So if this is tricky for you please read Concrete Mathematics first. </p>

        <h3>Mathematical Induction</h3>

        <p>The book starts with a proof using Mathematical Induction. (A initially very scary concept, but please think
            like a mathematician not an engineer). The steps for mathematical induction are: </p>
        <ol className="text-list">
            <li>Give a proof that <Latex>$P(1)$</Latex> is true. Simply verify that the method works for the
                number <Latex>$1$</Latex>.
            </li>
            <li>Assume that the method works for an arbitrary number, <Latex>$n$ or sometimes $k$ is used but it means
                the same</Latex>.
            </li>
            <li>Give a proof that “if all of <Latex>$P(1), P (2), ..., P (n)$</Latex> are true, then <Latex>$P(n +
                1)$</Latex> is also true”; this proof should be valid for any positive integer <Latex>$n$. Simply prove
                that if the method works for an arbitrary number $k$, then it work for the number $k+1$</Latex>, too.
            </li>
            <li>After the 3 steps were completed, then the formula works for any number.</li>
        </ol>

        <p>Mathematical induction is used as a conclusive proof for an infinite number of statements one for
            each <Latex>$n$</Latex>. The term induction is used as one must somehow define what is to be proved before
            one can apply the technique of mathematical induction.</p>
        <h4>So Called Simple Example</h4>
        <p>Many books make this seem so easy and skip out a lot of steps so we will try cover this as they say simple,
            but as we say not so simple example. The example is that the sums of odd numbers is equal to the amount of
            odd numbers in the sum to the power or 2 for example.</p> <p><Latex>$1=1^2$$, 1+3=2^2$$, 1+3+5=3^2 . .
        .$</Latex></p>
        <p>This can be formulated as: <Latex>$1 + 3 + 5 . . . + $$(2n - 1) = n^2$.</Latex></p><p>Now lets do the fun
        part that looks scary but is actually simple when you understand step 2 and remember this is the sum to prove
        this by mathematical induction.</p>


        <strong>Step 1:</strong> Firstly we need to prove that the equation is valid when <Latex>$n = 1$. So we go ahead
        and substitute $n$ for $1$. When $n = 1$, instead of $(2n-1)$ we have $(2(1) - 1) = 1$, so the statement holds
        for $n = 1$ as $2 \times 1 = 2$ and then $2 - 1 = 1$.</Latex>

        <p></p>


        <strong> Step 2:</strong><Latex> We then need to assume that the equation is true for $n$.</Latex> (This is the
        part that always tripped me up before as we make the assumption that the proposed equation is true.)<br/>

        <strong>Assume: </strong> <Latex> $1 + 3 + 5 + ... + $$(2n - 1) = n^2$</Latex> <p></p>

        <strong>Step 3: </strong> <Latex>And then prove that the equation is true for $n + 1$. So we substitue $n$ on
        both sides with $n + 1$ giving the below. We are now working on the next in the sequence so the original left
        side sequence is kept in full including $(2n - 1)$ which is omitted in many texts which I find
        confusing.</Latex>
        <p></p>
        <strong> Prove: </strong> <br/><Latex> $1 + 3 + 5 +...+ $$(2(n + 1) - 1) = (n + 1)^2$</Latex>
        <p>So lets now prove this by working on simplifying the left hand side only to match the right hand side to see
            if the proof is true for <Latex>$n + 1$</Latex> values.</p>
        <br/>
        <strong>Proof: </strong><br/> <Latex> $1 + 3 + 5 +... + $$(2(n + 1) - 1)$</Latex>(The left side from
        above) <br/><br/>
        <Latex> $= 1 + 3 + 5 + ... + (2n - 1) + (2n + 2 - 1)$</Latex> (simplify we can see here the <Latex>$(2n -
        1)$</Latex> has returned as this is expected as we are working on the next in the sequence <Latex>$n +
        1$</Latex> so the original remains.)<br/><br/>
        <Latex> $= n^2 + (2n + 2 - 1)$</Latex> (by assumption Step 2 we can replace the left side of the equation
        with <Latex>$n^2$</Latex>)<br/><br/>
        <Latex> $= n^2 + 2n + 1$</Latex>(simplify) <br/><br/>
        <Latex> $= (n + 1)^2$</Latex>(See math prerequisites we did this example of simplification from the line
        above.) <br/><br/>

        Brilliant we have simplified the left side to match the right side, by induction, for every positive
        integer <Latex>$n,
        1 + 3 + 5 + ... + (2n - 1) = n^2$</Latex>. This is also proved visually using the square table in the book so
        please check that out. Some pointers it is the whole numer of squares up to the number so <Latex>$3$ is four
        squares as its the second step so $2 \times 2 - 1 = 3.$ Then you need to add the extra square from $1$ so that
        is $4$ which is $n^2$ so $2^2 = 4$ is equal to the added number of squares from the bottom left corner of
        $4$.</Latex>


        <p>
        </p>

        <h4>Fiboncacci Example</h4>


    </div>

);

export default MathPreliminaries;
