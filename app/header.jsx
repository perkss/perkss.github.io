import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import { Button } from 'react-bootstrap';

export default class Header extends React.Component {
 render() {
    return (
 <Jumbotron>
    <h1>Egg-Plants Rambling's</h1>
    <p>Hello and congratulatins on finding this Blog. It will be a treasure chest of technical and mathematical knowledge for all those interested in computer science and programming to learn. Suitable for all but especially for those who like to learn with all the details and solid examples, no more algorithm teachers assumptions. 'What the heck is that sigma notation?' Build in PROGRESS!</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
);
  }
}
