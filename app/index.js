import React from 'react';
import { render } from 'react-dom';
import component from "./component";

console.log('Hello World!');
alert("I am an alert box!");

class App extends React.Component {
  render () {
    return <p> Hello React! This is going to be a great new blog!! </p>;
  }
}

render(<App/>, document.getElementById('app'));

document.body.appendChild(component());
