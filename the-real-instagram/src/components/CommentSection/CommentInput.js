import React from 'react';
import styled from 'styled-components';

const Submit = styled.input`
  border: 1px solid white;
  padding: 15px 5px;
  width: 93%;
  border-Top: 1px solid #EEEEEE;
`;

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <Submit
      type="text" 
      placeholder="Add a comment... " 
      value={props.comment}
      onChange={props.changeComment}
      />
    </form>
  );
};
 
export default CommentInput;


