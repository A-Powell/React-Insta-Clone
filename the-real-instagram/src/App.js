import React, { Component } from 'react';
import styled from 'styled-components';
import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostContainer/PostsPage';

const AppWrapper = styled.div`
text-align: center;
`;

const WrappedComponent = Authenticate(PostsPage);

class App extends Component {
 
  render() {
    return (
      <AppWrapper>
        <WrappedComponent />
      </AppWrapper>
    );
  }
}



export default App;
