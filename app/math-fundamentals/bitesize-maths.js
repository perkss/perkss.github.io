import React, { Component } from 'react';
import Latex from 'react-latex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, docco } from 'react-syntax-highlighter/styles/hljs';

const BiteSizeMath = () => (


        <div>
  <h2>BiteSize Math</h2>

        <p>Welcome to the very beginning of our journey through mathematics, this first section of Math Fundamentals focuses on High School level maths with some help from the BBC Bitesize page. This section will be minimal and offer many resources to the reader to take each topic further. As part of this work many of the functions have been written to be available in Clojure see the <a href="https://github.com/perkss/basic-maths">repository here</a>. Code samples will be added into the tutorial to give those comfortable with programming something to relate too. This may be skipped by those who are comfortable with the very basics of the topics below, but its always good to have a recap.</p>
    

        <h3>Multiples and Factors</h3>

        <p>Lets <a href="https://www.bbc.co.uk/education/guides/zpvgdxs/revision">begin</a> with multiples (A multiple of a number is any integer multiplied by the number) and factors (A factor is an integer that will divide exactly into another number.) for code examples please see <a href="https://github.com/perkss/basic-maths/blob/master/maths-for-computer-science/src/maths_for_computer_science/factors.clj">here.</a> Factor pairs are are two numbers that multiply together to make another number so for example the factor pairs of <Latex>$24$ are $(1,24), (2,12), (3,8), (4,6)$. The algorithm for this is to divide the number (eg $24$) by the smallest divisor so beginning with $1$ as $1$ is always a factor pair and then terminating when the next number to divide by is already shown in the list of pairs. In the case of $24$ the algorithm can safely terminate at $6$ due to the pair $(4,6)$.

     

       </Latex></p>

        <h3>Prime Numbers</h3>
        <p> A prime number has exactly two factors. A prime number can only be divided by <Latex>$1$</Latex> and itself. Hence three key facts can be drawn from this:
    </p>
<ol>
<li><Latex>$1$ is not a prime number as it does not have two factors only one factor itself.</Latex></li>
        <li><Latex>$2$ is the only even prime number as all other even numbers have $2$ as a factor.</Latex></li>
        <li>There are a infinite number of prime numbers</li>
    
        </ol>

        <p>Prime numbers an example given <Latex>$33, 34, 35, 36, 37$ which numbers are prime? Well from the key facts we can ignore even numbers of $34$ and $36$ straight away. Now to work out $33$ we can divide by numbers from $3$ to the $\sqrt 33$ as prime divisors will always be pairs. One member of the pair will be less than the square root and the other will be more adding an efficiency. So we can try $33 \mod 3 = 0$ so here the first number tried is divisble so is modulo $0$ as $33/3 = 11$ so $33$ is not prime. Now lets try the same for $35$ so $35 \mod 3$ is $!=0$, now try $35 \mod 4$ which is also $!= 0$, now we try $35 \mod 5=0$ which is as $7 \times 5 = 35$ so $35$ is not prime. Finally we can run this algorithm over $37$ and see that no value when applying $37 \mod 3$ ... $\sqrt 37$ so $37$ is prime.</Latex> This function has been written in Clojure for example:  

    <SyntaxHighlighter language='clojure' style={darcula}>(defn is-prime? [n]
  (cond 
   (&lt; n 2) false
   (= 2 n) true
   :else
   (not-any? #(zero? (mod n %)) (cons 2 (range 3 (inc (Math/sqrt n)) 2)))))</SyntaxHighlighter> </p>
  
    

        <h3>Indices</h3>

     <p><Latex></Latex></p>

        <h3>Standard Form</h3>
         <p><Latex></Latex></p>

        <h3>Algebra</h3>
         <p><Latex></Latex></p>
    
    </div>

);

export default BiteSizeMath
