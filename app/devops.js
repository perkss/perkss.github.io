import React, { Component } from "react";
import BlogPage from './blog-page.js';
import { InlineMath, BlockMath } from 'react-katex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, docco } from 'react-syntax-highlighter/styles/hljs';


const devops = {

    title: 'Devops',
    contents: '',
    text: [
            <div>
            <h3>Containers: Docker</h3>
            <p>There is a load of information of containers and Docker online so I will not bore you again with that. I just want to show you a simple Dockerfile that will run our Kafka Producer Consumer example and then show DockerCompose so we can run the full Kafka/Zookeeper/Our_APP stack in containers!</p>

        	<SyntaxHighlighter language='bash' style={darcula} showLineNumbers={true} wrapLines={true}>{`FROM openjdk:8-jre-alpine
# COPY the build jar from the target folder
COPY target/uberjar/kafka-example*-standalone.jar kafka-example.jar
CMD ["/usr/bin/java", "-jar", "/kafka-example.jar"]`}</SyntaxHighlighter>

            <p>In three lines we can download the JRE copy the pre built uberjar from our target directory (assumes you ran lein uberjar) and then run the example jar we renamed to kafka-example.jar. Simples! Now try it you just add the Dockerfile to the root of your project, have Docker installed and then run the commands:</p>


            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={true} wrapLines={true}>{`docker build -t kafka-example . && docker run -it kafka-example`}</SyntaxHighlighter>

        <p>This command build your docker image names it kafka-example and then runs it! Simple. Now how do we get it too interact with Kafka Broker and Zookeeper containers? Keep on reading ...</p>

        </div>

    ]

};

const DevOpsPage = (props) => {
    return (

            <BlogPage

        title={devops.title}
        contents={devops.contents}
        text={devops.text}
        />
    );
}

export default DevOpsPage;
