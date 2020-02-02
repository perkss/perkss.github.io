import React from "react";
import BlogPage from './blog-page.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';
import {HashLink as Link} from 'react-router-hash-link';
import Latex from 'react-latex';

const devops = {

    title: 'Devops',
    contents: '',
    text: [
        <div>
            <h3>Topics</h3>
            <ul className="text-list">
                <li><Link to="#Docker">Docker</Link></li>
                <li><Link to="#Azure">Azure with Terraform</Link></li>
                <li><Link to={"#Kubernetes"}>Kubernetes</Link></li>
                <li><Link to={"#AZK8TERRA"}>Azure, Kubernetes and Terraform</Link></li>
            </ul>

            <h2 id={"Docker"}>Containers: Docker</h2>
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

            <h4>Docker Requirements</h4>
            <p>Docker requires running two processes in the User Space (as opposed to the OS or Hardware space), these
                are the Docker CLI to allow
                command line interaction and Docker daemon which is the Docker engine. Docker runs natively on Linux and
                runs on a virtual machine when run
                on Windows or Mac. Docker does not provide the container technology it uses the Linux namespaces and
                cgroups, Docker makes it simpler to use. </p>
            <h4>Shipping Containers</h4>
            <p>Images are the shippable part of Docker and then you start containers locally from the Images. They can
                be hosted in the public repo Docker Inc or in
                private repo such as Nexus.</p>
            <h4>Docker in the Enterprise</h4>
            <p>For dealing with container orchestration, high availability, clustering and visibility tools such as
                Kubernetes are used.</p>

            <h4>Some things to know .... </h4>
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

            <h4>Docker and the PID Namespace</h4>
            <p>Every program that runs on a linux machine has a unique PID number. A PID namespace is a unique set of
                numbers that identify processes. Without PID namespace
                processes running inside containers would share the same ID space as other containers running on the
                same host. Isolation. </p>

            <h4>Lets not couple our apps to a specific environment</h4>

            <h5>Read only filesystem</h5>
            <p>The reason that a docker container that is read only is good is because it will not write files that make
                this container unique to the running
                instance. To achieve this you can use the <i>--read-only</i> flag. </p>
            <h5>Environment Variable Injection</h5>
            <p>To provide environment variables at runtime to a container the <i>--env</i> or simply <i>e</i> flag can
                be used that will inject the following variables into the
                container environment. For example a referenced database HOST, PORT, USERNAME, PASSWORD could be
                injected into a running application inside a container to reference
                unique database.</p>

            <h4>Durable Containers</h4>
            <p>Docker containers can be in four states Running, Paused, Restarting, Exited. Docker allows automatic
                restarts using the <i>--restart</i> flag
                This can be combined with backoff strategies to only restart a number of times and with a period
                between.</p>

            <h4>Cleaning up after yourself</h4>
            <p>To see a list of all containers in the docker instance you run <i>docker ps -a</i>. To remove a container
                simply run <i>docker rm</i> followed by
                the name of the container id. If you are running short lived containers for example ryane/kafkacat just
                for some tooling purposes then you can set the flag
                <i>--rm</i> on start up which will clean up when the container exits.</p>

            <h4>Docker Repositories</h4>
            <p>Named repositories in Docker are a named bucket of images. This name is similar to a url for example you
                have the registry host, user_name and the repository short name.
                <i>quay.io/perkss/my_app_registry</i> where a unique app sits in the my_app_registry. Each repository
                can hold multiple versions of an image where they are tagged differently. Tags are
                important on Docker and can be very specific so for example each minor version of Java 8, or can be just
                a high level Java 8 version that will take the latest minor version. Or simply you can refer
                too java:latest to always get the latest version on downloads. Docker registries are where images are
                hosted, and they can be public or private. Its easy to point to different registries
                and docker enables you to login and logout of private ones. </p>

            <h4>Storage Volumes</h4>
            <p>A volume is a tool to segment and share data that has a scope of lifecycle, independent of a single
                container.
                Every container has a MNT namespace where and the image that a container is created from is mounted at
                root. Docker has three mount types: Bind Mounts, In-memory Storage and Docker Volumes.</p>

            <h5>Bind Mounts</h5>
            <p>Bind mounts are used to remount parts of the file tree system onto other locations for example from a
                specific part of the host file system to a specific file tree in the container. For example
                if you need to send your container logs to some specific location they can be bind mounted to some
                specific host directory. As you can probably tell there is a major concern with Bind Mounts, as they
                couple the container to the specific host filesystem.</p>

            <h5>In-memory Storage</h5>
            <p>In memory storage should be used for private files, keys, passwords amongst other things as these secret
                files do not want to be stored and shipped within a container.</p>

            <h5>Docker Volumes</h5>
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

            <h5>Problems with Local Volumes</h5>
            <p>Local volumes are great but they are not perfect what if you want to move your containers to run on a
                different host, then the volume will no longer be on that host. The docker plugins available for volumes
                can help overcome this for example in cloud services space.</p>


            <h4>Docker Networking</h4>
            <p>Each container has its own private loopback interface and separate virtual ethernet interface that is
                linked to a virtual interface in the hosts namespace. Each container has its own unique IP address that
                is internal to the host as all connections
                are routed through the Docker bridge virtual interface. You can build your own docker network using <i>docker
                    network create</i></p>


            <h2 id={"Azure"}>Azure</h2>

            <h3>Azure Fundamentals</h3>

            <p>As prep for doing the AZ900 course these are might notes with reference from the <a
                href={"https://docs.microsoft.com/en-us/learn/paths/azure-fundamentals/"}>course material</a></p>

            <h4>Cloud Fundamentals</h4>

            <p>Cloud computing is a rental service for compute. For example others infrastructure or software. It is
                flexible and cost effective.</p>
            <p>Serverless compute lets you run application code without the need for creating configuring or maintaining
                a server and you only pay for the processing time it takes to execute each function.</p>

            <p>The benefits of cloud computing are its cost effective (pay as you go/consumption based), scalable,
                elastic (can change compute power to demand), current (by keeping all hardware/networks/software
                patched), reliable, global and secure (physical/digital)</p>

            <p>Cloud providers are big businesses which can you there size for economies of scale to purchase
                infrastructure at a lower cost. Operational expenditure is cloud where you pay as you use (agile with
                demand), capital
                expenditure is if you go yourself and have high up front cost then deduct that cost over time (nice
                fixed cost at the beginning of the project). OpEx
                costs are software licenses, scaling charges and billing at the user or org level (subscription
                costs).</p>

            <p>The three cloud <a
                href={"https://docs.microsoft.com/en-us/learn/modules/principles-cloud-computing/5-types-of-cloud-services"}>categories</a> are
                IAAS (rent hardware), PAAS (rent environment like Ubuntu or database), SAAS
                (rent software like Office 365). </p>

            <p><strong>Azure billing</strong> when you sign up to Azure you create a subscription which is a logical
                grouping of resources that are billed too. There can be multiple subscriptions for example one per
                environment of dev and prod, or organisational structures. Azure offers three support plans Developer
                with response time of one business day, standard 1 hour response time for critical workloads production
                ready and professional direct which is for business critical workloads with one hour response and
                priority tracking.</p>

            <p>Availability and redundancy are a key benefit of Azure, and <i>Availability zones</i> are physically
                separate datacenters within a Azure region. <i>Region pairs</i> are data centers that are at least 300
                miles apart but are within the same geography for example East US and West US. These region pairs are
                directly connected still.</p>

            <p>Downtime can be calculated from SLAs given, if multiple services are used you simply multiply the two
                SLAs. For example if you have two components being used such as a web app and a database where
                the SLA is <i>99.95&#37;</i> and <i>99.99&#37;</i> respectively then the composite downtime is <Latex>$99.95
                    \times
                    99.99 = 99.94$</Latex>. You can improve the SLA with fallback paths say for example the database
                failed and you could fallback to a queue with SLA of <i>99.9&#37;</i>. To calculate this you do the SLA
                as the difference of the two component chosen for primary and fallback and multiply this by the webapp
                SLA. Azure provides services in 54 regions.</p>

            <h4>AZ 900 Fundamentals Certification Notes</h4>

            <p>As part of my Azure learning I decided to take the fundamentals certification. These are my summary notes
                for it.</p>

            <h4>Cloud Concepts (15%-20%)</h4>

            <h5>Benefits and Considerations for the Cloud</h5>

            <p>High availability issues can stop this such as network outage, application failure, VM outage, power
                outage or a dependency outage such as a database. Cloud providers offer SLA that guarantees a certain
                level of of availability as a percentage.</p>

            <p><strong>Scaling</strong> allows you to allows you to add additional resources or power (vertical or
                horizontal).
                <strong>Elasticity</strong> allows automatic scaling when demand requires it. This speed and flexibility
                makes the cloud an <strong>agile</strong> offering.</p>

            <p><strong>Fault tolerance</strong> allows systems to recover at a small scale for example moving a
                unhealthy VM to a healthy one. <strong>Disaster recovery</strong> means being able to move your services
                and data to another region.</p>

            <p>Economies of scale as cloud providers have one focus and a large pool of resources available you can
                benefit from their ability to purchase infrastructures, power, land at a cheaper rate. <strong>Capital
                    expenditure</strong> is when you do it yourself on premises and you spend large up front in order to
                have longer term benefits. <strong>Operational Expenditure</strong> are the costs of daily usage and
                cloud is opex as you pay for what you are using right now.</p>


            <p><strong>Consumption based model</strong> is what cloud offers that you can only pay for what you use and
                need at a particular time.</p>

            <p>IAAS is the infrastructure you are buying such as a provisioned VM. As you control the entire OS you have
                more control but more responsibility such as patching security updates to the OS.</p>

            <p>PAAS offers the infra, along with the OS and installed software such as a database or web server. This
                offers a good balance as you get to control the software installed but the OS environment is maintained
                for you. The Azure app services if PAAS.</p>

            <p>SAAS the provider controls everything and you just rent the software for example Hotmail is SAAS. Takes
                burden off your IT service but has limited flexibility.</p>
            <p><strong>Public Cloud</strong> you use shared infrastructure available on the public Internet. May have
                security concerns and vendor lockin.</p>
            <p><strong>Private Cloud</strong> hosted on prem or by a private provider. Many benefits of cloud but then
                you are paying for it and its CAPEX and pay for all the infra you may not even use.</p>
            <p><strong>Hybrid Cloud</strong> is where you can have applications running in public cloud but then access
                data stored in the private cloud. Adds complexity the setup of sharing this data and also may add
                further latency.</p>

            <h4>Core Azure Services (30%-35%)</h4>

            <h5>Core Architectural Components</h5>

            <p><strong>Regions</strong> are an area in a particular geography with each region hundreds of miles apart.
                Each geography is usually a country and contains at least two regions.
            </p>
            <p><strong>Availability Zones</strong> ensure that resources are deployed into at least three separate DCs
                in a region. And allow you to specify which data center in a region a VM resides.</p>
            <p><strong>Resource Groups</strong> allows logical grouping of resources and to tag them.</p>
            <p><strong>Azure Resource Manager</strong> is how Azure management tools create and manage resources. It
                uses resource providers to create and resources. It sits behind the portal, powershell or SDK.</p>
            <p>Resources can be tagged with Meta Data not all resources support tags and they are not inherited from
                resource group layer.</p>
            <p>ARM template allows the creation of consistent large number of resources.</p>
            <p><strong>Availability sets</strong> protect your services with fault domains to spread them across
                different racks and update domains to spread across hardware so it does not update at the same time.</p>

            <p>Azure is in 52 regions and 10 geographies at this time 2020 January.</p>

            <h5>Core Products</h5>

            <p><strong>Compute</strong> are <strong>Virtual Machines</strong>, <strong>Virtual Machine Scale
                Sets</strong>, <strong>App Services Functions which are serverless</strong>, <strong>Azure Container
                Instances</strong> for running containers and <strong>Azure Kubernetes Services</strong> for container
                orchestration.</p>

            <p>Compute resources are ones that perform some type of task that requires CPU cycles to work.</p>

            <p>Azure only supports Linux and Windows OS.</p>

            <p><strong>Networking</strong> <strong>Virtual Network</strong> allows services to communicate with each
                other and the internet. <strong>Load Balancer</strong> distribute traffic from the internet to multiple
                VMs. <strong>VPN Gateway</strong> allows secure VPN tunnels to be set up. <strong>Application
                    Gateway</strong> is a load balancer well suited for HTTP traffic. <strong>Content Delivery
                    Network</strong> caches resources so users can get a faster experience cross
                the globe. <strong>Traffic Manager</strong> is a DNS based solution help load balance, send traffic to
                another
                region in an outage or send users to their closest region.</p>
            <p><strong>Storage</strong> <strong>Blob Storage</strong> for unstructured data like binary files. <strong>Disk
                Storage</strong> is a virtual disk specifically for Vms. <strong>File
                Storage</strong> allows disk space in the cloud to map file directories. <strong>Archive
                Storage</strong> very low cost but slower to access.</p>
            <p><strong>Databases</strong> <strong>Cosmos DB</strong> is a NOSQL database for unstructured
                data. <strong>Azure SQL DB</strong> is for relational database<strong>Azure
                    MYSQL</strong>, <strong>Azure PostgresSQL</strong>,
                <strong>Database Migration</strong></p>
            <p><strong>Azure Marketplace</strong> is a source of templates for resource creation including third party.
            </p>

            <h5>Azure Solutions</h5>

            <p><strong>IoT</strong> refer to sensors that communicate over the internet. Azure IoT Hub allows you to
                manage IoT devices and route to and from them. IoT hub makes it easy to provision a large number of
                these devices. IoT central is a SAAS for monitoring the IoT devices.</p>
            <p><strong>Big Data and Analytics</strong> is for when there is more data than you can analyse through
                conventional means. Big data is stored in data warehouse specifically <strong>SQL Data
                    Warehouse</strong> for relational data or <strong>Data Lake Storage</strong> is good for any type of
                data. HD Insight is the offering for processing big data with Hadoop, Storm, Kafka</p>
            <p><strong>AI</strong> Azure databricks can be used for machine learning and can be made up of notebooks.
                Azure machine learning service uses cloud based resources to train models faster. Azure machine learning
                studio allows you to build , train and Score ML models in a drag and drop style.</p>
            <p><strong>Serverless Computing</strong> allows you to run code on surplus VMs when you need to execute it
                so you only pay on demand for what you use. Azure functions is a compute component of
                serverless. <strong>Azure logic apps</strong> are a serverless workflow that connects triggers and
                actions.</p>
            <p><strong>Devops</strong> <strong>Azure Event Grid</strong> enables raising events when you interact with
                your Azure resources.</p>

            <h5>Azure Management Tools</h5>
            <p><strong>Azure Portal</strong> is a web based interface for interacting with your resources.</p>
            <p><strong>Azure Powershell</strong> manage resources cross platform.</p>
            <p><strong>Azure CLI</strong> manage and can be scripted in multiple languages.</p>
            <p><strong>Azure Cloud Shell</strong> connect from anywhere with browser based shell.</p>
            <p><strong>Azure Advisor</strong> provides best practice recommendations on in the area of high
                availability, security and performance.</p>


            <h4>Security, Privacy, Compliance and Trust (25%-30%)</h4>

            <h5>Network Security</h5>
            <p><strong>Network Security Groups (NSG)</strong> are used to control which subnets and resources can talk
                to each other in a virtual network. These provide a basic way for protecting a Virtual Network subnet.
            </p>
            <p><strong>Application Security Groups (ASG)</strong> enables grouping VMs by the applications running on
                them.</p>

            <p><strong>User Defined Rules (UDR)</strong> for routing traffic via your firewall and virtual network.</p>
            <p><strong>Azure Firewall</strong> stateful firewall to block network attacks. A web application firewall
                protects against XSS attacks. It is useful for perimeter security.</p>
            <p><strong>DDoS Protection</strong> basic is for common attacks, and standard uses advanced threat
                protection.</p>
            <p><strong>Azure Security Solution</strong> can be when you need to choose all or some of the features above
                on offer depending on your application. Network layer security example is separate servers into distinct
                subnets depending on roles.</p>

            <h5>Identity Services</h5>
            <p><strong>Azure active directory</strong> cloud based service that authenticates and authorises users.
                Preferred choice for identity management.</p>
            <p><strong>Azure Multi Factor Authentication</strong> requires both password and owned device to login.</p>


            <h5>Security Tools and Features</h5>
            <p><strong>Azure Security Center</strong> provides ability to monitor and manage cloud and on premises
                resources for
                security threats.</p>

            <p><strong>Key Vault</strong> stores secrets, keys and certificates.</p>
            <p><strong>Azure Information Protection (AIP)</strong> enables categorisation of email and documents to
                protect against unauthorised access.</p>
            <p><strong>Azure Advanced Thread Protection (ATP)</strong> protect on premise domain controllers and servers
                from attack.</p>

            <h5>Governance Methodologies</h5>
            <p><strong>Azure Policy</strong> allows setting rules when creating and managing Azure resources. For
                example only allow a certain VM size for cost compliance or location of resources. Used to enforce
                standards.</p>

            <p><strong>Role Based Access Control (RBAC)</strong> is more focused on user actions at different scopes.
                Allowing users access or abilities to different resources available to them.
            </p>
            <p><strong>Locks</strong> allow properties to be locked on resources to make them Read Only or to block
                deletion of resources.</p>
            <p><strong>Azure Advisor</strong> provides portal for analysing and reporting best practices of your
                resources. Specific to your uses. Such as turn off unused services or scale them down, buy reserved
                instances over pay as you go and unprovisioned express route circuits.</p>
            <p><strong>Azure Blueprints</strong> are a repeatable way to template and define role assignments, policy
                assignments, resource manager templates and resources groups.</p>

            <h5>Monitoring and Reporting</h5>
            <p><strong>Azure Monitor</strong> displays metrics for your resources.</p>

            <p><strong>Azure Service Health</strong> provides an overview of the health of your resources and general
                Azure health in your regions.</p>
            <p><strong>Example Use Cases</strong></p>

            <h5>Privacy, Compliance, Data Protection</h5>
            <p><strong>Compliance</strong></p>
            <p><strong>Microsoft Privacy Statement</strong> states how data is protected.</p>
            <p><strong>Trust Center</strong> information portal showing penetration test
                results, security assessments and other documents that can be used to show
                Microsoft's compliance efforts</p>
            <p><strong>Service Trust Portal</strong> feature of 365 offering details on how to manage privacy.</p>
            <p><strong>Compliance Manager</strong> makes it easy to manage compliance with industry standard
                assignments.</p>
            <p><strong>Azure Government Cloud Services</strong> is private cloud for governments operated in US, all
                employees are screened and are US citizens. Azure government is made to ensure compliance with goverment
                standards.</p>
            <p><strong>Azure China Cloud Services</strong></p>

            <h4>Azure Pricing and Support (20%-25%)</h4>

            <h5>Azure Subscriptions</h5>

            <h5>Azure Subscriptions</h5>
            <p><strong>Azure Subscription</strong> contain Azure resources, they have limits and can have multiple
                subscriptions. They belong to a tenant.</p>
            <p><strong>Access control and Offer Types of Subscriptions</strong> include free, pay as you go and
                enterprise.</p>
            <p><strong>Management groups</strong> gives you the ability to manage multiple subscriptions into
                hierarchies.</p>

            <h5>Planning and Management Costs</h5>
            <p><strong>Purchase Options</strong> you get monthly billing on pay as you go. And they are metered.</p>

            <p>You only pay for outbound traffic not inbound.</p>
            <p><strong>Free Account</strong> includes basic support.</p>
            <p><strong>Cost Factors</strong> the type of resource for example 8 core VM vs single core. Differences
                between services Enterprise, Web Direct or Cloud Solution Provider. Locations differ in costs with
                different billing zones.</p>
            <p><strong>Zones</strong> have different billing zones. Zone 1 is US, Europe and Canada. Zone 2 is Asia and
                Australia. Zone 3 is Brazil, South Africa, UAE and the DE Zone 1 is Germany. </p>
            <p><strong>Pricing Calculator</strong> makes it easy to estimate Azure costs and can be saved and shared and
                exported to excel.</p>
            <p><strong>Total Cost Of Ownership (TCO)</strong> allows calculation of costs vs on premise cloud.</p>
            <p><strong>Minimise Cost</strong> have spending limits for subscriptions, reserved instances over pay as you
                go if using a server all year. Correct size of under utilised resources. Deallocate virtual machines in
                off hours. Use serverless or Azure batch to run jobs on non utilized vms.</p>
            <p><strong>Cost Management</strong> portal showing insights into where your spending is going on cloud
                resources. You can set budgets and have alerts when you are close to hitting budgets.</p>
            <p><strong></strong></p>

            <h5>Support Options</h5>
            <p><strong>Support Plans</strong> free support is offered for subscription and billing issues. <strong>Business
                hours</strong> as 9 til 5 local time. With different serverities give. <strong>Severity A</strong> is
                production application completely down. <strong>Severity B</strong> is production application moderately
                impacted. <strong>Severity C</strong> is situation causing moderate impact.</p>


            <table>
                <tr>
                    <th>Basic</th>
                    <th>Developer</th>
                    <th>Standard</th>
                    <th>Pro Direct</th>
                    <th>Premier</th>
                </tr>
                <tr>
                    <td>All accounts</td>
                    <td>Trial and non production environments</td>
                    <td>Production workloads</td>
                    <td>Business critical dependence</td>
                    <td>Substantial dependence</td>
                </tr>
                <tr>
                    <td>24/7 Access to billing and subscription support</td>
                    <td>24/7 Access to billing and subscription support and business hours email support</td>
                    <td>Support via Phone and Email 24x7</td>
                    <td>Support via Phone and Email 24x7</td>
                    <td>Support via Phone and Email 24x7</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Unlimited contacts / unlimited cases</td>
                    <td>Unlimited contacts / unlimited cases</td>
                    <td>Unlimited contacts / unlimited cases</td>
                    <td>Unlimited contacts / unlimited cases</td>
                </tr>

                <tr>
                    <td></td>
                    <td>Severity C &lt; 8 business hours</td>
                    <td>Severity C &lt; 8 business hours. Severity B &lt; 4 hours. Severity A &lt; 1 hour.</td>
                    <td>Severity C &lt; 8 business hours. Severity B &lt; 4 hours. Severity A &lt; 1 hour.</td>
                    <td>Severity C &lt; 8 business hours. Severity B &lt; 4 hours. Severity A &lt; 1 hour. &lt; 15
                        minutes Azure Rapid Repsonse
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>General Guidance on Architecture</td>
                    <td>General Guidance on Architecture</td>
                    <td>Best practice guidance for architecture by ProDirect delivery manager.</td>
                    <td>Customer specific architecture support</td>
                </tr>

            </table>

            <p><strong>Support Tickets</strong> can be raised from home page or from New Support Request in the specific
                resource.</p>
            <p><strong>Other support channels</strong> include MSDN forums and Stack Overflow.</p>
            <p><strong>Knowledge Center</strong> helps you find specific support articles for specific Azure product.
            </p>

            <h5>SLA</h5>
            <p><strong>SLA</strong> guarantees availability and if you do not receive this you can be eligible for
                credit.</p>
            <p><strong>Composite SLA</strong></p>
            <p><strong>Determine appropriate SLA</strong></p>


            <h5>Service Lifecycle</h5>
            <p><strong>Public and Private Preview Features</strong> public are available to all but private are select
                users and only usually available via command line tools.</p>
            <p><strong>General Availability</strong> once a preview feature meets quality level for SLA it becomes
                publicly available. Anyone can use it and it can be used in production.</p>
            <p><strong>Monitor updates</strong> via Azure Updates which provides details on feature and service updates
                and lifecycles.</p>


            <h4>Terraform and Azure</h4>

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

            <h2 id={"Kubernetes"}>Kubernetes</h2>

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

            <h4>K8s Architecture</h4>

            <h4>Master Nodes</h4>
            <p>The master nodes run the control plane which runs all the tasks required for kubernetes to do its job
                such as scheduling containers,
                managing services and so forth. The control plane contains multiple
                components. <i>kube-apiserver</i> which is the frontend server for the control plane that handles API
                requests. <i>kube-scheduler</i> which decides where to place newly created
                pods. <i>kube-controller-manager</i> responsible for running resource controllers such as
                deployments. <a href={"https://github.com/etcd-io/etcd"}><i>etcd</i></a> this is the database where K8s
                stores
                information. It is a distributed key value store which states its focus is on being simple, secure, fast
                and reliable. <i>cloud-controller-manager</i> which interacts with the cloud provider such as Azure, for
                managing load balancers and disk volumes. These components work in a distributed sense and all connect
                via the kube-apiserver. That then transmits out to the worker nodes.</p>

            <h4>Worker Nodes</h4>

            <p>The other part of the cluster which runs the workloads are the worker nodes. These nodes run the
                following various components. <i>kubelet</i> this starts workloads that are scheduled and monitors there
                status. <i>kube-proxy</i> this deals with networking to route requests between Pods on different nodes
                and across the internet. <i>Container runtime</i> is responsible for actually starting and stopping
                containers and their communications.</p>

            <h4>Handling Failures</h4>

            <p>As with most modern frameworks Kubernetes is built to survive node failures. The control plane is made up
                of multiple master nodes with it able to deal with components shutting down and network partitions. The
                database that is stored using <i>etcd</i> is also replicated across multiple nodes and can continue
                running as long as a quorum of over half the original number of replicas is available. Handling worker
                node failures is very simple they are detected and then rescheduled to run somewhere else if the control
                plane is operating correctly. The only risk is if a lot of worker nodes fail at once and you do not have
                the resources available to reschedule them elsewhere. When using the cloud it maybe useful to have your
                nodes spread across cloud availability zones, in case a zone goes down highly unlikely though.</p>


            <h2 id={"AZK8TERRA"}>Azure, K8s and Terraform</h2>

            <p>You will need a service principal so do this <a
                href={"https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal"}>first</a>.
                I did just use the service principal details of my connected Azure CLI as a work around.
            </p>

            <p><a
                href={"https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/examples/kubernetes/basic/main.tf"}>Azure
                deploying Kubernetes with Terraform</a></p>

            <p>A neat <a
                href={"https://docs.microsoft.com/en-us/azure/terraform/terraform-create-k8s-cluster-with-tf-and-aks"}>tutorial</a> is
                a good place to begin. You may need to create your own storage account for the part to deal with
                terraform state. A storage tutorial can be found <a
                    href={"https://docs.microsoft.com/en-us/azure/terraform/terraform-backend"}>here</a>. Alternatively
                if you access the Azure shell via the web browser it requires some state storage so will create one for
                you.</p>

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
