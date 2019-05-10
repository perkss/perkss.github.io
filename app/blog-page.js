import React from 'react';
import Header from './header.js';


function BlogPage(props) {
    return (
        <div>
            <Header id="header" title={props.title}/>
            <div id="text-contents" className="Blog-Contents">
                {props.contents}
            </div>
            <div id="text-body" className="Blog-Text-Body">
                {props.text}
            </div>
            <div className="break">
                <br/>
                <br/>
            </div>
        </div>
    );
}

export default BlogPage;
