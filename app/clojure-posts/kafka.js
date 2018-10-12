import React, { Component } from 'react';
import Latex from 'react-latex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, docco } from 'react-syntax-highlighter/styles/hljs';


const KafkaClojure = () => (

	<div>
	<h2>Kafka Examples in Clojure</h2>
	<h3>Some Background</h3>
	<p>This section will look at two great technologies Kafka and Kafka Streams using Clojure. At the time of writing this there is not much around on the web about using the Java API of Kafka with Clojure. There are numerous wrappers around that we will look at shortly, but I wanted to investigate and share using the Java API with Clojure and provide tutorials on how to do this with Kafka and Kafka Streams to produce useful applications. First up we have a tutorial on creating a app that consumers from a topic and outputs to another topic in Clojure using Kafka. All example code can be found <a href="https://github.com/perkss/clj-kafka-examples">here</a>.</p>

	<h3>#Post 1: Simple Producer and Consumer in Kafka with Java API Interop</h3>
	<p>Lets see the most basic use of Kafka where we can consume messages off a Kafka topic and then produce messages to another Kafka topic in Clojure. The code for this example is available <a href="https://github.com/perkss/clj-kafka-examples/tree/master/kafka-producer-consumer-example">here</a>. To begin using the Kafka clients in a Clojure project we need to import the dependency of kafka-clients as shown.</p>

	<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={false} wrapLines={true}>{`[org.apache.kafka/kafka-clients "2.0.0"]`}</SyntaxHighlighter>

	<p>You then have the dependencies required for the example we need to import them into our .clj file to be used this is done as follows. This provides access to create an instance of the KafkaConsumer and the KafkaProducer along with the serializers required to serialize and deserialize messages to and from the Kafka topics here we just use the string versions.</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(:import
            (org.apache.kafka.clients.consumer ConsumerConfig KafkaConsumer)
            (org.apache.kafka.common.serialization StringSerializer StringDeserializer)
            (org.apache.kafka.clients.producer KafkaProducer ProducerRecord)`}</SyntaxHighlighter>

	<p>Lets now look at how we can build a consumer instance to be used to consume messages from our example-topic.</p>

	<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn- build-consumer
  "Create the consumer instance to consume
from the provided kafka topic name"
  [consumer-topic bootstrap-server]
  (let [consumer-props
        {"bootstrap.servers", bootstrap-server
         "group.id",          "My-Group"
         "key.deserializer",  StringDeserializer
         "value.deserializer", StringDeserializer
         "auto.offset.reset", "earliest"
         "enable.auto.commit", "true"}]

    (doto (KafkaConsumer. consumer-props)
      (.subscribe [consumer-topic]))))`}</SyntaxHighlighter>

	<p>In the example I have created a function to build the consumer fully to make it clearer. The function accepts the bootstrap server list which is the kafka brokers and port numbers. This example uses just a single kafka broker instance. We first define the properties of the Kafka consumer which is simply a map of key value pairs of configuration. The key part is where we define the instance of the Consumer this is created with: </p>

	<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={false} wrapLines={true}>{`(KafkaConsumer. consumer-props)`}</SyntaxHighlighter>

	<p>The instance method subscribe is then called on the consumer instance and provided the list of topics to subscribe too here its just the single topic.</p>

	<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={false} wrapLines={true}>{`(.subscribe [consumer-topic])`}</SyntaxHighlighter>
	<p>We can then use the following function to bind the consumer to a name value</p>

	<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={false} wrapLines={true}>{`(def consumer (build-consumer topic bootstrap-server))`}</SyntaxHighlighter>

	<p>Defining the Kafka producer is very similiar we provide the map of properties and pass them to the constructor of the KafkaProducer and return that instance which can be bound to a value name.</p>
	<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn- build-producer
  "Create the kafka producer to send on messages received"
  [bootstrap-server]
  (let [producer-props {"value.serializer" StringSerializer
                        "key.serializer" StringSerializer
                        "bootstrap.servers" bootstrap-server}]
    (KafkaProducer. producer-props)))`}</SyntaxHighlighter>

	<p>Now that the producer and consumer have been created we can actually use the simple common pattern of having a while loop that continously polls the consumer a list of records is found and if populated this code iterates over them and logs out the information and then sends the message received prepended with Value: to the output topic. We then commitAsync to say we have processed these messages to commit the offset.</p>
	<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(while true

    (let [records (.poll consumer 100)]
      (doseq [record records]
        (log/info "Sending on value"
          (str "Value: " (.value record)))
        (.send producer
          (ProducerRecord. producer-topic
            (str "Value: " (.value record))))))

    (.commitAsync consumer)))`}</SyntaxHighlighter>

	<h3>Summary</h3>

	<p>Thats about it the full program can be found in our <a href="https://github.com/perkss/clj-kafka-examples/blob/master/kafka-producer-consumer-example/src/kafka_example/core.clj">kafka-examples</a> project on github. We have seen how to use the Kafka message broker to consume and produce messages using the raw Java API in Clojure which is still fairly elegant. Coming from a Java background and being used to the API I was interested in seeing how it looked in Clojure which was the motivation behind this post, using one of the wrapper classes for the API is probably wise and we will look at some of the available options in another post. To run this project look at the start.sh script to see about setting up the Zookeeper and Kafka instances and topics and then build a uberjar using lein and run the jar.</p>


	<h3>#Post 2: A basic Kafka Stream example of a Uppercase Topology built using the raw Java API for version 1.1.0 of Kafka Streams Library</h3>

	<p>Lets begin our second post where we have the great opportunity to work with Kafka Streams. This first example is very basic <a href="https://kafka.apache.org/documentation/streams/">Kafka Streams</a> Topology that converts the input words into uppercase. Again you are expected to be familiar with Kafka message broker and the example above to get this up and running but the commands are provided in the example code found <a href="https://github.com/perkss/clj-kafka-examples/blob/master/kafka-streams-example/src/kafka_streams_example/core.clj">here</a>. Credit to Jason Bell for this great starting <a href="https://dataissexy.wordpress.com/2016/12/06/quick-recipe-for-kafka-streams-in-clojure/">resource</a>. We are going to take use the newer version of the streaming library than this so will see some differences in the API calls, also we are sending on output to another topic so its very different flow and topology. The focus of this section is to use the higher level DSL rather than then lower level Processor API that Kafka provides.
        </p>

        <p>To begin we require the dependency on Kafka Streams this is added to our project.clj file. </p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={false} wrapLines={true}>{`[org.apache.kafka/kafka-streams "1.0.1"]`}</SyntaxHighlighter>

        <p>Now that the dependency on Kafka Streams is available we need to import them into our Clojure file so they can be used.</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(:import
   (org.apache.kafka.streams StreamsConfig KafkaStreams StreamsBuilder)
   (org.apache.kafka.common.serialization Serde Serdes Serializer)
   (org.apache.kafka.streams.kstream ValueMapper))`}</SyntaxHighlighter>

        <p>As in the Consumer Producer we need to define properties such as the brokers and the serdes these should be familiar to you. To start with Kafka Streams we need a Source node in the topology to read data into the stream processing topology here we read from a input of plaintext-input defined as our input topic which is then provided to the StreamsBuilder new in Version 1.0.1 instead of the deprecated KStreamBuilder. The StreamBuilders role is to build up the actual topology and each call returns a new KStream.</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(def builder
    (StreamsBuilder.))

  (def input-topic "plaintext-input")
  (def output-topic "uppercase")

  (->
   ;; Create the source node of the stream
   (.stream builder input-topic)
   ;; map the strings to uppercase
   (.mapValues (reify ValueMapper
     (apply [_ v]
       (clojure.string/upper-case v))))
   ;; Send the repsonse onto an output topic
   (.to output-topic))`}</SyntaxHighlighter>

        <p>Here we can see the main topology being built with the builder having .stream called on it with the source topic defined as input-topic and the comments show the Java equivalent. We then take the resultant stream and map the values applying upper case to each value and finally send to the output topic the results to be used by another application. This is the very simple topology. We now need to build the stream as shown below and then start it. </p>


        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(def streams
    (KafkaStreams. (.build builder) config))
  (.start streams)`}</SyntaxHighlighter>

	<p>Brilliant we have discovered how to make a simple kafka stream topology using the new API and can see it running if you check out this code build it run the jar and start the input and output topics. Check the README for more details!</p>

	<p>Instead of using the macro threading style I have also built an alternate style using let and the .. macro for Java interop. This alternate method is called like so by replacing the contents on line 50. </p>

	<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(def streams
    (KafkaStreams. (.build (to-uppercase-topology)) config))`}</SyntaxHighlighter>

	<p>The code style is defined in a method to-uppercase-toplogy as so, you can see it is very similar and maybe clearer as you can see the bindings of streams to local names of builder and words. It is up to you to decide you preference on a case by case basis.</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn to-uppercase-topology []
  (let [builder (StreamsBuilder.)
        words (.stream builder "plaintext-input")]
    (.. words
        (mapValues (reify
                     ValueMapper (apply [_ v]
                                   (clojure.string/upper-case v))))
        (to "uppercase"))
    builder))`}</SyntaxHighlighter>


        <h3>#Post 3: Testing Kafka Streams using the TopologyTestDriver</h3>

        <p>Kafka has made it super easy to build fast decoupled tests from the framework (something Storm really lacked when I used that). The library TopologyTestDriver continually fetches from input topics and processes them via the connected streaming topology and it works with both DSL and Processor API. Allow you to capture the resultant output for asserting against. Firstly you need to have the following imports in Clojure which bring the required TopologyTestDriver and other dependencies.</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(:import org.apache.kafka.common.serialization.Serdes
           [org.apache.kafka.streams StreamsConfig TopologyTestDriver]
           org.apache.kafka.streams.test.ConsumerRecordFactory)`}</SyntaxHighlighter>

        <p>You then need to define the properties of the test topology to get it to run here it required the java.util.properties so I broke it out into its own definition. </p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(def properties
  (let [properties (java.util.Properties.)]
    (.put properties StreamsConfig/APPLICATION_ID_CONFIG "uppercase-processing-application")
    (.put properties StreamsConfig/BOOTSTRAP_SERVERS_CONFIG "dummy:9092")
    (.put properties StreamsConfig/KEY_SERDE_CLASS_CONFIG (.getName (.getClass (Serdes/String))))
    (.put properties StreamsConfig/VALUE_SERDE_CLASS_CONFIG (.getName (.getClass (Serdes/String))))
    properties))`}</SyntaxHighlighter>

        <p>You can then simply define the serializer and deserializer, careful note of using the static call and then the instace on the Java API interop. Define the topology under test here simply call the method to build the topology from the core file and define the TopologyTestDriver. You can then simply pipe the input and read the output from the topology-test-driver and do some asserts and here is your test simples!! Thank you Kafka.</p>


      <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(deftest kafka-streams-to-uppercase-test
  (testing "Kafka Stream example one to test the uppercase topology"
    (let [topology (.build (sut/to-uppercase-topology))
          topology-test-driver (TopologyTestDriver. topology properties)
          serializer  (.serializer (. Serdes String))
          deserializer (.deserializer (. Serdes String))
          factory (ConsumerRecordFactory. serializer serializer)
          input "Hello my first stream testing to uppercase"
          expected "HELLO MY FIRST STREAM TESTING TO UPPERCASE"]
      (.pipeInput topology-test-driver (.create factory  "plaintext-input" "key" input))
      (is (= expected (.value (.readOutput topology-test-driver "uppercase"  deserializer deserializer)))))))`}</SyntaxHighlighter>

        <h3>#Post 4: Kafka Streaming Joins KStream -> KTable</h3>

        <p>Kafka provide the ability to join two streams of data together between ktream to kstream, ktable to ktable and ktable to kstream. Here we look at KStream KTable joins and only inner and left joins are allowed here and are non windowed they basically allow one stream to look up from a table of another stream. In this example I have converted a great example from Michael Knoll at Confluent post <a href="https://www.confluent.io/blog/distributed-real-time-joins-and-aggregations-on-user-activity-events-using-kafka-streams/"> example.</a> Here we take two topics one of the data of user click events and another topic of user geo location. The user clicks is considered a stream of individual records where each data item is a individual event the geo location stream is going to be conisdered as a changelog where each event is an update this will be backed by a KTable. Record streams use KStream and Changelogs use KTable interface. The code for this example can be found <a href="https://github.com/perkss/clojure-kafka-examples/blob/master/kafka-streams-example/src/kafka_streams_example/ktable_example.clj">here.</a> The code builds a KStream of user clicks and an KTable of users by location. Basically we want to take some click information for a user, join it to data about where the user is located and then reduce this so we can see the total number of clicks per region.</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`user-clicks (user-click-stream builder input-topic-clicks)
user-regions (user-region-table builder input-topic-regions)`}</SyntaxHighlighter>

        <p>These are built up using the table and streams builder API from Kafka. We define the stream as follows firstly we do a leftJoin on the stream of user-clicks with the geo location KTable. The key is the name of the user and this joins user and clicks. We then map the resultant map and take the values of the clicks and the region and return a new stream keyed by the region and the number of new clicks. This is then reduced by adding the previous number of clicks by that region and the new number of clicks and then writing to the output topic of clicks-per-region.</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn clicks-per-region
  [^KStream user-clicks-stream ^KTable user-regions-table output-topic]
  (-> user-clicks-stream
      ;; Joins on the Key which is the name
      (.leftJoin user-regions-table
                 (reify ValueJoiner
                   (apply [_ left right]
                     ((fn [clicks region]
                        {:region region :clicks clicks})
                      left right))))
      (.map (reify KeyValueMapper
              (apply [_ k v]
                ((fn [user clicks-with-regions]
                   (let [value (KeyValue.
                                (:region clicks-with-regions)
                                (:clicks clicks-with-regions))]
                     value)) k v))))
      (.groupByKey)
      (.reduce (reify Reducer
                 (apply [_ left right]
                   ((fn [first-clicks second-clicks]
                      (str (+ (Integer. first-clicks) (Integer. second-clicks)))) left right))))))`}</SyntaxHighlighter>

        <p>The use of reify here may seem confusing to those not so familiar with Clojure a great stack overflow post on this is <a href="https://stackoverflow.com/questions/37058268/what-is-reify-in-clojure">here.</a> Simply it is being used here to implement the interface with a function defined body. There we have it checkout the test code to see the example running!</p>



        <h3>#Post 5: Kafka Streaming Joins KStream -> KStream (Inner, Outer, Left)</h3>

        <p>Kafka provides the ability to join two streams either using a inner, outer or leftjoin with a window type. This is super cool! It is important to highlight that a new input on one side of the join will emit and output for each matching record on the other side of the join during the window. This will be clearer wih examples but two inputs could result in three outputs depending on join types and ordering. The matching of record happens by matching the keys of the two input streams. The test cases are a great way to understand the different types of joins and are based on a click stream on adverts.</p>

        <h4>Inner Join</h4>
        <p>Kafka joins are inner joins and there semantics are that both sides of the join must be there before it outputs. So a record from the left stream and a record from the right stream will cause a output that are in the same join windows. To use this simply call join on stream and provide the other stream it joins too, a window and the joining function that implemnts ValueJoiner ensure that the keys match!</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(.join clicks
             (reify ValueJoiner
               (apply [_ left right]
                 ((fn [impression-value click-value]
                    (str impression-value "/" click-value))
                  left right)))
             (. JoinWindows of 5000)))`}</SyntaxHighlighter>

        <h4>Left Join</h4>

        <p>The left join will output a record if in the left side record is present it will always output even if the right side is not present. If only the right side record is present then it will wait untl a left side is present for the length of the join window.</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(.leftJoin clicks
                 (reify ValueJoiner
                   (apply [_ left right]
                     ((fn [impression-value click-value]
                        (log/infof "Received values impression value: %s click: %s" impression-value click-value)
                        (str impression-value "/" click-value))
                      left right)))
                 (. JoinWindows of (* 50 60 10000))))`}</SyntaxHighlighter>

        <h4>Outer Join</h4>

        <p>The outer join will emit a result if either side a record comes via the left side stream or the righ side stream and always emit, it will join if the other side is present and send them joined. For example if the left side record is recieved it is sent, then if the right side arrives in the same join window it is then joined to the left side record and sent together. If the window expires and new record appears on the right side then it is output.</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(.outerJoin clicks
                  (reify ValueJoiner
                    (apply [_ left right]
                      ((fn [impression-value click-value]
                         (str impression-value "/" click-value))
                       left right)))
                  (. JoinWindows of 5000)))`}</SyntaxHighlighter>

        <p></p>

        <h3>#Post 6: Kafka Streams Processor API</h3>

        <p>What we have seen so far is the Kafka Streams DSL API which is the recommended way to write Kafka Streaming applications. There is a lower level API the processor API. Anyone from a Apache Storm background will be much more familar with this type of API well I was! I have taken the Kafka example and transformed it into Clojure using the interop. As you can see there is much more code and is not as clean especially in Clojure as implementing a fair few interfaces.</p>

        <p>The main processing happens in the Processor implementation of the Kafka Processor Interface. Here we set a schedule to forward the word counts that are stored in th state store in the process method implementation.</p>


        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn word-processor
  "The first argument to reify method if this. Impleemt the Processor Java API"
  [store-name]
  (let [store (atom {})
        context (atom nil)
        timestamp 10]
    (reify
      Processor
      (close [_])
      (init [this processor-context]
        (reset! context processor-context)
        (reset! store (.getStateStore @context store-name)) ;; Assign the state store to the atom

        (.schedule @context
                   timestamp
                   PunctuationType/STREAM_TIME
                   (punctuator-forward-message timestamp store context)))
      (process [_ key line]
        (log/infof "Process has been called with %s %s" key line)
        (let [words
              (-> (str line)
                  (str/lower-case)
                  (str/split #" "))]

          (log/infof "Words is: %s" words)
          ;; Update the word count in the state store
          (dorun (map #(add-word-count % store) words))

          (log/infof "Current word value for %s word is :%s"
                     (first words)
                     (.get @store (first words))))))))`}</SyntaxHighlighter>

        <p>The scheduled forward message iterates over the store and forwards the words stored and there counts via the context onto the sink of the stream.</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn punctuator-forward-message
  [timestamp kvstore context]
  (reify
    Punctuator
    (punctuate [_ timestamp]
      (let [iter (iterator-seq (.all @kvstore))]
        (log/infof "Iter %s" (pr-str iter))
        (dorun (map #(.forward @context (.key %) (str (.value %))) iter))
        (.commit @context)))))`}</SyntaxHighlighter>

        <p>The procssor is wrapped in a ProcessorSupplier so the definition for that is here.</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn word-processor-supplier
  [store-name]
  (reify
    ProcessorSupplier
    (get [_] (word-processor store-name))))
`}</SyntaxHighlighter>

        <p>Here is the actual stream topology definition where we add a source topic, add the processor node to do the work and a store to save the work counts and a sink to send on the data to another topic.</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn word-processor-topology
  []
  (log/info "Word Processor API Streaming Topology")
  (let [builder (Topology.)
        store-name "Counts"
        store (Stores/keyValueStoreBuilder
               (Stores/persistentKeyValueStore store-name)
               (Serdes/String)
               (Serdes/String))]
    (-> builder
        (.addSource "Source" (into-array String ["source-topic"]))
        (.addProcessor "Process"
                       (word-processor-supplier store-name)
                       (into-array String ["Source"]))
        ;; Remove the add state store and you will see my contribution to Kafka:
        ;; https://issues.apache.org/jira/browse/KAFKA-6659
        (.addStateStore store (into-array String ["Process"]))
        (.addSink "Sink" "sink-topic" (into-array String ["Process"])))))`}</SyntaxHighlighter>

        <h4>Processor API Summary</h4>
        <p>As you can see the Processor API is more low level and more code but it is much more flexbile and is sometimes required to be used.</p>

    </div>

);

export default KafkaClojure;
