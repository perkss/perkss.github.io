import React from "react";
import BlogPage from './blog-page.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {HashLink as Link} from 'react-router-hash-link';


const lowlevellanguage = {

    title: 'Low Level Programming',
    text: <div>

        <h3>Topics</h3>
        <ul className="text-list">
            <li><Link to={"#DataTypes"}>Data Types</Link></li>
            <li><Link to={"#Bits"}>Bit Manipulation</Link></li>
            <li><Link to={"#CProgramming"}>C Programming</Link></li>
            <li><Link to={"#Compilation"}>Java Compilation</Link></li>
            <li><Link to={"#Systems"}>Systems Programming</Link></li>
            <li><Link to={"#GC"}>Garbage Collection</Link></li>
            <li><Link to={"#Concurrency"}>Concurrency</Link></li>
            <li><Link to={"#Security"}>Security</Link></li>
            <li><Link to={"#Streams"}>Java and Kotlin Streams</Link></li>
            <li><Link to={"#DataTypes"}>Data Types</Link></li>
        </ul>

        <h3 id={"DataTypes"}>Data Types</h3>

        <p>Basics there is 1 bit and this can represent two values 0 or 1. There are 8 bits in a byte. There are 1000
            bytes in 1 kilobyte. 1000 kilobytes in a megabyte (1_000_000 bytes in a mega byte). 1000 megabytes in a
            gigabyte (1_000_000_000 bytes in a gigabyte). 1000 gigabyte in a terabyte.</p>

        <p>Therefore we can calculate the rough maximum size of an item by 2 to the power of how many bits there
            are. Firstly one byte is 8 bits which is either 0 or 1 and can represent 256 distinct values found
            by <i>2^8 = 256</i>. Another example is a char of 2 bytes can store <i>2^16 = 65536</i> possible values. An
            interesting explanation can be found on <a
                href={"https://stackoverflow.com/questions/26753029/how-many-characters-2-bytes-can-hold#:~:text=so%202%20byte%20can%20hold,character%20or%202%20ASCII%20character."}>stack
                overflow</a>.</p>

        <table class="table table-striped">
            <thead>
            <tr>
                <th>Data Type</th>
                <th>Size Bytes</th>
                <th>Size Bits</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>byte</td>
                <td>1 byte</td>
                <td>8 bits</td>
                <td>Stores whole numbers from -128 to 127 (2^8)</td>
            </tr>
            <tr>
                <td>short</td>
                <td>2 bytes</td>
                <td>16 bits</td>
                <td>Stores whole numbers from -32,768 to 32,767</td>
            </tr>
            <tr>
                <td>int</td>
                <td>4 bytes</td>
                <td>32 bits</td>
                <td>Stores whole numbers from -2,147,483,648 to 2,147,483,647</td>
            </tr>
            <tr>
                <td>long</td>
                <td>8 bytes</td>
                <td>64 bits</td>
                <td>Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>
            </tr>
            <tr>
                <td>float</td>
                <td>4 bytes</td>
                <td>32 bits</td>
                <td>Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits</td>
            </tr>
            <tr>
                <td>double</td>
                <td>8 bytes</td>
                <td>64 bits</td>
                <td>Stores fractional numbers. Sufficient for storing 15 decimal digits</td>
            </tr>
            <tr>
                <td>boolean</td>
                <td>1 bit</td>
                <td>Undefined</td>
                <td>Stores true or false values most likely 1 byte but only needs 1 bit, in JVM is undefined</td>
            </tr>
            <tr>
                <td>char</td>
                <td>2 bytes</td>
                <td>16 bits</td>
                <td>Stores a single character/letter or ASCII values</td>
            </tr>
            </tbody>
        </table>

        <h3 id={"Bits"}>Bit Manipulation</h3>
        <h4>Binary Addition</h4>

        <p>Binary addition is straight forward. You simply add 1 at each matching index with three scenarios if its 0
            and 0 then the result is 0. If it is 1 + 0 then the result is 1. If it is 1+1 then the result is 1. With a
            carry of 1. For example <i>0110 + 0010 = 1000</i></p>

        <table class="table table-striped .table-bordered ">
            <thead>
            <tr>
                <th>Binary Number</th>
                <th>Addition Value</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>0+0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1+0</td>
                <td>1</td>
            </tr>
            <tr>
                <td>1+1</td>
                <td>0 (Carry 1 up)</td>
            </tr>
            <tr>
                <td>1+1 (with a carry 1 already)</td>
                <td>1 (Carry 1 up</td>
            </tr>
            </tbody>
        </table>

        <br/>

        <h4>Binary Subtraction</h4>

        <p>Binary subtraction works in four ways below two examples are <i>0110-0011 = 0011</i> and <i>1000-0110 =
            0010</i></p>

        <table class="table table-striped .table-bordered ">
            <thead>
            <tr>
                <th>Binary Number</th>
                <th>Subtraction Value</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>0-0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1-0</td>
                <td>1</td>
            </tr>
            <tr>
                <td>0-1</td>
                <td>1 (Borrow 1 from next higher order digit)</td>
            </tr>
            <tr>
                <td>1-1</td>
                <td>0</td>
            </tr>
            </tbody>
        </table>

        <br/>

        <h4>Binary Multiplication</h4>

        <p>Works as usual multiplication start at right most side of the multiplier and then apply the rules to all
            digits of the number to be multiplied. Repeat this step for each number in the multiplier. Please check
            <a href={"https://www.cuemath.com/numbers/binary-multiplication/"}>cuemath</a> for a more detailed
            explanation.</p>

        <p>Some examples are <i>0011 * 0101 = 1111</i> so we multiply the number by each multiplier digit and then add
            up each row. Partial steps are <i>0011 -> 0000x -> 0011xx -> 0000xxx</i> these summed give <i>1111</i>.</p>

        <p>Another example is <i>0011 * 0011 = 1001</i></p>

        <table class="table table-striped .table-bordered ">
            <thead>
            <tr>
                <th>Binary Number</th>
                <th>Result</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>0 * 0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1 * 0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0 * 1</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1 * 1</td>
                <td>1</td>
            </tr>
            </tbody>
        </table>

        <br/>

        <h4>Binary Shift</h4>

        <p>You can easily multiply by two by shifting the binary left by 1. To do division by 2 shift to the right by
            1.</p>

        <h4>Other Operations</h4>

        <p>BITWISE XOR = <i>^</i> BITWISE AND = <i>&</i> BITWISE COMPLEMENT = <i>~</i> BITWISE OR = <i>|</i></p>

        <p>These operations are explained well by <a href={"https://www.tutorialspoint.com/Java-Bitwise-Operators"}>tutorials
            point</a>.</p>

        <h4>Twos Complement</h4>

        <p></p>

        <h3 id={"CProgramming"}>OS X Mac (High Sierra) glib Tutorial</h3>
        <p>To being with you need to install homebrew for following this tutorial. Once setup you we need to install
            glib and pkg-config.</p>

        <p><SyntaxHighlighter language='shell' style={darcula}>brew install pkg-config</SyntaxHighlighter></p>
        <p><SyntaxHighlighter language='shell' style={darcula}>brew install glib</SyntaxHighlighter></p>

        <p>A found a great <a href="https://www.ibm.com/developerworks/linux/tutorials/l-glib/">IBM Tutorial based on
            UNIX</a> for this so we will follow this and get it working on Mac terminal.</p>

        <p>PKG is a tool make it easier to specify configuration locations and we will use this on Mac to make our lives
            much easier. To get the code to run I had to replace the quotations from &#39; to &#768;. The command to
            runcompile the first example is as follows: </p>
        <p><SyntaxHighlighter language='shell' style={darcula}>gcc &#768;pkg-config --cflags --libs glib-2.0 &#768; -o
            ex-compile ex-compile.c</SyntaxHighlighter></p>

        <p>For some reason when compiling you will see a warning so please include &lt;stdio.h&gt; for printf.</p>
        <p>Lets begin with playing around with a single linked list. To define a single linked list and to add an item
            you can do the following: </p>


        <p><SyntaxHighlighter language='c' style={darcula}>GSList* list = NULL;</SyntaxHighlighter></p>
        <p><SyntaxHighlighter language='c' style={darcula}>list = g_slist_append(list, "first");</SyntaxHighlighter></p>

        <p>This is C so lets not forget to clean the memory up once done.</p>

        <p><SyntaxHighlighter language='c' style={darcula}>g_slist_free(list);</SyntaxHighlighter></p>

        <p>If we want to remove from the list you can do the following:</p>

        <p><SyntaxHighlighter language='c' style={darcula}>list = g_slist_remove(list, "first");</SyntaxHighlighter></p>

        <p>Now we have seen a few examples we can see that the format for most code using glib is:</p>

        <p><SyntaxHighlighter language='c' style={darcula}>g_(container name)_(function name)</SyntaxHighlighter></p>

        <h2 id={"Compilation"}>Java Compilation and Execution</h2>

        <p>Java is build once run anywhere and hence has a build (compilation) process and then a execution process on
            the JVM. Here are the basic steps for this process:</p>

        <ol className="text-list">
            <li>Compile the source code <i>.java</i> files into machine independent bytecode encoding using <i>javac</i>.
                It parses the source file builds an AST, puts entries into the symbol table which maps where identifiers
                to where code is stored, processes annotations generating code if needed, attributes syntax tree and
                then generates the <i>.class</i> files.
            </li>
            <li>Now execution occurs with three further stages. The <i>main.class</i> file is loaded by the class loader
                by passing it to the JVM and loading it into memory.
            </li>
            <li>Once the class is loaded bytecode verification happens such checks include initialised variables, rules
                for accessing private fields and methods.
            </li>
            <li>Final stage of execution is JVM dependent just in time compiler where loaded and verified bytecode is
                converted into
                machine code and executed can be used. Alternatively the JVM interprets the bytecode each run. Then
                selects hot methods to be JIT compiled.
            </li>
        </ol>

        <p>The Jar file is a container file that is like a zip that contains the <i>.class</i> files and any metadata
            such as which is the <i>main.class</i>.</p>

        <h2 id={"Systems"}>Systems Programming</h2>

        <p>This section looks at the systems that build and run our applications primarily focusing on C Programming.
            Reference to Computer Systems: A Programmers Perspective (Bryant et al.).</p>

        <h3>Linking</h3>

        <p></p>

        <h2 id={"GC"}>Garbage Collection</h2>

        <h3>Reference Types</h3>

        <p><strong>Strong References</strong></p>
        <p><strong>Weak References</strong> <strong>Soft References</strong> or <strong>Phantom
            References</strong></p>

        <p><a href={"https://docs.oracle.com/javase/8/docs/api/java/util/WeakHashMap.html"}>Weak hashmap</a> will
            garbage collect a key and value even if its mapped with a value if its no longer in ordinary use. </p>


        <p></p>


        <h2 id={"Concurrency"}>Concurrency</h2>

        <p>Fundamentals of concurrency with reference to Concurrency in Practice (Goetz). Firstly concurrency is when
            two tasks can start, run and complete in overlapping time periods. Parallelism is when two processes run at
            the exact same time. <a
                href={"https://docs.oracle.com/cd/E19455-01/806-5257/6je9h032b/index.html"}>[Oracle]</a>
            A thread is a sequence of instructions executed within a process.
        </p>

        <h3>Thread Risks</h3>

        <h4>Safety Hazards</h4>
        <p>Race conditions where correct outcome depends on timing of events: example increment function two threads
            call it but see the same value they both read the initial value say 3 and then both increment 3 and it is
            incorrect as the incremented value remains at 4 even though it has been incremented twice. This type of
            action is called read-modify-write action, lazy initialization also has the same problem. We call these
            compound actions. Compound actions are a sequence of operations that must be processed atomically. </p>

        <h4>Liveness Hazards</h4>
        <p>Liveness hazard is when the system gets into a state where it is permanently unable to make forward
            progress.</p>
        <ul className="text-list">
            <li>Deadlock</li>
            <li>Starvation</li>
            <li>Livelock</li>
        </ul>

        <h4>Performance Hazards</h4>
        <p>The impacts of overheads of context switching between threads, the use of synchronization and locks that
            limit performance.</p>

        <h3>Thread Safety</h3>

        <p>If there is a shared variable across threads is is unsafe, therefore three key mechanisms need to be
            considered, you can not share the variable across threads, make it immutable or use synchronization when
            accessing it. Thread safety is ensuring that code behaves correctly when accessed by multiple threads.</p>
        <p>Stateless objects are always thread safe as there is no shared state. Once state is added
            mechanisms must be added to resolve this.</p>

        <h4>Atomicity</h4>
        <p>Update related state variables in atomic actions.</p>

        <h4>Locking</h4>
        <p>In Java synchronized methods are shorthand for synchronized block for that method. These are referred to
            as intrinsic locks or monitor locks these act as mutexes (mutual exclusion locks) meaning at most one thread
            may own the lock. <strong>Reentrancy</strong> locks are ones that if they already hold the lock and try and
            acquire it again then they can. Intrinsic locks are reentrant. When a tread takes ownership of a lock a
            count is taken a unheld lock has a count of 0, when a thread takes ownership it increments to 1 along with
            storing the owner which is the specific thread ID. If that same threads renters the lock it increments again
            the counter. When it leaves the lock it decrements and when the counter is 0 it will release the lock.</p>

        <p>Every shared mutable state should be guarded by one lock only. For liveness and performance locks should only
            lock small sections of code where they are required, which is why a synchronized method is not ideal.
            Consider the performance implications when using locks and synchronized code and avoid holding locks for
            lengthy computations or long I/O.</p>

        <h3>Sharing Objects</h3>

        <p>We have focused on ensuring the thread correctness and safety of state held within object classes, but we
            need to consider how to ensure thread safety of shared objects. Locking can be used to ensure that different
            threads see the correct most up to date shared data.</p>

        <p><strong>Volatile</strong> variables are a lighter weight alternate to read whats always stored directly in
            memory no caching is done, the compiler does not reorder with other memory operations so a read of a
            volatile variable is always the most recent write. Volatile variables are used for status flags but usually
            Atomic or locks are preferred. They can only be used by multi threads for writes if the write does not
            depend on the current value or a single thread only writes to it and locking is not required for any other
            reason when reading it.</p>

        <p>Confinement is a safe way to not share objects across threads where data is only accessed by a single thread.
            You can achieve this in code by design. Or <strong>ThreadLocal</strong> enables you to place a per thread
            value.</p>

        <p>Immutable objects can be shared safely as they will not be able to be changed. The final field can be
            used which means items cannot be modified and have special semantics under the Java memory model.</p>

        <h3>Composing Objects</h3>

        <p>Some simple ways to compose thread safe objects are firstly consider the data held within the objects. Then
            you can simply confine this data. Or you can use the Java Monitor pattern where you synchronize code on a
            lock.</p>

        <h3>Platform Concurrent Libraries and Synchronizers</h3>

        <h4>Old School Synchronized Collections</h4>

        <p>Synchronized collections in Java include <strong>vector</strong> which is a synchronized version of ArrayList
            and <strong>hashtable</strong> which is a synchronized version of HashMap. These are poor in performance as
            synchronize all methods on a common lock and considered legacy code.</p>

        <h3>Concurrent Collections</h3>

        <p><strong>ConcurrentHashMap</strong> for replacing synchronized hash based map structures
            and <strong>CopyOnWriteArrayList</strong> a thread safe list with good performance for
            iteration. <strong>Queue</strong> and <strong>BlockingQueue</strong> have also been added where blocking
            queue will block if you have nothing to read from it and also block if you cannot insert any more data into
            it perfect for the producer consumer patter. The queue provides a non
            concurrent <strong>PriorityQueue</strong> and also a concurrent FIFO
            queue <strong>ConcurrentLinkedQueue</strong>. <strong>ConcurrentSkipListMap</strong> and
            <strong>ConcurrentSkipListSet</strong> are sorted by natural ordering or comparator concurrent versions of a
            sorted map or sorted set such as <i>TreeMap</i> or <i>TreeSet</i>. <a
                href={"https://en.wikipedia.org/wiki/Skip_list"}>Skip lists</a> are made up of LinkedLists as
            a head and then has express lines to values.
        </p>

        <p><strong>ConcurrentHashMap</strong> uses lock striping where the array buckets are have individual locks. Many
            readers are allowed, a set number of writers are allowed and readers can access the map concurrently with
            writers. The iterator in the concurrent hash map can survive concurrentModificationException. But is not
            guaranteed to reflect modifications after iterator has been
            constructed. <i>Size</i> and <i>isEmpty</i> functions are
            actually estimates as they can modify when calculating. Compound actions are dealt with by the API as it has
            the methods for <i>put-if-absent</i> <i>remove-if-equal</i> <i>compute-if-present</i>.
        </p>

        <p><strong>CopyOnWriteArrayList</strong> and <strong>CopyOnWriteArraySet</strong> these work by being immutable
            and if modification is made a entire copy and new reference is made to the backing array. As the data is
            immutable you can have multiple iterators at the same time. They are designed to be used when iteration is
            far more used than modification.</p>

        <p><strong>Deques</strong> also has a blocking version. The enable a related pattern to producer consumer named
            work stealing. If a consumer finishes the work on its deque then it can steal from the tail work from
            another consumer. It does this from the tail rather than the head so that contention is reduced.</p>

        <p><strong>Interrupts</strong> can be used to stop a blocked thread these can be handled into two ways you pass
            the interrupt exception to the caller to handle or you catch it and call interrupt on the current thread who
            caught it to propagate the exception. Reminder when a exception is thrown it is referenced by the JVM with
            the exception type and current state at that time, the JVM then looks through the call stack starting at the
            top for an exception handler if it finds one great it is handled else it will terminate the program.</p>


        <h4>Synchronizers</h4>

        <p>A synchronizer is any object that controls the flow of threads based on
            state. <strong>CountdownLatch</strong> allows one or more threads to wait for a set of events to occur.
            FutureTask is a Future implementation and can act like a latch as you call <i>get()</i> it will block until
            the result state. <strong>Semaphore</strong> are used to control the number of activities that can access
            data or do an operation at the same time. Usually a counting semaphore you acquire a permit which is defined
            as a max number available for example 10. If the 10 permits are already in use then you are blocked until
            one becomes available. Commonly used for database connection pools to control
            connections. <strong>Barriers</strong> are similar to latches but are dependent on threads rather than
            events, a barrier will wait until all threads required are ready to do the next item before proceeding, like
            setting a meeting time at a train station awaiting for all to arrive (the threads) and then proceeding with
            the next task. </p>

        <h4>Summary</h4>

        <p>Mutable state shared across multiple threads cause problems, try hide state, make it immutable. If data is
            shared and mutable then guard this data with locks, if data is associated share the same lock, hold locks
            for entire duration of a compound action.</p>


        <h3>Executing Threads: Task Executor</h3>
        <p>When working with real systems you have overheads of thread creation and start up, also you need to bound the
            number of threads created as otherwise you are going to run out of memory and use up all your CPU. To
            resolve this we have the ExecutorService. Thread pools are running how do we shut them down safely? We
            maintain three states of the thread pool executor running, shutting down or terminated. When shutting down
            new tasks are not accepted and awaits for tasks to finish. If it needs to shutdown abruptly it signals
            cancel to threads running and awaits. Java has no set way of cancelling tasks submitted to run, but good
            programming will provide a mechanism to clean up threads in this case of early stopping. One method is each
            task to have a cancel flag that can be safely set which will be checked periodically by the task and then if
            set it shuts down as programmed too. This flag must be volatile. What happens if the task is waiting on a
            blocking queue and nothing ever arrives it will not check the flag. Then you need to request interrupt to
            the thread. When interrupted the thread will know and at the next cancellation point by the interruption
            policy in its code it throws up the exception. Java Futures allow you to call cancel on them to request an
            interrupt. Another method of shutting down is to use a Poison Pill in producer consumer style you can do
            this with dropping a distinct message that knows is a stop message. When consumed it then states to the
            consumers finish work and shutdown. You can return a list of cancelled tasks if you need to abruptly stop
            them or they were pending before shutdown. If exceptions are thrown and unhandled they can be returned to
            the executor and the runnable task shutdowns. </p>

        <h3>Liveness Hazards</h3>

        <h4>Deadlock</h4>

        <p>Dining philosophers is the example of deadlock where diners sit at a table five diners with five chopsticks
            each philosopher eats only when holding two chopsticks. Each diner will grab left chopstick and then right.
            If all diners grab left chopstick then the right is used by another and if they wait for the right they will
            wait indefinitely. In thread terms this happens when thread <i>A</i> acquires lock <i>L</i> and then tries
            to acquire lock <i>R</i> but thread <i>B</i> already has the lock R and wants to acquire lock <i>L</i>. They
            will wait indefinitely.</p>

        <h4>Starvation</h4>

        <p>When a thread is denied access to a resource it needs to proceed. This maybe due to infinite loops or
            resource waits that do not terminate.</p>
        <h4>Livelock</h4>

        <p>Is when the thread is not blocked but cannot make progress as it keeps retrying an operation that fails. For
            example in transactional message platforms where a message fails then it is put back on the queue to be
            retried and processed and fails again.</p>

        <h2 id={"Security"}>Security</h2>

        <h3>Key Management</h3>

        <p>Some common terms for key management are <strong>keystore</strong> that stores sets of keys and
            certificates. <strong>Alias</strong> is a shortened keystore specific name for a entity. <strong>Distinguished
                Name (DN)</strong> is the subset of the full X.500 name. </p>

        <h3>Certificates</h3>

        <p>Certificates are used to verify a public key being sent to you be verified by a trusted entity known as a
            certificate authority. A certificate can provide extra confidence that the public key contained in the
            certificate does belong to the entity the CA says it does. A certificate contains three pieces of
            information.</p>

        <ol className={"text-list"}>
            <li>Name of the entity the certificate has been issued too. Referred to as the subject.</li>
            <li>Public key associated with the subject.</li>
            <li>Digital signature signed by the issuer of the certificate usually the CA but could be self signed.
                Naughty.
            </li>
        </ol>

        <p>We still need to verify the certificates digital signature which is signed by the CA. But how do we get the
            public key of the issuer CA? This is known as the bootstrapping problem and Java solves this problem by
            providing the public keys for well known CAs.</p>

        <p>Certificates are usually supplied as a chain. You have one CA sign it and then another CA sign it this allows
            users who do not know of all the certificate authorities to accept it as they will know one in the
            chain.</p>

        <p>It is possible to revoke a certificate once issued and signed if the tenant has used it illegally for
            example. To do this a <i>certificate revocation list</i> is issued by the CA validators then check this list
            before accepting it as genuine.</p>

        <h3>SSL and HTTPS</h3>

        <p>SSL provides a means to data encryption over TCP and is the basis for HTTPS. The Internet Engineering Task
            Force took over SSL and rebranded it to Transport layer security (TLS). The advantages of using SSL are it
            provides simple means for private key encryption by providing secret key exchange and data encryption with
            the exchanged key. It is also designed for environments where there are few servers but many clients where
            SSL servers have to authenticate themselves to clients but clients like web browsers do not need to
            authenticate themselves to the server. For example a internet shopper on a web browser does not authenticate
            to the server as they already can authenticate with credit card details and address when making the
            purchase.</p>

        <p><strong>The SSL Handshake</strong></p>

        <ol className={"text-list"}>
            <li>Client for example web browser initiates connection to server and states the ciphers it can accept.</li>
            <li>The server responds with the cipher suite it supports.</li>
            <li>The server then sends a certificate to verify its identity.</li>
            <li>The server then initiates a key exchange algorithm and sends the necessary information to the client and
                verifies the server certificate.
            </li>
            <li>The client completes the key exchange algorithm and sends the necessary key information to the server.
            </li>
            <li>The client then selects from the given cipher suite supported a cipher and tells the server.</li>
            <li>The server then makes a final decision on the cipher suite to use completing the handshake.</li>
        </ol>

        <p>Once the SSL handshake is complete the server and client can communicate over the connection as per usual. In
            Java programming SSL API abstracts all this away and a SSL connection is requested and once created the
            handshake is complete.</p>

        <h4>Keystores and Truststores</h4>

        <p>Keystores and truststores technically are a database that hold certificates they are functionally used for
            different things. Keystores are used for providing credentials and trustores are used to verify them. In SSL
            a server must have a private key for input into the key exchange algorithm and a
            certificate to identify who the server is this is contained within the keystore. If a server requires a
            client to authenticate themselves then they must have its own keystore with private key and certificate.</p>

        <p>The <strong>Truststore</strong> is used by a client to verify the certificate received from the server. The
            certificate from the server is signed by a trusted CA, when a client receives this certificate it checks in
            its trust store to verify the digital signature on the certificate. All clients must have a truststore and
            if a server requires client authentication it must also have a truststore.</p>

        <p>It is possible for keystore and truststore to be the same file. Ideally though they are not as truststore can
            be shared as it contains only public certificates but keystore has the private key so cannot be shared.</p>

        <h2 id={"Streams"}>Java and Kotlin Streams</h2>

        <p>Java streams are <a href={"https://developer.ibm.com/articles/j-java-streams-3-brian-goetz/"}>lazy</a> in
            nature including intermediate operations and only evaluate once terminal operation
            is invoked. Java streams work from a spliterator to break the stream into smaller parts to process it and
            chain up the operations. Intermediate operations always return a new stream. Kotlin streams are not they
            execute and output a value on each intermediate operation and terminal. For Kotlin <i>Sequences</i> should
            be used that are lazy collections that will not execute until the terminal operation is invoked.</p>

        <h2 id={"DataTypes"}>Data Types</h2>

        <p>In Java you have both primitive types such as <i>int</i> and reference types such as <i>String</i>. In Kotlin
            it does not distinguish you only have <i>Int</i>. Behind the scenes at runtime Kotlin will decide if to use
            the primitive or the reference type in this case <i>int</i> or <i>Integer</i> for a Kotlin <i>Int</i>.
            Nullable datatypes are always stored as a reference type in Kotlin as null cannot be stored in a primitive
            Java type.
        </p>

    </div>,
    contents: ''

};


const lowlevellanguagePage = () => {

    return (

        <BlogPage
            title={lowlevellanguage.title}
            contents={lowlevellanguage.contents}
            text={lowlevellanguage.text}
        />
    );

}

export default lowlevellanguagePage;
