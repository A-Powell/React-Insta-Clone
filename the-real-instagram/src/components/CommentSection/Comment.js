import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentWrapper = styled.div`
    text-Align: left;
    padding: 5px;
    margin-Left: 4px;
`;

const Comments = styled.span`
    font-Weight: 400;
    font-Size: 14px;
`;

const Users = styled.span`
    font-Weight: bold;
    font-Size: 14px;
    margin-Right: 5px;
    `;

const Comment = props => {
    return (
        <CommentWrapper>
        <Users>{props.comment.username}</Users>
         <Comments>{props.comment.text}</Comments>
        </CommentWrapper>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
}

export default Comment;
