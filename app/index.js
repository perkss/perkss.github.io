import React from 'react';
import { render } from 'react-dom';
import SideBar from './side-bar';
import Footer from './footer.js';
import "./../css/index.css";
import Content from './blog-content.js';


console.log('Testing version 4');

class App extends React.Component {


    render() {
        return (
            <div>
                <SideBar/>

                <Content/>
                <Footer/>
            </div>
        );
    }
}


render(<App/>, document.getElementById('app'));

