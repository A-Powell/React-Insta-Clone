import React from 'react';
import Post from './Post';
import {PostsContainerWrapper} from './PostStyles';

const PostContainer = props => {
  return (
    <PostsContainerWrapper>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </PostsContainerWrapper>
  );
};

export default PostContainer;  