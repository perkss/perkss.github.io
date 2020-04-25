import React from 'react';

const DistributedData = () => (

    <div>
        <h2>Distributed Data</h2>

        <p><a href={"http://nathanmarz.com/blog/how-to-beat-the-cap-theorem.html"}>how to beat the cap theorem</a></p>

        <h3>Replication</h3>

        <h4>Kafka Distributed Replication</h4>

        <p><a href={"https://kafka.apache.org/documentation/#design_replicatedlog"}>Replicated Logs</a> when a write
            happens in Kafka it is served by the partition leader and replicated to the followers. Consume requests are
            also served by the partition leader to ensure consistency. If the leader fails a
            replica can step up and become the leader. But only if it is in synch with the leader this is <i>ISR</i>.
            You maybe blocked by slow ISR servers with this approach compared to other majority consensus algorithms
            such as Raft. Once the failed node returns it is unable to be part of the ISR set until it has caught up so
            will catch up missed data or start a fresh. If an unclean leader election scenario
            occurs where if all replicas become unavailable do we choose the first replica to come back to life even if
            its not in sync. Could result in data loss so if the <i>unclean.leader.election.enable</i> is true. Or we
            have this option set to false and wait for replica that is in ISR and elect it as the leader to come back.
            This is consistency vs availability problem and is up to the user of Kafka to decide.
        </p>

        <p>Ensuring consistency you can have a producer ack=all which will wait for all those in minimum ISR to respond
            before completing the produced message to Kafka so no messages are dropped.</p>

        <h3>Partitioning</h3>

        <h3>Transactions</h3>
        <p>When working with a single source a transaction can easily <strong>Two Phase Commit</strong> with
            <strong>BEGIN</strong> then do the operation then
            either <strong>COMMIT</strong> or <strong>ROLLBACK</strong>. For distributed systems we need to coordinate
            this process. In the distributed version the node starting the commit is the coordinator. In the PREPARE
            phase asks other nodes to promise to commit or rollback. If the node cannot PREPARE then it is rolled back
            the transaction. In the COMMIT phase the coordinator waits for all responses from the nodes that they are
            prepared. Once they are confirm the commit point site commits and all other nodes are asked to commit Once
            all nodes have committed successfully the FORGET phase happens where status information is erased and
            transaction is forgotten.</p>


        <h3>Consistency and Consensus</h3>

    </div>


);

export default DistributedData;