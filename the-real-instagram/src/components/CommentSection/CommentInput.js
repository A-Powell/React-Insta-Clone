import React from 'react';
 
const CommentInput = props => {
  return (
    <form>
      <input style={submit}
      type="text" 
      placeholder="Add a comment... " 
      value={props.comment}
      />
    </form>
  );
};
 
export default CommentInput;


const submit = {
  border: '1px solid white',
  padding: '15px 5px',
  width: '93%',
  borderTop: '1px solid #EEEEEE'
}