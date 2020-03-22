import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';

const ElasticsearchClojure = () => (

    <div>
        <h2>Why this Post?</h2>
        <p>The Java interop features of Clojure are powerful. I wanted to show how you do not need to rely on some
            third party libraries that wrap Clojure around the Elasticsearch client and then you depend on them to
            upgrade with the fast moving Elasticsearch client to get its new features and instead simply upgrade
            yourself. Lets make the most of Clojures powerful Java interop feature.</p>

        <h2 id="elasticsearch">Elasticsearch Java API Interop with Clojure</h2>
        <h3>What is Elasticsearch?</h3>

        <p><a href={"https://www.elastic.co/elasticsearch/"}>Elasticsearch</a> is a very fast distributed search and
            analytics engine. Getting to this post I hope you have a understanding of it already so I will not go into
            the details here. This post is going to run through the RestHighLevelClient that is available showing the
            plain Java interop.</p>

        <h3>Clojure Java API RestHighLevelClient</h3>
        <p>The Java API is formed of the <a
            href={"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high.html"}>RestHighLevelClient</a> and
            LowLevelClient. This tutorial begins by focusing on the high level client. Using Clojure Java interop makes
            this simple firstly we need to create a RestHighLevelClient object in Clojure our function
            definition <i>rest-client</i> does this. And passes in the host and port of Elasticsearch.


            <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn rest-client ^RestHighLevelClient
  ([^String host ^Integer port] (rest-client host port "http"))
  ([^String host ^Integer port ^String scheme]
   (-> (RestHighLevelClient. (RestClient/builder (into-array HttpHost [(HttpHost. host port scheme)]))))))`}</SyntaxHighlighter>

            We then require to build a IndexRequest that enables us to store a document. This is done using JSON to form
            a body from a Clojure map and then creating the request. Here our body contains a user, post-date and
            message.

            <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(requests/index-request index "2" (json/write-str
                                                      {:user      "perkss"
                                                       :post-date (t/format (tick/now))
                                                       :message   "Clojure and Elasticsearch"}))`}</SyntaxHighlighter>

            We call the <i>IndexRequest</i> constructor from Elastic and pass the ID and JSON body to create the
            IndexRequest.

            <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn index-request ^IndexRequest
  [^String index ^String id ^String json]
  (-> (IndexRequest. index)
      (.id id)
      (.source json XContentType/JSON)))`}</SyntaxHighlighter>

            With the <i>IndexRequest</i> we now can execute the index on the request by using the <i>index</i> method on
            the high level client API.

            <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn execute ^IndexResponse
  [^RestHighLevelClient client
   ^IndexRequest request
   ^RequestOptions request-options]
  (.index client request request-options))`}</SyntaxHighlighter>

            With the following an example of calling this Clojure function to execute the Index.

            <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`(execute client request-1 RequestOptions/DEFAULT)`}</SyntaxHighlighter>

            If we want to execute asynchronously we can simply call the <i>indexAsync</i> and pass
            a <i>ActionListener</i> to act as a callback.

            <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn execute-async
  [^RestHighLevelClient client
   ^IndexRequest request
   ^RequestOptions request-options

   ^ActionListener listener]
  (.indexAsync client request request-options listener))`}</SyntaxHighlighter>

            Calling the Clojure function defined.

            <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`(execute-async client request-2 RequestOptions/DEFAULT (action-listener))`}</SyntaxHighlighter>

            Implementing a Java interface in Clojure is always a little awkward looking here we use <i>reify</i> to
            implement the the <i>ActionListener</i> interface of onResponse and onFailure. A note to remember the first
            argument is <i>this</i> which we do not sure here. We simply log the responses out.

            <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn action-listener
  []
  (reify ActionListener
    (onResponse [_ response]
      (log/infof "Callback: Got response %s" response))
    (onFailure [_ exception]
      (log/error "Failed: " exception))))`}</SyntaxHighlighter>


            Wow we have a seen and done a lot here we have Indexed a Document into Elasticsearch. Fairly
            straightforward. Now we want to see our document we simply execute a <i>GetRequest</i> and provide the ID
            and the Index name.

            <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defn get-request
  [index id]
  (GetRequest. index id))`}</SyntaxHighlighter>

        </p>

        <h3>Testcontainers</h3>
        <p>

            When working with Elasticsearch it is commonly run in a docker container. A lovely test framework for this
            is
            <a href={"https://www.testcontainers.org/"}>Testcontainers</a>. We now have the ability to fire up
            Elasticsearch in our Clojure test using Testcontainers. We then wait for it to start. Build our client by
            getting the IP address and mapped port for our container. Execute the Index and GET requests and assert the
            document payload is as expected. A wonderful isolated integration test that purely depends on Docker being
            available and nothing else.

            <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(deftest example-kafka-integration-test
  (testing "Fire up test containers Elasticsearch and then index and get message"
    (let
     [elastic-container (ElasticsearchContainer. "docker.elastic.co/elasticsearch/elasticsearch-oss:7.6.0")
      _ (.waitingFor elastic-container (Wait/forLogMessage ".*started.*" 1))
      _ (.start elastic-container)
      address (.getContainerIpAddress elastic-container)
      port (.getMappedPort elastic-container 9200)
      index "posts"
      doc-id "1"
      doc-payload {:user    "perkss"
                   :message "Clojure and Elasticsearch"}
      rest-client (rest-client address port)
      request (requests/index-request index doc-id (json/write-str
                                                    doc-payload))
      _ (execute rest-client request RequestOptions/DEFAULT)
      get-response (execute-get rest-client (requests/get-request index doc-id) RequestOptions/DEFAULT)
      parsed-source (walk/keywordize-keys (json/read-str (.getSourceAsString get-response)))]
      (log/infof "Elastic started %s:%s with mapped result %s" address port parsed-source)
      (is (= doc-payload parsed-source)))))`}</SyntaxHighlighter>


        </p>
    </div>

);

export default ElasticsearchClojure;
