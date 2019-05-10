import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/styles/hljs';

const Specs = () => (

    <div>
        <h2>Skateboards and Specs</h2>

        <p>Coming from a background of Java a statically typed language using Clojures dynamically typed language was a
            stark change. A few generic collections can be used for representing data but this does make code harder to
            understand on what type of data is flowing through this code in Clojure 1.9 Specs was released that enables
            developers to describe the structure of data and validate it.In this post we are going to walk through one
            of my favourite hobbies in my younger years skateboarding using Clojure Specs! Big shout out to <a
                href="https://www.athirdfoot.co.uk/">A Third Foot</a> for still making boards in the UK and going
            strong! Lets get started with our scenario for Specs we want to build skateboards from different components
            the Deck, Wheels, Trucks and Bearings. We have a selection of brands to choose from for each of these
            components. To get this started we will define the possible values for each of these. We will need to
            require clojure.spec.alpha :as s. We will then define specs using a set of possible values for each
            component of a skateboard.</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`;; Spec definition for components
(s/def ::deck #{"A Third Foot" "Baker" "Flip"})
(s/def ::trucks #{"Independent" "Thunder" "Venture"})
(s/def ::wheels #{"Spitfire" "Ricta" "Bones"})
(s/def ::bearings #{"Bones Reds" "Bones Swiss"})

;; Lets check the validity of these types
(s/valid? ::deck "A Third Foot")  ;; => true
(s/valid? ::trucks "Independent")  ;; => true
(s/valid? ::wheels "Spitfire")  ;; => true
(s/valid? ::bearings "Bones Swiss")  ;; => true

;; Use required spec keys to defined a skateboard
(s/def ::skateboard (s/keys :req-un [::deck ::trucks ::wheels ::bearings]))
;; Is this a valid Skateboard? Yes
(s/valid? ::skateboard {:deck "A Third Foot" :trucks "Independent" :wheels "Spitfire" :bearings "Bones Swiss"}) ;; => true

;; This will explain what is wrong with this map can you check?
(s/explain ::skateboard {:decks "A Third Foot" :trucks "Independent" :wheels "Spitfire" :bearings "Bones Swiss"})
`} </SyntaxHighlighter>

        <p>That short amount of code is doing some impressive stuff that is super easy to read. We have defined some
            brands of Skateboards we can choose from then checked validity of some examples, and then built up a
            skateboard spec for a map and its keys. We then used s/explain to work out what is wrong with our final map
            representation of a skateboard. If you are not familiar with Specs you may wonder about the :: and the
            :req-un. When you define a Spec it put it into a global registry where the Specs are namespaced so you could
            have ::deck in a namespace foo and ::deck in a namespace ::bar. If you do not want to use the registry it
            Spec valid can be used directly for example: </p>
        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true}
                           wrapLines={true}>{`(s/valid? string? "A Third Foot")`}
        </SyntaxHighlighter>

        <p>Now if we want to generate random examples of skateboards built from our component for example to decide on
            your next setup or to generate test cases. We can simply require in clojure.spec.gen.alpha :as gen and do
            the following its pretty awesome.</p>

        <SyntaxHighlighter language='clojure' style={darcula} showLineNumbers={true} wrapLines={true}>{`(gen/generate (s/gen ::skateboard))
;; => {:deck "Flip", :trucks "Thunder", :wheels "Ricta", :bearings "Bones Swiss"}`}
        </SyntaxHighlighter>

        <p>Hope you enjoyed this introduction of Clojure Specs via some pretty neat skateboard brands.</p>

    </div>

);

export default Specs;
