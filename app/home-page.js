import React, { Component } from 'react';
import Header from './header.js';


function HomeTemplate(props) {
  return (
          <div className="home">
          <Header title={props.title} />
          
      <div className="Blog-Text-Body">
        {props.text}
      </div>

      <h2>Sections</h2>
      
      <div className="Blog-Contents">
            {props.contents}
          </div>
    </div>
  );
}

export default HomeTemplate;
