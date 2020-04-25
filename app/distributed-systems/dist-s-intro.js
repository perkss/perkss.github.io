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
            The job
            of this processor thread is to take requests from the client connection and putting them in <i>request
                queue</i> and taking responses from the <i>response queue</i> and sending this response back to the
            client.</p>

    </div>


);

export default DistSIntro;