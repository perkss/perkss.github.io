import React, { Component } from 'react';
import Latex from 'react-latex';

const MathPrerequisites = () => (


        <div>
  <h2>Math Prerequisites</h2>
            <p>I was looking through the course notes for <a href="http://web.stanford.edu/class/cs103/">CS103</a> Mathematical Foundations of Computing and found a greate slide on <a href="http://web.stanford.edu/class/cs103/handouts/020%20Mathematical%20Prerequisites.pdf">mathematical prerequisites</a> for the course. I felt straight away this was a great small sample of the required maths for any maths for computer science or algorithm course in a short form, I still recommend Concrete Mathematics and the Math Preliminaries section in Art of Computer Programming vol1 by Knuth to add a fuller picture. Coming from the UK GCSE Bitesize maths is also great for really basic recap of High School maths.</p>


        <h3>Multiplying Polynomials</h3>

            <p><Latex>As part of this course polynomical knowledge is expected to be known which may not be the case if students did not have a great maths experience at earlier school years. They come to a specific case $n^2 = (2k)^2$ this is the same as $n^2 = 4k^2$. This is fairly trivial to understand as you take $(2k)\times(2k) = 2\times2$ and $k\times k = 4k^2$.</Latex></p>

            <p><Latex>The next example is a little less trivial if you do not know polynomial multiplication and simply says $n^2 = (2k + 1)^2$ which simplied is $n^2 = 4k^2 + 4k + 1$. What always trips me up here is the 4k. Lets walk though this example.</Latex></p>
            <p><Latex>$(2k+1)^2$ can be written as $(2k+1)(2k+1)$</Latex> so we take each part of multiply by the next section so: </p>

            <p><Latex>$2k \times 2k$ and $2k \times 1$ and then also $1 \times 2k$ and $1 \times 1$. This then equals $4k^2 + 2k + 2k + 1$ and is the same as $4k^2 + 4k + 1$.</Latex></p>

            <p><Latex>We can now clearly see how they have got $n^2 = 4k^2 + 4k + 1$ (hopefully). Please message me if not.</Latex></p><p> 
</p>
       
    <p>        <strong>Congratulations this is a great starting step to understanding any future courses in this area!!</strong> 
            </p>
    </div>

);

export default MathPrerequisites
