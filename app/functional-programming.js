import React, { Component } from "react";
import BlogPage from './blog-page.js';
  


const functionalProgramming = {

    title: 'Functional Programming',
    contents: '',
    text: ''
};




const FunctionalProgrammingPage = (props) => {
    return (
            <BlogPage
        title={functionalProgramming.title}
        contents={functionalProgramming.contents}
        text={functionalProgramming.text}
       /> 
    );
}
    

export default FunctionalProgrammingPage;
