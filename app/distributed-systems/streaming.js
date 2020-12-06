import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import Graph from '../../images/InitialGraph.jpg'
import EventTimeSum from '../../images/EventTimeSum.jpg'
import ProcessingTimeSum from '../../images/ProcessingTimeSum.jpg'
import Watermarks from '../../images/Watermarks.jpeg'
import BatchProcess from '../../images/BatchProcess.jpg'

const Streaming = () => (

    <div>

        <h2>Stream Processing</h2>

        <h3>Topics</h3>
        <ul className="text-list">
            <li><Link to={"#StreamingSystems"}>Streaming Systems</Link></li>
            <li><Link to={"#StreamingTime"}>Streaming Time</Link></li>
            <li><Link to={"#Windowing"}>Windowing</Link></li>
            <li><Link to={"#Watermarks"}>Watermarks</Link></li>
            <li><Link to={"#Triggers"}>Triggers</Link></li>
            <li><Link to={"#KafkaStreams101"}>Apache Kafka Streams 101</Link></li>
            <li><Link to={"#KafkaStreamsKotlin"}>Kafka Streams with Kotlin</Link></li>
            <li><Link to={"#Flink101"}>Apache Flink 101</Link></li>
        </ul>

        <h3 id={"StreamingSystems"}>Streaming Systems</h3>

        <p>Streaming has many definitions but from my view it is when processing unbounded data. In the sense a bounded
            data source has a finite size but an unbounded data source is infinite. The first part of this post is
            completely inspired and references throughout to <a
                href={"https://www.oreilly.com/radar/the-world-beyond-batch-streaming-101/"}>Streaming 101</a> and <a
                href={"https://www.oreilly.com/radar/the-world-beyond-batch-streaming-102/"}>Streaming 102</a> [Akidau]
        </p>

        <h3 id={"StreamingTime"}>Streaming Time</h3>

        <p>In stream processing time is critical. It is usually described as Event Time and
            Processing Time. Please understand these are they are critical throughout the rest of the topic.</p>

        <p><strong>Event Time</strong> when the event actually happens for example the time a social media post is
            created by the actual user on a mobile phone.</p>

        <p><strong>Processing Time</strong> the time the event is observed in our system. For example when the social
            media post is processed this could be hours or days or any time later for example a social media post was
            made when on a plane journey on flight mode it will not be processed until the plane lands and flight mode
            is switched off.</p>

        <p>Below is the example data that we will discuss further but simply this graph shows two runners A and B
            between 10:00 and 11:00 with updates of data points arriving every 1km they have run. We total up the scores
            to keep a rolling sum so we can track how far each runner has run. The X Axis is the event time that a 1km
            increase in distance run by the user occurs. The Y Axis shows the processing time that our backend service
            running in the cloud received and processed this data. Each data point states the X axis value and Y value
            next to it.</p>

        <img width="90%" height="90%" src={Graph} alt="Runners Graph Image"/>

        <h3 id={"Windowing"}>Windowing</h3>
        <p>Windowing is taking a data source this can be finite or infinite and breaking it into finite chunks of data
            to be processed where the start and end time of these chunks is provided by a time boundary. A key question
            to think about when building streaming systems is if my data is unbounded when can I say its finished? When
            should I materialise the results? The data could be infinite, but you need to see data point updates every
            five minutes and present these back to your users. All these questions will be answered in the following
            sections. But first we will review the most common types of windowing assignments for some of the most
            popular streaming processing frameworks. Examples of each type of Kafka streams window can be found in code
            <a href={"https://github.com/perkss/kotlin-kafka-and-kafka-streams-examples/blob/master/kotlin-kafka-streams-examples/src/test/kotlin/com/perkss/kafka/reactive/examples/WindowingExamplesTest.kt"}
            >here.</a>
        </p>

        <h4 id={"WindowTypes"}>Window Types</h4>
        <h5>Fixed Tumbling Windows</h5>
        <p>Fixed Tumbling windows are one the simplest form of windows to understand please read the various definitions
            below with insightful diagrams. Simply though a fixed window is chopping time into fixed sized durations for
            example a fixed tumbling window of 1 minute would start at 0:00:00 up to 0:00:59 and then the next fixed
            window is 0:01:00 to 0:01:59.
        </p>

        <ul>
            <li style={{display: 'flex', justifyContent: 'left'}}><a
                href={"https://kafka.apache.org/26/documentation/streams/developer-guide/dsl-api.html#windowing-tumbling"}>Kafka
                Streams Tumbling Window</a></li>
            <li style={{display: 'flex', justifyContent: 'left'}}><a
                href={"https://beam.apache.org/documentation/programming-guide/#fixed-time-windows"}>Apache Beam Fixed
                Time Window</a>
            </li>
            <li style={{display: 'flex', justifyContent: 'left'}}><a
                href={"https://ci.apache.org/projects/flink/flink-docs-stable/dev/stream/operators/windows.html#tumbling-windows"}>Apache
                Flink Tumbling Window</a></li>
        </ul>

        <h5>Fixed Hopping (Sliding) Windows</h5>
        <p>Hopping or Sliding windows depending on the frameworks terminology represent a time window that is usually
            fixed following the same scales as above of 1 minute window, but then the next window may start at 30
            seconds named the period so two windows overlap. Therefore the question you probably ask is will data
            points belong to two windows and the answer is yes, if it is in the overlapping time of two windows
            then the data is in each window. If we have window 1 starting at 0:00:00 with a size of 60 seconds and a
            period of 30 seconds, the second window 2 starts at 0:00:30. Then window 1 finishes at 0:00:59 and window 2
            finishes at 0:01:29 with the overlap between 0:00:30 and 0:00:59.</p>
        <ul>
            <li style={{display: 'flex', justifyContent: 'left'}}><a
                href={"https://kafka.apache.org/26/documentation/streams/developer-guide/dsl-api.html#windowing-hopping"}>Kafka
                Streams Hopping Window</a></li>
            <li style={{display: 'flex', justifyContent: 'left'}}><a
                href={"https://beam.apache.org/documentation/programming-guide/#sliding-time-windows"}>Apache Beam
                Sliding Window</a>
            </li>
            <li style={{display: 'flex', justifyContent: 'left'}}><a
                href={"https://ci.apache.org/projects/flink/flink-docs-stable/dev/stream/operators/windows.html#sliding-windows"}>Apache
                Flink Sliding Window</a></li>
        </ul>

        <h5>Kafka Streams Sliding Windows</h5>
        <p> Kafka Streams differentiates between Sliding and Hopping windows, when referring to sliding windows they are
            talking about windows that align to the data points timestamps not to the epoch (the continuous running time
            clock) and are only used for join operations. Therefore two data points are in the same window if the
            distance between their timestamps fall into the sliding windows size. Specifically in Kafka streams this
            windows start and end time are both inclusive. If we have a window size of 30 seconds then data point A at
            0:00:21, data point B at 0:00:42 then they would be in the same window. A data point at 0:01:20 would not in
            joined with either point.
        </p>

        <ul>
            <li style={{display: 'flex', justifyContent: 'left'}}><a
                href={"https://kafka.apache.org/26/documentation/streams/developer-guide/dsl-api.html#windowing-sliding"}>Kafka
                Streams Sliding Window</a></li>
        </ul>
        <h5>Session Windows</h5>
        <p>Session windows are a little different than the previous ones, they focus on per key data basis activity. So
            for example a user visiting a social media page. They have a session at 0:00:30 for 10 seconds, then they go
            back to the page at 0:01:10 if we have a session window with minimum gap duration of 1 minute then these two
            sessions would fall under the same session window.
        </p>

        <ul>
            <li style={{display: 'flex', justifyContent: 'left'}}><a
                href={"https://kafka.apache.org/26/documentation/streams/developer-guide/dsl-api.html#windowing-session"}>Kafka
                Streams Session Window</a></li>
            <li style={{display: 'flex', justifyContent: 'left'}}><a
                href={"https://beam.apache.org/documentation/programming-guide/#session-windows"}>Apache Beam Session
                Window</a>
            </li>
            <li style={{display: 'flex', justifyContent: 'left'}}><a
                href={"https://ci.apache.org/projects/flink/flink-docs-stable/dev/stream/operators/windows.html#session-windows"}>Apache
                Flink Session Window</a></li>
        </ul>
        <h5>Global Windows</h5>
        <p>In some frameworks by default all data is assigned to a global window and if the data is finite you can use
            the global window. Late data is discarded. For unbounded data sets you can use the global window but you
            need to specify triggers appropriately which is something we will discuss at a later point.
        </p>

        <ul>
            <li style={{display: 'flex', justifyContent: 'left'}}><a
                href={"https://beam.apache.org/documentation/programming-guide/#single-global-window"}>Apache Beam
                Global Window</a>
            </li>
            <li style={{display: 'flex', justifyContent: 'left'}}><a
                href={"https://ci.apache.org/projects/flink/flink-docs-stable/dev/stream/operators/windows.html#global-windows"}>Apache
                Flink Global Window</a></li>
        </ul>

        <h4 id={"CaseStudy"}>Example Business Requirement</h4>
        <p>
            To help us understand windowing and the difference of using event time vs processing time for correctness of
            results. We define a example business requirement to show the
            distanced covered by two runners A and B, running with a smart watch which sends live updates we want a view
            of the results every 10 minutes in a hour long run between 10.00 and 11.00. This is a simple example where
            we bound the event time of the data to make understanding the key points easier but this example and the
            points below all are relevant for streaming data that is unbounded also. Using this example we can see that
            if we window the data by a fixed tumbling window time every 10 minutes we can then take the distance covered
            for each runner every 10 minutes. Showing the total distanced run by each runner to find who ran the
            furthest and is leading at each 10 minute interval. Then at the final window take the final scores of
            distance covered by 10:59:59 for each runner. When the final window shuts.
        </p>

        <p>The window strategy we will use for this example to consider using event time or processing time are fixed
            tumbling windows. We will review others afterwards. This window is where we tumble over 10 minute time slots
            with no no overlaps or gaps. Some key frameworks explain the different types of windows here are the
            references <a
                href={"https://docs.confluent.io/platform/current/streams/developer-guide/dsl-api.html#windowing"}>Kafka
                Streams</a>, <a
                href={"https://ci.apache.org/projects/flink/flink-docs-stable/dev/stream/operators/windows.html#window-assigners"}>Apache
                Flink</a> and <a
                href={"https://beam.apache.org/documentation/programming-guide/#windowing"}>Apache Beam</a></p>

        <table border="1" class="center">
            <tr>
                <th>Event Time <br/> Runner A</th>
                <th>Processing Time <br/> Runner A</th>
                <th>Event Time <br/> Runner B</th>
                <th>Processing Time <br/> Runner B</th>
            </tr>
            <tr>
                <td>10.10</td>
                <td>10.11</td>
                <td>10.08</td>
                <td>10.15</td>
            </tr>
            <tr>
                <td>10.25</td>
                <td>10.25</td>
                <td>10.20</td>
                <td>10.31</td>
            </tr>
            <tr>
                <td>10.33</td>
                <td>10.45</td>
                <td>10.31</td>
                <td>10.32</td>
            </tr>
            <tr>
                <td>10.40</td>
                <td>10.47</td>
                <td>10.41</td>
                <td>10.51</td>
            </tr>
            <tr>
                <td>10.51</td>
                <td>10.54</td>
                <td>10.50</td>
                <td>10.51</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>10.55</td>
                <td>10.60</td>
            </tr>
        </table>

        <br/>

        <h4 id={"GlobalWindow"}>Global Window</h4>

        <p>Lets start with the easiest window one that is the full dataset window
            where we can process all the data in the window at the end of the day so 8 hours after the event to add up
            the total distance runner by each runner at the end of the data. This could be a batch process in the
            evening or a <a
                href={"https://ci.apache.org/projects/flink/flink-docs-stable/dev/stream/operators/windows.html#global-windows"}>global
                window</a> where we trigger on each result. Here we see that runner B wins with 6km vs runner A's 5km.
        </p>

        <img width="90%" height="90%" src={BatchProcess} alt="Runners Graph Image"/>

        <h4 id={"EventimeWindow"}>Event Time Window</h4>

        <p>Using the event time window strategy setting setting fixed windows of 10 minutes we can see that the results
            are finalized correctly. The data maybe late on processing time but this data is windowed by event time so
            it falls into the same windows and the final window due to the requirements of this race ending at 11.00am
            [10.00 + 59]. For this to work with late data you need to buffer the data for a time period you can always
            store intermediate results such as a sum rather than all data points to save space. Another problem is when
            has all the data arrived? If we have late data how long do we wait for it before we materialize, hours,
            days, years? We cannot be certain on this we have to use a combination of heuristics and triggers and allows
            for late data the best we can for our use case.</p>

        <img width="90%" height="90%" src={EventTimeSum} alt="Runners Graph Image"/>

        <h4 id={"ProcessTimeWindow"}>Process Time Window</h4>

        <p>When comparing the final result of windowing using the Processing Time rather than Event Time for windowing
            the score is different as this is strictly windowed by processing time
            between 10.00 and 10.59. As this is a live 10 minute update score feed then the first window is
            empty neither has made the 1km. Which is incorrect. You can also see the differences in window 10:20 to
            10:29, 10:30 to 10.39. Lots of incorrect updates for our users monitoring our two runners with updates every
            10 minutes. This is a pretty obvious why you should not use processing time for windowing if you data has
            event times and your data and outcome of its correctness work like this. There are benefits of using
            processing time these are the system knows when the window shuts as no concept of late data, or you want to
            infer information about the source of data such as delays in it or outages at runtime.</p>

        <img width="90%" height="90%" src={ProcessingTimeSum} alt="Runners Graph Image"/>

        <h4 id={"WindowAssignment"}>Window Assignment</h4>

        <p>Lets now explore how three of the major stream processing frameworks calculate the window each data point
            should enter into. For this example lets make it easy and use timestamps from the start of EPOCH. We will
            use fixed windows still and they will be 2 minutes so 120000ms in size and advance by the same 120000ms (2
            minute) size. </p>

        <h5>Kafka Streams</h5>
        <p><a
            href={"https://github.com/apache/kafka/blob/trunk/streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindows.java#L175"}>Window
            start</a>
        </p>

        <p>long windowStart = (Math.max(0, timestamp - sizeMs + advanceMs) / advanceMs) * advanceMs;</p>

        <h5>Flink</h5>
        <p><a
            href={"https://github.com/perkss/flink/blob/master/flink-streaming-java/src/main/java/org/apache/flink/streaming/api/windowing/windows/TimeWindow.java#L271"}>Window
            start</a>
        </p>

        <p>start = timestamp - (timestamp - offset + windowSize) % windowSize;</p>

        <h5>Beam</h5>
        <p><a
            href={"https://github.com/perkss/beam/blob/master/sdks/java/core/src/main/java/org/apache/beam/sdk/transforms/windowing/FixedWindows.java#L74"}>Window
            start</a>
        </p>

        <p>Instant start =
            new Instant(
            timestamp.getMillis()
            - timestamp.plus(size).minus(offset).getMillis() % size.getMillis());</p>

        <h3 id={"Watermarks"}>Watermarks</h3>
        <p>Watermarks are to do with <strong>when</strong> input data is complete in regards to event time. This is the
            trickiest part I found
            to grasp as literature commonly goes on about perfect watermarks but in reality a perfect watermark in a
            distributed system is impossible. When does unbounded data have a end? You can chunk it into timed slots
            windows which we covered above, but then will all the data chunked into event time slots arrive on time?
            Impossible to guarantee. In distributed systems delays happens, network outages happen data
            can happen on a mobile phone at 9.01am (event time) and the user has no mobile data signal until 9.22
            (process time) to send the data on to be processed. Watermark X states that all data with an event time less
            than X have been observed. In the above example of keeping a distanced run for each runner between 9:00 and
            10:00 do we wait for all data points or emit with partial results? Maybe data is late? Maybe those who
            signed up did not run at all so do not emit any running data if we waited we would be waiting
            incorrectly forever. All considerations that need to be made when defining a watermark and different types
            of triggers can be used to help with when to emit final windowed results.</p>

        <p>The diagram below shows the three main categories of watermarks Perfect, Heuristic and Ideal.</p>

        <h4>Perfect Watermark</h4>
        <p>Perfect Watermark (the green line) that will stay long enough for any late data (or no late data arrives) but
            will add latency waiting for late data but give correct results.</p>
        <h4>Heuristic Watermark</h4>
        <p>A Heuristic Watermark (the orange line) that will best guess when data has all arrived but may miss late data
            mixing faster latency but may have incorrect accuracy due to not waiting long enough for late data.</p>
        <h4>Ideal Watermark</h4>
        <p>The final line shows the ideal (pink line) where the processing time and event time is always equal so we
            have no late data.</p>

        <img width="90%" height="90%" src={Watermarks} alt="Runners Graph Image"/>


        {/*Perfect watermark is data is proceesed per runner each time they run a km. Could do these examples in Flink?*/}

        <h3 id={"Triggers"}>Triggers</h3>

        <p>When is a window finished? As discussed in watermarks when is a window result final, what happens if data is
            later than the event time by say an hour? When should the result be emitted. Triggers are used to determine
            when the data for windowing should happen. Kafka streams usually works on <a
                href={"https://www.confluent.io/blog/kafka-streams-take-on-watermarks-and-triggers/"}>continuous
                refinement</a> where data arrives and task that uses windowing will emit the result at that point even
            if not final. They recently added the suppress API to support only emitting when the window shuts. This
            approach simplifies things massively.</p>



        <h3 id={"Accumulation"}>Accumulation</h3>

        <h4>Discarding</h4>

        <h4>Accumulating</h4>

        <h4>Accumulating and Retracting</h4>
        {/* When do we rank the final score? If they process the time late how long do we wait?*/}

        <h3 id={"KafkaStreams101"}>Apache Kafka Streams 101</h3>

        <p>
            <a>Two key readings are <a
                href={"https://www.confluent.io/blog/introducing-kafka-streams-stream-processing-made-simple/?_ga=2.12046205.832658612.1587838116-886049772.1587838116"}
            >Introducing Kafka Streams</a> and <a href={"https://kafka.apache.org/documentation/streams/"}>Kafka
                Streams Concepts</a>.
            </a>
        </p>

        <h4>Stream Table Duality</h4>

        <p><strong>Table: </strong>A view of a data set at a specific point in time.</p>

        <p><strong>Stream: </strong>A event by event view of the data set over a period of time.</p>

        <p>This point is driven in all over the internet but to summarise stream processing commonly needs to work with
            a data store. A stream is very simply put a unbounded sequence of key value pairs. A table is also a store
            of key value pairs but at a snapshot in time. Tables get updated over time for example INSERT KEY1 VALUE 1
            at time 0 and then INSERT KEY 2 VALUE 2 at time 1. If we write out just the updates to the table they can be
            seen as a stream of events so a Table is just a stream when viewing it over time. This is built into Kafka
            for example a changelog which can compact the older time inserts into the latest view only. You can easily
            rebuild the table from stream events by replaying them and also if you write the updates to the table you
            can write back to another stream the same changelog.</p>

        <h4>KStream</h4>

        <p>In Kafka streams, streams are represented by KStream abstraction. As in the above Stream Table duality
            KStream is a unbounded stream of only insert events. If I had a pair if (Name Counter) then in KStream this
            would be first record (perkss, 29) --> second record (perkss, 30) and we sum these we get (perkss, 59). This
            is because KStream are insert events.</p>

        <h4>KTable</h4>

        <p>A KTable is the representation of a changelog stream. Working with UPSERTS of the last value of the same
            Key. As shown in KStream if we have first record (perkss, 29) --> second record (perkss, 30) and we sum
            these we get (perkss, 30) as this is an UPSERT. Here you would have log compaction usually added for the
            KTable backed topic as you are generally interested only in the most recent UPSERT. KTable are populated by
            the required partitions of the topic for example if a Kafka Streams application was scaled into 2 processes
            and it had 4 partitions each process would have 2 partitions. The KTable only needs to know of the data in
            the related 2 partitions. Keying data is critical here so the stream topic and the table topic need to be
            keyed the same. This KTable is also open to <a
                href={"https://docs.confluent.io/current/streams/developer-guide/optimizing-streams.html"}>optimisations</a>.
        </p>

        <h4>GlobalKTable</h4>

        <p>A GlobalKTable is like a KTable but the data populated in the Table is from all partitions of the backing
            topic. They allow foreign key joins and to broadcast information to all running instances of your
            application. But they do increase storage and network overhead.</p>

        <h4>Time</h4>

        <p>Time in stream processing is very important it shows out of order events, it can be used to determine late
            events and enables aggregation or joining operations.</p>

        <ul className="text-list">
            <li>Event Time: The point in time that the event was first created. Usually embedded into the message.
            </li>
            <li>Processing Time: The time the event was consumed by a stream processing application to be processed.
            </li>
            <li>Ingestion Time: The time an event or data record is stored into a Kafka Topic.</li>
        </ul>

        <p>Flow control is achieved using the timestamps provided by Kafka. Backpressure is not required by Kafka
            streams as it is depth first search in the topology meaning each record consumed is processed fully before
            consuming the next record. This is possible as they use Kafka consumer which is a pull based approach to get
            the data from the topic.</p>

        <h4>Out of Order Handling</h4>

        <p>Kafka streams handles out of order events by allowing users to configure windows to enable a tolerance to
            late and out of order events. These can happen when processing a single topic partition you may find smaller
            offsets with larger timestamps and the smaller offset will be processed first.</p>

        <h4>Aggregations</h4>

        <p>Aggregations allow multiple sources such as KStream or KTable to be combined and form a new KTable. The
            output is always a KTable. This enables late events to be updated in the KTable easily.</p>

        <h4>Joins</h4>

        <p>Joins allow the merging of two input KStream or KTables or either and create a new KStream or KTable.</p>

        <h4>Windowing</h4>

        <p>For the stateful operations of joins and aggregations you need a concept of time windows. A Grace Period can
            be specified for the window that indicates when the result is final.</p>

        <h4>Interactive Queries</h4>

        <p>Kafka Streams offers the nice feature of interactive queries where you can query your stream layer like a
            embedded store and expose operations via an API such as Rest or RPC. This saves you writing the data to an
            external store. For regular stateless operations each operation can be given a materialized as and state
            store name to make it stateful and to enable the <a
                href={"https://docs.confluent.io/current/streams/developer-guide/interactive-queries.html#streams-developer-guide-interactive-queries-local-key-value-stores"}
            >queries</a>.</p>

        <h4>Internal Workings</h4>

        <p>Underneath the DSL of KStream and KTable the Processor API is at work. This contains the Topology and it is
            made up of Source Processor which connects to Kafka and reads in data from the topic connecting it to the
            Stream Processor. Stream Processor simply does the work the transformations, joins, aggregations. Once the
            streaming
            application is done a Sink Processor then sends on the data to Kafka.</p>

        <p>Within the stream processing application partitions are mapped to <strong>stream partition</strong>, a
            message from a Kafka topic maps to a <strong>data record</strong>. You are allowed to specify the number of
            threads in your application to vertically scale or increase the number or processes of the application by
            using the same application ID to scale horizontally. Each thread or process can work on one or more <strong>stream
                tasks</strong>. There is not inter thread coordination between these tasks simplifying the model. The
            stream tasks map to the partitions of the topics and take a subset of this work each.</p>

        <p>What about state stores when scaling up, if you scale up and the tasks are assigned to different partitions
            as you have more resource to work with then Kafka streams takes care of this for you by seamlessly migrating
            the state including state stores over to the new process or thread.</p>

        <p><strong>State</strong> is used for the aggregation operations, joining and give the ability to query data.
            They can be a in memory key value store, Rocks DB or your own supplied. <a
                href={"https://docs.confluent.io/current/streams/developer-guide/processor-api.html#enable-or-disable-fault-tolerance-of-state-stores-store-changelogs"}>
                Read here</a> for more information on the fault tolerance or state stores by using a Kafka topic to back
            them. In Kafka streams applications that use the persistent state stores when fail over happens then Kafka
            will replay the backing topic to build the state store up in the recovered application.</p>

        <p>Handling faults takes the power of Kafka and Kafka streams takes this further, if a instance of the stream
            application fails then the tasks are automatically taken over by another running instance of the Kafka
            streams application. This is transparent to the user. You can even have standby replicas read to go if you
            do not want the time to recover to be too slow.</p>

        <h4>Streaming Joins</h4>

        <a href={"https://www.confluent.fr/blog/crossing-streams-joins-apache-kafka/"}>Kafka Stream Joins</a>

        <h4>Windowing</h4>

        <p>When working with windowing results are emitted immediately where it makes sense but sometimes you need to
            only emit on the final result.<a
                href={"https://docs.confluent.io/current/streams/developer-guide/dsl-api.html#window-final-results"}>Send
                window result</a> after close and suppression is how this is achieved. </p>

        <h3 id={"KafkaStreamsKotlin"}>Kafka Streams with Kotlin</h3>

        <p>We will now move onto discussing using Kafka Streams practically with Kotlin. This section will continually
            grow to please check back for further examples coming. We will cover stateless and stateful transformations
            using Kafka Streams and Kotlin covering <i>aggregations</i>, <i>joins</i>, <i>tables</i> to name a few. All
            the code examples can be found on our github page <a
                href={"https://github.com/perkss/kotlin-kafka-and-kafka-streams-examples/tree/master/kotlin-kafka-streams-examples"}>here</a>.
        </p>

        <p>Our story for these examples is going to be a social media service where users can create posts and we will
            use Kafka Streams to process these social media posts and other users interactions with them.</p>

        <p>The data model for these posts will be kept simple and we will use Avro for complex data types where the
            schemas can be found in the <a
                href={"https://github.com/perkss/kotlin-kafka-and-kafka-streams-examples/tree/master/avro-schemas"}>Avro
                Schemas</a> module of our code examples and
            the <i>avro-maven-plugin</i> is used to generate the code.</p>

        <h4>#Post 1 Kafka Streams GroupBy and Count</h4>

        <p>Our first example investigates using Kafka Streams <i>GroupBy</i> and <i>Count</i>. In this toy example we
            will send social media creation posts to our SocialMediaTotalPostCount topology to group them by the <i>User
                Id</i> and then keep a count and store this in a <i>KTable</i> and then stream this <i>KTable</i> back
            out to an event topic. This is a simple example but our first so lets go into the basic details for this
            one.</p>

        <p>First we need to build our topology so that it can consume off the input topic. To build a KafkaStreams
            topology you use the <i>StreamsBuilder</i>.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`val builder = StreamsBuilder()`}</SyntaxHighlighter>

        <p>Now we can simply start our topology off by consuming off the input topic by providing a name for the topic
            and using the <i>stream</i> method on the <i>StreamsBuilder</i> object we created. Here we do not use the
            default <i>Serde</i> so we specify the <i>Avro SpecificSerde</i> for the <i>PostCreated</i> object.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`val input = builder.stream(inputTopic, Consumed.with(Serdes.String(), postCreatedSerde))`}</SyntaxHighlighter>

        <p>Now we do the main work of the topology we take the input stream of <i>PostCreated</i> events and then we
            group them by the <i>UserId</i> who created the post and count them recording this down in
            a <i>KTable</i> with the key as the <i>UserId</i> and the value as the <i>Total Count of Posts</i>.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`val aggregated: KTable<String, Long> = input
                .groupBy { _, value -> value.userId }
                .count()`}</SyntaxHighlighter>

        <p>This <i>KTable</i> is then streamed to an event topic on each update where we can consume the updated counts.
        </p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`aggregated.toStream().to(outputTopic, Produced.with(Serdes.String(), Serdes.Long()))`}</SyntaxHighlighter>

        <p>Kafka Streams provides a <a
            href={"https://kafka.apache.org/25/javadoc/org/apache/kafka/streams/TopologyTestDriver.html"}>Topology Test
            Driver</a> that provides a friendly way of testing
            topologies by dropping messages into a test topic and asserting the output topic of the topology without the
            need for starting a Kafka broker. The example test can be found in the repository <a
                href={"https://github.com/perkss/kotlin-kafka-and-kafka-streams-examples/blob/master/kotlin-kafka-streams-examples/src/test/kotlin/com/perkss/kafka/reactive/examples/AggregateExamplesTest.kt#L25"}> here.</a>
        </p>

        <p>Firstly we build the Topology and then we use the TestDriver to allow us to interact with it.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`val totalUserSocialMediaPostsTopology = AggregateExamples.buildUserSocialMediaPostsTotalCountTopology(inputTopicName, outputTopicName, postCreatedSerde)
        val testDriver = TopologyTestDriver(totalUserSocialMediaPostsTopology, props)`}</SyntaxHighlighter>

        <p>We then specify and create the test input topic and specify the <i>Serializers</i> required for it. Here we
            use the String for the key and the Specific Avro Serde for the value.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`val postCreatedTopic = testDriver.createInputTopic(inputTopicName,
                Serdes.String().serializer(), postCreatedSerde.serializer())`}</SyntaxHighlighter>

        <p>We then pipe input onto the topic in this case the <i>PostCreated</i> object pretending that Alice created a
            Post.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`postCreatedTopic.pipeInput(UUID.randomUUID().toString(), PostCreated(UUID.randomUUID().toString(), alice, "Happy", LocalDateTime.now(ZoneOffset.UTC).format(DateTimeFormatter.ISO_DATE_TIME)))`}</SyntaxHighlighter>

        <p>An output topic is then created from the Topology and this is where we send the counts of users posts.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`val outputTopic = testDriver.createOutputTopic(outputTopicName, Serdes.String().deserializer(),
                Serdes.Long().deserializer())`}</SyntaxHighlighter>

        <p>We then process and assert the results of the topic here we have Alice as the user ID and then a count of
            1 as Alice has created a single post. In the actual test you can see the full example with multiple users
            and increased counts.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`assertThat(outputTopic.readKeyValue(), equalTo(KeyValue(alice, 1L)))`}</SyntaxHighlighter>

        <p>Great we have seen our first example of writing a Kafka Streams application using Kotlin and testing it with
            TopologyTestDriver simple and clean and perfectly integrates using Kotlin.</p>

        <h4>#Post 2 Kafka Streams Windowed Count using Custom TimestampExtractor</h4>

        <p>For our second post on Kotlin with Kafka Streams we will look into using Windowing with our Count Topology so
            we only keep the count of posts for a certain time period. For example we have a window of every 30 seconds
            if Alice creates two posts in those 30 seconds then they will count as a total count of two. But if Alice
            then posts again at 31 seconds it will be a total post count of 1. A toy example just to show the concept of
            windowing. This example topology will emit an event every time a post is created in a window. In our next
            post we will checkout suppression that emits at the end of the window.</p>
        <p>

            A little pre reading for this section <a
            href={"https://stackoverflow.com/questions/55258690/is-kafka-timestamp-order-corresponding-to-the-offset"}>Kafka
            timestamps</a> and using them in <a
            href={"https://kafka.apache.org/25/documentation/streams/core-concepts#streams_time"}>Kafka Streams</a>.
            In this example we will use an embedded timestamp in each message that represents the exact
            time the social media post was created by the user in <a
            href={"https://github.com/perkss/kotlin-kafka-and-kafka-streams-examples/blob/master/avro-schemas/src/main/resources/com.perkss.social.media.model/post-created.avsc#L33"}>UTC</a>.
            This is the event time when the event actually
            happened vs the standard timestamp provided by Kafka which is the processing time on the Kafka producer
            which is configurable. A great read on the complexities of time stamps in stream processing is <a
            href={"https://www.oreilly.com/radar/the-world-beyond-batch-streaming-101/"}>Streaming 101.</a> Well worth a
            full read or particularly the section on Event Time vs Processing Time.

            You can find out further about <i>TimestampExtractor</i> in the <a
            href={"https://docs.confluent.io/current/streams/developer-guide/config-streams.html#default-timestamp-extractor"}>confluent
            docs</a>. The object we use is a Kotlin singleton and implements the interface of
            the <i>TimestampExtractor</i> where we parse the ISO string stored in each event recieved by our stream and
            then convert it to epoch milli.

            The window we will use in this example is the
            <a href={"https://kafka.apache.org/25/javadoc/org/apache/kafka/streams/kstream/TimeWindows.html"}> FixedTime
                Window</a>. To find out more about <strong>windowing</strong> in Kafka Streams check out the <a
            href={"https://kafka.apache.org/20/documentation/streams/developer-guide/dsl-api.html#windowing"}>docs.</a>
        </p>

        <p>Right to some code to see this happen the best way to understand this is to check the TopologyTestDriver <a
            href={"https://github.com/perkss/kotlin-kafka-and-kafka-streams-examples/blob/master/kotlin-kafka-streams-examples/src/test/kotlin/com/perkss/kafka/reactive/examples/AggregateExamplesTest.kt#L100"}>
            test.</a> But first let's walk through the difference in the code to our last post.</p>


        <p>The first difference you will notice is that we provide a custom timestamp extractor to the consumer in the
            stream.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`val input = builder.stream(inputTopic, Consumed.with(Serdes.String(), postCreatedSerde,
                PostCreatedTimestampExtractor, Topology.AutoOffsetReset.EARLIEST))`}</SyntaxHighlighter>

        <p>The custom timestamp extractor is simple it simply parses back the ISO stored string in each message and
            converts it into EpochMilli. If this is not an instance of PostCreated we fall back to the original time on
            the event provided as default by Kafka.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`object PostCreatedTimestampExtractor : TimestampExtractor {

    override fun extract(record: ConsumerRecord<Any, Any>, previousTimestamp: Long): Long {
        return if (record.value() is PostCreated) {
            LocalDateTime.parse((record.value() as PostCreated).timestamp)
                    .toInstant(ZoneOffset.UTC).toEpochMilli()
        } else previousTimestamp
    }
}`}</SyntaxHighlighter>

        <p>The main body of processing logic is very similar we log out each post and then group them by the userId and
            window these by a TimeWindow of 30 seconds. To reaffirm this will count the total posts for each user in a
            30 second window and emit the count on each event streamed in.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{` val aggregated: KTable<Windowed<String>, Long> = input
                .peek { key, postCreated -> logger.info("Key {} and value {}", key, postCreated) }
                .groupBy { _, value -> value.userId } // group by the user who created the post
                .windowedBy(
                        TimeWindows.of(Duration.ofSeconds(30)))
                .count()
`}</SyntaxHighlighter>


        <p>We then simply as before stream the User and Count of posts for each 30 second window back to a Kafka
            topic.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`aggregated.toStream { windowedKey, _ -> windowedKey.key() }
                .peek { key, value -> logger.info("Sending on Key {} value {}", key, value) }
                .to(outputTopic, Produced.with(Serdes.String(), Serdes.Long()))`}</SyntaxHighlighter>

        <p>To see the true power of this example the test is the place to <a
            href={"https://github.com/perkss/kotlin-kafka-and-kafka-streams-examples/blob/master/kotlin-kafka-streams-examples/src/test/kotlin/com/perkss/kafka/reactive/examples/AggregateExamplesTest.kt#L100"}>go. </a>
            In this test we manipulate the time of the PostCreated by moving it forward to move the window forward.
        </p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{` // Move 20 seconds forward in time #Window 1
        val eventTimeStamp3 = eventTimeStamp2.plusSeconds(20)

        postCreatedTopic.pipeInput(UUID.randomUUID().toString(),
                PostCreated(
                        UUID.randomUUID().toString(),
                        alice,
                        "Running",
                        eventTimeStamp3.formatInstantToIsoDateTime()))

        // New window
        // Move 2 seconds forward in time #Window 2
        val eventTimeStamp4 = eventTimeStamp3.plusSeconds(2)`}</SyntaxHighlighter>

        <p>We allow single window posts for all users and then in the second window Alice has two posts.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`        // Alice has a single post
        assertThat(outputTopic.readKeyValue(), equalTo(KeyValue(alice, 1L)))
        assertThat(outputTopic.readKeyValue(), equalTo(KeyValue(bill, 1L)))
        // Alice has a second post
        assertThat(outputTopic.readKeyValue(), equalTo(KeyValue(alice, 1L)))
        assertThat(outputTopic.readKeyValue(), equalTo(KeyValue(jasmine, 1L)))
        // Alice has a third post which is in the same window as her second post so aggregate
        assertThat(outputTopic.readKeyValue(), equalTo(KeyValue(alice, 2L)))`}</SyntaxHighlighter>

        <p>As expected the output of Alice count is twice in the second window as the default for Kafka streams is to
            emit on every event. As noted we will look at suppression to emit only on the close of the window.</p>

        <p>There you go folks post two. Windowing with a simple counting aggregation in Kafka Streams simple yet
            powerful concept well done on making it through!</p>

        <h4>#Post 3 Kafka Streams Windowed Final Result</h4>

        <p>Following on from our previous post where window count was used for new social media posts by users, we
            emitted the total user count each time a new post was created technically creating a new event that was
            processed by our topology. What if for example we wanted to alert on a large number of posts or only process
            each window once with an alert then we can use the <a
                href={"https://kafka.apache.org/25/javadoc/org/apache/kafka/streams/kstream/Suppressed.html"}><i>suppression</i></a> feature
            of Kafka streams to emit only on the window close or a time limit. Basically suppressing intermediate
            results and only sending on the final result per window.</p>

        <p>To use suppression in Kafka streams we simply add the call to suppress and the type of suppression we want to
            use in this example we use the <i>untilWindowCloses</i> with an unbounded buffer. A note for this is as
            suppression uses a state store we need to tell it how to materialize the key and value which serializers to
            use. Therefore we state in the <i>count</i> function how to materialize the view.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{` val aggregated: KTable<Windowed<String>, Long> = input
                .peek { key, postCreated -> logger.info("Key {} and value {}", key, postCreated) }
                .groupBy { _, value -> value.userId } // group by the user who created the post
                .windowedBy(
                        TimeWindows.of(Duration.ofSeconds(30)).grace(Duration.ZERO))
                // Note we need to materialize here as serdes changes
                .count(Materialized.with(Serdes.String(), Serdes.Long()))
                // Suppress the output so only output of a window is emitted when the window closes.
                .suppress(Suppressed.untilWindowCloses(unbounded()))
`}</SyntaxHighlighter>

        <p>In the test case we process the data the same but the output differs as Alice posts twice in window 2 we do
            not see the intermediate result of 1 but only the window emits when it closes so alice only emits the count
            of 2 for her social media posts. We manipulate the time of events as before and we use the custom time stamp
            extractor.</p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`val expectedValues = mutableListOf<KeyValue<String, Long>>(
                KeyValue(alice, 1L), // #Window1 Alice has a single post
                KeyValue(bill, 1L), // #Window1
                KeyValue(alice, 2L), // #Window2 Alice has a second post and a third post in the same window and it only emits the final values
                KeyValue(jasmine, 1L) // #Window2`}</SyntaxHighlighter>

        <p>To actually update the time in the window we also send an extra event to flush the window of results so we
            emit a dummy event. This is the expected behaviour as the window does not use wall clock time it uses the
            event times. This is discussed in the comments on <a
                href={"https://stackoverflow.com/questions/57480927/how-to-unit-test-a-kafka-stream-application-that-uses-session-window"}>stack
                overflow</a>.
        </p>

        <SyntaxHighlighter language='kotlin' style={darcula} showLineNumbers={false}
                           wrapLines={true}>{`// Dummy event to close the window suppress() will only emit if event-time passed window-end time plus grace-period
        logger.info("Sending in dummy event to flush the window")
        postCreatedTopic.pipeInput(UUID.randomUUID().toString(),
                PostCreated(UUID.randomUUID().toString(), alice, "Close that window",
                        eventTimeStamp6.formatInstantToIsoDateTime()))`}</SyntaxHighlighter>

        <p>A short post but powerful to see how we can only emit the final results of a window operation
            using <i>suppress</i>.</p>

        <p>docker run -d --name local_postgres -v postgres_data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=password
            -e POSTGRES_DB=db -p 54320:5432 postgres:11</p>

        <p>docker exec -it local_postgres psql -U postgres</p>

        <p>CREATE DATABASE testdb;</p>

        <p>CREATE TABLE my_left(num serial UNIQUE NOT NULL, id VARCHAR(2) PRIMARY KEY, time TIMESTAMP NOT NULL);</p>

        <p>CREATE TABLE my_right(num serial UNIQUE NOT NULL, id VARCHAR(2) PRIMARY KEY, time TIMESTAMP NOT NULL);</p>

        <p>INSERT INTO my_left(num, id, time) VALUES ('1', 'L1', '01/01/2020 12:02:00'::TIMESTAMP);</p>

        <p>INSERT INTO my_left(num, id, time) VALUES ('2', 'L2', '01/01/2020 12:06:00'::TIMESTAMP);</p>

        <p>INSERT INTO my_left(num, id, time) VALUES ('3', 'L3', '01/01/2020 12:03:00'::TIMESTAMP);</p>

        <p>INSERT INTO my_right(num, id, time) VALUES ('2', 'R2', '01/01/2020 12:01:00'::TIMESTAMP);</p>

        <p>INSERT INTO my_right(num, id, time) VALUES ('3', 'R3', '01/01/2020 12:04:00'::TIMESTAMP);</p>

        <p>INSERT INTO my_right(num, id, time) VALUES ('4', 'R4', '01/01/2020 12:05:00'::TIMESTAMP);</p>


        <p>SELECT num FROM my_right AS R;</p>

        <p>SELECT my_left.id AS L, my_right.id FROM my_left FULL OUTER JOIN my_right on my_left.num = my_right.num;</p>
        <p>my_left.id, my_right.id FROM my_left FULL OUTER JOIN my_right on my_left.num = my_right.num</p>

        <p></p>

        <h3 id={"Flink101"}>Apache Flink 101</h3>

    </div>


);

export default Streaming;