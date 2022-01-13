import React from "react";
import {NavLink} from "react-router-dom";
import HomeTemplate from './home-page.js';
import './../css/nav-grid.css';
import './../css/colours.css';

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

            </ul>
        </div>

    ],
    text: [<div>

        <p>Hello my name is Stuart, I am a software engineer living in London UK. Please hit me up and say hello on <a
            href={"https://www.linkedin.com/in/stuart-perks/"}>LinkedIn</a>.</p>

        <p>I am currently a technical lead, software engineer with a focus on distributed systems working heavily with
            Kotlin, Kafka and Kafka streams.</p>

        <p>Please check out my <a href="https://github.com/perkss">Github</a> and feel free to contribute to any of my
            projects. Some of the open source projects I have contributed to are Kafka, Beam, Reactor-Kafka and Samza</p>

        <p>Congratulations on finding <strong>The Perks of Computer Science</strong>. This is my memory dump
            of knowledge and a place to structure and focus my learning. I will have some very
            basic stuff such as the Maths starting very basic (got to have those foundations solid) but then journeying into more complex topics such as
            Distributed Algorithms please scan through the sections for more in depth content pages.</p>

        <p>Please check the side menu on the top left or the buttons at the bottom to link to the sections. Some of the
            topics I cover are the <strong>Fundamentals of Mathematics&#39;s</strong> starting with
            a few
            Prerequisites from Stanford and finally looking in depth at the book Concrete Mathematics. A study
            of <strong>Mathematics for Computer Science</strong> using course content from <a
                href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/index.htm">MIT</a> and <a
                href="http://web.stanford.edu/class/cs103/">Stanford</a> follows the fundamental
            knowledge. <strong>Algorithms</strong> will then be discussed in detail building them using a variety of
            languages such as C, Kotlin, Java, Python and Clojure. We then have a dig into the world of <strong>Functional
                Programming</strong> using the text book <a href="https://mitpress.mit.edu/sicp/">Structure and
                Interpretation of Computer Programs (SICP)</a> as the basis and Clojure as the main language. <strong>Hipster
                Clojure</strong> contains some great insight into our Clojure projects as well as some blog posts on
            interesting work going on in that space and some of the open source frameworks available such as Kafka and
            Cassandra! The Kafka section
            is super interesting and is very full would definitely recommend it! Check out <strong>Low Level
                Programming</strong> for some Pointer Madness, Memory Models and programming close to the machine. Which
            then leads to some <strong>Distributed Systems</strong> knowledge. Finally a section
            on the overused term <strong>DevOps</strong> which will cover a large range of items.</p>
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
