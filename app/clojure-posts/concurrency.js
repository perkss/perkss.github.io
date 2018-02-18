import React, { Component } from 'react';
import Latex from 'react-latex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, docco } from 'react-syntax-highlighter/styles/hljs';


const ConcurrencyClojure = () => (

		<div>
			 <h2>Concurrency Clojure vs Java</h2>
																		 <h3>Introduction</h3>
		<p>Concurrency enables the parallel execution of concurrent units. The benefits of being able to run operations in parallel is the performance improvements when used with multi core processing architecture. Java uses a threading model for this. However this major benefit does come with some problems due to the complexities of working with concurrent units of executions and ensuring the output remains the same as if the program would run sequentially. The complexity increases when using mutable data as different threads can read and write to the data and you can have dirty reads of the data. </p>

		<h3>Risks of Threads</h3>
		<h4>Safety Hazards</h4>
		<p>Thread safety is key because without it code can run with subtle differences in the ordering of operations. For example mutable data that is not protected and modified for example incrementing a field counter with a method can result in the same result being returned for two different threads as they can execute the code in parallel read the current value before the other has updated incremement and then return the same value. This type of issue is referred to as a race condition. </p>
		<h4>Liveness Hazards</h4>
		<p>A liveness failure is one where the process will get into a state it cannot get out of. This can happen in single threaded processes if the program enters a infinite loop. The risk of liveness failures increases with multi threaded programs these include <strong>deadlock</strong> where Thread A waits for a resource that Thread B holds exclusively andnever releases it Thread A will wait forever unless it has a timeout. Another liveness failure is <strong>starvation</strong> where a Thread A cannot access a shared resource regularly because it for example is locked by another greedy Thread B. Finally <strong>livelock</strong> can happen when Thread A responds to a Thread B action but Thread B has also responded to Thread A action. For example walking down the corrider person A moves left to walk passed, but person B moves right to walk pass they block each other, then they move the opposite direction again blocking each other and continually do this.</p>
		<h4>Performance Hazards</h4>
		<p>Multithreaded features have overhead so this balance needs to be weighed up with the potential gains. For example context switching, acquiring locks, synchronized method calls all have overheads and you need to be careful not to actually make your programs performance worse.</p>

		<h3>Java Fundamentals</h3>
		
		<h4>Thread Safety</h4>
		<p>In Java there are many instances of objects and within these objects there is mutable data that can be modified concurrently by Threads, this data needs protecting. Thread safety comes into play here and the decision is made simply if a class is going to be accessed by multiple threads. For Java synchronzation is a key method of forming thread safety of a class. This mutable data is one reason why Functional Programming is powerful for concurrent processing because of its focus on immutable data.</p>
		<p>Locking enables single access to data and parts of code in Java. Reentrant locks are important as they enable a thread that has acquired a lock to acquire the same lock again if required by code, it does this by the JVM keeping a counter for the owner of the lock and increments each time it acquires and decrements each time it exits. If Java locks were not reentrant then it can easily lock itself up for example calling a synchronized method that calls the super synchronized method. For locking to work correctly not only are writes required to be locked but also reads and there can only be a single lock per shared data variable. Synchronizing methods leads to poor performance and inflexibility using locks should be done on the smallest possible concurrent unit to allow thread safety and keep performance as good as possible. Always consider the overhead of acquiring and releasing a lock when breaking down into small concurrent units of work.</p>

		<p>The <strong>volatile</strong> keyword ensures that each read will have the latest write by enforcing the happens before relation as data is not cached. The use of volatile is essential for doubles and longs as they are 64bit operations that happen in two 32bit operations. Volatile is commonly used when a variable is read or written too, but a compound action (involve more than one discrete operation) like increment the variable becomes more complex so using Atomic variables is usually preferable.</p>

		<p>Sharing objects also needs to be considered for example returning a getter of a Set means the Set is shared but then also all of the Objects held within the Set.</p>

		<h4>Thread Confinement</h4>
		<p>If you make an Object available and it has shared mutable data then synchronization is required, but instead if data is only accessed from a single thread then you do not, this is thread confinement. An example of this is JDBC Connection objects they are not required to be thread safe as most requests for example a servlet request are run synchronously and the Connection pool will not return the same connection thread until it has fullly processed making it thread safe. </p>
		<p>Stack confinement is a special case where local variables are only used and they are confined to the Stack. Thread confinement can be achieved formally by using the ThreadLocal class that provides get and set accessors and maintains a copy of the value for each thread.</p>
		<h4>Immutability</h4> <p>If a object is truly immutable it is always thread safe a big winner for functional style programming and Clojure. Defining an object with the final keyword does not make it immutable as the data in the object maybe still mutable. To make immutable objects useful the object reference is mutable so to update the state of an immutable object you have to create a new version of it.</p>

		<h4>Safe Publication</h4>
		<p>At certain times objects will be required to be shared across threads in these cases we need protective techniques. Creating objects that are shared as a field a common idiom is to use static initalization as the JVM will publish these at class initialization time causing them to be thread safe. For mutable objects to be shared safely they must be safely published and either be thread safe or guarded by a lock.</p>

		<h4>Designing a Thread Safe Class</h4>
		<p></p>
		
																		 <h3>Clojure Fundamentals</h3>

		<h4>Introduction</h4>
		<p>Functional programming leads itself well to concurrent programming because of immutable data and pure functions. Clojure aims to minmise mutability, when you do need to manage mutable data you can use Clojure reference types to isolate that state and constrain its modification methods. Java interop means you can always fallback to the Java methods of Thread safety discussed above. The Clojure and functional approach to immutable data structures enables much better concurrency features, in Java world you have mutable state which in the words of Rich Hickey is the new spaghetti code. In Clojure we deal with immutable data structures. In Java we have indirect references to immutable data in Clojure we create a new version called a persistent edit and then point the user (Ref: implemented using the ref types below) of the data structure atomically we can point to the new immutable data which is the new version. This atomic operation is enabled by using the features (Vars -isolate changes within threads, Refs - share synchronous coordinated changes between threads, Agents - share asynchronous independent changes between threads, Atoms) explained below in the reference type section.</p>
		<h4>Delays</h4>
		<p>Delays enable the suspension of some body of code and evaluating it on demand. This body will only be evalauted once so its result is cached for fast future responses. This enables delaying some potential costly function call until its absolutely necessary to call.</p>
		<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(def load-slow-optional-data (delay (println "Loading ...") :done!))\nLoading ...\n;; => :done!`}</SyntaxHighlighter>

		<h4>Futures</h4>
		<p>To actually run a operation in another thread in Clojure you can use futures which execute immediately and return and then you can deference the future to get the result once completed. When dereferencing it will block as well. For example a long calculation you may want to run in a background thread. The @ symbol is shorthand for dere function call. You can also provide a timeout value for the dereference.</p>
		<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(def long-calculation (future (reduce + (range 10000))))\n@long-calculation\n;; => 49995000`}</SyntaxHighlighter>
		<h4>Promises</h4>
		<p>Promises are like delays and futures as they can be dereferenced with an optional timeout and a promise will only ever have one value. They are different though because they do not have any code of function when defined. A promise at some point in time maybe fulfilled by having a value passed to it. This is similar to a one time single value pipe where data is inserted at one end via <strong>deliver</strong> and retrieved at the other end via <strong>realized?</strong></p>
		<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(def p (promise))\n (realized? p)\n;; => false\n (deliver p 32)\n;; => #<Promise@4d32a052: 32>\n (realized? p)\n;; => true\n@p\n;; => 32`}</SyntaxHighlighter>
		<h4>Clojure Reference Types</h4>
		<p>Lets say for example you define a class Person in Java this has the fields such as DOB, Last Name, First Name, Address. Lets define a Person instance Perks who has the identity of a Person which is the logical representation throughout time. This identity of Perks can have different states at any given point in time such as a different address. Here we go into details mentioned above of Vars, Atoms, Refs and Agents.</p>
		<p><strong>Vars</strong> enable reference to a mutable storage location that can be dynamically rebound but only on a per thread basis. Vars are defined using def and ^:dynamic. Then values can be rebinded per thread locally using the function binding.</p>

	<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(def ^:dynamic item-a 1)
(def ^:dynamic item-b 3)
(+ item-a item-b)
;; => 4
(binding [item-a 5 item-b 6] 
  (+ item-a item-b))
;; => 11
(+ item-a item-b)
;; => 4`}</SyntaxHighlighter>
	
		<p><strong>Atoms</strong> are the most basic reference type and operations that modify a atom block until the modification is done. Lets see this case where the Age of Perks is updated and modified in the Atom. Making this state mutable of the Atom person.</p>
		<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(def perks (atom {:name "perks" :address "London" :age 27}))\n;; => #'user/perks\n(swap! perks update-in [:age] + 1)\n;; => {:name "perks", :address "London", :age 28\n@perks\n;; =>{:name "perks", :address "London", :age 28}`}</SyntaxHighlighter>
		<p><strong>Refs</strong> are Clojures form of coordinated reference type. You can use them to ensure that multiple identities can participate in overlapping, concurrently applied operations. Refs use software transactional memory (STM) to enable this coordinated mutability. Refs are bound to a single storage location for their lifetime and can only change this by being within a transaction. These transactions follow the atomic consistent and isolated principles. Within these transactions side effects must be avoided so please avoid any printlns. Transactions are speculative and will retry automatically if a conflict is seen.</p>

		<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(def my-simple-ref (ref [1 5 3]))
(deref my-simple-ref)
;; => [1 5 3]
;; Here we replace fully the vector with another immutable object of list
;; Required to use dosync for STM to be in effect. Else throws No transaction running.
(dosync (ref-set a '(3 2 1)))
;; => (3 2 1)
(deref my-simple-ref)
;; => (3 2 1)
;; We can also alter the current immutable data structure. 
(dosync (alter my-simple-ref conj 2))
;; => (2 3 2 1)`}</SyntaxHighlighter>

		<p><strong>Agents</strong> differ to refs by independent asynchronous change of individual locations. Agents are bound to a single storage location for their lifetimes and only allow changes to that location as a result of actions. Actions are functions that are asynchronously applied to the state of the agent and then set the state to the result of the action.</p>

	<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(def star-wars (agent {}))
(send star-wars assoc :episode-4 "A New Hope")
;; => #<Agent@5e779a1e: {:episode-4 "A New Hope"}>
;; Deref it to get the value
@star-wars
;; => {:episode-4 "A New Hope"}
(send star-wars assoc :episode-5 "The Empire Strikes Back")
;; => #<Agent@5e779a1e: 
  {:episode-4 "A New Hope", :episode-5 "The Empire Strikes Back"}>
@star-wars
;; => {:episode-4 "A New Hope", :episode-5 "The Empire Strikes Back"}`}</SyntaxHighlighter>

		<h3>Summary</h3><p>Clojure ref types are key to understand and the fact they point to immutable data that enables our applications to safely update state, simple yes. In comparison to Java who has the reference update state directly losing the original state and anyone could be updating it without primitive locking strategies.</p>
		</div>

);

export default ConcurrencyClojure;
