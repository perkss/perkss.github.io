import React from "react";
import BlogPage from '../../app/blog-page.js';
import Latex from 'react-latex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {HashLink as Link} from 'react-router-hash-link';
import {BlockMath, InlineMath} from 'react-katex';

const algorithms = {
    title: 'Algorithms',
    contents:
        '',
    text: [
        <div>

            <h3>Topics</h3>
            <ul className="text-list">
                <li><Link to={"#Introduction"}>Introduction</Link></li>
                <li><Link to={"#Models"}>Models of Computation</Link></li>
                <li><Link to={"#Asymptotic"}>Asymptotic Notation</Link></li>
                <li><Link to={"#Logical"}>Logical Problems</Link></li>

                <li><Link to={"#Scheduling"}>Scheduling</Link></li>
            </ul>

            <h3 id={"Introduction"}>Introduction</h3>

            <p>This section owes massive thanks to <a
                href={"https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/functions-in-asymptotic-notation"}>Khan
                Academy</a> and <a
                href={"https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/index.htm"}>MIT
                Introduction to Algorithms</a>. </p>

            <h4>Useful Links</h4>

            <ul className="text-list">
                <li><a href={"https://www.bigocheatsheet.com/"}>Big O CheatSheet</a></li>
            </ul>

            <h4>Algorithmic Thinking</h4>
            <h5>Finding a peak in a list of numbers</h5>
            <p>Lets start with our first and very simple algorithm that finds peaks if one exists in a list of numbers.
                To define this in mathematical form lets have a list of items <Latex>$[a b c d e f g h
                    i]$</Latex> position 2 in the list
                of items is only a peak if <Latex>$b \geq a$</Latex> and <Latex>$b \geq c$</Latex>.
                Position 9 is a peak if <Latex>$i \geq h$</Latex>. In plain english basically if either
                side of a point are smaller or equal too the point it is a peak. Note the equal too as we can still find
                a peak if all items are equal. Potentially all values in a list maybe equal so they are all peaks.
                A simple algorithm to find this would be to start at the beginning and check each item
                in the list. The problem with this approach is that it is slow. We have to check through each item in a
                list and for large lists this is very slow. It would be linear time <i>O(n)</i>. Alternatively the
                course by MIT states an approach using a divide and conquer algorithm similar to Binary Search. Where it
                takes the middle point of the list checks the left side if it is smaller
                than left find mid point of left list, else check if smaller than right side check right side list for a
                peak, else it is a peak. This algorithm will not necessarily find the max peak but will find a peak in
                the list.
                Lets write some Java code to see this.</p>
            <p>
                <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true} wrapLines={true}>{`public static int findPeak(int[] data) {

        if(data == null || data.length == 0) {
            throw new IllegalArgumentException("Invalid data");
        }

        if(data.length == 1) {
            return data[0];
        }

        // Whole time running is O(1) + O(1) + T(N/2)
        // T(N) = O(1)
        int midpoint = data.length/2;

        // T(N) = O(1) 
        if(data[midpoint] < data[midpoint-1]) {

            int[] leftSide = new int[midpoint-1];
            System.arraycopy(data, 0,leftSide, 0, midpoint-1);
            // T(N/2)
            return findPeak(leftSide);
        // T(N) = O(1) 
        } else if( data[midpoint] < data[midpoint + 1]){

            int[] rightSide = new int[data.length - midpoint+1];
            System.arraycopy(data, midpoint+1,rightSide, 0, data.length - midpoint+1);
             // T(N/2)
            return findPeak(rightSide);
        } else {
            // T(N) = O(1) 
            return data[midpoint];
        }

}`}</SyntaxHighlighter>

                As Clojure is also awesome lets see it in a functional language style, you can see how much shorter it
                is granted we have not added the exception handling!
                <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn find-peak [data]
  (let [midpoint (Math/floor (/ (count data) 2))]
    (if (= 1 (count data)) (nth data 0)
        (cond
          (< (nth data midpoint) (nth data (- midpoint 1)))
          (recur
           (nth  (split-at (-  midpoint 1) data) 0))
          (<  (nth data midpoint) (nth data (+ midpoint 1)))
          (recur
           (nth (split-at (+ midpoint 1) data) 1))
          :else (nth data midpoint)))))\n\n(find-peak [6,7,4,3,2,1,4,5])\n;; => 7`}</SyntaxHighlighter>


            </p>
            <p>The time complexity of this algorithm has the constant time for the finding the midpoint then a
                constant time check for the comparison, and finally running it again on half the list so same problem
                but half input size <InlineMath
                    math="\Theta(1) + \Theta(\frac{n}{2})"></InlineMath>. Now we need to expand this. We replace the
                constant with <i>c</i> and run through the algorithm splitting the list by half each time.

                <p>Firstly lets check the case for a single element where n = 1.</p>

                <p>Base case</p>
                <BlockMath math="T(1) = O(1)"/>

                <p>Now lets work it out for any number of items n defining our recurrence relation.</p>
                <BlockMath math="T(n) = C + T(\frac{n}{2})"/>
                <BlockMath math="     = C + C + T(\frac{n}{4})"/>
                <BlockMath math="     = C + C + C + T(\frac{n}{8})"/>
                <BlockMath math="     = C + C + C + C + T(\frac{n}{16})"/>

                <p>We expand as many times as we need until we see the pattern which we can work out as</p>
                <BlockMath math="     = C \times i + T(\frac{n}{2^{i}})"/>

                <p>Now we want be able to write out the expanded form as the constant form plugging it in.
                    With <i>i</i> such
                    that <InlineMath
                        math="T(\frac{n}{2^i}) = T(1)"></InlineMath></p>
                <p>We want to replace the left side with the right side which are equal</p>
                <BlockMath math="\frac{n}{2^i} = 1"/>
                <p>Using logarithm law we want to get <i>i = </i> by multiplying both sides by <InlineMath
                    math="2^i"></InlineMath> giving us <InlineMath
                    math="n = 2^i * 1"></InlineMath> which is the same as <InlineMath
                    math="n = 2^i"></InlineMath>. We then apply the log law for converting the power to a log form to
                    give.</p>
                <BlockMath math="i = log n"/>

                <p>Now we need to plug it back into our expanded term formula we found previously to find our
                    function.</p>
                <BlockMath math="     = C \times i + T(\frac{n}{2^{i}})"/>
                <p>We worked out the value for <i>i</i> when <i>n = 1</i>so we can replace when we have the T(1) as i =
                    n so its n/n in this case 1/1.</p>
                <BlockMath math="     = C \times \log n + T(1)"/>
                <p>We plugged it in now we replace T with Theta and replace constant with Theta forcing it to become
                    base case</p>
                <BlockMath math="     = \Theta(1) \times \log n + \Theta(1)"/>
                <p>We know that log dominates the constant so solved: <InlineMath
                    math="\Theta( log n)"></InlineMath></p>


                This approach is very similar to any divide and conquer algorithm we break the problem down and down
                again until size of the elements is 1 and get the base case. This is a constant
                time <Latex>$O(1)$</Latex> which is for the comparison checks looking at left comparison and right
                comparison. We then gather back up the single elements that have been divided which was for
                example <Latex>$T(n) = T(n/2) + 1$</Latex> then <Latex>$T(n) = T(n/4) + 1$</Latex> this pattern
                continues which can be reverted from <Latex>$T(n/2^k) + 1$</Latex>to be <Latex>$O (\log 2
                    n)$</Latex>. Similar to this post <a
                    href="https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly/13093274#13093274">here</a>.
            </p>


            <h3 id={"Models"}>Models of Computation</h3>


            <h3 id={"Asymptotic"}>Asymptotic Notation</h3>

            <p>Firstly a great video on this stuff is here <a
                href={"https://www.youtube.com/watch?v=P7frcB_-g4w&t=585s"}>MIT Open Courseware</a>.</p>

            <p>When analysing algorithms we need to think of <strong>two time</strong> aspects deciding how long it
                takes on size of input and then and then how fast the algorithm grows with the input size. Therefore we
                think about the running time of the algorithm as a function of its input size.</p>

            <p>This second part is the rate of growth that a algorithm runs with the input size. This is called the rate
                of growth of the running time. As at some point different algorithms may differ on speed with larger
                input. To make this understandable and manageable the process of
                asymptotic notation will drop the less significant terms and the constant coefficients and focus on
                the important parts of the running time.</p>

            <p>When we drop the constant coefficients and the less significant terms we are using <strong>asymptotic
                notation</strong>. This has three forms Big Theta, Big O and Big Omega.</p>


            <h4>Big Theta</h4>

            <p>A simple search through a sorted list is a linear search where you check each item once. If you then have
                a nested loop you are then checking through <InlineMath math="n \times n = n^2"></InlineMath>. Commonly
                a algorithm also has some constant time complexity such as doing a compare or assigning a variable. As
                stated we ignore these and focus on the most significant term. So in a linear search you would have
                the <i>constant</i> of the check if value matches and return the value and this would be <InlineMath
                    math="constant \times n"></InlineMath>. But as are state we ignore the lower terms we focus on
                the <i>n</i>. For our first complexity we look at Theta so in this case we are stating that
                once <i>n</i> gets large enough the running time is at least <InlineMath
                    math="k_{1} \times n"></InlineMath> and at most <InlineMath
                    math="k_{2} \times n"></InlineMath> for some constants <InlineMath
                    math="k_{1}"></InlineMath> and <InlineMath math="k_{2}"></InlineMath>. For small values
                of <i>n</i> we are not interested in the Big Theta of <i>n</i> but once they get big enough we say that
                as
                long as the constants <InlineMath math="k_{1}"></InlineMath> and <InlineMath
                    math="k_{2}"></InlineMath> exist the running time is <InlineMath math="\Theta(n)"></InlineMath>.
                This can be applied to any function say <InlineMath math="f(n)"></InlineMath> the running time
                is <InlineMath math="\Theta(f(n))"></InlineMath> is between <InlineMath
                    math="k_{1} \times f(n)"></InlineMath> and <InlineMath math="k_{2} \times f(n)"></InlineMath>.
            </p>

            <p>An example we have:</p>

            <BlockMath math="1.1 \times x^2 + ( 10 + 121) = \Theta(x^2)"/>

            <p>as we can take the most significant term as when we graph this the factor that grows massively
                when <i>x</i> increases is the most significant term. The constant factors <InlineMath
                    math="k_{1}"></InlineMath> and <InlineMath math="k_{2}"></InlineMath> are the parts dropped. Here
            </p>

            <BlockMath math="g(x) = \Theta(f(x)"/>
            <p>Lower bound with <i>k1</i> as 0.2 the constant. As original was 1.1 its lower.</p>
            <BlockMath math="f(x) = 0.2 \times x^2"/>
            <p>Upper bound with <i>k2</i> as 1.2 the constant. As original is 1.1 its higher.</p>
            <BlockMath math="f(x) = 1.2 \times x^2"/>

            <p>In summary when using the <InlineMath math="Big \Theta"></InlineMath> notation we are saying that we
                have a <strong>asymptotically tight bound</strong> on running time. Which is bounded between two
                constants. It is asymptotically as it only matters for large values of <i>n</i> and tight bound as we
                have the running time stated within a constant factor above and below.</p>

            <h4>Big O</h4>

            <p>We have seen with Big Theta a time complexity bound between two constants. We now move to Big O which
                bounds from above which is the upper bound. Referring back to binary search we worked
                out the running time was <InlineMath math="log_2 n"></InlineMath> but this would
                be <strong>incorrectly</strong> stated as <InlineMath math="\Theta(log_2 n)"></InlineMath> due to the
                fact it is not true for all cases we could successfully get the item we are looking for in the first
                guess so <InlineMath math="\Theta(1)"></InlineMath>. What we actually can say is that the running of
                binary search is never worse than <InlineMath math="\Theta(log_2 n)"></InlineMath> but it can sometimes
                be better. This is where Big O steps up. It enables us to say that the running time grows at most this
                much upper bound but can grow slower (better cases like the first guess).
            </p>

            <p>When you are coding software you usually are not interested in the best lucky case you want to minimise
                the worst case timings say for example searching for something via Google you need to have a requirement
                met for the worst case upper bound.</p>

            <p>Big O notation lets you say things that can be true but are not the most accurate for example we could
                say Binary Search is <InlineMath math="O(n)"></InlineMath> and this is true as it will never worse than
                that. Like saying I have 3 cards in my wallet but could say I have an amount of cards in my wallet that's
                no more than 10 cards. Big O gives us a upper bound where for a large enough input the running time is
                at most this constant times the running time.</p>

            <h4>Statements that can be said with Asymptotic Notation</h4>

            <p>Its important to realise that <InlineMath math="Big \O"></InlineMath> and <InlineMath
                math="Big \Theta"></InlineMath>. Are simply measures when bounding a function by constants for large
                enough inputs. This allows us to make statements such as the worst case running time of Binary Search
                is <InlineMath math="O(log_2 n)"></InlineMath> and also <InlineMath math="\Theta(log_2 n)"></InlineMath>.
            </p>

            <p>However we <strong>cannot</strong> say that the running time of Binary Search (opposed to worst case
                running time) <InlineMath math="\Theta(log_2 n)"></InlineMath> as Binary Search can run faster than this
                and the Theta notation bounds between a lower and upper bound so includes the lower bound such as
                finding it on the midpoint first search in constant time. We can say though that the running time is
                always <InlineMath math="O(log_2 n)"></InlineMath> as the upper bound of Binary Search is always as slow
                as that and we could even say <InlineMath math="O(n)"></InlineMath>.</p>

            <h4>General Functions Time Complexity</h4>

            <p>Some simple but important cases. For example if you had a sorted array in decreasing order so the largest
                element is at the front then tasked with finding the MAX then it would be in index 0. Looking at the Big
                Theta of this algorithm we would say that the runtime is <InlineMath
                    math="\Theta(n^0)"></InlineMath> because the lookup of the first index is constant and <InlineMath
                    math="n^0 = 1"></InlineMath> and practically we would write <InlineMath
                    math="\Theta(1)"></InlineMath>. </p>

            <p>Another case is looking at log times with different base constants. If you said an algorithm
                took <InlineMath math="{log_10} n"></InlineMath> then it would be the same as <InlineMath
                    math="{log_2} n"></InlineMath> because of the rule:</p>

            <BlockMath math="{log_a} n = \frac{{log_b} n}{{log_b} a}"/>

            <p>Therefore if <i>a</i> and <i>b</i> are constants which they are then they only differ by a constant
                factor which we said we ignore in asymptotic notation.</p>

            <p>The common complexities that come up in algorithm analysis are listed below in the order fastest to
                slowest. Note for logs bases and exponents inside the logs turn into constant factors so are
                dropped.</p>
            <ul className="text-list">
                <li><InlineMath math="O(1)"></InlineMath></li>
                <li><InlineMath math="O(log_2 n)"></InlineMath></li>
                <li><InlineMath math="O(n)"></InlineMath></li>
                <li><InlineMath math="O(n log_2 n)"></InlineMath></li>
                <li><InlineMath math="O(n^2)"></InlineMath></li>
                <li><InlineMath math="O(n^2 log_2 n)"></InlineMath></li>
                <li><InlineMath math="O(n^3)"></InlineMath></li>
                <li><InlineMath math="O(2^n)"></InlineMath></li>
                <li><InlineMath math="O(n!)"></InlineMath></li>
            </ul>

            <p>Commonly we may also have <i>O(n + m)</i> when we have a signature of a function func(n: List, m: List)
                and we iterate over each one in the function rather than <i>2n</i> as it is potentially different size
                lists. Or we may have a nested loop in a function with that signature where it is <i>O(n *
                    m)</i> not <i>O(n*n)</i> as we again have the two different array sizes.</p>

            <h4>Big Omega</h4>

            <p>We now move to the final major time bound big Omega the best case. Big Omega is used for asymptotic lower
                bounds. A method allowing us to state that an algorithm takes at least a certain amount of time. We
                say the running time is at least <InlineMath math="k \times f(n)"></InlineMath> for a constant <i>k</i>.
                Here we can also make correct but imprecise statements such as I have 10 cards in my wallet, but I say I
                have at least 4 cards in my wallet. It is correct but not very precise.
            </p>

            <p>Applying this idea to binary search we can say the worst case running time of binary search
                is <InlineMath math="\Omega(1)"></InlineMath> as we know it takes <strong>at least</strong> constant
                time. For example when the midpoint of the list on the first search is the value we are looking for.</p>

            <p>As before when <InlineMath math="\Theta(f(n))"></InlineMath> automatically implies <InlineMath
                math="O(f(n))"></InlineMath> it also automatically implies <InlineMath
                math="\Omega(f(n))"></InlineMath>.</p>

            <h4>Conclusion</h4>

            <p>Learn this section well it is critical for all algorithms also note people commonly write O(n) and really
                are talking Big Theta of N. We have show that you can be imprecise but correct with statements but
                please do always try and be as precise as possible.</p> <p>A point that clears up that if you have a
            running time and you cannot bound it either side by a constant then you cannot have Big Theta only Big O for
            upper bound and Big Omega for lower bound.</p>

            <BlockMath math="g(x) = (1 + sin(x)) \times x^{1.7} + x^{1.4}"/>

            <p>The constant here contains <InlineMath math="x^{1.4}"></InlineMath> and <InlineMath
                math="x^{1.7}"></InlineMath> the most significant term is <InlineMath math="x^{1.7}"></InlineMath>.</p>

            <p>The upper bound is in this example.</p>
            <BlockMath math="f(x) = 3 \times x^{1.5}"/>
            <p>The lower bound is in this example.</p>
            <BlockMath math="f(x) = x^{1.4}"/>

            <p>As the lower and upper bounds are not constant we cannot use Big Theta. Instead we have to say the Big O
                and Big Omega are:</p>

            <BlockMath math="O(x^{1.5})"/>
            <BlockMath math="\Omega(x^{1.4})"/>

            <p>Some examples</p>
            <BlockMath math="10^{62} -> O(1)"/>
            <BlockMath math="f(4n)^6 -> O(n^6)"/>
            <BlockMath math="log(n^{100}) = 100 log(n) -> O ({log} n)"/>
            <BlockMath math="{log_5}(n) = \frac{log n}{{log_5}} -> O ({log} n)"/>

            <h3 id={"Logical"}>Bridge Crossing Problem Solving</h3>

            <p>A logical problem that commonly appears and is asked is scenarios of crossing a bridge in the shortest
                time. Please read a nice <a
                    href={"https://en.wikipedia.org/wiki/Bridge_and_torch_problem#Solution"}>here</a> and further
                explanation <a
                    href={"https://www.codeproject.com/Articles/804991/Bridge-Crossing-Puzzles-Optimal-Strategy"}>here.</a>
            </p>


            <h3 id={"Scheduling"}>Scheduling</h3>

            <h4>Disk Scheduling Algorithms</h4>

            <p>Disk scheduling algorithms are looking into the schedule of moving a cursor over a disk to read
                information from 0 to n. This arm physically moves back and forth over the disk so needs to be
                optimal
                and prevent starvation. Thanks to <a
                    href={"https://www.geeksforgeeks.org/disk-scheduling-algorithms/"}>GeeksForGeeks</a> for
                reference.
            </p>

            <p>Some questions to think about before deciding what to use or base your algorithm on, should you
                prioritise throughput, or response time? Is starvation a bad problem? The number and types of
                requests?
                Could analyse data or track users and predict where to be when sitting idle.
            </p>

            <h5>First Come First Served</h5>

            <p>Simple but inefficient as request are served as they come into the request queue. Not optimal for
                seek
                time, but avoids starvation.</p>

            <h5>Shortest Seek Time</h5>

            <p>When you go to the closest request first so the queue maintains a priority of seek time shortest
                first. Higher throughput but average response time improves but you are going to cause
                starvation.</p>

            <h5>SCAN</h5>

            <p>Simply moves in one direction servicing requests then hits the end and moves back servicing requests.
                Decent throughput but slow to respond to requests just serviced.</p>


            <h5>Circular SCAN</h5>

            <p>This scheduling algorithm scans across the disk from start to finish and then it moves all the way
                back
                to the start and scans again. This approach provides a more even wait time.</p>


        </div>
    ]


};


const AlgorithmsIntro = () => {
    return (
        <BlogPage
            title={algorithms.title}
            contents={algorithms.contents}
            text={algorithms.text}
        />
    );
}


export default AlgorithmsIntro;
