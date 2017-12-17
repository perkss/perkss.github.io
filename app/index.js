import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import Footer from './footer.jsx';
import "./../css/index.css";

console.log('Testing version 3');
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

