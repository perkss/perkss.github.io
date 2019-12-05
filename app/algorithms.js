import React from "react";
import BlogPage from './blog-page.js';
import {InlineMath} from 'react-katex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';

const algorithms = {
    title: 'Algorithms',
    contents:
        '',
    text: [
        <div>


            <h3>Introduction</h3>
            <h4>Algorithmic Thinking</h4>
            <h5>Finding a peak in a list of numbers</h5>
            <p>Lets start with our first and very simple algorithm that finds peaks if one exists in a list of numbers.
                To define this in mathematical form lets have a list of items [a b c d e f g h i] position 2 in the list
                of items is only a peak if <InlineMath math="b \geq a"></InlineMath> and <InlineMath
                    math="b \geq c"></InlineMath>.
                Position 9 is a peak if <InlineMath math="i \geq h"></InlineMath>. In plain english basically if either
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

        int midpoint = data.length/2;

        if(data[midpoint] < data[midpoint-1]) {

            int[] leftSide = new int[midpoint-1];
            System.arraycopy(data, 0,leftSide, 0, midpoint-1);
            return findPeak(leftSide);

        } else if( data[midpoint] < data[midpoint + 1]){

            int[] rightSide = new int[data.length - midpoint+1];
            System.arraycopy(data, midpoint+1,rightSide, 0, data.length - midpoint+1);
            return findPeak(rightSide);
        } else {
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
            <p>The time complexity of this approach is very similar to any divide and conquer algorithm we break the
                problem down and down again until size of the elements is 1 and get the base case. This is a constant
                time <InlineMath math="O(1)"></InlineMath> which is for
                the comparison checks looking at left comparison and right comparison. We then gather back up the single
                elements that have been divided which was for
                example <InlineMath math="T(n) = T(n/2) + 1"></InlineMath> then <InlineMath
                    math="T(n) = T(n/4) + 1"></InlineMath> this pattern continues which can be reverted from <InlineMath
                    math="T(n/2^k) + 1"></InlineMath> to be <InlineMath math="O (log 2 n)"></InlineMath>. Similar to
                this post <a
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

            <h3>Selections</h3>
            <h4>Hoare QuickSelect</h4>
            <h3>Sorting and Trees</h3>
            <h4>Insertion Sort</h4>
            <h4>Merge Sort</h4>
            <h4>Heaps and Heap Sort</h4>
            <h4>Binary Search Tree</h4>
            <h4>AVL Trees and Sort</h4>
            <h4>Counting Sort</h4>
            <h4>Radix Sort</h4>
            <h4>Lower Bounds</h4>
            <h3>Hashing</h3>
            <h4>Hashing with Chaining</h4>
            <h4>Table Doubling</h4>
            <h4>Open Addressing</h4>

            <h3>Numerics</h3>
            <h4>Integer Arithmetic</h4>
            <h4>Square Roots</h4>
            <h3>Graphs</h3>
            <h4>Breadth First Search</h4>
            <h4>Depth First Search</h4>
            <h3>Shortest Paths</h3>
            <h4>Single Source Shortest Problem</h4>
            <h4>Dijkstra</h4>
            <h4>Bellman Ford</h4>

            <h3>Dynamic Programming</h3>
            <h3>Advanced Topics</h3>


        </div>
    ]


};


const AlgorithmsPage = (props) => {
    return (
        <BlogPage
            title={algorithms.title}
            contents={algorithms.contents}
            text={algorithms.text}
        />
    );
}


export default AlgorithmsPage;
