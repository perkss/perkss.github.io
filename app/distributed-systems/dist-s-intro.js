import React from 'react';

const DistSIntro = () => (

    <div>
        <h2>Distributed Systems</h2>
        <p>Welcome to the <strong>Distributed Systems</strong> please select from the menu items to begin your
            journey. This section will discuss many popular and academic aspects of distributed systems, discussing how
            mainstreams systems like Kafka and ElasticSearch work under the hood in a distributed and fault tolerance
            manor. Along with looking at fundamental architectures such as the Kappa Architecture and how it applies to
            the CAP Theorem. The fun of streaming joins, leader election, replication and node failure detection and
            many other things. Enjoy!!</p>

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