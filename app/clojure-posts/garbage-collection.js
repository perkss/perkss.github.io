import React from 'react';


const GarbageCollection = () => (

    <div>
        <h2>Garbage Collection</h2>
        <h3>The Basics</h3>
        <p>As we know Java and Clojure run on the JVM when you compile your Jar it creates Java Bytecode that the JVM
            interprets to run. The HOTSPOT JVM actually can optimize this code on the fly with Just in Time Compilation
            to generate optimizations and compile hotspots of code. When allocating new objects using
            the <strong>new</strong> keyword in Java these objects are allocated to the heap space of memory which runs
            within the JVM. An area of memory that was also allocated was the Permgen space for Class loaders and String
            Interning, in JDK 8 this was removed and Metaspace running on native memory does most of the functionality
            this MetaSpace is also garbage collected. The problem with Permgen was that it was a fixed size on the heap
            where as Meta Space can grow if required and is allocated memory to the process not the heap. As Java
            creates lots of Objects these objects do not have an infinite amount of memory to remain in hence they need
            to be removed when they are no longer referenced by the application, this is where Garbage Collection comes
            in. </p>

        <h3>How Does Garbage Collection work in the JVM?</h3>
        <p>Garbage collection has some major steps. The first step is to mark the objects on the Heap and identity those
            in use and those not in use and all objects are scanned. This is that no reference points to an object
            excluding cyclic references so for example Object A points to Object B and B points to A but that is it they
            can be garbage collected. The second steps removes those unreferenced marked objects which can be removed
            the free space pointers are maintained by the memory allocator. The final step is to optimize the memory
            space by moving all remaining reference objects together in memory to make future allocations of the free
            space easier. As the memory allocator can hold a reference to the start of the free space and allocate
            sequentially.
        </p>
        <h3>Generational Garbage Collection</h3>

        <p>Objects in the JVM are short lived research has shown hence it has been optimized to deal with this fact.
            Therefore the JVM heap has been broken up into generational parts (Young Generation, Old Generation) which
            are also subdivided. As the young generation is where most of the collections occur it is subdivided into
            Eden, Survivor Space 0 and Survivor Space 1. The survivor space is where eden references that are live are
            copied and one always remains empty so it becomes the destination for the next collection and survivors from
            the other space are copied over. The young generation has many dead objects in it usually and any remaining
            ones can be moved up into survivor space and eventually to Old Generation where garbage collection
            frequencies are reduced. Young generation garbage collections are minor and Old generation collections are
            major and both are stop the world events. Major collections are usually slower.</p>

        <h3>Garbage Collection Options</h3>
        <h4>Parallel GC</h4>
        <p>The Parallel Collector where new or old generational collections can occur in parallel using the mark and
            compact method as stated above. There is the concurrent mark and sweep where a thread can run in parallel to
            run Garbage Collection but does not perform compaction.</p>
        <h4>G1</h4>
        <p>The G1 will be the standard garbage collector in Java 9 it focuses still on parallel mark and sweep but
            focuses on mainly empty areas of memory first to keep larger areas clear on the heap.</p>

        <h3>Performance Considerations</h3>
        <p>You can focus on measuring pause times of Garbage Collection or the total throughput of your system without
            Garbage Collection. GC logs are a great way to monitor this or using tools such as Java Mission Control or
            JVisualVM. The Garbage collection logs print minor GC as just GC and major GC as Full GC. </p>

        <h3>Clojure and Garbage Collection</h3>
        <p>As Clojure runs on the JVM all the considerations above are required. In the background Clojure is making
            objects although you are not explicitly calling new you are using the Clojure API which does in the
            background.</p>
        <h3>Summary</h3><p>Understanding the JVM and the Garbage collection process is key to using any language on the
        JVM so take this stuff seriously.</p>
    </div>

);

export default GarbageCollection;
