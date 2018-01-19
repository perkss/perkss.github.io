import React, { Component } from 'react';
import Latex from 'react-latex';

const ConcreteMathematics  = () => (


        <div>
        <h2>Concrete Mathematics</h2>

        <p>The introduction chapter of Concrete Mathematics is tough, I have found that with many Computer Science Textbooks, so its sometimes good to revisit the first chapter once you have tried the relevant chapters, as the first usually covers a snapshot from the rest of the book. </p>

        <h3>Recurrent Problems</h3>

        <h4>Tower of Hanoi Problem: The Maths Explained</h4>

    

        <p><Latex>The Tower of Hanoi problem is a bit of fun, but the recurrence math behind it is intimidating, I hope we can walk through this and manage to get you to understand it as I have managed too with a lot of effort!</Latex></p>


        <p>The Tower of Hanoi problem is defined as given three pegs with one peg that has eight disks on it stacked in decreasing order. Transfer the disks to another peg moving only one disk at a time and never having a larger disk on top of a smaller one. There are some great examples of this <a href="https://www.mathsisfun.com/games/towerofhanoi.html">here</a>. Concrete Mathematics suggests some key points of tackling a problem like this firstly generalise the problem so what would happen if there were <Latex>$n$ disks? Then we can scale down the problem and look at small cases first what if there were only one or two disks? Then NAME and CONQUER basically add some notation to the problem. Here they say $T_n$ is the minimum number of moves to transfer $n$ disks from one peg to another peg. For example $T_1 = 1$ is one disk as you are just moving one. Moving $T_2$ disks needs thinking about so we are moving to the $2$ disks to the same peg. Following the rules we will need to move the top disk which is the smallest to a peg, then the next disk to another peg as it cannot go on top of the smallest disk and then the smallest disk on top of the other disk hence this is $3$ moves, $T_2 = 3$. We also can say that $T_0 = 0$ as no disks are moved. Now we need to scale up what if we had a near infinite amount of disks. We have just shown optimally we can move two disks in $3$ moves. To move three optimally we follow the pattern moving the top two disks as mentioned above, to the middle peg and then move the third and then move the top two disks back on top of the third. Here we can say the movement of the smallest disk is $T_n-1$ so the case of two disks it is $2$ disks to move it is one move, in the case of three disks to move the two smallest are two moves and so on. We then move the very bottom disk which is one move $T_1 = 1$. Then we have to move the $T_n-1$ disks back on top.</Latex></p>

        <p>Producing the formula for disk movement as at most: </p>
        <p><Latex>(for $n > 0$) $2T_n-1 + 1$ moves. So moving all disks $T_n \leq 2T_n-1 + 1$</Latex></p>

        <p>Lets do the actual calculation for three disks. With this formula when having three disks <Latex>$n = 3$ so $T_2 = 3$ we multiply that by $2$ giving us $6$ and then plus the constant of moving the largest disk as $1$. Hence we expect to be able to move three disks in $7$ moves.</Latex></p>
        <p>Firstly we need to move the smallest disk so<Latex> $T_1 = 1$ we then need to move the next disk again $1$ move and then place the smallest disk back onto it so another $1$ move this is the $T_n-1$ part. We now need to move the bottom largest disk with the constant move of $1$ and then move the other two disks back so the smallest onto another peg $1$ move and then the next disk on top of the largest disk which takes $1$ move and then the smallest disk on top again so another $1$ move totalling $3$ again and this all totals $7$ moves so the formula is correct. </Latex></p>
    
        <h3>Sums</h3>

     <p><Latex>As part of this course polynomical knowledge is expected to be known which may not be the case if students did not have a great maths experience at earlier school years. They come to a specific case $n^2 = (2k)^2$ this is the same as $n^2 = 4k^2$. This is fairly trivial to understand as you take $(2k)\times(2k) = 2\times2$ and $k\times k = 4k^2$.</Latex></p>
        <h3>Integer Functions</h3>

     <p><Latex>As part of this course polynomical knowledge is expected to be known which may not be the case if students did not have a great maths experience at earlier school years. They come to a specific case $n^2 = (2k)^2$ this is the same as $n^2 = 4k^2$. This is fairly trivial to understand as you take $(2k)\times(2k) = 2\times2$ and $k\times k = 4k^2$.</Latex></p>
        <h3>Number Theory</h3>

     <p><Latex>As part of this course polynomical knowledge is expected to be known which may not be the case if students did not have a great maths experience at earlier school years. They come to a specific case $n^2 = (2k)^2$ this is the same as $n^2 = 4k^2$. This is fairly trivial to understand as you take $(2k)\times(2k) = 2\times2$ and $k\times k = 4k^2$.</Latex></p>
        <h3>Binomial Coefficients</h3>

     <p><Latex>As part of this course polynomical knowledge is expected to be known which may not be the case if students did not have a great maths experience at earlier school years. They come to a specific case $n^2 = (2k)^2$ this is the same as $n^2 = 4k^2$. This is fairly trivial to understand as you take $(2k)\times(2k) = 2\times2$ and $k\times k = 4k^2$.</Latex></p>
        <h3>Special Numbers</h3>

     <p><Latex>As part of this course polynomical knowledge is expected to be known which may not be the case if students did not have a great maths experience at earlier school years. They come to a specific case $n^2 = (2k)^2$ this is the same as $n^2 = 4k^2$. This is fairly trivial to understand as you take $(2k)\times(2k) = 2\times2$ and $k\times k = 4k^2$.</Latex></p>
        <h3>Generating Functions</h3>

  <p><Latex>As part of this course polynomical knowledge is expected to be known which may not be the case if students did not have a great maths experience at earlier school years. They come to a specific case $n^2 = (2k)^2$ this is the same as $n^2 = 4k^2$. This is fairly trivial to understand as you take $(2k)\times(2k) = 2\times2$ and $k\times k = 4k^2$.</Latex></p>

        <h3>Discrete Probability</h3>

     <h3>Asymptotics</h3>
    
    </div>

);

export default ConcreteMathematics
