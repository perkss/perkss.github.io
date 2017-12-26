import React, { Component } from "react";
import SideBar from './side-bar.js';
 
class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome</h2>
            <p>Hello and congratulations on finding <strong>The Perks of Computer Science Ramblings</strong>. It will become a treasure chest of technical and mathematical knowledge for all those interested in computer science and programming to use. Suitable for all but especially for those who like to learn with all the details and solid examples, no more algorithm teachers assumptions.</p>

            <p onClick={ SideBar.handleMenuClick }>Please check the side menu on the top left. We will be covering fundamental maths looking in depth and Concrete Mathematics. Along with SICP to get some functional programming languages using Clojure.</p>

<p>Build in PROGRESS we will be GROWING quickly!</p>
      </div>
    );
  }
}
 
export default Home;
