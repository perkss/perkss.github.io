import React, { Component } from 'react';
import Latex from 'react-latex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, docco } from 'react-syntax-highlighter/styles/hljs';


const CassandraClojure = () => (

		<div>
			 <h2 id="cassandra">Cassandra API Clojure vs Java</h2>
																		 <h3>Some Background</h3>
																		 <p>Apache Cassandra is an open source NoSQL distributed database that is designed to be highly available and scalable across commodity servers with no single point of failure. As expected the API from DataStax to use Cassandra from Java and Clojure is very simple two main APIs are used <a href="https://docs.datastax.com/en/drivers/java/2.0/com/datastax/driver/core/Cluster.html">Cluster</a> and <a href="https://docs.datastax.com/en/drivers/java/2.0/com/datastax/driver/core/Session.html">Session</a>. The Cluster API builds a connection and starts a session to a Cassandra keyspace instance it is recommended to use only one instance of this per cluster per application lifetime. The Session API is used for query execution this maintains multiple connections to the Cassandra cluster hence you should use at most one Session per keyspace. Other recommendations are to use Prepared Statements as they are parsed and prepared on the Cassandra nodes and only the ID and parameters are passed giving good performance gains and to use Batch queries where appropriate.</p>

																		 <h3>API Java</h3>
																		 <p>
																		 As stated we need to create a Cluster reference to connect to the Cassandra cluster and provide the network address and then get a session reference to the selected keyspace here we are connection to perkss-keyspace. We have used the cassandra-java-api for these examples.
																		 <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true} wrapLines={true}>{`Cluster cluster = Cluster.builder().addContactPoint("127.0.0.1").build();\nSession session = cluster.connect("perkss-keyspace");`}</SyntaxHighlighter>
																		 Now that we are connected to the cluster and keyspace we can simply execute commands such as insertion and queries.

																		 <SyntaxHighlighter language='java' style={darcula} showLineNumbers={true} wrapLines={true}>{`session.execute("INSERT INTO users (lastname, city, skills) VALUES ('perkss', 'London', 'clojure')");\nResultSet results = session.execute("SELECT * FROM users WHERE lastname='perkss'");`}</SyntaxHighlighter> Pretty clean and simple code here nothing too technical if you want to use Object Relational Mapping then <a href="https://github.com/Impetus/Kundera">Kundera</a> is an option.

																		

																		 </p>
																		 <h3>API Clojure</h3>
																	
																		 <p>For the Clojure API we are going to look at the example using <a href="https://github.com/mpenet/alia">alia</a> as the API.
																		 	<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(require '[qbits.alia :as alia])\n(def cluster (alia/cluster {:contact-points ["127.0.0.1"]}))\n(def session (alia/connect cluster))\n(alia/execute session "USE perkss-keyspace;")`}</SyntaxHighlighter>
																		 As before we have created a cluster reference and a session reference using def. Which then use ecute session to the persss-keyspace as before, very simple stuff. Lets now also insert and read some data.	<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(alia/execute session "INSERT INTO users (lastname, city, skills) VALUES ('perkss', 'London', 'clojure');")\n(alia/execute session "SELECT * FROM users WHERE lastname='perkss'")\n({:firstname "perkss", :city "London", :skills "clojure"})`}</SyntaxHighlighter> Using alia execute we can pass the CQL to be executed when executing queries the results are retrned as maps. To improve the performance prepared statements can be used for example here we could have done. 	<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(def prepared-statement (alia/prepare session "select * from users where lastname=?;"))\n(alia/execute session prepared-statement {:values ["perkss"]})`}</SyntaxHighlighter> Although this example is not recommended against if table changes are made so its best to select explicit columns from the table as meta data is not invalidated when dropping or adding columns to a table. </p>

																		 <h3>Summary</h3><p>Here we have seen the two different API&apos;s in use, both are fairly simple and clean as we are using CQL statements what is interesting is the fact that Java has to use the Builder pattern for the Cluster which is what makes it clean where as Clojure can just provide a simple key value map to define the Cluster parameters.</p>
		</div>

);

export default CassandraClojure;
