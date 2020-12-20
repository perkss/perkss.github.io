import React from 'react';

const DistSIntro = () => (

    <div>
        <h2>Distributed Systems</h2>
        <p>Welcome to <strong>Distributed Systems</strong> please read below and then select from the menu items to
            begin your
            journey. This section will discuss many popular and academic aspects of distributed systems, discussing how
            popular distributed systems like Kafka and ElasticSearch work under the hood in a distributed and fault
            tolerance manor. Along with looking at fundamental architectures such as the Kappa Architecture and how it
            applies to the CAP Theorem. The fun of streaming joins, leader election, replication and node failure
            detection and many other things. Enjoy!!</p>

        <p>Distributed systems are all about moving data between machines therefore we always need to
            consider <strong>Latency</strong> the time until a message arrives. Or the <strong>Bandwidth</strong> the
            data volume per unit of time.</p>

        <h3>Remote Procedure Call</h3>

        <p>Remote procedure calls (Remote Method Invocation) can be used in distributed systems which is when you call a
            function and it invokes on another node in the distributed system. Examples of RPC are CORBA, SOAP, Thrift,
            gRPC and REST (unless you are a purist of REST). These RPC functions are designed to look like normal
            function calls, but as they are remote they may result in lost messages, delayed messages, can you retry?</p>

        <h3>Distributed Time Clocks and Event Ordering</h3>

        <p>Time is used all over the place in distributed systems for example scheduling jobs, timeouts, retry timers,
            performance profiling, timestamps of event times or ingestion times, windowing, cache validity and ordering
            events.</p>

        <p>Two types of clocks are used in distributed systems <strong>physical</strong> clocks that are your everyday
            clock counting
            seconds elapsed and also <strong>logical</strong> clocks which count events. Quartz crystals are used for
            computer clocks usually. These resonate a signal with a regular frequency. This frequency can drift with
            temperature changes to make them run faster or slower and drift away from the current correct time. A more
            accurate clock but expensive is to use atomic clocks. Satellites have these in used for GPS which can be
            used to get accurate current time.</p>

        <p>Coordinated Universal Time (UTC) is the reference time for all timezones. This uses international atomic time
            to be accurate and UTC in modern times means international atomic time with some corrections due to the
            Earth rotation changes. Daylight savings and timezones are calculated by offsets from this time. Leap
            seconds exist and happen every year on the 30th June and 31 December. Where the clock can jump forward
            skipping a second, move as usual or moves after one second. Troublesome for computers the approach to solve
            this is to spread the leap second throughout the day.</p>

        <p>Computers represent time usually using either <strong>Unix Time</strong> number of seconds since the epoch 1
            January 1970. Or <strong>ISO 8601</strong> a time with an offset relative to UTC.</p>

        <p>In distributed systems due to clock drift where clock errors occur <strong>clock skew</strong> can happen
            where a difference exists between two clocks at a point in time. To solve this issue your computers will get
            a current time from a more accurate clock time source such as a atomic clock. Two protocols are used to
            achieve this firstly Network Time Protocol (NTP). This protocol works in a hierarchy where you can either
            get directly from the atomic clock or be synced directly or be 1 step away from it synch with the synced
            directly server. The success of this approach depends on the network conditions. The clint will request the
            time from the NTP server and apply the correction to its clock. By either slowing or speeding up the client
            clock to drift together the two clocks to skew the clocks to the same time. If the time difference is too
            great then you step the clock by reset it to the estimated server timestamp. If the difference is massive
            then it does nothing and leaves the error to the human operator.</p>

        <p>Time of day clock is the time since a fixed date such as epoch time may just forward or backwards due to NTP
            stepping but can be used to compare between synced nodes. Monotonic clock is the time since a arbitrary
            point for example when the machine boots up moves in near constant time good for measuring time on a single
            node.</p>


        <h3>The CAP Theorem</h3>


        <h2>Bits that did not fit elsewhere</h2>

        <h3>Zookeeper Internals</h3>

        <h3>Kafka Request Processing</h3>

        <p>A lot of what a Kafka broker does is dealing with requests from clients, replicas and the controller. Kafka
            communicates with these via TCP and its own binary format. This format has a standard header made up
            of <i>Request API Key</i> the type of request, <i>Request API Version</i> for handling different versions of
            clients, <i>Correlation ID</i> unique ID or the request that appears in the response and in the error
            logs, <i>Client ID</i> used for identifying the application that sent the request. <a
                href={"http://kafka.apache.org/protocol.html"}>Docs</a> is the best place to read this in detail.</p>
        <p>The broker accepts requests on the ports is it listening on. Listening on this port is a acceptor thread that
            accepts client requests and creates a connection and a processor thread for dealing with this connection.
            The job of this processor thread is to take requests from the client connection and putting them in <i>request
                queue</i> and taking responses from the <i>response queue</i> and sending this response back to the
            client. </p>

        <h4>Metadata Requests</h4>

        <p>The most common form of requests used by Kafka protocol
            are <strong>Fetch</strong> and <strong>Produce</strong> requests. Both are these requests are sent to the
            leader of the partition, but how do clients find out who the leader of the partition is? They send
            a <strong>Metadata</strong> request that includes a list of topics the client is interested in. These can be
            sent to any broker and return the partitions, the replicas and which broker is the leader. The information
            is refreshed by the client. If it trys to produce or fetch from the wrong broker which is not the leader
            then a <i>Not a leader</i> response is returned.</p>

        <h4>Produce Requests</h4>

        <p>When a client wants to write a message to Kafka it sends a Produce Request to the leader of the partitions
            broker. The broker validates this check by checking is the client permissioned, is the number of Acks valid,
            if All is set are there enough ISR to accept the request. The broker then writes to disk then depending on
            the Acks configuration will either queue and wait for the replica responses or reply immediately.</p>

        <h4>Fetch Requests</h4>

        <p>When a client wants to consume messages from a Kafka topic a fetch request is made to the leader of the
            topic. Asking for data from these topics, for these partitions and from these offsets. If request is valid
            the broker will use zero copy where no data is stored in local cache on read from disk and sent back to the
            client. Upper and lower boundaries on response size are set by the clients where if the lower boundary is
            not met in a certain period of time then messages will be released by the broker and sent to the client so
            it does not wait forever. The reads of messages are usually only allowed from the leader that have been
            replicated to the minimum ISR.</p>

    </div>


);

export default DistSIntro;