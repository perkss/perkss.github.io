import React from 'react';
import BlogPage from "../blog-page";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {HashLink as Link} from 'react-router-hash-link';
import {InlineMath} from 'react-katex';
import Insertion1 from "../../images/insertion-sort/random-order/Average1.jpeg";
import Insertion2 from "../../images/insertion-sort/random-order/Average2.jpeg";
import Insertion3 from "../../images/insertion-sort/random-order/Average3.jpeg";
import Insertion4 from "../../images/insertion-sort/random-order/Average4.jpeg";
import Insertion5 from "../../images/insertion-sort/random-order/Average5.jpeg";
import Insertion6 from "../../images/insertion-sort/random-order/Average6.jpeg";
import Insertion7 from "../../images/insertion-sort/random-order/Average7.jpeg";
import Insertion8 from "../../images/insertion-sort/random-order/Average8.jpeg";
import Insertion9 from "../../images/insertion-sort/random-order/Average9.jpeg";
import Insertion10 from "../../images/insertion-sort/random-order/Average10.jpeg";
import Insertion11 from "../../images/insertion-sort/random-order/Average11.jpeg";
import Insertion12 from "../../images/insertion-sort/random-order/Average12.jpeg";
import Insertion13 from "../../images/insertion-sort/random-order/Average13.jpeg";
import Insertion14 from "../../images/insertion-sort/random-order/Average14.jpeg";
import Insertion16 from "../../images/insertion-sort/random-order/Average16.jpeg";
import Insertion17 from "../../images/insertion-sort/random-order/Average17.jpeg";
import InsertionBest1 from "../../images/insertion-sort/best-case/Best1.jpeg";
import InsertionBest2 from "../../images/insertion-sort/best-case/Best2.jpeg";
import InsertionBest3 from "../../images/insertion-sort/best-case/Best3.jpeg";
import InsertionBest4 from "../../images/insertion-sort/best-case/Best4.jpeg";
import InsertionBest5 from "../../images/insertion-sort/best-case/Best5.jpeg";
import InsertionBest6 from "../../images/insertion-sort/best-case/Best6.jpeg";
import InsertionBest7 from "../../images/insertion-sort/best-case/Best7.jpeg";
import InsertionBest8 from "../../images/insertion-sort/best-case/Best8.jpeg";
import InsertionBest9 from "../../images/insertion-sort/best-case/Best9.jpeg";
import InsertionBest10 from "../../images/insertion-sort/best-case/Best10.jpeg";

const algorithms = {
    title: 'Sorting Algorithms',
    contents:
        '',
    text: [
        <div>

            <ul className="text-list">
                <li><Link to={"#Introduction"}>Introduction</Link></li>
                <li><Link to={"#Sorting"}>Sorting</Link></li>
                <ul className="text-list">
                    <li><Link to={"#Bubble"}>Bubble Sort</Link></li>
                    <li><Link to={"#Selection"}>Selection Sort</Link></li>
                    <li><Link to={"#Insertion"}>Insertion Sort</Link></li>
                    <li><Link to={"#Merge"}>Merge Sort</Link></li>
                    <li><Link to={"#Quick"}>Quick Sort</Link></li>
                </ul>
            </ul>

            <h3 id={"Sorting"}>Sorting</h3>


            <h4>Introduction</h4>

            <p>Sorting is sorting there is natural order of sorting the ascending and descending of values by number
                value or letter. Usually though data sorted in computing is rarely isolated like this and is usually
                on
                a data record with a key which would have related <strong>satellite data</strong>. For memory
                efficiency
                we usually would manipulate the pointers to the records rather that the records themselves to save
                moving around all of this satellite data.</p>

            <p>When doing time complexity analysis of sorting algorithms we know that when there are <InlineMath
                math="n"/> items we have <InlineMath math="n!"/> potential orderings of these items.</p>

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

        // move the elements in the sorted list to be ahead of the new curr element
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

        </div>
    ]
}

const Sorting = () => {

    return (
        <BlogPage
            title={algorithms.title}
            contents={algorithms.contents}
            text={algorithms.text}
        />
    );


};

export default Sorting;