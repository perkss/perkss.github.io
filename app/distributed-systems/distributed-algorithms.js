import React from 'react';

const DistributedAlgorithms = () => (

    <div>

        <h2>Distributed Algorithms</h2>

        <h3>Consensus Algorithms</h3>

        <p>https://www.microsoft.com/en-us/research/uploads/prod/2016/12/The-Part-Time-Parliament.pdf</p>

        <h4>Paxos</h4>

        <h4>Raft</h4>

        <p>One of the newest consensus algorithms and is simple. Each node awakes randomly and sends a proposal, all the
            rest respond with votes if this server node gets the highest number of votes then it wins.</p>

        <h4>Zab</h4>

        <h4>Viewstamped Replication (VR)</h4>

        <h3>Kafka Controller and Partition Leader Election</h3>

        <h4>Controller Election</h4>

        <p>In each Kafka cluster there is an elected controller, each broker is a controller but only one is elected at
            each time. Its behaves as a normal broker but with extra responsibilities such as keeping track of nodes
            joining and leaving the cluster and selecting partition leaders and rebalancing partitions. It also does the
            admin tasks of modifying topics. In Kafka Zookeeper does this controller election. <a
                href={"https://hackernoon.com/apache-kafkas-distributed-system-firefighter-the-controller-broker-1afca1eae302"}>[Great
                ref]</a>. For Kafka the brokers all attempt to create a ephemeral node in Zookeeper when they start up.
            This is called <i>/controller</i> after the first started broker succeeds and creates this the other brokers
            get a node exists already exception back from Zookeeper. They create a Zookeeper watch on the controller
            node path in Zookeeper then get notified when changes to this ZK Node are made. If a broker that is the
            current controller is stopped or loses connection then the ephemeral <i>/controller</i> node in Zookeeper
            will be removed. ZK will notify the other brokers as they are ZK Watchers adn the process starts again and
            the first to create the node will be the new controller node in the cluster.</p>

        <h4>Partition Leader Election</h4>

        <p>Once a controller is elected it will select partition leaders from brokers. Each partition has one broker
            that is its leader. The leader could be on different brokers for each partition of a given topic. The
            controller is notified by Zookeeper if brokers go down and then can elect new partition leader by watching
            the <i>/broker</i> node in Zookeeper. Generally only a member of the ISR set is used to become the leader
            unless <i>unclean.leader.election.enable</i> is configured. Once the selected a leader the controller will
            send a request to all brokers with the new leader and the followers for partitions information. Each leader
            will then know to start serving producing and consuming requests for clients and the followers know to
            replicate.
        </p>

        <h3>General Zookeeper Leadership Election</h3>

        <p>General leadership election in Zookeeper works by having a path in Zookeeper
            called <i>/my-app-leader</i> which is ephemeral and
            sequenced then each broker appends itself to this file path with a guid and Zookeeper adds a sequence number
            greater than any pre existing guid and sequence number combination. Then Zookeeper selects the lowest
            sequence number as the leader elected. When the lowest sequence number is deleted as the broker has gone
            down notify clients and next number in sequence is elected leader. This can lead to a spike in Zookeeper as
            all clients will call it so the clients actually watch the next in the sequence and if that goes they then
            check and if no lower sequence use themselves as the leader. You always need a quorum in Zookeeper and it is
            always required to have a majority of this quorum to work. This stops a split brain scenario for example
            when you have a 3 node cluster of Zookeeper. If you split and have 2 nodes and 1 node in two separate
            clusters incorrectly as the single node is not a majority of the quorum then it will not work but the 2 node
            cluster will.</p>

        <h3>Elasticsearch Cluster Coordination</h3>

        <p>Elasticsearch clusters are made up of nodes these nodes can be set to different modes and by default they are
            all modes. These modes are <strong>Master
                Eligible</strong> allowed to be elected as master node of
            cluster, <strong>Data</strong> which holds data, and performs data related
            tasks, <strong>Ingest</strong> are able to apply an ingest pipeline where transformations can be applied
            and <strong>Machine Learning</strong> node for these features <a
                href={"https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-node.html"}>[ES]</a>.
        </p>

        <p>Prior to ES 7.0 Zen Discovery was used for cluster coordination. This works by providing a list of seed nodes
            to discover and try to connect too and then use a gossip like protocol to discover the complete cluster. In
            7.0 changes were made to it. Discovery happens by list of seed nodes to connect too and connects providing a
            list of the master eligible nodes it knows and that knows returns its list to build a bigger list for both.
            They continue then connecting and probing each of the new nodes in the list.
            And continues until it detects a master elected node or enough master eligible to start election process.
            Elasticsearch uses voting configuration. The voting configuration uses usually all of the master eligible
            nodes whose votes are counted when making cluster wide decisions. The quorum is the simple majority of the
            voting configuration. If a node cannot discover a master node or meet the quorum requirement itself warnings
            are logged. There should always be a odd number of master nodes available if there is an even number then <a
                href={"https://www.elastic.co/guide/en/elasticsearch/reference/master/modules-discovery-voting.html#_even_numbers_of_master_eligible_nodes"}>
                ES</a> will then reduce it to be an odd number to protect against split brain problem.</p>

        <p>ES Basic Write Model it will write to the primary shard, this shard will validate incoming data execute
            operation locally, forward to each replica in the in sync copies set, once all replicas have responded
            successfully the primary shard will acknowledge success to client. When reading the request will come into
            the node this will coordinate by resolving the relevant shards and forwarding the request. Select an active
            copy of each shard either primary or replica. Send the read request to each selected shard wait for response
            combine it and respond. Elasticsearch will break indices into shards and distribute it out for performance
            reason and then replicate these shards.</p>


    </div>


);

export default DistributedAlgorithms;