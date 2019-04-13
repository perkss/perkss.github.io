import React from "react";
import BlogPage from './blog-page.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';


const devops = {

    title: 'Devops',
    contents: '',
    text: [
        <div>
            <h3>Containers: Docker</h3>
            <p>There is a load of information of containers and Docker online so I will not bore you again with that. I
                just want to show you a simple Dockerfile that will run our Kafka Producer Consumer example and then
                show DockerCompose so we can run the full Kafka/Zookeeper/Our_APP stack in containers!</p>

            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={true} wrapLines={true}>{`FROM openjdk:8-jre-alpine
# COPY the build jar from the target folder
COPY target/uberjar/kafka-example*-standalone.jar kafka-example.jar
CMD ["/usr/bin/java", "-jar", "/kafka-example.jar"]`}</SyntaxHighlighter>

            <p>In three lines we can download the JRE copy the pre built uberjar from our target directory (assumes you
                ran lein uberjar) and then run the example jar we renamed to kafka-example.jar. Simples! Now try it you
                just add the Dockerfile to the root of your project, have Docker installed and then run the
                commands:</p>


            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={true}
                               wrapLines={true}>{`docker build -t kafka-example . && docker run -it kafka-example`}</SyntaxHighlighter>

            <p>This command build your docker image names it kafka-example and then runs it! Simple. Now how do we get
                it too interact with Kafka Broker and Zookeeper containers? Keep on reading ...</p>


                <h3>Docker A Nice Little Introduction</h3>

                <p>Docker run the workflow that happens when you process the command

                 <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={true} wrapLines={true}>{`docker run IMAGENAME`}</SyntaxHighlighter>

             is too look for the image on this computer, if its installed use it else lookup from Docker Hub, if it is there then download the image
             install the image and then create a new container and start the program. The difference between the image and the container is that the image is a frozen container
             at some state where as a container is a running instance of the image, much like a class and a object instantiation.

             A useful command to remember is

             <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={true} wrapLines={true}>{`docker help run`}</SyntaxHighlighter>

            this example shows the doc for run but canny command or just plain help can be used.
                 </p>

                 <h5>Docker Requirements</h5>
                 <p>Docker requires running two processes in the User Space (as opposed to the OS or Hardware space), these are the Docker CLI to allow
                 command line interaction and Docker daemon which is the Docker engine. Docker runs natively on Linux and runs on a virtual machine when run
                 on Windows or Mac. Docker does not provide the container technology it uses the Linux namespaces and cgroups, Docker makes it simpler to use. </p>
                 <h5>Shipping Containers</h5>
                 <p>Images are the shippable part of Docker and then you start containers locally from the Images. They can be hosted in the public repo Docker Inc or in
                 private repo such as Nexus.</p>
                 <h5>Docker in the Enterprise</h5>
                 <p>For dealing with container orchestration, high availability, clustering and visibility tools such as Kubernetes are used.</p>

                <h5>Some things to know .... </h5>
                <p>Docker Image is the collection of files and instructions to run a software program. When running a container detached -d then it means the container
                is running in the background with no attachment to any input or output stream. When you run a container for the first time a long alphanumeric string will print
                this is the unique container identifier. When running <i>Docker ps</i> you may notice the identifier is shorter, this is true as the first 12 digits are unlikely to clash and remain unique
                so can be used as a identifier when interacting with the container. To run a container interactively you <i>--interactive or -i</i> which will bind parts of the terminal to the container input and output. <i>--tty</i> will
                open a virtual terminal for the container allowing you to pass signals to the container. At the end of commands you can run a program for example to run shell use <i>/bin/sh</i>. To exit a
                container you can run <i>exit</i>, but to exit and leave the container running you can use ctrl P and then Q. To view the logs of a container you can use <i>docker logs CONTAINERNAME </i>. <i>Docker exec</i> will
                attach a process to a already running container.</p>

                <h5>Docker and the PID Namespace</h5>
                <p>Every program that runs on a linux machine has a unique PID number. A PID namespace is a unique set of numbers that identify processes. Without PID namespace
                processes running inside containers would share the same ID space as other containers running on the same host. Isolation. </p>

                <h5>Building to run in any Environment</h5>



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
