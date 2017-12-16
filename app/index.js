import React from 'react';
import { render } from 'react-dom';
import component from "./component";
import Header from './header.jsx';
import Footer from './footer.jsx';
import Menu from './menu.jsx';
import Blog from './blog.jsx';

class App extends React.Component {
  render () {
    return (
<div>
<Header />  
            <Menu />
            <Blog />
<Footer />  
</div>
);
}
}

render(<App/>, document.getElementById('app'));

