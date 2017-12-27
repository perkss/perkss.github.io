import React, { Component } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, docco } from 'react-syntax-highlighter/styles/hljs';
import BlogPage from './blog-page.js';
  
const clojure = {

    title: 'Clojure',
    contents: '',
    text:[<div>
        <h2>Clojure Programming</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>

        <SyntaxHighlighter language='clojure' style={darcula}>(def a 2)</SyntaxHighlighter>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
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
