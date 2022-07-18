import React from 'react';
import BlogPage from "../blog-page";
import Latex from 'react-latex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {HashLink as Link} from 'react-router-hash-link';
import {BlockMath, InlineMath} from 'react-katex';

const algorithms = {
    title: 'Searching Algorithms',
    contents:
        '',
    text: [
        <div>

            <ul className="text-list">
                <li><Link to={"#Introduction"}>Introduction</Link></li>
                <li><Link to={"#Midpoint"}>Midpoint</Link></li>
                <li><Link to={"#Selections"}>Selections</Link></li>
                <li><Link to={"#Search"}>Binary Search</Link></li>
            </ul>

            <h3 id={"Midpoint"}>Finding the Midpoint</h3>

            <p>Finding the midpoint in an array should be done using the following code if we are processing with
                specific start and end indexes. This is because of the risk of overflow. A great write up on this is
                found here at <a
                    href={"https://www.geeksforgeeks.org/start-end-start2-preferrable-method-calculating-middle-array-start-end2/"}>Geeks
                    for Geeks</a>.</p>

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true} wrapLines={true}>{`
        int midPoint = left + (right - left) / 2; // java will always round down with integer division`}</SyntaxHighlighter>

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

            <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true} wrapLines={true}>{`static boolean binarySearch(int[] arr, int key, int left, int right) {
        if(right < left) {
            return false;
        }
        System.out.println("right " + right + " left " + left);
        int midPoint = left + (right - left) / 2; // java will always round down with integer division
 
        System.out.println("mid = " + midPoint);
        if(arr[midPoint] == key) {
            return true;
        } else if(key < arr[midPoint]) {
            return binarySearch(arr, key, left, midPoint-1);
        } else {
            return binarySearch(arr, key, midPoint+1, right);
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

        </div>
    ]
}

const Searching = () => {

    return (
        <BlogPage
            title={algorithms.title}
            contents={algorithms.contents}
            text={algorithms.text}
        />
    );


};

export default Searching;