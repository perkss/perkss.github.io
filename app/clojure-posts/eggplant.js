import React, {Component} from 'react';
import Latex from 'react-latex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula, docco} from 'react-syntax-highlighter/styles/hljs';

const CassandraClojure = () => (

    <div>
        <h2 id="eggplant">Eggplant Behaviour Driven Development (BDD) in Clojure</h2>
        <h3>What is BDD?</h3>

        <p>Behaviour driven development or simply BDD is a methodology for software development and testing. BDD enables
            specifications for testing in a much more human readable format commonly Give, When, Then a great blog on
            this is <a href="https://martinfowler.com/bliki/GivenWhenThen.html">here</a> by the legendary Martin Fowler.
            This simplicity is what we wanted to bring to Clojure! However tooling is not explicitly required for it but
            has come about such as <a href="https://github.com/spockframework/spock">Spock</a> and <a
                href="https://cucumber.io/">Cucumber</a> are very popular in the Java space. BDD is much more top down
            approach to testing where we start from high level requirements rather than the bottom up approach of TDD
            where we start at the bottom with our smallest unit of functionality a single function in Clojure.</p>
        <h3>What is already available for BDD in Clojure?</h3>
        <p>The major player in the Clojure space is <a href="https://github.com/slagyr/speclj">Speclj</a> which is a
            great framework and does what is required but uses slightly different terminology to our Java background!
        </p>

        <h3>Motivation?</h3>
        <p>Speclj is a great framework, but does not seem to have a table based data driven testing approach like Spock.
            Hence I wanted to learn some Clojure further and write a testing framework for BDD that enabled us to do
            this <a href="http://spockframework.org/spock/docs/1.0/data_driven_testing.html">data driven</a> approach.
            Also I wanted to use the standard test runner that comes with clojure.test to run these with my unit tests.
            Eventually enabling a different runner to run our specs would be nice&#59; another TODO. </p>
        <h3>Our Solution Eggplant</h3>
        <p>Firstly please check out <a href="https://github.com/perkss/eggplant">Eggplant</a> and see the README to see
            examples and how to start using, we will cover a tutorial here also.

            Eggplant is simplistic and that is it&#39;s motto, which is a great motto as a developer and a product owner
            you do not want to be bogged down learning another syntax in the case of Cucumber and you want to conform to
            the popular human readable Given, When and Then as stated above. Developers do not need to learn another language
            or test runner they can quickly write these tests and run anywhere that clojure.test does. After a refinement meeting
            come up with some maps of data and then can easily translate them to code.


            <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defspec multiplying-two-numbers
             (specification
              {:given "a input of :a and :b"
               :when  "we #* :c"
               :then  "we expect :result"
               :data {:a 3 :b 4 :result 12}}))
             (defspec change-a-string-to-uppercase
              (specification
               {:given "a input of :a"
                :when  "we #clojure.string/upper-case"
                :then  "we expect :result"
                :data {:a "hello" :result "HELLO"}}))`}</SyntaxHighlighter>

            As you can see this is readable format, its still in a basic Clojure file and runs with your usual Clojure
            test suite. Eggplant also offers data driven development which is our favourite feature of Spock! Here you
            can see we are testing the function + and asserting the esults are equals. Each test-data-row is the
            parameters passed and the expected result!

            <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(defspec finding-the-max-of-two-numbers
            (specification
              {:expect "the #max of :a and :b"
               :where  {:a 2 :b 3 :expected 3}}))`}</SyntaxHighlighter>

        </p>
    </div>

);

export default CassandraClojure;
