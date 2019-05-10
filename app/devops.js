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

                <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={true}
                                   wrapLines={true}>{`docker run IMAGENAME`}</SyntaxHighlighter>

                is too look for the image on this computer, if its installed use it else lookup from Docker Hub, if it
                is there then download the image
                install the image and then create a new container and start the program. The difference between the
                image and the container is that the image is a frozen container
                at some state where as a container is a running instance of the image, much like a class and a object
                instantiation.

                A useful command to remember is

                <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={true}
                                   wrapLines={true}>{`docker help run`}</SyntaxHighlighter>

                this example shows the doc for run but canny command or just plain help can be used.
            </p>

            <h5>Docker Requirements</h5>
            <p>Docker requires running two processes in the User Space (as opposed to the OS or Hardware space), these
                are the Docker CLI to allow
                command line interaction and Docker daemon which is the Docker engine. Docker runs natively on Linux and
                runs on a virtual machine when run
                on Windows or Mac. Docker does not provide the container technology it uses the Linux namespaces and
                cgroups, Docker makes it simpler to use. </p>
            <h5>Shipping Containers</h5>
            <p>Images are the shippable part of Docker and then you start containers locally from the Images. They can
                be hosted in the public repo Docker Inc or in
                private repo such as Nexus.</p>
            <h5>Docker in the Enterprise</h5>
            <p>For dealing with container orchestration, high availability, clustering and visibility tools such as
                Kubernetes are used.</p>

            <h5>Some things to know .... </h5>
            <p>Docker Image is the collection of files and instructions to run a software program. When running a
                container detached -d then it means the container
                is running in the background with no attachment to any input or output stream. When you run a container
                for the first time a long alphanumeric string will print
                this is the unique container identifier. When running <i>Docker ps</i> you may notice the identifier is
                shorter, this is true as the first 12 digits are unlikely to clash and remain unique
                so can be used as a identifier when interacting with the container. To run a container interactively
                you <i>--interactive or -i</i> which will bind parts of the terminal to the container input and
                output. <i>--tty</i> will
                open a virtual terminal for the container allowing you to pass signals to the container. At the end of
                commands you can run a program for example to run shell use <i>/bin/sh</i>. To exit a
                container you can run <i>exit</i>, but to exit and leave the container running you can use ctrl P and
                then Q. To view the logs of a container you can use <i>docker logs CONTAINERNAME </i>. <i>Docker
                    exec</i> will
                attach a process to a already running container.</p>

            <h5>Docker and the PID Namespace</h5>
            <p>Every program that runs on a linux machine has a unique PID number. A PID namespace is a unique set of
                numbers that identify processes. Without PID namespace
                processes running inside containers would share the same ID space as other containers running on the
                same host. Isolation. </p>

            <h5>Lets not couple our apps to a specific environment</h5>

            <h6>Read only filesystem</h6>
            <p>The reason that a docker container that is read only is good is because it will not write files that make
                this container unique to the running
                instance. To achieve this you can use the <i>--read-only</i> flag. </p>
            <h6>Environment Variable Injection</h6>
            <p>To provide environment variables at runtime to a container the <i>--env</i> or simply <i>e</i> flag can
                be used that will inject the following variables into the
                container environment. For example a referenced database HOST, PORT, USERNAME, PASSWORD could be
                injected into a running application inside a container to reference
                unique database.</p>

            <h5>Durable Containers</h5>
            <p>Docker containers can be in four states Running, Paused, Restarting, Exited. Docker allows automatic
                restarts using the <i>--restart</i> flag
                This can be combined with backoff strategies to only restart a number of times and with a period
                between.</p>

            <h5>Cleaning up after yourself</h5>
            <p>To see a list of all containers in the docker instance you run <i>docker ps -a</i>. To remove a container
                simply run <i>docker rm</i> followed by
                the name of the container id. If you are running short lived containers for example ryane/kafkacat just
                for some tooling purposes then you can set the flag
                <i>--rm</i> on start up which will clean up when the container exits.</p>

            <h5>Docker Repositories</h5>
            <p>Named repositories in Docker are a named bucket of images. This name is similar to a url for example you
                have the registry host, user_name and the repository short name.
                <i>quay.io/perkss/my_app_registry</i> where a unique app sits in the my_app_registry. Each repository
                can hold multiple versions of an image where they are tagged differently. Tags are
                important on Docker and can be very specific so for example each minor version of Java 8, or can be just
                a high level Java 8 version that will take the latest minor version. Or simply you can refer
                too java:latest to always get the latest version on downloads. Docker registries are where images are
                hosted, and they can be public or private. Its easy to point to different registries
                and docker enables you to login and logout of private ones. </p>

            <h5>Storage Volumes</h5>
            <p>A volume is a tool to segment and share data that has a scope of lifecycle, independent of a single
                container.
                Every container has a MNT namespace where and the image that a container is created from is mounted at
                root. Docker has three mount types: Bind Mounts, In-memory Storage and Docker Volumes.</p>

            <h6>Bind Mounts</h6>
            <p>Bind mounts are used to remount parts of the file tree system onto other locations for example from a
                specific part of the host file system to a specific file tree in the container. For example
                if you need to send your container logs to some specific location they can be bind mounted to some
                specific host directory. As you can probably tell there is a major concern with Bind Mounts, as they
                couple the container to the specific host filesystem.</p>

            <h6>In-memory Storage</h6>
            <p>In memory storage should be used for private files, keys, passwords amongst other things as these secret
                files do not want to be stored and shipped within a container.</p>

            <h6>Docker Volumes</h6>
            <p>Docker volumes are named file system trees managed by Docker. Docker volumes allow you to state I just
                need some space to add data I need to work with. This enables docker files to easily be cleaned up
                once they have been used. For example you can bind a cassandra image to a particular created volume
                named my-cass:</p>

            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                               wrapLines={true}>{`docker volume create --driver local --label example=cassandra cass-shared`}</SyntaxHighlighter>


            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                               wrapLines={true}>{`docker run -d --mount source=my-cass,target=/var/lib/cassandra/data --name cassandra1 cassandra:2.2`}</SyntaxHighlighter>


            <p>If you want to interact with this cassandra image and mount space then you can run:</p>

            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                               wrapLines={true}>{`docker run -it --rm --link cassandra1:cass cassandra:2.2 cqlsh cass`}</SyntaxHighlighter>


            <p>So to make containers really useful we want to share the same set of files between multiple containers.
                We can simply do this by mounting different containers to the same volume we have created. For example
                we could share a volume
                for logging where we have a container that writes to the log directory and another that reads from it.
                Docker run or create commands will create anonymous volumes if required. We need to clean up these
                containers to list the volumes
                that we have created we can run <i>docker volume ls</i> that will list the named and the anonymous
                volumes created. They are removed when the containers that created them are removed or can manually be
                removed with
                <i>docker volume remove</i></p>

            <h6>Problems with Local Volumes</h6>
            <p>Local volumes are great but they are not perfect what if you want to move your containers to run on a
                different host, then the volume will no longer be on that host. The docker plugins available for volumes
                can help overcome this for example in cloud services space.</p>


            <h5>Docker Networking</h5>
            <p>Each container has its own private loopback interface and separate virtual ethernet interface that is
                linked to a virtual interface in the hosts namespace. Each container has its own unique IP address that
                is internal to the host as all connections
                are routed through the Docker bridge virtual interface. You can build your own docker network using <i>docker
                    network create</i></p>
        </div>

    ]

};

const DevOpsPage = () => {
    return (

        <BlogPage

            title={devops.title}
            contents={devops.contents}
            text={devops.text}
        />
    );
};

export default DevOpsPage;
