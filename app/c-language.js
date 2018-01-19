import React, { Component } from "react";
import BlogPage from './blog-page.js';



const cLanguage = {

    title:'C Programming',
    text: 'One day this will arive! 2018 peace',
    contents: ''

};


const CLanguagePage = (props) => {

    return (

            <BlogPage
        title={cLanguage.title}
        contents={cLanguage.contents}
        text={cLanguage.text}
        />
    );

}


export default CLanguagePage;
