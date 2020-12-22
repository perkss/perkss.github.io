import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';

const FaultTolerance = () => (

    <div>

        <h2>Fault Tolerance</h2>

        <h3>Faults</h3>
        <h4>Two Generals Problem</h4>
        <p>This problem is common problem discussed in distributed systems and faults. Basically there is a city to
            attack with a general for each of the two armies under their control. To capture the city both of the
            generals armies must attack the city at the same time. Otherwise their armies are defeated if a single army
            attacks. Or nothing happens if neither army attacks.</p>

        <p>What we want is if an army attacks if and only if the other army attacks. Communication between the generals
            is tricky and unreliable. Here we can see the relation to distributed systems. Some scenarios that can
            happen is general 1 says I am attaching on August 1st. Message is received by general 2. General 2 replies
            yes agreed. This message though is lost and no reply is successfully returned to general 1. Another scenario
            is that the message sent by general 1 never makes it to general 2 and this scenario and the first look the
            same for general 1. General 1 does not know if his message got through or the response got through.</p>

        <p>A solution to this could be that general 1 always attacks if no response is received. General 1 sends a lot
            of messages saying attack at this time in the hope that at least one makes it through to general 2. This
            scenario could lead to all messages being lost and general 1 still attacks and loses.</p>

        <p>Alternatively general 1 could only attack if a response is received. This leads to general 2 being in the
            situation that general 1 was. That general 2's response needs to get through.</p>

        <p>This is referred to as <strong>No Common Knowledge</strong> in distributed systems. The only way of know is
            to communicate it successfully.</p>

        <h4>Byzantine Problem</h4>
        <p>This time we have three armies and three generals. In this scenario we assume that messages are reliable.
            Though we now assume that some generals are not loyal and are traitors and will lie and misbehave.</p>

        <p>An example of a malicious general is that general 1 says attack to general 2 and 3. But general 2 is being
            malicious and tells general 3 to retreat. For general 3 they will most likely think that general 2 is being
            honest and general 1 is being malicious by sending contradictory commands.</p>

        <p>How can general 3 know who is being honest?</p>

        <p>What we want to do here is to make all the honest generals communicate and agree on a plan. Therefore the
            theorem is if we have <i>f</i> malicious generals then we need <i>3f + 1</i> generals to tolerate <i>f</i>
            malicious generals. We need less than a third to be malicious.</p>

        <h4>System Model</h4>
        <p>We need to build systems with both nodes and networks that maybe faulty. <strong>Network
            behaviour</strong> we assume point to
            point communication. We can assume then different reliability scenarios of the network link to form three
            models. Perfect link scenario where messages always are received. Fair loss links where messages maybe
            lost, duped or reordered but eventually are delivered. This can be turned into perfect link by retry and
            deduplication. Or Arbitrary links that may interfere with messages, spoof, drop, replay for example. This
            can be turned into a fair loss link by using TLS.</p>

        <p><strong>Node behaviour</strong> we can categorize faulty into crash stop where if a faulty node fails it
            never returns. A crash recovery is a node that crashes but can resume executing. This node will lose any in
            memory state though. Byzantine model is if it deviates from the algorithm faulty nodes may do malicious
            things or crash. A correct node is one that is not faulty.
        </p>

        <p><strong>Timing behaviour</strong> model assumptions this can be synchronous where message latency is no long
            than upper bound. Partially synchronous is when the system is asynchronous for some periods of time that
            is finite. A asynchronous system a message can be delayed arbitrarily, nodes can pause execution arbitrarily
            and there are no timing guarantees.</p>

        <p>Nodes do usually execute code at predictable speed but pauses can be caused by OS system scheduling, garbage
            collection and page faults, swapping and disk thrashing.</p>

        <h4>Fault Tolerance Definitions</h4>

        <p><strong>Failure</strong> system as a whole is not working.</p>
        <p><strong>Fault</strong> some part of the system is not working. Might have single node crash, or a network
            fault.</p>
        <p><strong>Fault Tolerance</strong> system as a whole continues working but has some faults.</p>
        <p><strong>Single Point of Failure</strong> take out a network link critical that takes system out.</p>

        <p><strong>Failure detector</strong> a mechanism for detecting if a node is faulty.</p>
        <p><strong>Perfect failure detector</strong> labels a node as faulty if and only if its crashed.</p>
        <p>Usually detectors are implemented for crash stop and crash recovery nodes by sending a message to the
            node, awaiting for a response and label the node as crashed if it times out. Problem is is the node
            temporarily unresponsive, or a lost or delayed message. Impossible for the sender to distinguish between
            these scenarios.</p>

        <p>To overcome these problems <strong>eventually perfect failure detector</strong> can label nodes as crashed if
            not and as correct even if it is crashed, but will always eventually labels nodes as crashed if and only if
            it has crashed.</p>

        <h3>Network Issues</h3>

        <h3>Unreliable Clocks</h3>

        <h3>GC Pauses</h3>

        <p>Distributed GC Pause coordination.</p>

        <h3>Quorum Zookeeper and Kafka Cluster Redundancy</h3>

        <h2>Apache Samza Faut Tolerance Internals</h2>

        <h3>Task Fail Over</h3>

        <p><a href={"http://samza.apache.org/"}>Apache Samza</a> is a stream processing framework built out of LinkedIn.
            Samza processes workload in logical tasks each task is a unit of parallelism for your process. Each task
            consumes from a single partition of your data. Using Zookeeper for coordination <a
                href={"https://samza.apache.org/learn/documentation/latest/architecture/architecture-overview.html#task"}>Samza</a> can
            detect failed tasks and move them automatically to a working container that runs single or multiple tasks.
        </p>

        <p>This is explained fully in the docs a little hidden but located <a
            href={"https://samza.apache.org/learn/documentation/latest/deployment/standalone.html#coordinator-internals"}>here</a>.
            Another hidden reference from when they were releasing it can be read <a
                href={"http://samza.apache.org/startup/preview/#flexible-deployment-model"}>here</a>. Dynamic
            coordination provided by Zookeeper as a out the box solution but fully pluggable if requiring other
            solutions. The coordinators main tasks are to elect a leader from the selection of Samza containers to
            create the job model and to update it if containers leave or join. Notify Samza containers about a new
            job model. The creation of a cluster works by each Samza container (processor) register with the
            coordination service, in this example Zookeeper. The service elects one to a leader which will monitor all
            live participants. Whenever this list of participants change then a new job model is created and notifies
            all
            in the cluster. This notification is done by Zookeeper in this example. Each participant will stop
            processing, apply the new job model and then continue processing. To ensure that duplicates are not
            processed by containers running the same partition a barrier is used by the coordination service to
            synchronize all cluster participants and once synchronised pause, apply the job model and then resume.
        </p>

        <p>As we see next checkpointing protects Kafka consumers from missing messages when reapplying the job
            model.</p>

        <h3>Checkpointing</h3>

        <p><a
            href={"https://samza.apache.org/learn/documentation/latest/architecture/architecture-overview.html#incremental-checkpoints"}>Incremental
            checkpointing</a> is a powerful feature of Samza. This is the technique used to guarantee that messages are
            not lost. It does this be periodically persisting the latest consumed offset for each input partition for a
            stream task. If we fail over as mentioned above then when the task restarts on another container then it can
            resume from the last committed offset that is stored in the checkpoint. This checkpointing also is used for
            maintaining state stores.
        </p>

        <h3>Internal Workings with Kafka Consumer</h3>

        <p>Lets run an example where we have a simple application that consumes messages off a Kafka topic with three
            partitions. We will run a single instance to begin and then scale up and down and reference the flow within
            the Samza code. We will also check that messages sent to a partition currently being reassigned is not lost
            to ensure that checkpointing works. To ensure checkpointing is setup correctly within Samza you are required
            to set <i>task.checkpoint.factory</i> and also consider configuring from the default 1
            minute <i>task.commit.ms</i>. Please refer to <a
                href={"http://samza.apache.org/learn/documentation/latest/jobs/samza-configurations.html#checkpointing"}>configuration.</a>
        </p>

        <h4>Single Instance Registering Partitions</h4>
        <p>We start up our Samza application for the first time. This creates
            a <i>__samza_coordinator_order-grouping_1</i> topic and
            a <i>__samza_checkpoint_ver_1_for_order-grouping_1</i> which is for the checkpointing. Notice it uses
            the <i>app name</i> and the <i>app id</i>.</p>

        <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                           wrapLines={true}>
            {`docker exec kafka-1 kafka-console-consumer --bootstrap-server kafka-1:29091 --topic __samza_coordinator_order-grouping_1 --property print.key=true --property key.separator="-" --from-beginning`}
        </SyntaxHighlighter>

        <p>The coordination topic simply is stating the configuration that has been set as nothing has really happened
            so far.</p>

        <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                           wrapLines={true}>
            {`[1,"set-config","app.class"]-{"host":"192.168.1.89","source":"SamzaContainer","values":{"value":"demo.OrderGroupingTopology"},"username":"Stuart","timestamp":1608641454741}
[1,"set-config","systems.order-topology.samza.factory"]-{"host":"192.168.1.89","source":"SamzaContainer","values":{"value":"org.apache.samza.system.kafka.KafkaSystemFactory"},"username":"Stuart","timestamp":1608641454742}
[1,"set-config","systems.order-topology.producer.bootstrap.servers"]-{"host":"192.168.1.89","source":"SamzaContainer","values":{"value":"localhost:9092,localhost:9091,localhost:9093"},"username":"Stuart","timestamp":1608641454744}`}
        </SyntaxHighlighter>

        <p>Lets check out the check point topic.</p>

        <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                           wrapLines={true}>
            {`docker exec kafka-1 kafka-console-consumer --bootstrap-server kafka-1:29091 --topic __samza_checkpoint_ver_1_for_order-grouping_1 --property print.key=true --property key.separator="-" --from-beginning`}
        </SyntaxHighlighter>

        <p>Running this command will show us the details of the checkpoint topic as we have not sent any messages then
            we have listed the topic and partition and the current offset as this is a brand new topic this is set to
            null.</p>

        <SyntaxHighlighter language='json' style={darcula} showLineNumbers={false}
                           wrapLines={true}>
            {`{"systemstreampartition-grouper-factory":"org.apache.samza.container.grouper.stream.GroupByPartitionFactory","taskName":"Partition 1","type":"checkpoint"}-{"SystemStreamPartition [order-topology, grouped-orders, 1]":{"system":"order-topology","partition":"1","offset":"1608641637908-819141:null","stream":"grouped-orders"}}
{"systemstreampartition-grouper-factory":"org.apache.samza.container.grouper.stream.GroupByPartitionFactory","taskName":"Partition 0","type":"checkpoint"}-{"SystemStreamPartition [order-topology, grouped-orders, 0]":{"system":"order-topology","partition":"0","offset":"1608641637962-971204:null","stream":"grouped-orders"}}
{"systemstreampartition-grouper-factory":"org.apache.samza.container.grouper.stream.GroupByPartitionFactory","taskName":"Partition 2","type":"checkpoint"}-{"SystemStreamPartition [order-topology, grouped-orders, 2]":{"system":"order-topology","partition":"2","offset":"1608641638016-369352:null","stream":"grouped-orders"}}`}
        </SyntaxHighlighter>

        <p>Firstly lets send a message and check the checkpoint topic afterwards. We can now see that our message with a
            key of 5 was partitioned to partition 2.</p>

        <SyntaxHighlighter language='json' style={darcula} showLineNumbers={false}
                           wrapLines={true}>
            {`5:{"id":"5", "products": ["1"]}`} </SyntaxHighlighter>


        <SyntaxHighlighter language='json' style={darcula} showLineNumbers={false}
                           wrapLines={true}>
            {`{"systemstreampartition-grouper-factory":"org.apache.samza.container.grouper.stream.GroupByPartitionFactory","taskName":"Partition 0","type":"checkpoint"}-{"SystemStreamPartition [order-topology, order-request, 0]":{"system":"order-topology","partition":"0","offset":"0","stream":"order-request"},"SystemStreamPartition [order-topology, grouped-orders, 0]":{"system":"order-topology","partition":"0","offset":"1608641962496-333593:0","stream":"grouped-orders"}}`}
        </SyntaxHighlighter>

        <p>To get some data onto our topics we will play a few more messages to fill out the partitions.</p>

        <h4>Two Instances Registering Partitions</h4>

        <p>Now lets start up an instance 2 of our application. Our application creates a new path in Zookeeper following
            the usual pattern of leader election described in the <a
                href={"https://zookeeper.apache.org/doc/r3.6.1/recipes.html#sc_leaderElection"}>docs</a>.</p>

        <SyntaxHighlighter language='json' style={darcula} showLineNumbers={false}
                           wrapLines={true}>
            {`Created ephemeral path: /app-order-grouping-app-2/order-grouping-app-2-2.0-coordinationData/processors/0000000000`} </SyntaxHighlighter>


        <SyntaxHighlighter language='json' style={darcula} showLineNumbers={false}
                           wrapLines={true}>
            {`tryBecomeLeader: index = 0 for path=/app-order-grouping-app-2/order-grouping-app-2-2.0-coordinationData/processors/0000000000 out of [0000000000]`} </SyntaxHighlighter>

        <p>You should see that it then registers and subscribes to partitions 0,1,2 all three of them. The
            KafkaSystemConsumer logs this out <i>Registering ssp: SystemStreamPartition [order-topology, order-request,
                2] with offset: 0</i>. Code <a
                href={"https://github.com/apache/samza/blob/1.5.1/samza-kafka/src/main/java/org/apache/samza/system/kafka/KafkaSystemConsumer.java#L272"}>here</a>.
            Now lets start up a second instance with the same instance id and app name.</p>

        <p>Our first started instance A detects another child in the ZK Path</p>

        <SyntaxHighlighter language='json' style={darcula} showLineNumbers={false}
                           wrapLines={true}>
            {`org.apache.samza.zk.ZkUtils - Found these children - [0000000000, 0000000001]
            Generating new JobModel with processors`} </SyntaxHighlighter>

        <p>It then shuts down almost and then rebuilds the job model and is told the tasks to work on in this case
            Partition 1. The code that recreates this model and assigns the tasks for this instance to run is
            found <a
                href={"https://github.com/apache/samza/blob/1.5.1/samza-core/src/main/java/org/apache/samza/zk/ZkJobCoordinator.java#L271"}>here</a>.
        </p>
        <SyntaxHighlighter language='json' style={darcula} showLineNumbers={false}
                           wrapLines={true}>
            {`Got task SSPs: Set(SystemStreamPartition [order-topology, order-request, 1])`} </SyntaxHighlighter>

        <p>It then registers the Kafka consumer to this partition and starts consuming considering the checkpoint
            position.</p>

        <p>The second instance B starts up and detects there is already children and a leader when it tries to become a
            leader. It creates its new child path at 0000000001 and now the ZK path has two children [0000000000,
            0000000001]. Therefore instance B 0000000001 watches the leader and continues as a non leader. ZK Leader
            election will add incrementing sequence numbered child paths and the lowest sequence number will be up for
            leader
            election. In this case 0000000000 is the lowest so is elected the leader. As 0000000000 we need to watch it
            in case it fails and its path is removed in Zookeeper as these paths are ephemeral. Therefore Zookeeper sets
            the next sequenced child node to watch the leader this is sufficient. Otherwise if all children watch it
            then we would get a spike of leader election watch updates from all child nodes known as herd effect.
            Therefore the next in line for potential election is the only watcher so in this case 0000000001. If
            0000000001 got a notification saying 0000000000 is removed then it will get elected if no smaller ZNodes in
            the sequence.</p>

        <SyntaxHighlighter language='json' style={darcula} showLineNumbers={false}
                           wrapLines={true}>
            {`ZkUtils - Created ephemeral path: /app-order-grouping-app-2/order-grouping-app-2-2.0-coordinationData/processors/0000000001 for processor: StuartsMBP2018 4600249a-bfaa-4d26-88b2-4cc979ec6a94 in zookeeper.
15:19:56.274 [main] INFO  org.apache.samza.zk.ZkUtils - Found these children - [0000000000, 0000000001]
15:19:56.304 [main] INFO  org.apache.samza.zk.ZkUtils - Found these children - [0000000000, 0000000001]
15:19:56.304 [main] INFO  org.apache.samza.zk.ZkLeaderElector - tryBecomeLeader: index = 1 for path=/app-order-grouping-app-2/order-grouping-app-2-2.0-coordinationData/processors/0000000001 out of [0000000000, 0000000001]
15:19:56.304 [main] INFO  org.apache.samza.zk.ZkLeaderElector - Index = 1 Not eligible to be a leader yet!
15:19:56.304 [main] INFO  org.apache.samza.zk.ZkLeaderElector - [Processor-4600249a-bfaa-4d26-88b2-4cc979ec6a94] Subscribing data change for 0000000000
15:19:56.313 [main] INFO  org.apache.samza.zk.ZkLeaderElector - [Processor-4600249a-bfaa-4d26-88b2-4cc979ec6a94] Predecessor still exists. Current subscription is valid. Continuing as non-leader.
15:19:56.314 [main] INFO  org.apache.samza.zk.ZkUtils`} </SyntaxHighlighter>

        <p>It also then gets tasks assigned reference code <a
            href={"https://github.com/apache/samza/blob/1.5.1/samza-core/src/main/scala/org/apache/samza/container/SamzaContainer.scala#L558"}>here</a>.
        </p>

        <SyntaxHighlighter language='json' style={darcula} showLineNumbers={false}
                           wrapLines={true}>
            {`o.a.samza.container.SamzaContainer$ - Got task SSPs: Set(SystemStreamPartition [order-topology, order-request, 0])
            o.a.samza.container.SamzaContainer$ - Got task SSPs: Set(SystemStreamPartition [order-topology, order-request, 2])`} </SyntaxHighlighter>

        <p>The application then reads the checkpoints for its assignd tasks</p>

        <SyntaxHighlighter language='json' style={darcula} showLineNumbers={false}
                           wrapLines={true}>
            {`INFO  o.a.s.c.kafka.KafkaCheckpointManager - Reading checkpoint for taskName Partition 0
             [Samza StreamProcessor Container Thread-0] INFO  o.a.s.c.kafka.KafkaCheckpointManager - Reading checkpoints for the first time`} </SyntaxHighlighter>

        <p>It will successfully load the offsets and then resume. By registering the partitions to the
            KafkaSystemConsumer. <a
                href={"https://github.com/apache/samza/blob/1.5.1/samza-core/src/main/scala/org/apache/samza/checkpoint/OffsetManager.scala#L202"}>Reference</a>.
        </p>

        <SyntaxHighlighter language='json' style={darcula} showLineNumbers={false}
                           wrapLines={true}>
            {`o.a.samza.checkpoint.OffsetManager - Successfully loaded starting offsets`} </SyntaxHighlighter>

        <h4>Send message whilst reassigning task</h4>
        <p>As the checkpoints are logged down at intervals. We know the current offset for each partition. When a
            instance starts up or partitions are restored to an existing instance it can resume from the last
            check pointed offset guaranteeing that we can have at least once semantics, as this message may have been
            processed but not committed so potentials for duplicate messages to be processed.</p>

    </div>


);

export default FaultTolerance;