import React from 'react';
 import {PostHeaderStyle, PostThumbWrapper, PostThumb} from './PostStyles';


const PostHeader = props => {
  return (
    <PostHeaderStyle>
      <PostThumbWrapper>
        <PostThumb
          alt="post header"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <div>{props.username}</div>
    </PostHeaderStyle>
  );
};
 
export default PostHeader;