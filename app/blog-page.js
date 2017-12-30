import React, { Component } from 'react';
import Header from './header.js';


function BlogPage(props) {
  return (
          <div>
          <Header title={props.title} />
          <div className="Blog-Contents">
            {props.contents}
          </div>
      <div id="text-body" className="Blog-Text-Body">
        {props.text}
      </div>
          <div className="break">
          <br />
          </div>
    </div>
  );
}

export default BlogPage;
