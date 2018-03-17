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

		<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={false} wrapLines={true}>{`[org.apache.kafka/kafka-clients "1.0.1"]`}</SyntaxHighlighter>

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
        (log/info "Sending on value" (str "Value: " (.value record)))
        (.send producer (ProducerRecord. producer-topic (str "Value: " (.value record))))))

    (.commitAsync consumer)))`}</SyntaxHighlighter>
																		 
				 <h3>Summary</h3>													
																																		
		<p>Thats about it the full program can be found in our <a href="https://github.com/perkss/clj-kafka-examples/blob/master/kafka-producer-consumer-example/src/kafka_example/core.clj">kafka-examples</a> project on github. We have seen how to use the Kafka message broker to consume and produce messages using the raw Java API in Clojure which is still fairly elegant. Coming from a Java background and being used to the API I was interested in seeing how it looked in Clojure which was the motivation behind this post, using one of the wrapper classes for the API is probably wise and we will look at some of the available options in another post. To run this project look at the start.sh script to see about setting up the Zookeeper and Kafka instances and topics and then build a uberjar using lein and run the jar.</p>


	<h3>#Post 2: A basic Kafka Stream example of a Uppercase Topology built using the raw Java API for version 1.0.1 of Kafka Streams Library</h3>
    
	<p>Lets begin our second post and having the great opportunity to work with Kafka Streams. This first example is very basic <a href="https://kafka.apache.org/documentation/streams/">Kafka Streams</a> Topology that converts the input words into uppercase. Again you are expected to be familiar with Kafka message broker and the example above to get this up and running but the commands are provided in the example code found <a href="https://github.com/perkss/clj-kafka-examples/blob/master/kafka-streams-example/src/kafka_streams_example/core.clj">here</a>. Credit to Jason Bell for this great starting <a href="https://dataissexy.wordpress.com/2016/12/06/quick-recipe-for-kafka-streams-in-clojure/">resource</a>. We are going to take use the newer version of the streaming library than this so will see some differences in the API calls, also we are sending on output to another topic so its very different flow and topology.
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
   (.stream builder input-topic) ;; Create the source node of the stream
   (.mapValues (reify ValueMapper (apply [_ v] (clojure.string/upper-case v)))) ;; map the strings to uppercase
   (.to output-topic)) ;; Send the repsonse onto an output topic`}</SyntaxHighlighter>

        <p>Here we can see the main topology being built with the builder having .stream called on it with the source topic defined as input-topic and the comments show the Java equivalent. We then take the resultant stream and map the values applying upper case to each value and finally send to the output topic the results to be used by another application. This is the very simple topology. We now need to build the stream as shown below and then start it. </p>

    
     <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(def streams
    (KafkaStreams. (.build builder) config))
  (.start streams)`}</SyntaxHighlighter>

    <p>Brilliant we have discovered how to make a simple kafka stream topology using the new API and can see it running if you check out this code build it run the jar and start the input and output topics. Check the README for more details!</p>
        
		</div>

);

export default KafkaClojure;
