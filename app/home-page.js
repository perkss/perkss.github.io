import React, { Component } from 'react';
import Header from './header.js';


function HomeTemplate(props) {
  return (
          <div className="home">
          <Header title={props.title} />
          
      <div className="Blog-Text-Body">
        {props.text}
      </div>
      
      <div className="Blog-Contents">
            {props.contents}
          </div>
    </div>
  );
}

export default HomeTemplate;
