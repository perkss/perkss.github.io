import React from "react";
import BlogPage from './blog-page.js';
import Latex from 'react-latex';
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
                time <Latex>$O(1)$</Latex> which is for
                the comparison checks looking at left comparison and right comparison. We then gather back up the single
                elements that have been divided which was for example <Latex>$T(n) = T(n/2) + 1$</Latex> then <Latex>$T(n)
                    = T(n/4) + 1$</Latex> this pattern continues which can be reverted from <Latex>$T(n/2^k) +
                    1$</Latex>
                to be <Latex>$O (log 2 n)$</Latex>. Similar to this post <a
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


            <h3>Data Structures</h3>

            <h4>Introduction</h4>
            <p>Sets have already been covered in the Discrete Maths where they were usually fixed but sets that are
                manipulated by Algorithms
                can change by growing and shrinking over time, these sets are call dynamic. Algorithm may require the
                ability to insert, delete and test if items are contained in sets and we refer to these structures
                as <strong>dictionaries</strong>. Most dynamic sets assume that one of the objects attributes can
                uniquely identify it and this is referred to as a <strong>key</strong>. The object may also contain what
                is referred to as <strong>satellite data</strong>. Satellite data is the payload of the data which is
                not part of the structure of the data structure. If the key is unique then they can be ordered.</p>

            <h5>Stacks</h5>

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

            <h5>Queues</h5>

            <p>Queues follow a <i>first in first out</i> (FIFO) policy meaning the one deleted is the one
                that has spent the longest time in the set. Where insert are referred to as ENQUEUE and delete DEQUEUE.
                Items are enqueued at the <strong>tail</strong> and elements are dequeued at the <strong>head</strong>.
            </p>

            <h5>Linked Lists</h5>

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

            <h5>Sentinel Node</h5>

            <p>A sentinel node in a linked list is a dummy node with all the attributes of the other objects in the
                list, and if a nil is referenced in the linked list then it points to the sentinel node. Adding a
                sentinel node between the head and tail of a list can simplify the code due to not requiring so many
                checks. Adding a sentinel to a doubly linked list makes it a circular linked list with a sentinel
                node.</p>

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
