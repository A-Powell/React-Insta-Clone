import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div style = {main}>
        <span style = {user}>{props.comment.username}</span>
         <span style = {comment}>{props.comment.text}</span>
        </div>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
}

export default Comment;


const main = {
    textAlign: 'left',
    padding: '5px',
    marginLeft: '4px'
}

const comment = {
    fontWeight: '400',
    fontSize: '14px'

}

const user = {
    fontWeight: 'bold',
    fontSize: '14px',
    marginRight: '5px'
}