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


            <h2>Terraform and Azure</h2>

            <p>This section begins to look at deploying infrastructure sustainably using Infrastructure as Code. It is
                my notes from the great book <a
                    href={"https://www.amazon.co.uk/Terraform-Running-Writing-Infrastructure-Code/dp/1492046906/ref=dp_ob_title_bk"}>Terraform:
                    Up and Running</a> by Yevgeniy Brikman. With a few extras from around the web.</p>

            <p>Lets get started with IAM in Azure a nice link is <a
                href={"https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/add-users-azure-active-directory"}>here</a>.
                You can install Terraform on your Mac using Brew and the command <i>brew install terraform</i>.
                Lets now get started have a read of this <a
                    href={"https://learn.hashicorp.com/terraform/azure/intro_az"}>guide.</a>
                To get started you will need the <a
                    href={"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-macos?view=azure-cli-latest"}>Azure
                    CLI</a>. You will need your <a
                    href={"https://docs.netapp.com/us-en/kubernetes-service/create-auth-credentials-on-azure.html"}> Subscription
                    ID</a> for the tutorial.
            </p>

            <h4>Some key commands</h4>

            <p>

                <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                                   wrapLines={true}>{`brew install azurecli`}</SyntaxHighlighter>

                <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                                   wrapLines={true}>{`brew install terraform`}</SyntaxHighlighter>

                <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                                   wrapLines={true}>{`az login`}</SyntaxHighlighter>
                <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                                   wrapLines={true}>{`terraform init`}</SyntaxHighlighter>
                <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                                   wrapLines={true}>{`terraform plan`}</SyntaxHighlighter>
                <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                                   wrapLines={true}>{`terraform apply`}</SyntaxHighlighter>
                <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                                   wrapLines={true}>{`terraform destroy`}</SyntaxHighlighter>

            </p>
            <h3>Deploying a Single Server</h3>

            <a href={"https://docs.microsoft.com/en-us/azure/virtual-machines/linux/terraform-create-complete-vm"}>Windows
                reference</a>

            <h4>Making a Resource Group</h4>
            <p>A resource group is a container for a set of configuration for example for a particular application or
                team.</p>

            <h4>Making a Virtual Network</h4>

            <h4>Variables</h4>


            <h4>Connecting via SSH</h4>
            <p>Once the script is run you can connect by going to the UI in Azure clicking the VM you just created and
                clicking on connect at the top. Once you SSH in you can install something for example Java.
                <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                                   wrapLines={true}>{`sudo apt install default-jre`}</SyntaxHighlighter></p>

            <p>As you defined a public IP in your config you can connect against the listed IP
                <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                                   wrapLines={true}>{`ssh plankton@my-server-public-ip.uksouth.cloudapp.azure.com`}</SyntaxHighlighter> this
                is shown as the DNS name </p>


            <h3>Terraform State</h3>

            <p>Every time you run Terraform it records the information of that run and stores this state down into state
                files. The state file is a private API and changes with every change and is meant only for internal
                use. <strong>you should never really need to update it manually</strong>. When working as a global team
                some considerations need to be made about storing the Terraform files and in particular state.</p>
            <p><strong>Storing files so all can access them.</strong> Usually version control is used for this scenario
                but its
                risky here as you may forget to pull remote changes down. Also secrets are currently stored in
                plaintext in Terraform state files. A future change may fix this. Hashicorp the creator of Terraform
                do offer paid services to store this state so that is the ideal option if you can pay. This uses the
                Terraform <strong>remote storage config feature</strong> and this can be backed by any storage
                medium, for example S3.
                <strong>Locking state files</strong> when changes are made to stop conflicts. A neat option to get
                around this is to
                only allow changes to be made via a build server and run a suite of tests before applying the
                changes.
                <strong>Isolating state files</strong> for example Dev and Prod so you do not accidentally make changes
                to production. This is simple set up your directory layout to segregate between environments and you
                reduce this risk greatly. Terraform modules also provide a way to reduce the duplication here.</p>

            <h4>Read Only State</h4>

            <p>Terraform remote state allows you to access Terraform state files used by other Terraform configurations
                in a read only manner.</p>

            <h4>Conclusion</h4>
            <p>Looking after your Terraform configuration code is critical as impacts to an environment can make you
                lose data, or take down all your apps with a minor problem. Therefore this is very serious stuff and
                should not be taken lightly.</p>

            <h4>Modules</h4>

            <p>When writing code in common language like Java if you have a reusable section of code you would place it
                into a method. With Terraform you commonly get reusable sections of code shared between environments as
                the setups are ideally identical. Step forward <strong>Terraform modules</strong> these provide the
                solution to this problem.</p>

            <p>Lets get started with <a href={"https://learn.hashicorp.com/terraform/azure/modules_az"}>Modules</a>. Any
                set of Terraform configuration files in a folder is a module. Modules can then be referenced with the
                following code.</p>

            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                               wrapLines={true}>{`module "NAME" { source = "SOURCE-file-directory-path" my_variable_name = "hello"}`}</SyntaxHighlighter>


            <p>So how do we configure this module per environment to actually make it useful? Well you can use variables
                as Module inputs. In the same way we saw variables used before. For example:</p>

            <h2>Kubernetes</h2>

            <h3>An Introduction</h3>

            <p>What is Kubernetes? There is a are a lot of technologies now around cloud native, Infrastructure as code,
                containers and orchestration, but where does Kubernetes fit in? Well it is a orchestrator for deploying
                containers developed by Google. Some of the features of Kubernetes are: </p>

            <ul>
                <li>Pods (groups of containers) which can group together container images into a single deployable
                    unit
                </li>
                <li>Load balancing, naming and discovery</li>
                <li>Namespaces for isolation and access control</li>
                <li><a href={"https://kubernetes.io/docs/concepts/services-networking/ingress/"}>Ingress
                    objects</a> that combine multiple services into a single external API
                </li>
            </ul>

            <h3>Getting Started</h3>

            <p>There are numerous ways to get a Kubernetes cluster up and running run it yourseful on bare metal, use a
                cloud based provider such as Azure, or use development tooling such as minikube (single node cluster
                only) or run it via docker.</p>

            <h4>Setting Kubernetes on Azure with Terraform</h4>

            <h4>Minikube and Mac</h4>
            <p>To install <a href={"https://kubernetes.io/docs/tasks/tools/install-minikube/"}>minikube</a> on a Mac it
                is super simple if you use Brew.</p>

            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                               wrapLines={true}>{`brew install minikube`}</SyntaxHighlighter>

            <p>You can then find the URL for the K8s dashboard by running:</p>

            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                               wrapLines={true}>{`minikube dashboard`}</SyntaxHighlighter>

            <h4>Kubectl</h4>

            <p>Kubectl is the official Kubernetes client on the command line. Allowing you to interact directly with the
                Kubernetes API. If using minikube it can be configured to work with kubectl.</p>

            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                               wrapLines={true}>{`brew install kubectl`}</SyntaxHighlighter>

            <h4>Playing with Minikube and Kubectl</h4>

            <p><i>Namespaces</i> kubernetes uses namespaces to organise objects in the cluster.</p>

            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                               wrapLines={true}>{`kubectl --namespace=mystuff`}</SyntaxHighlighter>

            <p><i>Contexts</i> are used to change the default namespace and can be set in the kubectl configuration
                file. They can also be used to manage different clusters to users for authnticating to the clusters.</p>

            <p><strong>Everything contained in K8s is represented by a Restful Resource.</strong> A very key point and
                these can be referred to as objects. Where every object has a unique HTTP URL. The kubectl basically
                makes rest API calls to these objects. A nice command when deploying a pod of containers is the ability
                to see each containers logs. This can be done with the following:</p>

            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                               wrapLines={true}>{`kubectl logs pod-name -c container-name -f`}</SyntaxHighlighter>

            <p>You can also exec the usual docker commands on a pod such as creating a bash shell into a container.</p>

            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                               wrapLines={true}>{`kubectl exec -it pod-name -- bash`}</SyntaxHighlighter>

            <p>Another neat command is the ability to copy files to and from a running container in a K8s POD.</p>


            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                               wrapLines={true}>{`kubectl cp pod-name:/path/to/remote/file /path/to/local/file`}</SyntaxHighlighter>

            <p>If you wish to port forward with a container in K8s you can run the following command. This opens a port
                on the local machine and forwards traffic to the port on the remote Pod.</p>

            <SyntaxHighlighter language='bash' style={darcula} showLineNumbers={false}
                               wrapLines={true}>{`kubectl port-forward pod-name 8081:81`}</SyntaxHighlighter>

            <h4>Pods</h4>

            <p>A Pod in K8s is a representation of multiple containers and volumes that are related. Interestingly
                applications in the same Pod,
                share the same IP Address and port space. They can communicate with each other using interprocess
                communication. On deciding if containers belong in the same Pod you should ask if they would work on
                different machines fine if so they should be placed into different pods.</p>

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
