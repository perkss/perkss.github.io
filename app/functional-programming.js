import React, { Component } from "react";
import BlogPage from './blog-page.js';
  


const functionalProgramming = {

    title: 'Functional Programming',
contents: '',    
text: [<div>
<p>In this section we will cover one of the greatest books of all time on funcational programming Structure and Interpretation of Computer Programs (Gerald Jay Sussman and Hal Abelson). Please give us a chance to get onto this! </p>

</div>]
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
