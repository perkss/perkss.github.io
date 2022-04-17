import React from "react";
import BlogPage from './blog-page.js';
import Latex from 'react-latex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {HashLink as Link} from 'react-router-hash-link';
import {BlockMath, InlineMath} from 'react-katex';
import Insertion1 from '../images/insertion-sort/random-order/Average1.jpeg'
import Insertion2 from '../images/insertion-sort/random-order/Average2.jpeg'
import Insertion3 from '../images/insertion-sort/random-order/Average3.jpeg'
import Insertion4 from '../images/insertion-sort/random-order/Average4.jpeg'
import Insertion5 from '../images/insertion-sort/random-order/Average5.jpeg'
import Insertion6 from '../images/insertion-sort/random-order/Average6.jpeg'
import Insertion7 from '../images/insertion-sort/random-order/Average7.jpeg'
import Insertion8 from '../images/insertion-sort/random-order/Average8.jpeg'
import Insertion9 from '../images/insertion-sort/random-order/Average9.jpeg'
import Insertion10 from '../images/insertion-sort/random-order/Average10.jpeg'
import Insertion11 from '../images/insertion-sort/random-order/Average11.jpeg'
import Insertion12 from '../images/insertion-sort/random-order/Average12.jpeg'
import Insertion13 from '../images/insertion-sort/random-order/Average13.jpeg'
import Insertion14 from '../images/insertion-sort/random-order/Average14.jpeg'
import Insertion16 from '../images/insertion-sort/random-order/Average16.jpeg'
import Insertion17 from '../images/insertion-sort/random-order/Average17.jpeg'
import binarytree from '../images/binarytree.png'
import heap from '../images/heap/max-heap.png'

// import InsertionWorst1 from '../images/insertion-sort/worst-case/1.jpeg'
// import InsertionWorst2 from '../images/insertion-sort/worst-case/2.jpeg'
// import InsertionWorst3 from '../images/insertion-sort/worst-case/3.jpeg'
// import InsertionWorst4 from '../images/insertion-sort/worst-case/4.jpeg'
// import InsertionWorst5 from '../images/insertion-sort/worst-case/5.jpeg'
// import InsertionWorst6 from '../images/insertion-sort/worst-case/6.jpeg'
// import InsertionWorst7 from '../images/insertion-sort/worst-case/7.jpeg'
// import InsertionWorst8 from '../images/insertion-sort/worst-case/8.jpeg'
// import InsertionWorst9 from '../images/insertion-sort/worst-case/9.jpeg'
// import InsertionWorst10 from '../images/insertion-sort/worst-case/10.jpeg'
// import InsertionWorst11 from '../images/insertion-sort/worst-case/11.jpeg'
// import InsertionWorst12 from '../images/insertion-sort/worst-case/12.jpeg'
// import InsertionWorst13 from '../images/insertion-sort/worst-case/13.jpeg'
// import InsertionWorst14 from '../images/insertion-sort/worst-case/14.jpeg'
// import InsertionWorst15 from '../images/insertion-sort/worst-case/15.jpeg'
// import InsertionWorst16 from '../images/insertion-sort/worst-case/16.jpeg'
// import InsertionWorst17 from '../images/insertion-sort/worst-case/17.jpeg'
// import InsertionWorst18 from '../images/insertion-sort/worst-case/18.jpeg'
// import InsertionWorst19 from '../images/insertion-sort/worst-case/19.jpeg'
// import InsertionWorst20 from '../images/insertion-sort/worst-case/20.jpeg'
// import InsertionWorst21 from '../images/insertion-sort/worst-case/21.jpeg'
// import InsertionWorst22 from '../images/insertion-sort/worst-case/22.jpeg'
// import InsertionWorst23 from '../images/insertion-sort/worst-case/23.jpeg'
// import InsertionWorst24 from '../images/insertion-sort/worst-case/24.jpeg'
// import InsertionWorst25 from '../images/insertion-sort/worst-case/25.jpeg'
// import InsertionWorst26 from '../images/insertion-sort/worst-case/26.jpeg'
// import InsertionWorst27 from '../images/insertion-sort/worst-case/27.jpeg'
// import InsertionWorst28 from '../images/insertion-sort/worst-case/28.jpeg'
// import InsertionWorst29 from '../images/insertion-sort/worst-case/29.jpeg'
import InsertionBest1 from '../images/insertion-sort/best-case/Best1.jpeg'
import InsertionBest2 from '../images/insertion-sort/best-case/Best2.jpeg'
import InsertionBest3 from '../images/insertion-sort/best-case/Best3.jpeg'
import InsertionBest4 from '../images/insertion-sort/best-case/Best4.jpeg'
import InsertionBest5 from '../images/insertion-sort/best-case/Best5.jpeg'
import InsertionBest6 from '../images/insertion-sort/best-case/Best6.jpeg'
import InsertionBest7 from '../images/insertion-sort/best-case/Best7.jpeg'
import InsertionBest8 from '../images/insertion-sort/best-case/Best8.jpeg'
import InsertionBest9 from '../images/insertion-sort/best-case/Best9.jpeg'
import InsertionBest10 from '../images/insertion-sort/best-case/Best10.jpeg'

const algorithms = {
    title: 'Algorithms',
    contents:
        '',
    text: [
        <div>

            <h3>Topics</h3>
            <ul className="text-list">
                <li><Link to={"#Introduction"}>Introduction</Link></li>
                <li><Link to={"#Selections"}>Selections</Link></li>
                <li><Link to={"#Search"}>Binary Search</Link></li>
                <li><Link to={"#Asymptotic"}>Asymptotic Notation</Link></li>
                <li><Link to={"#DataStructures"}>Data Structures</Link></li>
                <ul className="text-list">
                    <li><Link to={"#Set"}>Sets</Link></li>
                    <li><Link to={"#Stack"}>Stacks</Link></li>
                    <li><Link to={"#Queue"}>Queues</Link></li>
                    <li><Link to={"#LinkedList"}>Linked List</Link></li>
                </ul>
                <li><Link to={"#Heap"}>Heap</Link></li>
                <li><Link to={"#Tree"}>Tree</Link></li>
                <li><Link to={"#BinaryTree"}>Binary Tree</Link></li>
                <ul className="text-list">
                    <li><Link to={"#btbfs"}>Breadth First Search</Link></li>
                    <li><Link to={"#btdfs"}>Depth First Search</Link></li>
                </ul>
                <li><Link to={"#Matrix"}>2D Arrays (Matrices)</Link></li>
                <ul className="text-list">
                    <li><Link to={"#dfs"}>Depth First Search</Link></li>
                    <li><Link to={"#bfs"}>Breadth First Search</Link></li>
                </ul>
                <li><Link to={"#Graphs"}>Graphs</Link></li>
                <ul className="text-list">
                    <li><Link to={"#Representations"}>Representations</Link></li>
                    <li><Link to={"#Traversal"}>Traversals</Link></li>
                    <ul className="text-list">
                        <li><Link to={"#gdfs"}>Depth First Search</Link></li>
                        <li><Link to={"#gbfs"}>Breadth First Search</Link></li>
                    </ul>
                    <li><Link to={"#DAG"}>Directed Acyclic Graph</Link></li>
                    <li><Link to={"#weighted"}>Weighted Graph</Link></li>
                    <li><Link to={"#trie"}>Trie Tree</Link></li>
                </ul>
                <li><Link to={"#Sorting"}>Sorting</Link></li>
                <ul className="text-list">
                    <li><Link to={"#Bubble"}>Bubble Sort</Link></li>
                    <li><Link to={"#Selection"}>Selection Sort</Link></li>
                    <li><Link to={"#Insertion"}>Insertion Sort</Link></li>
                    <li><Link to={"#Merge"}>Merge Sort</Link></li>
                    <li><Link to={"#Quick"}>Quick Sort</Link></li>
                </ul>
                <li><Link to={"#Scheduling"}>Scheduling</Link></li>
                <li><Link to={"#DynamicProgramming"}>Dynamic Programming</Link></li>
                <li><Link to={"#Array"}>Array</Link></li>
                <li><Link to={"#String"}>Strings</Link></li>
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


            <h4>Bridge Crossing Problem Solving</h4>

            <p>A logical problem that commonly appears and is asked is scenarios of crossing a bridge in the shortest
                time. Please read a nice <a
                    href={"https://en.wikipedia.org/wiki/Bridge_and_torch_problem#Solution"}>here</a> and further
                explanation <a
                    href={"https://www.codeproject.com/Articles/804991/Bridge-Crossing-Puzzles-Optimal-Strategy"}>here.</a>
            </p>

            <h4>Models of Computation</h4>

            <h3 id={"Selections"}>Selections</h3>
            <h4>Hoare QuickSelect</h4>

            <h3 id={"Search"}>Binary Search</h3>

            <p>Binary search allows finding an item for a <strong>sorted</strong> list in <Latex>$O (\log
                n)$</Latex> time. This is usually <InlineMath math={"{log_2} n"}></InlineMath> but is irrelevant due to
                if <i>a</i> and <i>b</i> are constant then they only differ by a constant factor so it can be ignored in
                Big O notation explained later on.
            </p>

            <p>It does this by taking the midpoint and dividing the list in two and seeing if the item is higher or
                lower than the chosen midpoint then applies the same process to the chosen halved list. This can be done
                in an iterative or a recursive approach. Recursive is easier to read, but iterative is more memory
                efficient.</p>

            <h4>Binary Search Recursive</h4>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true} wrapLines={true}>{`static boolean binarySearch(int[] arr, int key, int start, int end) {
        if(end < start) {
            return false;
        }
        System.out.println("end " + end + " start " + start);
        int midPoint = (start + end) / 2; // java will always round down with integer division
 
        System.out.println("mid = " + midPoint);
        if(arr[midPoint] == key) {
            return true;
        } else if(key < arr[midPoint]) {
            return binarySearch(arr, key, 0, midPoint-1);
        } else {
            return binarySearch(arr, key, midPoint+1, end);
        }
 
    }`}</SyntaxHighlighter>

            <h4>Binary Search Iterative</h4>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true} wrapLines={true}>{`static int binarySearchIter(int[]nums, int target, int left, int right) {
     while(left <= right) {
         int midPoint = (left + right)/2; // java will always round down with integer division
         int foundValue = nums[midPoint];

         if(foundValue == target) {
             return midPoint;
         } else if(target < foundValue) {
             // left side
             right = midPoint-1;
         } else {
             //right side
             left = midPoint +1;
         }

     }
     return -1;
 }`}</SyntaxHighlighter>

            <h4>Time Complexity</h4>

            <p>Lets now understand the time complexity of binary search, as we have seen in the algorithm a incorrect
                guess will half the size of the search area so a incorrect guess on a list of elements length 8 will
                result in a new search on a list of 4 elements. Then it will be 2 then it will be 1. Therefore with a
                length of 8 you will need at most 4 guesses. Of course you could be lucky and find the element
                immediately or earlier as it could be the middle element. Hence the pattern is that every time the size
                of the list to search doubles we require another guess. The formula simply put is the number of times we
                half until we get to 1 then we add 1. Or the number of times we check so check in the 8, then the 4,
                then the 2 then the 1 so 4 guesses. This is the in mathematical terms as <InlineMath
                    math="{log_2} n + 1"></InlineMath> but we ignore constants taught later on so its <InlineMath
                    math="{log_2} n"></InlineMath> also remember that log is the inverse of exponential.
                <InlineMath math="{log_2} n = x"></InlineMath> is the same as <InlineMath
                    math={"n = 2^x"}></InlineMath> for example <InlineMath math={"{log_2} 32 = 5"}></InlineMath> is the
                same as <InlineMath math={"32 = 2^5"}></InlineMath>. This makes it simple to calculate the running time
                of a binary search on a list of length <i>n</i> which is a power of <i>2</i>. If it is not a power
                of <i>2</i> then we can round to the closest power of <i>2</i> or say its between two powers. For
                example a list of length <i>2000</i> would be between <InlineMath
                    math="2^{10} = 1024"></InlineMath> and
                <InlineMath math="2^{11} = 2048"></InlineMath>.
            </p>

            <h4>Conclusion</h4>

            <p>Boom we have just reviewed and completed a lovely search algorithm and understood the time complexity
                nice right! It was not even too hard.</p>

            <h3 id={"Asymptotic"}>Asymptotic Notation</h3>

            <p>Firstly a great video on this stuff is here <a
                href={"https://www.youtube.com/watch?v=P7frcB_-g4w&t=585s"}>MIT Open Courseware</a>.</p>

            <p>When analysing algorithms we need to think of two time aspects deciding how long it takes on size of
                input and then and then how fast the algorithm grows with the input size. This second part is the rate
                of growth as at some point different algorithms may differ on speed with larger input. When looking at
                asymptotic notation then we drop the less significant terms and the constant coefficients and focus on
                the important parts of the running time.</p>

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
                bounds only from above which is the worst case running time. Referring back to binary search we worked
                out the running time was <InlineMath math="log_2 n"></InlineMath> but this would
                be <strong>incorrectly</strong> stated as <InlineMath math="\Theta(log_2 n)"></InlineMath> due to the
                fact it is not true for all cases we could successfully get the item we are looking for in the first
                guess so <InlineMath math="\Theta(1)"></InlineMath>. What we actually can say is that the running of
                binary search is never worse than <InlineMath math="\Theta(log_2 n)"></InlineMath> but it can sometimes
                be better. This is where Big O steps up. It enables us to say that the running time grows at most this
                much (worst case/upper bound) but can grow slower (better cases like the first guess).
            </p>

            <p>When you are coding software you usually are not interested in the best lucky case you want to minimise
                the worst case timings say for example searching for something via Google you need to have a requirement
                met for the worst case upper bound.</p>

            <p>Big O notation lets you say things that can be true but are not the most accurate for example we could
                say Binary Search is <InlineMath math="O(n)"></InlineMath> and this is true as it will never worse than
                that. Like saying I have 3 cards in my wallet but could say I have an amount of cards in my waller thats
                no more than 10 cards.</p>

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

            <p>We now move to the final major time bound big Omega. Big Omega is used for asymptotic lower bounds. We
                say the running time is at least <InlineMath math="k \times f(n)"></InlineMath> for a constant <i>k</i>.
                Here we can also make correct but imprecise statements such as I have 10 cards in my wallet, but I say I
                have at least 4 cards in my wallet. It is correct but not very precise.
            </p>

            <p>Applying this idea to binary search we can say the worst case running time of binary search
                is <InlineMath math="\Omega(1)"></InlineMath> as we know it takes <strong>at least</strong> constant
                time.</p>

            <p>As before when <InlineMath math="\Theta(f(n))"></InlineMath> automatically implies <InlineMath
                math="O(f(n))"></InlineMath> it also automatically implies <InlineMath
                math="\Omega(f(n))"></InlineMath>.</p>

            <h4>Conclusion</h4>

            <p>Learn this section well it is critical for all algorithms also note people commonly write O(n) and really
                are talking Big Theta of N. We have show that you can be imprecise but correct with statements but
                please do always try and be as precise as possible.</p> <p>An point that clears up that if you have a
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

            <h3 id={"DataStructures"}>Data Structures</h3>

            <h4>Introduction</h4>

            <h5 id={"Set"}>Sets</h5>

            <p>Sets have already been covered in the Discrete Maths where they were usually fixed but sets that are
                manipulated by Algorithms
                can change by growing and shrinking over time, these sets are call dynamic. Algorithm may require the
                ability to insert, delete and test if items are contained in sets and we refer to these structures
                as <strong>dictionaries</strong>. Most dynamic sets assume that one of the objects attributes can
                uniquely identify it and this is referred to as a <strong>key</strong>. The object may also contain what
                is referred to as <strong>satellite data</strong>. Satellite data is the payload of the data which is
                not part of the structure of the data structure. If the key is unique then they can be ordered.</p>

            <h5 id={"Stack"}>Stacks</h5>

            <p>Stacks are <i>last in first out</i> (LIFO) meaning the most recently added element to a stack is deleted.
                Insert is usually referred to as Push and deletion is referred to as Pop on a stack, much like with GIT
                if you are familiar with the stash feature. Stacks are also used as the <i>Execution Stack</i> to
                execute program code. This execution stack contains what are referred to as stack frames;
                subroutine calls in the order of the subroutine arguments as the first stack frame, then
                return address back to the routines caller, and the stack frame for the local variables of the
                subroutine. When a subroutine completes and executes the return statement it is popped off the stack. If
                an exception is thrown (c++ behaviour) it will walk the stack until it finds a handler, unwind the stack
                to to the handler and let it handle it. Back to the plain data structure, if we pop an empty stack it
                underflows, if we push to a full stack it overflows. Stacks are usually implemented with a linked list
                node as the <a href={"https://introcs.cs.princeton.edu/java/43stack/Stack.java.html"}>structure</a>.</p>

            <p>In Java there is a Deque interface that is implemented by LinkedList and ArrayDeque. The equivalent
                methods
                are <i>push</i> is <i>addFirst</i>, <i>pop</i> is <i>removeFirst</i>, <i>peek</i> is <i>peekFirst</i>.
                An example question where stacks are useful is when being asked to check for matching brackets or
                anything kind of grammar checking for compilers.</p>

            <h6>Valid Parentheses</h6>
            <h6>Minimum Brackets to Remove</h6>

            <h5 id={"Queue"}>Queues</h5>

            <p>Queues follow a <i>first in first out</i> (FIFO) policy meaning the one deleted is the one
                that has spent the longest time in the set. Where insert are referred to as ENQUEUE and delete DEQUEUE.
                Items are enqueued at the <strong>tail</strong> and elements are dequeued at the <strong>head</strong>.
            </p>

            <p>In Java there is a queue interface that is implemented by LinkedList, ArrayBlockingQueue and Priority
                Queue.</p>

            <h6>Create a Queue with Stacks</h6>

            <h5 id={"LinkedList"}>Linked Lists</h5>

            <p>Linked lists are a data structure arranged in linear orders. Unlike a array the order is not determined
                by indices but a pointer in each object to the next item. <strong>Doubly linked lists</strong> nodes not
                only contain the
                key and satellite data but also pointers to next and previous objects in the linked lists. If the node
                property previous is nil then it is at the start of the list which is the <strong>head</strong>. If the
                node property next is nil then it has no next element so is the <strong>tail</strong> last element of
                the linked list. If the head element is nil then it is an empty list.</p>

            <h5>Linked List Types</h5>

            <table>
                <tr>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><strong>Single Linked</strong></td>
                    <td>Each node has no previous link only next</td>
                </tr>
                <tr>
                    <td><strong>Doubly Linked</strong></td>
                    <td>Each node has previous pointer and next pointer</td>
                </tr>
                <tr>
                    <td><strong>Sorted</strong></td>
                    <td>The linear order of the list corresponds to each items key in natural order</td>
                </tr>
                <tr>
                    <td><strong>Unsorted</strong></td>
                    <td>Items in the list can appear in any order</td>
                </tr>
                <tr>
                    <td><strong>Circular List</strong></td>
                    <td>The previous pointer of the head points to the tail, and the next pointer of the tail points to
                        the head. Like a ring of elements.
                    </td>
                </tr>
            </table>

            <h5>Searching a Linked List</h5>

            <p>To search a linked list you do a linear search through the objects starting at the head and checking if
                the key matches the item being searched for. If it does you break and return the item, else you move
                onto the next item pointed too by that item. This mean searching a linear list can be slow as you have
                to search potentially through all items so the search time is worst case is linear <Latex>$O(n)$</Latex>.
            </p>

            <h5>Inserting into a Linked List</h5>

            <p>Inserting into an unsorted linked list is easy if inserting item <Latex>x</Latex>, you take the current
                head of the list and then set <Latex>x.next=head</Latex> if it is a doubly linked list and not empty
                you set the head previous to <Latex>x</Latex> like so <Latex>if List.head</Latex><Latex>$!=$</Latex>
                <Latex>List.head.prev = x</Latex>. If inserting item into <strong>unsorted</strong> linked list the time
                complexity is <Latex>$O(1)$</Latex>, if inserting into linked list that is sorted and to keep the sort
                the time complexity is linear as you need to find the items position by checking each item in the list
                up to the correct position <Latex>$O(n)$</Latex>. A neat <a
                    href={"https://www.geeksforgeeks.org/given-a-linked-list-which-is-sorted-how-will-you-insert-in-sorted-way/"}>reference</a>.
            </p>

            <h5>Deleting from a Linked List</h5>

            <p>Simply deleting an element from a linked list is a case of updating pointers, you set the deleted
                nodes <Latex>$X$</Latex> next item to its own previous items next pointer, and you
                set <Latex>$X$</Latex> nexts item it pointers too previous value to <Latex>$X$</Latex> previous value. A
                simple delete time complexity is <Latex>$O(1)$</Latex> but a specific key delete you need to search
                first so its worst case time is <Latex>$O(n)$</Latex> as it maybe the tail of the list you are deleting.
            </p>

            <h5>Detecting cycles in a Linked List</h5>

            <p>To detect cycles in a Linked List we can use the tortoise and hare algorithm. This algorithm works in the
                following steps.</p>

            <ul className="text-list">
                <li>Initialise two pointers at the head of the linked list. The tortoise moves one node at a time and
                    the hare moves forward two nodes.
                </li>
                <li>Loop as long as the hare does not meet null.</li>
                <li>If they arrive at the same node then reset the tortoise back to head.</li>
                <li>Have the tortoise and the hare move one node at a time when they meet again return the node.</li>
            </ul>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public ListNode detectCycle(ListNode head) {
        
        if(head == null || head.next == null) {
            return null;
        }
        
        ListNode tortoise = head.next;
        ListNode hare = head.next.next;
        
        // find when they intersect
        while(tortoise != hare && hare != null && hare.next != null) {
            hare = hare.next.next;
            tortoise = tortoise.next;
        }
        

        // if the hare is not null or its next it is not a tail but a cycle
        if(hare != null && hare.next != null) {
            tortoise = head;
            // is a cycle so wont go to null
            while(tortoise != hare) {
                tortoise = tortoise.next;  
                hare = hare.next;
            }

            return tortoise;
        }
        
        return null;
        
    }`}</SyntaxHighlighter>

            <h5>Reversing a Linked List</h5>

            <p>Reversing a linked list can be done iteratively or recursively. The basic idea is you create the start of
                the new list (prev) as null. And set the current value. Then iterate over the current value store its
                next value in a temp variable, set its next as the previous so the new list. Then set the new list prev
                to be current and update current to be the temp next.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`        if(head == null || head.next == null) {
            return head;
        }
        
        ListNode prev = null;
        ListNode current = head;
        
        
        while(current != null) {
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        
        
        return prev;`}</SyntaxHighlighter>


            <h5>Sentinel Node</h5>

            <p>A sentinel node in a linked list is a dummy node with all the attributes of the other objects in the
                list, and if a nil is referenced in the linked list then it points to the sentinel node. Adding a
                sentinel node between the head and tail of a list can simplify the code due to not requiring so many
                checks. Adding a sentinel to a doubly linked list makes it a circular linked list with a sentinel
                node.</p>

            <h5>Pointers and Objects</h5>

            <p>What happens if a language does not provide pointers how can we implement a Linked List? Well there are
                two main ways.</p>

            <h7>Multiple Array Representation</h7>

            <p>To represent a node of a linked list using arrays you can have three arrays one that stores the keys, one
                that stores the next address and one that stores the previous address. <i>key[i],next[i],prev[i]</i>. To
                represent the head or tail you usually use a negative index as it cannot exist such as <i>-1</i>.</p>

            <h7>A Single Array Representation</h7>

            <p>A single array representation of a linked list is done by having contiguous blocks in the array, so you
                use offsets to get to the key, next and prev for example. <i>list[i]</i> returns the
                key <i>list[i+1]</i> returns the next value array index key and <i>list[i+2]</i> returns the previous
                array index key it points too.</p>

            <h7>Allocating and Freeing Objects</h7>

            <p>To allocate and free objects when representing them with arrays you have a free list of the array that
                stores points to the next free index. This free list acts like a stack as you push and pop off it when
                allocating and freeing objects from it. If you have a total list of size <i>M</i> and it
                contains <i>N</i> items then the free space is <Latex>$M - N$</Latex></p>

            <h5>Representing Rooted Trees</h5>
            <p></p>

            <h4 id={"Heap"}>Heap Data Structure</h4>

            <p>A Heap is tree based data structure where the nodes are in a particular order but it is usually
                implemented as an
                array (and has nothing to do with storage with garbage collected storage
                like the Java heap). They are used for priority queue data structure. A heap puts all nodes in a
                specific order this is called the <strong>heap
                    property</strong>. Usually a Max Heap where the value of
                the parent node will always be greater than or equal to its children so the MAX value is stored at the
                root. Or a Min Heap where the parent
                node is always less than or equal to its children. Commonly max heaps are used for Heapsort and min
                heaps are used for priority queues. A priority queue is a queue but where each element has a priority
                associated with it and the item to be dequeued first has the highest priority.
                A <strong>binary</strong> heap is when there at most
                two children for each node. Other heaps exists and can differ on number of child nodes. The smallest
                possible size/height of a complete binary heap with <Latex>$N$</Latex> nodes is <InlineMath
                    math="\lg n"/>. The height is the number of edges on the longest simple downwards path from the root
                to a leaf. A heap will always be completely filled on all levels except the lowest. A heap has some
                simple operations to find the parent, left and right nodes when it is stored in a array. No pointers
                required.</p>

            <p>A <strong>binary</strong> heap is a complete binary tree that maintains the heap property. Where the
                order of the array view is the same as doing BFS on the tree. As a reminder a complete binary tree is
                when every level except the lowest is completely filled.</p>

            <img width="90%" height="90%" src={heap} alt="Max Heap Image"/>

            <p>Root of the tree: is the first element in the stored array. These are when index of array start at 1.</p>
            <p><i>Parent(i) = i/2</i>: Finding the parent index of <i>i</i>.</p>
            <p><i>Left(i) = 2i</i>: Find index of node <i>i</i> left child. This can be optimised by doing a left bit
                shift.</p>
            <p><i>Right(i) = 2i + 1</i>: Find index of node <i>i</i> right child.</p>

            <p>The reason to start at index 1 is due to you not requiring to add 1 to find the left child and subtract 1
                to find the parent. In bit manipulation this can have a positive impact on performance. The below table
                summarises the calculation depending on the style.</p>

            <table border="1">
                <tr>
                    <td>Operation</td>
                    <td>Index at 0</td>
                    <td>Index at 1</td>
                </tr>
                <tr>
                    <td>Left Child</td>
                    <td>index*2 + 1</td>
                    <td>index*2</td>
                </tr>
                <tr>
                    <td>Right child</td>
                    <td>index*2 + 2</td>
                    <td>index*2 + 1</td>
                </tr>
                <tr>
                    <td>Parent</td>
                    <td>(index-1)/2</td>
                    <td>index/2</td>
                </tr>
            </table>


            <br/>
            <br/>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`private Integer leftChild(int index) {
         return index * 2 + 1;
     }

private Integer rightChild(int index) {
    return index * 2 + 2;
}

private void swap(int left, int right) {
    Collections.swap(this.heap, left, right);
}

private boolean compare(int left, int right) {
    return heap.get(left) > heap.get(right);
}`}</SyntaxHighlighter>
            <br/>

            <p>Some common operations on Heaps are:</p>

            <p><i>Build Max(Min) Heap</i> produce a Max(Min) heap from unordered array runs in linear time. <InlineMath
                math="O(n)"/></p>
            <p><i>Max(Min) Heapify</i> correct a single violation of the Heap property. <InlineMath math="O(\lg n)"/>
            </p>

            <h5>Insert Value</h5>

            <p>To insert a value into a heap the process follows these steps.</p>

            <ul className="text-list">
                <li>Insert the value into the next available spot in the heap. Lowest level and leftmost position.</li>
                <li>Then we say does this heap still maintain the heap property. If yes then fine we are done else.</li>
                <li>We heapify the heap by comparing the value to its parent if it is greater than parent (in max heap)
                    then we swap with parent.
                </li>
                <li>We repeat this process until it is no longer greater.</li>
            </ul>

            <p>Applying this to an array implementation. We add the value at the end of the array, we then apply the
                parent formula and compare the values and then swap if greater than and repeat until the root or it is
                not greater.</p>


            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int insert(int value) {
          heap.add(value);
          this.siftUp();
          return this.size();
      }
 
private void siftUp() {
    int nodeIdx = this.size() -1;
    while(nodeIdx > 0 && this.compare(nodeIdx, this.parent(nodeIdx))) {
        this.swap(nodeIdx, this.parent(nodeIdx));
        nodeIdx = this.parent(nodeIdx);
    }
}`}</SyntaxHighlighter>

            <h5>Delete/Remove/Retrieve Value (Extract Max/Min)</h5>
            <p>Here we only talk about getting the highest priority so we take the root value.</p>

            <ul className="text-list">
                <li>Delete the root value and replace with the last value in the heap (rightmost value of the last
                    level)
                </li>
                <li>Now we check if our heap property is valid if it is then fine the next priority item is at the root
                    otherwise.
                </li>
                <li>We use the sift down process where we check if the values of the left child or right child are
                    greater. Then select the largest (or smallest) and swap.
                </li>
                <li>This process continues until we have satisfied the heap property.</li>
            </ul>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int extractMax() {
         // swap first and last element
         this.swap(0, this.size()-1);
         int max = this.heap.get(this.size()-1);
         // remove last
         this.heap.remove(this.size()-1);
         this.siftDown();
         return max;
     }

private void siftDown() {
    int nodeIdx = 0;

    // while we are smaller than the size and we are smaller
    // on both sides
    while(this.leftChild(nodeIdx) < this.size() && this.compare(this.leftChild(nodeIdx), nodeIdx) ||
        this.rightChild(nodeIdx) < this.size() && this.compare(this.rightChild(nodeIdx), nodeIdx)) {
        // determine the largest child node here
        // is it the left or right check that the right is under size as we can fall here if left is smaller
        // then compare the left and the right
        int greaterChildNodeIdx =
            this.rightChild(nodeIdx) < this.size() && this.compare(this.rightChild(nodeIdx), this.leftChild(nodeIdx))
                ? this.rightChild(nodeIdx)
                : this.leftChild(nodeIdx);

        // swap the nodes and then check the new child node with the sifted down value
        this.swap(greaterChildNodeIdx, nodeIdx);
        nodeIdx = greaterChildNodeIdx;
    }

     }`}</SyntaxHighlighter>

            <h5>Priority Queue with Max Heap</h5>

            <p>A priority queue keeps items in a queue and orders them by priority so they highest priority is removed
                from the queue and processed first. An efficient approach to this is to use heaps as they can insert and
                delete in O(log n) time. Our code example is a MAX priority queue where items with highest value are
                removed first as they are highest priority.</p>

            <h6>Maximum</h6>
            <p>The array backing the heap first element will be the max we can view this in O(1) but when we extract the
                maximum we take the first element remove it and swap it with the last, we then need to max heapify the
                array again which is O(log n).</p>

            <h6>Increase Priority of Value</h6>


            <h3 id={"BinaryTree"}>Binary Tree</h3>
            <p>A binary tree is where each node in the tree has no more than two child nodes. Where as a standard tree
                can
                have as many or little as required. A full binary tree is a tree that each node has two child nodes
                other than the leaves. A complete binary tree is one where all levels are full except the last and this
                is filled from the left side.</p>

            <h4>Traversal vs Searching</h4>

            <p>Searching through a binary tree can be either done using Breadth First Search or Depth First Search. When
                using DFS there are three types of traversal pre-order, in-order and post-order.
                Searching and traversing are different. Traversing is a subpart of searching using DFS. You first choose
                the type of search. Usually DFS is used if you are going deep into the tree, finding if a path exists or
                you are traversing a very wide tree. DFS is is more memory efficient but can be slow. Where as if the
                node is closer to your source use or if you are finding the
                finding shortest path, or rare solutions exist but very deep tree you tend to use BFS but this uses more
                memory. Due to the way it enqueues the whole level each time.</p>

            <p>Finding the next node in traversal order is useful and this next node is
                called <strong>successor</strong>.
                If you want to find the previous node in the order this is called the <strong>predecessor</strong>.
                Finding
                these differ depending on your traversal order.
            </p>

            <h3>Binary Search Tree</h3>

            <p>A binary search tree compared to a binary tree ensures the ordering of nodes is sorted. So a root nodes
                left child is always less than the root node, and its right child is always greater than.</p>

            <p>A search tree can be used as both a dictionary and a priority queue due to its ability to search, min,
                max, predecessor, successor, insert and delete. Such operations take &Theta;(lg n) worst case time
                proportionately to the height of the tree however if the tree is a linear set of nodes they
                take &Theta;(n).</p>

            <p>Binary search tree is represented by nodes linked where each node has a key and the satellite data along
                with a left, right and parent attribute. The <strong>binary search tree property</strong> that must be
                satisfied is let x be a node if y is a node in the left subtree its key is less than or equal to x.key,
                else if y is a node in the right subtree then y.key is greater than or equal to x.key.</p>

            <p>There are three methods for traversal of keys in a binary search tree, you can print the sorted keys
                with in order tree walk, preorder prints the root before the leaves and post order prints the leaves
                before the roots.</p>


            <h4>Questions to ask when coming across Binary Tree Problems</h4>

            <ul className="text-list">
                <li>Does traversal matter? If so should it be BFS or DFS</li>
                <li>If it is DFS then should the traversal order matter Pre, In, Post Order or does not matter.</li>
            </ul>

            <h4>Traversing a Binary Tree</h4>

            <p>A tree has exactly one root and no loops. A binary tree only has at most two children per node.</p>

            <h5 id={"btdfs"}>Binary Tree Traversal with Breadth First Search (Iterate)</h5>
            <p>Here we traverse each level and we represent the level with a queue as it is FIFO. We can do this
                iteratively.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public List<Integer> bfsIterate(Node root) {
   Node curr = root;
   List<Integer> traversed = new ArrayList<>();
   // BFS is the FIFO queue
   Queue<Node> queue = new LinkedList<>();

   queue.add(curr);
   while(!queue.isEmpty()) {
     curr = queue.poll();
     if(curr != null) {
        System.out.println("-> " + curr.val);
        traversed.add(curr.val);
        // or you check if not null add before here
        queue.add(curr.left);
        queue.add(curr.right);
     }
   }

  return traversed;
}`}</SyntaxHighlighter>

            <h5 id={"btdfs"}>Binary Tree Traversal with Depth First Search (Recursive)</h5>

            <p>All of the following traversals are <i>O(n)</i>. These traversals differ to graphs as graphs have to
                record visited to protect against loops. They are binary tree specific and are options when you need
                to consider the data held in each row. They are all DFS traversals.</p>


            <p>Example if we have a tree where we insert these values <i>15,10,20,8,12,16,25</i> we will traverse it out
                as the following.</p>

            <img width="90%" height="90%" src={binarytree} alt="Binary Tree Image"/>

            <ul className="text-list">
                <li>Pre Order [15, 10, 8, 12, 20, 16, 25] Top Down</li>
                <li>In Order [8, 10, 12, 15, 16, 20, 25] Sorted Order</li>
                <li>Post Order [8, 12, 10, 16, 25, 20, 15] Bottom Up</li>
            </ul>

            <p><strong>In Order Traversal (DFS)</strong> (Left, Root, Right), you traverse the left tree (call
                inOrder(node.left)) then you print root then you traverse right tree (call inOrder(node.right)).</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`void inOrder(Node node) {
        if(node == null) {
            return;
        }

        inOrder(node.left);
        // If we want to return a list of the path we just pass in a list recursively and then add it to the list here
        System.out.println(node.data);
        inOrder(node.right);
    }`}</SyntaxHighlighter>

            <p>This order will result in a ordered result list if it is a binary search tree, and you can find the
                minimum by traversing to the left most node or the maximum by traversing to the right most node. To find
                the <strong>successor</strong> if the right node is not null we find the minimum of the right subtree.
                If the right node is null then we walk up the parents subtree to find the lowest ancestor (the parent
                that is not on the left of the node). The <strong>predecessor</strong> can be found by checking the
                maximum value in the left subtree. If it does not have a left subtree it is the first left ancestor.</p>

            <p><strong>Pre Order Traversal (DFS)</strong> (Root, Left, Right) here you call print root.data then
                preOrder(root.left) and then preOrder(root.right). This sets the order out as the order of the tree
                to
                build so is useful if you want to rebuild a tree.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{` void preOrder(Node node) {
        if(node == null) {
            return;
        }
        // If we want to return a list of the path we just pass in a list recursively and then add it to the list here
        // mutates the list or can return the list
        System.out.println(node.data);
        preOrder(node.left);
        preOrder(node.right);
    }`}</SyntaxHighlighter>

            <p>For example returning the list.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public List<Integer> dfsPreOrder(Node root, List<Integer> traversed) {
        if(root == null) {
            return traversed;
        }
        // Preorder
        traversed.add(root.val);
        if(root.left != null) {
         dfsPreOrder(root.left, traversed);
        }

        if(root.right != null) {
         dfsPreOrder(root.right, traversed);
        }
        return traversed;
     }`}</SyntaxHighlighter>

            <p><strong>Post Order Traversal (DFS)</strong> (Left, Right, Root) here you call postOrder(root.left)
                then
                postOrder(root.right) and then print root.data. To delete a tree one by one post order should be
                used.
            </p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`void postOrder(Node node) {
        if(node == null) {
            return;
        }

        postOrder(node.left);
        postOrder(node.right);
         // If we want to return a list of the path we just pass in a list recursively and then add it to the list here
        System.out.println(node.data);
    }`}</SyntaxHighlighter>

            <h4>Height of a Binary Tree (DFS)</h4>

            <p>This is straightforward we need to find the deepest path down to the leaves of the tree. You get max
                depth of the left subtree, get max depth of the right subtree and then take the max of the two
                subtrees
                and +1 for the root. This is <i>O(n)</i>. The algorithm to find the deepest path is DFS.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`int maxDepth(BinaryNode root, int count) {
        if(root == null) {
            return count; // the current count back when hit the end
        } else {
            
            //  hit a new level increment
            count++;
                
            int lDepth = maxDepth(root.left, count);
            int rDepth = maxDepth(root.right, count);

            // each side returns of the binary tree take the max depth
            return Math.max(lDepth, rDepth)
        }
    }`}</SyntaxHighlighter>

            <h4>Level order Binary Tree (BFS)</h4>

            <p>The requirement here is to record the level order (the ordered values) on each level of the binary
                tree.
                BFS will traverse the nodes in the right order, but how we keep track of the levels. We need to
                track
                the size of the queue this is the level size. We then take the node and the level size and process
                the
                whole level. Then we exit the level add to the levels array and then start again get level size,
                init
                new level add the nodes of children and reduce the level size as we processed one item in that level
                and
                continue. This has a time complexity of <i>O(n)</i> and a space complexity of the nodes <i>O(n)</i>
            </p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{` public List<List<Integer>> bfs(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList();
        List<List<Integer>> levels = new ArrayList();
        
        int level = 0;
        
        if(root != null) {
            queue.add(root);
        }
       
              
        while(!queue.isEmpty()) {
            // get the current levle size
            int levelSize = queue.size();
            
            // add a blank level
            levels.add(level, new ArrayList());
            
            // whilst we have a level poll and then add the nodes to queue and add them to level
            while(levelSize != 0) {
                TreeNode node = queue.poll();    
                
                // add the node to the left of the queue
                // and add it to the current level
                if(node.left != null) {
                    queue.add(node.left);
                }
            
                if(node.right != null) {
                    queue.add(node.right);
                }
                
                levels.get(level).add(node.val);
                // processed a item in that level reduce its size
                levelSize--;
            }
            
            
            // processed a level fully increment it
            level++;
           
            
        }
        
        return levels;
    }`}</SyntaxHighlighter>

            <h4>View a Tree from the right side (BFS approach)</h4>

            <p>This problem is similar to the above if using BFS approach we say we are stood on the right of a Tree,
                and we can only see the nodes from the right side that are not blocked by nodes on that level
                further to the right.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{` public List<Integer> bfsApproach(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        
        List<Integer> result = new ArrayList<>();
        
        if(root == null) {
            return result;
        }
        
        queue.add(root);
        
        while(!queue.isEmpty()) {
            
            // get level size
            int levelSize = queue.size();
            
            // move along the level horizontally
            while(levelSize > 0) {
                // take node on level
                TreeNode curr = queue.poll();
            
                // if the size of the level is now 1 its the right most node and we add to result
                if(levelSize == 1) {
                    // last item in it
                    result.add(curr.val);
                }
                
                // add children
                if(curr.left != null) {
                    queue.add(curr.left);
                }
                
                if(curr.right != null) {
                    queue.add(curr.right);
                }
                
                // can only see right most so ignore others and decrement level size
                levelSize--;
            }
            
        }
        
        return result;
        
    }`}</SyntaxHighlighter>

            <p>A depth first search approach is also possible with a Right to Left pre order traversal, where we track
                the level nodes if a level already had a right node added then it is blocked so we do not add it.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`// dfs approach
    // to a in order R N L with the usual process reveresed go right first
    // keep a level param where it increments on entry and decrements on return
    // keep a list where the level is the index if the level is already populated
    // then we skip it as its blocked from our view
    
    public List<Integer> dfsApproach(TreeNode root, List<Integer> traversed, int level) {
        if(root == null) {
            return traversed;
        }
        
        // if the level equals the size of the current list
        if(level >= 0 && level == traversed.size()) {
            traversed.add(level, root.val);
        }
        
        // moved to the children to be added to stack so increase level
        level++;
        
        if(root.right != null) {
            dfsApproach(root.right, traversed, level);
        }  
        
        if(root.left != null) {
            dfsApproach(root.left, traversed, level);
        } 
         
        return traversed;
    }`}</SyntaxHighlighter>

            <h4>Validating a Binary Search Tree</h4>

            <p>The challenges on <a
                href={"https://leetcode.com/problems/validate-binary-search-tree/"}>leetcode</a> asks to validate if a
                given tree is a valid binary search tree. To approach this we need to think about relationships between
                nodes we want to compare the root node value to its children therefore we are searching with depth first
                so we use DFS. We then need to track the constraints of the node what is its min it needs to be larger
                than and what is its max it needs to be smaller than. We can then pass these at each recursive step and
                validate if valid then apply and pass the new value as the max to the left node and the new value as the
                min to the right node.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public boolean isValidBST(TreeNode root) {
        // dfs 
        // covers the case where its negative or positive max size
        return dfs(root, null, null);
    }
    
    public boolean dfs(TreeNode root, Integer min, Integer max) {
        if(root == null) {
            return true;
        }
        
        // not valid node as doesnt fall between min and max
        if((min != null && root.val <= min) || (max != null && root.val >= max)) {
             return false;
        }
        
        
        // check the left side of the tree
        if(root.left != null) {
            if(!dfs(root.left, min, root.val)) {
                return false;
            }
        }
        
        // check the right side of the tree
        if(root.right != null) {
            if(!dfs(root.right, root.val, max)) {
                return false;
            }
        }
        
        return true;  
    }`}</SyntaxHighlighter>


            <h3 id={"Matrix"}>2D Array (Matrices)</h3>

            <p>Following on from Binary Tree when doing interview questions 2D array questions are common and follow a
                lot of the techniques used in Binary Trees.</p>

            <h4>Navigation</h4>
            <p>To move from a position in a 2D array you can move any position from your current as long as it is within
                the boundary of the 2D array. To find the length of a 2D arrays row you use the array.length and to find
                the
                length of the 2D arrays column you use the first row and then call array[0].length</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`int rowWidth = matrix.length`}</SyntaxHighlighter>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`int columnWidth = matrix[0].length`}</SyntaxHighlighter>

            <p>To check that a row or column is in a valid position you check if they are greater than 0 and within the
                lengths of the rowWidth and columnWidth (height).</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`if(row < 0 || row >= matrix.length || column < 0 || column >= matrix[0].length
     || seen[row][column] == true) {
     // out of bounds
     return;
 }`}</SyntaxHighlighter>

            <h5>2D Array Sequential Order Traversal Left to Right, Row by Row</h5>

            <p>To simply start at the top left and traverse from left to right and row by row we can use the following
                code. We iterate with an outer loop through each row and inside we iterate through the length of the row
                which is each column.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int[] sequentialTraversal(int[][] matrix) {
    int[] values = new int[matrix.length * matrix[0].length];

    int idx = 0;
    // iterate the first row
    for(int row = 0; row<matrix.length; row++) {
       // iterate the columns in the selected row
       for(int col = 0; j<matrix[row].length; col++) {
           values[idx] = matrix[row][col];
           idx++;
       }
    }

    System.out.println(Arrays.toString(values));
    return values;
}`}</SyntaxHighlighter>

            <p>The directions to move are simple then if we view it as this we can move UP[-1,0], Right[0, 1], Down[1,
                0], Left[0,-1]. To traverse a 2D array we can then do a depth first search starting at the top left and
                tracking the seen values. Then attempting to move in each direction and only progressing if it is a
                valid move. We then store the seen value and set the seen position to true.</p>

            <h5 id={"dfs"}>2D Array Depth First Search</h5>

            <p>This example code shows how to DFS through a 2d array starting from the top left and moving along
                attempting Up, Right, Down and Left. With DFS we keep going in one direction until we hit the end.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`private int[][] directions = new int[][] {
    {-1, 0}, // Up
    {0, 1}, // Right
    {1, 0}, // Down
    {0, -1} // Left
    };

public int[] traversalDfs(int[][] matrix) {
    // track the seen items
    boolean[][] seen = new boolean[matrix.length][matrix[0].length];

    // flat array of the values seen
    int[] values = new int[matrix.length * matrix[0].length];

    //dfs starting at top left corner, pass seen and values to be added for result
    dfs(matrix, 0, 0, seen, values, 0);

    return values;

}
// Time O(n) as touch each item
// Space O(n) as seen
        // as we set the values we dont need to return
private void dfs(int[][] matrix, int row, int column, boolean[][] seen, int[] values, int place) {
    if(row < 0 || row >= matrix.length || column < 0 || column >= matrix[0].length
        || seen[row][column] == true) {
        // out of bounds
        return;
    }

    // seen this value set
    seen[row][column] = true;
    // add the value into the right place
    values[place] = matrix[row][column];

    // iterate over each direction and try it out dfs
    for(int i = 0; i<directions.length; i++) {
        int[] currentDirection = directions[i];// get the direction pair
        // traverse that with the new direction recursively dfs
        dfs(matrix, row + currentDirection[0], column + currentDirection[1], seen, values, place + 1);
    }
}

    
    `}</SyntaxHighlighter>

            <p>This approach of DFS using these direction order of UP, Right, Down, Left results in a spiral result.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`    // a row is 1,2,3,4,5
    // a column is 1,6,11,16
    int[][] testMatrix = new int[][] {
        {1,2,3,4,5},
        {6,7,8,9,10},
        {11,12,13,14,15},
        {16,17,18,19,20},
    };
    
    Result
    [1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7, 6, 11, 16]`}</SyntaxHighlighter>

            <p>If we change the direction order to Right, Left, Up, Down we get a zig zag across right, down, across
                left pattern as follows.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{` private int[][] directions = new int[][] {
{0, 1}, //RIGHT
{0, -1}, //LEFT
{-1, 0}, // UP
{1, 0} // DOWN
};

int[][] testMatrix = new int[][] {
        {1,2,3,4,5},
        {6,7,8,9,10},
        {11,12,13,14,15},
        {16,17,18,19,20},
    };

[1, 2, 3, 4, 5, 10, 9, 8, 7, 6, 11, 12, 13, 14, 15, 20, 19, 18, 17, 16]
`}</SyntaxHighlighter>

            <h5 id={"bfs"}>2D Array Breadth First Search</h5>

            <p>With breadth first search we start at a location in the 2D array and we spiral out of it adding each
                position (row,column) to the queue if not already visited and then spiraling out from each of these.
                This approach is usually done iteratively and follows the standard approach of adding each item next to
                the selected row column to a queue and then taking the next item off the queue and adding its
                neighbours onto the queue if they have not already been visited.</p>

            <p>For tracking we have visited a position we use a helper pair class.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static class Pair {

    public int row;
    public int column;

    public Pair(int row, int column) {
        this.row = row;
        this.column = column;
    }

    @Override
    public String toString() {
        return this.row + ":" + this.column;
    }
}`}</SyntaxHighlighter>

            <p>We have a first call to traversal that will set the seen array to track if we have seen values by
                recreating matrix as boolean false. And initialise an array of integers.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int[] bfsTraversal(int[][] matrix) {
    boolean[][] seen = new boolean[matrix.length][matrix[0].length];

    //values length is the area of the 2D array
    int[] values = new int[matrix.length * matrix[0].length];

    bfs(matrix, values, seen);

    return values;
}`}</SyntaxHighlighter>

            <p>We now have the main BFS method that will create a queue, stick the first point on it (0,0) and then
                iterate over each direction and add these if valid (in the 2D array) or not already been seen to be
                processed. This has a space of <i>O(n)</i> for the seen matrix and values. The time complexity is
                also <i>O(n)</i>.
            </p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public void bfs(int[][] matrix, int[] values,  boolean[][] seen) {
    Queue<Pair> next = new LinkedList<Pair>();

    // start in top left
    int row = 0;
    int column = 0;
    //set a starting position and its been seen
    next.add(new Pair(row,column));
    seen[row][column] = true;
    int valueIdx = 0;
    // while queue is not empty
    while(!next.isEmpty()) {
       Pair idx = next.poll();
       System.out.println(next);
       row = idx.row;
       column = idx.column;
       values[valueIdx] = matrix[row][column];
       // added value now move to add next
       valueIdx++;

        for(int i = 0; i<directions.length; i++) {
            int newRow = row +  directions[i][0];
            int newColumn = column + directions[i][1];


            System.out.println("newRow = " + newRow + " newCol = " + newColumn);
            // if not already visited and a valid row,col then add to be processed
            if(newRow >= 0 && newRow < matrix.length && newColumn >= 0 &&
                newColumn < matrix[0].length && seen[newRow][newColumn] == false) {
                next.add(new Pair(newRow, newColumn));
                seen[newRow][newColumn] = true;
            }
        }
    }
}`}</SyntaxHighlighter>

            <p>This gives the following result on the test data provided of traversal with directions of Up, Right,
                Down, Left of a zig zag pattern.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`int[][] testData = new int[][]{
             {1,2,3,4,5},
             {6,7,8,9,10},
             {11,12,13,14,15},
             {16,17,18,19,20}
          };
          
          [1, 2, 6, 3, 7, 11, 4, 8, 12, 16, 5, 9, 13, 17, 10, 14, 18, 15, 19, 20]
`}</SyntaxHighlighter>

            <h4>Which search is better to use?</h4>

            <p>Breadth first search is good for finding items close together.</p>

            <h4>Tackling 2D Array Questions</h4>

            <p>When getting a question on 2D arrays you should focus on the values each item in the inner array. They
                are usually limited such as one of three kind of values or unlimited can be anything. A question to ask
                is there a relationship between values? Next question is there a repeated sub-problem to solve (e.g. how
                many steps to take from value A to B). We want to think about sequential order rather than search
                approach. Then we can scan 2D array to find value to solve the problem. Solve this sub-problem. Then
                continue sequential search to the end.</p>

            <h4>Problem 1: Number of Islands</h4>

            <p><a href={"https://leetcode.com/problems/number-of-islands/"}>Leetcode</a> question for number of islands.
                <i> Given a 2D array containing only 1s representing islands and 0 representing water. Count the number
                    of
                    islands. An island is land connected vertically or horizontally.</i> This is an example of a limited
                value question.
            </p>

            <p>Questions to ask, are the edges of the 2D array classed as water? Yes they are.</p>

            <p>Edge cases single islands, empty array, empty nested array. Does the order of traversal matter? Where to
                start? How do we ensure we do not double count the islands?</p>

            <h5>The Approach</h5>
            <p>For this question we can traverse from the top left all the way through the 2D array rather than use DFS
                or BFS we can use sequential search which saves on space complexity. When we discover a
                1 we do a dfs or a bfs search to find the island until the boundary or 0. We increment the number of
                islands by 1 and
                we record these as visited by flipping its value to 0 rather than create another array. Then we continue
                traversal sequentially and ignore any already visited or 0 until we find the start of the next
                island.</p>

            <p>The coded solution here is using BFS as the solution to the sub-problem. It can also be done with DFS.
                Comparing the two solutions BFS is in our approach is slightly more efficient. First time complexity our
                sequential search touches each element in the array. And this is O(NxM). Space complexity is the maximum
                size of the queue in the BFS which is the Max(N,M) as it will only be the size of diagonal of it so we
                are constrained by the farthest width of the structure so M or N. This may not be the case in all BFS
                solutions. For DFS the space complexity could hold the entire grid in the stack so O(MxN). The time
                complexity is the same as O(NxM) as it touches each item in array.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int numIslands(char[][] grid) {
        
        if(grid.length == 0) return 0;
        
        int totalIslandCount = 0;

        
        // sequentially iterate over each cell in grid
        for(int row = 0; row<grid.length; row++) {
            for(int col = 0; col<grid[row].length; col++) {
                // do a BFS on each cell 
                boolean isIsland = bfs(grid, row, col);
                if(isIsland) {
                    totalIslandCount++;
                }
            }
        }
        
        return totalIslandCount;
        
    }
    
    static class Pair {
        
        public int row;
        public int column;
        
        public Pair(int row, int column) {
            this.row = row;
            this.column = column;
        }
        
    }
    
    private int[][] directions = new int[][]{
        {-1,0}, //UP
        {0,1}, //RIGHT
        {1,0}, //DOWN
        {0,-1} // lEFT
    };
    
    
    // is in bounds, not visited already and is an island
    private boolean isValidMove(char[][] grid, int row, int column) {
        if(row < 0 || column < 0 || row >= grid.length || column >= grid[row].length 
            || grid[row][column] == '0') {
            return false;
        } else {
            return true;
        }
        
    }
    
    public boolean bfs(char[][] grid, int row, int column) {
        boolean isIsland = false;
        // add the first item but check if its a 1 and not already visited
        if(grid[row][column] == '1') {
            Queue<Pair> next = new LinkedList<Pair>();
        
            next.add(new Pair(row, column));
      
     
    
            isIsland = true;
            // if visited we flip it to zero so its seen as visited from now on
            grid[row][column] = '0';
            while(!next.isEmpty()) {
            
            Pair nextPair = next.poll(); 
            
            // iterate over each direction
            for(int i = 0; i<directions.length; i++) {
                int[] direction = directions[i];
                int newRow = nextPair.row + direction[0];
                int newColumn = nextPair.column + direction[1];
                
                // if is valid move and not visited
                if(isValidMove(grid, newRow, newColumn)) {
                    next.add(new Pair(newRow, newColumn));
                    // mark as visited by flipping it from 1 to 0
                    grid[newRow][newColumn] = '0';
                }

            }
        }
        }
            
        return isIsland;
        
    }`}</SyntaxHighlighter>

            <h3 id={"Tree"}>Trees</h3>

            <h5>Tree Breadth First (Level Order Traversal)</h5>

            <p>Here we are using a BFS basically to go through each level of the tree. We use a queue to push each
                node
                on. Then take off the queue the first node then print the data and adds its connected nodes to the
                queue. We then repeat this while the queue is not empty.</p>

            <p>This technique is <i>O(n)</i>.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`boolean breadFirstSearch(Node root, int searchKey) {
        if (root == null) {
            return false;
        }

        // Queue to hold the nodes visiting
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        // loop over queue items.
        while (!queue.isEmpty()) {
            Node current = queue.remove();
            System.out.println(current.key);
            if (current.key == searchKey) {
                return true;
            }
            queue.addAll(current.children);
        }
        return false;
    }`}</SyntaxHighlighter>


            <h3 id={"Graphs"}>Graphs</h3>

            <p>Graphs are made up on vertices (nodes) and edges. A graph can contain cycles where a tree cannot. Where
                nodes have a circular connections. A vertex can have a cycle to itself. Graphs can have undirected edges
                where you can traverse in both directions. Directed graphs are where the edges have specific
                directions. The edge can be directed both ways or only one way. Any undirected graph can be seen as a
                directed graph where each edge is directed both ways. Graphs can also have weights associated
                with edges, where they have a cost of traversing different nodes.</p>

            <h4 id={"Representations"}>Representations</h4>

            <p><strong>Edge List</strong> represents the pairs of edge connections.</p>

            <p><strong>Adjacency list</strong> represents graphs where the index in the array is the vertex with a list
                of connected
                vertices. This only works with integers. If you have string values such as A,B,C this can be represented
                as a MAP or map the index to the letter. The benefit of adjacency list is fast lookup.</p>

            <p><strong>Adjacency Matrix</strong> where each row is the vertex and if its connected to an edge then we
                mark it as 1 at the connected vertex position in the matrix row if no connection mark it as 0. This
                approach uses a lot of space to store it.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`    // Represents each connection with starting node and ending node.
    private int[][] edgeList = {{0, 2}, {1, 3}, {2, 3}, {2, 4}, {3, 5}, {4, 5}};
    // Rows are the nodes with the index matching and a 1 is representing a connection.
    private int[][] adjMatrix = {
            {0, 0, 1, 0, 0, 0},
            {0, 0, 0, 1, 0, 0},
            {0, 0, 0, 1, 1, 0},
            {0, 0, 0, 0, 0, 1},
            {0, 0, 0, 0, 0, 1},
            {0, 0, 0, 0, 0, 0}};
    // Index is node and list is values associated. Most efficient memory wise.
    private int[][] adjList = {{2}, {3}, {3, 4}, {5}, {5}, {}};`}</SyntaxHighlighter>
            <h5>Converting a Question to a Adjacency List</h5>
            <p>When cracking a coding question that looks like it should be a graph the best thing to do is to convert
                it into a Adjacency List.</p>

            <p>For example this <a href={"https://leetcode.com/problems/time-needed-to-inform-all-employees/"}>Time
                Needed to inform all employees</a> question. The manager list represents a graph and can be converted to
                an adjacency list.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`// convert array to adjacency list
             int[] managers = new int[]{2,2,4,6,-1,4,4,5};

             List<List<Integer>> adjGraph = new ArrayList<>();

             // prepopulate

             for(int i = 0; i<managers.length; i++) {  // O(n)
                 adjGraph.add(i, new ArrayList<Integer>());
             }

             // then assign the managers to subordinates inverse it
             for(int i = 0; i<managers.length; i++) {  // O(n)
                 // ignore manager
                 if(managers[i] != -1){
                     adjGraph.get(managers[i]).add(i);
                 }
             }

             System.out.println(adjGraph);`}</SyntaxHighlighter>

            <h5>Converting a Adjacency Matrix to a Adjacency List</h5>
            <p>To do this you can simply create a list of lists the length of the matrix. The iterate through the
                matrix row by row from left to right with a double for loop. Then add into the adjacency list if
                the matrix value is 1.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static List<List<Integer>> matrixToList(int[][] matrix) {
         List<List<Integer>> adjList = new ArrayList<>();
         // pre create lists
         for(int i = 0; i<matrix.length; i++) {
             adjList.add(i, new ArrayList<>());
         }
         // insert the 1s in the matrix to correct place in list
         // by iterating row by row of matrix
         for(int i = 0; i<matrix.length; i++) {
             for(int j = 0; j<matrix[i].length; j++) {
                 if(matrix[i][j] == 1) {
                     adjList.get(i).add(j);
                 }
             }
         }


         System.out.println(adjList);
         return adjList;
     }`}</SyntaxHighlighter>

            <h4 id={"Traversal"}>Traversing a Graph</h4>

            <p>The difference between a Graph and Tree is that a graph may have loops, it has no root node and edges
                can be directed or undirected.</p>

            <h4 id={"gbfs"}>Graph Breadth First Search</h4>

            <p>You begin with your starting node provided in the graph and the list of vertices. You again use a
                queue
                data structure to hold the nodes when processing them and this time you are also required to have a
                map/array of visited nodes. Firstly start with all nodes marked as unvisited. Start at the starting
                node
                add to queue then while queue is not empty do the following display data, remove node from queue,
                for
                all adjacent vertices to the node add to the queue. Mark node as visited and repeat. </p>

            <h5>Graph Breadth First Search (Node)</h5>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`if (root == null) {
            return Collections.emptyList();
        }

        // Hold a list of visited nodes to protected against cycles
        List<Node> visited = new ArrayList<>();
        List<Integer> foundKeys = new ArrayList<>();
        // Queue to hold the nodes visiting
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        // loop over queue items.
        while (!queue.isEmpty()) {
            Node current = queue.remove();
            System.out.println(current.key);
            foundKeys.add(current.key);
            visited.add(current);

            // only check those not already visited
            for (Node adjacentNode : current.adjacentNodes) {
                if (!visited.contains(adjacentNode)) {
                    queue.add(adjacentNode);
                }
            }
        }
        return foundKeys;
    }`}</SyntaxHighlighter>

            <h5>Graph Breadth First Search (Adjacency List)</h5>
            <p>In the breadth first search for an adjacency list we track the vertex visited to protect against cycles.
                The we iterate through the connections for each node we are working on starting from a starting node. If
                we have not already visited a node we add it to the queue to be processed. This is then processed in the
                same way once removed from the queue.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`int[][] graphAdj = new int[][]{
              {1,3},
              {0},
              {3,8},
              {0,4,5,2},
              {3,6},
              {3},
              {4,7},
              {6},
              {2}
              };`}</SyntaxHighlighter>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static int[] bfs(int[][] graph) {
    if(graph.length == 0) {
        return new int[0];
    }

    int[] path = new int[graph.length];
    Queue<Integer> next = new LinkedList<>();
    int pathIdx = 0;
    boolean[] visited = new boolean[graph.length];
    // add starting vertex
    next.add(0);
    visited[0] = true;
    while(!next.isEmpty()) {
        int vertex = next.poll();
        // add to path
        path[pathIdx] = vertex;
        pathIdx++;
        // add the children
        int[] connections = graph[vertex];
        for(int i = 0; i<connections.length; i++) {
            // if not already visited add to be processed
            if(!visited[connections[i]]) {
                // next item to process in BFS
                next.add(connections[i]);
                // visited
                visited[connections[i]] = true;
            }
        }
    }
    return path;
}`}</SyntaxHighlighter>

            <h4 id={"gdfs"}>Graph Depth First Search</h4>

            <p>For depth first search of a graph you have the starting node which you place onto a stack. Pop the
                stack and print data. Then mark as visited. For all nodes connected to the starting node and not visited
                push onto the stack, continue while stack is not empty.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`List<Integer> depthFirstSearch(Node node) {
        if (node == null) {
            return Collections.emptyList();
        }

        List<Integer> foundKeys = new ArrayList<>();
        List<Node> visited = new ArrayList<>();
        Deque<Node> stack = new LinkedList<>();

        stack.addFirst(node);

        while (!stack.isEmpty()) {
            Node popped = stack.removeFirst();

            // May already have been visited from another node adjacent nodes
            if(!visited.contains(popped)) {
                System.out.println(popped.key);
                foundKeys.add(popped.key);
                visited.add(popped);
            }

            for (Node adjacent : popped.adjacentNodes) {
                if (!visited.contains(adjacent)) {
                    stack.addFirst(adjacent);
                }
            }

        }
        return foundKeys;
    }`}</SyntaxHighlighter>

            <h4>Graph Depth First Search (Recursive Adjacency List)</h4>

            <p>In the recursive approach with the adjacency list we simply call itself again for each node that is being
                processed and it will
                return once all the nodes are visited. We track the path by a list that we add to on each recursive
                call this list gets mutated on each call recursively so then we get the final ordered result.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static int[] dfsR(int[][] graph) {
         List<Integer> path = new ArrayList<>();
         dfsRecursive(graph, 0, new boolean[graph.length], path);
         return path.stream().mapToInt(Integer::intValue).toArray();
     }
 
     static void dfsRecursive(int[][] graph, int vertex, boolean[] visited, List<Integer> path) {
         path.add(vertex);
         // mark as visited
         visited[vertex] = true;
         // try connections
         int[] connections = graph[vertex];
         // process each connection via dfs
         for(int i = 0; i<connections.length; i++) {
             if(!visited[connections[i]]) {
                 dfsRecursive(graph, connections[i], visited, path);
             }
         }
     }`}</SyntaxHighlighter>

            <p>We have seen with graphs that we can represent them in four different ways, adjacency list, edge list,
                matrix or nodes. We can approach the graph traversal using BFS or DFS and these can be done iteratively
                or recursively. Graphs have the added complexity of cycles within them so we have to track the visited
                vertices and not process them again to stop going into a infinite loop.</p>

            <h4>Graph Interview Questions</h4>

            <p>Questions to ask when looking at graph problems in interviews are?</p>

            <ul className="text-list">
                <li>Does the graph contain cycles? Look in the question it may mention Tree Structure which cannot
                    contain cycles. Or you can ask this question. Think is is possible that a node may have more than
                    one parent? In a directed graph can happen but not be a cycle.
                </li>
                <li>Are there any unconnected parts in the graph? Ask a related sentence to the question if every x is
                    connected or has?
                </li>
                <li>Is the graph weighted?</li>
                <li>Is the graph directed? If it is a tree yes.</li>
                <li>Think of edge cases? Empty graph? Single graph? Ask interviewer if any test case they want to
                    share? Think we can have a heavily weighted single side graph? Like binary tree being a linked list.
                </li>
            </ul>

            <p>An example question for using DFS with a graph is <a
                href={"https://leetcode.com/problems/time-needed-to-inform-all-employees/"}>time needed to inform all
                employees</a>. This question states a manager and the time to inform all its employees who can also be
                managers and have a inform time and so on. We can use DFS and track the max it takes to inform employees
                at a level. Repeating this process and keeping the max only.</p>

            <h4 id={"DAG"}>Directed Acyclic Graph</h4>

            <p>A directed acyclic graph is a graph that has directed edges byt no cycles within it. This type of graph
                can be topologically sorted.</p>

            <h5>Topological Sort</h5>
            <p><strong>In degree value</strong> is the number of edges entering into a vertex. For topological sort to
                work the graph cannot contain cycles as these will not be able to ever have an in degree of 0.</p>
            <p>Topological sort works by taking a node with a 0 degree, adding it to the sorted list of nodes and then
                removing its edges and decreasing the resulting in degree of these removals, repeating this process
                until the graph is sorted in topological order. If there are any remaining vertices then it is not a
                directed acyclic graph. An example can be seen by <a
                    href={"https://www.geeksforgeeks.org/topological-sorting/"}>Geeks for Geeks</a>.</p>

            <p>If a graph does have a cycle it is impossible to reduce the in degree of the vertices in the cycle to
                0.</p>

            <p>The following example of <a href={"https://leetcode.com/problems/course-schedule/"}>Course
                Schedule</a> problem can be solved with topological sort but working out if it can be sorted and if any
                remaining vertices not sorted means they are in a cycle. The algorithm works by creating lists of in
                degree and the adjacency list. We then add the vertices with in degree 0 to the stack to be processed.
                We reduce the connected vertices in degree by 1 when we remove that vertex with degree 0 and repeat the
                cycle. If the number of courses do not match the number of vertices in the sorted list then we know that
                there is a cycle and you cannot complete all courses.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public boolean canFinish(int numCourses, int[][] prerequisites) {
        
        if(prerequisites.length == 0)
            return true;
        
        // degrees
        // adjacency list
        List<Integer> degrees = new ArrayList<>();
        List<List<Integer>> adjacency = new ArrayList<>();
           
        // number of courses
        for(int i = 0; i < numCourses; i++) {
            // set initial degree of zero
            degrees.add(i, 0);
            // add empty array list of adjacency
            adjacency.add(i, new ArrayList<>());
        }
        
        for(int i = 0; i < prerequisites.length; i++) {
            int[] pre = prerequisites[i];
            // add the edge between the vertex and its prerequisite
            adjacency.get(pre[1]).add(pre[0]);
            // increment the degrees in for that vertex
            degrees.set(pre[0],degrees.get(pre[0])+1);
        }
        
        System.out.println("Degree = " + degrees);
        System.out.println(adjacency);
        
        // start with a node with degree 0
        // store the indegrees with a stack
        Deque<Integer> verticesWithZeroDegree = new LinkedList<>();
        
        // add all the zero vertices to stack
        for(int i = 0; i<degrees.size(); i++) {
            if(degrees.get(i) == 0) {
                // add i as vertex
                verticesWithZeroDegree.addFirst(i);
            }
        }
        
        System.out.println(verticesWithZeroDegree);
        
        int count = 0;
        // take the next vertex with in degree zero
        while(!verticesWithZeroDegree.isEmpty()) {
            int vertex = verticesWithZeroDegree.removeFirst(); // O(n)
            // processing a course increment the count
            count++;
            // get adjacent nodes for vertex
            List<Integer> adjacent = adjacency.get(vertex);
            
            for(int edge = 0; edge<adjacent.size(); edge++) { // O(n)
                // next edge
                int next = adjacent.get(edge); 
                // reduce the indegree of next
                // replace the item 
                degrees.set(next, degrees.get(next) - 1);
                System.out.println("Degree for " + next + " " + degrees.get(next));
                if(degrees.get(next) == 0) {
                
                    // if in degree changes to 0 add to stack to be processed
                    // add the vertex
                    verticesWithZeroDegree.addFirst(next);
                    System.out.println(verticesWithZeroDegree);
                }
            }
            
        }
        
        // compare the num of courses and make sure all are processed
        return count == numCourses;
        
    }`}</SyntaxHighlighter>

            <p>Time analysis is <i>O(P+n^2)</i> P is building the adjacency and the degree. The N^2 is due to a worst
                case where a node maybe connected to all other nodes so you iterate the node and all connected nodes.
            </p>

            <h4 id={"weighted"}>Weighted Graph Shortest Path</h4>

            <h4>Dijkstras Shortest Path for Graphs (Greedy)</h4>

            <p>The Greedy paradigm works for optimisation problems and ones which are looking for the maximum or the
                minimum. </p>

            <p>Dijkstras algorithm is a simple algorithm for finding the shortest path tree from source vertex to
                all other vertices in the graph on a weighted graph. It only works when the weights are all non
                negative and the graph is directed and weighted. It works by maintaining two sets one for vertices on
                the
                shortest path and another for vertices not yet included this second starts out with a distance of
                infinity for each unchecked vertex. The main step is finding the next shortest vertex from source from
                the set not included yet. We say this is a <strong>greedy</strong> step as it chooses the shortest at
                each selection. It can be implemented using a min heap (Priority Queue) of vertices keyed by their
                weight
                values.</p>

            <p>Lets walk through an example. Say we have a graph of 6 vertices labelled 0 to 5. We are starting at
                vertex 0. We keep a set of vertices to the distance from node 0. At the beginning these are all
                defaulted to infinity. Obviously we can state that node 0 is a distance of 0 from itself so can update
                the distance set for vertex 0 to 0. We then traverse from 0 to each node connected and we set the weight
                in the distance set. For example 0 connects to 1 with a weight of 4 and vertex 2 with a weight of 2. We
                update the distance set with these values. We leave nodes we cannot travel too as infinity. Then which
                node do we move to now we take the greedy approach and move to the node which is the least distance
                away. We then repeat the process of trying to move to each connected node and recording the weight to
                get there including previous weights if already traversed from the starting node and updating from
                infinity. If the recorded distance set has a lower value we leave it. In this example we can traverse
                from vertex 2 to vertex 3 with a weight of 6 inserting into our distance set a distance of 6 + 2 the
                previous vertex weight plus this one and we can also do vertex 4 with a weight of 5 giving a final
                result of 7. We then marked this node
                as fully traversed. We then look in our set of distances and take the next one that is not complete and
                select it. We then traverse again repeating the pattern from this node to each connected node and record
                its distance from the starting node of vertex 0. When traversing other nodes they may have shorter
                distances than those stored in the distance set. If this is the case we update the distance set with
                this new shorter distance.</p>

            <p>If we complete processing all nodes and the distance set contains an infinity still we know that we
                cannot traverse all nodes. Any of the nodes with infinity remaining.</p>

            <ul className="text-list">
                <li>Initialise all distances from the source node to other nodes with infinity and to the source as
                    0. This states they have not been visited yet.
                </li>
                <li>Now select the current node which will be the source to begin. In future iterations it is the
                    closest to source. This can be found with a priority queue.
                </li>
                <li>From the current node update all connected nodes with the distance if shorter to connect to them
                    from the current setting of infinity or its setting from a previous route.
                </li>
                <li>Mark fully visited edges as complete and then continue to select the next shortest unvisited node.
                </li>
                <li>Repeat this process until found the target node or all nodes are visited.
                </li>
            </ul>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`    static class Pair {        
        public int target;
        public int weight;
        
        public Pair(int target, int weight) {
            this.target = target;
            this.weight = weight;
        }
        
        @Override
        public String toString() {
            return this.target + ":" + this.weight;
        }
    }
    // Using Dijkstra
    public int networkDelayTime(int[][] times, int n, int k) {
        // dijkstra
        // we choose smallest value from a priority queue (min heap)
        // max value will be the delay
        
        // adjacency list of source node to target and weight pair
        List<List<Pair>> adjList = new ArrayList<>();
        
        // as no negative represent infinity as negative
        // holds the current distances to each node from start
        // zero indexed array so need to shift down vertex indices to store in here
        int[] distances = new int[n];
        // track once we have set all the connected nodes done for 
        boolean[] completed = new boolean[n];
        
        // populate infinity distances
        for(int i = 0; i<n; i++) {
            adjList.add(i, new ArrayList());
            distances[i] = Integer.MAX_VALUE;
        }
        
        // starting node is a distance of 0
        distances[k-1] = 0;
        
        // takes the least weighted distance for each value
        Comparator<Integer> compare = new Comparator<Integer>() {
            @Override
            public int compare(Integer a, Integer b) {
                return Integer.compare(distances[a], distances[b]);
            }
        };
        
        PriorityQueue<Integer> priority = new PriorityQueue(compare);
        
        // add the first starting node
        priority.add(k-1);
        
        // populate the adjacency list on times array of source node, target node and the weight
        for(int i = 0; i< times.length; i++) {
            // add value
            int source = times[i][0];
            int dest = times[i][1];
            int weight = times[i][2];
            adjList.get(source-1).add(new Pair(dest-1, weight));
        }
        
        System.out.println(adjList);
        
        while(!priority.isEmpty()) {
            // take the vertex with least priority the smallest distance using the distance array
            int source = priority.poll();
            // get current weight of getting to this node so far
            int sourceWeight = distances[source];
            
            // get connected nodes
            List<Pair> destinations = adjList.get(source);
            
            // iterate each connection 
            for(Pair neighbour: destinations) {
                // calculate the current nodes weight + the new weight to get to this 
                // target node
                int totalDistance = neighbour.weight + sourceWeight;
                // if the new total distance is less than the old 
                // update it
                if(distances[neighbour.target] > totalDistance) {
                    distances[neighbour.target] = totalDistance;
                }
                System.out.println(Arrays.toString(distances));
                // add the next node to priority queue for processing
                // unless we have completed with this node as in we have iterated all its connected nodes
                if(!completed[source]) {
                    priority.add(neighbour.target);
                }
            }
            completed[source] = true;
            
        }
        

        System.out.println(Arrays.toString(distances));
}`}</SyntaxHighlighter>

            <p>The time complexity of the above setting up the adjacency list iterates over the number of edges so we
                have a time complexity <i>E</i>. Every time we shuffle the priority queue the minimum heap it costs <i>Log
                    V</i>. Resulting in a time complexity of <i>V + E * log V</i>. Space with <i>O(E + N)</i> for the
                adjacency list.</p>

            <h5>Dealing with Negative Weights? Bellman Ford</h5>

            <p>We need to use the Bellman Ford Algorithm when finding the shortest path with negative weights. The
                algorithm does not work though if there is a negative cycle. It does allow us to check for negative
                cycles. You complete the bellman ford algorithm for <i>n-1</i> items and then one more and if it
                continues then the graph must have a negative cycle (which can be made up of positive and negative
                weights in the path but with an overall negative weight). This is
                our first dynamic programming solution. Dynamic programming takes the greedy method further by
                understanding we need to investigate every path to find the optimal answer but it also recognises that
                we repeat traversals when checking every possible path. Where we can optimise this repeatable sub
                problem
                of repeated traversals. This is memoization as discussed in the dynamic programming section. The
                algorithm is much simpler than Dijkstra but is slower.</p>

            <ul className="text-list">
                <li>Initialise all distances from the node to infinity and to the source as 0.</li>
                <li>Iterate for the number of vertices - 1 times.</li>
                <li>In the iteration iterate all edges. If the distance from the source node to the target node node can
                    be shortened by taking an edge the distance is updated to the new lower value and stored in the
                    distances list.
                </li>
                <li>Track for each iteration if there has been any updates if none we can break out and finish.</li>
                <li>Since the longest path without cycle is V-1 the edges must be scanned V-1 times.</li>
                <li>A final scan can be performed and if any edges are updated that means that there must be a negative
                    cycle.
                </li>
                <li>The list of distances contains all the shortest distances to each node from the source node.</li>
            </ul>

            <p>The time complexity is <i>O(v*e)</i> with a space complexity of <i>O(v)</i>.</p>

            <p>If there is a negative cycle there is not much you can do.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public int bellman(int[][] times, int n, int k) {
        
        // as no negative represent infinity as negative
        // holds the current distances to each node from start
        // zero indexed array so need to shift down vertex indices to store in here
        int[] distances = new int[n];
       
        // init all distances to infinity
        for(int i = 0; i<n; i++) {
            distances[i] = Integer.MAX_VALUE;
        }
        
        // starting node is a distance of 0
        distances[k-1] = 0;
        System.out.println(Arrays.toString(distances));
        
        // iterate code n-1 times for the less times of the number of nodes
        // as the algorithm states
        for(int i = 0; i<n-1; i++) {
            // if no updates we have done this cycle and break as complete
           int updates = 0;
            // iterate all the edges from the times array which is already edge list
           for(int j = 0; j<times.length; j++) {
               // get the nodes and the weight
               int source = times[j][0];
               int target = times[j][1];
               int weight = times[j][2];
               
               // if the source distance add the new weight is less
               // than the distance already for the target then update it
               // subtract 1 as we are zero indexed in distances
               // check first we are not at INT max value (infinity) for the distance so we can traverse it
               if(distances[source-1] != Integer.MAX_VALUE && distances[source-1] + weight < distances[target-1]) {
                   System.out.println(distances[source-1] + " weight: " + weight + " distance:" + distances[target-1]);
                   distances[target-1] = distances[source-1] + weight;
                   updates++;
               }
           } 
            // no new updates we are done
            if(updates == 0) break;
        }
        
        int min = -1;
        
        System.out.println(Arrays.toString(distances));
        // take the max value from the arry
        for(int i = 0; i<distances.length; i++) {
            System.out.println(distances[i]);
            if(distances[i] == Integer.MAX_VALUE) {
                // cannot traverse all paths not updated the length
                return -1;
            }
            
            // take the max value of the distances which is the minimum
            min = Math.max(distances[i], min);
            System.out.println("Min:" + min + " " + distances[i]);
        }
        
        return min;
        
    }`}</SyntaxHighlighter>

            <h4 id={"trie"}>Retrieval Trees (Trie)</h4>
            <p>Trie trees are commonly used data structure for storing commonly strings as trees and making them
                searchable and insert in <i>O(m)</i> time where m is the length of the string. The space complexity is
                going to
                be <i>O(N*K)</i> where the N is the node size multiplied by the number of characters in alphabet as each
                character is stored. The space of a single word is <i>O(m)</i>. We keep a Tree starting with
                a empty root. Then we keep all children in the alphabet to this root so in the english language 26
                children to root. Each node is then made up of its character in the alphabet and its children which
                could be any of the 26 letters. To search for a word you start at the root and then navigate through
                each letter and letters in children until you terminate or reach the end of the words. Here you can
                see
                how auto complete can make suggestions for you for finishing word spellings.</p>

            <p>The below solution uses a MAP to store the characters we can optimise this and use a fixed size array to
                store the alphabet.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`class Trie {

    private TrieNode root = new TrieNode();
    
    static class TrieNode {
        // Could do this as a list of characters
        private Map<Character,TrieNode> children = new HashMap<>();
        
        // end of a word
        private boolean isEndOfWord;

        public TrieNode() {
            this.isEndOfWord = false;
        }
        
        public boolean containsKey(char letter) {
            return this.children.containsKey(letter);
        }
        
        public TrieNode get(char letter) {
            return this.children.get(letter);
        }
        
        public void put(char letter, TrieNode node) {
            this.children.put(letter, node);
        }
        
        public void setEndOfWord() {
            this.isEndOfWord = true;
        }
        
        public boolean isEndOfWord() {
            return this.isEndOfWord;
        }
        
    }
    
    public Trie() {
        
    }
    
    public void insert(String word) {
        TrieNode current = root;
        
        for(int i = 0; i<word.length(); i++) {
            if(current.containsKey(word.charAt(i))) {
                current = current.get(word.charAt(i));
            } else {
                TrieNode newNode = new TrieNode();
                // insert a new node
                current.put(word.charAt(i), newNode);
                // return this new node as the next
                current = current.get(word.charAt(i));
            }
        }
        // final letter so is end of word
        current.setEndOfWord(); 
    }
    
    private TrieNode searchPrefix(String word) {
        TrieNode current = this.root;
        for(int i = 0; i<word.length(); i++) {
            if(current.containsKey(word.charAt(i))) {
                current = current.get(word.charAt(i));
            } else {
                return null;
            }
        }
        
        return current;
    }
    
    public boolean search(String word) {
        TrieNode node = searchPrefix(word);
        return node != null && node.isEndOfWord();
    }
    
    public boolean startsWith(String prefix) {
        TrieNode node = searchPrefix(prefix);
        return node != null;
    }
}`}</SyntaxHighlighter>

            <p>A further optimised TrieNode that uses fixed length alphabet arrays can be seen as below.</p>
            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static class TrieNode {
        // Could do this as a list of characters
        private static final int ALPHABET_SIZE = 26;
        private TrieNode[] children;
        
        // end of a word
        private boolean isEndOfWord;

        public TrieNode() {
            this.isEndOfWord = false;
            this.children = new TrieNode[ALPHABET_SIZE];
        }
        
        public boolean containsKey(char letter) {
            return this.children[letter-'a'] != null;
        }
        
        public TrieNode get(char letter) {
            return this.children[letter - 'a'];
        }
        
        public void put(char letter, TrieNode node) {
            this.children[letter-'a'] = node;
        }
        
        public void setEndOfWord() {
            this.isEndOfWord = true;
        }
        
        public boolean isEndOfWord() {
            return this.isEndOfWord;
        }
        
    }
`}</SyntaxHighlighter>

            <h3 id={"Sorting"}>Sorting</h3>

            <h4>Introduction</h4>

            <p>Sorting is sorting there is natural order of sorting the ascending and descending of values by number
                value or letter. Usually though data sorted in computing is rarely isolated like this and is usually
                on
                a data record with a key which would have related <strong>satellite data</strong>. For memory
                efficiency
                we usually would manipulate the pointers to the records rather that the records themselves to save
                moving around all of this satellite data.</p>

            <p><strong>In place</strong> sorting algorithms are algorithms which transforms input using a data
                structure
                with only a small constant amount of extra storage space outside of the array to be sorted.</p>

            <table>
                <tr>
                    <th>Algorithm</th>
                    <th>Worst Case<br/>Running Time</th>
                    <th>Average Case<br/>Running Time</th>
                </tr>
                <tr>
                    <td>Bubble Sort</td>
                    <td><InlineMath math="\Theta(n^2)"/></td>
                    <td><InlineMath math="\Theta(n^2)"/></td>
                </tr>
                <tr>
                    <td>Selection Sort</td>
                    <td><InlineMath math="\Theta(n^2)"/></td>
                    <td><InlineMath math="\Theta(n^2)"/></td>
                </tr>
                <tr>
                    <td>Insertion Sort</td>
                    <td><InlineMath math="\Theta(n^2)"/></td>
                    <td><InlineMath math="\Theta(n^2)"/></td>
                </tr>
                <tr>
                    <td>Merge Sort</td>
                    <td><InlineMath math="\Theta(n \lg n)"/></td>
                    <td><InlineMath math="\Theta(n \lg n)"/></td>
                </tr>
                <tr>
                    <td>Heapsort</td>
                    <td><InlineMath math="O(n \lg n)"/></td>
                    <td><InlineMath math="O(n \lg n)"/></td>
                </tr>
                <tr>
                    <td>Quicksort</td>
                    <td><InlineMath math="\Theta(n^2)"/></td>
                    <td><InlineMath math="\Theta(n \lg n)"/></td>
                </tr>
                <tr>
                    <td>Counting Sort</td>
                    <td><InlineMath math="\Theta(k + n)"/></td>
                    <td><InlineMath math="\Theta(k + n)"/></td>
                </tr>
                <tr>
                    <td>Radix Sort</td>
                    <td><InlineMath math="\Theta(d(n + k))"/></td>
                    <td><InlineMath math="\Theta(d(n + k))"/></td>
                </tr>
                <tr>
                    <td>Bucket Sort</td>
                    <td><InlineMath math="\Theta(n^2)"/></td>
                    <td><InlineMath math="\Theta(n)"/></td>
                </tr>
            </table>

            <h4 id={"Bubble"}>Bubble Sort</h4>
            <p>Bubble sort is not an efficient algorithm for sorting but is simple to understand. It simply moves
                the largest element up to the end of the list each run bubbling it up. And then does the same again
                for the list size - 1 the already sorted elements. It will compare each element on the bubble up and
                move the largest up to the final spot each time.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static int[] bubbleSort(int[] arr) {
   boolean hasSwapped = true;
   // iterate till we dont swap any
   while(hasSwapped) {
   hasSwapped = false;
       // start at 0 then compare each element
       // then start at 1 and so on
       for(int i = 0; i < arr.length-1; i++) {

            if(arr[i] > arr[i+1]) {
                int tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                hasSwapped = true;
            }
        }
   }
  return arr;
}`}</SyntaxHighlighter>

            <h4 id={"Selection"}>Selection Sort</h4>

            <p>Selection sorts iterates the whole list each time and ensures the first element is the smallest
                element
                after the run then applies again for the rest of the list with the smallest removed so finding the
                next
                smallest element.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static int[] selectionSort(int[] arr) {
     for(int i = 0; i<arr.length-1;i++) {
         int smallestPos = i;
         for(int j = i + 1; j<arr.length; j++) {
 
             if(arr[j] < arr[smallestPos]) {
                 smallestPos = j;
             }
 
         }
 
         // if i is not the smallest element swap with smallest
         if(i != smallestPos) {
             int temp = arr[i];
             arr[i] = arr[smallestPos];
             arr[smallestPos] = temp;
         }
     }
 
     return arr;
 }`}</SyntaxHighlighter>

            <h4 id={"Insertion"}>Insertion Sort</h4>

            <p>Lets now see our first sort not the quickest but a good place to begin. Insertion sort.</p>

            <p>Insertion sort can be efficient when sorting a list that is almost sorted and this can give us O(n)
                it
                also has a O(1) space complexity so is very memory efficient. The
                basic process is check the first item and leave where it is. We now look at the next item and
                compare to
                the first and insert it into the correct order by swapping. The in place sort orders the start of
                the
                list and you continually insert new items from the remaining unsorted list by compare and swap. This
                can
                be thought of like
                sorting cards you have a sorted list in your left hand and a unsorted in your right, then you take
                the
                next card from the right hand and insert into the correct place on the left hand.</p>

            <p>Insertion sort is also stable and in place.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static int[] insertionSort(int[] arr) {
 
    for(int i = 1; i<arr.length; i++) {
        int curr = arr[i];

        // move the elements in the sorted list to be ahead of the new curr eleemnt
        // [3,4,  choose 1  11, 2,5]
        // move 1 compare against 4 swap [3,1,4,11,2,5]
        // move 1 compare against 3 swap [1,3,4,11,2,5]
        int j = i-1;
        while(j>= 0 && curr < arr[j]) {
            arr[j+1] = arr[j];
            j--;
       }
       arr[j+1] = curr;

    }

    return arr;
}`}</SyntaxHighlighter>

            <h4>Insertion Sort Average Case</h4>

            <img width="90%" height="90%" src={Insertion1} alt="Insertion Sort Graph Image"/>

            <p></p>

            <img width="90%" height="90%" src={Insertion2} alt="Insertion Sort Graph Image"/>

            <p></p>
            <img width="90%" height="90%" src={Insertion3} alt="Insertion Sort Graph Image"/>

            <p></p>
            <img width="90%" height="90%" src={Insertion4} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={Insertion5} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={Insertion6} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={Insertion7} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={Insertion8} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={Insertion9} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={Insertion10} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={Insertion11} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={Insertion12} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={Insertion13} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={Insertion14} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={Insertion16} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={Insertion17} alt="Insertion Sort Graph Image"/>

            <h4>Insertion Sort Worst Case</h4>

            <p>The time complexity is explained thoroughly on this <a
                href={"https://www.happycoders.eu/algorithms/insertion-sort/#Worst-Case_Time_Complexity"}>site</a>.
            </p>

            {/*<img width="90%" height="90%" src={InsertionWorst1} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst2} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst3} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst4} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst5} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst6} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst7} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst8} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst9} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst10} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst11} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst12} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst13} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst14} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst15} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst16} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst17} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst18} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst19} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst20} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst21} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst22} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst23} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst24} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst25} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst26} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst27} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst28} alt="Insertion Sort Graph Image"/>*/}
            {/*<p></p>*/}
            {/*<img width="90%" height="90%" src={InsertionWorst29} alt="Insertion Sort Graph Image"/>*/}

            <h4>Insertion Sort Best Case</h4>

            <p>The time complexity of Insertion Sort best case is <i>O(n)</i> as in reality we scan through the
                whole
                array starting at the second element so <i>n-1</i> as we state the first element is the single
                sorted
                array. We only do the comparisons and no swaps in this case. Giving us a best case of <i>O(n)</i>.
            </p>

            <img width="90%" height="90%" src={InsertionBest1} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={InsertionBest2} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={InsertionBest3} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={InsertionBest4} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={InsertionBest5} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={InsertionBest6} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={InsertionBest7} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={InsertionBest8} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={InsertionBest9} alt="Insertion Sort Graph Image"/>
            <p></p>
            <img width="90%" height="90%" src={InsertionBest10} alt="Insertion Sort Graph Image"/>
            <p></p>

            <h4 id={"Merge"}>Merge Sort</h4>

            <p>Merge sort is a stable sort that is <InlineMath math="O(n \lg n)"/> for all time complexities. It is
                good as it guarantees the speed, but is not as space efficient as it has the auxiliary space
                requirement
                of <InlineMath math="O(n)"/></p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{` /**
      ** A stable and O(n log n) algorithm for all best/worst/average cases
      ** with a O(n) space complexity.
      ** Good as reliable on time, and stable but bad due to its space complexity
      **/
      static int[] mergeSort(int[] arr) {
         if(arr.length <= 1) {
             return arr;
         }

 // split list into two sides
         int midPoint = arr.length/2;
         int leftSize = midPoint;
         int rightSize = arr.length - midPoint;
         //System.out.println("Mid = " + midPoint);
         int[] left = new int[leftSize];
         int[] right = new int[rightSize];

         // fill each side with left side and then right side
         for(int i = 0; i<midPoint; i++) {
             left[i] = arr[i];
         }

         for(int i = midPoint; i<arr.length; i++) {
             // remember to subtract mid value
             right[i-midPoint] = arr[i];
         }

         // recursively split and then merge each side
         return merge(
             mergeSort(left),
             mergeSort(right));
      }
      
      static int[] merge(int[] left, int[] right) {
         int leftPtr = 0;
         int rightPtr = 0;

         int currPos = 0;
         int[] merged = new int[left.length + right.length];

         // merge the two parts
         while(leftPtr < left.length && rightPtr < right.length) {
             if(left[leftPtr] <= right[rightPtr]) {
                 merged[currPos] = left[leftPtr];
                 leftPtr++;
             } else {
                 merged[currPos] = right[rightPtr];
                 rightPtr++;
             }
             currPos++;
         }

         // any remaining are on order so merge in
         while(leftPtr < left.length) {
             merged[currPos] = left[leftPtr];
             currPos++;
             leftPtr++;
         }

         while(rightPtr < right.length) {
             merged[currPos] = right[rightPtr];
             currPos++;
             rightPtr++;
         }
         //System.out.println("Merged = " + Arrays.toString(merged));
         return merged;
      }`}</SyntaxHighlighter>

            <h4 id={"Quick"}>Quick Sort</h4>

            <p>Quick sort is a unstable sort that is <InlineMath math="O(n \lg n)"/> for best and average case
                but <InlineMath math="O(n^2)"/> for worst, when the pivot doesnt split the list as all the items are
                either larger or smaller than the pivot. It is good as it is usually fast, and it only requires
                storage
                for the call stack operations of <InlineMath math="O(log n)"/></p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`/** A non stable sort with good best and average case O(n log n) but a worst case of
      ** O(n^2). But has a good space complexity of O(log n) from the stack usage in recursive call.
       **
       **/
      static int[] quickSort(int[] arr, int begin, int end) {
         // empty or we have come to final match element partitioned
         System.out.println("Quick Sort " + begin + " : " + end);
             if(begin < end) {

             // partition the arr so all values less than pivot value before and all others after
             int pivotLocationAfterPartition = partition(arr, begin, end);

             quickSort(arr, begin, pivotLocationAfterPartition-1);
             // the negative and plus 1 results in leaving the sorted pivot in place
             quickSort(arr, pivotLocationAfterPartition+1, end);
         }
         return arr;
      }

         // take last element as pivot and swap all those smaller before and all
         // those larger after
      static int partition(int[] arr, int begin, int end) {
             int pivot = arr[end]; // random pivot but use last value
             // index of smaller element indicates the right position  found so far
             int i = begin-1;

             for(int j = begin; j<end; j++) {

                 if(arr[j] <= pivot) {
                 i++;
                 int swapTemp = arr[i];
                 arr[i] = arr[j];
                 arr[j] = swapTemp;
                 }

             }

             int swapTemp = arr[i+1];
             arr[i+1] = arr[end];
             arr[end] = swapTemp;
             System.out.println("Pivot = " + pivot + " : " + Arrays.toString(arr));
         return i+1;
      }`}</SyntaxHighlighter>

            <h3>Conclusion</h3>

            <p>Other sorts exist that can be faster such as Radix or Counting sorts but these are limited to
                specific
                inputs usually a small amount of integer size values.</p>

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

            <h3 id={"Array"}>Array</h3>

            <h4>Two Sum</h4>
            <h4>Container with Most Water</h4>
            <h4>Trapping Rainwater</h4>
            <h4>Kth Element</h4>

            <h4>Finding the Median of two sorted arrays</h4>

            <p>A question from <a href={"https://leetcode.com/problems/median-of-two-sorted-arrays/"}>leetcode</a>. We
                are tasked with finding the median of two sorted arrays. These arrays can be of a different length. We
                cannot merge and sort the arrays. The median is the middle value in a sorted array if the array is of
                even length we take the midpoint between the two middle numbers so we add them and divide by two.</p>

            <h3 id={"String"}>Strings</h3>

            <h4>Manipulating Chars</h4>

            <p>Chars are represented by their encoding table. Therefore you can manipulate chars by incrementing or
                decrementing them within the bounds of your alphabet. You can say if it is less than a or greater than
                z either plus 26 or subtract it. For example.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`
char z = 'z';
System.out.println("z=" + (int)z);

z += 3;
if(z > 'z') {
    z = (char)((int)z - 26);
}

System.out.println("Z rotated = " + z);

//Z=122
//Z rotated = c=99
                               `}</SyntaxHighlighter>

            <p>If we take the starting char of a. Then increment it beyong the alphabet we get the next encoded
                character as show below.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`char a = 'a';
        a+=25;
        // max char if we go over it will overflow
        System.out.println("a+25=" + a);
        // we would get {
        a++;
        System.out.println("a+26=" + a);
        // a+25=z
        // a+26={
        `}</SyntaxHighlighter>

            <h4>Rotate Cipher</h4>
            <p>A common cipher approach is to rotate all characters by a rotation number. For example in a word rotate
                each
                character by 3.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{` public static String rotateAnyCase(String a, int rotation) {
         StringBuilder sb = new StringBuilder();

         for(int i = 0; i<a.length(); i++) {
             char current = a.charAt(i);
             // do the integer increment to rotate it
             current = current += rotation;
             // if it is greater than z then restart it from the alphabet
             if(current > 'z' || current > 'Z') {
                 current = (char)((int) current - 26);
             }
             // add proper string to builder
             sb.append(current);
         }

         return sb.toString();

     }

//abc rotated = def
`}</SyntaxHighlighter>

            <h4>Typed Out Strings</h4>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{``}</SyntaxHighlighter>

            <h4>Permutations</h4>

            <p>A great resource on finding permutations is <a
                href={"https://www.techiedelight.com/generate-permutations-string-java-recursive-iterative/"}>techie
                delight</a>. This examples the two approaches recursive and iterative.</p>

            <p>We focus on the recursive here. This approach uses backtracking where we swap each of the remaining
                characters in the string with the first character then generating all remaining rest of the strings
                using recursive calls. The recursive call terminates when we have processed all the remainders.</p>

            <p>For example for ABC. First take the first character A and the remaining characters BC and CB. Then insert
                the first character A into each of these remaining characters and repeat this process. This case giving
                us ABC and ACB. With a final result of [ABC, ACB, BAC, BCA, CAB, CBA]</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static List<String> permutate(String str) {
         List<String> permutations = new ArrayList<>();
         permutate(str, "", permutations);
         return permutations;
     }

     static void permutate(String remainder, String ans, List<String> permutations) {
         // Done the prefix now its empty we have the final permutation so add to result
         if(remainder.length() == 0) {
             permutations.add(ans);
             return;
         } else {
             // iterate and permutate each character in remainder
             for(int i = 0; i<remainder.length(); i++) {
                 // take each letter in prefix
                 char letter = remainder.charAt(i);

                 //take the rest of the word without prefix
                 String rest = remainder.substring(0, i) + remainder.substring(i + 1);

                 // append the ans and the letter together and pass rest of string
                 System.out.println("letter="+letter+" ans+letter=" + ans+letter + " permutations=" + permutations);
                 permutate(rest, ans+letter, permutations);
             }
         }
     }`}</SyntaxHighlighter>

            <h4>Longest Substring without Repeating Characters</h4>
            <h4>Valid Palindrome</h4>

            <p>For finding a palindrome we can start from the outside of the string with two pointers then increment
                inward and check if they are equal. If they are equal all the way to the where the left and the right
                pointer meet then this is a valid palindrome.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`static boolean isPalindromeTwoPtrs(String s) {
        if(s.length() == 1) return true;
        int left = 0;
        int right = s.length()-1;
        
        // start from outside in as we want to detect if immediately
        // until they are equal positions
        while(left < right) {
            System.out.println(left + "->" + right);
            // we move out from the centre and if they dont match its not a palindrome
            if(s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }`}</SyntaxHighlighter>

            <h4>Almost Palindrome</h4>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`public boolean validPalindrome(String s) {        
        int start = 0;
        int end = s.length()-1;
        
        while(start < end) {
            if(s.charAt(start) != s.charAt(end)) {  
                // we check if the updated is a palindrome and return so we can only check once
                return (isPalindrome(s, start+1, end) || isPalindrome(s, start, end-1));
            }
            start++;
            end--;
        }
        
        return true;
    }
    
    // we dont need to delete just move the one index and check if still palindrome
    public boolean isPalindrome(String s, int start, int end) {
        //System.out.println("checking if palindrome " + s);
        
        while(start < end) {
            if(s.charAt(start) != s.charAt(end)) {
                return false;
            }
            start++;
            end--;
        }
        
        
        return true;
    }`}</SyntaxHighlighter>
            <h4>Longest Palindrome Substring</h4>

            <p><a href={"https://leetcode.com/problems/longest-palindromic-substring/solution/"}></a>.
                For odd and even palindrome we have to call findPalindrome twice one for the starting pointers on same
                index for odd length strings and one for when they start on different indexes for even length strings.
                We iterate over each character in the array call findPalindrome where we start at the pointers of left
                and right and expand out. We take the max of the two results. We take this result if its new length is
                bigger than the previously seen longest palindrome.
            </p>

        </div>
    ]


};


const AlgorithmsPage = () => {
    return (
        <BlogPage
            title={algorithms.title}
            contents={algorithms.contents}
            text={algorithms.text}
        />
    );
}


export default AlgorithmsPage;
