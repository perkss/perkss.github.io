import React from 'react';
import BlogPage from "../blog-page";
import heap from "../../images/heap/max-heap.png";
import Latex from 'react-latex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {HashLink as Link} from 'react-router-hash-link';
import {BlockMath, InlineMath} from 'react-katex';

const algorithms = {
    title: 'Data Structures',
    contents:
        '',
    text: [
        <div>
            <ul className="text-list">
                <li><Link to={"#DataStructures"}>Data Structures</Link></li>
                <ul className="text-list">
                    <li><Link to={"#Set"}>Sets</Link></li>
                    <li><Link to={"#Stack"}>Stacks</Link></li>
                    <li><Link to={"#Queue"}>Queues</Link></li>
                    <li><Link to={"#LinkedList"}>Linked List</Link></li>
                    <ul className="text-list">
                        <li><Link to={"#cycle"}>Detecting Cycles</Link></li>
                        <li><Link to={"#reverse"}>Reverse</Link></li>
                    </ul>
                </ul>
                <li><Link to={"#Heap"}>Heap (Priority Queue)</Link></li>
                <ul className="text-list">
                    <li><Link to={"#HeapB"}>Build</Link></li>
                    <li><Link to={"#HeapI"}>Insert</Link></li>
                    <li><Link to={"#HeapD"}>Delete</Link></li>
                    <li><Link to={"#HeapS"}>Heap Sort</Link></li>
                </ul>
            </ul>

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
                underflow's, if we push to a full stack it overflows. Stacks are usually implemented with a linked list
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

            <h5 id={"cycle"}>Detecting cycles in a Linked List</h5>

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

            <h5 id={"reverse"}>Reversing a Linked List</h5>

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

            <h5 id={"HeapB"}>Heap Build</h5>

            <p><i>Build Max(Min) Heap</i> produce a Max(Min) heap from unordered array runs in linear time. <InlineMath
                math="O(n)"/></p>
            <p><i>Max(Min) Heapify</i> correct a single violation of the Heap property. <InlineMath math="O(\lg n)"/>
            </p>


            <h5 id={"HeapI"}>Heap Insert</h5>
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

            <h5 id={"HeapD"}>Heap Delete (Extract Max/Min)</h5>

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

            <h5 id={"HeapS"}>Heap Sort</h5>

        </div>
    ]
}

const DataStructures = () => {

    return (
        <BlogPage
            title={algorithms.title}
            contents={algorithms.contents}
            text={algorithms.text}
        />
    );


};

export default DataStructures;