import React from 'react';
import Latex from 'react-latex';
import {InlineMath} from 'react-katex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';


const BiteSizeMath = () => (


    <div>
        <h2>BiteSize Math</h2>

        <p>Welcome to the very beginning of our journey through mathematics, this first section of Math Fundamentals
            focuses on High School level maths with some help from the BBC Bitesize page. This section will be minimal
            and offer many resources to the reader to take each topic further. As part of this work many of the
            functions have been written to be available in Clojure see the <a
                href="https://github.com/perkss/basic-maths">repository here</a>. Code samples will be added into the
            tutorial to give those comfortable with programming something to relate too. This may be skipped by those
            who are comfortable with the very basics of the topics below, but its always good to have a recap.</p>


        <h3>Multiples and Factors</h3>

        <p>Lets <a href="https://www.bbc.co.uk/education/guides/zpvgdxs/revision">begin</a> with multiples (A multiple
            of a number is any integer multiplied by the number and there are an infinite amount) and factors (A factor
            is an integer that will divide exactly into another number.) for code examples please see <a
                href="https://github.com/perkss/basic-maths/blob/master/maths-for-computer-science/src/maths_for_computer_science/factors.clj">here.</a> An
            example of a multiple is that 15 is a multiple of 5 because <Latex>$ 3 \times 5 = 15$. Listing multiples of
                $5$ gives $5, 10, 15, 20, 25$</Latex> and so on. An example, 8 is a factor of 24 because 8 will divide
            into 24 exactly 3 times with no remainder (Bitesize). Factor pairs are are two numbers that multiply
            together to make another number so for example the factor pairs of <Latex>$24$ are $(1,24), (2,12), (3,8),
                (4,6)$. The algorithm for this is to divide the number (eg $24$) by the smallest divisor so beginning
                with $1$ as $1$ is always a factor pair and then terminating when the next number to divide by is
                already shown in the list of pairs. In the case of $24$ the algorithm can safely terminate at $6$ due to
                the pair $(4,6)$.


            </Latex></p>

        <h4>Prime Numbers</h4>
        <p> A prime number has exactly two factors. A prime number can only be divided by <Latex>$1$</Latex> and itself.
            Hence three key facts can be drawn from this:
        </p>
        <ol className="text-list">
            <li><Latex>$1$ is not a prime number as it does not have two factors only one factor itself.</Latex></li>
            <li><Latex>$2$ is the only even prime number as all other even numbers have $2$ as a factor.</Latex></li>
            <li>There are a infinite number of prime numbers</li>
        </ol>

        <p>Prime numbers an example: Given <Latex>$33, 34, 35, 36, 37$</Latex> which numbers are prime? </p> <p>Well
        from the key facts we can ignore even numbers of <Latex>$34$ and $36$ straight away. Now to work out $33$ we can
            divide by numbers from $3$ to the $\sqrt 33$ as prime divisors will always be pairs. One member of the pair
            will be less than the square root and the other will be more thus adding an efficiency to the algorithm. So
            we can try $33\mod 3 = 0$ so here the first number tried is divisible so is modulo $0$ as $33/3 = 11$ so
            $33$ is not prime. Now lets try the same for $35$ so $35 \mod 3$ is $!=0$, now try $35\mod 4$ which is also
            $!= 0$, now we try $35 \mod 5=0$ which is as $35/5 = 7$ so $35$ is not prime. Finally we can run this
            algorithm over $37$ and see that no value when applying $37\mod 3$ ... $\sqrt 37$ so $37$ is prime.</Latex>
    </p><p>This function has been written in Clojure for example:</p>
        <p>

            <div className="code-block">
                <SyntaxHighlighter language='clojure' style={darcula}>(defn is-prime? [n]
                    (cond
                    (&lt; n 2) false
                    (= 2 n) true
                    :else
                    (not-any? #(zero? (mod n %)) (cons 2 (range 3 (inc (Math/sqrt n)) 2)))))</SyntaxHighlighter>
            </div>
        </p>
        <p>Further explanation of efficiencies. You are only required to test up to the square root of n as if n is not
            prime it can be factored by a * b and if a and b were greater than the square root of <Latex>$n$ then $a
                \times b$ would be
                greater than $n$</Latex>. Hence we only need to check factors that are less than or equal to the square
            root of n.</p>

        <p>Another interesting way to prove that a number is not prime is to show it in the difference of squares form.
            A question in Discrete Mathematics (Biggs) asks this and a great answer is written <a
                href={"https://www.quora.com/How-can-I-prove-that-2-66-1-is-not-a-prime-number-What-is-the-thought-process-or-rather-how-to-approach-a-problem-like-this-I-have-trouble-with-knowing-where-to-start-on-a-proof"}>here. </a>
            But basically if you can get the form <Latex>$(m+1)(m-1)$</Latex> you know a number is not prime
            unless <Latex>$(m-1) = 1$</Latex> as <Latex>$(m+1)$</Latex> can never equal 1 as m will always be greater
            than 0 as 0 is not a <a href={"http://curiouscheetah.com/BlogMath/is-zero-a-factor-of-zero/"}>factor</a>. In
            the example question having <i>m</i> as <InlineMath math="2^{33}"/> is not going to be zero so it is not prime!
            You maybe wondering about 1 being prime again well no as our definition says two factors for prime 1 and itself
            therefore 1 only has itself so it is <b>NOT PRIME.</b>
        </p>

        <p>

            Prime Factors are factors of a number that are also prime. The method is to look for two factors, check if
            they are prime if they are not break them down until they are. Then to get back to the original you multiply
            together all the prime factors. A nice reference is <a href={"https://study.com/academy/lesson/how-to-find-the-prime-factorization-of-a-number.html"}>here.</a>
        </p>

        <p>Highest common factor is a factor shared by two or more numbers for example 8 and 12 have the common factors
            of 1,2 and 4. The highest common factor here is 4. </p>
        <p>Lowest common multiple is a number that is shared multiple of two or more numbers. For example the lowest
            common multiple of 3 and 4 is 12.</p>

        <h3>Indices</h3>
        <p>The law of indices are important to know as a reference so please refer back to these when required: <a
            href="https://www.bbc.co.uk/education/guides/z826y4j/revision/5">Source</a>

        </p>


        <ul>


        </ul>


        <p><Latex></Latex></p>


        <h3>Algebra</h3>

        <h4>Expanding Brackets</h4>
        <p>When working with future maths expanding brackets on Algebra is key lets have a <a
            href="https://www.bbc.co.uk/education/guides/zcqmsrd/revision/3">Bitesize</a> refresher. Expanding brackets
            directly means that we multiply each term in the expression by the term outside of it.

        </p>
        <p><h5>Examples</h5>
            <ul className="text-list">
                <li><Latex>$3(m + 7) = $$3 \times m + 3 \times 7 $$= 3m + 21$</Latex></li>
                <li><Latex>$k(k - 2) = $$k \times k - 2 \times k $$= k^2 - 2k$</Latex></li>
                <li><Latex>$3(m + 7) = $$3 \times m + 3 \times 7 $$= 3m + 21$.</Latex></li>

            </ul>

        </p>

        <p>When expanding out brackets with powers we must remember the Laws of Indices noted above. For example to
            expand <Latex>$5p^3q(4pq - 2p^5q^2 + 3p)$ we need to do the following steps:</Latex></p>
        <ol className="text-list">
            <li><Latex>$5p^3q \times 4pq =$$ 20p^4q^2$</Latex></li>
            <li><Latex>$5p^3q \times - 2p^5q^2 =$$ - 10p^8q^3$</Latex></li>
            <li><Latex>$5p^3q \times 3p =$$ 15p^4q$</Latex></li>
            <li><Latex>$5p^3q(4pq - 2p^5q^2 + 3p) =$$ 20p^4q^2 - 10p^8q^3 + 15p^4q$</Latex></li>

        </ol>

        <p>Expanding and then simplifying is another key skill required remember the rules of BIDMAS for this. <Latex>$6g
            + 2g(3g + 7) = $$6g + 2g\times 3g + 2g\times 7 = $$6g + 6g^2 + 14g$</Latex>. Here you multiply the bracket
            equation <Latex>$(3g+7)\times 2g$</Latex> following the rules of BIDMAS. Then you simplify it resulting
            in <Latex>$6g^2 + 20g$</Latex>. </p>

        <h4>Expanding Double Brackets</h4>
        <p>To expand double brackets each term needs to be multipled together so the first term in the first bracket
            needs to be multiplied by the first and second term in the second bracket. And then the second term in the
            first bracket needs to be multiplied by the first and second term in the second bracket also. An
            example <Latex>expand the bracket $(2m - 3)(m + 1)$</Latex>: </p>


        <ol className="text-list">
            <li><Latex>$2m\times m =$$ 2m^2$</Latex></li>
            <li><Latex>$2m\times 1 =$$ 2m$</Latex></li>
            <li><Latex>$(-3)\times m =$$ -3m$</Latex></li>
            <li><Latex>$(-3)\times 1 =$$ -3$</Latex></li>


        </ol>

        <p>Resulting in <Latex>$2m^2 + 2m - 3m - 3$</Latex> which can be simplified down to <Latex>$2m^2 - m -
            3$</Latex>.</p>

        <p>This process can be applied to any number of brackets that need expanding. Also if you see something to the
            power of as brackets such as <Latex>$(2n+1)^2$</Latex> then it is the same as <Latex>$(2n+1)(2n+1)$ which
                can be expanded doing the same as above to $4n^2 + 2n + 2n + 1$ $= 4n^2 + 4n + 1$</Latex>. Remember this
            part for Math prerequisites.</p>
    </div>


);

export default BiteSizeMath
