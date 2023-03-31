import React, {Component} from 'react';
import {HashRouter, NavLink} from "react-router-dom";
import {slide as Menu} from 'react-burger-menu';


class SideBar extends Component {
    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }


    handleMenuClick(event) {
        event.preventDefault();
        console.log('closing menu');
        this.setState({isOpen: false});
    }


    render() {
        return (
            <HashRouter>

                <Menu isOpen={false}>
                    <a onClick={this.handleMenuClick}> <NavLink exact to="/">Home</NavLink></a>
                    <a onClick={this.handleMenuClick}> <NavLink to="/MathFundamentals">Math Fundamentals</NavLink></a>
                    <a onClick={this.handleMenuClick}> <NavLink to="/MathsForCompSci">Maths for Computer
                        Science</NavLink></a>
                    <a onClick={this.handleMenuClick}><NavLink to="/Algorithms">Algorithm Fun</NavLink></a>
                    <a onClick={this.handleMenuClick}><NavLink to="/DistributedSystems">Distributed
                        Systems</NavLink></a>
                    <a onClick={this.handleMenuClick}><NavLink to="/clojure">Hipster Clojure</NavLink></a>
                    <a onClick={this.handleMenuClick}><NavLink to="/FunctionalProgramming">Functional
                        Programming</NavLink></a>
                    <a onClick={this.handleMenuClick}><NavLink to="/lowlevellanguage">Low Level
                        Programming</NavLink></a>

                    <a onClick={this.handleMenuClick}><NavLink to="/DevOps">Devops Time</NavLink></a>
                    <a onClick={this.handleMenuClick}><NavLink to="/Financial">Financial Programming</NavLink></a>
                    <a onClick={this.handleMenuClick}><NavLink to="/GreenComputing">Green Computing</NavLink></a>
                </Menu>



            </HashRouter>
        );
    }

}

export default SideBar;
