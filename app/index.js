import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Menu from './menu.jsx';
import Blog from './blog.jsx';
import "./../css/index.css";

console.log('Testing version 2');
class App extends React.Component {
  render () {
    return (
<div>
            <Main/>,
        <Footer />
</div>
);
}
}

render(<App/>, document.getElementById('app'));

