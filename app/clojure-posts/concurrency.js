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
																	
																		 <p> </p>

																		 <h3>Summary</h3><p></p>
		</div>

);

export default ConcurrencyClojure;
