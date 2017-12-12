import React from 'react';
import { render } from 'react-dom';
import component from "./component";
import Header from './header.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
  render () {
    return (
<div>
<Header />  
<p>C  Hello React! This is going to be a great new blog!! </p>
<Footer />  
</div>
);
}
}

render(<App/>, document.getElementById('app'));

