import React, { Component } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, docco } from 'react-syntax-highlighter/styles/hljs';
import BlogPage from './blog-page.js';

const clojure = {

    title: 'Hipster Clojure',
    contents: '',
    text:[<div>
	
		  
		  <h2 id="eggplant">Eggplant Behaviour Driven Development (BDD) in Clojure</h2>
		  <h3>What is BDD?</h3>
		  
		  <p>Behaviour driven development or simply BDD is a methodology for software development and testing. BDD enables specifications for testing in a much more human readable format commonly Give, When, Then a great blog on this is <a href="https://martinfowler.com/bliki/GivenWhenThen.html">here</a> by the legendary Martin Fowler. This simplicity is what we wanted to bring to Clojure! However tooling is not explicitly required for it but has come about such as <a href="https://github.com/spockframework/spock">Spock</a> and <a href="https://cucumber.io/">Cucumber</a> are very popular in the Java space. BDD is much more top down approach to testing where we start from high level requirements rather than the bottom up approach of TDD where we start at the bottom with our smallest unit of functionality a single function in Clojure.</p>
																		 <h3>What is already available for BDD in Clojure?</h3>
																		 <p>The major player in the Clojure space is <a href="https://github.com/slagyr/speclj">Speclj</a> which is a great framework and does what is required but uses slightly different terminology to our Java background! </p> 
																		 
																		 <h3>Motivation?</h3>
																		 <p>Speclj is a great framework, but does not seem to have a table based data driven testing approach like Spock. Hence I wanted to learn some Clojure further and write a testing framework for BDD that enabled us to do this <a href="http://spockframework.org/spock/docs/1.0/data_driven_testing.html">data driven</a> approach. Also I wanted to use the standard test runner that comes with clojure.test to run these with my unit tests. Eventually enabling a different runner to run our specs would be nice&#59; another TODO. </p>
																		 <h3>Our Solution Eggplant</h3>
																		 <p>Firstly please check out <a href="https://github.com/perkss/eggplant">Eggplant</a> and see the README to see examples and how to start using, we will cover a tutorial here also.

																		 Eggplant is simplistic and that is it&#39;s motto, which is a great motto as a developer and a product owner you do not want to be bogged down learning another syntax in the case of Cucumber and you want to conform to the popular human readable Given, When and Then as stated above. 


																		 <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defspec example-specification-true\n  (testing "A full length example specification which is true 4 * 2 = 8"\n    (given 4 test-data\n           (then-we-expect 8 (when-we-process * 2 test-data)))))`}</SyntaxHighlighter>

																		 As you can see this is readable format, its still in a basic Clojure file and runs with your usual Clojure test suite. Eggplant also offers data driven development which is our favourite feature of Spock! Here you can see we are testing the function + and asserting the esults are equals. Each test-data-row is the parameters passed and the expected result!

											<SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defspec example-table-test
  (testing "Example table testing + with assertion of ="
    (-> (expect (function-under-test +) (assertion =))
        (where
         (test-data-row [3 3] 6)
         (test-data-row [4 4] 8)
         (test-data-row [2 3] 5)))))`}</SyntaxHighlighter>							 
																		 
																		 </p>


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
																		 </div>]

};




const ClojurePage = (props) =>  {

    return (
            <BlogPage
        title={clojure.title}
        contents={clojure.contents}
        text={clojure.text}
			/>
    );

}

export default ClojurePage;
