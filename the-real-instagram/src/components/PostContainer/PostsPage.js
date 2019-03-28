import React, { Component } from 'react';

import dummyData from './dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

let display = dummyData;
let name = '';
let container = [];

class PostsPage extends Component {

constructor() {
    super();
    this.state = {
      data: [],
      value: name
    };
  }

  search = (event) => {
    if(event.target.value ==="") {
      name = ""
    }else{
      name = event.target.value;
    }
    this.setState({value: name})
  }

  findPost = (event) =>{
    event.preventDefault();
    if(name!=="") {
      container = display.filter(post => {
        return(post.username === name)
      })
      display = container;
    }else {
      display = dummyData;
    }this.setState((prevState, props) => ({data: display}))
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({data: dummyData});
    }, 2000)
  }

  render() {
    return (
      <div>
        <SearchBar submit={this.findPost} change={this.search} value={this.state.value}/>
        <PostContainer posts={this.state.data} />
      </div>
    );
  }
}

export default PostsPage;