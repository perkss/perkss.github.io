import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import { Nav, NavItem } from 'react-bootstrap';

export default class Menu extends React.Component {

render() {
  return (
 <Nav bsStyle="tabs" activeKey={1, 2, 3, 4, 5, 6, 7} onSelect={this.handleSelect}>
        <NavItem eventKey="1" href="#highlights">Highlights</NavItem>
        <NavItem eventKey="2" title="Item">Maths for Computer Science</NavItem>
        <NavItem eventKey="3" >Algorithms</NavItem>
        <NavItem eventKey="4" >Functional Programming</NavItem>
        <NavItem eventKey="5" >Problem Solving</NavItem>
        <NavItem eventKey="6" >Clojure</NavItem>
        <NavItem eventKey="7" >C</NavItem>
        <NavItem eventKey="8" >Machine Learning</NavItem>
        <NavItem eventKey="9" >Basic Maths</NavItem>
      </Nav>
);
}
}
