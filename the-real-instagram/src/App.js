import React, { Component } from 'react';
import './App.css';

import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostContainer/PostsPage';

const WrappedComponent = Authenticate(PostsPage);

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <WrappedComponent />
      </div>
    );
  }
}


export default App;
