import React, { Component } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, docco } from 'react-syntax-highlighter/styles/hljs';
import BlogPage from './blog-page.js';
  
const clojure = {

    title: 'Clojure',
    contents: '',
    text:[<div>
        <SyntaxHighlighter language='clojure' style={darcula}>(def a 2)</SyntaxHighlighter>

<p>Your first bit of clojure much more to come! </p>
      </div>]

};




const ClojurePage = (props) =>  {

    return (
            <BlogPage
        title={clojure.title}
        contents={clojure.contents}
        text={clojure.text}
        />
    );

}

export default ClojurePage;
