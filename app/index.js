import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Menu from './menu.jsx';
import Blog from './blog.jsx';
import "./../css/index.css";

console.log('Testing version');

// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
      window.applicationCache.swapCache();
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't changed. Nothing new to server.
    }
  }, false);

}, false);

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

