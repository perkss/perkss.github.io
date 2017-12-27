import React, { Component } from "react";
import BlogPage from './blog-page.js';
  

const algorithms = {
    title: 'Algorithms',
  contents:
    '',
    text: [<p> This is the  <br/> body of text </p>]
} ;



const AlgorithmsPage  = (props) => {
      return (
        <BlogPage  
          title={algorithms.title}
          contents={algorithms.contents}
          text={algorithms.text}
        />
      );
    }


export default AlgorithmsPage;
