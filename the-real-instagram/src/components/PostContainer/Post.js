import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import {PostBorder, PostImageWrapper, PostImage} from './PostStyles';

const Post = props => {
    return (
        <PostBorder>
          <PostHeader
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl}
          />
          <PostImageWrapper>
            <PostImage
              alt="post thumbnail"
              src={props.post.imageUrl}
            />
          </PostImageWrapper>
          
          <CommentSection comments={props.post.comments} likes={props.post.likes} />
        </PostBorder>
      );
    };

    export default Post;  
    