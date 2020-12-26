import React from 'react';

const DistributedAlgorithms = () => (

    <div>

        <h2>Distributed Algorithms</h2>

        <h3>Broadcast Protocols</h3>

        <p>A broadcast in distributed systems is when a message is sent by one node and it is delivered to all
            nodes. If a single node is faulty it should not impact the other nodes some fault tolerance required. In
            this section we describe broadcasting over a point to point network rather than the hardware level IP
            multicast.</p>

        <p>The broadcast algorithm will broadcast a message then they are buffered and then it delivers it to the other
            nodes. Now we will look into some forms of reliable broadcasting.</p>

        <p><strong>Single Source FIFO Broadcast</strong> guarantees that messages sent by the same node must be
            delivered in the order they were sent by all other nodes. Messages sent by different nodes can be delivered
            in any order. This algorithm will broadcast and also send it back to itself. There are no guarantees of
            ordering across different nodes. A message delivered by Node A or B to node C the order can diff.</p>
        <p><strong>Causal Broadcast</strong> ensures that messages are delivered in causal order (happens before
            relation ordered). The algorithm will ensure that a message 1 sent by a node say A will be delivered to all
            nodes before sending message 2 that depends on the message 1 say sent by node B if message 1
            happens before message 2. Although concurrent messages can be delivered in any order between nodes as they
            have no causal dependency. Say a message 3 was sent by Node A. A message 2 was sent concurrently (doesnt
            need to be exact same time concurrency in causal sense) by Node B. Then node C can receive either message 1
            or message 2 and it will be valid in this algorithm. So we can see that nodes can get differences in order
            of received messages. The algorithm checks for dependencies of messages and will wait to send messages until
            all the dependent messages have been delivered keeping the happens before principal.
        </p>
        <p><strong>Total Order Broadcast</strong> puts all messages in the system into a complete order with guarantee,
            all nodes deliver messages in the same order for each node no matter which node sent them.
            When delivering to itself a node may broadcast a message in the wrong order so it will not receive the
            message itself until the correct order named a hold back. For example if a node receives message 1 and then
            message 2 all other nodes are guaranteed to receive message 1 and then message 2. The ordering of messages
            can differ in different runs but the algorithm is fine as long as all the nodes get the messages in the same
            order on that run. This algorithm is a little trick to implement a simple way is to designate a <strong>single
                leader</strong>. Then
            to broadcast a message you send it to the leader who in turn sends it via FIFO broadcast. A neat solution
            but a single point of failure if the leader crashes. An alternative is to attach a <strong>Lamport
                timestamp</strong> to each
            message and deliver messages in total order of timestamps. A obvious problem is that when a node receives a
            message how can I guarantee that no lower ordered timestamp messages are received. We can use FIFO links
            between the nodes to guarantee this and then wait for message with timestamp on all nodes.
        </p>
        <p><strong>FIFO Total Order Broadcast</strong> this will guarantee the ordering across nodes and the guarantee
            on messages sent by the same node must be delivered in the order on which the sender sent them.</p>

        <p>To add <strong>reliability</strong> to broadcast algorithms you may think we could do individual reliable
            links with retry
            and deduplicate. This does not work on broadcast algorithms due to a node may crash before all messages are
            delivered in this case the sender is down so no other node will send the messages or retry.</p>

        <p><strong>Eager reliable broadcast</strong> a simple solution offered is that the first time a node receives a
            particular message, it will then re broadcast this message to each other node. To repeat the message sending
            to nodes. If nodes crash all non crashed nodes will get the message, but this is up to <i>O(n^2)</i> in
            messages send for <i>n</i> nodes.</p>

        <p><strong>Gossip protocols</strong> attempt to improve on this. Simply its the above algorithm when a node
            receives a message but only forward to 3 other random nodes on receiving a message for the first time.
            Inspired by how gossip spreads in humanity. We will discuss this in further detail later as there are many
            opportunities to optimise this. High probability of success of sending.</p>

        <p>Now we have seen reliability how do we sort the ordering. We refer back to our broadcast algorithms that
            order messages FIFO, Causal, Total Ordered, FIFO Total Ordered.</p>

        <h3>Consensus Algorithms</h3>

        <p>How do elect a leader, how do we manage electing a new leader if the first leader fails? Consensus is
            required. Some primitive options include manual failover where a human will manually configure a new
            leader. This approach is used in many databases which works fine for planned maintenance, but unexpected
            failures it does not work. Ideally we want to automatically choose a new leader and consensus algorithms
            allow this.</p>

        <p>Firstly what is consensus. In our scenario it is several nodes want to come to an agreement about a single
            value. How do they all agree on a single value? This can be seen as equivalent to total order broadcast as
            here they require consensus on the next message that needs to be delivered. Once one node decides on a order
            they all need to be the same order.</p>

        <p>https://www.microsoft.com/en-us/research/uploads/prod/2016/12/The-Part-Time-Parliament.pdf</p>

        <h4>Consensus System Model</h4>

        <p>We require a system model for discussing the consensus algorithms. For Paxos, Raft ... they assume a
            partially synchronous (allow asynchronous but have a finite end time), crash recovery system model. Ideally
            asynchronous would want to be the model but this is impossible to achieve and the FLP result proves
            this.</p>

        <p>We require detecting if a leader fails we can use a simple technique of a timeout to determine a suspected
            crash or unavailability of a leader. On a suspected leader crash we elect a new one. We need to prevent
            having <strong>two leaders at the same time</strong> named the <strong>split brain</strong> problem.</p>

        <h4>Paxos</h4>

        <p>This is the classic consensus algorithm. For agreeing on a single value. There is also a multi Paxos for
            agreeing on multiple values a generalisation for total order broadcast.</p>

        <p><a href={"https://www.youtube.com/watch?v=d7nAGI_NZPk&ab_channel=GoogleTechTalks"}>A great Google talk.</a>
        </p>

        <h4>Raft</h4>

        <p>Raft is one of the newest consensus algorithms. Each node awakes randomly and
            sends a proposal, all the rest respond with votes if this server node gets the highest number of votes then
            it wins. <a href={"http://thesecretlivesofdata.com/raft/"}>A great visualisation.</a> <a
                href={"https://pdos.csail.mit.edu/6.824/papers/raft-extended.pdf"}>A extended paper on Raft.</a></p>

        <p>We use terms to elect a leader like a parliamentary term and ensure that there is less than or equal to 1
            leader per term. The term is incremented every time a leader election is started, a node can only vote once
            per term again like parliament voting. We require a quorum of nodes to elect a leader in a term.</p>

        <p>This will guarantee that we have a unique leader per term. But it cannot prevent having multiple leaders from
            different terms. Our leader may be cut off my network partition for example. So if we have three nodes the
            other two nodes will elect a leader between themselves so now we have the original leader as a single node
            and a new leader in the other two nodes. Sounds like the split brain problem.</p>

        <p>To overcome this problem the leader will first get acknowledgements from the quorum for every message its
            delivers (decision). Therefore the single leader would not be able to complete any messages it sends as the
            followers will not respond. If nodes get contradictory messages in the same term they will also not
            acknowledge the message.</p>

        <p>Raft has three key roles <strong>Follower</strong> starts up or recovers from
            crash, we then need a leader so we have <strong>Candidates</strong> that followers transfer roles too if
            they suspect a leader failure. Finally the <strong>Leader</strong> and candidates will ask to become leader
            and get votes from the quorum. A candidate may fail to become a leader if they discover a higher term or do
            not get enough votes before the timeout in this case it will retry, once a node is leader it will remain
            leader until it crashes or discovers a new term.
        </p>

        <p>On initialisation of the nodes they are all followers with no current leader set and an empty log and current
            term as 0. When a node detects if thinks there is a leader failure then it will move to a candidate role and
            increment its term. The node will vote for itself to become leader and then send a VoteRequest to each of
            the nodes and starts the election timer. When a node receives a VoteRequest they will check that their Log
            is ok that the leader term is higher than their last term, or the terms match and the log between the
            candidate and the follower matches. This stops us from voting for a candidate with an out of date log. We
            also check that we only vote for one candidate per term. If we pass the term ok and the log ok checks
            then we will respond with a VoteResponse true to vote for candidate. If either fails we send a VoteResponse
            false stating we do not vote for this candidate and send back the term.</p>

        <p>On the candidate receiving the VoteResponse if we find a term differs then we cancel being candidate as the
            term has increased and we cancel the election timer and become a follower. If we get a valid term response
            back we increase our votes received when the number of votes received is a majority quorum so <i>(number of
                nodes +
                1) / 2</i> we then become the leader set the current leader to our own node id and then cancel the
            election timer. We then keep a list of sentLength for each follower to the current log length and we set the
            ack length to be zero. We then tell each follower to start ReplicateLog.</p>

        <p>The leader once elected will receive broadcast messages (any follower get a broadcast message it will forward
            to the leader) and then append it to the log, then for each
            follower call Replicate Log for the followers to replicate. The leader will also repeatedly call Replicate
            Log periodically on a timer. The Replicate Log function acts as a heartbeat if entries to replicate is empty
            which acts as a heartbeat so that nodes know the leader is still alive. The function sends log request
            message to each follower informing the follower of the leader id, the current term, the previous log term,
            the commit length and the entries.</p>

        <p>When a follower receives a log request it will check the current term and update if required due to new
            term. If the followers log length is greater than or equal to the log length received on the log
            request. Otherwise we would have a gap in the log and would have to get back in synch first. Once we have
            check the terms match and the log is ok, we stay in the follower role and we call AppendEntries(logLength,
            leaderCommit, entries). The follower then returns the LogResponse where we return back the current term, our
            follower id and the acknowledgement of our log length. Or if our checks are not ok we acknowledge back false
            so the leader knows we have an issue with the log. The AppendEntries function checks our log length matches
            the leader log length. If we find our follower log is longer then we wipe them, these are non committed
            entries its fine. We then append the entries to the our follower log the leader is telling us about. The
            leader commit happens that we deliver our new records that have been committed locally and then we return
            back to the leader and bring our commit length in line with the leaders knowledge of the followers commit
            length.</p>


        <p>When the leader receives a log acknowledgment it will check the term matches the leaders current term, if it
            is higher the leader will exit being a leader as a new higher term leader has been detected. If we are the
            current leader then we update the followers sent length and acknowledged length for ok and CommitLogEntries.
            Else
            if the follower length is behind the leader we reduce the sent length of that follower by minus 1. We then
            send the earlier entry, this process may repeat if the follower if quite far behind the leader. A leader can
            commit a log entry in the CommitLogEntries function it requires that the quorum of nodes acknowledge that
            they are ready to commit the new log entries. We then wait for the acknowledgements and we commit and
            deliver to the application from the leader node. This is total order broadcast.</p>

        <p></p>

        <h4>Zab</h4>

        <p><a href={"https://cwiki.apache.org/confluence/display/ZOOKEEPER/Zab+vs.+Paxos"}>ZAB Vs Paxos</a>
            <a href={"https://zookeeper.apache.org/doc/r3.4.13/zookeeperInternals.html"}>Zookeeper internals</a>
            <a href={"http://www.cs.cornell.edu/courses/cs6452/2012sp/papers/zab-ieee.pdf"}>Zab Paper</a>
            <a href={"https://www.confluent.io/blog/distributed-consensus-reloaded-apache-zookeeper-and-replication-in-kafka/"}>A
                little dated but Zookeeper and Kafka.</a>
        </p>


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