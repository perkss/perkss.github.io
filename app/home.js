import React from "react";
import {NavLink} from "react-router-dom";
import HomeTemplate from './home-page.js';
import './../css/nav-grid.css';
import './../css/colours.css';
import {SocialIcon} from 'react-social-icons';
import me from '../images/me.jpg';

const ColoredLine = ({color}) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: 5,
            marginLeft: "22%"
        }}
    />
);

const home = {

    title: 'The Perks of Computer Science',
    contents: [

        <div className='center'>

            <ul className='nav nav-grid center'>

                <li className='amber'>
                    <NavLink to={"/MathFundamentals"}>
                        Math<br/>Fundamentals
                    </NavLink>
                </li>

                <li className='cyan'>
                    <NavLink to={"/MathsForCompSci"}>
                        Maths for<br/>Computer Science
                    </NavLink>
                </li>
                <li className='pink'>
                    <NavLink to={"/Algorithms"}>
                        Algorithm<br/>Fun
                    </NavLink>
                </li>

                <li className='yellow'>
                    <NavLink to={"/DistributedSystems"}>
                        Distributed<br/>Systems
                    </NavLink>

                </li>

                <li className='orange'>
                    <NavLink to={"/lowlevellanguage"}>
                        Low Level<br/>Programming
                    </NavLink>

                </li>

                <li className='purple'>
                    <NavLink to={"/clojure"}>
                        Some Hipster<br/>Clojure
                    </NavLink>

                </li>

                <li className='dark-blue'>
                    <NavLink to={"/DevOps"}>
                        DevOps<br/>Time
                    </NavLink>

                </li>

                <li className='sixth-gold'>
                    <NavLink to={"/FunctionalProgramming"}>
                        Functional<br/>Programming
                    </NavLink>

                </li>

                <li className='teal'>
                    <NavLink to={"/Financial"}>
                        Financial<br/>Programming
                    </NavLink>
                </li>

                <li className='seventh-gold'>
                    <NavLink to={"/GreenComputing"}>
                        Green<br/>Computing
                    </NavLink>
                </li>


            </ul>
        </div>

    ],
    text: [
        <div>

            <br/>
            <img style={{float: "left", marginRight: 25, marginBottom: 15}} src={me} alt="Me" width="20%" height="20%"/>

            <p className={"cv"}>Hello my name is <i>Stuart Perks</i>. I am an experienced software engineer living in
                London UK. I
                have a keen
                interest in Green Computing considering the environmental aspects of software. Along with Distributed
                Systems with a particular focus on database internals and stream processing. Some of the open source projects I
                have
                contributed to are Apache Kafka, Apache Beam, Reactor-Kafka, GSF Impact Framework and Apache Samza.</p>
            <p className={"cv"}>Please hit me up and say hello on LinkedIn <SocialIcon style={{height: 35, width: 35}}
                                                                                       url="https://www.linkedin.com/in/stuart-perks/"/> and
                check out my GitHub <SocialIcon style={{height: 35, width: 35}} url="https://github.com/perkss"/>.</p>

            <p className={"cv"}>All views and content are my own.</p>

            <p className={"cv"}>Please check out my <a href="https://github.com/perkss">GitHub</a> and feel free to
                contribute to any of my
                projects. </p>

            {/*<ColoredLine color="#0288D1"/>*/}
            <br/>

            <h3>Publications</h3>

            <ul className="no-bullets" style={{paddingLeft: 10}}>
                <li style={{margin: 10}}>
                    <i><a href={"https://ieeexplore.ieee.org/abstract/document/7515618"}>Tolerating transient
                        late-timing
                        faults in cloud-based real-time stream processing.</a> In Real-Time
                        Distributed Computing (ISORC), 2016 IEEE 19th International Symposium on, pp. 108-115. IEEE,
                        2016.</i>
                </li>

                <li style={{margin: 10}}>
                    <i>
                        <a href={"https://www.researchgate.net/profile/Stuart-Perks/publication/286580029_Energy_Efficient_Software_Engineering_for_Cloud_Computing/links/566be88908ae62b05f07c554/Energy-Efficient-Software-Engineering-for-Cloud-Computing.pdf"}>Energy
                            Efficient Software Engineering for Cloud Computing</a>
                    </i>
                </li>
            </ul>

            <h3>Perks of Computer Science</h3>

            <p>Congratulations on finding <strong>The Perks of Computer Science</strong>. This is my memory dump
                of knowledge and a place to structure and focus my learning. I will have some very
                basic stuff such as the Maths starting very basic (got to have those foundations solid) but then
                journeying
                into more complex topics such as
                Distributed Algorithms please scan through the sections for more in depth content pages.</p>

            <p>Please check the side menu on the top left or the buttons at the bottom to link to the sections. Some of
                the
                topics I cover are the <strong>Fundamentals of Mathematics&#39;s</strong> starting with
                a few
                pre-requisites from Stanford and finally looking in depth at the book Concrete Mathematics. A study
                of <strong>Mathematics for Computer Science</strong> using course content from <a
                    href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/index.htm">MIT</a> and <a
                    href="http://web.stanford.edu/class/cs103/">Stanford</a> follows the fundamental
                knowledge. <strong>Algorithms</strong> will then be discussed in detail building them using a variety of
                languages such as C, Kotlin, Java, Python and Clojure. We then have a dig into the world of <strong>Functional
                    Programming</strong> using the text book <a href="https://mitpress.mit.edu/sicp/">Structure and
                    Interpretation of Computer Programs (SICP)</a> as the basis and Clojure as the main
                language. <strong>Hipster Clojure</strong> contains some great insight into our Clojure projects as well as some blog posts of
                interesting work going on in that space and some of the open source frameworks available such as Kafka
                and
                Cassandra! The Kafka section
                is super interesting and is very detailed would definitely recommend it! Check out <strong>Low Level
                    Programming</strong> for some Pointer Madness, Memory Models and programming close to the machine.
                Which
                then leads to some <strong>Distributed Systems</strong> knowledge. A section
                on the overused term <strong>DevOps</strong> which will cover a large range of items. Leading us to the very important topic of <strong>Green Computing</strong>.</p>

            <p><strong>Most of all have fun!</strong></p>


        </div>]

};

const HomePage = () => {
    return (
        <HomeTemplate
            title={home.title}
            contents={home.contents}
            text={home.text}
        />
    );
};


export default HomePage;
