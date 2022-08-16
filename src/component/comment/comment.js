import React from 'react';
import {
  CommentList,
  IndivComment,
  CommentNickname,
  CommentContent,
  DeleteButton,
} from '../../pages/detail/DetailStyled';

const Comment = ({ comment }) => {
  return (
    <CommentList>
      <IndivComment>
        <CommentNickname> {comment.author} </CommentNickname>
        <CommentContent> {comment.content} </CommentContent>
        <DeleteButton>🗑️</DeleteButton>
      </IndivComment>
    </CommentList>
  );
};

export default Comment;
