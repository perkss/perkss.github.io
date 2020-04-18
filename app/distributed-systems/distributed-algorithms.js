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
                ref]</a>. It does it by having a path in Zookeeper called <i>/election</i> which is ephemeral and
            sequenced then each broker appends itself to this file path with a guid and Zookeeper adds a sequence number
            greater than any pre existing guid and sequence number combination. Then Zookeeper selects the lowest
            sequence number as the leader elected. When the lowest sequence number is deleted as the broker has gone
            down notify clients and next number in sequence is elected leader. This can lead to a spike in Zookeeper as
            all clients will call it so the clients actually watch the next in the sequence and if that goes they then
            check and if no lower sequence use themselves as the leader.</p>
        <h4>Partition Leader Election</h4>

        <p>Once a controller is elected it will select partition leaders from brokers. Each partition has one broker
            that is its leader. Could be on different brokers for all partitions of a given topic. The controller is
            notified by
            Zookeeper if brokers go down and then can elect new partition leader. Generally only a member of the ISR set
            is used to become the leader.
        </p>

        <h4>Distributed Replication</h4>

        <p><a href={"https://kafka.apache.org/documentation/#design_replicatedlog"}>Replicated Logs</a> when a write
            happens in Kafka it is replicated to the followers. If the leader fails a replica can step up and become the
            leader. But only if it is in synch with the leader this is <i>ISR</i>. You maybe blocked by slow ISR servers
            with this approach compared to other majority consensus algorithms such as Raft. Once the failed node
            returns it is unable to be part of the ISR set until it has caught up so will catch up missed data or start
            a fresh. If an unclean leader election scenario
            occurs where if all replicas become unavailable do we choose the first replica to come back to life even if
            its not in sync. Could result in data loss so is the <i>unclean.leader.election.enable</i> is true. Or we
            have this option set to false and wait for replica that is in ISR and elect it as the leader to come back.
            This is consistency vs availability problem and is up to the user of Kafka to decide.
        </p>

        <p>Ensuring consistency you can have a producer ack=all which will wait for all those in minimum ISR to respond
            before completing the produced message to Kafka so no messages are dropped.</p>

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