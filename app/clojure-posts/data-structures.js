import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';


const DataStructuresClojure = () => (

    <div>
        <h2>Data Structures</h2>
        <h3>Some Background</h3>
        <p>Clojure data structures are immutable and persistent and are used in abstractions rather than the concrete
            implementations. Small and widely supported abstractions are one of Clojures main principles. There are
            seven primary abstractions for Clojure data structures and we will detail these below.</p>

        <h3>Abstractions</h3>
        <h4>Collection</h4>
        <p>All data structures in Clojure participate in the common collection abstraction. This abstraction has a
            common set of core functions. Lets have a look at these operations on a Vector.</p>
        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true}
                           wrapLines={true}>{`(def my-vector [1 2 3])\n;; => #'user/my-vector\n(conj my-vector 4)\n;; => [1 2 3 4]\n(seq my-vector)\n;; => (1 2 3)\n(count my-vector)\n;; => 3\n(empty my-vector)\n;; => []\n(= my-vector [1 2 3])\n;; => true\n`}</SyntaxHighlighter>
        <p>These standard set of functions are all pretty self explanatory.</p>

        <h4>Sequence</h4>
        <p>Sequences are an abstraction of a way to obtain and traverse sequential views over some sources of values.
            They can be produced lazily and can be consumed using first, rest and next. Sequences are not lists they are
            similar in the fact they can be empty or have a head and tail value, but they are different because they can
            be lazy so getting the count in the list has a cost associated too it.</p>
        <h4>Associative</h4>
        <p>The associative abstraction is canonical to the Map data structure. It defined by four definitions assoc
            which builds new associates between keys and values within the given collection. dissoc tact drops
            associations, get that looks up a value for a particular key and contains? that returns true only if the
            collection has a value associated with a given key.</p>
        <h4>Indexed</h4>
        <p>Indexed abstractions allows accessing data in Vectors by the index. It has two
            ways <strong>nth</strong> or <strong>get</strong> nth will throw an exception if the index is not found
            while get will return nil. Lets have a look:</p>
        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true}
                           wrapLines={true}>{`(get my-vector 0)\n;; => 1\n (nth my-vector 0)\n;; => 1\n(get my-vector 4)\n;; => nil\n(nth my-vector 4)\nIndexOutOfBoundsException   clojure.lang.PersistentVector.arrayFor (PersistentVector.java:158`}</SyntaxHighlighter>
        <h4>Stack</h4>
        <p>Stacks are a common data structure in Computer Science I am sure we all know well. There is not a particular
            implementation of them but there are three abstractions. <strong>conj</strong> for pushing a value onto the
            stack. <strong>pop</strong> for obtaining the stack with its top value removed and <strong>peek</strong> for
            obtaining the value on the top of the stack. Both lists and vectors can be used as stacks.</p>
        <h4>Set</h4>
        <p>The sets abstraction is minimal as there is a standard library providing a suite of further operations
            in <strong>clojure.set</strong>. The abstraction for set contains <strong>disj</strong> that allows the
            removal of values from a set.</p>
        <h4>Sorted</h4>
        <p>Collections that have the sorted abstraction are guaranteed to maintain stable ordering. Operations available
            include reverse, subsequence and reverse subsequence.</p>
        <h3>Data Structure Types</h3>
        <h4>Lists</h4>
        <p>A list in Clojure is a simple data type but not commonly used because they are only efficient at data access
            at the head of the list. The data structure behind Clojure lists are a single linked list. Hence they do not
            support efficient random access. This has benefits of being persistent data structure and more memory
            efficient. <strong>conj</strong> adds to the beginning of the list due to this data structure. Finding the
            count of a list is O(1)</p>
        <h4>Vectors</h4>
        <p>From previous example we saw that Vector is synonymous with an ArrayList in java. Using conj add to the end
            of the list and return as a new structure, and it supports access to the list by index values. Finding the
            count is O(1).</p>
        <h4>Sets</h4>
        <p>Sets are data structures that only allow unique values. Clojure offers hashset or sorted set which is sorted
            by natural order. </p>
        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true}
                           wrapLines={true}>{`(sorted-set 1 4 2 1)\n;; => #{1 2 4}\n (sorted-set "a" "c" "d")\n;; => #{"a" "c" "d"}\n(sorted-set "a" "c" "b")\n;; => #{"a" "b" "c"}`}</SyntaxHighlighter>
        <h4>Maps</h4>
        <p>Map is one of the main collections you will use and it has two flavours hash and sorted. Hashmap requires
            keys that properly implement equals and hashcode. Sorted maps require keys that implement comparable. Maps
            can be defined in numerous ways lets have a look.</p>
        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true}
                           wrapLines={true}>{`(def person {:name "perkss" :hobby "clojure" })\n(def person (hash-map :name "perkss" :hobby "clojure"))\n(keys person)\n;; => (:name :hobby)`}</SyntaxHighlighter>
        <h3>Persistence</h3>
        <p>

        </p>

        <h3>Summary</h3><p>This topic is fundamental to Clojure and is only a very basic overview we recommend reading
        further on this. As you can see the abstraction of Collection in Clojure is powerful making it very easy to use
        these structures and the operations available on running them.
    </p>
    </div>

);

export default DataStructuresClojure;
