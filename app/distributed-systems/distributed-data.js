import React from 'react';

const DistributedData = () => (

    <div>
        <h2>Distributed Data</h2>

        <p><a href={"http://nathanmarz.com/blog/how-to-beat-the-cap-theorem.html"}>how to beat the cap theorem</a></p>

        <h3>Replication</h3>

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