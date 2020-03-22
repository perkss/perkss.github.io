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
                <li className='purple'>
                    <NavLink to={"/clojure"}>
                        Some Hipster<br/>Clojure
                    </NavLink>

                </li>

                <li className='sixth-gold'>
                    <NavLink to={"/FunctionalProgramming"}>
                        Functional<br/>Programming
                    </NavLink>

                </li>

                <li className='orange'>
                    <NavLink to={"/lowlevellanguage"}>
                        Low Level<br/>Programming
                    </NavLink>

                </li>

                <li className='yellow'>
                    <NavLink to={"/DistributedSystems"}>
                        Distributed<br/>Systems
                    </NavLink>

                </li>

                <li className='dark-blue'>
                    <NavLink to={"/DevOps"}>
                        DevOps<br/>Time
                    </NavLink>

                </li>


            </ul>
        </div>

    ],
    text: [<div>
        <p>Hello and congratulations on finding <strong>The Perks of Computer Science</strong>. This is my memory dump
            of knowledge I like to acquire and remind myself of to keep my focused on learning. I will have some very
            basic stuff such as the Maths starting very basic but then journeying into more complex topics such as
            Distributed Algorithms.</p>
        <p>Please check the side menu on the top left or the buttons at the bottom to link to the sections. Some of the
            topics I cover are the <strong>Fundamentals of Mathematics&#39;s</strong> starting with some BiteSize Maths a few
            Prerequisites from Stanford and finally looking in depth at the book Concrete Mathematics. A study
            of <strong>Mathematics for Computer Science</strong> using course content from <a
                href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/index.htm">MIT</a> and <a
                href="http://web.stanford.edu/class/cs103/">Stanford</a> follows using the fundamental
            knowledge. <strong>Algorithms</strong> will then be discussed in detail building them using a variety of
            languages such as C, Java, Python and Clojure. We then have a dig into the world of <strong>Functional
                Programming</strong> using the text book the <a href="https://mitpress.mit.edu/sicp/">Structure and
                Interpretation of Computer Programs (SICP)</a> as the basis and Clojure as the main language. <strong>Hipster
                Clojure</strong> contains some great insight into our Clojure projects as well as some blog posts on
            interesting work going on in that space and frameworks used such as Kafka and Cassandra! The Kafka section
            is super interesting and is very full would definitely recommend it! Check out <strong>Low Level
                Programming</strong> for some Pointer Madness, Memory Models and programming close to the machine. Which
            will then lead to some <strong>Distributed Systems</strong>. Finally a section
            on the overused term <strong>DevOps</strong> which will cover a large range of items.</p>
        <p><strong>Most of all have fun!</strong></p>
        <p><a href="https://github.com/perkss">Please check out my Github page and feel free to contribute to any of my
            projects.</a></p>
        <p><a href="../rss/clojure-rss.xml">RSS</a></p>
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
